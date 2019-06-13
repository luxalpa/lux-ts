import {LuxParserVisitor} from "../parser-ts/LuxParserVisitor";
import {
    AssignStmtContext,
    BracketExprContext, ClassDecContext, ClassScopeInheritContext, ClassScopeDecNormalContext,
    DecStmtContext,
    EnumDecContext,
    EnumEntryPlainContext,
    EnumScopeContext,
    FnCallParamContext,
    FnCallParamsContext,
    FnCallStatementContext, FnCallStatementImplicitContext, FnCallStmtContext,
    FnDefParamFullContext, FnReturnTypeContext, FnReturnTypeSingleContext,
    FuncDecContext,
    IdentifierExprContext,
    ImplFnCallExprContext,
    InfixExprContext,
    LuxParser,
    LvalueIDContext, MemberExprContext,
    NumberEContext, ObjectLiteralExprContext,
    PlainTypeContext,
    ProgramContext,
    ReturnStmtContext,
    ScopeContext, TaggedDeclarationContext, TagsContext,
    TypeDecContext,
    TypePlainContext,
    VarDecContext, VarDefAssignExplicitContext,
    VarDefAssignImplicitContext,
    VarDefOnlyContext
} from "../parser-ts/LuxParser";
import {ErrorNode, ParseTree, RuleNode, TerminalNode} from "antlr4ts/tree";
import * as ast from "./ast";
import {create} from "./util";
import {ExprNode} from "./ast";

export class ParseTreeVisitor implements LuxParserVisitor<ast.Node> {
    visitInfixExpr(ctx: InfixExprContext): ast.Node {
        let node: ast.InfixExprNode;
        switch (ctx._op.type) {
            case LuxParser.OPPLUS:
                node = new ast.AdditionNode();
                break;
            case LuxParser.OPMULT:
                node = new ast.MultiplicationNode();
                break;
        }

        node.left = this.visit(ctx._left);
        node.right = this.visit(ctx._right);

        return node;
    };

    visitBracketExpr(ctx: BracketExprContext): ast.ExprNode {
        return this.visit(ctx.expr())
    }

    visitImplFnCallExpr(ctx: ImplFnCallExprContext): ast.FunctionCallExprNode {
        return create(ast.FunctionCallExprNode, {
            fn: this.visit(ctx.expr()),
            params: ctx.fnCallParams() ? this.visit(ctx.fnCallParams()) as ExprNode[] : [],
        })
    }

    visitFnCallParams(ctx: FnCallParamsContext): ast.ExprNode[] {
        return ctx.fnCallParam().map(param => this.visit(param))
    }

    visitFnCallParam(ctx: FnCallParamContext): ast.ExprNode {
        return this.visit(ctx.expr())
    }

    visitNumberE(ctx: NumberEContext): ast.NumberNode {
        return create(ast.NumberNode, {
            value: +ctx._value.text
        });
    };

    visitObjectLiteralExpr(ctx: ObjectLiteralExprContext): ast.ObjectLiteralExprNode {
        let entries = new Map<string, ast.ExprNode>();
        for(let entry of ctx.objectLiteralEntry()) {
            entries.set(entry.ID().text, this.visit(entry.expr()));
        }

        return create(ast.ObjectLiteralExprNode, {
            entries
        })
    }

    visitProgram(ctx: ProgramContext): ast.ProgramNode {
        let decs = ctx.taggedDeclaration();
        return create(ast.ProgramNode, {
            declarations: decs.map(dec => this.visit(dec)),
        });
    };

    visitDecStmt(ctx: DecStmtContext): ast.DeclarationNode {
        return this.visit(ctx.taggedDeclaration()) as ast.DeclarationNode
    }

    visitTaggedDeclaration(ctx: TaggedDeclarationContext): ast.DeclarationNode {
        let dec = this.visit(ctx.declaration());
        if(ctx.tags() && dec instanceof ast.FunctionDecNode) {
            dec.tags = this.visit(ctx.tags());
        }
        return dec;
    }

    visitTags(ctx: TagsContext): ast.TagNode[] {
        return ctx.tag().map(t => {
            return create(ast.TagNode, {
                name: t.ID().text
            });
        })
    }

    visitVarDec(ctx: VarDecContext): ast.VarDecNode {
        return this.visit(ctx.varDef()) as ast.VarDecNode;
    }

    visitVarDefAssignImplicit(ctx: VarDefAssignImplicitContext): ast.VarDecNode {
        return create(ast.VarDecNode, {
            left: create(ast.IdentifierNode, {
                name: ctx.ID().text
            }),
            init: this.visit(ctx.expr()),
            type: null
        })
    }

    visitVarDefAssignExplicit(ctx: VarDefAssignExplicitContext): ast.VarDecNode {
        return create(ast.VarDecNode, {
            left: create(ast.IdentifierNode, {
                name: ctx.ID().text
            }),
            init: this.visit(ctx.expr()),
            type: this.visit(ctx.vtype())
        })
    }

    visitVarDefOnly(ctx: VarDefOnlyContext): ast.VarDecNode {
        return create(ast.VarDecNode, {
            left: create(ast.IdentifierNode, {
                name: ctx.ID().text
            }),
            type: this.visit(ctx.vtype())
        })
    }

    visitTypePlain(ctx: TypePlainContext): ast.TypeNode {
        return this.visit(ctx.plainType());
    }

    visitPlainType(ctx: PlainTypeContext) {
        return create(ast.TypeNode, {
            name: ctx.ID().text
        })
    }

    visitIdentifierExpr(ctx: IdentifierExprContext): ast.IdentifierExprNode {
        return create(ast.IdentifierExprNode, {
            id: create(ast.IdentifierNode, {
                name: ctx.ID().text
            })
        })
    }

    visitAssignStmt(ctx: AssignStmtContext): ast.AssignmentStatementNode {
        return create(ast.AssignmentStatementNode, {
            left: this.visit(ctx.lvalue()) as ast.IdentifierNode,
            right: this.visit(ctx.expr())
        })
    }

    visitLvalueID(ctx: LvalueIDContext): ast.IdentifierNode {
        return create(ast.IdentifierNode, {
            name: ctx.ID().text
        })
    }

    visitTypeDec(ctx: TypeDecContext): ast.DeclarationNode {
        return this.visit(ctx.typeDef());
    }

    visitFuncDec(ctx: FuncDecContext): ast.FunctionDecNode {
        let retctx: FnReturnTypeContext = ctx.fnDef().fnReturnType();
        let returns: ast.TypeNode;
        if(retctx) {
            returns = this.visit(retctx);
        }

        let scope = ctx.fnDef().scope();

        return create(ast.FunctionDecNode, {
            name: create(ast.IdentifierNode, {
                name: ctx.ID().text
            }),
            params: ctx.fnDef().fnType().fnDefParam().map(param => this.visit(param) as ast.VarDecNode),
            body: scope ? this.visit(scope) as ast.ScopeNode : null,
            returns,
            tags: []
        })
    }

    visitFnReturnTypeSingle(ctx: FnReturnTypeSingleContext): ast.TypeNode {
        return this.visit(ctx.vtype())
    }

    visitFnDefParamFull(ctx: FnDefParamFullContext): ast.VarDecNode {
        return this.visit(ctx.varDef()) as ast.VarDecNode
    }

    visitScope(ctx: ScopeContext): ast.ScopeNode {
        let statements = ctx.statement();
        return create(ast.ScopeNode, {
            statements: statements.map(statement => this.visit(statement)),
        });
    }

    visitReturnStmt(ctx: ReturnStmtContext): ast.ReturnStatementNode {
        return create(ast.ReturnStatementNode, {
            expr: this.visit(ctx.expr())
        })
    }

    visitEnumDec(ctx: EnumDecContext): ast.EnumDecNode {
        return create(ast.EnumDecNode, {
            name: create(ast.IdentifierNode, {
                name: ctx.ID().text
            }),
            entries: this.visit(ctx.enumScope()) as ast.EnumEntryNode[]
        })
    }

    visitEnumScope(ctx: EnumScopeContext): ast.EnumEntryNode[] {
        let i = 0;
        return ctx.enumEntry().map(entry => {
            let v: ast.EnumEntryNode = this.visit(entry) as ast.EnumEntryNode;
            v.value = i++;
            return v
        });
    }

    visitEnumEntryPlain(ctx: EnumEntryPlainContext): ast.EnumEntryNode {
        return create(ast.EnumEntryNode, {
            name: create(ast.IdentifierNode, {name: ctx.ID().text}),
            value: null
        })
    }

    visitFnCallStmt(ctx: FnCallStmtContext): ast.FunctionCallStmtNode {
        return this.visit(ctx.fnCallStatement());
    }

    visitClassDec(ctx: ClassDecContext): ast.ClassDecNode {
        let decs = ctx.classScope().classScopeDec();

        return create(ast.ClassDecNode, {
            name: create(ast.IdentifierNode, {name: ctx.ID().text}),
            declarations: decs.map(dec => this.visit(dec)),
        })
    }

    visitClassScopeDecNormal(ctx: ClassScopeDecNormalContext): ast.DeclarationNode {
        return this.visit(ctx.taggedDeclaration());
    }

    visitClassScopeInherit(ctx: ClassScopeInheritContext): ast.InheritNode {
        return create(ast.InheritNode, {
            className: create(ast.IdentifierNode, {name: ctx.ID().text}),
        })
    }

    visitFnCallStatementImplicit(ctx: FnCallStatementImplicitContext): ast.FunctionCallStmtNode {
        return create(ast.FunctionCallStmtNode, {
            fnCall: create(ast.FunctionCallExprNode, {
                fn: this.visit(ctx.expr()),
                params: ctx.fnCallParams() ? this.visit(ctx.fnCallParams()) : []
            })
        })
    }

    visitMemberExpr(ctx: MemberExprContext): ast.MemberExprNode {
        return create(ast.MemberExprNode, {
            object: this.visit(ctx._left),
            property: ctx._right.text,
        })
    }

    visit(tree: ParseTree): any {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): any {
        throw "ParseTreeVisitor: " + node.constructor.name + " is unimplemented!";
    }

    visitErrorNode(node: ErrorNode): any {
        return undefined;
    }

    visitTerminal(node: TerminalNode): any {
        console.log("Visiting Terminal", node);
        return undefined;
    }
}