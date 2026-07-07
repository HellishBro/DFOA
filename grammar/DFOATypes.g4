parser grammar DFOATypes;
options {
    tokenVocab=DFOALexer;
}

type: LPAREN (type COMMA | type (COMMA type)+ COMMA?)? RPAREN #tupleType
    | LPAREN type RPAREN #groupingType
    | ident generics? #basicType
    ;

generics: LANGLE (type (COMMA type)* COMMA?) RANGLE;

typeParam: ident;

ident: SIMPLE_IDENT | COMPLEX_IDENT;
