lexer grammar DFOALexer;

FUNC: 'func';
PRINT: 'print';

LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';

fragment STRLIKE_ESC_SEQ: '\\' .;
fragment COMPLEX_IDENT_PART: ~[\\\r\n`];
SIMPLE_IDENT: [a-zA-Z_$][a-zA-Z0-9_]*;
COMPLEX_IDENT: '`' (COMPLEX_IDENT_PART | STRLIKE_ESC_SEQ)+ '`';

fragment STRING_PART: ~[\\\r\n'];
STRING: ['] (STRING_PART | STRLIKE_ESC_SEQ)* ['];

fragment TEXT_PART: ~[\\\r\n"];
TEXT: '"' (TEXT_PART | STRLIKE_ESC_SEQ)* '"';

fragment INTEGER: [0-9] ('_'? [0-9])*;
fragment FLOAT: INTEGER? '.' INTEGER | INTEGER '.';
NUMBER: INTEGER | FLOAT;

WS: [ \t\r\n] -> channel(HIDDEN);
COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
MULT_LINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);