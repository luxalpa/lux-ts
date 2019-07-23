import * as ast from "./ast";
import * as types from "./typenodes";
import {create} from "./util";
import cloneDeep from "lodash.clonedeep"

type TypeMap = Map<ast.Node, types.TypeNode>;

export class TypeChecker {
    // Contains all the resolved classes for the Transpiler to generate.
    usedClasses: ast.ClassDecNode[];

    constructor(private tree: ast.ProgramNode) {

    }

    check(): TypeMap {
        let typeMap = new Map<ast.Node, types.TypeNode>();
        let typeResolver = new TypeResolver(this.tree, typeMap);
        let mainCtx = typeResolver.check();

        this.addExternals(mainCtx);
        for (let fn of typeResolver.functions) {
            if (!fn.body) {
                let cl = fn.context.parent.owner;
                if (cl instanceof types.Class) {
                    cl.abstract = true;
                }
            } else {
                for (let stmt of fn.body.statements) {
                    this.visit(stmt, fn.context, typeMap);
                }
            }
        }

        this.usedClasses = typeResolver.usedClasses;

        return typeMap
    }

    addExternals(context: types.Context) {
        let cc = new types.Context();
        cc.addVariable("log", create(types.Function, {
            name: "log",
            parameters: [
                context.getType("Integer")
            ],
        }));

        context.addVariable("console", create(types.Class, {
            name: "console",
            members: cc,
            inherits: [],
        }));
    }

    visit(n: ast.Node, context: types.Context, typeMap: TypeMap) {
        if (!n) {
            throw "visit: Node to visit is undefined"
        }
        if (n.constructor.name == "Object") {
            throw `Object without type: (${JSON.stringify(n)})`
        }
        let fn = this['visit' + n.constructor.name];
        if (!fn) {
            throw `TypeChecker: ${n.constructor.name} is unimplemented!`
        }
        return fn.call(this, n, context, typeMap);
    }

    visitVarDecNode(n: ast.VarDecNode, context: types.Context, typemap: TypeMap) {
        let type: types.TypeNode;

        if (n.init) {
            this.visit(n.init, context, typemap);
        }


        if (n.type) {
            type = context.getType(n.type.name, n.type.templateParams);
            if (n.init) {
                let t = typemap.get(n.init);

                if (t instanceof types.ObjectLiteral) {
                    this.resolve(t, type);
                    t = t.resolved;
                }

                if (t !== type) {
                    throw new Error("type mismatch!")
                }
            }
        } else {
            type = typemap.get(n.init);
        }
        context.addVariable(n.left.name, type);
    }

    visitFunctionCallStmtNode(n: ast.FunctionCallStmtNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.fnCall, context, typeMap);
    }

    visitFunctionCallExprNode(n: ast.FunctionCallExprNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.fn, context, typeMap);
        let fnType = typeMap.get(n.fn) as types.Function;
        if (!(fnType instanceof types.Function)) {
            throw new Error("Function Call on non-function: " + JSON.stringify(fnType))
        }
        n.params.forEach(value => {
            this.visit(value, context, typeMap);
        });
        if (fnType.parameters.length !== n.params.length) {
            throw `Function ${fnType.name} requires ${fnType.parameters.length} parameters, got ${n.params.length}`
        }

        for (let i = 0; i < fnType.parameters.length; i++) {
            if (typeMap.get(n.params[i]) !== fnType.parameters[i]) {
                throw "Function parameter types mismatch"
            }
        }
        typeMap.set(n, fnType.returns);
    }

    visitMemberExprNode(n: ast.MemberExprNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.object, context, typeMap);
        let t: types.TypeNode = typeMap.get(n.object) as types.Class;
        if (t.constructor !== types.Class) {
            if (t.constructor === types.MetaType) {
                let v = (t as types.MetaType).type;
                switch (v.constructor) {
                    case types.Enum: {
                        let e = (v as types.Enum);
                        if (!e.members.includes(n.property)) {
                            throw `Property ${n.property} not found on Enum ${e.name}`;
                        }
                        typeMap.set(n, e);
                        return;
                    }
                    case types.Class: {
                        let c = (v as types.Class);
                        let fn = c.members.getVariable(n.property);
                        if (!(fn instanceof types.Function)) {
                            throw new Error("Need a function, but got " + fn.constructor.name)
                        }
                        if (!fn.isStatic) {
                            throw new Error("Need a static function!")
                        }
                        typeMap.set(n, fn);
                        return
                    }
                    default: {
                        throw new Error(`${v.constructor.name} is not implemented`)
                    }
                }
            } else {
                throw new Error("Member expression on non-class type");
            }
        } else {
            let v = (t as types.Class).members.getVariable(n.property);
            typeMap.set(n, v);
        }
    }

    visitIdentifierExprNode(n: ast.IdentifierExprNode, context: types.Context, typeMap: TypeMap) {
        let v = context.getVariable(n.id.name);
        typeMap.set(n, v);
    }

    visitNumberNode(n: ast.NumberNode, context: types.Context, typeMap: TypeMap) {
        typeMap.set(n, context.getType("Integer"));
    }

    visitAssignmentStatementNode(n: ast.AssignmentStatementNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.right, context, typeMap);
        if (context.getVariable(n.left.name) !== typeMap.get(n.right)) {
            throw "Can't assign these values";
        }
    }

    visitAdditionNode(n: ast.AdditionNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.left, context, typeMap);
        this.visit(n.right, context, typeMap);
        if (typeMap.get(n.left) !== typeMap.get(n.right)) {
            throw "Left and right value have different type"
        }
        typeMap.set(n, typeMap.get(n.left));
    }

    visitReturnStatementNode(n: ast.ReturnStatementNode, context: types.Context, typeMap: TypeMap) {
        this.visit(n.expr, context, typeMap);
        if (!this.isTypeEqual((<types.Function>context.owner).returns, typeMap.get(n.expr))) {
            throw "Return value doesn't match to function"
        }
    }

    visitObjectLiteralExprNode(n: ast.ObjectLiteralExprNode, context: types.Context, typeMap: TypeMap) {
        let literal = new types.ObjectLiteral();
        literal.entries = [];

        for (let [key, value] of n.entries) {
            this.visit(value, context, typeMap);
            let t = typeMap.get(value);
            literal.entries.push(create(types.ObjectLiteralEntry, {
                key: key,
                value: t
            }));
        }

        typeMap.set(n, literal);
    }

    isTypeEqual(strong: types.TypeNode, weak: types.TypeNode): boolean {
        if (weak instanceof types.ObjectLiteral) {
            if (weak.resolved) {
                weak = weak.resolved;
            } else {
                this.resolve(weak, strong);
                return true;
            }
        }
        return strong === weak;
    }

    resolve(object: types.ObjectLiteral, type: types.TypeNode) {
        if (type instanceof types.Class) {
            for (let entry of object.entries) {
                let target = type.members.getVariable(entry.key);
                if (target !== entry.value) {
                    throw new Error("type mismatch in object literal");
                }
            }
            object.resolved = type;
            return;
        } else {
            throw new Error("Object literal can only be cast to classes! Was: " + type.constructor.name)
        }
    }


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

        let globalCheck: ClassCheck = {context, declarations: []};
        this.tree.declarations.forEach(n => {
            if (n instanceof ast.ClassDecNode) {
                context.addType(n.name.name, new ClassFactory(this, n, context, this.usedClasses, this.typemap));
            } else if (n instanceof ast.EnumDecNode) {
                context.addType(n.name.name, create(types.Enum, {
                    name: n.name.name,
                    internalType: context.getType("Integer"),
                    members: n.entries.map(v => v.name.name),
                }));
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

        return context
    }

    addCompilerTypes(context: types.Context) {
        context.addType("Integer", new types.Integer);
    }

    visitFunctionDecNode(n: ast.FunctionDecNode, context: types.Context) {
        let ctx = context.addSubContext(n.name.name);
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
                return context.getType(value.type.name, value.type.templateParams)
            }),
            returns: n.returns ? context.getType(n.returns.name, n.returns.templateParams) : null,
            isStatic,
        });

        ctx.owner = fnType;
        this.functions.push({
            context: ctx,
            fn: fnType,
            body: n.body,
        });

        context.addVariable(n.name.name, fnType);
        this.typemap.set(n, fnType);
    }

    visitVarDecNode(n: ast.VarDecNode, context: types.Context) {
        let type: types.TypeNode;

        if (n.type) {
            type = context.getType(n.type.name, n.type.templateParams);
            if (n.init) {
                this.addTypeChecked(n.init, context, type);
            }
        } else {
            throw new Error("Init types are not yet supported");
        }
        context.addVariable(n.left.name, type);
    }

    visitInheritNode(n: ast.InheritNode, context: types.Context) {
        let type = context.getType(n.className.name, n.templateParams);
        if (!(type instanceof types.Class)) {
            throw new Error(`${type.constructor.name} is not a Class`);
        }
        (<types.Class>context.owner).inherits.push(type);
        this.typemap.set(n.className, type);
    }

    addTypeChecked(expr: ast.ExprNode, context: types.Context, forcedType: types.TypeNode): types.TypeNode {
        let inf = create(types.SemiInferred, {
            context,
            expr,
            forcedType,
        });
        this.toBeChecked.push(inf);
        return inf;
    }

    visit(n: ast.Node, context: types.Context): types.TypeNode {
        if (!n) {
            throw "visit: Node to visit is undefined"
        }
        if (n.constructor.name == "Object") {
            throw `Object without type: (${JSON.stringify(n)})`
        }
        let fn = this['visit' + n.constructor.name];
        if (!fn) {
            throw `TypeResolver: ${n.constructor.name} is unimplemented!`
        }
        return fn.call(this, n, context);
    }
}

type TemplateParams = types.TypeNode[];

interface ResolvedType {
    params: TemplateParams;
    class: types.Class
}

export class ClassFactory {
    // TODO: More sophisticated identification method than String serialization
    private resolvedClasses: ResolvedType[] = [];

    constructor(private resolver: TypeResolver, private classDecNode: ast.ClassDecNode, private context: types.Context, private usedClasses: ast.ClassDecNode[], private typemap: TypeMap) {
    }

    private findCached(templateParams: TemplateParams): types.Class | undefined {
        const resolvedType = this.resolvedClasses.find(({params}) => {
            if(params.length !== templateParams.length) {
                return false;
            }
            for(let i = 0; i < templateParams.length; i++) {
                if(templateParams[i] !== params[i]) {
                    return false;
                }
            }
            return true;
        });

        if(resolvedType) {
            return resolvedType.class;
        }
    }

    resolve(templateParams: TemplateParams): types.Class {
        const cached = this.findCached(templateParams);
        if(cached !== undefined) {
            return cached;
        }

        const n = cloneDeep(this.classDecNode);

        this.usedClasses.push(n);

        let cl: types.Class = create(types.Class, {
            name: n.name.name,
            members: this.context.addSubContext(n.name.name),
            inherits: [],
            abstract: false,
        });
        cl.members.owner = cl;
        this.typemap.set(n, cl);

        this.resolvedClasses.push({
            class: cl,
            params: templateParams,
        });

        if(templateParams.length > this.classDecNode.templateParams.length) {
            throw new Error("Invocation Template Params are longer than Class Template Params")
        }

        for(let i = 0; i < this.classDecNode.templateParams.length; i++) {
            let paramDef = this.classDecNode.templateParams[i];
            let paramVal = templateParams[i];
            if(paramDef.type.name === "Type") {
                cl.members.addType(paramDef.left.name, paramVal)
            } else {
                throw new Error("Template Params other than Type are not yet supported");
            }
        }

        for(let dec of n.declarations) {
            this.resolver.visit(dec, cl.members);
        }

        return cl;
    }
}

function deepCopy(obj: any): any {

}
