// Generated from parser-ts/LuxParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LuxParserVisitor } from "./LuxParserVisitor";


export class LuxParser extends Parser {
	public static readonly NUMBER = 1;
	public static readonly ENDL = 2;
	public static readonly MLCOMMENT = 3;
	public static readonly SLCOMMENT = 4;
	public static readonly WS = 5;
	public static readonly OPNS = 6;
	public static readonly OPAT = 7;
	public static readonly COLON = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LCURL = 11;
	public static readonly RCURL = 12;
	public static readonly LSQUARE = 13;
	public static readonly RSQUARE = 14;
	public static readonly COMMA = 15;
	public static readonly ARROW = 16;
	public static readonly OPEQ = 17;
	public static readonly OPUNEQ = 18;
	public static readonly SEMIC = 19;
	public static readonly OPPLUS = 20;
	public static readonly OPMOVE = 21;
	public static readonly OPINC = 22;
	public static readonly OPDEC = 23;
	public static readonly OPAPLUS = 24;
	public static readonly OPAMINUS = 25;
	public static readonly OPADIV = 26;
	public static readonly OPAMULT = 27;
	public static readonly OPAMOD = 28;
	public static readonly OPMINUS = 29;
	public static readonly OPMULT = 30;
	public static readonly OPDIV = 31;
	public static readonly OPMOD = 32;
	public static readonly OPNAV = 33;
	public static readonly OPCOAL = 34;
	public static readonly OPSAFENAV = 35;
	public static readonly OPQUEST = 36;
	public static readonly OPREF = 37;
	public static readonly OPRANGE = 38;
	public static readonly OPSKIP = 39;
	public static readonly OPELIPSE = 40;
	public static readonly AND = 41;
	public static readonly OR = 42;
	public static readonly NOT = 43;
	public static readonly GT = 44;
	public static readonly LT = 45;
	public static readonly GTE = 46;
	public static readonly LTE = 47;
	public static readonly CLASS = 48;
	public static readonly RETURN = 49;
	public static readonly IF = 50;
	public static readonly ELSE = 51;
	public static readonly BREAK = 52;
	public static readonly CONTINUE = 53;
	public static readonly GOTO = 54;
	public static readonly FOR = 55;
	public static readonly MATCH = 56;
	public static readonly ENUM = 57;
	public static readonly INHERIT = 58;
	public static readonly STRING = 59;
	public static readonly MACRO = 60;
	public static readonly ID = 61;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_forStatement = 2;
	public static readonly RULE_fnCallStatement = 3;
	public static readonly RULE_lvalue = 4;
	public static readonly RULE_taggedDeclaration = 5;
	public static readonly RULE_tags = 6;
	public static readonly RULE_tag = 7;
	public static readonly RULE_declaration = 8;
	public static readonly RULE_typeDef = 9;
	public static readonly RULE_fnDef = 10;
	public static readonly RULE_scope = 11;
	public static readonly RULE_classScope = 12;
	public static readonly RULE_classScopeDec = 13;
	public static readonly RULE_fnType = 14;
	public static readonly RULE_fnDefParam = 15;
	public static readonly RULE_fnReturnType = 16;
	public static readonly RULE_fnCallParams = 17;
	public static readonly RULE_fnCallParam = 18;
	public static readonly RULE_tmplDefParamList = 19;
	public static readonly RULE_tmplDefParam = 20;
	public static readonly RULE_vtype = 21;
	public static readonly RULE_plainType = 22;
	public static readonly RULE_tmplParam = 23;
	public static readonly RULE_varDef = 24;
	public static readonly RULE_expr = 25;
	public static readonly RULE_enumScope = 26;
	public static readonly RULE_enumEntry = 27;
	public static readonly RULE_objectLiteralEntry = 28;
	public static readonly RULE_delim = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "forStatement", "fnCallStatement", "lvalue", "taggedDeclaration", 
		"tags", "tag", "declaration", "typeDef", "fnDef", "scope", "classScope", 
		"classScopeDec", "fnType", "fnDefParam", "fnReturnType", "fnCallParams", 
		"fnCallParam", "tmplDefParamList", "tmplDefParam", "vtype", "plainType", 
		"tmplParam", "varDef", "expr", "enumScope", "enumEntry", "objectLiteralEntry", 
		"delim",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'#'", 
		"'@'", "':'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "'=>'", 
		"'='", "'!='", "';'", "'+'", "'->'", "'++'", "'--'", "'+='", "'-='", "'/='", 
		"'*='", "'%='", "'-'", "'*'", "'/'", "'%'", "'.'", "'??'", "'?.'", "'?'", 
		"'&'", "'~'", "'_'", "'...'", "'and'", "'or'", "'!'", "'>'", "'<'", "'>='", 
		"'<='", "'class'", "'return'", "'if'", "'else'", "'break'", "'continue'", 
		"'goto'", "'for'", "'match'", "'enum'", "'inherit'", undefined, "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "ENDL", "MLCOMMENT", "SLCOMMENT", "WS", "OPNS", "OPAT", 
		"COLON", "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", "RSQUARE", "COMMA", 
		"ARROW", "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", "OPMOVE", "OPINC", "OPDEC", 
		"OPAPLUS", "OPAMINUS", "OPADIV", "OPAMULT", "OPAMOD", "OPMINUS", "OPMULT", 
		"OPDIV", "OPMOD", "OPNAV", "OPCOAL", "OPSAFENAV", "OPQUEST", "OPREF", 
		"OPRANGE", "OPSKIP", "OPELIPSE", "AND", "OR", "NOT", "GT", "LT", "GTE", 
		"LTE", "CLASS", "RETURN", "IF", "ELSE", "BREAK", "CONTINUE", "GOTO", "FOR", 
		"MATCH", "ENUM", "INHERIT", "STRING", "MACRO", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuxParser._LITERAL_NAMES, LuxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LuxParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuxParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LuxParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LuxParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 62;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LuxParser.OPAT:
				case LuxParser.ID:
					{
					this.state = 60;
					this.taggedDeclaration();
					}
					break;
				case LuxParser.ENDL:
					{
					this.state = 61;
					this.match(LuxParser.ENDL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LuxParser.ENDL || _la === LuxParser.OPAT || _la === LuxParser.ID);
			this.state = 66;
			this.match(LuxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LuxParser.RULE_statement);
		let _la: number;
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new DecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.taggedDeclaration();
				}
				break;

			case 2:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.lvalue(0);
				this.state = 70;
				this.match(LuxParser.OPEQ);
				this.state = 71;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.match(LuxParser.RETURN);
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.ID) {
					{
					this.state = 74;
					this.expr(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new FnCallStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 77;
				this.fnCallStatement();
				}
				break;

			case 5:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 78;
				this.match(LuxParser.IF);
				this.state = 79;
				this.expr(0);
				this.state = 80;
				this.scope();
				}
				break;

			case 6:
				_localctx = new BreakStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 82;
				this.match(LuxParser.BREAK);
				}
				break;

			case 7:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 83;
				this.forStatement();
				this.state = 84;
				this.scope();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuxParser.RULE_forStatement);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new ForInfinityStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(LuxParser.FOR);
				}
				break;

			case 2:
				_localctx = new ForAssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(LuxParser.FOR);
				this.state = 90;
				this.lvalue(0);
				this.state = 91;
				this.match(LuxParser.OPEQ);
				this.state = 92;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForVarDefStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 94;
				this.match(LuxParser.FOR);
				this.state = 95;
				this.match(LuxParser.ID);
				this.state = 96;
				this.match(LuxParser.COLON);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPREF || _la === LuxParser.ID) {
					{
					this.state = 97;
					this.vtype();
					}
				}

				this.state = 100;
				this.match(LuxParser.OPEQ);
				this.state = 101;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new ForExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 102;
				this.match(LuxParser.FOR);
				this.state = 103;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnCallStatement(): FnCallStatementContext {
		let _localctx: FnCallStatementContext = new FnCallStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuxParser.RULE_fnCallStatement);
		let _la: number;
		try {
			_localctx = new FnCallStatementImplicitContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.expr(0);
			this.state = 107;
			this.match(LuxParser.LPAREN);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
				{
				this.state = 108;
				this.fnCallParams();
				}
			}

			this.state = 111;
			this.match(LuxParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public lvalue(): LvalueContext;
	public lvalue(_p: number): LvalueContext;
	// @RuleVersion(0)
	public lvalue(_p?: number): LvalueContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LvalueContext = new LvalueContext(this._ctx, _parentState);
		let _prevctx: LvalueContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, LuxParser.RULE_lvalue, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new LvalueIDContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 114;
			this.match(LuxParser.ID);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LvalueMemberContext(new LvalueContext(_parentctx, _parentState));
					(_localctx as LvalueMemberContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_lvalue);
					this.state = 116;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 117;
					this.match(LuxParser.OPNAV);
					this.state = 118;
					(_localctx as LvalueMemberContext)._right = this.match(LuxParser.ID);
					}
					}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public taggedDeclaration(): TaggedDeclarationContext {
		let _localctx: TaggedDeclarationContext = new TaggedDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LuxParser.RULE_taggedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT) {
				{
				this.state = 124;
				this.tags();
				}
			}

			this.state = 127;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tags(): TagsContext {
		let _localctx: TagsContext = new TagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LuxParser.RULE_tags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 129;
				this.tag();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LuxParser.OPAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LuxParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(LuxParser.OPAT);
			this.state = 135;
			this.match(LuxParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LuxParser.RULE_declaration);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new VarDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new TypeDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.typeDef();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDef(): TypeDefContext {
		let _localctx: TypeDefContext = new TypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LuxParser.RULE_typeDef);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new FuncDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(LuxParser.ID);
				this.state = 142;
				this.match(LuxParser.COLON);
				this.state = 143;
				this.fnDef();
				}
				break;

			case 2:
				_localctx = new EnumDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(LuxParser.ID);
				this.state = 145;
				this.match(LuxParser.COLON);
				this.state = 146;
				this.match(LuxParser.ENUM);
				this.state = 147;
				this.enumScope();
				}
				break;

			case 3:
				_localctx = new ClassDecContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.match(LuxParser.ID);
				this.state = 149;
				this.match(LuxParser.COLON);
				this.state = 150;
				this.match(LuxParser.CLASS);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.LT) {
					{
					this.state = 151;
					this.tmplDefParamList();
					}
				}

				this.state = 154;
				this.classScope();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDef(): FnDefContext {
		let _localctx: FnDefContext = new FnDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LuxParser.RULE_fnDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.fnType();
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 158;
				this.fnReturnType();
				}
				break;
			}
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.LCURL) {
				{
				this.state = 161;
				this.scope();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LuxParser.RULE_scope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(LuxParser.LCURL);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 165;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.OPAT) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (LuxParser.RETURN - 49)) | (1 << (LuxParser.IF - 49)) | (1 << (LuxParser.BREAK - 49)) | (1 << (LuxParser.FOR - 49)) | (1 << (LuxParser.ID - 49)))) !== 0)) {
				{
				this.state = 171;
				this.statement();
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 172;
						this.delim();
						this.state = 173;
						this.statement();
						}
						}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				}
			}

			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 182;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this.match(LuxParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classScope(): ClassScopeContext {
		let _localctx: ClassScopeContext = new ClassScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuxParser.RULE_classScope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(LuxParser.LCURL);
			this.state = 194;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 191;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT || _la === LuxParser.INHERIT || _la === LuxParser.ID) {
				{
				this.state = 197;
				this.classScopeDec();
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 198;
						this.delim();
						this.state = 199;
						this.classScopeDec();
						}
						}
					}
					this.state = 205;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				}
			}

			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 208;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this.match(LuxParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classScopeDec(): ClassScopeDecContext {
		let _localctx: ClassScopeDecContext = new ClassScopeDecContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LuxParser.RULE_classScopeDec);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.OPAT:
			case LuxParser.ID:
				_localctx = new ClassScopeDecNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.taggedDeclaration();
				}
				break;
			case LuxParser.INHERIT:
				_localctx = new ClassScopeInheritContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.match(LuxParser.INHERIT);
				this.state = 218;
				this.plainType(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnType(): FnTypeContext {
		let _localctx: FnTypeContext = new FnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LuxParser.RULE_fnType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(LuxParser.LPAREN);
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.OPELIPSE - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
				{
				this.state = 228;
				this.fnDefParam();
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 229;
						this.delim();
						this.state = 230;
						this.fnDefParam();
						}
						}
					}
					this.state = 236;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				}
			}

			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 239;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
			this.match(LuxParser.RPAREN);
			this.state = 246;
			this.match(LuxParser.ARROW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefParam(): FnDefParamContext {
		let _localctx: FnDefParamContext = new FnDefParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LuxParser.RULE_fnDefParam);
		let _la: number;
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new FnDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 248;
					_la = this._input.LA(1);
					if (!(_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 251;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 254;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new FnDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 255;
					_la = this._input.LA(1);
					if (!(_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 258;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 261;
				this.match(LuxParser.COLON);
				this.state = 262;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new FnDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 263;
				this.match(LuxParser.OPSKIP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnReturnType(): FnReturnTypeContext {
		let _localctx: FnReturnTypeContext = new FnReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LuxParser.RULE_fnReturnType);
		try {
			_localctx = new FnReturnTypeSingleContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.vtype();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnCallParams(): FnCallParamsContext {
		let _localctx: FnCallParamsContext = new FnCallParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LuxParser.RULE_fnCallParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 268;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 274;
			this.fnCallParam();
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 275;
					this.delim();
					this.state = 276;
					this.fnCallParam();
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 283;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnCallParam(): FnCallParamContext {
		let _localctx: FnCallParamContext = new FnCallParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LuxParser.RULE_fnCallParam);
		let _la: number;
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
			case LuxParser.LPAREN:
			case LuxParser.LSQUARE:
			case LuxParser.OPMOD:
			case LuxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOD) {
					{
					this.state = 289;
					this.match(LuxParser.OPMOD);
					}
				}

				this.state = 292;
				this.expr(0);
				}
				break;
			case LuxParser.OPSKIP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 293;
				this.match(LuxParser.OPSKIP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tmplDefParamList(): TmplDefParamListContext {
		let _localctx: TmplDefParamListContext = new TmplDefParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LuxParser.RULE_tmplDefParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(LuxParser.LT);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 297;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
			this.tmplDefParam();
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 304;
					this.delim();
					this.state = 305;
					this.tmplDefParam();
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 312;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 318;
			this.match(LuxParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tmplDefParam(): TmplDefParamContext {
		let _localctx: TmplDefParamContext = new TmplDefParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LuxParser.RULE_tmplDefParam);
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ID:
				_localctx = new TmplDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.varDef();
				}
				break;
			case LuxParser.COLON:
				_localctx = new TmplDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(LuxParser.COLON);
				this.state = 322;
				this.vtype();
				}
				break;
			case LuxParser.OPSKIP:
				_localctx = new TmplDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.match(LuxParser.OPSKIP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vtype(): VtypeContext {
		let _localctx: VtypeContext = new VtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LuxParser.RULE_vtype);
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new TypeFunctionPtrContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 326;
				this.match(LuxParser.OPREF);
				this.state = 327;
				this.fnType();
				this.state = 328;
				this.fnReturnType();
				}
				break;

			case 2:
				_localctx = new TypeRefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.match(LuxParser.OPREF);
				this.state = 331;
				this.plainType(0);
				}
				break;

			case 3:
				_localctx = new TypePlainContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 332;
				this.plainType(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public plainType(): PlainTypeContext;
	public plainType(_p: number): PlainTypeContext;
	// @RuleVersion(0)
	public plainType(_p?: number): PlainTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PlainTypeContext = new PlainTypeContext(this._ctx, _parentState);
		let _prevctx: PlainTypeContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, LuxParser.RULE_plainType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new NormalTypeContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 336;
			this.match(LuxParser.ID);
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 337;
				this.match(LuxParser.LT);
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 338;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 344;
				this.tmplParam();
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 345;
						this.delim();
						this.state = 346;
						this.tmplParam();
						}
						}
					}
					this.state = 352;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 353;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 358;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 359;
				this.match(LuxParser.GT);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeInTypeContext(new PlainTypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_plainType);
					this.state = 363;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 364;
					this.match(LuxParser.OPNAV);
					this.state = 365;
					this.plainType(2);
					}
					}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tmplParam(): TmplParamContext {
		let _localctx: TmplParamContext = new TmplParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LuxParser.RULE_tmplParam);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.vtype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDef(): VarDefContext {
		let _localctx: VarDefContext = new VarDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LuxParser.RULE_varDef);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				_localctx = new VarDefAssignImplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 375;
				(_localctx as VarDefAssignImplicitContext)._id = this.match(LuxParser.ID);
				this.state = 376;
				this.match(LuxParser.COLON);
				this.state = 377;
				this.match(LuxParser.OPEQ);
				this.state = 378;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new VarDefOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 379;
				this.match(LuxParser.ID);
				this.state = 380;
				this.match(LuxParser.COLON);
				this.state = 381;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new VarDefAssignExplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 382;
				this.match(LuxParser.ID);
				this.state = 383;
				this.match(LuxParser.COLON);
				this.state = 384;
				this.vtype();
				this.state = 385;
				this.match(LuxParser.OPEQ);
				this.state = 386;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, LuxParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
				{
				_localctx = new NumberEContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 391;
				(_localctx as NumberEContext)._value = this.match(LuxParser.NUMBER);
				}
				break;
			case LuxParser.ID:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 392;
				(_localctx as IdentifierExprContext)._id = this.match(LuxParser.ID);
				}
				break;
			case LuxParser.LPAREN:
				{
				_localctx = new BracketExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 393;
				this.match(LuxParser.LPAREN);
				this.state = 394;
				this.expr(0);
				this.state = 395;
				this.match(LuxParser.RPAREN);
				}
				break;
			case LuxParser.LSQUARE:
				{
				_localctx = new ObjectLiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 397;
				this.match(LuxParser.LSQUARE);
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 398;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 403;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.ID) {
					{
					this.state = 404;
					this.objectLiteralEntry();
					this.state = 410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 405;
							this.delim();
							this.state = 406;
							this.objectLiteralEntry();
							}
							}
						}
						this.state = 412;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
					}
					}
				}

				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 415;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 421;
				this.match(LuxParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 444;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 442;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 424;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 425;
						(_localctx as InfixExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuxParser.OPMULT || _la === LuxParser.OPDIV)) {
							(_localctx as InfixExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 426;
						(_localctx as InfixExprContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 427;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 428;
						(_localctx as InfixExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuxParser.OPPLUS || _la === LuxParser.OPMINUS)) {
							(_localctx as InfixExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 429;
						(_localctx as InfixExprContext)._right = this.expr(5);
						}
						break;

					case 3:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 430;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 431;
						(_localctx as InfixExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuxParser.OPEQ || _la === LuxParser.OPUNEQ)) {
							(_localctx as InfixExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 432;
						(_localctx as InfixExprContext)._right = this.expr(4);
						}
						break;

					case 4:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MemberExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 433;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 434;
						this.match(LuxParser.OPNAV);
						this.state = 435;
						(_localctx as MemberExprContext)._right = this.match(LuxParser.ID);
						}
						break;

					case 5:
						{
						_localctx = new ImplFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 436;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 437;
						this.match(LuxParser.LPAREN);
						this.state = 439;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
							{
							this.state = 438;
							this.fnCallParams();
							}
						}

						this.state = 441;
						this.match(LuxParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumScope(): EnumScopeContext {
		let _localctx: EnumScopeContext = new EnumScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LuxParser.RULE_enumScope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(LuxParser.LCURL);
			this.state = 451;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 448;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.ID) {
				{
				this.state = 454;
				this.enumEntry();
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 455;
						this.delim();
						this.state = 456;
						this.enumEntry();
						}
						}
					}
					this.state = 462;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				}
			}

			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 465;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 471;
			this.match(LuxParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LuxParser.RULE_enumEntry);
		let _la: number;
		try {
			let _alt: number;
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new EnumEntryTaggedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.match(LuxParser.ID);
				this.state = 474;
				this.match(LuxParser.LPAREN);
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 475;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 480;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.OPELIPSE - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
					{
					this.state = 481;
					this.fnDefParam();
					this.state = 487;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 482;
							this.delim();
							this.state = 483;
							this.fnDefParam();
							}
							}
						}
						this.state = 489;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
					}
					}
				}

				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 492;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 498;
				this.match(LuxParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new EnumEntryPlainContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 499;
				this.match(LuxParser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteralEntry(): ObjectLiteralEntryContext {
		let _localctx: ObjectLiteralEntryContext = new ObjectLiteralEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LuxParser.RULE_objectLiteralEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(LuxParser.ID);
			this.state = 503;
			this.match(LuxParser.COLON);
			this.state = 504;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delim(): DelimContext {
		let _localctx: DelimContext = new DelimContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LuxParser.RULE_delim);
		let _la: number;
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ENDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 506;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === LuxParser.ENDL);
				}
				break;
			case LuxParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.match(LuxParser.COMMA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.lvalue_sempred(_localctx as LvalueContext, predIndex);

		case 22:
			return this.plainType_sempred(_localctx as PlainTypeContext, predIndex);

		case 25:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private lvalue_sempred(_localctx: LvalueContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private plainType_sempred(_localctx: PlainTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0205\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x06\x02A\n\x02" +
		"\r\x02\x0E\x02B\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03N\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Y\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04e\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x05\x05p\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06z\n\x06\f\x06\x0E\x06}\v\x06\x03\x07\x05\x07\x80\n\x07" +
		"\x03\x07\x03\x07\x03\b\x06\b\x85\n\b\r\b\x0E\b\x86\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x05\n\x8E\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\x9B\n\v\x03\v\x05\v\x9E\n\v\x03\f\x03\f\x05\f" +
		"\xA2\n\f\x03\f\x05\f\xA5\n\f\x03\r\x03\r\x07\r\xA9\n\r\f\r\x0E\r\xAC\v" +
		"\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB2\n\r\f\r\x0E\r\xB5\v\r\x05\r\xB7\n" +
		"\r\x03\r\x07\r\xBA\n\r\f\r\x0E\r\xBD\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x07" +
		"\x0E\xC3\n\x0E\f\x0E\x0E\x0E\xC6\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\xCC\n\x0E\f\x0E\x0E\x0E\xCF\v\x0E\x05\x0E\xD1\n\x0E\x03\x0E\x07" +
		"\x0E\xD4\n\x0E\f\x0E\x0E\x0E\xD7\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xDE\n\x0F\x03\x10\x03\x10\x07\x10\xE2\n\x10\f\x10\x0E" +
		"\x10\xE5\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xEB\n\x10\f\x10" +
		"\x0E\x10\xEE\v\x10\x05\x10\xF0\n\x10\x03\x10\x07\x10\xF3\n\x10\f\x10\x0E" +
		"\x10\xF6\v\x10\x03\x10\x03\x10\x03\x10\x03\x11\x05\x11\xFC\n\x11\x03\x11" +
		"\x05\x11\xFF\n\x11\x03\x11\x03\x11\x05\x11\u0103\n\x11\x03\x11\x05\x11" +
		"\u0106\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u010B\n\x11\x03\x12\x03\x12" +
		"\x03\x13\x07\x13\u0110\n\x13\f\x13\x0E\x13\u0113\v\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u0119\n\x13\f\x13\x0E\x13\u011C\v\x13\x03\x13" +
		"\x07\x13\u011F\n\x13\f\x13\x0E\x13\u0122\v\x13\x03\x14\x05\x14\u0125\n" +
		"\x14\x03\x14\x03\x14\x05\x14\u0129\n\x14\x03\x15\x03\x15\x07\x15\u012D" +
		"\n\x15\f\x15\x0E\x15\u0130\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15" +
		"\u0136\n\x15\f\x15\x0E\x15\u0139\v\x15\x03\x15\x07\x15\u013C\n\x15\f\x15" +
		"\x0E\x15\u013F\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0147\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x05\x17\u0150\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0156\n\x18" +
		"\f\x18\x0E\x18\u0159\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u015F" +
		"\n\x18\f\x18\x0E\x18\u0162\v\x18\x03\x18\x07\x18\u0165\n\x18\f\x18\x0E" +
		"\x18\u0168\v\x18\x03\x18\x03\x18\x05\x18\u016C\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\u0171\n\x18\f\x18\x0E\x18\u0174\v\x18\x03\x19\x03\x19\x05" +
		"\x19\u0178\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0187\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u0192\n\x1B\f\x1B\x0E\x1B\u0195\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u019B\n\x1B\f\x1B\x0E\x1B\u019E\v\x1B\x05\x1B\u01A0\n\x1B" +
		"\x03\x1B\x07\x1B\u01A3\n\x1B\f\x1B\x0E\x1B\u01A6\v\x1B\x03\x1B\x05\x1B" +
		"\u01A9\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01BA" +
		"\n\x1B\x03\x1B\x07\x1B\u01BD\n\x1B\f\x1B\x0E\x1B\u01C0\v\x1B\x03\x1C\x03" +
		"\x1C\x07\x1C\u01C4\n\x1C\f\x1C\x0E\x1C\u01C7\v\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x07\x1C\u01CD\n\x1C\f\x1C\x0E\x1C\u01D0\v\x1C\x05\x1C\u01D2" +
		"\n\x1C\x03\x1C\x07\x1C\u01D5\n\x1C\f\x1C\x0E\x1C\u01D8\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01DF\n\x1D\f\x1D\x0E\x1D\u01E2\v" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01E8\n\x1D\f\x1D\x0E\x1D" +
		"\u01EB\v\x1D\x05\x1D\u01ED\n\x1D\x03\x1D\x07\x1D\u01F0\n\x1D\f\x1D\x0E" +
		"\x1D\u01F3\v\x1D\x03\x1D\x03\x1D\x05\x1D\u01F7\n\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x06\x1F\u01FE\n\x1F\r\x1F\x0E\x1F\u01FF\x03\x1F\x05" +
		"\x1F\u0203\n\x1F\x03\x1F\x02\x02\x05\n.4 \x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02\x02\x06\x04\x02\x17\x17\"\"\x03\x02 !\x04\x02\x16" +
		"\x16\x1F\x1F\x03\x02\x13\x14\x02\u023C\x02@\x03\x02\x02\x02\x04X\x03\x02" +
		"\x02\x02\x06j\x03\x02\x02\x02\bl\x03\x02\x02\x02\ns\x03\x02\x02\x02\f" +
		"\x7F\x03\x02\x02\x02\x0E\x84\x03\x02\x02\x02\x10\x88\x03\x02\x02\x02\x12" +
		"\x8D\x03\x02\x02\x02\x14\x9D\x03\x02\x02\x02\x16\x9F\x03\x02\x02\x02\x18" +
		"\xA6\x03\x02\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xDD\x03\x02\x02\x02\x1E" +
		"\xDF\x03\x02\x02\x02 \u010A\x03\x02\x02\x02\"\u010C\x03\x02\x02\x02$\u0111" +
		"\x03\x02\x02\x02&\u0128\x03\x02\x02\x02(\u012A\x03\x02\x02\x02*\u0146" +
		"\x03\x02\x02\x02,\u014F\x03\x02\x02\x02.\u0151\x03\x02\x02\x020\u0177" +
		"\x03\x02\x02\x022\u0186\x03\x02\x02\x024\u01A8\x03\x02\x02\x026\u01C1" +
		"\x03\x02\x02\x028\u01F6\x03\x02\x02\x02:\u01F8\x03\x02\x02\x02<\u0202" +
		"\x03\x02\x02\x02>A\x05\f\x07\x02?A\x07\x04\x02\x02@>\x03\x02\x02\x02@" +
		"?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DE\x07\x02\x02\x03E\x03\x03\x02\x02\x02FY\x05\f\x07" +
		"\x02GH\x05\n\x06\x02HI\x07\x13\x02\x02IJ\x054\x1B\x02JY\x03\x02\x02\x02" +
		"KM\x073\x02\x02LN\x054\x1B\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02NY\x03" +
		"\x02\x02\x02OY\x05\b\x05\x02PQ\x074\x02\x02QR\x054\x1B\x02RS\x05\x18\r" +
		"\x02SY\x03\x02\x02\x02TY\x076\x02\x02UV\x05\x06\x04\x02VW\x05\x18\r\x02" +
		"WY\x03\x02\x02\x02XF\x03\x02\x02\x02XG\x03\x02\x02\x02XK\x03\x02\x02\x02" +
		"XO\x03\x02\x02\x02XP\x03\x02\x02\x02XT\x03\x02\x02\x02XU\x03\x02\x02\x02" +
		"Y\x05\x03\x02\x02\x02Zk\x079\x02\x02[\\\x079\x02\x02\\]\x05\n\x06\x02" +
		"]^\x07\x13\x02\x02^_\x054\x1B\x02_k\x03\x02\x02\x02`a\x079\x02\x02ab\x07" +
		"?\x02\x02bd\x07\n\x02\x02ce\x05,\x17\x02dc\x03\x02\x02\x02de\x03\x02\x02" +
		"\x02ef\x03\x02\x02\x02fg\x07\x13\x02\x02gk\x054\x1B\x02hi\x079\x02\x02" +
		"ik\x054\x1B\x02jZ\x03\x02\x02\x02j[\x03\x02\x02\x02j`\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02k\x07\x03\x02\x02\x02lm\x054\x1B\x02mo\x07\v\x02\x02" +
		"np\x05$\x13\x02on\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"qr\x07\f\x02\x02r\t\x03\x02\x02\x02st\b\x06\x01\x02tu\x07?\x02\x02u{\x03" +
		"\x02\x02\x02vw\f\x03\x02\x02wx\x07#\x02\x02xz\x07?\x02\x02yv\x03\x02\x02" +
		"\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\v\x03\x02" +
		"\x02\x02}{\x03\x02\x02\x02~\x80\x05\x0E\b\x02\x7F~\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x05\x12\n\x02\x82" +
		"\r\x03\x02\x02\x02\x83\x85\x05\x10\t\x02\x84\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x0F" +
		"\x03\x02\x02\x02\x88\x89\x07\t\x02\x02\x89\x8A\x07?\x02\x02\x8A\x11\x03" +
		"\x02\x02\x02\x8B\x8E\x052\x1A\x02\x8C\x8E\x05\x14\v\x02\x8D\x8B\x03\x02" +
		"\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x13\x03\x02\x02\x02\x8F\x90\x07?" +
		"\x02\x02\x90\x91\x07\n\x02\x02\x91\x9E\x05\x16\f\x02\x92\x93\x07?\x02" +
		"\x02\x93\x94\x07\n\x02\x02\x94\x95\x07;\x02\x02\x95\x9E\x056\x1C\x02\x96" +
		"\x97\x07?\x02\x02\x97\x98\x07\n\x02\x02\x98\x9A\x072\x02\x02\x99\x9B\x05" +
		"(\x15\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\x9E\x05\x1A\x0E\x02\x9D\x8F\x03\x02\x02\x02\x9D\x92\x03" +
		"\x02\x02\x02\x9D\x96\x03\x02\x02\x02\x9E\x15\x03\x02\x02\x02\x9F\xA1\x05" +
		"\x1E\x10\x02\xA0\xA2\x05\"\x12\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03" +
		"\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA5\x05\x18\r\x02\xA4\xA3\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x17\x03\x02\x02\x02\xA6\xAA\x07" +
		"\r\x02\x02\xA7\xA9\x07\x04\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03" +
		"\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xB6\x03" +
		"\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB3\x05\x04\x03\x02\xAE\xAF\x05" +
		"<\x1F\x02\xAF\xB0\x05\x04\x03\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAE\x03" +
		"\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03" +
		"\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xAD\x03" +
		"\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBB\x03\x02\x02\x02\xB8\xBA\x07" +
		"\x04\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03" +
		"\x02\x02\x02\xBE\xBF\x07\x0E\x02\x02\xBF\x19\x03\x02\x02\x02\xC0\xC4\x07" +
		"\r\x02\x02\xC1\xC3\x07\x04\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03" +
		"\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xD0\x03" +
		"\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCD\x05\x1C\x0F\x02\xC8\xC9\x05" +
		"<\x1F\x02\xC9\xCA\x05\x1C\x0F\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC8\x03" +
		"\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xC7\x03" +
		"\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD5\x03\x02\x02\x02\xD2\xD4\x07" +
		"\x04\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03" +
		"\x02\x02\x02\xD8\xD9\x07\x0E\x02\x02\xD9\x1B\x03\x02\x02\x02\xDA\xDE\x05" +
		"\f\x07\x02\xDB\xDC\x07<\x02\x02\xDC\xDE\x05.\x18\x02\xDD\xDA\x03\x02\x02" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDE\x1D\x03\x02\x02\x02\xDF\xE3\x07\v\x02" +
		"\x02\xE0\xE2\x07\x04\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02\x02" +
		"\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xEF\x03\x02\x02" +
		"\x02\xE5\xE3\x03\x02\x02\x02\xE6\xEC\x05 \x11\x02\xE7\xE8\x05<\x1F\x02" +
		"\xE8\xE9\x05 \x11\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE7\x03\x02\x02\x02" +
		"\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02" +
		"\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xE6\x03\x02\x02\x02" +
		"\xEF\xF0\x03\x02\x02\x02\xF0\xF4\x03\x02\x02\x02\xF1\xF3\x07\x04\x02\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02" +
		"\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02" +
		"\xF7\xF8\x07\f\x02\x02\xF8\xF9\x07\x12\x02\x02\xF9\x1F\x03\x02\x02\x02" +
		"\xFA\xFC\t\x02\x02\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02" +
		"\xFC\xFE\x03\x02\x02\x02\xFD\xFF\x07*\x02\x02\xFE\xFD\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u010B\x052\x1A" +
		"\x02\u0101\u0103\t\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0106\x07*\x02\x02" +
		"\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03" +
		"\x02\x02\x02\u0107\u0108\x07\n\x02\x02\u0108\u010B\x05,\x17\x02\u0109" +
		"\u010B\x07)\x02\x02\u010A\xFB\x03\x02\x02\x02\u010A\u0102\x03\x02\x02" +
		"\x02\u010A\u0109\x03\x02\x02\x02\u010B!\x03\x02\x02\x02\u010C\u010D\x05" +
		",\x17\x02\u010D#\x03\x02\x02\x02\u010E\u0110\x07\x04\x02\x02\u010F\u010E" +
		"\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\u0111\x03" +
		"\x02\x02\x02\u0114\u011A\x05&\x14\x02\u0115\u0116\x05<\x1F\x02\u0116\u0117" +
		"\x05&\x14\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0115\x03\x02\x02\x02" +
		"\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03" +
		"\x02\x02\x02\u011B\u0120\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D" +
		"\u011F\x07\x04\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0122\x03\x02" +
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
		"%\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0125\x07\"\x02\x02" +
		"\u0124\u0123\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03" +
		"\x02\x02\x02\u0126\u0129\x054\x1B\x02\u0127\u0129\x07)\x02\x02\u0128\u0124" +
		"\x03\x02\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\'\x03\x02\x02\x02\u012A" +
		"\u012E\x07/\x02\x02\u012B\u012D\x07\x04\x02\x02\u012C\u012B\x03\x02\x02" +
		"\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F" +
		"\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02" +
		"\u0131\u0137\x05*\x16\x02\u0132\u0133\x05<\x1F\x02\u0133\u0134\x05*\x16" +
		"\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0132\x03\x02\x02\x02\u0136\u0139" +
		"\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
		"\u0138\u013D\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013C\x07" +
		"\x04\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02" +
		"\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0141\x07.\x02\x02\u0141)\x03" +
		"\x02\x02\x02\u0142\u0147\x052\x1A\x02\u0143\u0144\x07\n\x02\x02\u0144" +
		"\u0147\x05,\x17\x02\u0145\u0147\x07)\x02\x02\u0146\u0142\x03\x02\x02\x02" +
		"\u0146\u0143\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147+\x03\x02" +
		"\x02\x02\u0148\u0149\x07\'\x02\x02\u0149\u014A\x05\x1E\x10\x02\u014A\u014B" +
		"\x05\"\x12\x02\u014B\u0150\x03\x02\x02\x02\u014C\u014D\x07\'\x02\x02\u014D" +
		"\u0150\x05.\x18\x02\u014E\u0150\x05.\x18\x02\u014F\u0148\x03\x02\x02\x02" +
		"\u014F\u014C\x03\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150-\x03\x02" +
		"\x02\x02\u0151\u0152\b\x18\x01\x02\u0152\u016B\x07?\x02\x02\u0153\u0157" +
		"\x07/\x02\x02\u0154\u0156\x07\x04\x02\x02\u0155\u0154\x03\x02\x02\x02" +
		"\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03" +
		"\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A" +
		"\u0160\x050\x19\x02\u015B\u015C\x05<\x1F\x02\u015C\u015D\x050\x19\x02" +
		"\u015D\u015F\x03\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015F\u0162\x03" +
		"\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0166\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0165\x07\x04" +
		"\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166" +
		"\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02" +
		"\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016A\x07.\x02\x02\u016A\u016C" +
		"\x03\x02\x02\x02\u016B\u0153\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u0172\x03\x02\x02\x02\u016D\u016E\f\x03\x02\x02\u016E\u016F\x07" +
		"#\x02\x02\u016F\u0171\x05.\x18\x04\u0170\u016D\x03\x02\x02\x02\u0171\u0174" +
		"\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02" +
		"\u0173/\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x05,\x17" +
		"\x02\u0176\u0178\x054\x1B\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176" +
		"\x03\x02\x02\x02\u01781\x03\x02\x02\x02\u0179\u017A\x07?\x02\x02\u017A" +
		"\u017B\x07\n\x02\x02\u017B\u017C\x07\x13\x02\x02\u017C\u0187\x054\x1B" +
		"\x02\u017D\u017E\x07?\x02\x02\u017E\u017F\x07\n\x02\x02\u017F\u0187\x05" +
		",\x17\x02\u0180\u0181\x07?\x02\x02\u0181\u0182\x07\n\x02\x02\u0182\u0183" +
		"\x05,\x17\x02\u0183\u0184\x07\x13\x02\x02\u0184\u0185\x054\x1B\x02\u0185" +
		"\u0187\x03\x02\x02\x02\u0186\u0179\x03\x02\x02\x02\u0186\u017D\x03\x02" +
		"\x02\x02\u0186\u0180\x03\x02\x02\x02\u01873\x03\x02\x02\x02\u0188\u0189" +
		"\b\x1B\x01\x02\u0189\u01A9\x07\x03\x02\x02\u018A\u01A9\x07?\x02\x02\u018B" +
		"\u018C\x07\v\x02\x02\u018C\u018D\x054\x1B\x02\u018D\u018E\x07\f\x02\x02" +
		"\u018E\u01A9\x03\x02\x02\x02\u018F\u0193\x07\x0F\x02\x02\u0190\u0192\x07" +
		"\x04\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u019F\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u019C\x05:\x1E\x02\u0197\u0198" +
		"\x05<\x1F\x02\u0198\u0199\x05:\x1E\x02\u0199\u019B\x03\x02\x02\x02\u019A" +
		"\u0197\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E" +
		"\u019C\x03\x02\x02\x02\u019F\u0196\x03\x02\x02\x02\u019F\u01A0\x03\x02" +
		"\x02\x02\u01A0\u01A4\x03\x02\x02\x02\u01A1\u01A3\x07\x04\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02" +
		"\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6" +
		"\u01A4\x03\x02\x02\x02\u01A7\u01A9\x07\x10\x02\x02\u01A8\u0188\x03\x02" +
		"\x02\x02\u01A8\u018A\x03\x02\x02\x02\u01A8\u018B\x03\x02\x02\x02\u01A8" +
		"\u018F\x03\x02\x02\x02\u01A9\u01BE\x03\x02\x02\x02\u01AA\u01AB\f\x07\x02" +
		"\x02\u01AB\u01AC\t\x03\x02\x02\u01AC\u01BD\x054\x1B\b\u01AD\u01AE\f\x06" +
		"\x02\x02\u01AE\u01AF\t\x04\x02\x02\u01AF\u01BD\x054\x1B\x07\u01B0\u01B1" +
		"\f\x05\x02\x02\u01B1\u01B2\t\x05\x02\x02\u01B2\u01BD\x054\x1B\x06\u01B3" +
		"\u01B4\f\v\x02\x02\u01B4\u01B5\x07#\x02\x02\u01B5\u01BD\x07?\x02\x02\u01B6" +
		"\u01B7\f\x04\x02\x02\u01B7\u01B9\x07\v\x02\x02\u01B8\u01BA\x05$\x13\x02" +
		"\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03" +
		"\x02\x02\x02\u01BB\u01BD\x07\f\x02\x02\u01BC\u01AA\x03\x02\x02\x02\u01BC" +
		"\u01AD\x03\x02\x02\x02\u01BC\u01B0\x03\x02\x02\x02\u01BC\u01B3\x03\x02" +
		"\x02\x02\u01BC\u01B6\x03\x02\x02\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE" +
		"\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF5\x03\x02\x02" +
		"\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C5\x07\r\x02\x02\u01C2\u01C4" +
		"\x07\x04\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02" +
		"\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01D1\x03" +
		"\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CE\x058\x1D\x02\u01C9" +
		"\u01CA\x05<\x1F\x02\u01CA\u01CB\x058\x1D\x02\u01CB\u01CD\x03\x02\x02\x02" +
		"\u01CC\u01C9\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0" +
		"\u01CE\x03\x02\x02\x02\u01D1\u01C8\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2\u01D6\x03\x02\x02\x02\u01D3\u01D5\x07\x04\x02\x02\u01D4" +
		"\u01D3\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02" +
		"\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8" +
		"\u01D6\x03\x02\x02\x02\u01D9\u01DA\x07\x0E\x02\x02\u01DA7\x03\x02\x02" +
		"\x02\u01DB\u01DC\x07?\x02\x02\u01DC\u01E0\x07\v\x02\x02\u01DD\u01DF\x07" +
		"\x04\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0" +
		"\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01EC\x03\x02" +
		"\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E9\x05 \x11\x02\u01E4\u01E5" +
		"\x05<\x1F\x02\u01E5\u01E6\x05 \x11\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7" +
		"\u01E4\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02" +
		"\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EC\u01E3\x03\x02\x02\x02\u01EC\u01ED\x03\x02" +
		"\x02\x02\u01ED\u01F1\x03\x02\x02\x02\u01EE\u01F0\x07\x04\x02\x02\u01EF" +
		"\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F4\u01F7\x07\f\x02\x02\u01F5\u01F7\x07?\x02" +
		"\x02\u01F6\u01DB\x03\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F79\x03" +
		"\x02\x02\x02\u01F8\u01F9\x07?\x02\x02\u01F9\u01FA\x07\n\x02\x02\u01FA" +
		"\u01FB\x054\x1B\x02\u01FB;\x03\x02\x02\x02\u01FC\u01FE\x07\x04\x02\x02" +
		"\u01FD\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u01FD\x03" +
		"\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201" +
		"\u0203\x07\x11\x02\x02\u0202\u01FD\x03\x02\x02\x02\u0202\u0201\x03\x02" +
		"\x02\x02\u0203=\x03\x02\x02\x02G@BMXdjo{\x7F\x86\x8D\x9A\x9D\xA1\xA4\xAA" +
		"\xB3\xB6\xBB\xC4\xCD\xD0\xD5\xDD\xE3\xEC\xEF\xF4\xFB\xFE\u0102\u0105\u010A" +
		"\u0111\u011A\u0120\u0124\u0128\u012E\u0137\u013D\u0146\u014F\u0157\u0160" +
		"\u0166\u016B\u0172\u0177\u0186\u0193\u019C\u019F\u01A4\u01A8\u01B9\u01BC" +
		"\u01BE\u01C5\u01CE\u01D1\u01D6\u01E0\u01E9\u01EC\u01F1\u01F6\u01FF\u0202";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuxParser.__ATN) {
			LuxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuxParser._serializedATN));
		}

		return LuxParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LuxParser.EOF, 0); }
	public taggedDeclaration(): TaggedDeclarationContext[];
	public taggedDeclaration(i: number): TaggedDeclarationContext;
	public taggedDeclaration(i?: number): TaggedDeclarationContext | TaggedDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TaggedDeclarationContext);
		} else {
			return this.getRuleContext(i, TaggedDeclarationContext);
		}
	}
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DecStmtContext extends StatementContext {
	public taggedDeclaration(): TaggedDeclarationContext {
		return this.getRuleContext(0, TaggedDeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitDecStmt) {
			return visitor.visitDecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStmtContext extends StatementContext {
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public OPEQ(): TerminalNode { return this.getToken(LuxParser.OPEQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(LuxParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnCallStmtContext extends StatementContext {
	public fnCallStatement(): FnCallStatementContext {
		return this.getRuleContext(0, FnCallStatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnCallStmt) {
			return visitor.visitFnCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StatementContext {
	public IF(): TerminalNode { return this.getToken(LuxParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakStmtContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(LuxParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStmtContext extends StatementContext {
	public forStatement(): ForStatementContext {
		return this.getRuleContext(0, ForStatementContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_forStatement; }
	public copyFrom(ctx: ForStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForInfinityStmtContext extends ForStatementContext {
	public FOR(): TerminalNode { return this.getToken(LuxParser.FOR, 0); }
	constructor(ctx: ForStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitForInfinityStmt) {
			return visitor.visitForInfinityStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForAssignStmtContext extends ForStatementContext {
	public FOR(): TerminalNode { return this.getToken(LuxParser.FOR, 0); }
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public OPEQ(): TerminalNode { return this.getToken(LuxParser.OPEQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ForStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitForAssignStmt) {
			return visitor.visitForAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForVarDefStmtContext extends ForStatementContext {
	public FOR(): TerminalNode { return this.getToken(LuxParser.FOR, 0); }
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public OPEQ(): TerminalNode { return this.getToken(LuxParser.OPEQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public vtype(): VtypeContext | undefined {
		return this.tryGetRuleContext(0, VtypeContext);
	}
	constructor(ctx: ForStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitForVarDefStmt) {
			return visitor.visitForVarDefStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForExprStmtContext extends ForStatementContext {
	public FOR(): TerminalNode { return this.getToken(LuxParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ForStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitForExprStmt) {
			return visitor.visitForExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnCallStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnCallStatement; }
	public copyFrom(ctx: FnCallStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class FnCallStatementImplicitContext extends FnCallStatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(LuxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LuxParser.RPAREN, 0); }
	public fnCallParams(): FnCallParamsContext | undefined {
		return this.tryGetRuleContext(0, FnCallParamsContext);
	}
	constructor(ctx: FnCallStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnCallStatementImplicit) {
			return visitor.visitFnCallStatementImplicit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_lvalue; }
	public copyFrom(ctx: LvalueContext): void {
		super.copyFrom(ctx);
	}
}
export class LvalueIDContext extends LvalueContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: LvalueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitLvalueID) {
			return visitor.visitLvalueID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LvalueMemberContext extends LvalueContext {
	public _left: LvalueContext;
	public _right: Token;
	public OPNAV(): TerminalNode { return this.getToken(LuxParser.OPNAV, 0); }
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: LvalueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitLvalueMember) {
			return visitor.visitLvalueMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaggedDeclarationContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_taggedDeclaration; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTaggedDeclaration) {
			return visitor.visitTaggedDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagsContext extends ParserRuleContext {
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_tags; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTags) {
			return visitor.visitTags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public OPAT(): TerminalNode { return this.getToken(LuxParser.OPAT, 0); }
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_tag; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class VarDecContext extends DeclarationContext {
	public varDef(): VarDefContext {
		return this.getRuleContext(0, VarDefContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitVarDec) {
			return visitor.visitVarDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeDecContext extends DeclarationContext {
	public typeDef(): TypeDefContext {
		return this.getRuleContext(0, TypeDefContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTypeDec) {
			return visitor.visitTypeDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_typeDef; }
	public copyFrom(ctx: TypeDefContext): void {
		super.copyFrom(ctx);
	}
}
export class FuncDecContext extends TypeDefContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public fnDef(): FnDefContext {
		return this.getRuleContext(0, FnDefContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFuncDec) {
			return visitor.visitFuncDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumDecContext extends TypeDefContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public ENUM(): TerminalNode { return this.getToken(LuxParser.ENUM, 0); }
	public enumScope(): EnumScopeContext {
		return this.getRuleContext(0, EnumScopeContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitEnumDec) {
			return visitor.visitEnumDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassDecContext extends TypeDefContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public CLASS(): TerminalNode { return this.getToken(LuxParser.CLASS, 0); }
	public classScope(): ClassScopeContext {
		return this.getRuleContext(0, ClassScopeContext);
	}
	public tmplDefParamList(): TmplDefParamListContext | undefined {
		return this.tryGetRuleContext(0, TmplDefParamListContext);
	}
	constructor(ctx: TypeDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitClassDec) {
			return visitor.visitClassDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefContext extends ParserRuleContext {
	public fnType(): FnTypeContext {
		return this.getRuleContext(0, FnTypeContext);
	}
	public fnReturnType(): FnReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnReturnTypeContext);
	}
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnDef; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnDef) {
			return visitor.visitFnDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public LCURL(): TerminalNode { return this.getToken(LuxParser.LCURL, 0); }
	public RCURL(): TerminalNode { return this.getToken(LuxParser.RCURL, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_scope; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassScopeContext extends ParserRuleContext {
	public LCURL(): TerminalNode { return this.getToken(LuxParser.LCURL, 0); }
	public RCURL(): TerminalNode { return this.getToken(LuxParser.RCURL, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public classScopeDec(): ClassScopeDecContext[];
	public classScopeDec(i: number): ClassScopeDecContext;
	public classScopeDec(i?: number): ClassScopeDecContext | ClassScopeDecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassScopeDecContext);
		} else {
			return this.getRuleContext(i, ClassScopeDecContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_classScope; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitClassScope) {
			return visitor.visitClassScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassScopeDecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_classScopeDec; }
	public copyFrom(ctx: ClassScopeDecContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassScopeDecNormalContext extends ClassScopeDecContext {
	public taggedDeclaration(): TaggedDeclarationContext {
		return this.getRuleContext(0, TaggedDeclarationContext);
	}
	constructor(ctx: ClassScopeDecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitClassScopeDecNormal) {
			return visitor.visitClassScopeDecNormal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassScopeInheritContext extends ClassScopeDecContext {
	public INHERIT(): TerminalNode { return this.getToken(LuxParser.INHERIT, 0); }
	public plainType(): PlainTypeContext {
		return this.getRuleContext(0, PlainTypeContext);
	}
	constructor(ctx: ClassScopeDecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitClassScopeInherit) {
			return visitor.visitClassScopeInherit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(LuxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LuxParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(LuxParser.ARROW, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public fnDefParam(): FnDefParamContext[];
	public fnDefParam(i: number): FnDefParamContext;
	public fnDefParam(i?: number): FnDefParamContext | FnDefParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnDefParamContext);
		} else {
			return this.getRuleContext(i, FnDefParamContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnType; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnType) {
			return visitor.visitFnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefParamContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnDefParam; }
	public copyFrom(ctx: FnDefParamContext): void {
		super.copyFrom(ctx);
	}
}
export class FnDefParamFullContext extends FnDefParamContext {
	public varDef(): VarDefContext {
		return this.getRuleContext(0, VarDefContext);
	}
	public OPELIPSE(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPELIPSE, 0); }
	public OPMOD(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMOD, 0); }
	public OPMOVE(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMOVE, 0); }
	constructor(ctx: FnDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnDefParamFull) {
			return visitor.visitFnDefParamFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnDefParamOnlyTypeContext extends FnDefParamContext {
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	public OPELIPSE(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPELIPSE, 0); }
	public OPMOD(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMOD, 0); }
	public OPMOVE(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMOVE, 0); }
	constructor(ctx: FnDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnDefParamOnlyType) {
			return visitor.visitFnDefParamOnlyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnDefParamSkipContext extends FnDefParamContext {
	public OPSKIP(): TerminalNode { return this.getToken(LuxParser.OPSKIP, 0); }
	constructor(ctx: FnDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnDefParamSkip) {
			return visitor.visitFnDefParamSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnReturnTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnReturnType; }
	public copyFrom(ctx: FnReturnTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class FnReturnTypeSingleContext extends FnReturnTypeContext {
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	constructor(ctx: FnReturnTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnReturnTypeSingle) {
			return visitor.visitFnReturnTypeSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnCallParamsContext extends ParserRuleContext {
	public fnCallParam(): FnCallParamContext[];
	public fnCallParam(i: number): FnCallParamContext;
	public fnCallParam(i?: number): FnCallParamContext | FnCallParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnCallParamContext);
		} else {
			return this.getRuleContext(i, FnCallParamContext);
		}
	}
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnCallParams; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnCallParams) {
			return visitor.visitFnCallParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnCallParamContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public OPMOD(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMOD, 0); }
	public OPSKIP(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPSKIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_fnCallParam; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitFnCallParam) {
			return visitor.visitFnCallParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TmplDefParamListContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(LuxParser.LT, 0); }
	public tmplDefParam(): TmplDefParamContext[];
	public tmplDefParam(i: number): TmplDefParamContext;
	public tmplDefParam(i?: number): TmplDefParamContext | TmplDefParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TmplDefParamContext);
		} else {
			return this.getRuleContext(i, TmplDefParamContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(LuxParser.GT, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_tmplDefParamList; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTmplDefParamList) {
			return visitor.visitTmplDefParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TmplDefParamContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_tmplDefParam; }
	public copyFrom(ctx: TmplDefParamContext): void {
		super.copyFrom(ctx);
	}
}
export class TmplDefParamFullContext extends TmplDefParamContext {
	public varDef(): VarDefContext {
		return this.getRuleContext(0, VarDefContext);
	}
	constructor(ctx: TmplDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTmplDefParamFull) {
			return visitor.visitTmplDefParamFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TmplDefParamOnlyTypeContext extends TmplDefParamContext {
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	constructor(ctx: TmplDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTmplDefParamOnlyType) {
			return visitor.visitTmplDefParamOnlyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TmplDefParamSkipContext extends TmplDefParamContext {
	public OPSKIP(): TerminalNode { return this.getToken(LuxParser.OPSKIP, 0); }
	constructor(ctx: TmplDefParamContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTmplDefParamSkip) {
			return visitor.visitTmplDefParamSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VtypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_vtype; }
	public copyFrom(ctx: VtypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeFunctionPtrContext extends VtypeContext {
	public OPREF(): TerminalNode { return this.getToken(LuxParser.OPREF, 0); }
	public fnType(): FnTypeContext {
		return this.getRuleContext(0, FnTypeContext);
	}
	public fnReturnType(): FnReturnTypeContext {
		return this.getRuleContext(0, FnReturnTypeContext);
	}
	constructor(ctx: VtypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTypeFunctionPtr) {
			return visitor.visitTypeFunctionPtr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRefContext extends VtypeContext {
	public OPREF(): TerminalNode { return this.getToken(LuxParser.OPREF, 0); }
	public plainType(): PlainTypeContext {
		return this.getRuleContext(0, PlainTypeContext);
	}
	constructor(ctx: VtypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypePlainContext extends VtypeContext {
	public plainType(): PlainTypeContext {
		return this.getRuleContext(0, PlainTypeContext);
	}
	constructor(ctx: VtypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTypePlain) {
			return visitor.visitTypePlain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlainTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_plainType; }
	public copyFrom(ctx: PlainTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalTypeContext extends PlainTypeContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(LuxParser.LT, 0); }
	public tmplParam(): TmplParamContext[];
	public tmplParam(i: number): TmplParamContext;
	public tmplParam(i?: number): TmplParamContext | TmplParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TmplParamContext);
		} else {
			return this.getRuleContext(i, TmplParamContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(LuxParser.GT, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(ctx: PlainTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitNormalType) {
			return visitor.visitNormalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeInTypeContext extends PlainTypeContext {
	public plainType(): PlainTypeContext[];
	public plainType(i: number): PlainTypeContext;
	public plainType(i?: number): PlainTypeContext | PlainTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PlainTypeContext);
		} else {
			return this.getRuleContext(i, PlainTypeContext);
		}
	}
	public OPNAV(): TerminalNode { return this.getToken(LuxParser.OPNAV, 0); }
	constructor(ctx: PlainTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTypeInType) {
			return visitor.visitTypeInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TmplParamContext extends ParserRuleContext {
	public vtype(): VtypeContext | undefined {
		return this.tryGetRuleContext(0, VtypeContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_tmplParam; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitTmplParam) {
			return visitor.visitTmplParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_varDef; }
	public copyFrom(ctx: VarDefContext): void {
		super.copyFrom(ctx);
	}
}
export class VarDefAssignImplicitContext extends VarDefContext {
	public _id: Token;
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public OPEQ(): TerminalNode { return this.getToken(LuxParser.OPEQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: VarDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitVarDefAssignImplicit) {
			return visitor.visitVarDefAssignImplicit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarDefOnlyContext extends VarDefContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	constructor(ctx: VarDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitVarDefOnly) {
			return visitor.visitVarDefOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarDefAssignExplicitContext extends VarDefContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	public OPEQ(): TerminalNode { return this.getToken(LuxParser.OPEQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: VarDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitVarDefAssignExplicit) {
			return visitor.visitVarDefAssignExplicit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberExprContext extends ExprContext {
	public _left: ExprContext;
	public _right: Token;
	public OPNAV(): TerminalNode { return this.getToken(LuxParser.OPNAV, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitMemberExpr) {
			return visitor.visitMemberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberEContext extends ExprContext {
	public _value: Token;
	public NUMBER(): TerminalNode { return this.getToken(LuxParser.NUMBER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitNumberE) {
			return visitor.visitNumberE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends ExprContext {
	public _id: Token;
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(LuxParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(LuxParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitBracketExpr) {
			return visitor.visitBracketExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixExprContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OPMULT(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMULT, 0); }
	public OPDIV(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPDIV, 0); }
	public OPPLUS(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPPLUS, 0); }
	public OPMINUS(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPMINUS, 0); }
	public OPEQ(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPEQ, 0); }
	public OPUNEQ(): TerminalNode | undefined { return this.tryGetToken(LuxParser.OPUNEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitInfixExpr) {
			return visitor.visitInfixExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImplFnCallExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(LuxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LuxParser.RPAREN, 0); }
	public fnCallParams(): FnCallParamsContext | undefined {
		return this.tryGetRuleContext(0, FnCallParamsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitImplFnCallExpr) {
			return visitor.visitImplFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExprContext extends ExprContext {
	public LSQUARE(): TerminalNode { return this.getToken(LuxParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(LuxParser.RSQUARE, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public objectLiteralEntry(): ObjectLiteralEntryContext[];
	public objectLiteralEntry(i: number): ObjectLiteralEntryContext;
	public objectLiteralEntry(i?: number): ObjectLiteralEntryContext | ObjectLiteralEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectLiteralEntryContext);
		} else {
			return this.getRuleContext(i, ObjectLiteralEntryContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpr) {
			return visitor.visitObjectLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumScopeContext extends ParserRuleContext {
	public LCURL(): TerminalNode { return this.getToken(LuxParser.LCURL, 0); }
	public RCURL(): TerminalNode { return this.getToken(LuxParser.RCURL, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public enumEntry(): EnumEntryContext[];
	public enumEntry(i: number): EnumEntryContext;
	public enumEntry(i?: number): EnumEntryContext | EnumEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumEntryContext);
		} else {
			return this.getRuleContext(i, EnumEntryContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_enumScope; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitEnumScope) {
			return visitor.visitEnumScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumEntryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_enumEntry; }
	public copyFrom(ctx: EnumEntryContext): void {
		super.copyFrom(ctx);
	}
}
export class EnumEntryTaggedContext extends EnumEntryContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(LuxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LuxParser.RPAREN, 0); }
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public fnDefParam(): FnDefParamContext[];
	public fnDefParam(i: number): FnDefParamContext;
	public fnDefParam(i?: number): FnDefParamContext | FnDefParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnDefParamContext);
		} else {
			return this.getRuleContext(i, FnDefParamContext);
		}
	}
	public delim(): DelimContext[];
	public delim(i: number): DelimContext;
	public delim(i?: number): DelimContext | DelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DelimContext);
		} else {
			return this.getRuleContext(i, DelimContext);
		}
	}
	constructor(ctx: EnumEntryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitEnumEntryTagged) {
			return visitor.visitEnumEntryTagged(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumEntryPlainContext extends EnumEntryContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	constructor(ctx: EnumEntryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitEnumEntryPlain) {
			return visitor.visitEnumEntryPlain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralEntryContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(LuxParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_objectLiteralEntry; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralEntry) {
			return visitor.visitObjectLiteralEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelimContext extends ParserRuleContext {
	public ENDL(): TerminalNode[];
	public ENDL(i: number): TerminalNode;
	public ENDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuxParser.ENDL);
		} else {
			return this.getToken(LuxParser.ENDL, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuxParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_delim; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitDelim) {
			return visitor.visitDelim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


