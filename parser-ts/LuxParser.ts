// Generated from grammar/LuxParser.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly RULE_varDef = 22;
	public static readonly RULE_expr = 23;
	public static readonly RULE_enumScope = 24;
	public static readonly RULE_enumEntry = 25;
	public static readonly RULE_objectLiteralEntry = 26;
	public static readonly RULE_delim = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "fnCallStatement", "lvalue", "taggedDeclaration", 
		"tags", "tag", "declaration", "typeDef", "fnDef", "scope", "classScope", 
		"classScopeDec", "fnType", "fnDefParam", "fnReturnType", "fnCallParams", 
		"fnCallParam", "tmplDefParamList", "tmplDefParam", "vtype", "plainType", 
		"varDef", "expr", "enumScope", "enumEntry", "objectLiteralEntry", "delim",
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
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 58;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LuxParser.OPAT:
				case LuxParser.ID:
					{
					this.state = 56;
					this.taggedDeclaration();
					}
					break;
				case LuxParser.ENDL:
					{
					this.state = 57;
					this.match(LuxParser.ENDL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LuxParser.ENDL || _la === LuxParser.OPAT || _la === LuxParser.ID);
			this.state = 62;
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
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new DecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.taggedDeclaration();
				}
				break;

			case 2:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.lvalue();
				this.state = 66;
				this.match(LuxParser.OPASSIGN);
				this.state = 67;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 69;
				this.match(LuxParser.RETURN);
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.ID) {
					{
					this.state = 70;
					this.expr(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new FnCallStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 73;
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
			this.state = 76;
			this.expr(0);
			this.state = 77;
			this.match(LuxParser.LPAREN);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
				{
				this.state = 78;
				this.fnCallParams();
				}
			}

			this.state = 81;
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
			this.state = 83;
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
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT) {
				{
				this.state = 85;
				this.tags();
				}
			}

			this.state = 88;
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
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 90;
				this.tag();
				}
				}
				this.state = 93;
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
			this.state = 95;
			this.match(LuxParser.OPAT);
			this.state = 96;
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
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new VarDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new TypeDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
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
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new FuncDecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.match(LuxParser.ID);
				this.state = 103;
				this.match(LuxParser.COLON);
				this.state = 104;
				this.fnDef();
				}
				break;

			case 2:
				_localctx = new EnumDecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(LuxParser.ID);
				this.state = 106;
				this.match(LuxParser.COLON);
				this.state = 107;
				this.match(LuxParser.ENUM);
				this.state = 108;
				this.enumScope();
				}
				break;

			case 3:
				_localctx = new ClassDecContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.match(LuxParser.ID);
				this.state = 110;
				this.match(LuxParser.COLON);
				this.state = 111;
				this.match(LuxParser.CLASS);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.LT) {
					{
					this.state = 112;
					this.tmplDefParamList();
					}
				}

				this.state = 115;
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
			this.state = 118;
			this.fnType();
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 119;
				this.fnReturnType();
				}
				break;
			}
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.LCURL) {
				{
				this.state = 122;
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
			this.state = 125;
			this.match(LuxParser.LCURL);
			this.state = 129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 126;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.OPAT) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || _la === LuxParser.RETURN || _la === LuxParser.ID) {
				{
				this.state = 132;
				this.statement();
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 133;
						this.delim();
						this.state = 134;
						this.statement();
						}
						}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
			}

			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 143;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
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
			this.state = 151;
			this.match(LuxParser.LCURL);
			this.state = 155;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 152;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.OPAT || _la === LuxParser.INHERIT || _la === LuxParser.ID) {
				{
				this.state = 158;
				this.classScopeDec();
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 159;
						this.delim();
						this.state = 160;
						this.classScopeDec();
						}
						}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 169;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 175;
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
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.OPAT:
			case LuxParser.ID:
				_localctx = new ClassScopeDecNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.taggedDeclaration();
				}
				break;
			case LuxParser.INHERIT:
				_localctx = new ClassScopeInheritContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(LuxParser.INHERIT);
				this.state = 179;
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
			this.state = 182;
			this.match(LuxParser.LPAREN);
			this.state = 186;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 183;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
				{
				this.state = 189;
				this.fnDefParam();
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 190;
						this.delim();
						this.state = 191;
						this.fnDefParam();
						}
						}
					}
					this.state = 197;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
			}

			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 200;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.match(LuxParser.RPAREN);
			this.state = 207;
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
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new FnDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 209;
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

				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 212;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 215;
				this.varDef();
				}
				break;

			case 2:
				_localctx = new FnDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOVE || _la === LuxParser.OPMOD) {
					{
					this.state = 216;
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

				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPELIPSE) {
					{
					this.state = 219;
					this.match(LuxParser.OPELIPSE);
					}
				}

				this.state = 222;
				this.match(LuxParser.COLON);
				this.state = 223;
				this.vtype(0);
				}
				break;

			case 3:
				_localctx = new FnDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
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
			this.state = 227;
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
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 229;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 235;
			this.fnCallParam();
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 236;
					this.delim();
					this.state = 237;
					this.fnCallParam();
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
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
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
			case LuxParser.LPAREN:
			case LuxParser.LSQUARE:
			case LuxParser.OPMOD:
			case LuxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.OPMOD) {
					{
					this.state = 250;
					this.match(LuxParser.OPMOD);
					}
				}

				this.state = 253;
				this.expr(0);
				}
				break;
			case LuxParser.OPSKIP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 254;
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
			this.state = 257;
			this.match(LuxParser.LT);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 258;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 264;
			this.tmplDefParam();
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 265;
					this.delim();
					this.state = 266;
					this.tmplDefParam();
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
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
			this.state = 285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ID:
				_localctx = new TmplDefParamFullContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.varDef();
				}
				break;
			case LuxParser.COLON:
				_localctx = new TmplDefParamOnlyTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(LuxParser.COLON);
				this.state = 283;
				this.vtype(0);
				}
				break;
			case LuxParser.OPSKIP:
				_localctx = new TmplDefParamSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 284;
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
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new TypeFunctionPtrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 288;
				this.match(LuxParser.OPREF);
				this.state = 289;
				this.fnType();
				this.state = 290;
				this.fnReturnType();
				}
				break;

			case 2:
				{
				_localctx = new TypeRefContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(LuxParser.OPREF);
				this.state = 293;
				this.plainType();
				}
				break;

			case 3:
				{
				_localctx = new TypePlainContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 294;
				this.plainType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 302;
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
					this.state = 297;
					if (!(this.precpred(this._ctx, 4))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					}
					this.state = 298;
					this.match(LuxParser.OPNAV);
					this.state = 299;
					this.plainType();
					}
					}
				}
				this.state = 304;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
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
	public varDef(): VarDefContext {
		let _localctx: VarDefContext = new VarDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LuxParser.RULE_varDef);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				_localctx = new VarDefAssignImplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				(_localctx as VarDefAssignImplicitContext)._id = this.match(LuxParser.ID);
				this.state = 308;
				this.match(LuxParser.COLON);
				this.state = 309;
				this.match(LuxParser.OPASSIGN);
				this.state = 310;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new VarDefOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.match(LuxParser.ID);
				this.state = 312;
				this.match(LuxParser.COLON);
				this.state = 313;
				this.vtype(0);
				}
				break;

			case 3:
				_localctx = new VarDefAssignExplicitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.match(LuxParser.ID);
				this.state = 315;
				this.match(LuxParser.COLON);
				this.state = 316;
				this.vtype(0);
				this.state = 317;
				this.match(LuxParser.OPASSIGN);
				this.state = 318;
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
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, LuxParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.NUMBER:
				{
				_localctx = new NumberEContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 323;
				(_localctx as NumberEContext)._value = this.match(LuxParser.NUMBER);
				}
				break;
			case LuxParser.ID:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				(_localctx as IdentifierExprContext)._id = this.match(LuxParser.ID);
				}
				break;
			case LuxParser.LPAREN:
				{
				_localctx = new BracketExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 325;
				this.match(LuxParser.LPAREN);
				this.state = 326;
				this.expr(0);
				this.state = 327;
				this.match(LuxParser.RPAREN);
				}
				break;
			case LuxParser.LSQUARE:
				{
				_localctx = new ObjectLiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 329;
				this.match(LuxParser.LSQUARE);
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 330;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 335;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.ID) {
					{
					this.state = 336;
					this.objectLiteralEntry();
					this.state = 342;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 337;
							this.delim();
							this.state = 338;
							this.objectLiteralEntry();
							}
							}
						}
						this.state = 344;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
					}
					}
				}

				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 347;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 353;
				this.match(LuxParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 371;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 356;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 357;
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
						this.state = 358;
						(_localctx as InfixExprContext)._right = this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 359;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 360;
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
						this.state = 361;
						(_localctx as InfixExprContext)._right = this.expr(4);
						}
						break;

					case 3:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MemberExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 362;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 363;
						this.match(LuxParser.OPNAV);
						this.state = 364;
						(_localctx as MemberExprContext)._right = this.match(LuxParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new ImplFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuxParser.RULE_expr);
						this.state = 365;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 366;
						this.match(LuxParser.LPAREN);
						this.state = 368;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuxParser.NUMBER) | (1 << LuxParser.ENDL) | (1 << LuxParser.LPAREN) | (1 << LuxParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
							{
							this.state = 367;
							this.fnCallParams();
							}
						}

						this.state = 370;
						this.match(LuxParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 48, LuxParser.RULE_enumScope);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(LuxParser.LCURL);
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.match(LuxParser.ENDL);
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuxParser.ID) {
				{
				this.state = 383;
				this.enumEntry();
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 384;
						this.delim();
						this.state = 385;
						this.enumEntry();
						}
						}
					}
					this.state = 391;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				}
			}

			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuxParser.ENDL) {
				{
				{
				this.state = 394;
				this.match(LuxParser.ENDL);
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 400;
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
		this.enterRule(_localctx, 50, LuxParser.RULE_enumEntry);
		let _la: number;
		try {
			let _alt: number;
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				_localctx = new EnumEntryTaggedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.match(LuxParser.ID);
				this.state = 403;
				this.match(LuxParser.LPAREN);
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 404;
						this.match(LuxParser.ENDL);
						}
						}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuxParser.COLON || _la === LuxParser.OPMOVE || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuxParser.OPMOD - 33)) | (1 << (LuxParser.OPSKIP - 33)) | (1 << (LuxParser.OPELIPSE - 33)) | (1 << (LuxParser.ID - 33)))) !== 0)) {
					{
					this.state = 410;
					this.fnDefParam();
					this.state = 416;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 411;
							this.delim();
							this.state = 412;
							this.fnDefParam();
							}
							}
						}
						this.state = 418;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					}
					}
				}

				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuxParser.ENDL) {
					{
					{
					this.state = 421;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 427;
				this.match(LuxParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new EnumEntryPlainContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
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
		this.enterRule(_localctx, 52, LuxParser.RULE_objectLiteralEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(LuxParser.ID);
			this.state = 432;
			this.match(LuxParser.COLON);
			this.state = 433;
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
		this.enterRule(_localctx, 54, LuxParser.RULE_delim);
		let _la: number;
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuxParser.ENDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 435;
					this.match(LuxParser.ENDL);
					}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === LuxParser.ENDL);
				}
				break;
			case LuxParser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 440;
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

		case 23:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u01BE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x06\x02=\n\x02\r\x02\x0E\x02>\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03" +
		"\x03\x03\x05\x03M\n\x03\x03\x04\x03\x04\x03\x04\x05\x04R\n\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x06\x05\x06Y\n\x06\x03\x06\x03\x06\x03\x07" +
		"\x06\x07^\n\x07\r\x07\x0E\x07_\x03\b\x03\b\x03\b\x03\t\x03\t\x05\tg\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\nt\n\n\x03\n\x05\nw\n\n\x03\v\x03\v\x05\v{\n\v\x03\v\x05\v~\n\v\x03\f" +
		"\x03\f\x07\f\x82\n\f\f\f\x0E\f\x85\v\f\x03\f\x03\f\x03\f\x03\f\x07\f\x8B" +
		"\n\f\f\f\x0E\f\x8E\v\f\x05\f\x90\n\f\x03\f\x07\f\x93\n\f\f\f\x0E\f\x96" +
		"\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\x9C\n\r\f\r\x0E\r\x9F\v\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\r\xA5\n\r\f\r\x0E\r\xA8\v\r\x05\r\xAA\n\r\x03\r\x07" +
		"\r\xAD\n\r\f\r\x0E\r\xB0\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xB7\n\x0E\x03\x0F\x03\x0F\x07\x0F\xBB\n\x0F\f\x0F\x0E\x0F\xBE\v\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC4\n\x0F\f\x0F\x0E\x0F\xC7\v\x0F" +
		"\x05\x0F\xC9\n\x0F\x03\x0F\x07\x0F\xCC\n\x0F\f\x0F\x0E\x0F\xCF\v\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\xD5\n\x10\x03\x10\x05\x10\xD8\n\x10" +
		"\x03\x10\x03\x10\x05\x10\xDC\n\x10\x03\x10\x05\x10\xDF\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\xE4\n\x10\x03\x11\x03\x11\x03\x12\x07\x12\xE9\n\x12" +
		"\f\x12\x0E\x12\xEC\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xF2\n" +
		"\x12\f\x12\x0E\x12\xF5\v\x12\x03\x12\x07\x12\xF8\n\x12\f\x12\x0E\x12\xFB" +
		"\v\x12\x03\x13\x05\x13\xFE\n\x13\x03\x13\x03\x13\x05\x13\u0102\n\x13\x03" +
		"\x14\x03\x14\x07\x14\u0106\n\x14\f\x14\x0E\x14\u0109\v\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u010F\n\x14\f\x14\x0E\x14\u0112\v\x14\x03" +
		"\x14\x07\x14\u0115\n\x14\f\x14\x0E\x14\u0118\v\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0120\n\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u012A\n\x16\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\u012F\n\x16\f\x16\x0E\x16\u0132\v\x16\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0143\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u014E" +
		"\n\x19\f\x19\x0E\x19\u0151\v\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19" +
		"\u0157\n\x19\f\x19\x0E\x19\u015A\v\x19\x05\x19\u015C\n\x19\x03\x19\x07" +
		"\x19\u015F\n\x19\f\x19\x0E\x19\u0162\v\x19\x03\x19\x05\x19\u0165\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u0173\n\x19\x03\x19\x07\x19\u0176\n\x19" +
		"\f\x19\x0E\x19\u0179\v\x19\x03\x1A\x03\x1A\x07\x1A\u017D\n\x1A\f\x1A\x0E" +
		"\x1A\u0180\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0186\n\x1A\f" +
		"\x1A\x0E\x1A\u0189\v\x1A\x05\x1A\u018B\n\x1A\x03\x1A\x07\x1A\u018E\n\x1A" +
		"\f\x1A\x0E\x1A\u0191\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u0198\n\x1B\f\x1B\x0E\x1B\u019B\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u01A1\n\x1B\f\x1B\x0E\x1B\u01A4\v\x1B\x05\x1B\u01A6\n\x1B" +
		"\x03\x1B\x07\x1B\u01A9\n\x1B\f\x1B\x0E\x1B\u01AC\v\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u01B0\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x06\x1D\u01B7" +
		"\n\x1D\r\x1D\x0E\x1D\u01B8\x03\x1D\x05\x1D\u01BC\n\x1D\x03\x1D\x02\x02" +
		"\x04*0\x1E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02\x02\x05\x04\x02\x18" +
		"\x18##\x03\x02!\"\x04\x02\x17\x17  \x02\u01E9\x02<\x03\x02\x02\x02\x04" +
		"L\x03\x02\x02\x02\x06N\x03\x02\x02\x02\bU\x03\x02\x02\x02\nX\x03\x02\x02" +
		"\x02\f]\x03\x02\x02\x02\x0Ea\x03\x02\x02\x02\x10f\x03\x02\x02\x02\x12" +
		"v\x03\x02\x02\x02\x14x\x03\x02\x02\x02\x16\x7F\x03\x02\x02\x02\x18\x99" +
		"\x03\x02\x02\x02\x1A\xB6\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xE3" +
		"\x03\x02\x02\x02 \xE5\x03\x02\x02\x02\"\xEA\x03\x02\x02\x02$\u0101\x03" +
		"\x02\x02\x02&\u0103\x03\x02\x02\x02(\u011F\x03\x02\x02\x02*\u0129\x03" +
		"\x02\x02\x02,\u0133\x03\x02\x02\x02.\u0142\x03\x02\x02\x020\u0164\x03" +
		"\x02\x02\x022\u017A\x03\x02\x02\x024\u01AF\x03\x02\x02\x026\u01B1\x03" +
		"\x02\x02\x028\u01BB\x03\x02\x02\x02:=\x05\n\x06\x02;=\x07\x04\x02\x02" +
		"<:\x03\x02\x02\x02<;\x03\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02" +
		">?\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02" +
		"\x02BM\x05\n\x06\x02CD\x05\b\x05\x02DE\x07\x13\x02\x02EF\x050\x19\x02" +
		"FM\x03\x02\x02\x02GI\x074\x02\x02HJ\x050\x19\x02IH\x03\x02\x02\x02IJ\x03" +
		"\x02\x02\x02JM\x03\x02\x02\x02KM\x05\x06\x04\x02LB\x03\x02\x02\x02LC\x03" +
		"\x02\x02\x02LG\x03\x02\x02\x02LK\x03\x02\x02\x02M\x05\x03\x02\x02\x02" +
		"NO\x050\x19\x02OQ\x07\v\x02\x02PR\x05\"\x12\x02QP\x03\x02\x02\x02QR\x03" +
		"\x02\x02\x02RS\x03\x02\x02\x02ST\x07\f\x02\x02T\x07\x03\x02\x02\x02UV" +
		"\x07@\x02\x02V\t\x03\x02\x02\x02WY\x05\f\x07\x02XW\x03\x02\x02\x02XY\x03" +
		"\x02\x02\x02YZ\x03\x02\x02\x02Z[\x05\x10\t\x02[\v\x03\x02\x02\x02\\^\x05" +
		"\x0E\b\x02]\\\x03\x02\x02\x02^_\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03" +
		"\x02\x02\x02`\r\x03\x02\x02\x02ab\x07\t\x02\x02bc\x07@\x02\x02c\x0F\x03" +
		"\x02\x02\x02dg\x05.\x18\x02eg\x05\x12\n\x02fd\x03\x02\x02\x02fe\x03\x02" +
		"\x02\x02g\x11\x03\x02\x02\x02hi\x07@\x02\x02ij\x07\n\x02\x02jw\x05\x14" +
		"\v\x02kl\x07@\x02\x02lm\x07\n\x02\x02mn\x07<\x02\x02nw\x052\x1A\x02op" +
		"\x07@\x02\x02pq\x07\n\x02\x02qs\x073\x02\x02rt\x05&\x14\x02sr\x03\x02" +
		"\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x05\x18\r\x02vh\x03\x02" +
		"\x02\x02vk\x03\x02\x02\x02vo\x03\x02\x02\x02w\x13\x03\x02\x02\x02xz\x05" +
		"\x1C\x0F\x02y{\x05 \x11\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03" +
		"\x02\x02\x02|~\x05\x16\f\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~\x15" +
		"\x03\x02\x02\x02\x7F\x83\x07\r\x02\x02\x80\x82\x07\x04\x02\x02\x81\x80" +
		"\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84" +
		"\x03\x02\x02\x02\x84\x8F\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x8C" +
		"\x05\x04\x03\x02\x87\x88\x058\x1D\x02\x88\x89\x05\x04\x03\x02\x89\x8B" +
		"\x03\x02\x02\x02\x8A\x87\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8F\x86\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x94" +
		"\x03\x02\x02\x02\x91\x93\x07\x04\x02\x02\x92\x91\x03\x02\x02\x02\x93\x96" +
		"\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97" +
		"\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x07\x0E\x02\x02\x98\x17" +
		"\x03\x02\x02\x02\x99\x9D\x07\r\x02\x02\x9A\x9C\x07\x04\x02\x02\x9B\x9A" +
		"\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E" +
		"\x03\x02\x02\x02\x9E\xA9\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA6" +
		"\x05\x1A\x0E\x02\xA1\xA2\x058\x1D\x02\xA2\xA3\x05\x1A\x0E\x02\xA3\xA5" +
		"\x03\x02\x02\x02\xA4\xA1\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4" +
		"\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6" +
		"\x03\x02\x02\x02\xA9\xA0\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAE" +
		"\x03\x02\x02\x02\xAB\xAD\x07\x04\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xB0" +
		"\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1" +
		"\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB2\x07\x0E\x02\x02\xB2\x19" +
		"\x03\x02\x02\x02\xB3\xB7\x05\n\x06\x02\xB4\xB5\x07=\x02\x02\xB5\xB7\x07" +
		"@\x02\x02\xB6\xB3\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\x1B\x03" +
		"\x02\x02\x02\xB8\xBC\x07\v\x02\x02\xB9\xBB\x07\x04\x02\x02\xBA\xB9\x03" +
		"\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xC8\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC5\x05" +
		"\x1E\x10\x02\xC0\xC1\x058\x1D\x02\xC1\xC2\x05\x1E\x10\x02\xC2\xC4\x03" +
		"\x02\x02\x02\xC3\xC0\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03" +
		"\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03" +
		"\x02\x02\x02\xC8\xBF\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCD\x03" +
		"\x02\x02\x02\xCA\xCC\x07\x04\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03" +
		"\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03" +
		"\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07\f\x02\x02\xD1\xD2\x07" +
		"\x12\x02\x02\xD2\x1D\x03\x02\x02\x02\xD3\xD5\t\x02\x02\x02\xD4\xD3\x03" +
		"\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD8\x07" +
		"+\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xE4\x05.\x18\x02\xDA\xDC\t\x02\x02\x02\xDB\xDA\x03\x02" +
		"\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDF\x07+" +
		"\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02" +
		"\x02\x02\xE0\xE1\x07\n\x02\x02\xE1\xE4\x05*\x16\x02\xE2\xE4\x07*\x02\x02" +
		"\xE3\xD4\x03\x02\x02\x02\xE3\xDB\x03\x02\x02\x02\xE3\xE2\x03\x02\x02\x02" +
		"\xE4\x1F\x03\x02\x02\x02\xE5\xE6\x05*\x16\x02\xE6!\x03\x02\x02\x02\xE7" +
		"\xE9\x07\x04\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA" +
		"\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC" +
		"\xEA\x03\x02\x02\x02\xED\xF3\x05$\x13\x02\xEE\xEF\x058\x1D\x02\xEF\xF0" +
		"\x05$\x13\x02\xF0\xF2\x03\x02\x02\x02\xF1\xEE\x03\x02\x02\x02\xF2\xF5" +
		"\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF9" +
		"\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF8\x07\x04\x02\x02\xF7\xF6" +
		"\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA" +
		"\x03\x02\x02\x02\xFA#\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFE" +
		"\x07#\x02\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF" +
		"\x03\x02\x02\x02\xFF\u0102\x050\x19\x02\u0100\u0102\x07*\x02\x02\u0101" +
		"\xFD\x03\x02\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102%\x03\x02\x02\x02" +
		"\u0103\u0107\x070\x02\x02\u0104\u0106\x07\x04\x02\x02\u0105\u0104\x03" +
		"\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109\u0107\x03\x02" +
		"\x02\x02\u010A\u0110\x05(\x15\x02\u010B\u010C\x058\x1D\x02\u010C\u010D" +
		"\x05(\x15\x02\u010D\u010F\x03\x02\x02\x02\u010E\u010B\x03\x02\x02\x02" +
		"\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u0116\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113" +
		"\u0115\x07\x04\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02" +
		"\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07/\x02" +
		"\x02\u011A\'\x03\x02\x02\x02\u011B\u0120\x05.\x18\x02\u011C\u011D\x07" +
		"\n\x02\x02\u011D\u0120\x05*\x16\x02\u011E\u0120\x07*\x02\x02\u011F\u011B" +
		"\x03\x02\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02" +
		"\u0120)\x03\x02\x02\x02\u0121\u0122\b\x16\x01\x02\u0122\u0123\x07(\x02" +
		"\x02\u0123\u0124\x05\x1C\x0F\x02\u0124\u0125\x05 \x11\x02\u0125\u012A" +
		"\x03\x02\x02\x02\u0126\u0127\x07(\x02\x02\u0127\u012A\x05,\x17\x02\u0128" +
		"\u012A\x05,\x17\x02\u0129\u0121\x03\x02\x02\x02\u0129\u0126\x03\x02\x02" +
		"\x02\u0129\u0128\x03\x02\x02\x02\u012A\u0130\x03\x02\x02\x02\u012B\u012C" +
		"\f\x06\x02\x02\u012C\u012D\x07$\x02\x02\u012D\u012F\x05,\x17\x02\u012E" +
		"\u012B\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131+\x03\x02\x02\x02\u0132\u0130" +
		"\x03\x02\x02\x02\u0133\u0134\x07@\x02\x02\u0134-\x03\x02\x02\x02\u0135" +
		"\u0136\x07@\x02\x02\u0136\u0137\x07\n\x02\x02\u0137\u0138\x07\x13\x02" +
		"\x02\u0138\u0143\x050\x19\x02\u0139\u013A\x07@\x02\x02\u013A\u013B\x07" +
		"\n\x02\x02\u013B\u0143\x05*\x16\x02\u013C\u013D\x07@\x02\x02\u013D\u013E" +
		"\x07\n\x02\x02\u013E\u013F\x05*\x16\x02\u013F\u0140\x07\x13\x02\x02\u0140" +
		"\u0141\x050\x19\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0135\x03\x02\x02" +
		"\x02\u0142\u0139\x03\x02\x02\x02\u0142\u013C\x03\x02\x02\x02\u0143/\x03" +
		"\x02\x02\x02\u0144\u0145\b\x19\x01\x02\u0145\u0165\x07\x03\x02\x02\u0146" +
		"\u0165\x07@\x02\x02\u0147\u0148\x07\v\x02\x02\u0148\u0149\x050\x19\x02" +
		"\u0149\u014A\x07\f\x02\x02\u014A\u0165\x03\x02\x02\x02\u014B\u014F\x07" +
		"\x0F\x02\x02\u014C\u014E\x07\x04\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E" +
		"\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\u015B\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152" +
		"\u0158\x056\x1C\x02\u0153\u0154\x058\x1D\x02\u0154\u0155\x056\x1C\x02" +
		"\u0155\u0157\x03\x02\x02\x02\u0156\u0153\x03\x02\x02\x02\u0157\u015A\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u0152\x03\x02" +
		"\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u0160\x03\x02\x02\x02\u015D" +
		"\u015F\x07\x04\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F\u0162\x03\x02" +
		"\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0163\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0165\x07\x10" +
		"\x02\x02\u0164\u0144\x03\x02\x02\x02\u0164\u0146\x03\x02\x02\x02\u0164" +
		"\u0147\x03\x02\x02\x02\u0164\u014B\x03\x02\x02\x02\u0165\u0177\x03\x02" +
		"\x02\x02\u0166\u0167\f\x06\x02\x02\u0167\u0168\t\x03\x02\x02\u0168\u0176" +
		"\x050\x19\x07\u0169\u016A\f\x05\x02\x02\u016A\u016B\t\x04\x02\x02\u016B" +
		"\u0176\x050\x19\x06\u016C\u016D\f\n\x02\x02\u016D\u016E\x07$\x02\x02\u016E" +
		"\u0176\x07@\x02\x02\u016F\u0170\f\x04\x02\x02\u0170\u0172\x07\v\x02\x02" +
		"\u0171\u0173\x05\"\x12\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03" +
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x07\f\x02\x02\u0175" +
		"\u0166\x03\x02\x02\x02\u0175\u0169\x03\x02\x02\x02\u0175\u016C\x03\x02" +
		"\x02\x02\u0175\u016F\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177" +
		"\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u01781\x03\x02\x02" +
		"\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017E\x07\r\x02\x02\u017B\u017D" +
		"\x07\x04\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02" +
		"\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u018A\x03" +
		"\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0187\x054\x1B\x02\u0182" +
		"\u0183\x058\x1D\x02\u0183\u0184\x054\x1B\x02\u0184\u0186\x03\x02\x02\x02" +
		"\u0185\u0182\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03" +
		"\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189" +
		"\u0187\x03\x02\x02\x02\u018A\u0181\x03\x02\x02\x02\u018A\u018B\x03\x02" +
		"\x02\x02\u018B\u018F\x03\x02\x02\x02\u018C\u018E\x07\x04\x02\x02\u018D" +
		"\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02" +
		"\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191" +
		"\u018F\x03\x02\x02\x02\u0192\u0193\x07\x0E\x02\x02\u01933\x03\x02\x02" +
		"\x02\u0194\u0195\x07@\x02\x02\u0195\u0199\x07\v\x02\x02\u0196\u0198\x07" +
		"\x04\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u01A5\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u01A2\x05\x1E\x10\x02\u019D" +
		"\u019E\x058\x1D\x02\u019E\u019F\x05\x1E\x10\x02\u019F\u01A1\x03\x02\x02" +
		"\x02\u01A0\u019D\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0" +
		"\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02" +
		"\u01A4\u01A2\x03\x02\x02\x02\u01A5\u019C\x03\x02\x02\x02\u01A5\u01A6\x03" +
		"\x02\x02\x02\u01A6\u01AA\x03\x02\x02\x02\u01A7\u01A9\x07\x04\x02\x02\u01A8" +
		"\u01A7\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02" +
		"\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AD\u01B0\x07\f\x02\x02\u01AE\u01B0\x07@\x02" +
		"\x02\u01AF\u0194\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B05\x03" +
		"\x02\x02\x02\u01B1\u01B2\x07@\x02\x02\u01B2\u01B3\x07\n\x02\x02\u01B3" +
		"\u01B4\x050\x19\x02\u01B47\x03\x02\x02\x02\u01B5\u01B7\x07\x04\x02\x02" +
		"\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03" +
		"\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA" +
		"\u01BC\x07\x11\x02\x02\u01BB\u01B6\x03\x02\x02\x02\u01BB\u01BA\x03\x02" +
		"\x02\x02\u01BC9\x03\x02\x02\x02?<>ILQX_fsvz}\x83\x8C\x8F\x94\x9D\xA6\xA9" +
		"\xAE\xB6\xBC\xC5\xC8\xCD\xD4\xD7\xDB\xDE\xE3\xEA\xF3\xF9\xFD\u0101\u0107" +
		"\u0110\u0116\u011F\u0129\u0130\u0142\u014F\u0158\u015B\u0160\u0164\u0172" +
		"\u0175\u0177\u017E\u0187\u018A\u018F\u0199\u01A2\u01A5\u01AA\u01AF\u01B8" +
		"\u01BB";
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


