import * as ast from "./ast";
import {create} from "./util";
import {ClassFactory} from "./typechecker";

export interface TypeNode {

}

export class Enum implements TypeNode {
    name: string;
    members: string[];
    internalType: TypeNode;
}

export class Integer implements TypeNode {

}

export class Function implements TypeNode {
    name: string;
    parameters: TypeNode[];
    returns: TypeNode;
    isStatic: boolean;
}

export class Class implements TypeNode {
    name: string;
    members: Context;
    inherits: Class[];
    abstract: boolean;
}

// For using a Type like a variable, like when using Static Functions
export class MetaType implements TypeNode {
    constructor(public type: TypeNode) {
    }
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

export class Context {
    parent?: Context;
    types: Map<string, TypeNode>;
    variables: Map<string, TypeNode>;
    owner: Function | Class;

    constructor(parent?: Context) {
        this.types = new Map<string, TypeNode>();
        this.variables = new Map<string, TypeNode>();
        this.parent = parent;
    }

    addSubContext(name: string): Context {
        return new Context(this);
    }

    addType(name: string, type: TypeNode) {
        this.types.set(name, type);
    }

    *getAllContexts(): IterableIterator<Context> {
        yield this;
        if(this.parent) {
            yield *this.parent.getAllContexts();
        }
    }

    getType(name: string, params: (ast.TypeNode | ast.ExprNode)[] = []): TypeNode {

        let typeNode: TypeNode;
        for(const ctx of this.getAllContexts()) {
            typeNode = ctx.types.get(name);
            if(typeNode) {
                break
            }
        }

        if (!typeNode) {
            throw new Error(`Type "${name}" not found`);
        }

        if(typeNode instanceof ClassFactory) {
            const templateParams = params.map(param => {
                if(param instanceof ast.ExprNode) {
                    throw new Error("Expression Templates not yet supported!");
                } else {
                    return this.getType(param.name, param.templateParams);
                }
            });

            return typeNode.resolve(templateParams);
        } else if(params && params.length > 0) {
            throw new Error("Can't have Template Parameters on non-class type");
        }

        return typeNode;
    }

    addVariable(name: string, type: TypeNode) {
        if (this.variables.get(name)) {
            throw new Error(`Type ${name} is already defined`)
        }
        this.variables.set(name, type);
    }

    // TODO: Allow access to inherited stuff
    getVariable(name: string): TypeNode {
        let t = this.variables.get(name);
        if (!t) {
            t = this.types.get(name);
            if (!t) {
                if (this.parent) {
                    return this.parent.getVariable(name);
                } else {
                    throw new Error(`Variable ${name} not found`);
                }
            } else {
                if(t instanceof ClassFactory) {
                    return new MetaType(t.resolve([])); // Todo: Implement this for static generic types
                }

                return new MetaType(t);
            }
        }
        return t;
    }
}
