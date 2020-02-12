lexer grammar LuxLexer;

NUMBER
    : '-'? DIGIT (' '? DIGIT)*
    | '-'? DIGIT (' '? DIGIT)* '.' DIGIT (' '? DIGIT)*
    ;

fragment
ALPHANUM : [a-zA-Z0-9];

fragment
ALPHA: [a-zA-Z];

fragment
DIGIT: [0-9];

ENDL: [\n];

MLCOMMENT: '/*'.*?'*/'->skip;
SLCOMMENT: ('//'(~'\n')*)->skip;
//MLCOMMENT: '##'.*?'##'->skip;
//COMMENT: ('#' |  '#'(~[#\n]) | '#'(~[#\n])(~'\n')*)-> skip;
WS: [ \t\r]+ -> skip;

OPNS: '#';
OPAT: '@';
COLON: ':';
LPAREN: '(';
RPAREN: ')';
LCURL: '{';
RCURL: '}';
LSQUARE: '[';
RSQUARE: ']';
COMMA: ',';
ARROW: '=>';
OPEQ: '=';
OPUNEQ: '!=';
SEMIC: ';';
OPPLUS: '+';
OPMOVE: '->';
OPINC: '++';
OPDEC: '--';
OPAPLUS: '+=';
OPAMINUS: '-=';
OPADIV: '/=';
OPAMULT: '*=';
OPAMOD: '%=';
OPMINUS: '-';

OPMULT: '*';
OPDIV: '/';
OPMOD: '%';
OPNAV: '.';
OPCOAL: '??';
OPSAFENAV: '?.';
OPQUEST: '?';
OPREF: '&';
OPRANGE: '~';
OPSKIP: '_';
OPELIPSE: '...';

AND: 'and';
OR: 'or';
NOT: '!';
GT: '>';
LT: '<';
GTE: '>=';
LTE: '<=';

CLASS: 'class';
RETURN: 'return';
IF: 'if';
ELSE: 'else';
BREAK: 'break';
CONTINUE: 'continue';
GOTO: 'goto';
FOR: 'for';
MATCH: 'match';
ENUM: 'enum';
INHERIT: 'inherit';
ALIAS: 'alias';

STRING
   : '"' (ESC | ~ ["\\])* '"'
   | '`' (ESC | ~ [`\\])* '`'
   ;
fragment ESC
   : '\\' ([`"\\/bfnrt] | UNICODE | SINGLECHARHEX)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment SINGLECHARHEX
   : 'x' HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;

MACRO: '$';

ID
    : ALPHA
    | ALPHANUM [a-zA-Z0-9-]* ALPHANUM
    ;
