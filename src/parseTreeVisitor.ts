import { LuxParserVisitor } from "../parser-ts/LuxParserVisitor";
import {
  AssignStmtContext,
  BracketExprContext,
  DecStmtContext,
  EnumDecContext,
  EnumEntryPlainContext,
  EnumScopeContext,
  FnCallParamContext,
  FnCallParamsContext,
  FnCallStatementImplicitContext,
  FnCallStmtContext,
  FnDefParamFullContext,
  FnReturnTypeContext,
  FnReturnTypeSingleContext,
  FuncDecContext,
  IdentifierExprContext,
  ImplFnCallExprContext,
  InfixExprContext,
  LvalueIDContext,
  MemberExprContext,
  NumberEContext,
  ObjectLiteralExprContext,
  ProgramContext,
  ReturnStmtContext,
  ScopeContext,
  TaggedDeclarationContext,
  TagsContext,
  TypeDecContext,
  TypePlainContext,
  VarDecContext,
  TmplDefParamFullContext,
  TmplParamContext,
  NormalTypeContext,
  LvalueMemberContext,
  IfStmtContext,
  ForInfinityStmtContext,
  BreakStmtContext,
  ForStmtContext,
  ForExprStmtContext,
  ForVarDefStmtContext,
  AliasDecContext,
  TypeRefContext,
  RefExprContext,
  DerefExprContext,
  TypeFunctionPtrContext,
  StructDecContext,
  StructFieldDecContext,
  ConstructorSimpleExprContext,
  BehaviorDecContext,
  BehaviorFnDefContext,
  VarDefContext,
  LvaluePtrContext,
  TraitDecContext,
  StrConstExprContext,
} from "../parser-ts/LuxParser";
import { ErrorNode, ParseTree, RuleNode, TerminalNode } from "antlr4ts/tree";
import { ast } from "./ast";
import { create } from "./util";
import { CompilerContext, runAstExpr } from "./lib";

function decodeString(str: string): string {
  return str.slice(1, -1).replace(/\\"/g, '"');
}

export class ParseTreeVisitor implements LuxParserVisitor<ast.Node> {
  constructor(public compilerContext: CompilerContext) {}

  visitInfixExpr(ctx: InfixExprContext): ast.InfixExpr {
    return create(ast.InfixExpr, {
      operator: <ast.InfixOperator>ctx._op.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    });
  }

  visitBracketExpr(ctx: BracketExprContext): ast.Expr {
    return this.visit(ctx.expr());
  }

  visitImplFnCallExpr(ctx: ImplFnCallExprContext): ast.FunctionCallExpr {
    return create(ast.FunctionCallExpr, {
      fn: this.visit(ctx.expr()),
      params: ctx.fnCallParams()
        ? (this.visit(ctx.fnCallParams()!) as ast.Expr[])
        : [],
    });
  }

  visitFnCallParams(ctx: FnCallParamsContext): ast.Expr[] {
    return ctx.fnCallParam().map((param) => this.visit(param));
  }

  visitFnCallParam(ctx: FnCallParamContext): ast.Expr {
    return this.visit(ctx.expr()!);
  }

  visitNumberE(ctx: NumberEContext): ast.Number {
    return create(ast.Number, {
      value: +ctx._value.text!,
    });
  }

  visitObjectLiteralExpr(ctx: ObjectLiteralExprContext): ast.ObjectLiteralExpr {
    let entries = new Map<string, ast.Expr>();
    for (let entry of ctx.objectLiteralEntry()) {
      entries.set(entry.ID().text, this.visit(entry.expr()));
    }

    return create(ast.ObjectLiteralExpr, {
      entries,
    });
  }

  visitProgram(ctx: ProgramContext): ast.Program {
    let decs = ctx.taggedDeclaration();
    return create(ast.Program, {
      declarations: decs.map((dec) => this.visit(dec)),
    });
  }

  visitDecStmt(ctx: DecStmtContext): ast.Declaration {
    return this.visit(ctx.taggedDeclaration()) as ast.Declaration;
  }

  visitTaggedDeclaration(ctx: TaggedDeclarationContext): ast.Declaration {
    let dec = this.visit(ctx.declaration());
    if (ctx.tags() && dec instanceof ast.FunctionDec) {
      dec.tags = this.visit(ctx.tags()!);
      for (let tag of dec.tags) {
        runAstExpr(tag.expr, this.compilerContext);
      }
    }
    return dec;
  }

  visitTags(ctx: TagsContext): ast.Tag[] {
    return ctx.tag().map((t) => {
      return create(ast.Tag, {
        expr: this.visit(t.expr()),
      });
    });
  }

  visitVarDec(ctx: VarDecContext): ast.VarDec {
    return this.visit(ctx.varDef()) as ast.VarDec;
  }

  visitVarDef(ctx: VarDefContext): ast.VarDec {
    const initExpr = ctx.expr();
    const vtype = ctx.vtype();

    return create(ast.VarDec, {
      left: create(ast.Identifier, {
        name: ctx.ID().text,
      }),
      init: initExpr && this.visit(initExpr),
      type: vtype && this.visit(vtype),
    });
  }

  visitTypePlain(ctx: TypePlainContext): ast.Type {
    return this.visit(ctx.plainType());
  }

  visitNormalType(ctx: NormalTypeContext): ast.Type {
    return create(ast.PlainType, {
      name: ctx.ID().text,
      templateParams: ctx.tmplParam().map((p) => this.visit(p)),
    });
  }

  visitTypeRef(ctx: TypeRefContext): ast.RefType {
    return create(ast.RefType, {
      type: this.visit(ctx.plainType()),
    });
  }

  visitTypeFunctionPtr(ctx: TypeFunctionPtrContext): ast.FunctionPtrType {
    return create(ast.FunctionPtrType, {
      params: ctx
        .fnType()
        .fnDefParam()
        .map((param) => this.visit(param) as ast.VarDec),
      returns: this.visit(ctx.fnReturnType()),
    });
  }

  visitTmplParam(ctx: TmplParamContext): ast.Type {
    if (ctx.vtype()) {
      return this.visit(ctx.vtype()!);
    } else {
      throw new Error("TmplParam of unknown kind");
    }
  }

  visitIdentifierExpr(ctx: IdentifierExprContext): ast.IdentifierExpr {
    return create(ast.IdentifierExpr, {
      id: create(ast.Identifier, {
        name: ctx.ID().text,
      }),
    });
  }

  visitStrConstExpr(ctx: StrConstExprContext): ast.String {
    return create(ast.String, {
      str: decodeString(ctx._str.text!),
    });
  }

  visitRefExpr(ctx: RefExprContext): ast.RefExpr {
    return create(ast.RefExpr, {
      expr: this.visit(ctx.expr()),
    });
  }

  visitDerefExpr(ctx: DerefExprContext): ast.DerefExpr {
    return create(ast.DerefExpr, {
      expr: this.visit(ctx.expr()),
    });
  }

  visitAssignStmt(ctx: AssignStmtContext): ast.AssignmentStatement {
    return create(ast.AssignmentStatement, {
      left: this.visit(ctx.lvalue()),
      right: this.visit(ctx.expr()),
    });
  }

  visitLvalueID(ctx: LvalueIDContext): ast.IdentifierExpr {
    return create(ast.IdentifierExpr, {
      id: create(ast.Identifier, {
        name: ctx.ID().text,
      }),
    });
  }

  visitLvaluePtr(ctx: LvaluePtrContext): ast.DerefExpr {
    return create(ast.DerefExpr, {
      expr: this.visit(ctx.lvalue()),
    });
  }

  visitLvalueMember(ctx: LvalueMemberContext): ast.MemberExpr {
    return create(ast.MemberExpr, {
      object: this.visit(ctx._left),
      property: ctx._right.text!,
    });
  }

  visitTypeDec(ctx: TypeDecContext): ast.Declaration {
    return this.visit(ctx.typeDef());
  }

  visitFuncDec(ctx: FuncDecContext | BehaviorFnDefContext): ast.FunctionDec {
    let retctx: FnReturnTypeContext = ctx.fnDef().fnReturnType()!;
    let returns: ast.Type | undefined;
    if (retctx) {
      returns = this.visit(retctx);
    }

    let scope = ctx.fnDef().scope();

    const body = scope && (this.visit(scope) as ast.Scope);

    return create(ast.FunctionDec, {
      name: create(ast.Identifier, {
        name: ctx.ID().text,
      }),
      params: ctx
        .fnDef()
        .fnType()
        .fnDefParam()
        .map((param) => this.visit(param) as ast.VarDec),
      body,
      returns,
      tags: [],
    });
  }

  visitFnReturnTypeSingle(ctx: FnReturnTypeSingleContext): ast.Type {
    return this.visit(ctx.vtype());
  }

  visitFnDefParamFull(ctx: FnDefParamFullContext): ast.VarDec {
    return this.visit(ctx.varDef()) as ast.VarDec;
  }

  visitScope(ctx: ScopeContext): ast.Scope {
    let statements = ctx.statement();
    return create(ast.Scope, {
      statements: statements.map((statement) => this.visit(statement)),
    });
  }

  visitReturnStmt(ctx: ReturnStmtContext): ast.ReturnStatement {
    return create(ast.ReturnStatement, {
      expr: ctx.expr() ? this.visit(ctx.expr()!) : undefined,
    });
  }

  visitBreakStmt(_ctx: BreakStmtContext): ast.BreakStatement {
    return create(ast.BreakStatement, {});
  }

  visitEnumDec(ctx: EnumDecContext): ast.EnumDec {
    return create(ast.EnumDec, {
      name: create(ast.Identifier, {
        name: ctx.ID().text,
      }),
      entries: this.visit(ctx.enumScope()) as ast.EnumEntry[],
    });
  }

  visitEnumScope(ctx: EnumScopeContext): ast.EnumEntry[] {
    let i = 0;
    return ctx.enumEntry().map((entry) => {
      let v: ast.EnumEntry = this.visit(entry) as ast.EnumEntry;
      v.value = i++;
      return v;
    });
  }

  visitEnumEntryPlain(ctx: EnumEntryPlainContext): ast.EnumEntry {
    return create(ast.EnumEntry, {
      name: create(ast.Identifier, { name: ctx.ID().text }),
      value: null,
    });
  }

  visitAliasDec(ctx: AliasDecContext): ast.Node {
    let templateParams: ast.VarDec[] = [];

    if (ctx.tmplDefParamList()) {
      const defParams = ctx.tmplDefParamList()!.tmplDefParam();
      templateParams = defParams.map<ast.VarDec>((dec) => this.visit(dec));
    }

    return create(ast.AliasDec, {
      left: create(ast.Identifier, { name: ctx.ID().text }),
      templateParams,
      alias: this.visit(ctx.vtype()),
    });
  }

  visitFnCallStmt(ctx: FnCallStmtContext): ast.FunctionCallStmt {
    return this.visit(ctx.fnCallStatement());
  }

  visitStructDec(ctx: StructDecContext): ast.StructDec {
    const decs = ctx.structBody().structField();
    let templateParams: ast.VarDec[] = [];

    if (ctx.tmplDefParamList()) {
      const defParams = ctx.tmplDefParamList()!.tmplDefParam();
      templateParams = defParams.map<ast.VarDec>((dec) => this.visit(dec));
    }

    return create(ast.StructDec, {
      name: create(ast.Identifier, { name: ctx.ID().text }),
      declarations: decs.map((dec) => this.visit(dec)),
      templateParams,
    });
  }

  visitTmplDefParamFull(ctx: TmplDefParamFullContext): ast.VarDec {
    return this.visit(ctx.varDef()) as ast.VarDec;
  }

  visitStructFieldDec(ctx: StructFieldDecContext): ast.Declaration {
    return this.visit(ctx.varDef());
  }

  visitFnCallStatementImplicit(
    ctx: FnCallStatementImplicitContext
  ): ast.FunctionCallStmt {
    return create(ast.FunctionCallStmt, {
      fnCall: create(ast.FunctionCallExpr, {
        fn: this.visit(ctx.expr()),
        params: ctx.fnCallParams() ? this.visit(ctx.fnCallParams()!) : [],
      }),
    });
  }

  visitMemberExpr(ctx: MemberExprContext): ast.MemberExpr {
    return create(ast.MemberExpr, {
      object: this.visit(ctx._left),
      property: ctx._right.text!,
    });
  }

  visitIfStmt(ctx: IfStmtContext): ast.IfStatement {
    return create(ast.IfStatement, {
      condition: this.visit(ctx.expr()),
      scope: this.visit(ctx.scope()),
    });
  }

  visitForStmt(ctx: ForStmtContext): ast.ForStatement {
    let stmt: ast.ForStatement = this.visit(ctx.forStatement());
    stmt.scope = this.visit(ctx.scope());
    return stmt;
  }

  visitForInfinityStmt(_: ForInfinityStmtContext): ast.ForStatement {
    // Return incomplete For Statement.
    return create(ast.ForStatement, {
      scope: undefined,
    });
  }

  visitForExprStmt(ctx: ForExprStmtContext): ast.ForExprStatement {
    return create(ast.ForExprStatement, {
      expr: this.visit(ctx.expr()),
      scope: undefined,
    });
  }

  visitForVarDefStmt(ctx: ForVarDefStmtContext): ast.ForVarDefStatement {
    return create(ast.ForVarDefStatement, {
      expr: this.visit(ctx.expr()),
      id: ctx.ID().text,
      type: ctx.vtype() ? (this.visit(ctx.vtype()!) as ast.Type) : undefined,
      scope: undefined,
    });
  }

  visitConstructorSimpleExpr(
    ctx: ConstructorSimpleExprContext
  ): ast.ObjectConstructionExpr {
    let entries = new Map<string, ast.Expr>();
    for (let entry of ctx.constructorParam()) {
      entries.set(entry.ID().text, this.visit(entry.expr()));
    }

    return create(ast.ObjectConstructionExpr, {
      type: this.visit(ctx.plainType()),
      entries,
    });
  }

  visitBehaviorDec(ctx: BehaviorDecContext): ast.Behavior {
    const tmpl = ctx.tmplBehavior();

    let templateParams: string[] = [];

    if (ctx.tmplBehavior()) {
      templateParams = ctx
        .tmplBehavior()!
        .ID()
        .map((node) => node.text);
    }

    const plainType = ctx.plainType();

    return create(ast.Behavior, {
      type: ctx.ID().text,
      templateParams,
      trait: plainType ? this.visit(plainType) : undefined,
      functions: ctx
        .behaviorContent()
        .behaviorFnDef()
        .map((def) => this.visitFuncDec(def)),
    });
  }

  visitTraitDec(ctx: TraitDecContext): ast.Trait {
    let templateParams: ast.VarDec[] = [];

    if (ctx.tmplDefParamList()) {
      const defParams = ctx.tmplDefParamList()!.tmplDefParam();
      templateParams = defParams.map<ast.VarDec>((dec) => this.visit(dec));
    }

    return create(ast.Trait, {
      name: ctx.ID().text,
      templateParams,
      functions: ctx
        .traitBody()
        .traitFnDec()
        .map((dec) =>
          create(ast.TraitFnDec, {
            name: create(ast.Identifier, { name: dec.ID().text }),
            params: dec
              .fnType()
              .fnDefParam()
              .map((p) => this.visit(p) as ast.VarDec),
            returns: this.visit(dec.fnReturnType()),
          })
        ),
    });
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
