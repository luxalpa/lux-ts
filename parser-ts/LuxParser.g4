parser grammar LuxParser;

options { tokenVocab=LuxLexer; }

program
    :   (taggedDeclaration | ENDL)+ EOF
    ;

statement
    : taggedDeclaration                   # decStmt
    | lvalue '=' expr                     # assignStmt
    | 'return' expr?                      # returnStmt
    | fnCallStatement                     # fnCallStmt
    ;

fnCallStatement
    : expr '(' fnCallParams? ')'          # fnCallStatementImplicit
    ;

lvalue
    : ID                                  # lvalueID
    | left=lvalue '.' right=ID            # lvalueMember
    ;

taggedDeclaration
    : tags? declaration
    ;

tags
    : tag+
    ;

tag
    : '@' ID
    ;

declaration
    : varDef                              # varDec
    | typeDef                             # typeDec
    ;

typeDef
    : ID ':' fnDef                                 # funcDec
    | ID ':' 'enum' enumScope                      # enumDec
    | ID ':' 'class' tmplDefParamList? classScope  # classDec
    ;

fnDef
    : fnType fnReturnType? scope?
    ;

scope
    : '{' ENDL* (statement (delim statement)*)? ENDL* '}'
    ;

classScope
    : '{' ENDL* (classScopeDec (delim classScopeDec)*)? ENDL* '}'
    ;

classScopeDec
    : taggedDeclaration                   # classScopeDecNormal
    | 'inherit' plainType                 # classScopeInherit
    ;

fnType
    // this is missing the return type because it's optional for def
    // while being mandatory for type
    : '(' ENDL* (fnDefParam (delim fnDefParam)* )? ENDL* ')' ARROW
    ;

fnDefParam
    : ('%' | '->')? '...' ? varDef        # fnDefParamFull
    | ('%' | '->')? '...' ? ':' vtype     # fnDefParamOnlyType
    | '_'                                 # fnDefParamSkip
    ;

fnReturnType
    : vtype #fnReturnTypeSingle
    ;

fnCallParams
    : ENDL* fnCallParam (delim fnCallParam)* ENDL*
    ;

fnCallParam
    : '%'? expr
    | '_'
    ;

tmplDefParamList
    : '<' ENDL* tmplDefParam (delim tmplDefParam)* ENDL* '>'
    ;

tmplDefParam
    : varDef                              # tmplDefParamFull
    | ':' vtype                           # tmplDefParamOnlyType
    | '_'                                 # tmplDefParamSkip
    ;

vtype
    : '&' fnType fnReturnType             # typeFunctionPtr
    | '&' plainType                       # typeRef
    | plainType                           # typePlain
    ;

plainType
    : ID ('<' ENDL* tmplParam (delim tmplParam)* ENDL* '>')?   # normalType
    | plainType '.' plainType                                  # typeInType
    ;

tmplParam
    : vtype
    | expr
    ;

varDef
    : id=ID ':' '=' expr                  # varDefAssignImplicit
    | ID ':' vtype                        # varDefOnly
    | ID ':' vtype '=' expr               # varDefAssignExplicit
    ;

expr : left=expr '.' right=ID             # memberExpr
    | value=NUMBER                        # numberE
    | id=ID                               # identifierExpr
    | '(' expr ')'                        # bracketExpr
    | left=expr op=('*' | '/') right=expr # infixExpr
    | left=expr op=('+' | '-') right=expr # infixExpr
    | expr '(' fnCallParams? ')'          # implFnCallExpr
    | '[' ENDL* (objectLiteralEntry (delim objectLiteralEntry)* )? ENDL* ']' # objectLiteralExpr
    ;

enumScope
    : '{' ENDL* (enumEntry (delim enumEntry)*)? ENDL* '}'
    ;

enumEntry
    : ID '(' ENDL* (fnDefParam (delim fnDefParam)* )? ENDL* ')'  # enumEntryTagged
    | ID                                                         # enumEntryPlain
    ;

objectLiteralEntry
    : ID ':' expr
    ;

delim
     : ENDL+
     | COMMA
     ;
