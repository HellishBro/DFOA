parser grammar DFOAExpressions;
options {
    tokenVocab=DFOALexer;
}

expr: or;

or: and (OR and)*;
and: not (AND not)*;
not: NOT not | comparison;
comparison: addSub (compOp addSub)*;
compOp: EQEQ | NEQ | LE | GE | LANGLE | RANGLE;
addSub: multDiv (addSubOp multDiv)*;
addSubOp: PLUS | MINUS;
multDiv: unop (multDivOp unop)*;
multDivOp: STAR | SLASH;
unop: MINUS unop | trail;

funcInvoke: LPAREN (expr (COMMA expr)* COMMA?)? RPAREN;

trail: trail LBRACK expr RBRACK #subscript
    | trail DOT INTEGER #tupleAccess
    | trail DOT ident funcInvoke? #attribute
    | atom funcInvoke? #atomTrail
    ;

atom: list | tuple | literal | LPAREN expr RPAREN;
literal: INTEGER | FLOAT | STRING | TEXT;

list: LBRACK (expr (COMMA expr)* COMMA?)? RBRACK;
tuple: LPAREN (expr COMMA | expr (COMMA expr)+) RPAREN;

ident: SIMPLE_IDENT | COMPLEX_IDENT;