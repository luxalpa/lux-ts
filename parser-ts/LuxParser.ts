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
				this.lvalue();
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
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuxParser.RULE_lvalue);
		try {
			_localctx = new LvalueIDContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
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
	public taggedDeclaration(): TaggedDeclarationContext {
		let _localctx: TaggedDeclarationContext = new TaggedDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuxParser.RULE_taggedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT) {
				{
				this.state = 87;
				this.tags();
				}
			}

			this.state = 90;
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
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 92;
				this.tag();
				}
				}
				this.state = 95;
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
			this.state = 97;
			this.match(LuxParser.OPAT);
			this.state = 98;
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
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new VarDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new TypeDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
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
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new FuncDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.match(LuxParser.ID);
				this.state = 105;
				this.match(LuxParser.COLON);
				this.state = 106;
				this.fnDef();
				}
				break;

			case 2:
				_localctx = new EnumDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(LuxParser.ID);
				this.state = 108;
				this.match(LuxParser.COLON);
				this.state = 109;
				this.match(LuxParser.ENUM);
				this.state = 110;
				this.enumScope();
				}
				break;

			case 3:
				_localctx = new ClassDecContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 111;
				this.match(LuxParser.ID);
				this.state = 112;
				this.match(LuxParser.COLON);
				this.state = 113;
				this.match(LuxParser.CLASS);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.LT) {
					{
					this.state = 114;
					this.tmplDefParamList();
					}
				}

				this.state = 117;
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
			this.state = 120;
			this.fnType();
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.fnReturnType();
				}
				break;
			}
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.LCURL) {
				{
				this.state = 124;
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
			this.state = 127;
			this.match(LuxParser.LCURL);
			this.state = 131;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 128;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.OPAT) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.RETURN || _la === LuxParser.ID) {
				{
				this.state = 134;
				this.statement();
				this.state = 140;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 135;
						this.delim();
						this.state = 136;
						this.statement();
						}
						}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 145;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
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
			this.state = 153;
			this.match(LuxParser.LCURL);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 154;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT || _la === LuxParser.INHERIT || _la === LuxParser.ID) {
				{
				this.state = 160;
				this.classScopeDec();
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 161;
						this.delim();
						this.state = 162;
						this.classScopeDec();
						}
						}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 171;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 177;
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
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.OPAT:
			case LuxParser.ID:
				_localctx = new ClassScopeDecNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.taggedDeclaration();
				}
				break;
			case LuxParser.INHERIT:
				_localctx = new ClassScopeInheritContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(LuxParser.INHERIT);
				this.state = 181;
				this.match(LuxParser.ID);
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
			this.state = 184;
			this.match(LuxParser.LPAREN);
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 185;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
				{
				this.state = 191;
				this.fnDefParam();
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 192;
						this.delim();
						this.state = 193;
						this.fnDefParam();
						}
						}
					}
					this.state = 199;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
			}

			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 202;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(LuxParser.RPAREN);
			this.state = 209;
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
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new FnDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 211;
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

				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 214;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 217;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new FnDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 218;
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

				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 221;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 224;
				this.match(LuxParser.COLON);
				this.state = 225;
				this.vtype(0);
				}
				break;

			case 3:
				_localctx = new FnDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 226;
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
			this.state = 229;
			this.vtype(0);
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
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 231;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.fnCallParam();
			this.state = 243;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 238;
					this.delim();
					this.state = 239;
					this.fnCallParam();
					}
					}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 246;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 251;
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
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
			case LuxParser.LPAREN:
			case LuxParser.LSQUARE:
			case LuxParser.OPMOD:
			case LuxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOD) {
					{
					this.state = 252;
					this.match(LuxParser.OPMOD);
					}
				}

				this.state = 255;
				this.expr(0);
				}
				break;
			case LuxParser.OPSKIP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
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
			this.state = 259;
			this.match(LuxParser.LT);
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 260;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 266;
			this.tmplDefParam();
			this.state = 272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 267;
					this.delim();
					this.state = 268;
					this.tmplDefParam();
					}
					}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 275;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
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
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ID:
				_localctx = new TmplDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.varDef();
				}
				break;
			case LuxParser.COLON:
				_localctx = new TmplDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 284;
				this.match(LuxParser.COLON);
				this.state = 285;
				this.vtype(0);
				}
				break;
			case LuxParser.OPSKIP:
				_localctx = new TmplDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
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

	public vtype(): VtypeContext;
	public vtype(_p: number): VtypeContext;
	// @RuleVersion(0)
	public vtype(_p?: number): VtypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: VtypeContext = new VtypeContext(this._ctx, _parentState);
		let _prevctx: VtypeContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, LuxParser.RULE_vtype, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new TypeFunctionPtrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 290;
				this.match(LuxParser.OPREF);
				this.state = 291;
				this.fnType();
				this.state = 292;
				this.fnReturnType();
				}
				break;

			case 2:
				{
				_localctx = new TypeRefContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 294;
				this.match(LuxParser.OPREF);
				this.state = 295;
				this.plainType();
				}
				break;

			case 3:
				{
				_localctx = new TypePlainContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 296;
				this.plainType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeInTypeContext(new VtypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_vtype);
					this.state = 299;
					if (!(this.precpred(this._ctx, 4))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					}
					this.state = 300;
					this.match(LuxParser.OPNAV);
					this.state = 301;
					this.plainType();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
	public plainType(): PlainTypeContext {
		let _localctx: PlainTypeContext = new PlainTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LuxParser.RULE_plainType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(LuxParser.ID);
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.match(LuxParser.LT);
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 309;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 315;
				this.tmplParam();
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 316;
						this.delim();
						this.state = 317;
						this.tmplParam();
						}
						}
					}
					this.state = 323;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 324;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 329;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 330;
				this.match(LuxParser.GT);
				}
				break;
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
	public tmplParam(): TmplParamContext {
		let _localctx: TmplParamContext = new TmplParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LuxParser.RULE_tmplParam);
		try {
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 334;
				this.vtype(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
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
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				_localctx = new VarDefAssignImplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				(_localctx as VarDefAssignImplicitContext)._id = this.match(LuxParser.ID);
				this.state = 339;
				this.match(LuxParser.COLON);
				this.state = 340;
				this.match(LuxParser.OPASSIGN);
				this.state = 341;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new VarDefOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.match(LuxParser.ID);
				this.state = 343;
				this.match(LuxParser.COLON);
				this.state = 344;
				this.vtype(0);
				}
				break;

			case 3:
				_localctx = new VarDefAssignExplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.match(LuxParser.ID);
				this.state = 346;
				this.match(LuxParser.COLON);
				this.state = 347;
				this.vtype(0);
				this.state = 348;
				this.match(LuxParser.OPASSIGN);
				this.state = 349;
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
			this.state = 385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
				{
				_localctx = new NumberEContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 354;
				(_localctx as NumberEContext)._value = this.match(LuxParser.NUMBER);
				}
				break;
			case LuxParser.ID:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 355;
				(_localctx as IdentifierExprContext)._id = this.match(LuxParser.ID);
				}
				break;
			case LuxParser.LPAREN:
				{
				_localctx = new BracketExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 356;
				this.match(LuxParser.LPAREN);
				this.state = 357;
				this.expr(0);
				this.state = 358;
				this.match(LuxParser.RPAREN);
				}
				break;
			case LuxParser.LSQUARE:
				{
				_localctx = new ObjectLiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 360;
				this.match(LuxParser.LSQUARE);
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 361;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.ID) {
					{
					this.state = 367;
					this.objectLiteralEntry();
					this.state = 373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 368;
							this.delim();
							this.state = 369;
							this.objectLiteralEntry();
							}
							}
						}
						this.state = 375;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
					}
					}
				}

				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 378;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 384;
				this.match(LuxParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 404;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 402;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 387;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 388;
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
						this.state = 389;
						(_localctx as InfixExprContext)._right = this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 390;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 391;
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
						this.state = 392;
						(_localctx as InfixExprContext)._right = this.expr(4);
						}
						break;

					case 3:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MemberExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 393;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 394;
						this.match(LuxParser.OPNAV);
						this.state = 395;
						(_localctx as MemberExprContext)._right = this.match(LuxParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new ImplFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 396;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 397;
						this.match(LuxParser.LPAREN);
						this.state = 399;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
							{
							this.state = 398;
							this.fnCallParams();
							}
						}

						this.state = 401;
						this.match(LuxParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
			this.state = 407;
			this.match(LuxParser.LCURL);
			this.state = 411;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.ID) {
				{
				this.state = 414;
				this.enumEntry();
				this.state = 420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 415;
						this.delim();
						this.state = 416;
						this.enumEntry();
						}
						}
					}
					this.state = 422;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				}
			}

			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 425;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 431;
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
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				_localctx = new EnumEntryTaggedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.match(LuxParser.ID);
				this.state = 434;
				this.match(LuxParser.LPAREN);
				this.state = 438;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 435;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 440;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
					{
					this.state = 441;
					this.fnDefParam();
					this.state = 447;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 442;
							this.delim();
							this.state = 443;
							this.fnDefParam();
							}
							}
						}
						this.state = 449;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
					}
					}
				}

				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 452;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 458;
				this.match(LuxParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new EnumEntryPlainContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
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
			this.state = 462;
			this.match(LuxParser.ID);
			this.state = 463;
			this.match(LuxParser.COLON);
			this.state = 464;
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
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ENDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 466;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 469;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === LuxParser.ENDL);
				}
				break;
			case LuxParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
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
		case 20:
			return this.vtype_sempred(_localctx as VtypeContext, predIndex);

		case 24:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private vtype_sempred(_localctx: VtypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u01DD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x06\x02?\n\x02\r\x02\x0E\x02" +
		"@\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03L\n\x03\x03\x03\x05\x03O\n\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04T\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x05\x06[\n\x06\x03" +
		"\x06\x03\x06\x03\x07\x06\x07`\n\x07\r\x07\x0E\x07a\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x05\ti\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\nv\n\n\x03\n\x05\ny\n\n\x03\v\x03\v\x05\v}\n\v\x03" +
		"\v\x05\v\x80\n\v\x03\f\x03\f\x07\f\x84\n\f\f\f\x0E\f\x87\v\f\x03\f\x03" +
		"\f\x03\f\x03\f\x07\f\x8D\n\f\f\f\x0E\f\x90\v\f\x05\f\x92\n\f\x03\f\x07" +
		"\f\x95\n\f\f\f\x0E\f\x98\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\x9E\n\r\f\r" +
		"\x0E\r\xA1\v\r\x03\r\x03\r\x03\r\x03\r\x07\r\xA7\n\r\f\r\x0E\r\xAA\v\r" +
		"\x05\r\xAC\n\r\x03\r\x07\r\xAF\n\r\f\r\x0E\r\xB2\v\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xB9\n\x0E\x03\x0F\x03\x0F\x07\x0F\xBD\n\x0F\f" +
		"\x0F\x0E\x0F\xC0\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC6\n\x0F" +
		"\f\x0F\x0E\x0F\xC9\v\x0F\x05\x0F\xCB\n\x0F\x03\x0F\x07\x0F\xCE\n\x0F\f" +
		"\x0F\x0E\x0F\xD1\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\xD7\n\x10" +
		"\x03\x10\x05\x10\xDA\n\x10\x03\x10\x03\x10\x05\x10\xDE\n\x10\x03\x10\x05" +
		"\x10\xE1\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE6\n\x10\x03\x11\x03\x11" +
		"\x03\x12\x07\x12\xEB\n\x12\f\x12\x0E\x12\xEE\v\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\xF4\n\x12\f\x12\x0E\x12\xF7\v\x12\x03\x12\x07\x12" +
		"\xFA\n\x12\f\x12\x0E\x12\xFD\v\x12\x03\x13\x05\x13\u0100\n\x13\x03\x13" +
		"\x03\x13\x05\x13\u0104\n\x13\x03\x14\x03\x14\x07\x14\u0108\n\x14\f\x14" +
		"\x0E\x14\u010B\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0111\n\x14" +
		"\f\x14\x0E\x14\u0114\v\x14\x03\x14\x07\x14\u0117\n\x14\f\x14\x0E\x14\u011A" +
		"\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0122\n" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u012C\n\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0131\n\x16\f\x16\x0E" +
		"\x16\u0134\v\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0139\n\x17\f\x17\x0E" +
		"\x17\u013C\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0142\n\x17\f" +
		"\x17\x0E\x17\u0145\v\x17\x03\x17\x07\x17\u0148\n\x17\f\x17\x0E\x17\u014B" +
		"\v\x17\x03\x17\x03\x17\x05\x17\u014F\n\x17\x03\x18\x03\x18\x05\x18\u0153" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0162\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u016D" +
		"\n\x1A\f\x1A\x0E\x1A\u0170\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0176\n\x1A\f\x1A\x0E\x1A\u0179\v\x1A\x05\x1A\u017B\n\x1A\x03\x1A\x07" +
		"\x1A\u017E\n\x1A\f\x1A\x0E\x1A\u0181\v\x1A\x03\x1A\x05\x1A\u0184\n\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0192\n\x1A\x03\x1A\x07\x1A\u0195\n\x1A" +
		"\f\x1A\x0E\x1A\u0198\v\x1A\x03\x1B\x03\x1B\x07\x1B\u019C\n\x1B\f\x1B\x0E" +
		"\x1B\u019F\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01A5\n\x1B\f" +
		"\x1B\x0E\x1B\u01A8\v\x1B\x05\x1B\u01AA\n\x1B\x03\x1B\x07\x1B\u01AD\n\x1B" +
		"\f\x1B\x0E\x1B\u01B0\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u01B7\n\x1C\f\x1C\x0E\x1C\u01BA\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u01C0\n\x1C\f\x1C\x0E\x1C\u01C3\v\x1C\x05\x1C\u01C5\n\x1C" +
		"\x03\x1C\x07\x1C\u01C8\n\x1C\f\x1C\x0E\x1C\u01CB\v\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u01CF\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x06\x1E\u01D6" +
		"\n\x1E\r\x1E\x0E\x1E\u01D7\x03\x1E\x05\x1E\u01DB\n\x1E\x03\x1E\x02\x02" +
		"\x04*2\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02\x05\x04\x02" +
		"\x18\x18##\x03\x02!\"\x04\x02\x17\x17  \x02\u020C\x02>\x03\x02\x02\x02" +
		"\x04N\x03\x02\x02\x02\x06P\x03\x02\x02\x02\bW\x03\x02\x02\x02\nZ\x03\x02" +
		"\x02\x02\f_\x03\x02\x02\x02\x0Ec\x03\x02\x02\x02\x10h\x03\x02\x02\x02" +
		"\x12x\x03\x02\x02\x02\x14z\x03\x02\x02\x02\x16\x81\x03\x02\x02\x02\x18" +
		"\x9B\x03\x02\x02\x02\x1A\xB8\x03\x02\x02\x02\x1C\xBA\x03\x02\x02\x02\x1E" +
		"\xE5\x03\x02\x02\x02 \xE7\x03\x02\x02\x02\"\xEC\x03\x02\x02\x02$\u0103" +
		"\x03\x02\x02\x02&\u0105\x03\x02\x02\x02(\u0121\x03\x02\x02\x02*\u012B" +
		"\x03\x02\x02\x02,\u0135\x03\x02\x02\x02.\u0152\x03\x02\x02\x020\u0161" +
		"\x03\x02\x02\x022\u0183\x03\x02\x02\x024\u0199\x03\x02\x02\x026\u01CE" +
		"\x03\x02\x02\x028\u01D0\x03\x02\x02\x02:\u01DA\x03\x02\x02\x02<?\x05\n" +
		"\x06\x02=?\x07\x04\x02\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\x02" +
		"\x02\x03C\x03\x03\x02\x02\x02DO\x05\n\x06\x02EF\x05\b\x05\x02FG\x07\x13" +
		"\x02\x02GH\x052\x1A\x02HO\x03\x02\x02\x02IK\x074\x02\x02JL\x052\x1A\x02" +
		"KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LO\x03\x02\x02\x02MO\x05\x06\x04\x02" +
		"ND\x03\x02\x02\x02NE\x03\x02\x02\x02NI\x03\x02\x02\x02NM\x03\x02\x02\x02" +
		"O\x05\x03\x02\x02\x02PQ\x052\x1A\x02QS\x07\v\x02\x02RT\x05\"\x12\x02S" +
		"R\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\f\x02\x02" +
		"V\x07\x03\x02\x02\x02WX\x07@\x02\x02X\t\x03\x02\x02\x02Y[\x05\f\x07\x02" +
		"ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\x10\t\x02" +
		"]\v\x03\x02\x02\x02^`\x05\x0E\b\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\r\x03\x02\x02\x02cd\x07\t\x02\x02" +
		"de\x07@\x02\x02e\x0F\x03\x02\x02\x02fi\x050\x19\x02gi\x05\x12\n\x02hf" +
		"\x03\x02\x02\x02hg\x03\x02\x02\x02i\x11\x03\x02\x02\x02jk\x07@\x02\x02" +
		"kl\x07\n\x02\x02ly\x05\x14\v\x02mn\x07@\x02\x02no\x07\n\x02\x02op\x07" +
		"<\x02\x02py\x054\x1B\x02qr\x07@\x02\x02rs\x07\n\x02\x02su\x073\x02\x02" +
		"tv\x05&\x14\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wy\x05\x18\r\x02xj\x03\x02\x02\x02xm\x03\x02\x02\x02xq\x03\x02\x02\x02" +
		"y\x13\x03\x02\x02\x02z|\x05\x1C\x0F\x02{}\x05 \x11\x02|{\x03\x02\x02\x02" +
		"|}\x03\x02\x02\x02}\x7F\x03\x02\x02\x02~\x80\x05\x16\f\x02\x7F~\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x15\x03\x02\x02\x02\x81\x85\x07\r" +
		"\x02\x02\x82\x84\x07\x04\x02\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02" +
		"\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x91\x03\x02" +
		"\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8E\x05\x04\x03\x02\x89\x8A\x05:" +
		"\x1E\x02\x8A\x8B\x05\x04\x03\x02\x8B\x8D\x03\x02\x02\x02\x8C\x89\x03\x02" +
		"\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x88\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x96\x03\x02\x02\x02\x93\x95\x07\x04" +
		"\x02\x02\x94\x93\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x99\x9A\x07\x0E\x02\x02\x9A\x17\x03\x02\x02\x02\x9B\x9F\x07\r" +
		"\x02\x02\x9C\x9E\x07\x04\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\xA1\x03\x02" +
		"\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xAB\x03\x02" +
		"\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA8\x05\x1A\x0E\x02\xA3\xA4\x05:" +
		"\x1E\x02\xA4\xA5\x05\x1A\x0E\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA3\x03\x02" +
		"\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xA2\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xB0\x03\x02\x02\x02\xAD\xAF\x07\x04" +
		"\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02" +
		"\x02\x02\xB3\xB4\x07\x0E\x02\x02\xB4\x19\x03\x02\x02\x02\xB5\xB9\x05\n" +
		"\x06\x02\xB6\xB7\x07=\x02\x02\xB7\xB9\x07@\x02\x02\xB8\xB5\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\x1B\x03\x02\x02\x02\xBA\xBE\x07\v\x02" +
		"\x02\xBB\xBD\x07\x04\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02" +
		"\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xCA\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC7\x05\x1E\x10\x02\xC2\xC3\x05:\x1E" +
		"\x02\xC3\xC4\x05\x1E\x10\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC2\x03\x02\x02" +
		"\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02" +
		"\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xC1\x03\x02\x02" +
		"\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCF\x03\x02\x02\x02\xCC\xCE\x07\x04\x02" +
		"\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02" +
		"\x02\xD2\xD3\x07\f\x02\x02\xD3\xD4\x07\x12\x02\x02\xD4\x1D\x03\x02\x02" +
		"\x02\xD5\xD7\t\x02\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02" +
		"\x02\xD7\xD9\x03\x02\x02\x02\xD8\xDA\x07+\x02\x02\xD9\xD8\x03\x02\x02" +
		"\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xE6\x050\x19" +
		"\x02\xDC\xDE\t\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02" +
		"\x02\xDE\xE0\x03\x02\x02\x02\xDF\xE1\x07+\x02\x02\xE0\xDF\x03\x02\x02" +
		"\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07\n\x02" +
		"\x02\xE3\xE6\x05*\x16\x02\xE4\xE6\x07*\x02\x02\xE5\xD6\x03\x02\x02\x02" +
		"\xE5\xDD\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\x1F\x03\x02\x02\x02" +
		"\xE7\xE8\x05*\x16\x02\xE8!\x03\x02\x02\x02\xE9\xEB\x07\x04\x02\x02\xEA" +
		"\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC" +
		"\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF" +
		"\xF5\x05$\x13\x02\xF0\xF1\x05:\x1E\x02\xF1\xF2\x05$\x13\x02\xF2\xF4\x03" +
		"\x02\x02\x02\xF3\xF0\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03" +
		"\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xFB\x03\x02\x02\x02\xF7\xF5\x03" +
		"\x02\x02\x02\xF8\xFA\x07\x04\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFD\x03" +
		"\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC#\x03" +
		"\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x07#\x02\x02\xFF\xFE\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0104\x052\x1A\x02\u0102\u0104\x07*\x02\x02\u0103\xFF\x03\x02\x02\x02" +
		"\u0103\u0102\x03\x02\x02\x02\u0104%\x03\x02\x02\x02\u0105\u0109\x070\x02" +
		"\x02\u0106\u0108\x07\x04\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B" +
		"\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010C\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u0112\x05" +
		"(\x15\x02\u010D\u010E\x05:\x1E\x02\u010E\u010F\x05(\x15\x02\u010F\u0111" +
		"\x03\x02\x02\x02\u0110\u010D\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0118\x03" +
		"\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x07\x04\x02\x02\u0116" +
		"\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02" +
		"\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011B\u011C\x07/\x02\x02\u011C\'\x03\x02\x02\x02" +
		"\u011D\u0122\x050\x19\x02\u011E\u011F\x07\n\x02\x02\u011F\u0122\x05*\x16" +
		"\x02\u0120\u0122\x07*\x02\x02\u0121\u011D\x03\x02\x02\x02\u0121\u011E" +
		"\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122)\x03\x02\x02\x02\u0123" +
		"\u0124\b\x16\x01\x02\u0124\u0125\x07(\x02\x02\u0125\u0126\x05\x1C\x0F" +
		"\x02\u0126\u0127\x05 \x11\x02\u0127\u012C\x03\x02\x02\x02\u0128\u0129" +
		"\x07(\x02\x02\u0129\u012C\x05,\x17\x02\u012A\u012C\x05,\x17\x02\u012B" +
		"\u0123\x03\x02\x02\x02\u012B\u0128\x03\x02\x02\x02\u012B\u012A\x03\x02" +
		"\x02\x02\u012C\u0132\x03\x02\x02\x02\u012D\u012E\f\x06\x02\x02\u012E\u012F" +
		"\x07$\x02\x02\u012F\u0131\x05,\x17\x02\u0130\u012D\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133+\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u014E" +
		"\x07@\x02\x02\u0136\u013A\x070\x02\x02\u0137\u0139\x07\x04\x02\x02\u0138" +
		"\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
		"\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u0143\x05.\x18\x02\u013E\u013F\x05:\x1E\x02" +
		"\u013F\u0140\x05.\x18\x02\u0140\u0142\x03\x02\x02\x02\u0141\u013E\x03" +
		"\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0149\x03\x02\x02\x02\u0145\u0143\x03\x02" +
		"\x02\x02\u0146\u0148\x07\x04\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148" +
		"\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02" +
		"\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C" +
		"\u014D\x07/\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u0136\x03\x02\x02" +
		"\x02\u014E\u014F\x03\x02\x02\x02\u014F-\x03\x02\x02\x02\u0150\u0153\x05" +
		"*\x16\x02\u0151\u0153\x052\x1A\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0151" +
		"\x03\x02\x02\x02\u0153/\x03\x02\x02\x02\u0154\u0155\x07@\x02\x02\u0155" +
		"\u0156\x07\n\x02\x02\u0156\u0157\x07\x13\x02\x02\u0157\u0162\x052\x1A" +
		"\x02\u0158\u0159\x07@\x02\x02\u0159\u015A\x07\n\x02\x02\u015A\u0162\x05" +
		"*\x16\x02\u015B\u015C\x07@\x02\x02\u015C\u015D\x07\n\x02\x02\u015D\u015E" +
		"\x05*\x16\x02\u015E\u015F\x07\x13\x02\x02\u015F\u0160\x052\x1A\x02\u0160" +
		"\u0162\x03\x02\x02\x02\u0161\u0154\x03\x02\x02\x02\u0161\u0158\x03\x02" +
		"\x02\x02\u0161\u015B\x03\x02\x02\x02\u01621\x03\x02\x02\x02\u0163\u0164" +
		"\b\x1A\x01\x02\u0164\u0184\x07\x03\x02\x02\u0165\u0184\x07@\x02\x02\u0166" +
		"\u0167\x07\v\x02\x02\u0167\u0168\x052\x1A\x02\u0168\u0169\x07\f\x02\x02" +
		"\u0169\u0184\x03\x02\x02\x02\u016A\u016E\x07\x0F\x02\x02\u016B\u016D\x07" +
		"\x04\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E" +
		"\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u017A\x03\x02" +
		"\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0177\x058\x1D\x02\u0172\u0173" +
		"\x05:\x1E\x02\u0173\u0174\x058\x1D\x02\u0174\u0176\x03\x02\x02\x02\u0175" +
		"\u0172\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02" +
		"\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179" +
		"\u0177\x03\x02\x02\x02\u017A\u0171\x03\x02\x02\x02\u017A\u017B\x03\x02" +
		"\x02\x02\u017B\u017F\x03\x02\x02\x02\u017C\u017E\x07\x04\x02\x02\u017D" +
		"\u017C\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02" +
		"\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0182\u0184\x07\x10\x02\x02\u0183\u0163\x03\x02" +
		"\x02\x02\u0183\u0165\x03\x02\x02\x02\u0183\u0166\x03\x02\x02\x02\u0183" +
		"\u016A\x03\x02\x02\x02\u0184\u0196\x03\x02\x02\x02\u0185\u0186\f\x06\x02" +
		"\x02\u0186\u0187\t\x03\x02\x02\u0187\u0195\x052\x1A\x07\u0188\u0189\f" +
		"\x05\x02\x02\u0189\u018A\t\x04\x02\x02\u018A\u0195\x052\x1A\x06\u018B" +
		"\u018C\f\n\x02\x02\u018C\u018D\x07$\x02\x02\u018D\u0195\x07@\x02\x02\u018E" +
		"\u018F\f\x04\x02\x02\u018F\u0191\x07\v\x02\x02\u0190\u0192\x05\"\x12\x02" +
		"\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\u0195\x07\f\x02\x02\u0194\u0185\x03\x02\x02\x02\u0194" +
		"\u0188\x03\x02\x02\x02\u0194\u018B\x03\x02\x02\x02\u0194\u018E\x03\x02" +
		"\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u01973\x03\x02\x02\x02\u0198\u0196\x03\x02\x02" +
		"\x02\u0199\u019D\x07\r\x02\x02\u019A\u019C\x07\x04\x02\x02\u019B\u019A" +
		"\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019E\u01A9\x03\x02\x02\x02\u019F\u019D\x03" +
		"\x02\x02\x02\u01A0\u01A6\x056\x1C\x02\u01A1\u01A2\x05:\x1E\x02\u01A2\u01A3" +
		"\x056\x1C\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A1\x03\x02\x02\x02" +
		"\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03" +
		"\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9" +
		"\u01A0\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AE\x03\x02" +
		"\x02\x02\u01AB\u01AD\x07\x04\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD" +
		"\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02" +
		"\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1" +
		"\u01B2\x07\x0E\x02\x02\u01B25\x03\x02\x02\x02\u01B3\u01B4\x07@\x02\x02" +
		"\u01B4\u01B8\x07\v\x02\x02\u01B5\u01B7\x07\x04\x02\x02\u01B6\u01B5\x03" +
		"\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8" +
		"\u01B9\x03\x02\x02\x02\u01B9\u01C4\x03\x02\x02\x02\u01BA\u01B8\x03\x02" +
		"\x02\x02\u01BB\u01C1\x05\x1E\x10\x02\u01BC\u01BD\x05:\x1E\x02\u01BD\u01BE" +
		"\x05\x1E\x10\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BC\x03\x02\x02\x02" +
		"\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03" +
		"\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4" +
		"\u01BB\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C9\x03\x02" +
		"\x02\x02\u01C6\u01C8\x07\x04\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02" +
		"\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
		"\u01CF\x07\f\x02\x02\u01CD\u01CF\x07@\x02\x02\u01CE\u01B3\x03\x02\x02" +
		"\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF7\x03\x02\x02\x02\u01D0\u01D1\x07" +
		"@\x02\x02\u01D1\u01D2\x07\n\x02\x02\u01D2\u01D3\x052\x1A\x02\u01D39\x03" +
		"\x02\x02\x02\u01D4\u01D6\x07\x04\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02" +
		"\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01DB\x07\x11\x02\x02\u01DA" +
		"\u01D5\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB;\x03\x02\x02" +
		"\x02D>@KNSZahux|\x7F\x85\x8E\x91\x96\x9F\xA8\xAB\xB0\xB8\xBE\xC7\xCA\xCF" +
		"\xD6\xD9\xDD\xE0\xE5\xEC\xF5\xFB\xFF\u0103\u0109\u0112\u0118\u0121\u012B" +
		"\u0132\u013A\u0143\u0149\u014E\u0152\u0161\u016E\u0177\u017A\u017F\u0183" +
		"\u0191\u0194\u0196\u019D\u01A6\u01A9\u01AE\u01B8\u01C1\u01C4\u01C9\u01CE" +
		"\u01D7\u01DA";
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
	public ID(): TerminalNode { return this.getToken(LuxParser.ID, 0); }
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
export class TypeInTypeContext extends VtypeContext {
	public vtype(): VtypeContext {
		return this.getRuleContext(0, VtypeContext);
	}
	public OPNAV(): TerminalNode { return this.getToken(LuxParser.OPNAV, 0); }
	public plainType(): PlainTypeContext {
		return this.getRuleContext(0, PlainTypeContext);
	}
	constructor(ctx: VtypeContext) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuxParser.RULE_plainType; }
	// @Override
	public accept<Result>(visitor: LuxParserVisitor<Result>): Result {
		if (visitor.visitPlainType) {
			return visitor.visitPlainType(this);
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


