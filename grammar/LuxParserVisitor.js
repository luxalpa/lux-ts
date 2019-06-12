// Generated from C:/projects/lux-ts/grammar\LuxParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LuxParser.

function LuxParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LuxParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LuxParserVisitor.prototype.constructor = LuxParserVisitor;

// Visit a parse tree produced by LuxParser#program.
LuxParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#decStmt.
LuxParserVisitor.prototype.visitDecStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#assignStmt.
LuxParserVisitor.prototype.visitAssignStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#lvalueID.
LuxParserVisitor.prototype.visitLvalueID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#varDec.
LuxParserVisitor.prototype.visitVarDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#varDefAssignImplicit.
LuxParserVisitor.prototype.visitVarDefAssignImplicit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#infixExpr.
LuxParserVisitor.prototype.visitInfixExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#bracketExpr.
LuxParserVisitor.prototype.visitBracketExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#numberE.
LuxParserVisitor.prototype.visitNumberE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#identifierExpr.
LuxParserVisitor.prototype.visitIdentifierExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuxParser#delim.
LuxParserVisitor.prototype.visitDelim = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LuxParserVisitor = LuxParserVisitor;