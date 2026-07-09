lexer grammar DFOALexer;
channels { Comment, DocComment }

FUNC: 'func';
PRINT: 'print';
NOT: 'not';
AND: 'and';
OR: 'or';
AS: 'as';
NEW: 'new';
IF: 'if';
ELSE: 'else';
FOR: 'for';
IN: 'in';
WHILE: 'while';
LET: 'let';
RETURN: 'return';
BREAK: 'break';
CONTINUE: 'continue';
TRUE: 'true';
FALSE: 'false';

GLOBAL: 'global';
PERSISTENT: 'saved';
LOCAL: 'local';
LINE: 'line';

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
COLON: ':';
EQUALS: '=';

fragment HEX_DIGIT: [0-9a-fA-F];
fragment UNICODE_NAME_ESC: '{' [A-Z_]+ '}';
fragment UNICODE_ESC_SEQ: 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    | 'N' '{' .+? '}'
    | 'x' HEX_DIGIT HEX_DIGIT;
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

WS: [ \t\r\n] -> skip; // i really can't care less about whitespace
COMMENT: '//' ~[\r\n]* -> channel(Comment); // might be useful for linting
DOC_COMMENT: '/**' (. | DOC_COMMENT)*? '*/' -> channel(DocComment); 
MULT_LINE_COMMENT: '/*' (. | MULT_LINE_COMMENT)*? '*/' -> channel(Comment);