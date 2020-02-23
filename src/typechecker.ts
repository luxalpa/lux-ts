import * as ast from "./ast";
import { InfixOperator } from "./ast";
import * as types from "./typenodes";
import { OverloadedFunction } from "./typenodes";
import { create, getFromTypemap, TypeMap } from "./util";
import cloneDeep from "lodash.clonedeep";

export interface FunctionOverloadInfo {
  fns: types.Function[];
  name: string;
}

export class TypeChecker {
  constructor(private tree: ast.ProgramNode) {}

  check(): {
    typemap: TypeMap;
    // Contains all the resolved classes for the Transpiler to generate.
    usedClasses: ast.ClassDecNode[];
    fnOverloadInfos: FunctionOverloadInfo[];
  } {
    let typemap = new Map<ast.Node, types.TypeNode>();
    let typeResolver = new TypeResolver(this.tree, typemap);
    let mainCtx = typeResolver.check();

    this.addExternals(mainCtx);
    for (let fn of typeResolver.functions) {
      if (!fn.body) {
        let cl = fn.context.parent!.owner;
        if (cl instanceof types.Class) {
          cl.abstract = true;
        }
      } else {
        for (let stmt of fn.body.statements) {
          this.visit(stmt, fn.context, typemap);
        }
      }
    }

    return {
      typemap,
      usedClasses: typeResolver.usedClasses,
      fnOverloadInfos: findOverloadedFunctions(typemap, this.tree)
    };
  }

  addExternals(context: types.Context) {
    // let cc = new types.Context();
    // cc.addVariable(
    //   "log",
    //   create(types.Function, {
    //     name: "log",
    //     parameters: [context.getTypeByString("Integer")],
    //     isStatic: false,
    //     returns: null
    //   })
    // );
    // cc.addVariable(
    //   "log",
    //   create(types.Function, {
    //     name: "log",
    //     parameters: [context.getTypeByString("Boolean")],
    //     isStatic: false,
    //     returns: null
    //   })
    // );
    //
    // context.addVariable("console", new types.Class("console", cc));

    context.addVariable(
      "log",
      create(types.Function, {
        name: "log",
        parameters: [context.getTypeByString("Integer")],
        isStatic: false,
        returns: null
      })
    );
    context.addVariable(
      "log",
      create(types.Function, {
        name: "log",
        parameters: [context.getTypeByString("Boolean")],
        isStatic: false,
        returns: null
      })
    );

    context.addVariable("false", context.getTypeByString("Boolean"));
    context.addVariable("true", context.getTypeByString("Boolean"));
  }

  visit(n: ast.Node, context: types.Context, typemap: TypeMap) {
    if (!n) {
      throw new Error("visit: Node to visit is undefined");
    }
    if (n.constructor.name == "Object") {
      throw new Error(`Object without type: (${JSON.stringify(n)})`);
    }
    let fn = this[("visit" + n.constructor.name) as keyof TypeChecker] as (
      n: ast.Node,
      context: types.Context,
      typemap: TypeMap
    ) => any;
    if (!fn) {
      throw new Error(`TypeChecker: ${n.constructor.name} is unimplemented!`);
    }
    return fn.call(this, n, context, typemap);
  }

  visitVarDecNode(n: ast.VarDecNode, context: types.Context, typemap: TypeMap) {
    let type: types.TypeNode;

    if (n.init) {
      this.visit(n.init, context, typemap);
    }

    if (n.type) {
      type = context.getType(n.type);
      if (n.init) {
        let t = getFromTypemap(typemap, n.init)!;
        if (!isTypeEqual(type, t)) {
          throw new Error("type mismatch!");
        }
      }
    } else {
      type = getFromTypemap(typemap, n.init!)!;
    }
    context.addVariable(n.left.name, type);
  }

  visitFunctionCallStmtNode(
    n: ast.FunctionCallStmtNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.fnCall, context, typemap);
  }

  visitFunctionCallExprNode(
    n: ast.FunctionCallExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.fn, context, typemap);
    const resolvableType = typemap.get(n.fn)!;
    if (!(resolvableType instanceof types.ResolvableType)) {
      console.error(resolvableType);
      throw new Error("Did not find Resolvable");
    }
    const overloadedFns = resolvableType.resolved;
    if (!(overloadedFns instanceof types.OverloadedFunction)) {
      console.error(overloadedFns);
      throw new Error("Function Call on non-function");
    }
    n.params.forEach(value => {
      this.visit(value, context, typemap);
    });
    outerLoop: for (const fn of overloadedFns.functions) {
      if (fn.parameters.length !== n.params.length) {
        continue;
      }
      for (const [i, param] of fn.parameters.entries()) {
        if (param !== getFromTypemap(typemap, n.params[i])) {
          continue outerLoop;
        }
      }
      typemap.set(n, fn.returns!);
      resolvableType.resolved = fn;
      return;
    }

    throw new Error(`No function overload found.`);
  }

  visitMemberExprNode(
    n: ast.MemberExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.object, context, typemap);
    let t: types.TypeNode = getFromTypemap(typemap, n.object) as types.Class;
    if (t.constructor !== types.Class) {
      if (t.constructor === types.MetaType) {
        let v = (t as types.MetaType).type;
        switch (v.constructor) {
          case types.Enum: {
            let e = v as types.Enum;
            if (!e.members.includes(n.property)) {
              throw `Property ${n.property} not found on Enum ${e.name}`;
            }
            typemap.set(n, e);
            return;
          }
          case types.Class: {
            let c = v as types.Class;
            let overloadedFns = c.getMember(n.property);

            if (!(overloadedFns instanceof types.OverloadedFunction)) {
              throw new Error(
                "Need a function, but got " + overloadedFns.constructor.name
              );
            }

            const staticFns = overloadedFns.functions.filter(fn => fn.isStatic);
            if (staticFns.length === 0) {
              throw new Error("Need a static function!");
            }

            typemap.set(
              n,
              new types.ResolvableType(
                create(types.OverloadedFunction, {
                  functions: staticFns
                })
              )
            );
            return;
          }
          default: {
            throw new Error(`${v.constructor.name} is not implemented`);
          }
        }
      } else {
        throw new Error(
          `Member expression on non-class type ${t.constructor.name}`
        );
      }
    } else {
      let v = (t as types.Class).getMember(n.property);
      typemap.set(n, v);
    }
  }

  visitIdentifierExprNode(
    n: ast.IdentifierExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    let v = context.getVariable(n.id.name);
    typemap.set(n, v);
  }

  visitRefExprNode(
    n: ast.RefExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.expr, context, typemap);

    typemap.set(
      n,
      create(types.RefType, {
        ref: getFromTypemap(typemap, n.expr)
      })
    );
  }

  visitDerefExprNode(
    n: ast.RefExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.expr, context, typemap);
    const t = getFromTypemap(typemap, n.expr);

    if (!(t instanceof types.RefType)) {
      throw new Error("Can only dereference pointers");
    }

    typemap.set(n, t.ref);
  }

  visitNumberNode(n: ast.NumberNode, context: types.Context, typemap: TypeMap) {
    typemap.set(n, context.getTypeByString("Integer"));
  }

  visitAssignmentStatementNode(
    n: ast.AssignmentStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.right, context, typemap);
    this.visit(n.left, context, typemap);
    if (getFromTypemap(typemap, n.left) !== getFromTypemap(typemap, n.right)) {
      throw "Can't assign these values";
    }
  }

  visitInfixExprNode(
    n: ast.InfixExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.left, context, typemap);
    this.visit(n.right, context, typemap);
    if (getFromTypemap(typemap, n.left) !== getFromTypemap(typemap, n.right)) {
      throw "Left and right value have different type";
    }

    switch (n.operator) {
      case InfixOperator.Equals:
      case InfixOperator.Unequals:
        typemap.set(n, context.getTypeByString("Boolean"));
        break;
      default:
        typemap.set(n, getFromTypemap(typemap, n.left)!);
        break;
    }
  }

  visitReturnStatementNode(
    n: ast.ReturnStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    const fn = <types.Function>context.owner;
    if (!n.expr) {
      if (fn.returns) {
        throw new Error(
          `Function needs to return a value (${fn.returns.constructor.name})`
        );
      }
    } else {
      this.visit(n.expr, context, typemap);
      if (!fn.returns) {
        throw new Error(
          `Function should not return a value, but got (${n.expr.constructor.name})`
        );
      }

      if (!isTypeEqual(fn.returns, getFromTypemap(typemap, n.expr)!)) {
        throw "Return value doesn't match to function";
      }
    }
  }

  visitObjectLiteralExprNode(
    n: ast.ObjectLiteralExprNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    let literal = new types.ObjectLiteral();
    literal.entries = [];

    for (let [key, value] of n.entries) {
      this.visit(value, context, typemap);
      let t = getFromTypemap(typemap, value)!;
      literal.entries.push(
        create(types.ObjectLiteralEntry, {
          key: key,
          value: t
        })
      );
    }

    typemap.set(n, literal);
  }

  visitIfStatementNode(
    n: ast.IfStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.condition, context, typemap);
    if (
      getFromTypemap(typemap, n.condition) !==
      (context.getTypeByString("Boolean") as types.TypeNode)
    ) {
      throw new Error("If condition must be boolean!");
    }
    let ctx = context.addSubContext();
    for (const stmt of n.scope.statements) {
      this.visit(stmt, ctx, typemap);
    }
  }

  visitForStatementNode(
    n: ast.ForStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    let ctx = context.addSubContext();
    for (const stmt of n.scope!.statements) {
      this.visit(stmt, ctx, typemap);
    }
  }

  visitForExprStatementNode(
    n: ast.ForExprStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.expr, context, typemap);
    const t = getFromTypemap(typemap, n.expr);
    if (!(t instanceof types.Class)) {
      throw new Error("For Expression needs to be a Class!");
    }
    let found = false;
    for (const c of t.allParentClasses()) {
      if (c.name === "Iterator") {
        // TODO: Fix for namespacing
        found = true;
        break;
      }
    }
    if (!found) {
      throw new Error("For Expression needs to be an Iterator!");
    }

    let ctx = context.addSubContext();
    for (const stmt of n.scope!.statements) {
      // TODO: Add visitor for scope
      this.visit(stmt, ctx, typemap);
    }
  }

  visitForVarDefStatementNode(
    n: ast.ForVarDefStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    this.visit(n.expr, context, typemap);
    let ctx = context.addSubContext();

    // Resolve the Iterators type
    const t = getFromTypemap(typemap, n.expr);
    if (!(t instanceof types.Class)) {
      throw new Error("For Expression needs to be a Class!");
    }
    let found = false;
    let nextType: types.TypeNode;
    for (const c of t.allParentClasses()) {
      if (c.name === "Iterator") {
        // TODO: Fix for namespacing

        nextType = (c.getMember("next") as OverloadedFunction).functions[0]
          .returns!;
        ctx.addVariable(n.id, nextType);
        found = true;
        break;
      }
    }
    if (!found) {
      throw new Error("For Expression needs to be an Iterator!");
    }

    if (n.type) {
      if (!isTypeEqual(context.getType(n.type), nextType!)) {
        throw new Error("For Expression type does not match requested type!");
      }
    }

    for (const stmt of n.scope!.statements) {
      // TODO: Add visitor for scope
      this.visit(stmt, ctx, typemap);
    }
  }

  visitBreakStatementNode(
    n: ast.BreakStatementNode,
    context: types.Context,
    typemap: TypeMap
  ) {
    // Intentionally left blank.
  }
}

export function isTypeEqual(
  strong: types.TypeNode,
  weak: types.TypeNode
): boolean {
  // Strong is the type that must be fulfilled, weak is the type that can be adjusted.
  if (weak instanceof types.ObjectLiteral) {
    if (weak.resolved) {
      weak = weak.resolved;
      console.log("RARE CASE: TODO: Check this!"); // TODO
    } else {
      resolveObjectLiteral(weak, strong);
      return true;
    }
  }

  if (weak instanceof types.Class) {
    // allParentClasses also checks for the class itself
    for (let inherited of weak.allParentClasses()) {
      if (strong === inherited) {
        return true;
      }
    }
    return false;
  }

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
    let fn: types.Function;
    if (weak.ref instanceof types.OverloadedFunction) {
      if (weak.ref.functions.length !== 1) {
        // TODO: Resolve overloaded functions
        throw new Error("TODO: Resolve weak type!");
      }
      fn = weak.ref.functions[0];
    } else {
      return false;
    }

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

  return strong === weak;
}

// export function findAllOverloadedFunctions(
//   mainContext: types.Context
// ): FunctionOverloadInfo[] {
//   const infos: FunctionOverloadInfo[] = [];
//   for (const ctx of mainContext.getAllContexts()) {
//     const m = new Map<string, types.Function[]>();
//     for (const v of ctx.variables) {
//       if (!(v.type instanceof types.Function)) {
//         continue;
//       }
//
//       const symbol = m.get(v.name);
//
//       if (symbol === undefined) {
//         m.set(v.name, [v.type]);
//       } else {
//         if (symbol.length == 1) {
//           // Every element that we found more than once should eventually be returned as info.
//           infos.push({
//             name: v.name,
//             fns: symbol
//           });
//         }
//         symbol.push(v.type);
//       }
//     }
//   }
//   return infos;
// }

export function resolveObjectLiteral(
  object: types.ObjectLiteral,
  type: types.TypeNode
) {
  if (type instanceof types.Class) {
    for (let entry of object.entries) {
      let target = type.getMember(entry.key);
      if (!isTypeEqual(target, entry.value)) {
        throw new Error("type mismatch in object literal");
      }
    }
    object.resolved = type;
    return;
  } else {
    throw new Error(
      "Object literal can only be cast to classes! Was: " +
        type.constructor.name
    );
  }
}

function findOverloadedFunctions(typemap: TypeMap, tree: ast.ProgramNode): FunctionOverloadInfo[] {
  const globalFunctions = new Map<string, types.Function[]>()
  for(const dec of tree.declarations) {
    if(!(dec instanceof ast.FunctionDecNode)) {
      continue
    }

    let fns = globalFunctions.get(dec.name.name);
    if(!fns) {
      fns = []
      globalFunctions.set(dec.name.name, fns)
    }

    fns.push(getFromTypemap(typemap, dec) as types.Function)
  }

  return [...globalFunctions].filter(([, arr]) => arr.length > 1).map(([name, fns]) => ({
    name,
    fns
  }))
}

interface FunctionCheck {
  context: types.Context;
  fn: types.Function;
  body: ast.ScopeNode;
}

interface ClassCheck {
  context: types.Context;
  declarations: ast.DeclarationNode[];
}

class TypeResolver {
  toBeChecked: types.SemiInferred[];
  functions: FunctionCheck[];
  typemap: TypeMap;
  usedClasses: ast.ClassDecNode[] = [];

  constructor(private tree: ast.ProgramNode, typemap: TypeMap) {
    this.toBeChecked = [];
    this.functions = [];
    this.typemap = typemap;
  }

  check(): types.Context {
    let context = new types.Context();
    this.addCompilerTypes(context);
    // let classChecks: ClassCheck[] = [];

    let globalCheck: ClassCheck = { context, declarations: [] };
    this.tree.declarations.forEach(n => {
      if (n instanceof ast.ClassDecNode) {
        context.addType(
          n.name.name,
          new ClassFactory(this, n, context, this.usedClasses, this.typemap)
        );
      } else if (n instanceof ast.EnumDecNode) {
        context.addType(
          n.name.name,
          create(types.Enum, {
            name: n.name.name,
            internalType: context.getTypeByString("Integer"),
            members: n.entries.map(v => v.name.name)
          })
        );
      } else if (n instanceof ast.AliasDecNode) {
        context.addType(n.left.name, new AliasFactory(this, n, context));
      } else {
        globalCheck.declarations.push(n);
      }
    });

    // classChecks.push(globalCheck);

    // for (let classCheck of classChecks) {
    for (let declaration of globalCheck.declarations) {
      this.visit(declaration, globalCheck.context);
    }
    // }

    return context;
  }

  addCompilerTypes(context: types.Context) {
    context.addType("Integer", new types.Integer());
    context.addType("Boolean", new types.Boolean());
  }

  visitFunctionDecNode(n: ast.FunctionDecNode, context: types.Context) {
    let ctx = context.addSubContext();
    n.params.forEach(value => this.visit(value, ctx));
    let isStatic = false;
    for (let tag of n.tags) {
      if (tag.name == "static") {
        isStatic = true;
      }
    }

    let fnType = create(types.Function, {
      name: n.name.name,
      parameters: n.params.map(value => {
        return context.getType(value.type!);
      }),
      returns: n.returns ? context.getType(n.returns) : null,
      isStatic
    });

    ctx.owner = fnType;
    this.functions.push({
      context: ctx,
      fn: fnType,
      body: n.body!
    });

    if (!isStatic) {
      ctx.addVariable("this", context.owner); // TODO: This needs to work for functions within functions
    }

    context.addVariable(n.name.name, fnType);
    this.typemap.set(n, fnType);
  }

  visitVarDecNode(n: ast.VarDecNode, context: types.Context) {
    let type: types.TypeNode;

    if (n.type) {
      type = context.getType(n.type);
      if (n.init) {
        this.addTypeChecked(n.init, context, type);
      }
    } else {
      throw new Error("Init types are not yet supported");
    }
    context.addVariable(n.left.name, type);
  }

  visitInheritNode(n: ast.InheritNode, context: types.Context) {
    let type = context.getType(n.class);
    if (!(type instanceof types.Class)) {
      throw new Error(`${type.constructor.name} is not a Class`);
    }
    (<types.Class>context.owner).inherits.push(type);
    this.typemap.set(n.class, type);
  }

  addTypeChecked(
    expr: ast.ExprNode,
    context: types.Context,
    forcedType: types.TypeNode
  ): types.TypeNode {
    let inf = create(types.SemiInferred, {
      context,
      expr,
      forcedType
    });
    this.toBeChecked.push(inf);
    return inf;
  }

  visit(n: ast.Node, context: types.Context): types.TypeNode {
    if (!n) {
      throw "visit: Node to visit is undefined";
    }
    if (n.constructor.name == "Object") {
      throw `Object without type: (${JSON.stringify(n)})`;
    }
    let fn = this[("visit" + n.constructor.name) as keyof TypeResolver] as (
      n: ast.Node,
      context: types.Context
    ) => types.TypeNode;
    if (!fn) {
      throw `TypeResolver: ${n.constructor.name} is unimplemented!`;
    }
    return fn.call(this, n, context);
  }
}

type TemplateParams = types.TypeNode[];

interface ResolvedType {
  params: TemplateParams;
  class: types.Class;
}

export class ClassFactory {
  // TODO: More sophisticated identification method than String serialization
  private resolvedClasses: ResolvedType[] = [];

  constructor(
    private resolver: TypeResolver,
    private classDecNode: ast.ClassDecNode,
    private context: types.Context,
    private usedClasses: ast.ClassDecNode[],
    private typemap: TypeMap
  ) {}

  private findCached(templateParams: TemplateParams): types.Class | undefined {
    const resolvedType = this.resolvedClasses.find(({ params }) => {
      if (params.length !== templateParams.length) {
        return false;
      }
      for (let i = 0; i < templateParams.length; i++) {
        if (templateParams[i] !== params[i]) {
          return false;
        }
      }
      return true;
    });

    if (resolvedType) {
      return resolvedType.class;
    }

    return undefined;
  }

  resolve(templateParams: TemplateParams): types.Class {
    const cached = this.findCached(templateParams);
    if (cached !== undefined) {
      return cached;
    }

    const n = cloneDeep(this.classDecNode);

    this.usedClasses.push(n);

    let cl: types.Class = new types.Class(
      n.name.name,
      this.context.addSubContext()
    );

    cl.members.owner = cl;
    this.typemap.set(n, cl);

    this.resolvedClasses.push({
      class: cl,
      params: templateParams
    });

    if (templateParams.length > this.classDecNode.templateParams.length) {
      throw new Error(
        "Invocation Template Params are longer than Class Template Params"
      );
    }

    for (let i = 0; i < this.classDecNode.templateParams.length; i++) {
      let paramDef = this.classDecNode.templateParams[i];
      let paramVal = templateParams[i];
      if (
        paramDef.type instanceof ast.PlainTypeNode &&
        paramDef.type.name === "Type"
      ) {
        cl.members.addType(paramDef.left.name, paramVal);
      } else {
        throw new Error(
          "Template Params other than Type are not yet supported"
        );
      }
    }

    for (let dec of n.declarations) {
      this.resolver.visit(dec, cl.members);
    }

    return cl;
  }
}

export class AliasFactory {
  constructor(
    private resolver: TypeResolver,
    private node: ast.AliasDecNode,
    private context: types.Context
  ) {}

  resolve(templateParams: TemplateParams): types.TypeNode {
    const alias = this.node.alias;

    if (templateParams.length > this.node.templateParams.length) {
      throw new Error(
        "Invocation Template Params are longer than Class Template Params"
      );
    }

    const subcontext = this.context.addSubContext();

    for (let i = 0; i < this.node.templateParams.length; i++) {
      let paramDef = this.node.templateParams[i];
      let paramVal = templateParams[i];
      if (
        paramDef.type instanceof ast.PlainTypeNode &&
        paramDef.type.name === "Type"
      ) {
        subcontext.addType(paramDef.left.name, paramVal);
      } else {
        throw new Error(
          "Template Params other than Type are not yet supported"
        );
      }
    }

    return subcontext.getType(alias);
  }
}
