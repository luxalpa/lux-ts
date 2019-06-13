// Generated from grammar/LuxParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FnDefParamFullContext } from "./LuxParser";
import { FnDefParamOnlyTypeContext } from "./LuxParser";
import { FnDefParamSkipContext } from "./LuxParser";
import { TypeInTypeContext } from "./LuxParser";
import { TypeFunctionPtrContext } from "./LuxParser";
import { TypeRefContext } from "./LuxParser";
import { TypePlainContext } from "./LuxParser";
import { EnumEntryTaggedContext } from "./LuxParser";
import { EnumEntryPlainContext } from "./LuxParser";
import { FuncDecContext } from "./LuxParser";
import { EnumDecContext } from "./LuxParser";
import { ClassDecContext } from "./LuxParser";
import { DecStmtContext } from "./LuxParser";
import { AssignStmtContext } from "./LuxParser";
import { ReturnStmtContext } from "./LuxParser";
import { FnCallStmtContext } from "./LuxParser";
import { MemberExprContext } from "./LuxParser";
import { NumberEContext } from "./LuxParser";
import { IdentifierExprContext } from "./LuxParser";
import { BracketExprContext } from "./LuxParser";
import { InfixExprContext } from "./LuxParser";
import { ImplFnCallExprContext } from "./LuxParser";
import { ObjectLiteralExprContext } from "./LuxParser";
import { FnReturnTypeSingleContext } from "./LuxParser";
import { ClassScopeDecNormalContext } from "./LuxParser";
import { ClassScopeInheritContext } from "./LuxParser";
import { VarDecContext } from "./LuxParser";
import { TypeDecContext } from "./LuxParser";
import { LvalueIDContext } from "./LuxParser";
import { VarDefAssignImplicitContext } from "./LuxParser";
import { VarDefOnlyContext } from "./LuxParser";
import { VarDefAssignExplicitContext } from "./LuxParser";
import { FnCallStatementImplicitContext } from "./LuxParser";
import { ProgramContext } from "./LuxParser";
import { StatementContext } from "./LuxParser";
import { FnCallStatementContext } from "./LuxParser";
import { LvalueContext } from "./LuxParser";
import { TaggedDeclarationContext } from "./LuxParser";
import { TagsContext } from "./LuxParser";
import { TagContext } from "./LuxParser";
import { DeclarationContext } from "./LuxParser";
import { TypeDefContext } from "./LuxParser";
import { FnDefContext } from "./LuxParser";
import { ScopeContext } from "./LuxParser";
import { ClassScopeContext } from "./LuxParser";
import { ClassScopeDecContext } from "./LuxParser";
import { FnTypeContext } from "./LuxParser";
import { FnDefParamContext } from "./LuxParser";
import { FnReturnTypeContext } from "./LuxParser";
import { FnCallParamsContext } from "./LuxParser";
import { FnCallParamContext } from "./LuxParser";
import { VtypeContext } from "./LuxParser";
import { PlainTypeContext } from "./LuxParser";
import { VarDefContext } from "./LuxParser";
import { ExprContext } from "./LuxParser";
import { EnumScopeContext } from "./LuxParser";
import { EnumEntryContext } from "./LuxParser";
import { ObjectLiteralEntryContext } from "./LuxParser";
import { DelimContext } from "./LuxParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LuxParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `fnDefParamFull`
	 * labeled alternative in `LuxParser.fnDefParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefParamFull?: (ctx: FnDefParamFullContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnDefParamOnlyType`
	 * labeled alternative in `LuxParser.fnDefParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefParamOnlyType?: (ctx: FnDefParamOnlyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnDefParamSkip`
	 * labeled alternative in `LuxParser.fnDefParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefParamSkip?: (ctx: FnDefParamSkipContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInType`
	 * labeled alternative in `LuxParser.vtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInType?: (ctx: TypeInTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFunctionPtr`
	 * labeled alternative in `LuxParser.vtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFunctionPtr?: (ctx: TypeFunctionPtrContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRef`
	 * labeled alternative in `LuxParser.vtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `typePlain`
	 * labeled alternative in `LuxParser.vtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePlain?: (ctx: TypePlainContext) => Result;

	/**
	 * Visit a parse tree produced by the `enumEntryTagged`
	 * labeled alternative in `LuxParser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntryTagged?: (ctx: EnumEntryTaggedContext) => Result;

	/**
	 * Visit a parse tree produced by the `enumEntryPlain`
	 * labeled alternative in `LuxParser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntryPlain?: (ctx: EnumEntryPlainContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcDec`
	 * labeled alternative in `LuxParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDec?: (ctx: FuncDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `enumDec`
	 * labeled alternative in `LuxParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDec?: (ctx: EnumDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `classDec`
	 * labeled alternative in `LuxParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDec?: (ctx: ClassDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `decStmt`
	 * labeled alternative in `LuxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecStmt?: (ctx: DecStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignStmt`
	 * labeled alternative in `LuxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStmt`
	 * labeled alternative in `LuxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnCallStmt`
	 * labeled alternative in `LuxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallStmt?: (ctx: FnCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberExpr?: (ctx: MemberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberE`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberE?: (ctx: NumberEContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpr?: (ctx: BracketExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixExpr?: (ctx: InfixExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `implFnCallExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplFnCallExpr?: (ctx: ImplFnCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `objectLiteralExpr`
	 * labeled alternative in `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralExpr?: (ctx: ObjectLiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnReturnTypeSingle`
	 * labeled alternative in `LuxParser.fnReturnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnReturnTypeSingle?: (ctx: FnReturnTypeSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `classScopeDecNormal`
	 * labeled alternative in `LuxParser.classScopeDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassScopeDecNormal?: (ctx: ClassScopeDecNormalContext) => Result;

	/**
	 * Visit a parse tree produced by the `classScopeInherit`
	 * labeled alternative in `LuxParser.classScopeDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassScopeInherit?: (ctx: ClassScopeInheritContext) => Result;

	/**
	 * Visit a parse tree produced by the `varDec`
	 * labeled alternative in `LuxParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDec?: (ctx: VarDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeDec`
	 * labeled alternative in `LuxParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDec?: (ctx: TypeDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `lvalueID`
	 * labeled alternative in `LuxParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalueID?: (ctx: LvalueIDContext) => Result;

	/**
	 * Visit a parse tree produced by the `varDefAssignImplicit`
	 * labeled alternative in `LuxParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDefAssignImplicit?: (ctx: VarDefAssignImplicitContext) => Result;

	/**
	 * Visit a parse tree produced by the `varDefOnly`
	 * labeled alternative in `LuxParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDefOnly?: (ctx: VarDefOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by the `varDefAssignExplicit`
	 * labeled alternative in `LuxParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDefAssignExplicit?: (ctx: VarDefAssignExplicitContext) => Result;

	/**
	 * Visit a parse tree produced by the `fnCallStatementImplicit`
	 * labeled alternative in `LuxParser.fnCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallStatementImplicit?: (ctx: FnCallStatementImplicitContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallStatement?: (ctx: FnCallStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.taggedDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaggedDeclaration?: (ctx: TaggedDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.tags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTags?: (ctx: TagsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDef?: (ctx: FnDefContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.classScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassScope?: (ctx: ClassScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.classScopeDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassScopeDec?: (ctx: ClassScopeDecContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnType?: (ctx: FnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnDefParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefParam?: (ctx: FnDefParamContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnReturnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnReturnType?: (ctx: FnReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnCallParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallParams?: (ctx: FnCallParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.fnCallParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallParam?: (ctx: FnCallParamContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.vtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVtype?: (ctx: VtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.plainType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlainType?: (ctx: PlainTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDef?: (ctx: VarDefContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.enumScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumScope?: (ctx: EnumScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntry?: (ctx: EnumEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.objectLiteralEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralEntry?: (ctx: ObjectLiteralEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `LuxParser.delim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelim?: (ctx: DelimContext) => Result;
}

