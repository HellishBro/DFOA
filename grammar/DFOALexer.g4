lexer grammar DFOALexer;

FUNC: 'func';
PRINT: 'print';
NOT: 'not';
AND: 'and';
OR: 'or';

EQEQ: '==';
LE: '<=';
GE: '>=';
NEQ: '!=';

LANGLE: '<';
RANGLE: '>';
LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';
PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
DOT: '.';
COMMA: ',';

fragment UNICODE_ESC_SEQ: 'u' [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F];
fragment STRLIKE_ESC_SEQ: '\\' (UNICODE_ESC_SEQ | .);
fragment COMPLEX_IDENT_PART: ~[\\\r\n`];
SIMPLE_IDENT: [a-zA-Z_$][a-zA-Z0-9_]*;
COMPLEX_IDENT: '`' (COMPLEX_IDENT_PART | STRLIKE_ESC_SEQ)+ '`';

fragment STRING_PART: ~[\\\r\n'];
STRING: ['] (STRING_PART | STRLIKE_ESC_SEQ)* ['];

fragment TEXT_PART: ~[\\\r\n"];
TEXT: '"' (TEXT_PART | STRLIKE_ESC_SEQ)* '"';

fragment INT_PART: [0-9]+;
INTEGER: INT_PART;
FLOAT: INT_PART '.' INT_PART?;

WS: [ \t\r\n] -> channel(HIDDEN);
COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
MULT_LINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);