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
    | 'if' expr scope                     # ifStmt
    | 'break'                             # breakStmt
    | forStatement scope                  # forStmt
    ;

forStatement
    : 'for'                               # forInfinityStmt
    | 'for' lvalue '=' expr               # forAssignStmt
    | 'for' ID ':' vtype? '=' expr        # forVarDefStmt
    | 'for' expr                          # forExprStmt
    ;

fnCallStatement
    : expr '(' fnCallParams? ')'          # fnCallStatementImplicit
    ;

lvalue
    : ID                                  # lvalueID
    | left=lvalue '.' right=ID            # lvalueMember
    | '*' lvalue                          # lvaluePtr
    ;

taggedDeclaration
    : tags? ENDL* declaration
    ;

tags
    : tag+
    ;

tag
    : '@' expr
    ;

declaration
    : varDef                              # varDec
    | typeDef                             # typeDec
    ;

typeDef
    : 'function' ID tmplDefParamList? fnDef        # funcDec
    | 'enum' ID tmplDefParamList? enumScope        # enumDec
    | 'struct' ID tmplDefParamList? structBody     # structDec
    | 'alias' ID tmplDefParamList? ':' vtype       # aliasDec
    | 'methods' ID tmplMethods? ('for' plainType)? methodsContent  # methodsDec
    | 'trait' ID tmplDefParamList? traitBody       # traitDec
    ;

traitBody
    : '{' ENDL* (traitFnDec (delim traitFnDec)*)? ENDL* '}'
    ;

traitFnDec
    : ID fnType fnReturnType
    ;

methodsContent
    : '{' ENDL* (methodsFnDef (delim methodsFnDef)*)? ENDL* '}'
    ;

methodsFnDef
    : ID tmplDefParamList? fnDef
    ;

fnDef
    : fnType fnReturnType? scope?
    ;

scope
    : '{' ENDL* (statement (delim statement)*)? ENDL* '}'
    ;


structBody
    : '{' ENDL* (structField (delim structField)*)? ENDL* '}'
    ;

structField
    : tags? varDef                   # structFieldDec
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

tmplMethods
    : '<' ENDL* ID (delim ID)* ENDL* '>'
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
    ;

varDef
    : ID ':' '=' expr
    | ID ':' vtype
    | ID ':' vtype '=' expr
    ;

expr : left=expr '.' right=ID              # memberExpr
    | value=NUMBER                         # numberE
    | id=ID                                # identifierExpr
    | str=STRING                           # strConstExpr
    | '&' expr                             # refExpr
    | '*' expr                             # derefExpr
    | '(' expr ')'                         # bracketExpr
    | expr '(' fnCallParams? ')'           # implFnCallExpr
    | left=expr op=('*' | '/') right=expr  # infixExpr
    | left=expr op=('+' | '-') right=expr  # infixExpr
    | left=expr op=('=' | '!=') right=expr # infixExpr
    | '[' ENDL* (objectLiteralEntry (delim objectLiteralEntry)* )? ENDL* ']' # objectLiteralExpr
    | '<' plainType constructorParam* '/' '>'                      # constructorSimpleExpr
    ;

constructorParam
    : ID '=' expr
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
