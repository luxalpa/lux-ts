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
  MethodsDecContext,
  MethodsFnDefContext,
  VarDefContext,
  LvaluePtrContext,
  TraitDecContext,
  StrConstExprContext,
  ArrayLiteralExprContext,
  ArrayAccessExprContext,
  LvalueArrayAccessContext,
  MacroStatementContext,
  MacroExprContext,
} from "../parser-ts/LuxParser";
import { ErrorNode, ParseTree, RuleNode, TerminalNode } from "antlr4ts/tree";
import { ast, Range } from "./ast";
import { create } from "./util";
import { CompilerContext, runAstExpr, runMacro } from "./lib";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Token } from "antlr4ts/Token";

function decodeString(str: string): string {
  return str.slice(1, -1).replace(/\\"/g, '"');
}

function getRange(ctx: ParserRuleContext): Range {
  return {
    start: {
      col: ctx.start.charPositionInLine,
      line: ctx.start.line,
    },
    end: {
      col: ctx.stop!.charPositionInLine + ctx.stop!.text!.length,
      line: ctx.stop!.line,
    },
  };
}

function getRangeFromTerminal(terminal: TerminalNode): Range {
  return getRangeFromToken(terminal.symbol);
}

function getRangeFromToken(token: Token): Range {
  return {
    start: {
      col: token.charPositionInLine,
      line: token.line,
    },
    end: {
      col: token.charPositionInLine + token.text!.length,
      line: token.line,
    },
  };
}

export class ParseTreeVisitor
  implements LuxParserVisitor<ast.Node | ast.Node[]> {
  constructor(public compilerContext: CompilerContext) {}

  visitInfixExpr(ctx: InfixExprContext): ast.InfixExpr {
    return create(ast.InfixExpr, {
      operator: <ast.InfixOperator>ctx._op.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      range: getRange(ctx),
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
      range: getRange(ctx),
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
      range: getRange(ctx),
    });
  }

  visitArrayAccessExpr(ctx: ArrayAccessExprContext): ast.ArrayAccessExpr {
    return create(ast.ArrayAccessExpr, {
      array: this.visit(ctx._array),
      property: this.visit(ctx._property),
      range: getRange(ctx),
    });
  }

  visitArrayLiteralExpr(ctx: ArrayLiteralExprContext): ast.ArrayLiteralExpr {
    return create(ast.ArrayLiteralExpr, {
      entries: ctx.expr().map((value) => this.visit(value)),
      range: getRange(ctx),
    });
  }

  visitObjectLiteralExpr(ctx: ObjectLiteralExprContext): ast.ObjectLiteralExpr {
    let entries = new Map<string, ast.Expr>();
    for (let entry of ctx.objectLiteralEntry()) {
      entries.set(entry.ID().text, this.visit(entry.expr()));
    }

    return create(ast.ObjectLiteralExpr, {
      type: ctx.plainType() && this.visit(ctx.plainType()),
      entries,
      range: getRange(ctx),
    });
  }

  visitProgram(ctx: ProgramContext): ast.Program {
    if (!ctx.children) {
      throw new Error("Expect some children!");
    }

    const declarations = new Array<ast.Declaration>();

    for (const child of ctx.children) {
      if (child instanceof MacroStatementContext) {
        const decs = runMacro(this.visit(child), this.compilerContext);
        declarations.push(...decs);
      } else if (child instanceof TaggedDeclarationContext) {
        declarations.push(this.visit(child));
      }
    }
    let decs = ctx.taggedDeclaration();
    return create(ast.Program, {
      declarations,
      range: getRange(ctx),
    });
  }

  visitMacroExpr(ctx: MacroExprContext): ast.Expr {
    return this.visit(ctx.expr());
  }

  visitDecStmt(ctx: DecStmtContext): ast.Declaration {
    return this.visit(ctx.taggedDeclaration()) as ast.Declaration;
  }

  visitTaggedDeclaration(ctx: TaggedDeclarationContext): ast.Declaration {
    let dec = this.visit(ctx.declaration());
    if (ctx.tags()) {
      dec.tags = this.visit(ctx.tags()!);
      for (let tag of dec.tags) {
        runAstExpr(tag.expr, dec, this.compilerContext);
      }
    }
    return dec;
  }

  visitTags(ctx: TagsContext): ast.Tag[] {
    return ctx.tag().map((t) => {
      return create(ast.Tag, {
        expr: this.visit(t.expr()),
        range: getRange(ctx),
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
        range: getRangeFromTerminal(ctx.ID()),
      }),
      init: initExpr && this.visit(initExpr),
      type: vtype && this.visit(vtype),
      tags: [],
      range: getRange(ctx),
    });
  }

  visitTypePlain(ctx: TypePlainContext): ast.Type {
    return this.visit(ctx.plainType());
  }

  visitNormalType(ctx: NormalTypeContext): ast.Type {
    return create(ast.PlainType, {
      name: ctx.ID().text,
      templateParams: ctx.tmplParam().map((p) => this.visit(p)),
      range: getRange(ctx),
    });
  }

  visitTypeRef(ctx: TypeRefContext): ast.RefType {
    return create(ast.RefType, {
      type: this.visit(ctx.plainType()),
      range: getRange(ctx),
    });
  }

  visitTypeFunctionPtr(ctx: TypeFunctionPtrContext): ast.FunctionPtrType {
    return create(ast.FunctionPtrType, {
      params: ctx
        .fnType()
        .fnDefParam()
        .map((param) => this.visit(param) as ast.VarDec),
      returns: this.visit(ctx.fnReturnType()),
      range: getRange(ctx),
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
        range: getRange(ctx),
      }),
      range: getRange(ctx),
    });
  }

  visitStrConstExpr(ctx: StrConstExprContext): ast.String {
    return create(ast.String, {
      str: decodeString(ctx._str.text!),
      range: getRange(ctx),
    });
  }

  visitRefExpr(ctx: RefExprContext): ast.RefExpr {
    return create(ast.RefExpr, {
      expr: this.visit(ctx.expr()),
      range: getRange(ctx),
    });
  }

  visitDerefExpr(ctx: DerefExprContext): ast.DerefExpr {
    return create(ast.DerefExpr, {
      expr: this.visit(ctx.expr()),
      range: getRange(ctx),
    });
  }

  visitAssignStmt(ctx: AssignStmtContext): ast.AssignmentStatement {
    return create(ast.AssignmentStatement, {
      left: this.visit(ctx.lvalue()),
      right: this.visit(ctx.expr()),
      range: getRange(ctx),
    });
  }

  visitLvalueID(ctx: LvalueIDContext): ast.IdentifierExpr {
    return create(ast.IdentifierExpr, {
      id: create(ast.Identifier, {
        name: ctx.ID().text,
        range: getRange(ctx),
      }),
      range: getRange(ctx),
    });
  }

  visitLvaluePtr(ctx: LvaluePtrContext): ast.DerefExpr {
    return create(ast.DerefExpr, {
      expr: this.visit(ctx.lvalue()),
      range: getRange(ctx),
    });
  }

  visitLvalueMember(ctx: LvalueMemberContext): ast.MemberExpr {
    return create(ast.MemberExpr, {
      object: this.visit(ctx._left),
      property: ctx._right.text!,
      range: getRange(ctx),
    });
  }

  visitLvalueArrayAccess(ctx: LvalueArrayAccessContext): ast.ArrayAccessExpr {
    return create(ast.ArrayAccessExpr, {
      array: this.visit(ctx._array),
      property: this.visit(ctx._property),
      range: getRange(ctx),
    });
  }

  visitTypeDec(ctx: TypeDecContext): ast.Declaration {
    return this.visit(ctx.typeDef());
  }

  visitFuncDec(ctx: FuncDecContext | MethodsFnDefContext): ast.FunctionDec {
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
        range: getRangeFromTerminal(ctx.ID()),
      }),
      params: ctx
        .fnDef()
        .fnType()
        .fnDefParam()
        .map((param) => {
          if (param instanceof FnDefParamFullContext) {
            const initExpr = param.varDef().expr();
            const vtype = param.varDef().vtype();

            return create(ast.FnParamDec, {
              left: create(ast.Identifier, {
                name: param.varDef().ID().text,
                range: getRangeFromTerminal(param.varDef().ID()),
              }),
              init: initExpr && this.visit(initExpr),
              type: vtype && this.visit(vtype),
              tags: [],
              ellipsis: !!param.OPELIPSE(),
              range: getRange(param),
            });
          } else {
            throw new Error("skip parameters are not yet defined");
          }
        }),
      body,
      returns,
      tags: [],
      range: getRange(ctx),
    });
  }

  visitFnReturnTypeSingle(ctx: FnReturnTypeSingleContext): ast.Type {
    return this.visit(ctx.vtype());
  }

  visitScope(ctx: ScopeContext): ast.Scope {
    let statements = ctx.statement();
    return create(ast.Scope, {
      statements: statements.map((statement) => this.visit(statement)),
      range: getRange(ctx),
    });
  }

  visitReturnStmt(ctx: ReturnStmtContext): ast.ReturnStatement {
    return create(ast.ReturnStatement, {
      expr: ctx.expr() ? this.visit(ctx.expr()!) : undefined,
      range: getRange(ctx),
    });
  }

  visitBreakStmt(ctx: BreakStmtContext): ast.BreakStatement {
    return create(ast.BreakStatement, {
      range: getRange(ctx),
    });
  }

  visitEnumDec(ctx: EnumDecContext): ast.EnumDec {
    return create(ast.EnumDec, {
      name: create(ast.Identifier, {
        name: ctx.ID().text,
        range: getRangeFromTerminal(ctx.ID()),
      }),
      entries: this.visit(ctx.enumScope()) as ast.EnumEntry[],
      tags: [],
      range: getRange(ctx),
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
      name: create(ast.Identifier, {
        name: ctx.ID().text,
        range: getRangeFromTerminal(ctx.ID()),
      }),
      value: null,
      range: getRange(ctx),
    });
  }

  visitAliasDec(ctx: AliasDecContext): ast.Node {
    let templateParams: ast.VarDec[] = [];

    if (ctx.tmplDefParamList()) {
      const defParams = ctx.tmplDefParamList()!.tmplDefParam();
      templateParams = defParams.map<ast.VarDec>((dec) => this.visit(dec));
    }

    return create(ast.AliasDec, {
      left: create(ast.Identifier, {
        name: ctx.ID().text,
        range: getRangeFromTerminal(ctx.ID()),
      }),
      templateParams,
      alias: this.visit(ctx.vtype()),
      tags: [],
      range: getRange(ctx),
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
      name: create(ast.Identifier, {
        name: ctx.ID().text,
        range: getRangeFromTerminal(ctx.ID()),
      }),
      declarations: decs.map((dec) => this.visit(dec)),
      templateParams,
      tags: [],
      range: getRange(ctx),
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
        range: getRange(ctx),
      }),
      range: getRange(ctx),
    });
  }

  visitMemberExpr(ctx: MemberExprContext): ast.MemberExpr {
    return create(ast.MemberExpr, {
      object: this.visit(ctx._left),
      property: ctx._right.text!,
      range: getRange(ctx),
    });
  }

  visitIfStmt(ctx: IfStmtContext): ast.IfStatement {
    return create(ast.IfStatement, {
      condition: this.visit(ctx.expr()),
      scope: this.visit(ctx.scope()),
      range: getRange(ctx),
    });
  }

  visitForStmt(ctx: ForStmtContext): ast.ForStatement {
    let stmt: ast.ForStatement = this.visit(ctx.forStatement());
    stmt.scope = this.visit(ctx.scope());
    return stmt;
  }

  visitForInfinityStmt(ctx: ForInfinityStmtContext): ast.ForStatement {
    // Return incomplete For Statement.
    return create(ast.ForStatement, {
      scope: undefined,
      range: getRange(ctx),
    });
  }

  visitForExprStmt(ctx: ForExprStmtContext): ast.ForExprStatement {
    return create(ast.ForExprStatement, {
      expr: this.visit(ctx.expr()),
      scope: undefined,
      range: getRange(ctx),
    });
  }

  visitForVarDefStmt(ctx: ForVarDefStmtContext): ast.ForVarDefStatement {
    return create(ast.ForVarDefStatement, {
      expr: this.visit(ctx.expr()),
      id: ctx.ID().text,
      type: ctx.vtype() ? (this.visit(ctx.vtype()!) as ast.Type) : undefined,
      scope: undefined,
      range: getRange(ctx),
    });
  }

  visitMethodsDec(ctx: MethodsDecContext): ast.Methods {
    const tmpl = ctx.tmplMethods();

    let templateParams: string[] = [];

    if (ctx.tmplMethods()) {
      templateParams = ctx
        .tmplMethods()!
        .ID()
        .map((node) => node.text);
    }

    const plainType = ctx.plainType();

    return create(ast.Methods, {
      type: ctx.ID().text,
      templateParams,
      trait: plainType ? this.visit(plainType) : undefined,
      functions: ctx
        .methodsContent()
        .methodsFnDef()
        .map((def) => this.visitFuncDec(def)),
      range: getRange(ctx),
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
            name: create(ast.Identifier, {
              name: dec.ID().text,
              range: getRangeFromTerminal(dec.ID()),
            }),
            params: dec
              .fnType()
              .fnDefParam()
              .map((param) => {
                if (param instanceof FnDefParamFullContext) {
                  const initExpr = param.varDef().expr();
                  const vtype = param.varDef().vtype();

                  return create(ast.FnParamDec, {
                    left: create(ast.Identifier, {
                      name: param.varDef().ID().text,
                      range: getRangeFromTerminal(param.varDef().ID()),
                    }),
                    init: initExpr && this.visit(initExpr),
                    type: vtype && this.visit(vtype),
                    tags: [],
                    ellipsis: !!param.OPELIPSE(),
                    range: getRange(param),
                  });
                } else {
                  throw new Error("skip parameters are not yet defined");
                }
              }),
            returns: this.visit(dec.fnReturnType()),
            range: getRange(dec),
          })
        ),
      range: getRange(ctx),
    });
  }

  visit(tree: ParseTree): any {
    return tree.accept(this);
  }

  visitChildren(node: RuleNode): any {
    throw new Error(
      "ParseTreeVisitor: " + node.constructor.name + " is unimplemented!"
    );
  }

  visitErrorNode(node: ErrorNode): any {
    return undefined;
  }

  visitTerminal(node: TerminalNode): any {
    console.log("Visiting Terminal", node);
    return undefined;
  }
}
