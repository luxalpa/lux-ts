import { ast } from "./ast";
import { create, TypeMap } from "./util";
import { getTypeName, TypeChecker } from "./typechecker";
import cloneDeep from "lodash.clonedeep";
import { IdentityTracker } from "./identityTracker";

export class TypeMethods {
  methods = new Map<Trait, Function[]>();
  implementedTraits = new Set<Trait>();

  addMethod(trait: Trait, fn: Function) {
    const fns = this.methods.get(trait) || [];
    fns.push(fn);
    if (!this.methods.has(trait)) {
      this.methods.set(trait, fns);
      this.implementedTraits.add(trait);
    }
  }
}

export class TypeNode {}

export class TypeWithMethods {
  // We can define methods on any type, so we need this as a common object.
  // We could inline this using inheritance, but that would make type creation awkward (because of the function) and we'd need custom constructors on every TypeNode.
  typeMethods: TypeMethods = new TypeMethods();
}

export class Enum extends TypeWithMethods {
  name: string;
  members: string[];
  internalType: TypeNode;
}

export class Integer extends TypeWithMethods {}

export class Boolean extends TypeWithMethods {}

export class Void extends TypeWithMethods {}

export class Function {
  name: string;
  parameters: TypeNode[];
  returns: TypeNode;
  isStatic: boolean;
  belongsTo?: TypeNode;
  trait: Trait;
}

export class FunctionPointer extends TypeNode {
  constructor(public parameters: TypeNode[], public returns: TypeNode | null) {
    super();
  }
}

export class Trait {
  methods: Function[] = [];
  constructor(public name: string) {}
}

export const NoTrait = new Trait("");

export class Struct extends TypeWithMethods {
  fields = new Map<string, TypeNode>();
  factory?: StructFactory;
  constructor(public name: string) {
    super();
  }
}

export function getMember(t: TypeNode, member: string): TypeNode | undefined {
  if (t instanceof Struct) {
    const v = t.fields.get(member);
    if (v) {
      return v;
    }
  } else if (t instanceof Trait) {
    return t.methods.find(fn => fn.name == member);
  }

  if (!(t instanceof TypeWithMethods)) {
    throw new Error(`Can't define methods on ${getTypeName(t)}`);
  }

  const fns = t.typeMethods.methods.get(NoTrait);
  if (fns) {
    const v = fns.find(fn => fn.name == member);
    if (v) {
      return v;
    }
  }

  let retFn: Function | undefined;

  for (const [trait, fns] of t.typeMethods.methods) {
    const v = fns.find(fn => fn.name == member);
    if (v) {
      if (retFn) {
        throw new Error(
          `Function ${member} has more than one possible definition.`
        );
      }
      retFn = v;
    }
  }

  return retFn;
}

// For using a Type like a variable, like when using Static Functions
export class MetaType extends TypeNode {
  constructor(public type: TypeNode) {
    super();
  }
}

export class ObjectLiteral extends TypeNode {
  entries: ObjectLiteralEntry[];
  type: Struct;
}

export class ObjectLiteralEntry {
  key: string;
  value: TypeNode;
}

// &Type
export class RefType extends TypeNode {
  constructor(public ref: TypeNode) {
    super();
  }
}

export class TemplateParam extends TypeNode {}

interface ContextSymbol {
  name: string;
  type: TypeNode;
  id: number;
}

export class Context {
  parent?: Context;
  types: Map<string, [TypeNode, number]>;
  variables: ContextSymbol[];
  owner?: Function;

  constructor(private tracker: IdentityTracker, parent?: Context) {
    this.types = new Map<string, [TypeNode, number]>();
    this.variables = [];
    this.parent = parent;
  }

  addSubContext(): Context {
    return new Context(this.tracker, this);
  }

  addType(name: string, type: TypeNode) {
    this.types.set(name, [type, this.tracker.getNextID()]);
  }

  *getAllContexts(): IterableIterator<Context> {
    yield this;
    if (this.parent) {
      yield* this.parent.getAllContexts();
    }
  }

  getStructFactory(name: string): StructFactory {
    for (const ctx of this.getAllContexts()) {
      const result = ctx.types.get(name);
      if (result) {
        const [typeNode, id] = result;
        if (typeNode instanceof StructFactory) {
          return typeNode;
        }
      }
    }
    throw new Error(`Struct '${name}' not found`);
  }

  // Resolves the type of type AST nodes
  getType(node: ast.Type): TypeNode {
    if (node instanceof ast.PlainType) {
      return this.getTypeByString(node.name, node.templateParams);
    }
    if (node instanceof ast.RefType) {
      const ref = this.getType(node.type);
      return new RefType(ref);
    }
    if (node instanceof ast.FunctionPtrType) {
      return new FunctionPointer(
        node.params.map(p => this.getType(p.type!)),
        this.getType(node.returns)
      );
    }
    console.log(node);
    throw new Error("unknown TypeNode");
  }

  getTypeByString(name: string, params: ast.Type[] = []): TypeNode {
    let typeNode: TypeNode | undefined;
    let id: number;

    for (const ctx of this.getAllContexts()) {
      const result = ctx.types.get(name);
      if (result) {
        [typeNode, id] = result;
        break;
      }
    }

    if (!typeNode) {
      throw new Error(`Type "${name}" not found`);
    }

    if (params.length > 0) {
      if (
        typeNode instanceof StructFactory ||
        typeNode instanceof TraitFactory
      ) {
        const templateParams = params.map(param => {
          if (param instanceof ast.Expr) {
            throw new Error("Expression Templates not (yet) supported!");
          } else {
            return this.getType(param);
          }
        });

        return typeNode.resolve(templateParams);
      } else {
        throw new Error("Can't have Template Parameters on this type");
      }
    }

    return typeNode;
  }

  addVariable(name: string, type: TypeNode) {
    for (const [i, v] of this.variables.entries()) {
      if (v.name === name) {
        // if (!(v.type instanceof Function)) {
        throw new Error(`Variable ${name} is already defined`);
        // } else {
        //   TODO: Make sure we don't define the same type twice! This is implemented for overloads which are currently not supported
        // }
      }
    }
    this.variables.push({
      type,
      name,
      id: this.tracker.getNextID()
    });
  }

  getOwner(): Function | null {
    if (this.owner) {
      return this.owner;
    } else if (this.parent) {
      return this.parent.getOwner();
    } else {
      return null;
    }
  }

  getVariable(name: string): [TypeNode, number] {
    for (const ctx of this.getAllContexts()) {
      const v = ctx.variables.find(e => name === e.name);
      if (v) {
        return [v.type, v.id];
      }

      const result = ctx.types.get(name);
      if (result) {
        const [type, id] = result;
        if (type instanceof StructFactory) {
          return [new MetaType(type.abstractStruct()), id]; // Todo: Implement this for static generic types
        }
        return [new MetaType(type), id];
      }
    }

    throw new Error(`Variable ${name} not found`);
  }
}

interface ResolvedType {
  params: TypeNode[];
  struct: Struct;
}

export class StructFactory extends TypeWithMethods implements TemplateFactory {
  private resolvedStructs: ResolvedType[] = [];
  templateParams: TemplateParam[] = [];

  constructor(
    private typeChecker: TypeChecker,
    private structDecNode: ast.StructDec,
    private context: Context,
    private typemap: TypeMap
  ) {
    super();
    for (let param of this.structDecNode.templateParams) {
      this.templateParams.push(new TemplateParam());
    }
  }

  getName(): string {
    return this.structDecNode.name.name;
  }

  addMethod(trait: Trait, fn: Function) {
    this.typeMethods.addMethod(trait, fn);
    for (let { params, struct } of this.resolvedStructs) {
      this.addMethodToStruct(trait, fn, params, struct);
    }
  }

  addMethodToStruct(
    trait: Trait,
    fn: Function,
    params: TypeNode[],
    struct: Struct
  ) {
    const newFn: Function = create(Function, {
      belongsTo: fn.belongsTo,
      trait: fn.trait,
      isStatic: fn.isStatic,
      name: fn.name,
      parameters: [...fn.parameters],
      returns: fn.returns
    });

    if (fn.returns instanceof TemplateParam) {
      const p = this.templateParams.findIndex(value => value == fn.returns);
      if (p != -1) {
        newFn.returns = params[p];
      }
    }

    for (let i = 0; i < fn.parameters.length; i++) {
      const param = fn.parameters[i];
      if (param instanceof TemplateParam) {
        const p = this.templateParams.findIndex(value => value == param);
        if (p != -1) {
          newFn.parameters[i] = params[p];
        }
      }
    }

    struct.typeMethods.addMethod(trait, newFn);
  }

  private findCached(templateParams: TypeNode[]): Struct | undefined {
    const resolvedType = this.resolvedStructs.find(({ params }) => {
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
      return resolvedType.struct;
    }

    return undefined;
  }

  abstractStruct(): Struct {
    return this.resolve(this.templateParams);
  }

  resolve(templateParams: TypeNode[]): Struct {
    const cached = this.findCached(templateParams);
    if (cached !== undefined) {
      return cached;
    }

    if (templateParams.length > this.structDecNode.templateParams.length) {
      throw new Error(
        "Invocation Template Params are longer than Class Template Params"
      );
    }

    const n = cloneDeep(this.structDecNode);

    let struct: Struct = new Struct(n.name.name);
    if (templateParams.length > 0) {
      // only templated structs should be back-referenced to their generic for now.
      struct.factory = this;
    }

    this.typemap.set(n, struct);

    for (let [trait, fns] of this.typeMethods.methods.entries()) {
      for (let fn of fns) {
        this.addMethodToStruct(trait, fn, templateParams, struct);
      }
    }

    this.resolvedStructs.push({
      struct,
      params: templateParams
    });

    const templateSubContext = this.context.addSubContext();

    for (let i = 0; i < this.structDecNode.templateParams.length; i++) {
      let paramDef = this.structDecNode.templateParams[i];
      let paramVal = templateParams[i];
      if (
        paramDef.type instanceof ast.PlainType &&
        paramDef.type.name === "Type"
      ) {
        templateSubContext.addType(paramDef.left.name, paramVal);
      } else {
        throw new Error(
          "Template Params other than Type are not yet supported"
        );
      }
    }

    for (let dec of n.declarations) {
      this.typeChecker.visitVarDec(dec, templateSubContext, struct);
    }

    return struct;
  }
}

type TraitFactoryCachedElement = {
  args: TypeNode[];
  trait: Trait;
};

interface TemplateFactory {
  resolve(args: TypeNode[]): TypeNode;
}

export class TraitFactory extends Trait implements TemplateFactory {
  templateParams: TemplateParam[] = [];

  cache = new Array<TraitFactoryCachedElement>();

  constructor(name: string) {
    super(name);
  }

  init(node: ast.Trait, context: Context) {
    const subContext = context.addSubContext();
    for (let templateParam of node.templateParams) {
      const p = new TemplateParam();
      subContext.addType(templateParam.left.name, p);
      this.templateParams.push(p);
    }

    for (const fn of node.functions) {
      const fnType = create(Function, {
        trait: this,
        name: fn.name.name,
        parameters: fn.params.map(p => {
          if (!p.type) {
            // TODO: Not yet implemented
            throw new Error("Parameters currently require a defined type");
          }
          return subContext.getType(p.type);
        }),
        returns: subContext.getType(fn.returns),
        isStatic: false
      });

      this.methods.push(fnType);
    }
  }

  resolve(args: TypeNode[]): Trait {
    if (this.templateParams.length !== args.length) {
      throw new Error("Template invoked with incorrect number of arguments.");
    }
    const cached = this.cache.find(e => e.args.every((t, i) => t === args[i]));

    if (cached) {
      return cached.trait;
    }

    const trait = new Trait(this.name);

    const replaceTypeParam = (t: TypeNode) => {
      const i = this.templateParams.findIndex(p => p === t);
      if (i == -1) {
        return t;
      }
      return args[i];
    };

    // build from scratch
    trait.methods = this.methods.map(method =>
      create(Function, {
        isStatic: method.isStatic,
        name: method.name,
        belongsTo: method.belongsTo,
        trait,
        returns: replaceTypeParam(method.returns),
        parameters: method.parameters.map(replaceTypeParam)
      })
    );

    this.cache.push({
      trait,
      args
    });

    return trait;
  }
}
