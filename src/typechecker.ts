import { ast } from "./ast";
import * as types from "./typenodes";
import { create, getFromTypemap, TypeMap } from "./util";
import { TypeNode } from "./typenodes";

interface ResolvedFunctionInfo {
  context: types.Context;
  fnType: types.Function;
  body: ast.Scope;
}

export class TypeChecker {
  typemap: TypeMap;
  constructor(private tree: ast.Program) {}

  check(): {
    typemap: TypeMap;
  } {
    this.typemap = new Map<ast.Node, types.TypeNode>();

    const mainCtx = new types.Context();
    this.addExternals(mainCtx);

    const mainScope = {
      body: {
        statements: this.tree.declarations
      },
      context: mainCtx
    };

    const resolvedFunctions = [mainScope, ...this.resolve(mainCtx)];

    for (let fn of resolvedFunctions) {
      for (let stmt of fn.body.statements) {
        this.visit(stmt, fn.context);
      }
    }

    return {
      typemap: this.typemap
    };
  }

  // Resolve does a first run over the code in order to register all globally accessible names.
  resolve(context: types.Context): ResolvedFunctionInfo[] {
    const behaviors = new Array<ast.Behavior>();
    const functions = new Array<ast.FunctionDec>();
    const resolvedFunctions = new Array<ResolvedFunctionInfo>();

    // First we parse the Structs, Enums and Aliases to get the type names
    for (const n of this.tree.declarations) {
      if (n instanceof ast.StructDec) {
        context.addType(
          n.name.name,
          new types.StructFactory(this, n, context, this.typemap)
        );
      } else if (n instanceof ast.EnumDec) {
        context.addType(
          n.name.name,
          create(types.Enum, {
            name: n.name.name,
            internalType: context.getTypeByString("Integer"),
            members: n.entries.map(v => v.name.name),
            typeMethods: new types.TypeMethods()
          })
        );
      } else if (n instanceof ast.AliasDec) {
        throw new Error("Aliases not implemented");
      }
      // We do the Behaviors and Functions later
      else if (n instanceof ast.Behavior) {
        behaviors.push(n);
      } else if (n instanceof ast.FunctionDec) {
        functions.push(n);
      }
    }

    for (const behavior of behaviors) {
      for (const fn of behavior.functions) {
        const resolvedFn = this.parseFunctionDecNode(
          fn,
          context,
          context.getType(behavior.type),
          types.NoTrait
        );
        resolvedFunctions.push(resolvedFn);
      }
    }

    for (const fn of functions) {
      resolvedFunctions.push(this.parseFunctionDecNode(fn, context));
    }

    return resolvedFunctions;
  }

  parseFunctionDecNode(
    n: ast.FunctionDec,
    parentContext: types.Context,
    behaviorTarget?: types.TypeNode,
    behaviorTrait: types.Trait = types.NoTrait
  ): ResolvedFunctionInfo {
    let context = parentContext.addSubContext();
    n.params.forEach(value => this.visit(value, context));
    let isStatic = false;
    for (let tag of n.tags) {
      if (tag.name == "static") {
        isStatic = true;
      }
    }

    let fnType = create(types.Function, {
      name: n.name.name,
      parameters: n.params.map(value => {
        return parentContext.getType(value.type!);
      }),
      returns: n.returns
        ? parentContext.getType(n.returns)
        : parentContext.getTypeByString("Void"),
      isStatic,
      typeMethods: new types.TypeMethods(),
      belongsTo: behaviorTarget
    });

    context.owner = fnType;

    if (behaviorTarget) {
      if (!isStatic) {
        context.addVariable("this", behaviorTarget);
      }

      behaviorTarget.typeMethods.addMethod(behaviorTrait, fnType);
    }

    this.typemap.set(n, fnType);
    return {
      context: context,
      fnType,
      body: n.body!
    };
  }

  addExternals(context: types.Context) {
    context.addType("Integer", new types.Integer());
    context.addType("Boolean", new types.Boolean());
    context.addType("Void", new types.Void());

    context.addVariable(
      "log",
      create(types.Function, {
        name: "log",
        parameters: [context.getTypeByString("Integer")],
        isStatic: false,
        returns: context.getTypeByString("Void"),
        typeMethods: new types.TypeMethods()
      })
    );

    context.addVariable("false", context.getTypeByString("Boolean"));
    context.addVariable("true", context.getTypeByString("Boolean"));
  }

  visit(n: ast.Node, context: types.Context) {
    if (!n) {
      throw new Error("visit: Node to visit is undefined");
    }
    if (n.constructor.name == "Object") {
      throw new Error(`Object without type: (${JSON.stringify(n)})`);
    }

    if (
      n instanceof ast.AliasDec ||
      n instanceof ast.FunctionDec ||
      n instanceof ast.EnumDec ||
      n instanceof ast.StructDec ||
      n instanceof ast.Behavior
    ) {
      return;
    }

    let fn = this[("visit" + n.constructor.name) as keyof TypeChecker] as (
      n: ast.Node,
      context: types.Context
    ) => any;
    if (!fn) {
      throw new Error(`TypeChecker: ${n.constructor.name} is unimplemented!`);
    }
    return fn.call(this, n, context);
  }

  visitVarDec(n: ast.VarDec, context: types.Context, struct?: types.Struct) {
    let type: types.TypeNode;

    if (n.init) {
      this.visit(n.init, context);
    }

    if (n.type) {
      type = context.getType(n.type);
      if (n.init) {
        let t = getFromTypemap(this.typemap, n.init)!;
        if (!isTypeEqual(type, t)) {
          console.log(type, t);
          throw new Error("type mismatch!");
        }
      }
    } else {
      type = getFromTypemap(this.typemap, n.init!)!;
    }
    if (struct) {
      if (struct.fields.has(n.left.name)) {
        throw new Error("Field in struct is already defined");
      }
      struct.fields.set(n.left.name, type);
    } else {
      context.addVariable(n.left.name, type);
    }
  }

  visitFunctionCallStmt(n: ast.FunctionCallStmt, context: types.Context) {
    this.visit(n.fnCall, context);
  }

  visitFunctionCallExpr(n: ast.FunctionCallExpr, context: types.Context) {
    this.visit(n.fn, context);
    const fnType = this.typemap.get(n.fn)!;
    if (!(fnType instanceof types.Function)) {
      console.error(fnType);
      throw new Error("Function Call on non-function");
    }
    for (const value of n.params) {
      this.visit(value, context);
    }

    this.typemap.set(n, fnType.returns!);
  }

  visitMemberExpr(n: ast.MemberExpr, context: types.Context) {
    this.visit(n.object, context);
    let t: types.TypeNode = getFromTypemap(
      this.typemap,
      n.object
    ) as types.Struct;
    if (!(t instanceof types.MetaType)) {
      const v = types.getMember(t, n.property);
      if (!v) {
        throw new Error(
          `Property '${n.property}' does not exist on '${getTypeName(t)}'`
        );
      }
      this.typemap.set(n, v);
    } else {
      if (t.type instanceof types.Enum) {
        const e = t.type;
        if (!e.members.includes(n.property)) {
          throw `Property ${n.property} not found on Enum ${e.name}`;
        }
        this.typemap.set(n, e);
        return;
      }

      // TODO: Static and namespaced calls

      throw new Error(`${getTypeName(t.type)} is not implemented`);
    }
  }

  visitIdentifierExpr(n: ast.IdentifierExpr, context: types.Context) {
    let v = context.getVariable(n.id.name);
    this.typemap.set(n, v);
  }

  visitRefExpr(n: ast.RefExpr, context: types.Context) {
    this.visit(n.expr, context);

    this.typemap.set(
      n,
      create(types.RefType, {
        ref: getFromTypemap(this.typemap, n.expr),
        typeMethods: new types.TypeMethods()
      })
    );
  }

  visitDerefExpr(n: ast.RefExpr, context: types.Context) {
    this.visit(n.expr, context);
    const t = getFromTypemap(this.typemap, n.expr);

    if (!(t instanceof types.RefType)) {
      throw new Error("Can only dereference pointers");
    }

    this.typemap.set(n, t.ref);
  }

  visitNumber(n: ast.Number, context: types.Context) {
    this.typemap.set(n, context.getTypeByString("Integer"));
  }

  visitAssignmentStatement(n: ast.AssignmentStatement, context: types.Context) {
    this.visit(n.right, context);
    this.visit(n.left, context);

    const leftType = getFromTypemap(this.typemap, n.left);
    const rightType = getFromTypemap(this.typemap, n.right);

    if (!isTypeEqual(leftType, rightType)) {
      throw new Error(
        `Type '${getTypeName(
          rightType
        )}' is not assignable to type '${getTypeName(leftType)}'`
      );
    }
  }

  visitInfixExpr(n: ast.InfixExpr, context: types.Context) {
    this.visit(n.left, context);
    this.visit(n.right, context);

    const leftType = getFromTypemap(this.typemap, n.left);
    const rightType = getFromTypemap(this.typemap, n.right);

    if (!isTypeEqual(leftType, rightType)) {
      throw new Error(
        `Operator '${n.operator}' can not be applied to types ${getTypeName(
          leftType
        )} and ${getTypeName(rightType)}`
      );
    }

    switch (n.operator) {
      case ast.InfixOperator.Equals:
      case ast.InfixOperator.Unequals:
        this.typemap.set(n, context.getTypeByString("Boolean"));
        break;
      default:
        this.typemap.set(n, getFromTypemap(this.typemap, n.left)!);
        break;
    }
  }

  visitReturnStatement(n: ast.ReturnStatement, context: types.Context) {
    const fn = context.getOwner();

    if (fn === null) {
      throw new Error("Return statement must be inside function!");
    }

    if (n.expr) {
      this.visit(n.expr, context);
    }

    const exprType = n.expr
      ? getFromTypemap(this.typemap, n.expr)
      : context.getTypeByString("Void");

    if (!isTypeEqual(fn.returns, exprType)) {
      throw new Error(
        `Type '${getTypeName(
          exprType
        )}' is not assignable to type '${getTypeName(fn.returns)}'`
      );
    }
  }

  visitObjectConstructionExpr(
    n: ast.ObjectConstructionExpr,
    context: types.Context
  ) {
    const struct = context.getType(n.type);
    if (!(struct instanceof types.Struct)) {
      throw new Error("Constructor type needs to be a struct");
    }

    for (let [key, value] of n.entries) {
      this.visit(value, context);
      let t = getFromTypemap(this.typemap, value)!;
      const keyType = struct.fields.get(key);
      if (!keyType) {
        throw new Error(`Key ${key} does not exist on ${struct.name}`);
      }
      if (!isTypeEqual(keyType, t)) {
        throw new Error(`Type mismatch in ${struct.name} for ${key}`);
      }
    }

    this.typemap.set(n, struct);
  }

  visitIfStatement(n: ast.IfStatement, context: types.Context) {
    this.visit(n.condition, context);
    if (
      getFromTypemap(this.typemap, n.condition) !==
      (context.getTypeByString("Boolean") as types.TypeNode)
    ) {
      throw new Error("If condition must be boolean!");
    }
    let ctx = context.addSubContext();
    for (const stmt of n.scope.statements) {
      this.visit(stmt, ctx);
    }
  }

  visitForStatement(n: ast.ForStatement, context: types.Context) {
    let ctx = context.addSubContext();
    for (const stmt of n.scope!.statements) {
      this.visit(stmt, ctx);
    }
  }

  visitForExprStatement(n: ast.ForExprStatement, context: types.Context) {
    // this.visit(n.expr, context);
    // const t = getFromTypemap(this.typemap, n.expr);
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
    // for (const stmt of n.scope!.statements) {
    //   // TODO: Add visitor for scope
    //   this.visit(stmt, ctx);
    // }
  }

  visitForVarDefStatement(n: ast.ForVarDefStatement, context: types.Context) {
    // this.visit(n.expr, context);
    // let ctx = context.addSubContext();
    //
    // // Resolve the Iterators type
    // const t = getFromTypemap(this.typemap, n.expr);
    // if (!(t instanceof types.Struct)) {
    //   throw new Error("For Expression needs to be a Class!");
    // }
    // let found = false;
    // let nextType: types.TypeNode;
    // for (const c of t.implementedTraits()) {
    //   if (c.name === "Iterator") {
    //     // TODO: Fix for namespacing
    //     // TODO: Reimplement
    //
    //     // nextType = (c("next") as OverloadedFunction).functions[0]
    //     //   .returns!;
    //     // ctx.addVariable(n.id, nextType);
    //     found = true;
    //     break;
    //   }
    // }
    // if (!found) {
    //   throw new Error("For Expression needs to be an Iterator!");
    // }
    //
    // if (n.type) {
    //   if (!isTypeEqual(context.getType(n.type), nextType!)) {
    //     throw new Error("For Expression type does not match requested type!");
    //   }
    // }
    //
    // for (const stmt of n.scope!.statements) {
    //   // TODO: Add visitor for scope
    //   this.visit(stmt, ctx);
    // }
  }

  visitBreakStatement(n: ast.BreakStatement, context: types.Context) {
    // Intentionally left blank.
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

  // TODO: Implement traits

  if (strong instanceof types.RefType) {
    if (!(weak instanceof types.RefType)) {
      return false;
    }

    return isTypeEqual(strong.ref, weak.ref);
  }

  // Function pointers
  if (strong instanceof types.FunctionPointer) {
    if (!(weak instanceof types.RefType)) {
      return false;
    }

    if (!(weak.ref instanceof types.Function)) {
      return false;
    }

    const fn = weak.ref;

    if (!isTypeEqual(strong.returns!, fn.returns!)) {
      return false;
    }

    if (strong.parameters.length != fn.parameters.length) {
      return false;
    }

    // TODO: Support methods (static and with receiver)

    for (let i = 0; i < strong.parameters.length; i++) {
      if (!isTypeEqual(strong.parameters[i], fn.parameters[i])) {
        return false;
      }
    }

    return true;
  }

  return false;
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
  if (t instanceof types.RefType) {
    return "&" + getTypeName(t.ref);
  }
  if (t instanceof types.Struct) {
    return t.name;
  }
  if (t instanceof types.Function) {
    return `function (${t.parameters
      .map(param => getTypeName(param))
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
