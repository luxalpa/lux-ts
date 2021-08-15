import { ast } from "./ast";
import { DiagnosticsManager, NoRange } from "./diagnostics";

import * as types from "./typenodes";
import { FunctionPointer, makeFunctionType, TypeNode, Void } from "./typenodes";
import { create, getFromTypemap, TypeMap } from "./util";
import { IdentityTracker } from "./identityTracker";

interface ResolvedFunctionInfo {
  context: types.Context;
  fnType: types.Function;
  body?: ast.Scope;
}

interface TypeCheckerContext<T extends ast.Node> {
  node: T;
  context: types.Context;
  struct?: types.Struct;
  expectedType?: types.TypeNode;
}

export class TypeChecker {
  typemap: TypeMap = new Map<ast.Node, types.TypeNode>();
  tracker = new IdentityTracker(); // TODO: This is a bit messy, either we make the TypeChecker reusable or we don't.
  constructor(private diagnostics: DiagnosticsManager) {}

  checkExpr(
    node: ast.Expr
  ): {
    typemap: TypeMap;
  } {
    const mainCtx = new types.Context(this.tracker, this.diagnostics);

    this.addExternals(mainCtx);

    mainCtx.addVariable(
      "external",
      create(types.Function, {
        isStatic: false,
        name: "external",
        returns: mainCtx.getTypeByString("Void"),
        parameters: [
          mainCtx.getTypeByString("String"),
          mainCtx.getTypeByString("String"),
          mainCtx.getTypeByString("Boolean"),
        ],
        trait: types.NoTrait,
        numRequiredParams: 0,
        hasRestParam: false,
      }),
      null
    );

    mainCtx.addVariable(
      "include",
      create(types.Function, {
        isStatic: false,
        name: "include",
        returns: mainCtx.getTypeByString("Void"),
        parameters: [mainCtx.getTypeByString("String")],
        trait: types.NoTrait,
        numRequiredParams: 1,
        hasRestParam: false,
      }),
      null
    );

    this.visit({ node: node, context: mainCtx });

    return {
      typemap: this.typemap,
    };
  }

  // TODO: These need to be static functions
  checkProgram(
    tree: ast.Program
  ): {
    typemap: TypeMap;
  } {
    this.typemap = new Map<ast.Node, types.TypeNode>();

    const mainCtx = new types.Context(this.tracker, this.diagnostics);
    this.addExternals(mainCtx);

    const mainScope = {
      body: {
        statements: tree.declarations,
      },
      context: mainCtx,
    };

    const resolvedFunctions = [mainScope, ...this.resolve(mainCtx, tree)];

    for (let fn of resolvedFunctions) {
      if (!fn.body) {
        continue;
      }
      for (let stmt of fn.body.statements) {
        this.visit({ node: stmt, context: fn.context });
      }
    }

    return {
      typemap: this.typemap,
    };
  }

  // Resolve does a first run over the code in order to register all globally accessible names.
  resolve(context: types.Context, tree: ast.Program): ResolvedFunctionInfo[] {
    const methodBlocks = new Array<ast.Methods>();
    const functions = new Array<ast.FunctionDec>();
    const resolvedFunctions = new Array<ResolvedFunctionInfo>();
    const plainStructs = new Array<[types.Struct, types.StructFactory]>();
    const traits = new Array<[types.Trait, ast.Trait]>();
    const traitObjects = new Array<types.TypeWithMethods>();

    // First we parse the Structs, Enums and Aliases to get the type names
    for (const n of tree.declarations) {
      if (n instanceof ast.StructDec) {
        if (n.templateParams.length == 0) {
          const struct = new types.StructFactory(
            this,
            n,
            context,
            this.typemap
          );
          const tempStruct = new types.Struct(n.name.name);

          context.addType(n.name.name, tempStruct);
          plainStructs.push([tempStruct, struct]);
          traitObjects.push(tempStruct);
        } else {
          const factory = new types.StructFactory(
            this,
            n,
            context,
            this.typemap
          );
          context.addType(n.name.name, factory);
          traitObjects.push(factory);
        }
      } else if (n instanceof ast.EnumDec) {
        context.addType(
          n.name.name,
          create(types.Enum, {
            name: n.name.name,
            internalType: context.getTypeByString("Integer"),
            members: n.entries.map((v) => v.name.name),
            typeMethods: new types.TypeMethods(),
          })
        );
      } else if (n instanceof ast.AliasDec) {
        throw new Error("Aliases not implemented");
      }
      // We do the Behaviors and Functions later
      else if (n instanceof ast.Methods) {
        methodBlocks.push(n);
      } else if (n instanceof ast.FunctionDec) {
        functions.push(n);
      } else if (n instanceof ast.Trait) {
        const trait =
          n.templateParams.length == 0
            ? new types.Trait(n.name.name)
            : new types.TraitFactory(n.name.name);
        context.addType(n.name.name, trait);
        traits.push([trait, n]);
      }
    }

    // Structs
    for (const [tempStruct, structFactory] of plainStructs) {
      Object.assign(tempStruct, structFactory.resolve([]));
    }

    // Traits
    for (const [tempTrait, node] of traits) {
      if (tempTrait instanceof types.TraitFactory) {
        tempTrait.init(node, context);
      } else {
        tempTrait.methods = node.functions.map((n) =>
          types.makeFunctionType(n, context, tempTrait)
        );
      }
    }

    // Methods
    for (const methods of methodBlocks) {
      const behaviorContext = context.addSubContext();

      if (methods.templateParams.length > 0) {
        const struct = context.getStructFactory(methods.type.name);

        if (methods.templateParams.length !== struct.templateParams.length) {
          this.diagnostics.error(
            `Methods on type '${methods.type.name}' has incorrect number of template params`,
            methods.templateParamsRange
          );
        }

        for (
          let i = 0;
          i <
          Math.min(methods.templateParams.length, struct.templateParams.length);
          i++
        ) {
          const paramName = methods.templateParams[i];
          const paramType = struct.templateParams[i];
          behaviorContext.addType(paramName.name, paramType);
        }
      }

      let type = context.getTypeByString(methods.type.name);
      if (type == types.ErrorType) {
        this.diagnostics.error(`No such type: "${type}"`, methods.type.range);
        continue;
      }

      if (type instanceof types.StructFactory) {
        type = type.abstractStruct();
      }

      if (!(type instanceof types.TypeWithMethods)) {
        this.diagnostics.error(
          `Can't define methods on type ${getTypeName(type)}`,
          methods.type.range
        );
        continue;
      }

      let trait = types.NoTrait;
      if (methods.trait) {
        const t = context.getType(methods.trait);
        if (t instanceof types.Trait) {
          trait = t;
          this.typemap.set(methods.trait, t);
          type.typeMethods.implementedTraits.add(t);
        } else if (t != types.ErrorType) {
          this.diagnostics.error(
            `${getTypeName(t)} is not a trait.`,
            methods.trait.range
          );
        }
      }

      for (const fn of methods.functions) {
        const resolvedFn = this.parseFunctionDecNode(
          fn,
          behaviorContext,
          type,
          trait
        );

        if (trait !== types.NoTrait) {
          const traitFn = trait.methods.find(
            (traitFn) => traitFn.name === resolvedFn.fnType.name
          );
          if (!traitFn) {
            this.diagnostics.error(
              `Function ${resolvedFn.fnType.name} does not exist on trait ${trait.name}`,
              fn.range
            );
            continue;
          }
          if (!isTypeEqual(traitFn, resolvedFn.fnType)) {
            this.diagnostics.error(
              `Function ${resolvedFn.fnType.name} has a different signature than on trait ${trait.name}`,
              fn.range
            );
          }
        }

        resolvedFunctions.push(resolvedFn);
      }
    }

    // trait check if all methods are implemented

    // for (const t of traitObjects) {
    //   for (const trait of t.typeMethods.methods.keys()) {
    //     if (trait == types.NoTrait) {
    //       continue;
    //     }
    //     const fns = t.typeMethods.methods.get(trait)!;
    //     if (fns.length != trait.methods.length) {
    //       throw new Error(
    //         `Not all functions from trait ${
    //           trait.name
    //         } have been implemented on ${getTypeName(t as types.TypeNode)}`
    //       );
    //     }
    //   }
    // }

    // functions
    for (const fn of functions) {
      const fnInfo = this.parseFunctionDecNode(fn, context);
      resolvedFunctions.push(fnInfo);
      context.addVariable(fn.name.name, fnInfo.fnType, fn.name);
    }

    return resolvedFunctions;
  }

  parseFunctionDecNode(
    n: ast.FunctionDec,
    parentContext: types.Context,
    behaviorTarget?: types.TypeWithMethods,
    behaviorTrait: types.Trait = types.NoTrait
  ): ResolvedFunctionInfo {
    let context = parentContext.addSubContext();
    for (const node of n.params) {
      // TODO: This should probably be inlined here
      this.visit({ node, context });
    }
    let isStatic = false;

    let fnType = makeFunctionType(
      n,
      parentContext,
      behaviorTrait,
      behaviorTarget
    );

    context.owner = fnType;

    if (behaviorTarget) {
      if (!isStatic) {
        context.addVariable("this", behaviorTarget, null);
      }

      if (behaviorTarget instanceof types.Struct && behaviorTarget.template) {
        behaviorTarget.template.factory.addMethod(behaviorTrait, fnType);
      } else {
        behaviorTarget.typeMethods.addMethod(behaviorTrait, fnType);
      }
    }

    this.typemap.set(n, fnType);
    return {
      context,
      fnType,
      body: n.body,
    };
  }

  addExternals(context: types.Context) {
    context.addType("Integer", new types.Integer());
    context.addType("Boolean", new types.Boolean());
    context.addType("Void", new types.Void());
    context.addType("String", new types.String());
    context.addVariable("false", context.getTypeByString("Boolean"), null);
    context.addVariable("true", context.getTypeByString("Boolean"), null);

    context.addType(
      "Array",
      new types.StructFactory(
        this,
        create(ast.StructDec, {
          range: NoRange,
          declarations: [],
          name: create(ast.Identifier, {
            name: "Array",
            range: NoRange,
          }),
          templateParams: [
            create(ast.VarDec, {
              range: NoRange,
              left: create(ast.Identifier, {
                name: "T",
                range: NoRange,
              }),
              type: create(ast.PlainType, {
                name: "Type",
                templateParams: [],
                range: NoRange,
              }),
            }),
          ],
        }),
        context,
        this.typemap
      )
    );
  }

  visit(ctx: TypeCheckerContext<ast.Node>) {
    if (!ctx.node) {
      throw new Error("visit: Node to visit is undefined");
    }
    if (ctx.node.constructor.name == "Object") {
      throw new Error(`Object without type: (${JSON.stringify(ctx.node)})`);
    }

    if (
      ctx.node instanceof ast.AliasDec ||
      ctx.node instanceof ast.FunctionDec ||
      ctx.node instanceof ast.EnumDec ||
      ctx.node instanceof ast.StructDec ||
      ctx.node instanceof ast.Methods ||
      ctx.node instanceof ast.Trait
    ) {
      return;
    }

    let fn = this[
      ("visit" + ctx.node.constructor.name) as keyof TypeChecker
    ] as (ctx: TypeCheckerContext<ast.Node>) => any;
    if (!fn) {
      throw new Error(
        `TypeChecker: ${ctx.node.constructor.name} is unimplemented!`
      );
    }
    return fn.call(this, ctx);
  }

  visitVarDec(
    { node, context, struct }: TypeCheckerContext<ast.VarDec | ast.FnParamDec>,
    skipDiagnostics: boolean = false
  ) {
    let type: types.TypeNode | undefined;

    if (node.type) {
      type = context.getType(node.type);
    }

    if (node.init) {
      this.visit({ node: node.init, context, expectedType: type });
    }

    if (node.type) {
      if (node.init) {
        let t = getFromTypemap(this.typemap, node.init)!;
        if (!isTypeEqual(type!, t)) {
          !skipDiagnostics &&
            this.diagnostics.error(
              `Expected ${getTypeName(type!)}, got ${getTypeName(t!)}`,
              node.init.range
            );
        }
      }
    } else {
      type = getFromTypemap(this.typemap, node.init!)!;
    }
    if (struct) {
      if (struct.fields.has(node.left.name)) {
        !skipDiagnostics &&
          this.diagnostics.error(
            "Field in struct is already defined",
            node.range
          );
      } else {
        struct.fields.set(node.left.name, type!);
      }
    } else {
      context.addVariable(node.left.name, type!, node.left);
    }
  }

  visitFnParamDec(ctx: TypeCheckerContext<ast.FnParamDec>) {
    // Template parameters have already been checked for errors.
    const b = ctx.context.getOwner()?.belongsTo;
    if (b && b instanceof types.Struct && b.template?.params.length) {
      return this.visitVarDec(ctx, true);
    }
    return this.visitVarDec(ctx);
  }

  visitFunctionCallStmt({
    node,
    context,
  }: TypeCheckerContext<ast.FunctionCallStmt>) {
    this.visit({ node: node.fnCall, context });
  }

  visitFunctionCallExpr({
    node,
    context,
  }: TypeCheckerContext<ast.FunctionCallExpr>) {
    this.visit({ node: node.fn, context });
    const fnType = this.typemap.get(node.fn)!;

    if (fnType == types.ErrorType) {
      this.typemap.set(node, types.ErrorType);
      return;
    }

    if (!(fnType instanceof types.Function)) {
      this.diagnostics.error(
        `Function Call on ${getTypeName(fnType)}`,
        node.fn.range
      );
      this.typemap.set(node, types.ErrorType);
      return;
    }
    if (
      node.params.length < fnType.numRequiredParams ||
      (node.params.length > fnType.parameters.length && !fnType.hasRestParam)
    ) {
      this.diagnostics.error(
        "Function Call has incorrect number of arguments",
        node.range
      );
      this.typemap.set(node, types.ErrorType);
      return;
    }

    const restParamIdx = fnType.parameters.length - 1;

    for (let i = 0; i < node.params.length; i++) {
      let typeParam: types.TypeNode;

      if (fnType.hasRestParam && i >= restParamIdx) {
        const arr = fnType.parameters[restParamIdx];
        if (
          arr instanceof types.Struct &&
          arr.template?.factory == context.getStructFactory("Array")
        ) {
          typeParam = arr.template.factory.getStructParams(arr)[0];
        } else {
          // TODO: Should be checked when defining the function
          this.diagnostics.error(
            "Currently we support only Arrays as varargs",
            node.range
          );
          typeParam = types.ErrorType;
        }
      } else {
        typeParam = fnType.parameters[i];
      }

      this.visit({ node: node.params[i], context, expectedType: typeParam });
      const nodeParam = getFromTypemap(this.typemap, node.params[i]);
      if (!isTypeEqual(typeParam, nodeParam)) {
        this.diagnostics.error(
          `Type mismatch in call to function ${
            fnType.name
          }: Can't pass ${getTypeName(nodeParam)} as ${getTypeName(typeParam)}`,
          node.params[i].range
        );
      }
    }

    this.typemap.set(node, fnType.returns!);
  }

  visitMemberExpr({ node, context }: TypeCheckerContext<ast.MemberExpr>) {
    this.visit({ node: node.object, context });
    let t: types.TypeNode = getFromTypemap(
      this.typemap,
      node.object
    ) as types.Struct;

    if (!(t instanceof types.MetaType)) {
      const v = types.getMember(t, node.property.name);
      if (!v) {
        this.diagnostics.error(
          `Property '${node.property.name}' does not exist on '${getTypeName(
            t
          )}'`,
          node.property.range
        );
        this.typemap.set(node, types.ErrorType);
        return;
      }
      this.typemap.set(node, v);
    } else {
      if (t.type instanceof types.Enum) {
        const e = t.type;
        if (!e.members.includes(node.property.name)) {
          this.diagnostics.error(
            `Property ${node.property.name} not found on Enum ${e.name}`,
            node.property.range
          );
        }
        this.typemap.set(node, e);
        return;
      }

      // TODO: Static and namespaced calls

      throw new Error(`${getTypeName(t.type)} is not implemented`);
    }
  }

  visitIdentifierExpr({
    node,
    context,
  }: TypeCheckerContext<ast.IdentifierExpr>) {
    const [v, id] = context.getVariable(node.id);
    this.typemap.set(node, v);
    this.tracker.track(node, id);
  }

  visitRefExpr({ node, context }: TypeCheckerContext<ast.RefExpr>) {
    this.visit({ node: node.expr, context });

    const t = getFromTypemap(this.typemap, node.expr);
    if (t instanceof types.Function) {
      this.typemap.set(node, new FunctionPointer(t.parameters, t.returns));
    } else {
      this.typemap.set(
        node,
        create(types.RefType, {
          ref: t,
        })
      );
    }
  }

  visitDerefExpr({ node, context }: TypeCheckerContext<ast.DerefExpr>) {
    this.visit({ node: node.expr, context });
    const t = getFromTypemap(this.typemap, node.expr);

    if (t == types.ErrorType) {
      this.typemap.set(node, types.ErrorType);
      return;
    }

    if (!(t instanceof types.RefType)) {
      this.diagnostics.error("Can only dereference pointers", node.range);
      this.typemap.set(node, types.ErrorType);
      return;
    }
    this.typemap.set(node, t.ref);
  }

  visitNumber({ node, context }: TypeCheckerContext<ast.Number>) {
    this.typemap.set(node, context.getTypeByString("Integer"));
  }

  visitString({ node, context }: TypeCheckerContext<ast.String>) {
    this.typemap.set(node, context.getTypeByString("String"));
  }

  visitAssignmentStatement({
    node,
    context,
  }: TypeCheckerContext<ast.AssignmentStatement>) {
    this.visit({ node: node.left, context });
    const leftType = getFromTypemap(this.typemap, node.left);

    this.visit({ node: node.right, context, expectedType: leftType });
    const rightType = getFromTypemap(this.typemap, node.right);

    if (!isTypeEqual(leftType, rightType)) {
      this.diagnostics.error(
        `Type '${getTypeName(
          rightType
        )}' is not assignable to type '${getTypeName(leftType)}'`,
        node.right.range
      );
    }
  }

  visitInfixExpr({ node, context }: TypeCheckerContext<ast.InfixExpr>) {
    this.visit({ node: node.left, context });
    this.visit({ node: node.right, context });

    const leftType = getFromTypemap(this.typemap, node.left);
    const rightType = getFromTypemap(this.typemap, node.right);

    if (!isTypeEqual(leftType, rightType)) {
      this.diagnostics.error(
        `Operator '${node.operator}' can not be applied to types ${getTypeName(
          leftType
        )} and ${getTypeName(rightType)}`,
        node.range
      );
      this.typemap.set(node, types.ErrorType);
      return;
    }

    switch (node.operator) {
      case ast.InfixOperator.Equals:
      case ast.InfixOperator.Unequals:
        this.typemap.set(node, context.getTypeByString("Boolean"));
        break;
      default:
        this.typemap.set(node, getFromTypemap(this.typemap, node.left)!);
        break;
    }
  }

  visitReturnStatement({
    node,
    context,
  }: TypeCheckerContext<ast.ReturnStatement>) {
    if (node.expr) {
      this.visit({ node: node.expr, context });
    }

    const fn = context.getOwner();

    if (fn === null) {
      this.diagnostics.error(
        "Return statement must be inside function!",
        node.range
      );
      return;
    }

    const exprType = node.expr
      ? getFromTypemap(this.typemap, node.expr)
      : context.getTypeByString("Void");

    if (!isTypeEqual(fn.returns, exprType)) {
      this.diagnostics.error(
        `Type '${getTypeName(
          exprType
        )}' is not assignable to type '${getTypeName(fn.returns)}'`,
        node.range
      );
      return;
    }
  }

  visitArrayAccessExpr({
    node,
    context,
  }: TypeCheckerContext<ast.ArrayAccessExpr>) {
    this.visit({ node: node.array, context });
    const t = getFromTypemap(this.typemap, node.array);
    if (
      t instanceof types.Struct &&
      t.template?.factory === context.getStructFactory("Array")
    ) {
      const elementType = t.template.factory.getStructParams(t)[0];
      this.visit({ node: node.property, context, expectedType: elementType });
      const propertyType = getFromTypemap(this.typemap, node.property);
      if (!isTypeEqual(context.getTypeByString("Integer"), propertyType)) {
        this.diagnostics.error(
          `Array access type mismatch: Expected Integer, got ${getTypeName(
            propertyType
          )}`,
          node.property.range
        );
      }
      this.typemap.set(node, elementType);
    } else {
      // TODO: Implement for iterables, maps, strings
      this.diagnostics.error(
        "Array access currently only implemented for arrays",
        node.range
      );
      this.typemap.set(node, types.ErrorType);
    }
  }

  visitArrayLiteralExpr({
    node,
    context,
    expectedType,
  }: TypeCheckerContext<ast.ArrayLiteralExpr>) {
    if (expectedType) {
      let elementType: types.TypeNode;
      // If this is a native array
      if (
        expectedType instanceof types.Struct &&
        expectedType.template?.factory === context.getStructFactory("Array")
      ) {
        elementType = expectedType.template.factory.getStructParams(
          expectedType
        )[0];
      } else {
        this.diagnostics.error(
          "List initializers are currently only supported on native Arrays",
          node.range
        );
        this.typemap.set(node, expectedType);
        return;
      }

      for (const e of node.entries) {
        this.visit({ node: e, context, expectedType: elementType });

        const exp = getFromTypemap(this.typemap, e);

        if (!isTypeEqual(elementType, exp)) {
          this.diagnostics.error(
            `Expected: ${getTypeName(elementType)}, got: ${getTypeName(exp)}`,
            e.range
          );
          this.typemap.set(node, expectedType);
          return;
        }
      }

      this.typemap.set(node, expectedType);
    } else {
      // TODO: Add implicit typing
      this.diagnostics.error(
        "Using untyped Array literals is not yet supported",
        node.range
      );
      this.typemap.set(node, types.ErrorType);
    }
  }

  visitObjectLiteralExpr({
    node,
    context,
  }: TypeCheckerContext<ast.ObjectLiteralExpr>) {
    const struct = context.getType(node.type!); // TODO: Get this to work for implicit literals
    if (!(struct instanceof types.Struct)) {
      this.diagnostics.error(
        "Constructor type needs to be a struct",
        node.type!.range
      );
      this.typemap.set(node, types.ErrorType);
      return;
    }

    for (let [key, value] of node.entries) {
      const keyType = struct.fields.get(key);
      if (!keyType) {
        this.diagnostics.error(
          `Key ${key} does not exist on ${struct.name}`,
          value.range
        );
        continue;
      }

      this.visit({ node: value.expr, context, expectedType: keyType });
      let t = getFromTypemap(this.typemap, value.expr)!;

      if (!isTypeEqual(keyType, t)) {
        this.diagnostics.error(
          `Type mismatch in ${struct.name} for ${key}`,
          value.expr.range
        );
      }
    }

    this.typemap.set(node, struct);
  }

  visitIfStatement({ node, context }: TypeCheckerContext<ast.IfStatement>) {
    this.visit({ node: node.condition, context });
    if (
      getFromTypemap(this.typemap, node.condition) !==
      (context.getTypeByString("Boolean") as types.TypeNode)
    ) {
      this.diagnostics.error(
        "If condition must be Boolean",
        node.condition.range
      );
    }
    let ctx = context.addSubContext();
    for (const stmt of node.scope.statements) {
      this.visit({ node: stmt, context: ctx });
    }
  }

  visitForStatement({ node, context }: TypeCheckerContext<ast.ForStatement>) {
    let ctx = context.addSubContext();
    for (const stmt of node.scope!.statements) {
      this.visit({ node: stmt, context: ctx });
    }
  }

  visitForExprStatement({
    node,
    context,
  }: TypeCheckerContext<ast.ForExprStatement>) {
    // this.visit({node: node.expr, context});
    // const t = getFromTypemap(this.typemap, node.expr);
    // if (!(t instanceof types.Struct)) {
    //   throw new Error("For Expression needs an iterator!");
    // }
    // let found = false;
    // for (const c of t.implementedTraits()) {
    //   if (c.name === "Iterator") {
    //     // TODO: Fix for namespacing
    //     found = true;
    //     break;
    //   }
    // }
    // if (!found) {
    //   throw new Error("For Expression needs to be an Iterator!");
    // }
    //
    // let ctx = context.addSubContext();
    // for (const stmt of node.scope!.statements) {
    //   // TODO: Add visitor for scope
    //   this.visit({node: stmt, context: ctx});
    // }
  }

  visitForVarDefStatement({
    node,
    context,
  }: TypeCheckerContext<ast.ForVarDefStatement>) {
    this.visit({ node: node.expr, context });
    let ctx = context.addSubContext();

    // Resolve the Iterators type
    let trait: types.Trait = types.NoTrait;

    const t = getFromTypemap(this.typemap, node.expr);
    if (t instanceof types.Struct) {
      for (let v of t.typeMethods.implementedTraits.values()) {
        /// TODO: Fix for namespacing
        if (v.name === "Iterator") {
          trait = v;
          break;
        }
      }
    } else if (t instanceof types.Trait) {
      if (t.name === "Iterator") {
        trait = t;
      }
    }

    if (trait == types.NoTrait) {
      this.diagnostics.error(
        "For-loop must run on an Iterator",
        node.expr.range
      );
      ctx.addVariable(node.id, types.ErrorType, node);
      this.visit({ node: node.scope!, context: ctx });
      return;
    }

    const nextReturn = trait.methods.find((fn) => fn.name === "next")!.returns;

    if (!(nextReturn instanceof types.Struct)) {
      // TODO: Hardcode the Iterator struct into the language defs
      throw new Error("next function must return a struct");
    }

    const resultReturn = nextReturn.fields.get("value");

    if (!resultReturn) {
      // TODO: Hardcode the Iterator struct into the language defs
      throw new Error("result struct must have a value field");
    }

    if (node.type) {
      if (!isTypeEqual(context.getType(node.type), resultReturn)) {
        this.diagnostics.error(
          "For Expression type does not match requested type!",
          node.type.range
        );

        ctx.addVariable(node.id, types.ErrorType, node);
        this.visit({ node: node.scope!, context: ctx });
        return;
      }
    }

    ctx.addVariable(node.id, resultReturn, node);
    this.visit({ node: node.scope!, context: ctx });
  }

  visitScope({ node, context }: TypeCheckerContext<ast.Scope>) {
    for (const stmt of node.statements) {
      this.visit({ node: stmt, context });
    }
  }

  visitBreakStatement({
    node,
    context,
  }: TypeCheckerContext<ast.BreakStatement>) {
    // Intentionally left blank.
  }

  visitErrorExpr({ node, context }: TypeCheckerContext<ast.BreakStatement>) {
    this.diagnostics.error("Expression expected", node.range);
    this.typemap.set(node, types.ErrorType);
  }
}

export function isTypeEqual(
  strong: types.TypeNode,
  weak: types.TypeNode
): boolean {
  // Strong is the type that must be fulfilled, weak is the type that can be adjusted.

  if (weak === strong) {
    return true;
  }

  if (weak == types.ErrorType || strong == types.ErrorType) {
    return true;
  }

  // TODO: Implement traits

  if (strong instanceof types.Trait) {
    if (weak instanceof types.TypeWithMethods) {
      if (weak.typeMethods.implementedTraits.has(strong)) {
        return true;
      }
    }
  }

  if (strong instanceof types.RefType) {
    if (!(weak instanceof types.RefType)) {
      return false;
    }

    return isTypeEqual(strong.ref, weak.ref);
  }

  // Function pointers
  if (strong instanceof types.FunctionPointer) {
    if (weak instanceof types.FunctionPointer) {
      return isFunctionEqual(strong, weak);
    }
  }

  if (strong instanceof types.Function) {
    if (!(weak instanceof types.Function)) {
      return false;
    }

    return isFunctionEqual(strong, weak);
  }

  return false;
}

function isFunctionEqual(
  a: types.Function | types.FunctionPointer,
  b: types.Function | types.FunctionPointer
) {
  if (!isTypeEqual(a.returns!, b.returns!)) {
    return false;
  }

  if (a.parameters.length != b.parameters.length) {
    return false;
  }

  // TODO: Support methods (static and with receiver)

  for (let i = 0; i < a.parameters.length; i++) {
    if (!isTypeEqual(a.parameters[i], b.parameters[i])) {
      return false;
    }
  }

  return true;
}

export function getTypeName(t: TypeNode): string {
  if (t instanceof types.Integer) {
    return "Integer";
  }
  if (t instanceof types.Boolean) {
    return "Boolean";
  }
  if (t instanceof types.Void) {
    return "Void";
  }
  if (t instanceof types.String) {
    return "String";
  }
  if (t instanceof types.RefType) {
    return "&" + getTypeName(t.ref);
  }
  if (t instanceof types.Struct) {
    return t.name;
  }
  if (t instanceof types.StructFactory) {
    return t.getName();
  }
  if (t instanceof types.Function) {
    return `function (${t.parameters
      .map((param) => getTypeName(param))
      .join(", ")}) => ${getTypeName(t.returns)}`;
  }
  if (t instanceof types.FunctionPointer) {
    return `&function (${t.parameters
      .map((param) => getTypeName(param))
      .join(", ")}) => ${getTypeName(t.returns)}`;
  }
  return `UnknownType[${t.constructor.name}]`;
}

// export class AliasFactory extends TypeNode {
//   constructor(
//     private typeChecker: TypeChecker,
//     private node: ast.AliasDec,
//     private context: types.Context
//   ) {
//     super();
//   }
//
//   resolve(templateParams: TemplateParams): types.TypeNode {
//     const alias = this.node.alias;
//
//     if (templateParams.length > this.node.templateParams.length) {
//       throw new Error(
//         "Invocation Template Params are longer than Class Template Params"
//       );
//     }
//
//     const subcontext = this.context.addSubContext();
//
//     for (let i = 0; i < this.node.templateParams.length; i++) {
//       let paramDef = this.node.templateParams[i];
//       let paramVal = templateParams[i];
//       if (
//         paramDef.type instanceof ast.PlainType &&
//         paramDef.type.name === "Type"
//       ) {
//         subcontext.addType(paramDef.left.name, paramVal);
//       } else {
//         throw new Error(
//           "Template Params other than Type are not yet supported"
//         );
//       }
//     }
//
//     return subcontext.getType(alias);
//   }
// }
