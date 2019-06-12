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

export class ASTType implements TypeNode {

}

export class Function implements TypeNode {
    name: string;
    parameters: TypeNode[];
    returns: TypeNode;
    isStatic: boolean;
}

export class Class implements TypeNode {
    name: string;
    members: Context
}

export class MetaType implements TypeNode {
    constructor(public type: TypeNode) {
    }
}

export class Inferred implements TypeNode {
    expr: ast.ExprNode;
    context: Context;
    resolved?: TypeNode;
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

    resolve(type: TypeNode) {
        if (type instanceof Class) {
            for (let entry of this.entries) {
                let target = type.members.getVariable(entry.key);
                if (target !== entry.value) {
                    throw new Error("type mismatch in object literal");
                }
            }
            this.resolved = type;
            return;
        } else {
            throw new Error("Object literal can only be cast to classes!")
        }

    }
}

export class InterfaceImplementation {
    context: Context;
    interface: TypeNode;
}

function isOfType<T>(source: TypeNode, type: { new(...args: any[]): T; }): source is T {
    if (source instanceof type) {
        return true
    }
    if (source instanceof ObjectLiteral) {
        return source.resolved instanceof type
    }
    return false
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
    belongsToFunction: Function;
    fieldOrder: string[];
    interfaceImplementations: Map<TypeNode, InterfaceImplementation>;
    namespacedTypes: Map<string, Map<string, TypeNode>>;

    constructor(parent?: Context) {
        this.types = new Map<string, TypeNode>();
        this.variables = new Map<string, TypeNode>();
        this.childNamespaces = new Map<string, Context>();
        this.parent = parent;
        this.fieldOrder = [];
        this.namespacedTypes = new Map<string, Map<string, TypeNode>>();
        this.interfaceImplementations = new Map<string, InterfaceImplementation>();
    }

    addSubContext(name: string): Context {
        let ctx = new Context(this);
        this.childNamespaces.set(name, ctx);
        return ctx;
    }

    addType(name: string, type: TypeNode, namespace?: string) {
        let map = this.types;
        if(namespace) {
            map = this.namespacedTypes.get(namespace);
            if(!map) {
                map = new Map<string, TypeNode>();
                this.namespacedTypes.set(namespace, map);
            }
        }
        map.set(name, type);
    }

    getType(name: string, namespace?: string): TypeNode {
        let map = namespace ? this.namespacedTypes.get(namespace) : this.types;
        if (this.parent && !map) {
            return this.parent.getType(name, namespace);
        }
        if(!map) {
            throw new Error(`Namespace "${namespace}" not found`);
        }
        let t = map.get(name);
        if (!t && this.parent) {
            return this.parent.getType(name, namespace);
        }
        if (!t) {
            let str = namespace ? ` on namespace "${namespace}"` : "";
            throw new Error(`Type "${name}" not found` + str);
        }
        return t;
    }

    addVariable(name: string, type: TypeNode) {
        if (this.variables.get(name)) {
            throw new Error(`Type ${name} is already defined`)
        }
        this.variables.set(name, type);
        if (!(type instanceof Function)) {
            this.fieldOrder.push(name);
        }
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