parser grammar DFOAExpressions;
import DFOATypes;
options {
    tokenVocab=DFOALexer;
}

expr: or;

or: and (OR and)*;
and: not (AND not)*;
not: NOT not | comparison;
comparison: addSub (compOp addSub)?;
compOp: EQEQ | NEQ | LE | GE | LANGLE | RANGLE;
addSub: multDiv (addSubOp multDiv)*;
addSubOp: PLUS | MINUS;
multDiv: unop (multDivOp unop)*;
multDivOp: STAR | SLASH;
unop: MINUS unop | trail;

funcInvoke: LPAREN (expr (COMMA expr)* COMMA?)? RPAREN;

trail: trail LBRACK expr RBRACK #subscript
    | trail DOT INTEGER #tupleAccess
    | trail AS type #typeAlias
    | trail DOT ident #attribute
    | trail generics? funcInvoke #funcCallTrail
    | atom #atomTrail
    ;

atom: list | tuple | literal | variable | newExpr | LPAREN expr RPAREN;

newExpr: NEW expr generics? funcInvoke;

variable: lifetime? ident;

literal: INTEGER | FLOAT | STRING+ | TEXT+ | TRUE | FALSE;
list: LBRACK (expr (COMMA expr)* COMMA?)? RBRACK;
tuple: LPAREN (expr COMMA | expr (COMMA expr)+ COMMA?)? RPAREN;

lifetime: GLOBAL | PERSISTENT | LOCAL | LINE;