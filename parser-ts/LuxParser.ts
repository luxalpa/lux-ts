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
	public static readonly OPASSIGN = 17;
	public static readonly OPEQ = 18;
	public static readonly OPUNEQ = 19;
	public static readonly SEMIC = 20;
	public static readonly OPPLUS = 21;
	public static readonly OPMOVE = 22;
	public static readonly OPINC = 23;
	public static readonly OPDEC = 24;
	public static readonly OPAPLUS = 25;
	public static readonly OPAMINUS = 26;
	public static readonly OPADIV = 27;
	public static readonly OPAMULT = 28;
	public static readonly OPAMOD = 29;
	public static readonly OPMINUS = 30;
	public static readonly OPMULT = 31;
	public static readonly OPDIV = 32;
	public static readonly OPMOD = 33;
	public static readonly OPNAV = 34;
	public static readonly OPCOAL = 35;
	public static readonly OPSAFENAV = 36;
	public static readonly OPQUEST = 37;
	public static readonly OPREF = 38;
	public static readonly OPRANGE = 39;
	public static readonly OPSKIP = 40;
	public static readonly OPELIPSE = 41;
	public static readonly AND = 42;
	public static readonly OR = 43;
	public static readonly NOT = 44;
	public static readonly GT = 45;
	public static readonly LT = 46;
	public static readonly GTE = 47;
	public static readonly LTE = 48;
	public static readonly CLASS = 49;
	public static readonly RETURN = 50;
	public static readonly IF = 51;
	public static readonly ELSE = 52;
	public static readonly BREAK = 53;
	public static readonly CONTINUE = 54;
	public static readonly GOTO = 55;
	public static readonly FOR = 56;
	public static readonly MATCH = 57;
	public static readonly ENUM = 58;
	public static readonly INHERIT = 59;
	public static readonly STRING = 60;
	public static readonly MACRO = 61;
	public static readonly ID = 62;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_fnCallStatement = 2;
	public static readonly RULE_lvalue = 3;
	public static readonly RULE_taggedDeclaration = 4;
	public static readonly RULE_tags = 5;
	public static readonly RULE_tag = 6;
	public static readonly RULE_declaration = 7;
	public static readonly RULE_typeDef = 8;
	public static readonly RULE_fnDef = 9;
	public static readonly RULE_scope = 10;
	public static readonly RULE_classScope = 11;
	public static readonly RULE_classScopeDec = 12;
	public static readonly RULE_fnType = 13;
	public static readonly RULE_fnDefParam = 14;
	public static readonly RULE_fnReturnType = 15;
	public static readonly RULE_fnCallParams = 16;
	public static readonly RULE_fnCallParam = 17;
	public static readonly RULE_tmplDefParamList = 18;
	public static readonly RULE_tmplDefParam = 19;
	public static readonly RULE_vtype = 20;
	public static readonly RULE_plainType = 21;
	public static readonly RULE_tmplParam = 22;
	public static readonly RULE_varDef = 23;
	public static readonly RULE_expr = 24;
	public static readonly RULE_enumScope = 25;
	public static readonly RULE_enumEntry = 26;
	public static readonly RULE_objectLiteralEntry = 27;
	public static readonly RULE_delim = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "fnCallStatement", "lvalue", "taggedDeclaration", 
		"tags", "tag", "declaration", "typeDef", "fnDef", "scope", "classScope", 
		"classScopeDec", "fnType", "fnDefParam", "fnReturnType", "fnCallParams", 
		"fnCallParam", "tmplDefParamList", "tmplDefParam", "vtype", "plainType", 
		"tmplParam", "varDef", "expr", "enumScope", "enumEntry", "objectLiteralEntry", 
		"delim",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'#'", 
		"'@'", "':'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "'=>'", 
		"'='", "'=='", "'!='", "';'", "'+'", "'->'", "'++'", "'--'", "'+='", "'-='", 
		"'/='", "'*='", "'%='", "'-'", "'*'", "'/'", "'%'", "'.'", "'??'", "'?.'", 
		"'?'", "'&'", "'~'", "'_'", "'...'", "'and'", "'or'", "'!'", "'>'", "'<'", 
		"'>='", "'<='", "'class'", "'return'", "'if'", "'else'", "'break'", "'continue'", 
		"'goto'", "'for'", "'match'", "'enum'", "'inherit'", undefined, "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "ENDL", "MLCOMMENT", "SLCOMMENT", "WS", "OPNS", "OPAT", 
		"COLON", "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", "RSQUARE", "COMMA", 
		"ARROW", "OPASSIGN", "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", "OPMOVE", "OPINC", 
		"OPDEC", "OPAPLUS", "OPAMINUS", "OPADIV", "OPAMULT", "OPAMOD", "OPMINUS", 
		"OPMULT", "OPDIV", "OPMOD", "OPNAV", "OPCOAL", "OPSAFENAV", "OPQUEST", 
		"OPREF", "OPRANGE", "OPSKIP", "OPELIPSE", "AND", "OR", "NOT", "GT", "LT", 
		"GTE", "LTE", "CLASS", "RETURN", "IF", "ELSE", "BREAK", "CONTINUE", "GOTO", 
		"FOR", "MATCH", "ENUM", "INHERIT", "STRING", "MACRO", "ID",
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
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LuxParser.OPAT:
				case LuxParser.ID:
					{
					this.state = 58;
					this.taggedDeclaration();
					}
					break;
				case LuxParser.ENDL:
					{
					this.state = 59;
					this.match(LuxParser.ENDL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LuxParser.ENDL || _la === LuxParser.OPAT || _la === LuxParser.ID);
			this.state = 64;
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
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new DecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.taggedDeclaration();
				}
				break;

			case 2:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.lvalue(0);
				this.state = 68;
				this.match(LuxParser.OPASSIGN);
				this.state = 69;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 71;
				this.match(LuxParser.RETURN);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.ID) {
					{
					this.state = 72;
					this.expr(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new FnCallStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 75;
				this.fnCallStatement();
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
		this.enterRule(_localctx, 4, LuxParser.RULE_fnCallStatement);
		let _la: number;
		try {
			_localctx = new FnCallStatementImplicitContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.expr(0);
			this.state = 79;
			this.match(LuxParser.LPAREN);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
				{
				this.state = 80;
				this.fnCallParams();
				}
			}

			this.state = 83;
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
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, LuxParser.RULE_lvalue, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new LvalueIDContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 86;
			this.match(LuxParser.ID);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 93;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
					this.state = 88;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 89;
					this.match(LuxParser.OPNAV);
					this.state = 90;
					(_localctx as LvalueMemberContext)._right = this.match(LuxParser.ID);
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
		this.enterRule(_localctx, 8, LuxParser.RULE_taggedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT) {
				{
				this.state = 96;
				this.tags();
				}
			}

			this.state = 99;
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
		this.enterRule(_localctx, 10, LuxParser.RULE_tags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 101;
				this.tag();
				}
				}
				this.state = 104;
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
		this.enterRule(_localctx, 12, LuxParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(LuxParser.OPAT);
			this.state = 107;
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
		this.enterRule(_localctx, 14, LuxParser.RULE_declaration);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new VarDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new TypeDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
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
		this.enterRule(_localctx, 16, LuxParser.RULE_typeDef);
		let _la: number;
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new FuncDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.match(LuxParser.ID);
				this.state = 114;
				this.match(LuxParser.COLON);
				this.state = 115;
				this.fnDef();
				}
				break;

			case 2:
				_localctx = new EnumDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(LuxParser.ID);
				this.state = 117;
				this.match(LuxParser.COLON);
				this.state = 118;
				this.match(LuxParser.ENUM);
				this.state = 119;
				this.enumScope();
				}
				break;

			case 3:
				_localctx = new ClassDecContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.match(LuxParser.ID);
				this.state = 121;
				this.match(LuxParser.COLON);
				this.state = 122;
				this.match(LuxParser.CLASS);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.LT) {
					{
					this.state = 123;
					this.tmplDefParamList();
					}
				}

				this.state = 126;
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
		this.enterRule(_localctx, 18, LuxParser.RULE_fnDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.fnType();
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 130;
				this.fnReturnType();
				}
				break;
			}
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.LCURL) {
				{
				this.state = 133;
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
		this.enterRule(_localctx, 20, LuxParser.RULE_scope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(LuxParser.LCURL);
			this.state = 140;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 137;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.OPAT) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.RETURN || _la === LuxParser.ID) {
				{
				this.state = 143;
				this.statement();
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 144;
						this.delim();
						this.state = 145;
						this.statement();
						}
						}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				}
			}

			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 154;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
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
		this.enterRule(_localctx, 22, LuxParser.RULE_classScope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(LuxParser.LCURL);
			this.state = 166;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 163;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT || _la === LuxParser.INHERIT || _la === LuxParser.ID) {
				{
				this.state = 169;
				this.classScopeDec();
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 170;
						this.delim();
						this.state = 171;
						this.classScopeDec();
						}
						}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
			}

			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 180;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
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
		this.enterRule(_localctx, 24, LuxParser.RULE_classScopeDec);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.OPAT:
			case LuxParser.ID:
				_localctx = new ClassScopeDecNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.taggedDeclaration();
				}
				break;
			case LuxParser.INHERIT:
				_localctx = new ClassScopeInheritContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.match(LuxParser.INHERIT);
				this.state = 190;
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
		this.enterRule(_localctx, 26, LuxParser.RULE_fnType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(LuxParser.LPAREN);
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 194;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
				{
				this.state = 200;
				this.fnDefParam();
				this.state = 206;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 201;
						this.delim();
						this.state = 202;
						this.fnDefParam();
						}
						}
					}
					this.state = 208;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				}
			}

			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 211;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this.match(LuxParser.RPAREN);
			this.state = 218;
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
		this.enterRule(_localctx, 28, LuxParser.RULE_fnDefParam);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new FnDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 220;
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

				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 223;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 226;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new FnDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 227;
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

				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 230;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 233;
				this.match(LuxParser.COLON);
				this.state = 234;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new FnDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 235;
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
		this.enterRule(_localctx, 30, LuxParser.RULE_fnReturnType);
		try {
			_localctx = new FnReturnTypeSingleContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
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
		this.enterRule(_localctx, 32, LuxParser.RULE_fnCallParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 240;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 246;
			this.fnCallParam();
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 247;
					this.delim();
					this.state = 248;
					this.fnCallParam();
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 255;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 260;
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
		this.enterRule(_localctx, 34, LuxParser.RULE_fnCallParam);
		let _la: number;
		try {
			this.state = 266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
			case LuxParser.LPAREN:
			case LuxParser.LSQUARE:
			case LuxParser.OPMOD:
			case LuxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOD) {
					{
					this.state = 261;
					this.match(LuxParser.OPMOD);
					}
				}

				this.state = 264;
				this.expr(0);
				}
				break;
			case LuxParser.OPSKIP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
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
		this.enterRule(_localctx, 36, LuxParser.RULE_tmplDefParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(LuxParser.LT);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 269;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 275;
			this.tmplDefParam();
			this.state = 281;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 276;
					this.delim();
					this.state = 277;
					this.tmplDefParam();
					}
					}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 284;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
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
		this.enterRule(_localctx, 38, LuxParser.RULE_tmplDefParam);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ID:
				_localctx = new TmplDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.varDef();
				}
				break;
			case LuxParser.COLON:
				_localctx = new TmplDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 293;
				this.match(LuxParser.COLON);
				this.state = 294;
				this.vtype();
				}
				break;
			case LuxParser.OPSKIP:
				_localctx = new TmplDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
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
		this.enterRule(_localctx, 40, LuxParser.RULE_vtype);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new TypeFunctionPtrContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.match(LuxParser.OPREF);
				this.state = 299;
				this.fnType();
				this.state = 300;
				this.fnReturnType();
				}
				break;

			case 2:
				_localctx = new TypeRefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 302;
				this.match(LuxParser.OPREF);
				this.state = 303;
				this.plainType(0);
				}
				break;

			case 3:
				_localctx = new TypePlainContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 304;
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
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, LuxParser.RULE_plainType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new NormalTypeContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 308;
			this.match(LuxParser.ID);
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.match(LuxParser.LT);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 310;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.tmplParam();
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 317;
						this.delim();
						this.state = 318;
						this.tmplParam();
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 325;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 331;
				this.match(LuxParser.GT);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 340;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
					this.state = 335;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 336;
					this.match(LuxParser.OPNAV);
					this.state = 337;
					this.plainType(2);
					}
					}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 44, LuxParser.RULE_tmplParam);
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.vtype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
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
		this.enterRule(_localctx, 46, LuxParser.RULE_varDef);
		try {
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new VarDefAssignImplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				(_localctx as VarDefAssignImplicitContext)._id = this.match(LuxParser.ID);
				this.state = 348;
				this.match(LuxParser.COLON);
				this.state = 349;
				this.match(LuxParser.OPASSIGN);
				this.state = 350;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new VarDefOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.match(LuxParser.ID);
				this.state = 352;
				this.match(LuxParser.COLON);
				this.state = 353;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new VarDefAssignExplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 354;
				this.match(LuxParser.ID);
				this.state = 355;
				this.match(LuxParser.COLON);
				this.state = 356;
				this.vtype();
				this.state = 357;
				this.match(LuxParser.OPASSIGN);
				this.state = 358;
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
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, LuxParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
				{
				_localctx = new NumberEContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 363;
				(_localctx as NumberEContext)._value = this.match(LuxParser.NUMBER);
				}
				break;
			case LuxParser.ID:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 364;
				(_localctx as IdentifierExprContext)._id = this.match(LuxParser.ID);
				}
				break;
			case LuxParser.LPAREN:
				{
				_localctx = new BracketExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 365;
				this.match(LuxParser.LPAREN);
				this.state = 366;
				this.expr(0);
				this.state = 367;
				this.match(LuxParser.RPAREN);
				}
				break;
			case LuxParser.LSQUARE:
				{
				_localctx = new ObjectLiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 369;
				this.match(LuxParser.LSQUARE);
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 370;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.ID) {
					{
					this.state = 376;
					this.objectLiteralEntry();
					this.state = 382;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 377;
							this.delim();
							this.state = 378;
							this.objectLiteralEntry();
							}
							}
						}
						this.state = 384;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					}
					}
				}

				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 387;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 393;
				this.match(LuxParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 411;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 396;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 397;
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
						this.state = 398;
						(_localctx as InfixExprContext)._right = this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 399;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 400;
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
						this.state = 401;
						(_localctx as InfixExprContext)._right = this.expr(4);
						}
						break;

					case 3:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MemberExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 402;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 403;
						this.match(LuxParser.OPNAV);
						this.state = 404;
						(_localctx as MemberExprContext)._right = this.match(LuxParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new ImplFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 405;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 406;
						this.match(LuxParser.LPAREN);
						this.state = 408;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
							{
							this.state = 407;
							this.fnCallParams();
							}
						}

						this.state = 410;
						this.match(LuxParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
		this.enterRule(_localctx, 50, LuxParser.RULE_enumScope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(LuxParser.LCURL);
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 417;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.ID) {
				{
				this.state = 423;
				this.enumEntry();
				this.state = 429;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 424;
						this.delim();
						this.state = 425;
						this.enumEntry();
						}
						}
					}
					this.state = 431;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				}
			}

			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 434;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 440;
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
		this.enterRule(_localctx, 52, LuxParser.RULE_enumEntry);
		let _la: number;
		try {
			let _alt: number;
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				_localctx = new EnumEntryTaggedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.match(LuxParser.ID);
				this.state = 443;
				this.match(LuxParser.LPAREN);
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 444;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
					{
					this.state = 450;
					this.fnDefParam();
					this.state = 456;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 451;
							this.delim();
							this.state = 452;
							this.fnDefParam();
							}
							}
						}
						this.state = 458;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					}
					}
				}

				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 461;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 466;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 467;
				this.match(LuxParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new EnumEntryPlainContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
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
		this.enterRule(_localctx, 54, LuxParser.RULE_objectLiteralEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(LuxParser.ID);
			this.state = 472;
			this.match(LuxParser.COLON);
			this.state = 473;
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
		this.enterRule(_localctx, 56, LuxParser.RULE_delim);
		let _la: number;
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ENDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 475;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === LuxParser.ENDL);
				}
				break;
			case LuxParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
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
		case 3:
			return this.lvalue_sempred(_localctx as LvalueContext, predIndex);

		case 21:
			return this.plainType_sempred(_localctx as PlainTypeContext, predIndex);

		case 24:
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
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u01E6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x06\x02?\n\x02\r\x02\x0E\x02" +
		"@\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03L\n\x03\x03\x03\x05\x03O\n\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04T\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05^\n\x05\f\x05\x0E\x05a\v\x05\x03\x06\x05\x06d\n\x06\x03\x06" +
		"\x03\x06\x03\x07\x06\x07i\n\x07\r\x07\x0E\x07j\x03\b\x03\b\x03\b\x03\t" +
		"\x03\t\x05\tr\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x7F\n\n\x03\n\x05\n\x82\n\n\x03\v\x03\v\x05\v\x86" +
		"\n\v\x03\v\x05\v\x89\n\v\x03\f\x03\f\x07\f\x8D\n\f\f\f\x0E\f\x90\v\f\x03" +
		"\f\x03\f\x03\f\x03\f\x07\f\x96\n\f\f\f\x0E\f\x99\v\f\x05\f\x9B\n\f\x03" +
		"\f\x07\f\x9E\n\f\f\f\x0E\f\xA1\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\xA7\n" +
		"\r\f\r\x0E\r\xAA\v\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB0\n\r\f\r\x0E\r\xB3" +
		"\v\r\x05\r\xB5\n\r\x03\r\x07\r\xB8\n\r\f\r\x0E\r\xBB\v\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xC2\n\x0E\x03\x0F\x03\x0F\x07\x0F\xC6\n\x0F" +
		"\f\x0F\x0E\x0F\xC9\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xCF\n" +
		"\x0F\f\x0F\x0E\x0F\xD2\v\x0F\x05\x0F\xD4\n\x0F\x03\x0F\x07\x0F\xD7\n\x0F" +
		"\f\x0F\x0E\x0F\xDA\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\xE0\n" +
		"\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10" +
		"\x05\x10\xEA\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xEF\n\x10\x03\x11\x03" +
		"\x11\x03\x12\x07\x12\xF4\n\x12\f\x12\x0E\x12\xF7\v\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\xFD\n\x12\f\x12\x0E\x12\u0100\v\x12\x03\x12\x07" +
		"\x12\u0103\n\x12\f\x12\x0E\x12\u0106\v\x12\x03\x13\x05\x13\u0109\n\x13" +
		"\x03\x13\x03\x13\x05\x13\u010D\n\x13\x03\x14\x03\x14\x07\x14\u0111\n\x14" +
		"\f\x14\x0E\x14\u0114\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u011A" +
		"\n\x14\f\x14\x0E\x14\u011D\v\x14\x03\x14\x07\x14\u0120\n\x14\f\x14\x0E" +
		"\x14\u0123\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\u012B\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0134\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u013A\n\x17\f" +
		"\x17\x0E\x17\u013D\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0143" +
		"\n\x17\f\x17\x0E\x17\u0146\v\x17\x03\x17\x07\x17\u0149\n\x17\f\x17\x0E" +
		"\x17\u014C\v\x17\x03\x17\x03\x17\x05\x17\u0150\n\x17\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u0155\n\x17\f\x17\x0E\x17\u0158\v\x17\x03\x18\x03\x18\x05" +
		"\x18\u015C\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u016B\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u0176\n\x1A\f\x1A\x0E\x1A\u0179\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u017F\n\x1A\f\x1A\x0E\x1A\u0182\v\x1A\x05\x1A\u0184\n\x1A" +
		"\x03\x1A\x07\x1A\u0187\n\x1A\f\x1A\x0E\x1A\u018A\v\x1A\x03\x1A\x05\x1A" +
		"\u018D\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u019B\n\x1A\x03\x1A\x07\x1A" +
		"\u019E\n\x1A\f\x1A\x0E\x1A\u01A1\v\x1A\x03\x1B\x03\x1B\x07\x1B\u01A5\n" +
		"\x1B\f\x1B\x0E\x1B\u01A8\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u01AE\n\x1B\f\x1B\x0E\x1B\u01B1\v\x1B\x05\x1B\u01B3\n\x1B\x03\x1B\x07" +
		"\x1B\u01B6\n\x1B\f\x1B\x0E\x1B\u01B9\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x07\x1C\u01C0\n\x1C\f\x1C\x0E\x1C\u01C3\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u01C9\n\x1C\f\x1C\x0E\x1C\u01CC\v\x1C\x05" +
		"\x1C\u01CE\n\x1C\x03\x1C\x07\x1C\u01D1\n\x1C\f\x1C\x0E\x1C\u01D4\v\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u01D8\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x06\x1E\u01DF\n\x1E\r\x1E\x0E\x1E\u01E0\x03\x1E\x05\x1E\u01E4\n\x1E" +
		"\x03\x1E\x02\x02\x05\b,2\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"\x02\x05\x04\x02\x18\x18##\x03\x02!\"\x04\x02\x17\x17  \x02\u0216\x02" +
		">\x03\x02\x02\x02\x04N\x03\x02\x02\x02\x06P\x03\x02\x02\x02\bW\x03\x02" +
		"\x02\x02\nc\x03\x02\x02\x02\fh\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10" +
		"q\x03\x02\x02\x02\x12\x81\x03\x02\x02\x02\x14\x83\x03\x02\x02\x02\x16" +
		"\x8A\x03\x02\x02\x02\x18\xA4\x03\x02\x02\x02\x1A\xC1\x03\x02\x02\x02\x1C" +
		"\xC3\x03\x02\x02\x02\x1E\xEE\x03\x02\x02\x02 \xF0\x03\x02\x02\x02\"\xF5" +
		"\x03\x02\x02\x02$\u010C\x03\x02\x02\x02&\u010E\x03\x02\x02\x02(\u012A" +
		"\x03\x02\x02\x02*\u0133\x03\x02\x02\x02,\u0135\x03\x02\x02\x02.\u015B" +
		"\x03\x02\x02\x020\u016A\x03\x02\x02\x022\u018C\x03\x02\x02\x024\u01A2" +
		"\x03\x02\x02\x026\u01D7\x03\x02\x02\x028\u01D9\x03\x02\x02\x02:\u01E3" +
		"\x03\x02\x02\x02<?\x05\n\x06\x02=?\x07\x04\x02\x02><\x03\x02\x02\x02>" +
		"=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02" +
		"AB\x03\x02\x02\x02BC\x07\x02\x02\x03C\x03\x03\x02\x02\x02DO\x05\n\x06" +
		"\x02EF\x05\b\x05\x02FG\x07\x13\x02\x02GH\x052\x1A\x02HO\x03\x02\x02\x02" +
		"IK\x074\x02\x02JL\x052\x1A\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LO\x03" +
		"\x02\x02\x02MO\x05\x06\x04\x02ND\x03\x02\x02\x02NE\x03\x02\x02\x02NI\x03" +
		"\x02\x02\x02NM\x03\x02\x02\x02O\x05\x03\x02\x02\x02PQ\x052\x1A\x02QS\x07" +
		"\v\x02\x02RT\x05\"\x12\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02" +
		"\x02\x02UV\x07\f\x02\x02V\x07\x03\x02\x02\x02WX\b\x05\x01\x02XY\x07@\x02" +
		"\x02Y_\x03\x02\x02\x02Z[\f\x03\x02\x02[\\\x07$\x02\x02\\^\x07@\x02\x02" +
		"]Z\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02" +
		"`\t\x03\x02\x02\x02a_\x03\x02\x02\x02bd\x05\f\x07\x02cb\x03\x02\x02\x02" +
		"cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x05\x10\t\x02f\v\x03\x02\x02\x02" +
		"gi\x05\x0E\b\x02hg\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02" +
		"jk\x03\x02\x02\x02k\r\x03\x02\x02\x02lm\x07\t\x02\x02mn\x07@\x02\x02n" +
		"\x0F\x03\x02\x02\x02or\x050\x19\x02pr\x05\x12\n\x02qo\x03\x02\x02\x02" +
		"qp\x03\x02\x02\x02r\x11\x03\x02\x02\x02st\x07@\x02\x02tu\x07\n\x02\x02" +
		"u\x82\x05\x14\v\x02vw\x07@\x02\x02wx\x07\n\x02\x02xy\x07<\x02\x02y\x82" +
		"\x054\x1B\x02z{\x07@\x02\x02{|\x07\n\x02\x02|~\x073\x02\x02}\x7F\x05&" +
		"\x14\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
		"\x80\x82\x05\x18\r\x02\x81s\x03\x02\x02\x02\x81v\x03\x02\x02\x02\x81z" +
		"\x03\x02\x02\x02\x82\x13\x03\x02\x02\x02\x83\x85\x05\x1C\x0F\x02\x84\x86" +
		"\x05 \x11\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88" +
		"\x03\x02\x02\x02\x87\x89\x05\x16\f\x02\x88\x87\x03\x02\x02\x02\x88\x89" +
		"\x03\x02\x02\x02\x89\x15\x03\x02\x02\x02\x8A\x8E\x07\r\x02\x02\x8B\x8D" +
		"\x07\x04\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x9A\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x91\x97\x05\x04\x03\x02\x92\x93\x05:\x1E\x02\x93\x94" +
		"\x05\x04\x03\x02\x94\x96\x03\x02\x02\x02\x95\x92\x03\x02\x02\x02\x96\x99" +
		"\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9B" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x91\x03\x02\x02\x02\x9A\x9B" +
		"\x03\x02\x02\x02\x9B\x9F\x03\x02\x02\x02\x9C\x9E\x07\x04\x02\x02\x9D\x9C" +
		"\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0" +
		"\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA3" +
		"\x07\x0E\x02\x02\xA3\x17\x03\x02\x02\x02\xA4\xA8\x07\r\x02\x02\xA5\xA7" +
		"\x07\x04\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xB4\x03\x02\x02\x02\xAA\xA8" +
		"\x03\x02\x02\x02\xAB\xB1\x05\x1A\x0E\x02\xAC\xAD\x05:\x1E\x02\xAD\xAE" +
		"\x05\x1A\x0E\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xB0\xB3" +
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB5" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xAB\x03\x02\x02\x02\xB4\xB5" +
		"\x03\x02\x02\x02\xB5\xB9\x03\x02\x02\x02\xB6\xB8\x07\x04\x02\x02\xB7\xB6" +
		"\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA" +
		"\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD" +
		"\x07\x0E\x02\x02\xBD\x19\x03\x02\x02\x02\xBE\xC2\x05\n\x06\x02\xBF\xC0" +
		"\x07=\x02\x02\xC0\xC2\x05,\x17\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03" +
		"\x02\x02\x02\xC2\x1B\x03\x02\x02\x02\xC3\xC7\x07\v\x02\x02\xC4\xC6\x07" +
		"\x04\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03" +
		"\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xD3\x03\x02\x02\x02\xC9\xC7\x03" +
		"\x02\x02\x02\xCA\xD0\x05\x1E\x10\x02\xCB\xCC\x05:\x1E\x02\xCC\xCD\x05" +
		"\x1E\x10\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCF\xD2\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD4\x03" +
		"\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xCA\x03\x02\x02\x02\xD3\xD4\x03" +
		"\x02\x02\x02\xD4\xD8\x03\x02\x02\x02\xD5\xD7\x07\x04\x02\x02\xD6\xD5\x03" +
		"\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x07" +
		"\f\x02\x02\xDC\xDD\x07\x12\x02\x02\xDD\x1D\x03\x02\x02\x02\xDE\xE0\t\x02" +
		"\x02\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02" +
		"\x02\x02\xE1\xE3\x07+\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xEF\x050\x19\x02\xE5\xE7\t\x02\x02" +
		"\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02" +
		"\x02\xE8\xEA\x07+\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02" +
		"\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07\n\x02\x02\xEC\xEF\x05*\x16\x02" +
		"\xED\xEF\x07*\x02\x02\xEE\xDF\x03\x02\x02\x02\xEE\xE6\x03\x02\x02\x02" +
		"\xEE\xED\x03\x02\x02\x02\xEF\x1F\x03\x02\x02\x02\xF0\xF1\x05*\x16\x02" +
		"\xF1!\x03\x02\x02\x02\xF2\xF4\x07\x04\x02\x02\xF3\xF2\x03\x02\x02\x02" +
		"\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFE\x05$\x13\x02" +
		"\xF9\xFA\x05:\x1E\x02\xFA\xFB\x05$\x13\x02\xFB\xFD\x03\x02\x02\x02\xFC" +
		"\xF9\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\u0104\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0101\u0103\x07\x04\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105#\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\x07#\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u010D\x052\x1A\x02\u010B\u010D\x07*\x02\x02\u010C" +
		"\u0108\x03\x02\x02\x02\u010C\u010B\x03\x02\x02\x02\u010D%\x03\x02\x02" +
		"\x02\u010E\u0112\x070\x02\x02\u010F\u0111\x07\x04\x02\x02\u0110\u010F" +
		"\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02" +
		"\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0112\x03" +
		"\x02\x02\x02\u0115\u011B\x05(\x15\x02\u0116\u0117\x05:\x1E\x02\u0117\u0118" +
		"\x05(\x15\x02\u0118\u011A\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02" +
		"\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u0121\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E" +
		"\u0120\x07\x04\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02" +
		"\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07/\x02" +
		"\x02\u0125\'\x03\x02\x02\x02\u0126\u012B\x050\x19\x02\u0127\u0128\x07" +
		"\n\x02\x02\u0128\u012B\x05*\x16\x02\u0129\u012B\x07*\x02\x02\u012A\u0126" +
		"\x03\x02\x02\x02\u012A\u0127\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02" +
		"\u012B)\x03\x02\x02\x02\u012C\u012D\x07(\x02\x02\u012D\u012E\x05\x1C\x0F" +
		"\x02\u012E\u012F\x05 \x11\x02\u012F\u0134\x03\x02\x02\x02\u0130\u0131" +
		"\x07(\x02\x02\u0131\u0134\x05,\x17\x02\u0132\u0134\x05,\x17\x02\u0133" +
		"\u012C\x03\x02\x02\x02\u0133\u0130\x03\x02\x02\x02\u0133\u0132\x03\x02" +
		"\x02\x02\u0134+\x03\x02\x02\x02\u0135\u0136\b\x17\x01\x02\u0136\u014F" +
		"\x07@\x02\x02\u0137\u013B\x070\x02\x02\u0138\u013A\x07\x04\x02\x02\u0139" +
		"\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02" +
		"\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u0144\x05.\x18\x02\u013F\u0140\x05:\x1E\x02" +
		"\u0140\u0141\x05.\x18\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013F\x03" +
		"\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u014A\x03\x02\x02\x02\u0146\u0144\x03\x02" +
		"\x02\x02\u0147\u0149\x07\x04\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D" +
		"\u014E\x07/\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0137\x03\x02\x02" +
		"\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0156\x03\x02\x02\x02\u0151\u0152" +
		"\f\x03\x02\x02\u0152\u0153\x07$\x02\x02\u0153\u0155\x05,\x17\x04\u0154" +
		"\u0151\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157-\x03\x02\x02\x02\u0158\u0156" +
		"\x03\x02\x02\x02\u0159\u015C\x05*\x16\x02\u015A\u015C\x052\x1A\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C/\x03\x02\x02" +
		"\x02\u015D\u015E\x07@\x02\x02\u015E\u015F\x07\n\x02\x02\u015F\u0160\x07" +
		"\x13\x02\x02\u0160\u016B\x052\x1A\x02\u0161\u0162\x07@\x02\x02\u0162\u0163" +
		"\x07\n\x02\x02\u0163\u016B\x05*\x16\x02\u0164\u0165\x07@\x02\x02\u0165" +
		"\u0166\x07\n\x02\x02\u0166\u0167\x05*\x16\x02\u0167\u0168\x07\x13\x02" +
		"\x02\u0168\u0169\x052\x1A\x02\u0169\u016B\x03\x02\x02\x02\u016A\u015D" +
		"\x03\x02\x02\x02\u016A\u0161\x03\x02\x02\x02\u016A\u0164\x03\x02\x02\x02" +
		"\u016B1\x03\x02\x02\x02\u016C\u016D\b\x1A\x01\x02\u016D\u018D\x07\x03" +
		"\x02\x02\u016E\u018D\x07@\x02\x02\u016F\u0170\x07\v\x02\x02\u0170\u0171" +
		"\x052\x1A\x02\u0171\u0172\x07\f\x02\x02\u0172\u018D\x03\x02\x02\x02\u0173" +
		"\u0177\x07\x0F\x02\x02\u0174\u0176\x07\x04\x02\x02\u0175\u0174\x03\x02" +
		"\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0178\x03\x02\x02\x02\u0178\u0183\x03\x02\x02\x02\u0179\u0177\x03\x02" +
		"\x02\x02\u017A\u0180\x058\x1D\x02\u017B\u017C\x05:\x1E\x02\u017C\u017D" +
		"\x058\x1D\x02\u017D\u017F\x03\x02\x02\x02\u017E\u017B\x03\x02\x02\x02" +
		"\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03" +
		"\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
		"\u017A\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0188\x03\x02" +
		"\x02\x02\u0185\u0187\x07\x04\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187" +
		"\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
		"\u018D\x07\x10\x02\x02\u018C\u016C\x03\x02\x02\x02\u018C\u016E\x03\x02" +
		"\x02\x02\u018C\u016F\x03\x02\x02\x02\u018C\u0173\x03\x02\x02\x02\u018D" +
		"\u019F\x03\x02\x02\x02\u018E\u018F\f\x06\x02\x02\u018F\u0190\t\x03\x02" +
		"\x02\u0190\u019E\x052\x1A\x07\u0191\u0192\f\x05\x02\x02\u0192\u0193\t" +
		"\x04\x02\x02\u0193\u019E\x052\x1A\x06\u0194\u0195\f\n\x02\x02\u0195\u0196" +
		"\x07$\x02\x02\u0196\u019E\x07@\x02\x02\u0197\u0198\f\x04\x02\x02\u0198" +
		"\u019A\x07\v\x02\x02\u0199\u019B\x05\"\x12\x02\u019A\u0199\x03\x02\x02" +
		"\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E" +
		"\x07\f\x02\x02\u019D\u018E\x03\x02\x02\x02\u019D\u0191\x03\x02\x02\x02" +
		"\u019D\u0194\x03\x02\x02\x02\u019D\u0197\x03\x02\x02\x02\u019E\u01A1\x03" +
		"\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
		"3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A6\x07\r\x02\x02" +
		"\u01A3\u01A5\x07\x04\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A5\u01A8\x03" +
		"\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
		"\u01B2\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AF\x056\x1C" +
		"\x02\u01AA\u01AB\x05:\x1E\x02\u01AB\u01AC\x056\x1C\x02\u01AC\u01AE\x03" +
		"\x02\x02\x02\u01AD\u01AA\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B3\x03\x02" +
		"\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01A9\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B7\x03\x02\x02\x02\u01B4\u01B6\x07\x04" +
		"\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7" +
		"\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02" +
		"\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BB\x07\x0E\x02\x02\u01BB" +
		"5\x03\x02\x02\x02\u01BC\u01BD\x07@\x02\x02\u01BD\u01C1\x07\v\x02\x02\u01BE" +
		"\u01C0\x07\x04\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02" +
		"\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01CD\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01CA\x05\x1E" +
		"\x10\x02\u01C5\u01C6\x05:\x1E\x02\u01C6\u01C7\x05\x1E\x10\x02\u01C7\u01C9" +
		"\x03\x02\x02\x02\u01C8\u01C5\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02" +
		"\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03" +
		"\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01C4\x03\x02\x02\x02\u01CD" +
		"\u01CE\x03\x02\x02\x02\u01CE\u01D2\x03\x02\x02\x02\u01CF\u01D1\x07\x04" +
		"\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2" +
		"\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x03\x02" +
		"\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D8\x07\f\x02\x02\u01D6\u01D8" +
		"\x07@\x02\x02\u01D7\u01BC\x03\x02\x02\x02\u01D7\u01D6\x03\x02\x02\x02" +
		"\u01D87\x03\x02\x02\x02\u01D9\u01DA\x07@\x02\x02\u01DA\u01DB\x07\n\x02" +
		"\x02\u01DB\u01DC\x052\x1A\x02\u01DC9\x03\x02\x02\x02\u01DD\u01DF\x07\x04" +
		"\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0" +
		"\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E4\x03\x02" +
		"\x02\x02\u01E2\u01E4\x07\x11\x02\x02\u01E3\u01DE\x03\x02\x02\x02\u01E3" +
		"\u01E2\x03\x02\x02\x02\u01E4;\x03\x02\x02\x02E>@KNS_cjq~\x81\x85\x88\x8E" +
		"\x97\x9A\x9F\xA8\xB1\xB4\xB9\xC1\xC7\xD0\xD3\xD8\xDF\xE2\xE6\xE9\xEE\xF5" +
		"\xFE\u0104\u0108\u010C\u0112\u011B\u0121\u012A\u0133\u013B\u0144\u014A" +
		"\u014F\u0156\u015B\u016A\u0177\u0180\u0183\u0188\u018C\u019A\u019D\u019F" +
		"\u01A6\u01AF\u01B2\u01B7\u01C1\u01CA\u01CD\u01D2\u01D7\u01E0\u01E3";
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
	public OPASSIGN(): TerminalNode { return this.getToken(LuxParser.OPASSIGN, 0); }
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
	public OPASSIGN(): TerminalNode { return this.getToken(LuxParser.OPASSIGN, 0); }
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
	public OPASSIGN(): TerminalNode { return this.getToken(LuxParser.OPASSIGN, 0); }
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


