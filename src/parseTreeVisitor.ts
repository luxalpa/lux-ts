import {LuxParserVisitor} from "../parser-ts/LuxParserVisitor";
import {
    AssignStmtContext,
    BracketExprContext,
    ClassDecContext,
    ClassScopeInheritContext,
    ClassScopeDecNormalContext,
    DecStmtContext,
    EnumDecContext,
    EnumEntryPlainContext,
    EnumScopeContext,
    FnCallParamContext,
    FnCallParamsContext,
    FnCallStatementContext,
    FnCallStatementImplicitContext,
    FnCallStmtContext,
    FnDefParamFullContext,
    FnReturnTypeContext,
    FnReturnTypeSingleContext,
    FuncDecContext,
    IdentifierExprContext,
    ImplFnCallExprContext,
    InfixExprContext,
    LuxParser,
    LvalueIDContext,
    MemberExprContext,
    NumberEContext,
    ObjectLiteralExprContext,
    PlainTypeContext,
    ProgramContext,
    ReturnStmtContext,
    ScopeContext,
    TaggedDeclarationContext,
    TagsContext,
    TypeDecContext,
    TypePlainContext,
    VarDecContext,
    VarDefAssignExplicitContext,
    VarDefAssignImplicitContext,
    VarDefOnlyContext,
    TmplDefParamFullContext,
    TmplParamContext,
    NormalTypeContext,
    LvalueMemberContext,
    IfStmtContext,
    ForInfinityStmtContext, BreakStmtContext
} from "../parser-ts/LuxParser";
import {ErrorNode, ParseTree, RuleNode, TerminalNode} from "antlr4ts/tree";
import * as ast from "./ast";
import {create} from "./util";

export class ParseTreeVisitor implements LuxParserVisitor<ast.Node> {
    visitInfixExpr(ctx: InfixExprContext): ast.InfixExprNode {
        return create(ast.InfixExprNode, {
            operator: <ast.InfixOperator>ctx._op.text,
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        });
    };

    visitBracketExpr(ctx: BracketExprContext): ast.ExprNode {
        return this.visit(ctx.expr())
    }

    visitImplFnCallExpr(ctx: ImplFnCallExprContext): ast.FunctionCallExprNode {
        return create(ast.FunctionCallExprNode, {
            fn: this.visit(ctx.expr()),
            params: ctx.fnCallParams() ? this.visit(ctx.fnCallParams()) as ast.ExprNode[] : [],
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

    visitNormalType(ctx: NormalTypeContext): ast.TypeNode {
        return create(ast.TypeNode, {
            name: ctx.ID().text,
            templateParams: ctx.tmplParam().map(p => this.visit(p))
        });
    }

    visitTmplParam(ctx: TmplParamContext): ast.TypeNode | ast.ExprNode {
        if(ctx.expr()) {
            return this.visit(ctx.expr());
        } else if(ctx.vtype()) {
            return this.visit(ctx.vtype());
        } else {
            throw new Error("TmplParam of unknown kind");
        }
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
            left: this.visit(ctx.lvalue()),
            right: this.visit(ctx.expr())
        })
    }

    visitLvalueID(ctx: LvalueIDContext): ast.IdentifierExprNode {
        return create(ast.IdentifierExprNode, {
            id: create(ast.IdentifierNode, {
                name: ctx.ID().text
            })
        })
    }

    visitLvalueMember(ctx: LvalueMemberContext): ast.MemberExprNode {
        return create(ast.MemberExprNode, {
            object: this.visit(ctx._left),
            property: ctx._right.text
        });
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
            expr: ctx.expr() ? this.visit(ctx.expr()) : undefined
        })
    }

    visitBreakStmt(ctx: BreakStmtContext): ast.BreakStatementNode {
        return create(ast.BreakStatementNode, {});
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
        const decs = ctx.classScope().classScopeDec();
        let templateParams: ast.VarDecNode[] = [];

        if(ctx.tmplDefParamList()) {
            const defParams = ctx.tmplDefParamList().tmplDefParam();
            templateParams = defParams.map<ast.VarDecNode>(dec => this.visit(dec));
        }

        return create(ast.ClassDecNode, {
            name: create(ast.IdentifierNode, {name: ctx.ID().text}),
            declarations: decs.map(dec => this.visit(dec)),
            templateParams
        })
    }

    visitTmplDefParamFull(ctx: TmplDefParamFullContext): ast.VarDecNode {
        return this.visit(ctx.varDef()) as ast.VarDecNode;
    }

    visitClassScopeDecNormal(ctx: ClassScopeDecNormalContext): ast.DeclarationNode {
        return this.visit(ctx.taggedDeclaration());
    }

    visitClassScopeInherit(ctx: ClassScopeInheritContext): ast.InheritNode {
        const typeNode = this.visit(ctx.plainType()) as ast.TypeNode;

        return create(ast.InheritNode, {
            class: typeNode,
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

    visitIfStmt(ctx: IfStmtContext): ast.IfStatementNode {
        return create(ast.IfStatementNode, {
            condition: this.visit(ctx.expr()),
            scope: this.visit(ctx.scope()),
        })
    }

    visitForInfinityStmt(ctx: ForInfinityStmtContext): ast.ForStatementNode {
        return create(ast.ForStatementNode, {
            scope: this.visit(ctx.scope())
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
