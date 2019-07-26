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
			this.state = 80;
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
				this.match(LuxParser.OPEQ);
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

			case 5:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 76;
				this.match(LuxParser.IF);
				this.state = 77;
				this.expr(0);
				this.state = 78;
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
	public fnCallStatement(): FnCallStatementContext {
		let _localctx: FnCallStatementContext = new FnCallStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuxParser.RULE_fnCallStatement);
		let _la: number;
		try {
			_localctx = new FnCallStatementImplicitContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.expr(0);
			this.state = 83;
			this.match(LuxParser.LPAREN);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
				{
				this.state = 84;
				this.fnCallParams();
				}
			}

			this.state = 87;
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

			this.state = 90;
			this.match(LuxParser.ID);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 97;
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
					this.state = 92;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 93;
					this.match(LuxParser.OPNAV);
					this.state = 94;
					(_localctx as LvalueMemberContext)._right = this.match(LuxParser.ID);
					}
					}
				}
				this.state = 99;
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
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT) {
				{
				this.state = 100;
				this.tags();
				}
			}

			this.state = 103;
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
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 105;
				this.tag();
				}
				}
				this.state = 108;
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
			this.state = 110;
			this.match(LuxParser.OPAT);
			this.state = 111;
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
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new VarDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new TypeDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
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
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new FuncDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.match(LuxParser.ID);
				this.state = 118;
				this.match(LuxParser.COLON);
				this.state = 119;
				this.fnDef();
				}
				break;

			case 2:
				_localctx = new EnumDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(LuxParser.ID);
				this.state = 121;
				this.match(LuxParser.COLON);
				this.state = 122;
				this.match(LuxParser.ENUM);
				this.state = 123;
				this.enumScope();
				}
				break;

			case 3:
				_localctx = new ClassDecContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.match(LuxParser.ID);
				this.state = 125;
				this.match(LuxParser.COLON);
				this.state = 126;
				this.match(LuxParser.CLASS);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.LT) {
					{
					this.state = 127;
					this.tmplDefParamList();
					}
				}

				this.state = 130;
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
			this.state = 133;
			this.fnType();
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 134;
				this.fnReturnType();
				}
				break;
			}
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.LCURL) {
				{
				this.state = 137;
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
			this.state = 140;
			this.match(LuxParser.LCURL);
			this.state = 144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 141;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.OPAT) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (LuxParser.RETURN - 49)) | (1 << (LuxParser.IF - 49)) | (1 << (LuxParser.ID - 49)))) !== 0)) {
				{
				this.state = 147;
				this.statement();
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 148;
						this.delim();
						this.state = 149;
						this.statement();
						}
						}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				}
			}

			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 158;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 164;
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
			this.state = 166;
			this.match(LuxParser.LCURL);
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 167;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT || _la === LuxParser.INHERIT || _la === LuxParser.ID) {
				{
				this.state = 173;
				this.classScopeDec();
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 174;
						this.delim();
						this.state = 175;
						this.classScopeDec();
						}
						}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
			}

			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 184;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
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
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.OPAT:
			case LuxParser.ID:
				_localctx = new ClassScopeDecNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.taggedDeclaration();
				}
				break;
			case LuxParser.INHERIT:
				_localctx = new ClassScopeInheritContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.match(LuxParser.INHERIT);
				this.state = 194;
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
			this.state = 197;
			this.match(LuxParser.LPAREN);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 198;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.OPELIPSE - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
				{
				this.state = 204;
				this.fnDefParam();
				this.state = 210;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 205;
						this.delim();
						this.state = 206;
						this.fnDefParam();
						}
						}
					}
					this.state = 212;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				}
			}

			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 215;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this.match(LuxParser.RPAREN);
			this.state = 222;
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
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new FnDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 224;
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

				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 227;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 230;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new FnDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 231;
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

				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 234;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 237;
				this.match(LuxParser.COLON);
				this.state = 238;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new FnDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
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
			this.state = 242;
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
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 244;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
			this.fnCallParam();
			this.state = 256;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 251;
					this.delim();
					this.state = 252;
					this.fnCallParam();
					}
					}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 259;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 264;
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
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
			case LuxParser.LPAREN:
			case LuxParser.LSQUARE:
			case LuxParser.OPMOD:
			case LuxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOD) {
					{
					this.state = 265;
					this.match(LuxParser.OPMOD);
					}
				}

				this.state = 268;
				this.expr(0);
				}
				break;
			case LuxParser.OPSKIP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
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
			this.state = 272;
			this.match(LuxParser.LT);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 273;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
			this.tmplDefParam();
			this.state = 285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 280;
					this.delim();
					this.state = 281;
					this.tmplDefParam();
					}
					}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 288;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
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
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ID:
				_localctx = new TmplDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.varDef();
				}
				break;
			case LuxParser.COLON:
				_localctx = new TmplDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.match(LuxParser.COLON);
				this.state = 298;
				this.vtype();
				}
				break;
			case LuxParser.OPSKIP:
				_localctx = new TmplDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
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
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new TypeFunctionPtrContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.match(LuxParser.OPREF);
				this.state = 303;
				this.fnType();
				this.state = 304;
				this.fnReturnType();
				}
				break;

			case 2:
				_localctx = new TypeRefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.match(LuxParser.OPREF);
				this.state = 307;
				this.plainType(0);
				}
				break;

			case 3:
				_localctx = new TypePlainContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
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

			this.state = 312;
			this.match(LuxParser.ID);
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 313;
				this.match(LuxParser.LT);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 314;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 320;
				this.tmplParam();
				this.state = 326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 321;
						this.delim();
						this.state = 322;
						this.tmplParam();
						}
						}
					}
					this.state = 328;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 329;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 335;
				this.match(LuxParser.GT);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 344;
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
					this.state = 339;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 340;
					this.match(LuxParser.OPNAV);
					this.state = 341;
					this.plainType(2);
					}
					}
				}
				this.state = 346;
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
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.vtype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
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
			this.state = 364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new VarDefAssignImplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				(_localctx as VarDefAssignImplicitContext)._id = this.match(LuxParser.ID);
				this.state = 352;
				this.match(LuxParser.COLON);
				this.state = 353;
				this.match(LuxParser.OPEQ);
				this.state = 354;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new VarDefOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.match(LuxParser.ID);
				this.state = 356;
				this.match(LuxParser.COLON);
				this.state = 357;
				this.vtype();
				}
				break;

			case 3:
				_localctx = new VarDefAssignExplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				this.match(LuxParser.ID);
				this.state = 359;
				this.match(LuxParser.COLON);
				this.state = 360;
				this.vtype();
				this.state = 361;
				this.match(LuxParser.OPEQ);
				this.state = 362;
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
			this.state = 398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
				{
				_localctx = new NumberEContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 367;
				(_localctx as NumberEContext)._value = this.match(LuxParser.NUMBER);
				}
				break;
			case LuxParser.ID:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 368;
				(_localctx as IdentifierExprContext)._id = this.match(LuxParser.ID);
				}
				break;
			case LuxParser.LPAREN:
				{
				_localctx = new BracketExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 369;
				this.match(LuxParser.LPAREN);
				this.state = 370;
				this.expr(0);
				this.state = 371;
				this.match(LuxParser.RPAREN);
				}
				break;
			case LuxParser.LSQUARE:
				{
				_localctx = new ObjectLiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 373;
				this.match(LuxParser.LSQUARE);
				this.state = 377;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 374;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 379;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.ID) {
					{
					this.state = 380;
					this.objectLiteralEntry();
					this.state = 386;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 381;
							this.delim();
							this.state = 382;
							this.objectLiteralEntry();
							}
							}
						}
						this.state = 388;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					}
					}
				}

				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 391;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 397;
				this.match(LuxParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 418;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 400;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 401;
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
						this.state = 402;
						(_localctx as InfixExprContext)._right = this.expr(6);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 403;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 404;
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
						this.state = 405;
						(_localctx as InfixExprContext)._right = this.expr(5);
						}
						break;

					case 3:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 406;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 407;
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
						this.state = 408;
						(_localctx as InfixExprContext)._right = this.expr(4);
						}
						break;

					case 4:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MemberExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 409;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 410;
						this.match(LuxParser.OPNAV);
						this.state = 411;
						(_localctx as MemberExprContext)._right = this.match(LuxParser.ID);
						}
						break;

					case 5:
						{
						_localctx = new ImplFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 412;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 413;
						this.match(LuxParser.LPAREN);
						this.state = 415;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
							{
							this.state = 414;
							this.fnCallParams();
							}
						}

						this.state = 417;
						this.match(LuxParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 422;
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
			this.state = 423;
			this.match(LuxParser.LCURL);
			this.state = 427;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 424;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.ID) {
				{
				this.state = 430;
				this.enumEntry();
				this.state = 436;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 431;
						this.delim();
						this.state = 432;
						this.enumEntry();
						}
						}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				}
			}

			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 441;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 447;
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
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				_localctx = new EnumEntryTaggedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 449;
				this.match(LuxParser.ID);
				this.state = 450;
				this.match(LuxParser.LPAREN);
				this.state = 454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 451;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 456;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuxParser.OPMOD - 32)) | (1 << (LuxParser.OPSKIP - 32)) | (1 << (LuxParser.OPELIPSE - 32)) | (1 << (LuxParser.ID - 32)))) !== 0)) {
					{
					this.state = 457;
					this.fnDefParam();
					this.state = 463;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 458;
							this.delim();
							this.state = 459;
							this.fnDefParam();
							}
							}
						}
						this.state = 465;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					}
					}
				}

				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 468;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 474;
				this.match(LuxParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new EnumEntryPlainContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
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
			this.state = 478;
			this.match(LuxParser.ID);
			this.state = 479;
			this.match(LuxParser.COLON);
			this.state = 480;
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
			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ENDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 482;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === LuxParser.ENDL);
				}
				break;
			case LuxParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 487;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u01ED\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x06\x02?\n\x02\r\x02\x0E\x02" +
		"@\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03L\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03S\n" +
		"\x03\x03\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05b\n\x05\f\x05\x0E\x05e\v\x05" +
		"\x03\x06\x05\x06h\n\x06\x03\x06\x03\x06\x03\x07\x06\x07m\n\x07\r\x07\x0E" +
		"\x07n\x03\b\x03\b\x03\b\x03\t\x03\t\x05\tv\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x83\n\n\x03\n\x05\n\x86" +
		"\n\n\x03\v\x03\v\x05\v\x8A\n\v\x03\v\x05\v\x8D\n\v\x03\f\x03\f\x07\f\x91" +
		"\n\f\f\f\x0E\f\x94\v\f\x03\f\x03\f\x03\f\x03\f\x07\f\x9A\n\f\f\f\x0E\f" +
		"\x9D\v\f\x05\f\x9F\n\f\x03\f\x07\f\xA2\n\f\f\f\x0E\f\xA5\v\f\x03\f\x03" +
		"\f\x03\r\x03\r\x07\r\xAB\n\r\f\r\x0E\r\xAE\v\r\x03\r\x03\r\x03\r\x03\r" +
		"\x07\r\xB4\n\r\f\r\x0E\r\xB7\v\r\x05\r\xB9\n\r\x03\r\x07\r\xBC\n\r\f\r" +
		"\x0E\r\xBF\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC6\n\x0E\x03" +
		"\x0F\x03\x0F\x07\x0F\xCA\n\x0F\f\x0F\x0E\x0F\xCD\v\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\xD3\n\x0F\f\x0F\x0E\x0F\xD6\v\x0F\x05\x0F\xD8" +
		"\n\x0F\x03\x0F\x07\x0F\xDB\n\x0F\f\x0F\x0E\x0F\xDE\v\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x05\x10\xE4\n\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10\x03" +
		"\x10\x05\x10\xEB\n\x10\x03\x10\x05\x10\xEE\n\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xF3\n\x10\x03\x11\x03\x11\x03\x12\x07\x12\xF8\n\x12\f\x12\x0E" +
		"\x12\xFB\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0101\n\x12\f\x12" +
		"\x0E\x12\u0104\v\x12\x03\x12\x07\x12\u0107\n\x12\f\x12\x0E\x12\u010A\v" +
		"\x12\x03\x13\x05\x13\u010D\n\x13\x03\x13\x03\x13\x05\x13\u0111\n\x13\x03" +
		"\x14\x03\x14\x07\x14\u0115\n\x14\f\x14\x0E\x14\u0118\v\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u011E\n\x14\f\x14\x0E\x14\u0121\v\x14\x03" +
		"\x14\x07\x14\u0124\n\x14\f\x14\x0E\x14\u0127\v\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u012F\n\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0138\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u013E\n\x17\f\x17\x0E\x17\u0141\v\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x07\x17\u0147\n\x17\f\x17\x0E\x17\u014A\v\x17\x03" +
		"\x17\x07\x17\u014D\n\x17\f\x17\x0E\x17\u0150\v\x17\x03\x17\x03\x17\x05" +
		"\x17\u0154\n\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0159\n\x17\f\x17\x0E" +
		"\x17\u015C\v\x17\x03\x18\x03\x18\x05\x18\u0160\n\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u016F\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u017A\n\x1A\f\x1A\x0E\x1A\u017D" +
		"\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0183\n\x1A\f\x1A\x0E\x1A" +
		"\u0186\v\x1A\x05\x1A\u0188\n\x1A\x03\x1A\x07\x1A\u018B\n\x1A\f\x1A\x0E" +
		"\x1A\u018E\v\x1A\x03\x1A\x05\x1A\u0191\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u01A2\n\x1A\x03\x1A\x07\x1A\u01A5\n\x1A\f" +
		"\x1A\x0E\x1A\u01A8\v\x1A\x03\x1B\x03\x1B\x07\x1B\u01AC\n\x1B\f\x1B\x0E" +
		"\x1B\u01AF\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01B5\n\x1B\f" +
		"\x1B\x0E\x1B\u01B8\v\x1B\x05\x1B\u01BA\n\x1B\x03\x1B\x07\x1B\u01BD\n\x1B" +
		"\f\x1B\x0E\x1B\u01C0\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u01C7\n\x1C\f\x1C\x0E\x1C\u01CA\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u01D0\n\x1C\f\x1C\x0E\x1C\u01D3\v\x1C\x05\x1C\u01D5\n\x1C" +
		"\x03\x1C\x07\x1C\u01D8\n\x1C\f\x1C\x0E\x1C\u01DB\v\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u01DF\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x06\x1E\u01E6" +
		"\n\x1E\r\x1E\x0E\x1E\u01E7\x03\x1E\x05\x1E\u01EB\n\x1E\x03\x1E\x02\x02" +
		"\x05\b,2\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02\x06\x04\x02" +
		"\x17\x17\"\"\x03\x02 !\x04\x02\x16\x16\x1F\x1F\x03\x02\x13\x14\x02\u021F" +
		"\x02>\x03\x02\x02\x02\x04R\x03\x02\x02\x02\x06T\x03\x02\x02\x02\b[\x03" +
		"\x02\x02\x02\ng\x03\x02\x02\x02\fl\x03\x02\x02\x02\x0Ep\x03\x02\x02\x02" +
		"\x10u\x03\x02\x02\x02\x12\x85\x03\x02\x02\x02\x14\x87\x03\x02\x02\x02" +
		"\x16\x8E\x03\x02\x02\x02\x18\xA8\x03\x02\x02\x02\x1A\xC5\x03\x02\x02\x02" +
		"\x1C\xC7\x03\x02\x02\x02\x1E\xF2\x03\x02\x02\x02 \xF4\x03\x02\x02\x02" +
		"\"\xF9\x03\x02\x02\x02$\u0110\x03\x02\x02\x02&\u0112\x03\x02\x02\x02(" +
		"\u012E\x03\x02\x02\x02*\u0137\x03\x02\x02\x02,\u0139\x03\x02\x02\x02." +
		"\u015F\x03\x02\x02\x020\u016E\x03\x02\x02\x022\u0190\x03\x02\x02\x024" +
		"\u01A9\x03\x02\x02\x026\u01DE\x03\x02\x02\x028\u01E0\x03\x02\x02\x02:" +
		"\u01EA\x03\x02\x02\x02<?\x05\n\x06\x02=?\x07\x04\x02\x02><\x03\x02\x02" +
		"\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02BC\x07\x02\x02\x03C\x03\x03\x02\x02\x02DS\x05\n" +
		"\x06\x02EF\x05\b\x05\x02FG\x07\x13\x02\x02GH\x052\x1A\x02HS\x03\x02\x02" +
		"\x02IK\x073\x02\x02JL\x052\x1A\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"LS\x03\x02\x02\x02MS\x05\x06\x04\x02NO\x074\x02\x02OP\x052\x1A\x02PQ\x05" +
		"\x16\f\x02QS\x03\x02\x02\x02RD\x03\x02\x02\x02RE\x03\x02\x02\x02RI\x03" +
		"\x02\x02\x02RM\x03\x02\x02\x02RN\x03\x02\x02\x02S\x05\x03\x02\x02\x02" +
		"TU\x052\x1A\x02UW\x07\v\x02\x02VX\x05\"\x12\x02WV\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02XY\x03\x02\x02\x02YZ\x07\f\x02\x02Z\x07\x03\x02\x02\x02[\\" +
		"\b\x05\x01\x02\\]\x07?\x02\x02]c\x03\x02\x02\x02^_\f\x03\x02\x02_`\x07" +
		"#\x02\x02`b\x07?\x02\x02a^\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02d\t\x03\x02\x02\x02ec\x03\x02\x02\x02fh\x05" +
		"\f\x07\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x05" +
		"\x10\t\x02j\v\x03\x02\x02\x02km\x05\x0E\b\x02lk\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\r\x03\x02\x02\x02pq" +
		"\x07\t\x02\x02qr\x07?\x02\x02r\x0F\x03\x02\x02\x02sv\x050\x19\x02tv\x05" +
		"\x12\n\x02us\x03\x02\x02\x02ut\x03\x02\x02\x02v\x11\x03\x02\x02\x02wx" +
		"\x07?\x02\x02xy\x07\n\x02\x02y\x86\x05\x14\v\x02z{\x07?\x02\x02{|\x07" +
		"\n\x02\x02|}\x07;\x02\x02}\x86\x054\x1B\x02~\x7F\x07?\x02\x02\x7F\x80" +
		"\x07\n\x02\x02\x80\x82\x072\x02\x02\x81\x83\x05&\x14\x02\x82\x81\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x05\x18" +
		"\r\x02\x85w\x03\x02\x02\x02\x85z\x03\x02\x02\x02\x85~\x03\x02\x02\x02" +
		"\x86\x13\x03\x02\x02\x02\x87\x89\x05\x1C\x0F\x02\x88\x8A\x05 \x11\x02" +
		"\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8C\x03\x02\x02\x02" +
		"\x8B\x8D\x05\x16\f\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02" +
		"\x8D\x15\x03\x02\x02\x02\x8E\x92\x07\r\x02\x02\x8F\x91\x07\x04\x02\x02" +
		"\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02" +
		"\x92\x93\x03\x02\x02\x02\x93\x9E\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02" +
		"\x95\x9B\x05\x04\x03\x02\x96\x97\x05:\x1E\x02\x97\x98\x05\x04\x03\x02" +
		"\x98\x9A\x03\x02\x02\x02\x99\x96\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02" +
		"\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02" +
		"\x9D\x9B\x03\x02\x02\x02\x9E\x95\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9F\xA3\x03\x02\x02\x02\xA0\xA2\x07\x04\x02\x02\xA1\xA0\x03\x02\x02\x02" +
		"\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02" +
		"\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x07\x0E\x02\x02" +
		"\xA7\x17\x03\x02\x02\x02\xA8\xAC\x07\r\x02\x02\xA9\xAB\x07\x04\x02\x02" +
		"\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
		"\xAC\xAD\x03\x02\x02\x02\xAD\xB8\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02" +
		"\xAF\xB5\x05\x1A\x0E\x02\xB0\xB1\x05:\x1E\x02\xB1\xB2\x05\x1A\x0E\x02" +
		"\xB2\xB4\x03\x02\x02\x02\xB3\xB0\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02" +
		"\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02" +
		"\xB7\xB5\x03\x02\x02\x02\xB8\xAF\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBD\x03\x02\x02\x02\xBA\xBC\x07\x04\x02\x02\xBB\xBA\x03\x02\x02\x02" +
		"\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC1\x07\x0E\x02\x02" +
		"\xC1\x19\x03\x02\x02\x02\xC2\xC6\x05\n\x06\x02\xC3\xC4\x07<\x02\x02\xC4" +
		"\xC6\x05,\x17\x02\xC5\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6" +
		"\x1B\x03\x02\x02\x02\xC7\xCB\x07\v\x02\x02\xC8\xCA\x07\x04\x02\x02\xC9" +
		"\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB" +
		"\xCC\x03\x02\x02\x02\xCC\xD7\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE" +
		"\xD4\x05\x1E\x10\x02\xCF\xD0\x05:\x1E\x02\xD0\xD1\x05\x1E\x10\x02\xD1" +
		"\xD3\x03\x02\x02\x02\xD2\xCF\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4" +
		"\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6" +
		"\xD4\x03\x02\x02\x02\xD7\xCE\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xDC\x03\x02\x02\x02\xD9\xDB\x07\x04\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB" +
		"\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD" +
		"\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x07\f\x02\x02\xE0" +
		"\xE1\x07\x12\x02\x02\xE1\x1D\x03\x02\x02\x02\xE2\xE4\t\x02\x02\x02\xE3" +
		"\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5" +
		"\xE7\x07*\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8\xF3\x050\x19\x02\xE9\xEB\t\x02\x02\x02\xEA\xE9" +
		"\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEE" +
		"\x07*\x02\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF" +
		"\x03\x02\x02\x02\xEF\xF0\x07\n\x02\x02\xF0\xF3\x05*\x16\x02\xF1\xF3\x07" +
		")\x02\x02\xF2\xE3\x03\x02\x02\x02\xF2\xEA\x03\x02\x02\x02\xF2\xF1\x03" +
		"\x02\x02\x02\xF3\x1F\x03\x02\x02\x02\xF4\xF5\x05*\x16\x02\xF5!\x03\x02" +
		"\x02\x02\xF6\xF8\x07\x04\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02" +
		"\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02" +
		"\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\u0102\x05$\x13\x02\xFD\xFE\x05:\x1E" +
		"\x02\xFE\xFF\x05$\x13\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFD\x03\x02" +
		"\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102" +
		"\u0103\x03\x02\x02\x02\u0103\u0108\x03\x02\x02\x02\u0104\u0102\x03\x02" +
		"\x02\x02\u0105\u0107\x07\x04\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107" +
		"\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109#\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010D" +
		"\x07\"\x02\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02" +
		"\u010D\u010E\x03\x02\x02\x02\u010E\u0111\x052\x1A\x02\u010F\u0111\x07" +
		")\x02\x02\u0110\u010C\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
		"%\x03\x02\x02\x02\u0112\u0116\x07/\x02\x02\u0113\u0115\x07\x04\x02\x02" +
		"\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118" +
		"\u0116\x03\x02\x02\x02\u0119\u011F\x05(\x15\x02\u011A\u011B\x05:\x1E\x02" +
		"\u011B\u011C\x05(\x15\x02\u011C\u011E\x03\x02\x02\x02\u011D\u011A\x03" +
		"\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F" +
		"\u0120\x03\x02\x02\x02\u0120\u0125\x03\x02\x02\x02\u0121\u011F\x03\x02" +
		"\x02\x02\u0122\u0124\x07\x04\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124" +
		"\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02" +
		"\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128" +
		"\u0129\x07.\x02\x02\u0129\'\x03\x02\x02\x02\u012A\u012F\x050\x19\x02\u012B" +
		"\u012C\x07\n\x02\x02\u012C\u012F\x05*\x16\x02\u012D\u012F\x07)\x02\x02" +
		"\u012E\u012A\x03\x02\x02\x02\u012E\u012B\x03\x02\x02\x02\u012E\u012D\x03" +
		"\x02\x02\x02\u012F)\x03\x02\x02\x02\u0130\u0131\x07\'\x02\x02\u0131\u0132" +
		"\x05\x1C\x0F\x02\u0132\u0133\x05 \x11\x02\u0133\u0138\x03\x02\x02\x02" +
		"\u0134\u0135\x07\'\x02\x02\u0135\u0138\x05,\x17\x02\u0136\u0138\x05,\x17" +
		"\x02\u0137\u0130\x03\x02\x02\x02\u0137\u0134\x03\x02\x02\x02\u0137\u0136" +
		"\x03\x02\x02\x02\u0138+\x03\x02\x02\x02\u0139\u013A\b\x17\x01\x02\u013A" +
		"\u0153\x07?\x02\x02\u013B\u013F\x07/\x02\x02\u013C\u013E\x07\x04\x02\x02" +
		"\u013D\u013C\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03" +
		"\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02\u0141" +
		"\u013F\x03\x02\x02\x02\u0142\u0148\x05.\x18\x02\u0143\u0144\x05:\x1E\x02" +
		"\u0144\u0145\x05.\x18\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0143\x03" +
		"\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u014E\x03\x02\x02\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014B\u014D\x07\x04\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02" +
		"\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x07.\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153\u013B\x03\x02\x02" +
		"\x02\u0153\u0154\x03\x02\x02\x02\u0154\u015A\x03\x02\x02\x02\u0155\u0156" +
		"\f\x03\x02\x02\u0156\u0157\x07#\x02\x02\u0157\u0159\x05,\x17\x04\u0158" +
		"\u0155\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02" +
		"\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B-\x03\x02\x02\x02\u015C\u015A" +
		"\x03\x02\x02\x02\u015D\u0160\x05*\x16\x02\u015E\u0160\x052\x1A\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160/\x03\x02\x02" +
		"\x02\u0161\u0162\x07?\x02\x02\u0162\u0163\x07\n\x02\x02\u0163\u0164\x07" +
		"\x13\x02\x02\u0164\u016F\x052\x1A\x02\u0165\u0166\x07?\x02\x02\u0166\u0167" +
		"\x07\n\x02\x02\u0167\u016F\x05*\x16\x02\u0168\u0169\x07?\x02\x02\u0169" +
		"\u016A\x07\n\x02\x02\u016A\u016B\x05*\x16\x02\u016B\u016C\x07\x13\x02" +
		"\x02\u016C\u016D\x052\x1A\x02\u016D\u016F\x03\x02\x02\x02\u016E\u0161" +
		"\x03\x02\x02\x02\u016E\u0165\x03\x02\x02\x02\u016E\u0168\x03\x02\x02\x02" +
		"\u016F1\x03\x02\x02\x02\u0170\u0171\b\x1A\x01\x02\u0171\u0191\x07\x03" +
		"\x02\x02\u0172\u0191\x07?\x02\x02\u0173\u0174\x07\v\x02\x02\u0174\u0175" +
		"\x052\x1A\x02\u0175\u0176\x07\f\x02\x02\u0176\u0191\x03\x02\x02\x02\u0177" +
		"\u017B\x07\x0F\x02\x02\u0178\u017A\x07\x04\x02\x02\u0179\u0178\x03\x02" +
		"\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B" +
		"\u017C\x03\x02\x02\x02\u017C\u0187\x03\x02\x02\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017E\u0184\x058\x1D\x02\u017F\u0180\x05:\x1E\x02\u0180\u0181" +
		"\x058\x1D\x02\u0181\u0183\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02" +
		"\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03" +
		"\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
		"\u017E\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018C\x03\x02" +
		"\x02\x02\u0189\u018B\x07\x04\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0191\x07\x10\x02\x02\u0190\u0170\x03\x02\x02\x02\u0190\u0172\x03\x02" +
		"\x02\x02\u0190\u0173\x03\x02\x02\x02\u0190\u0177\x03\x02\x02\x02\u0191" +
		"\u01A6\x03\x02\x02\x02\u0192\u0193\f\x07\x02\x02\u0193\u0194\t\x03\x02" +
		"\x02\u0194\u01A5\x052\x1A\b\u0195\u0196\f\x06\x02\x02\u0196\u0197\t\x04" +
		"\x02\x02\u0197\u01A5\x052\x1A\x07\u0198\u0199\f\x05\x02\x02\u0199\u019A" +
		"\t\x05\x02\x02\u019A\u01A5\x052\x1A\x06\u019B\u019C\f\v\x02\x02\u019C" +
		"\u019D\x07#\x02\x02\u019D\u01A5\x07?\x02\x02\u019E\u019F\f\x04\x02\x02" +
		"\u019F\u01A1\x07\v\x02\x02\u01A0\u01A2\x05\"\x12\x02\u01A1\u01A0\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01A5\x07\f\x02\x02\u01A4\u0192\x03\x02\x02\x02\u01A4\u0195\x03\x02\x02" +
		"\x02\u01A4\u0198\x03\x02\x02\x02\u01A4\u019B\x03\x02\x02\x02\u01A4\u019E" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A73\x03\x02\x02\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A9\u01AD\x07\r\x02\x02\u01AA\u01AC\x07\x04\x02\x02\u01AB\u01AA" +
		"\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02" +
		"\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B9\x03\x02\x02\x02\u01AF\u01AD\x03" +
		"\x02\x02\x02\u01B0\u01B6\x056\x1C\x02\u01B1\u01B2\x05:\x1E\x02\u01B2\u01B3" +
		"\x056\x1C\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01B1\x03\x02\x02\x02" +
		"\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03" +
		"\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9" +
		"\u01B0\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BE\x03\x02" +
		"\x02\x02\u01BB\u01BD\x07\x04\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD" +
		"\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
		"\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1" +
		"\u01C2\x07\x0E\x02\x02\u01C25\x03\x02\x02\x02\u01C3\u01C4\x07?\x02\x02" +
		"\u01C4\u01C8\x07\v\x02\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6\u01C5\x03" +
		"\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01D4\x03\x02\x02\x02\u01CA\u01C8\x03\x02" +
		"\x02\x02\u01CB\u01D1\x05\x1E\x10\x02\u01CC\u01CD\x05:\x1E\x02\u01CD\u01CE" +
		"\x05\x1E\x10\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01CC\x03\x02\x02\x02" +
		"\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03" +
		"\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4" +
		"\u01CB\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D9\x03\x02" +
		"\x02\x02\u01D6\u01D8\x07\x04\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8" +
		"\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02" +
		"\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC" +
		"\u01DF\x07\f\x02\x02\u01DD\u01DF\x07?\x02\x02\u01DE\u01C3\x03\x02\x02" +
		"\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF7\x03\x02\x02\x02\u01E0\u01E1\x07" +
		"?\x02\x02\u01E1\u01E2\x07\n\x02\x02\u01E2\u01E3\x052\x1A\x02\u01E39\x03" +
		"\x02\x02\x02\u01E4\u01E6\x07\x04\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02" +
		"\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01EB\x07\x11\x02\x02\u01EA" +
		"\u01E5\x03\x02\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB;\x03\x02\x02" +
		"\x02E>@KRWcgnu\x82\x85\x89\x8C\x92\x9B\x9E\xA3\xAC\xB5\xB8\xBD\xC5\xCB" +
		"\xD4\xD7\xDC\xE3\xE6\xEA\xED\xF2\xF9\u0102\u0108\u010C\u0110\u0116\u011F" +
		"\u0125\u012E\u0137\u013F\u0148\u014E\u0153\u015A\u015F\u016E\u017B\u0184" +
		"\u0187\u018C\u0190\u01A1\u01A4\u01A6\u01AD\u01B6\u01B9\u01BE\u01C8\u01D1" +
		"\u01D4\u01D9\u01DE\u01E7\u01EA";
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


