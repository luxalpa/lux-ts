import * as ast from "./ast"
import * as ESTree from "estree"
import * as types from "./typenodes";
import {isArray} from "util";

export class Transpiler {
    constructor(private typemap: Map<ast.Node, types.TypeNode>) {
    }

    transpile(program: ast.ProgramNode): ESTree.Program {

        let stmts = [];
        for (let declaration of program.declarations) {
            let s = this.visit(declaration);
            if (isArray(s)) {
                for (let x of s) {
                    stmts.push(x)
                }
            } else {
                stmts.push(s)
            }
        }

        return {
            type: "Program",
            sourceType: "script",
            body: stmts,
        }
    }

    visit(n: ast.Node) {
        if (!n) {
            throw "visit: Node is undefined"
        }
        if (n.constructor.name == "Object") {
            throw `Object without type: (${JSON.stringify(n)})`
        }
        let fn = this['visit' + n.constructor.name];
        if (!fn) {
            throw `Transpiler: ${n.constructor.name} is unimplemented!`
        }
        return fn.call(this, n);
    }

    visitVarDecNode(e: ast.VarDecNode): ESTree.VariableDeclaration {
        return {
            declarations: [{
                type: "VariableDeclarator",
                id: {
                    type: "Identifier",
                    name: e.left.name,
                },
                init: e.init && this.visit(e.init),
            }],
            kind: "let",
            type: "VariableDeclaration",
        }
    }

    visitFunctionDecNode(e: ast.FunctionDecNode): ESTree.FunctionDeclaration {
        return {
            type: "FunctionDeclaration",
            id: this.visit(e.name),
            body: this.visit(e.body),
            params: e.params.map(param => {
                return <ESTree.Identifier> {
                    type: "Identifier",
                    name: param.left.name
                }
            }),
        }
    }

    makeFunctionExpression(e: ast.FunctionDecNode): ESTree.FunctionExpression {
        return {
            type: "FunctionExpression",
            body: this.visit(e.body),
            params: e.params.map(param => {
                return <ESTree.Identifier> {
                    type: "Identifier",
                    name: param.left.name
                }
            }),
        }
    }

    visitScopeNode(e: ast.ScopeNode): ESTree.BlockStatement {
        return {
            type: "BlockStatement",
            body: e.statements.map(statement => this.visit(statement))
        }
    }

    visitAdditionNode(e: ast.AdditionNode): ESTree.BinaryExpression {
        return {
            operator: "+",
            left: this.visit(e.left),
            right: this.visit(e.right),
            type: "BinaryExpression",
        }
    }

    visitMultiplicationNode(e: ast.MultiplicationNode): ESTree.BinaryExpression {
        return {
            operator: "*",
            left: this.visit(e.left),
            right: this.visit(e.right),
            type: "BinaryExpression",
        }
    }

    visitDivisionNode(e: ast.DivisionNode): ESTree.BinaryExpression {
        return {
            operator: "/",
            left: this.visit(e.left),
            right: this.visit(e.right),
            type: "BinaryExpression",
        }
    }

    visitSubtractionNode(e: ast.SubtractionNode): ESTree.BinaryExpression {
        return {
            operator: "-",
            left: this.visit(e.left),
            right: this.visit(e.right),
            type: "BinaryExpression",
        }
    }

    visitNumberNode(e: ast.NumberNode): ESTree.SimpleLiteral {
        return {
            type: "Literal",
            value: e.value
        }
    }

    visitIdentifierExprNode(e: ast.IdentifierExprNode): ESTree.Identifier {
        return this.visit(e.id);
    }

    visitFunctionCallExprNode(e: ast.FunctionCallExprNode): ESTree.SimpleCallExpression {
        return {
            type: "CallExpression",
            callee: this.visit(e.fn),
            arguments: e.params.map(param => this.visit(param))
        }
    }

    visitMemberExprNode(e: ast.MemberExprNode): ESTree.MemberExpression {
        return {
            type: "MemberExpression",
            object: this.visit(e.object),
            property: {
                type: "Identifier",
                name: e.property,
            },
            computed: false,
        }
    }

    visitIdentifierNode(e: ast.IdentifierNode): ESTree.Identifier {
        return {
            type: "Identifier",
            name: e.name,
        }
    }

    visitAssignmentStatementNode(e: ast.AssignmentStatementNode): ESTree.ExpressionStatement {
        return {
            type: "ExpressionStatement",
            expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: this.visit(e.left),
                right: this.visit(e.right),
            }
        }
    }

    visitEnumDecNode(e: ast.EnumDecNode): ESTree.VariableDeclaration {
        return {
            type: "VariableDeclaration",
            kind: "const",
            declarations: [
                {
                    type: "VariableDeclarator",
                    id: {
                        type: "Identifier",
                        name: e.name.name
                    },
                    init: {
                        type: "ObjectExpression",
                        properties: e.entries.map(entry => this.visit(entry))
                    }
                }
            ]
        }
    }

    visitFunctionCallStmtNode(e: ast.FunctionCallStmtNode): ESTree.ExpressionStatement {
        return {
            type: "ExpressionStatement",
            expression: this.visit(e.fnCall)
        }
    }

    visitEnumEntryNode(e: ast.EnumEntryNode): ESTree.Property {
        return {
            type: "Property",
            key: this.visit(e.name),
            value: {
                type: "Literal",
                value: e.value,
            },
            kind: "init",
            method: false,
            shorthand: false,
            computed: false,
        }
    }

    visitReturnStatementNode(e: ast.ReturnStatementNode): ESTree.ReturnStatement {
        return {
            type: "ReturnStatement",
            argument: e.expr && this.visit(e.expr)
        }
    }

    visitObjectLiteralExprNode(e: ast.ObjectLiteralExprNode): ESTree.NewExpression {
        let obj: types.ObjectLiteral = this.typemap.get(e) as types.ObjectLiteral;

        let args: ESTree.Expression[] = <ESTree.Expression[]>obj.resolved.members.fieldOrder.map(value => {
            let t = e.entries.get(value);
            if (!t) {
                return {
                    type: "Identifier",
                    name: "null"
                }
            }
            return this.visit(t);
        });

        return {
            type: "NewExpression",
            callee: {
                type: "Identifier",
                name: obj.resolved.name,
            },
            arguments: args,
        }
    }



    visitClassDecNode(e: ast.ClassDecNode) {
        let params: ESTree.Identifier[] = [];
        let assignments: ESTree.Statement[] = [];
        let stmts: ESTree.Statement[] = [];

        for(let dec of iterateInterfaces(e.declarations)) {
            switch (dec.constructor) {
                case ast.VarDecNode: {
                    let {param, stmt} = createConstrAssign((<ast.VarDecNode>dec).left.name);
                    params.push(param);
                    assignments.push(stmt);
                    break;
                }
                case ast.FunctionDecNode: {
                    let d = <ast.FunctionDecNode>dec;
                    let fn = this.makeFunctionExpression(d);
                    let fnType = this.typemap.get(d) as types.Function;
                    let st = createConstrFn(e.name.name, fnType.isStatic, this.visit(d.name), fn);
                    stmts.push(st);
                    break;
                }
                default: {
                    throw new Error(`Declaration ${dec.constructor.name} not implemented`)
                }
            }
        }

        return [{
            type: "FunctionDeclaration",
            id: this.visit(e.name),
            body: {
                type: "BlockStatement",
                body: assignments,
            },
            params: params,
        }, ...stmts]
    }
}

function createConstrFn(typename: string, isStatic: boolean, name: ESTree.Identifier, fn: ESTree.FunctionExpression): ESTree.ExpressionStatement {
    let filler: ESTree.Expression = isStatic ? name : {
        type: "MemberExpression",
        object: {
            type: "Identifier",
            name: "prototype",
        },
        property: name,
        computed: false,
    };


    return {
        type: "ExpressionStatement",
        expression: {
            type: "AssignmentExpression",
            operator: "=",
            left: {
                type: "MemberExpression",
                object: {
                    type: "Identifier",
                    name: typename,
                },
                property: filler,
                computed: false,
            },
            right: fn,
        }
    }
}

function createConstrAssign(name: string): { param: ESTree.Identifier, stmt: ESTree.ExpressionStatement } {
    let param: ESTree.Identifier = {
        type: "Identifier",
        name,
    };
    let stmt: ESTree.ExpressionStatement = {
        type: "ExpressionStatement",
        expression: {
            type: "AssignmentExpression",
            operator: "=",
            left: {
                type: "MemberExpression",
                object: {
                    type: "ThisExpression",
                },
                property: {
                    type: "Identifier",
                    name
                },
                computed: false,
            },
            right: {
                type: "Identifier",
                name
            },
        }
    };
    return {param, stmt}
}

function *iterateInterfaces(declarations: ast.DeclarationNode[]): IterableIterator<ast.DeclarationNode> {
    for(let dec of declarations) {
        if(dec instanceof ast.InterfaceImplementNode) {
            yield *iterateInterfaces(dec.declarations);
        } else {
            yield dec;
        }
    }
}