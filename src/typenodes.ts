import * as ast from "./ast";
import {create} from "./util";

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
    childNamespaces: Map<string, Context>;
    owner: Function | Class;

    constructor(parent?: Context) {
        this.types = new Map<string, TypeNode>();
        this.variables = new Map<string, TypeNode>();
        this.childNamespaces = new Map<string, Context>();
        this.parent = parent;
    }

    addSubContext(name: string): Context {
        let ctx = new Context(this);
        this.childNamespaces.set(name, ctx);
        return ctx;
    }

    addType(name: string, type: TypeNode) {
        let map = this.types;
        map.set(name, type);
    }

    getType(name: string,): TypeNode {
        let map = this.types;
        if (this.parent && !map) {
            return this.parent.getType(name);
        }
        let t = map.get(name);
        if (!t && this.parent) {
            return this.parent.getType(name);
        }
        if (!t) {
            throw new Error(`Type "${name}" not found`);
        }
        return t;
    }

    addVariable(name: string, type: TypeNode) {
        if (this.variables.get(name)) {
            throw new Error(`Type ${name} is already defined`)
        }
        this.variables.set(name, type);
    }

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
                t = new MetaType(t);
            }
        }
        return t;
    }
}