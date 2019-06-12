// Generated from C:/projects/lux-ts/grammar\LuxParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LuxParserVisitor = require('./LuxParserVisitor').LuxParserVisitor;

var grammarFileName = "LuxParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003=V\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0003\u0002\u0007\u0002\u0012\n\u0002\f\u0002\u000e\u0002\u0015",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "\u001b\n\u0002\f\u0002\u000e\u0002\u001e\u000b\u0002\u0005\u0002 \n",
    "\u0002\u0003\u0002\u0007\u0002#\n\u0002\f\u0002\u000e\u0002&\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007A\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007I\n\u0007\f\u0007\u000e",
    "\u0007L\u000b\u0007\u0003\b\u0006\bO\n\b\r\b\u000e\bP\u0003\b\u0005",
    "\bT\n\b\u0003\b\u0002\u0003\f\t\u0002\u0004\u0006\b\n\f\u000e\u0002",
    "\u0004\u0003\u0002\u001f \u0004\u0002\u0015\u0015\u001e\u001e\u0002",
    "Y\u0002\u0013\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002",
    "\u00060\u0003\u0002\u0002\u0002\b2\u0003\u0002\u0002\u0002\n4\u0003",
    "\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002\u000eS\u0003\u0002\u0002",
    "\u0002\u0010\u0012\u0007\u0004\u0002\u0002\u0011\u0010\u0003\u0002\u0002",
    "\u0002\u0012\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u001f\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016\u001c\u0005\u0004\u0003",
    "\u0002\u0017\u0018\u0005\u000e\b\u0002\u0018\u0019\u0005\u0004\u0003",
    "\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0017\u0003\u0002\u0002",
    "\u0002\u001b\u001e\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d \u0003\u0002\u0002",
    "\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001f\u0016\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 $\u0003\u0002\u0002\u0002!#\u0007",
    "\u0004\u0002\u0002\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002",
    "$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002\'(\u0007\u0002\u0002\u0003(\u0003",
    "\u0003\u0002\u0002\u0002)/\u0005\b\u0005\u0002*+\u0005\u0006\u0004\u0002",
    "+,\u0007\u0011\u0002\u0002,-\u0005\f\u0007\u0002-/\u0003\u0002\u0002",
    "\u0002.)\u0003\u0002\u0002\u0002.*\u0003\u0002\u0002\u0002/\u0005\u0003",
    "\u0002\u0002\u000201\u0007=\u0002\u00021\u0007\u0003\u0002\u0002\u0002",
    "23\u0005\n\u0006\u00023\t\u0003\u0002\u0002\u000245\u0007=\u0002\u0002",
    "56\u0007\b\u0002\u000267\u0007\u0011\u0002\u000278\u0005\f\u0007\u0002",
    "8\u000b\u0003\u0002\u0002\u00029:\b\u0007\u0001\u0002:A\u0007\u0003",
    "\u0002\u0002;A\u0007=\u0002\u0002<=\u0007\t\u0002\u0002=>\u0005\f\u0007",
    "\u0002>?\u0007\n\u0002\u0002?A\u0003\u0002\u0002\u0002@9\u0003\u0002",
    "\u0002\u0002@;\u0003\u0002\u0002\u0002@<\u0003\u0002\u0002\u0002AJ\u0003",
    "\u0002\u0002\u0002BC\f\u0004\u0002\u0002CD\t\u0002\u0002\u0002DI\u0005",
    "\f\u0007\u0005EF\f\u0003\u0002\u0002FG\t\u0003\u0002\u0002GI\u0005\f",
    "\u0007\u0004HB\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002\u0002IL\u0003",
    "\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002",
    "K\r\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MO\u0007\u0004",
    "\u0002\u0002NM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002",
    "RT\u0007\u000f\u0002\u0002SN\u0003\u0002\u0002\u0002SR\u0003\u0002\u0002",
    "\u0002T\u000f\u0003\u0002\u0002\u0002\f\u0013\u001c\u001f$.@HJPS"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "':'", "'('", "')'", 
                     "'{'", "'}'", "'['", "']'", "','", "'=>'", "'='", "'=='", 
                     "'!='", "';'", "'+'", "'->'", "'++'", "'--'", "'+='", 
                     "'-='", "'/='", "'*='", "'%='", "'-'", "'*'", "'/'", 
                     "'%'", "'.'", "'??'", "'?.'", "'?'", "'&'", "'~'", 
                     "'_'", "'...'", "'and'", "'or'", "'!'", "'>'", "'<'", 
                     "'>='", "'<='", "'class'", "'return'", "'if'", "'else'", 
                     "'break'", "'continue'", "'goto'", "'for'", "'match'", 
                     "'enum'", null, "'$'" ];

var symbolicNames = [ null, "NUMBER", "ENDL", "MLCOMMENT", "COMMENT", "WS", 
                      "COLON", "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", 
                      "RSQUARE", "COMMA", "ARROW", "OPASSIGN", "OPEQ", "OPUNEQ", 
                      "SEMIC", "OPPLUS", "OPMOVE", "OPINC", "OPDEC", "OPAPLUS", 
                      "OPAMINUS", "OPADIV", "OPAMULT", "OPAMOD", "OPMINUS", 
                      "OPMULT", "OPDIV", "OPMOD", "OPNAV", "OPCOAL", "OPSAFENAV", 
                      "OPQUEST", "OPREF", "OPRANGE", "OPSKIP", "OPELIPSE", 
                      "AND", "OR", "NOT", "GT", "LT", "GTE", "LTE", "CLASS", 
                      "RETURN", "IF", "ELSE", "BREAK", "CONTINUE", "GOTO", 
                      "FOR", "MATCH", "ENUM", "STRING", "MACRO", "ID" ];

var ruleNames =  [ "program", "statement", "lvalue", "declaration", "varDef", 
                   "expr", "delim" ];

function LuxParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LuxParser.prototype = Object.create(antlr4.Parser.prototype);
LuxParser.prototype.constructor = LuxParser;

Object.defineProperty(LuxParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LuxParser.EOF = antlr4.Token.EOF;
LuxParser.NUMBER = 1;
LuxParser.ENDL = 2;
LuxParser.MLCOMMENT = 3;
LuxParser.COMMENT = 4;
LuxParser.WS = 5;
LuxParser.COLON = 6;
LuxParser.LPAREN = 7;
LuxParser.RPAREN = 8;
LuxParser.LCURL = 9;
LuxParser.RCURL = 10;
LuxParser.LSQUARE = 11;
LuxParser.RSQUARE = 12;
LuxParser.COMMA = 13;
LuxParser.ARROW = 14;
LuxParser.OPASSIGN = 15;
LuxParser.OPEQ = 16;
LuxParser.OPUNEQ = 17;
LuxParser.SEMIC = 18;
LuxParser.OPPLUS = 19;
LuxParser.OPMOVE = 20;
LuxParser.OPINC = 21;
LuxParser.OPDEC = 22;
LuxParser.OPAPLUS = 23;
LuxParser.OPAMINUS = 24;
LuxParser.OPADIV = 25;
LuxParser.OPAMULT = 26;
LuxParser.OPAMOD = 27;
LuxParser.OPMINUS = 28;
LuxParser.OPMULT = 29;
LuxParser.OPDIV = 30;
LuxParser.OPMOD = 31;
LuxParser.OPNAV = 32;
LuxParser.OPCOAL = 33;
LuxParser.OPSAFENAV = 34;
LuxParser.OPQUEST = 35;
LuxParser.OPREF = 36;
LuxParser.OPRANGE = 37;
LuxParser.OPSKIP = 38;
LuxParser.OPELIPSE = 39;
LuxParser.AND = 40;
LuxParser.OR = 41;
LuxParser.NOT = 42;
LuxParser.GT = 43;
LuxParser.LT = 44;
LuxParser.GTE = 45;
LuxParser.LTE = 46;
LuxParser.CLASS = 47;
LuxParser.RETURN = 48;
LuxParser.IF = 49;
LuxParser.ELSE = 50;
LuxParser.BREAK = 51;
LuxParser.CONTINUE = 52;
LuxParser.GOTO = 53;
LuxParser.FOR = 54;
LuxParser.MATCH = 55;
LuxParser.ENUM = 56;
LuxParser.STRING = 57;
LuxParser.MACRO = 58;
LuxParser.ID = 59;

LuxParser.RULE_program = 0;
LuxParser.RULE_statement = 1;
LuxParser.RULE_lvalue = 2;
LuxParser.RULE_declaration = 3;
LuxParser.RULE_varDef = 4;
LuxParser.RULE_expr = 5;
LuxParser.RULE_delim = 6;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(LuxParser.EOF, 0);
};

ProgramContext.prototype.ENDL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuxParser.ENDL);
    } else {
        return this.getToken(LuxParser.ENDL, i);
    }
};


ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.delim = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DelimContext);
    } else {
        return this.getTypedRuleContext(DelimContext,i);
    }
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuxParser.ProgramContext = ProgramContext;

LuxParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LuxParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 14;
                this.match(LuxParser.ENDL); 
            }
            this.state = 19;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuxParser.ID) {
            this.state = 20;
            this.statement();
            this.state = 26;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 21;
                    this.delim();
                    this.state = 22;
                    this.statement(); 
                }
                this.state = 28;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

        }

        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuxParser.ENDL) {
            this.state = 31;
            this.match(LuxParser.ENDL);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 37;
        this.match(LuxParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AssignStmtContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignStmtContext.prototype = Object.create(StatementContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

LuxParser.AssignStmtContext = AssignStmtContext;

AssignStmtContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

AssignStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecStmtContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecStmtContext.prototype = Object.create(StatementContext.prototype);
DecStmtContext.prototype.constructor = DecStmtContext;

LuxParser.DecStmtContext = DecStmtContext;

DecStmtContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};
DecStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitDecStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuxParser.StatementContext = StatementContext;

LuxParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LuxParser.RULE_statement);
    try {
        this.state = 44;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DecStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 39;
            this.declaration();
            break;

        case 2:
            localctx = new AssignStmtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 40;
            this.lvalue();
            this.state = 41;
            this.match(LuxParser.OPASSIGN);
            this.state = 42;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_lvalue;
    return this;
}

LvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvalueContext.prototype.constructor = LvalueContext;


 
LvalueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LvalueIDContext(parser, ctx) {
	LvalueContext.call(this, parser);
    LvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LvalueIDContext.prototype = Object.create(LvalueContext.prototype);
LvalueIDContext.prototype.constructor = LvalueIDContext;

LuxParser.LvalueIDContext = LvalueIDContext;

LvalueIDContext.prototype.ID = function() {
    return this.getToken(LuxParser.ID, 0);
};
LvalueIDContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitLvalueID(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuxParser.LvalueContext = LvalueContext;

LuxParser.prototype.lvalue = function() {

    var localctx = new LvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LuxParser.RULE_lvalue);
    try {
        localctx = new LvalueIDContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(LuxParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;


 
DeclarationContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VarDecContext(parser, ctx) {
	DeclarationContext.call(this, parser);
    DeclarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarDecContext.prototype = Object.create(DeclarationContext.prototype);
VarDecContext.prototype.constructor = VarDecContext;

LuxParser.VarDecContext = VarDecContext;

VarDecContext.prototype.varDef = function() {
    return this.getTypedRuleContext(VarDefContext,0);
};
VarDecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitVarDec(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuxParser.DeclarationContext = DeclarationContext;

LuxParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LuxParser.RULE_declaration);
    try {
        localctx = new VarDecContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.varDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_varDef;
    return this;
}

VarDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDefContext.prototype.constructor = VarDefContext;


 
VarDefContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VarDefAssignImplicitContext(parser, ctx) {
	VarDefContext.call(this, parser);
    this.id = null; // Token;
    VarDefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarDefAssignImplicitContext.prototype = Object.create(VarDefContext.prototype);
VarDefAssignImplicitContext.prototype.constructor = VarDefAssignImplicitContext;

LuxParser.VarDefAssignImplicitContext = VarDefAssignImplicitContext;

VarDefAssignImplicitContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

VarDefAssignImplicitContext.prototype.ID = function() {
    return this.getToken(LuxParser.ID, 0);
};
VarDefAssignImplicitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitVarDefAssignImplicit(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuxParser.VarDefContext = VarDefContext;

LuxParser.prototype.varDef = function() {

    var localctx = new VarDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LuxParser.RULE_varDef);
    try {
        localctx = new VarDefAssignImplicitContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        localctx.id = this.match(LuxParser.ID);
        this.state = 51;
        this.match(LuxParser.COLON);
        this.state = 52;
        this.match(LuxParser.OPASSIGN);
        this.state = 53;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function InfixExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InfixExprContext.prototype = Object.create(ExprContext.prototype);
InfixExprContext.prototype.constructor = InfixExprContext;

LuxParser.InfixExprContext = InfixExprContext;

InfixExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
InfixExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitInfixExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BracketExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BracketExprContext.prototype = Object.create(ExprContext.prototype);
BracketExprContext.prototype.constructor = BracketExprContext;

LuxParser.BracketExprContext = BracketExprContext;

BracketExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
BracketExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitBracketExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberEContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.value = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberEContext.prototype = Object.create(ExprContext.prototype);
NumberEContext.prototype.constructor = NumberEContext;

LuxParser.NumberEContext = NumberEContext;

NumberEContext.prototype.NUMBER = function() {
    return this.getToken(LuxParser.NUMBER, 0);
};
NumberEContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitNumberE(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.id = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExprContext.prototype = Object.create(ExprContext.prototype);
IdentifierExprContext.prototype.constructor = IdentifierExprContext;

LuxParser.IdentifierExprContext = IdentifierExprContext;

IdentifierExprContext.prototype.ID = function() {
    return this.getToken(LuxParser.ID, 0);
};
IdentifierExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitIdentifierExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuxParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, LuxParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuxParser.NUMBER:
            localctx = new NumberEContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 56;
            localctx.value = this.match(LuxParser.NUMBER);
            break;
        case LuxParser.ID:
            localctx = new IdentifierExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 57;
            localctx.id = this.match(LuxParser.ID);
            break;
        case LuxParser.LPAREN:
            localctx = new BracketExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 58;
            this.match(LuxParser.LPAREN);
            this.state = 59;
            this.expr(0);
            this.state = 60;
            this.match(LuxParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 72;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 70;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, LuxParser.RULE_expr);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 65;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===LuxParser.OPMULT || _la===LuxParser.OPDIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 66;
                    localctx.right = this.expr(3);
                    break;

                case 2:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, LuxParser.RULE_expr);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 68;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===LuxParser.OPPLUS || _la===LuxParser.OPMINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 69;
                    localctx.right = this.expr(2);
                    break;

                } 
            }
            this.state = 74;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function DelimContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuxParser.RULE_delim;
    return this;
}

DelimContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DelimContext.prototype.constructor = DelimContext;

DelimContext.prototype.ENDL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuxParser.ENDL);
    } else {
        return this.getToken(LuxParser.ENDL, i);
    }
};


DelimContext.prototype.COMMA = function() {
    return this.getToken(LuxParser.COMMA, 0);
};

DelimContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuxParserVisitor ) {
        return visitor.visitDelim(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuxParser.DelimContext = DelimContext;

LuxParser.prototype.delim = function() {

    var localctx = new DelimContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LuxParser.RULE_delim);
    var _la = 0; // Token type
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuxParser.ENDL:
            this.enterOuterAlt(localctx, 1);
            this.state = 76; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 75;
                this.match(LuxParser.ENDL);
                this.state = 78; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===LuxParser.ENDL);
            break;
        case LuxParser.COMMA:
            this.enterOuterAlt(localctx, 2);
            this.state = 80;
            this.match(LuxParser.COMMA);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


LuxParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LuxParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LuxParser = LuxParser;
