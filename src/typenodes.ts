import * as ast from "./ast";
import { create } from "./util";
import { AliasFactory, ClassFactory } from "./typechecker";

export interface TypeNode {}

export class Enum implements TypeNode {
  name: string;
  members: string[];
  internalType: TypeNode;
}

export class Integer implements TypeNode {}

export class Boolean implements TypeNode {}

export class Function implements TypeNode {
  name: string;
  parameters: TypeNode[];
  returns: TypeNode | null;
  isStatic: boolean;
}

export class FunctionPointer implements TypeNode {
  parameters: TypeNode[];
  returns: TypeNode | null;
}

export class Class implements TypeNode {
  constructor(
    public name: string,
    public members: Context,
    public inherits: Class[] = [],
    public abstract: boolean = false
  ) {}

  getMember(name: string): TypeNode {
    let fns: Function[] = [];
    for (const c of this.allParentClasses()) {
      const member = c.members.getMember(name);
      if (member instanceof OverloadedFunction) {
        fns.push(...member.functions);
      } else if (member) {
        return member;
      }
    }
    if (fns.length > 0) {
      return create(OverloadedFunction, {
        functions: fns
      });
    }
    throw new Error(`Member ${name} not found on class ${this.name}`);
  }

  *allParentClasses(): IterableIterator<Class> {
    yield this;
    for (let parent of this.inherits) {
      yield* parent.allParentClasses();
    }
  }
}

// For using a Type like a variable, like when using Static Functions
export class MetaType implements TypeNode {
  constructor(public type: TypeNode) {}
}

// SemiInferred types need to still be typechecked
export class SemiInferred implements TypeNode {
  expr: ast.ExprNode;
  context: Context;
  forcedType: TypeNode;
}

export class ObjectLiteral implements TypeNode {
  entries: ObjectLiteralEntry[];
  resolved?: Class;
}

export class ObjectLiteralEntry {
  key: string;
  value: TypeNode;
}

export class OverloadedFunction implements TypeNode {
  functions: Function[];
}

// &Type
export class RefType implements TypeNode {
  ref: TypeNode;
}

interface ContextSymbol {
  name: string;
  type: TypeNode;
}

export class Context {
  parent?: Context;
  types: Map<string, TypeNode>;
  variables: ContextSymbol[];
  owner: Function | Class;

  constructor(parent?: Context) {
    this.types = new Map<string, TypeNode>();
    this.variables = [];
    this.parent = parent;
    if (parent) {
      this.owner = parent.owner;
    }
  }

  addSubContext(): Context {
    return new Context(this);
  }

  addType(name: string, type: TypeNode) {
    this.types.set(name, type);
  }

  *getAllContexts(): IterableIterator<Context> {
    yield this;
    if (this.parent) {
      yield* this.parent.getAllContexts();
    }
  }

  // Resolves the type of type AST nodes
  getType(node: ast.TypeNode): TypeNode {
    if (node instanceof ast.PlainTypeNode) {
      return this.getTypeByString(node.name, node.templateParams);
    }
    if (node instanceof ast.RefTypeNode) {
      const ref = this.getType(node.type);
      return create(RefType, {
        ref
      });
    }
    if (node instanceof ast.FunctionPtrTypeNode) {
      return create(FunctionPointer, {
        returns: this.getType(node.returns),
        parameters: node.params.map(p => this.getType(p.type!))
      })
    }
    console.log(node);
    throw new Error("unknown TypeNode");
  }

  getTypeByString(
    name: string,
    params: (ast.TypeNode | ast.ExprNode)[] = []
  ): TypeNode {
    let typeNode: TypeNode | undefined;
    for (const ctx of this.getAllContexts()) {
      typeNode = ctx.types.get(name);
      if (typeNode) {
        break;
      }
    }

    if (!typeNode) {
      throw new Error(`Type "${name}" not found`);
    }

    if (typeNode instanceof ClassFactory || typeNode instanceof AliasFactory) {
      const templateParams = params.map(param => {
        if (param instanceof ast.ExprNode) {
          throw new Error("Expression Templates not yet supported!");
        } else {
          return this.getType(param);
        }
      });

      return typeNode.resolve(templateParams);
    } else if (params && params.length > 0) {
      throw new Error("Can't have Template Parameters on non-class type");
    }

    return typeNode;
  }

  addVariable(name: string, type: TypeNode) {
    for (const [i, v] of this.variables.entries()) {
      if (v.name === name) {
        if (!(v.type instanceof Function)) {
          throw new Error(`Variable ${name} is already defined`);
        } else {
          // TODO: Make sure we don't define the same type twice!
        }
      }
    }
    this.variables.push({
      type,
      name
    });
  }

  getMember(name: string): TypeNode | null {
    let fns: Function[] = [];
    for (const v of this.variables) {
      if (name === v.name) {
        // Only Functions can be overloaded.
        if (!(v.type instanceof Function)) {
          return v.type;
        }
        fns.push(v.type as Function);
      }
    }

    if (fns.length == 0) {
      return null;
    }

    return create(OverloadedFunction, {
      functions: fns
    });
  }

  getVariable(name: string): TypeNode {
    let fns: Function[] = [];
    for (const ctx of this.getAllContexts()) {
      if (ctx.owner instanceof Class) {
        // Skip class members. They can only be used explicitly using getMember
        continue;
      }
      for (const v of ctx.variables) {
        if (name === v.name) {
          if (!(v.type instanceof Function)) {
            return v.type;
          }
          fns.push(v.type as Function);
        }
      }

      const type = ctx.types.get(name);
      if (type) {
        if (type instanceof ClassFactory) {
          return new MetaType(type.resolve([])); // Todo: Implement this for static generic types
        }
        return new MetaType(type);
      }
    }

    if (fns.length > 0) {
      return create(OverloadedFunction, {
        functions: fns
      });
    }

    throw new Error(`Variable ${name} not found`);
  }
}
