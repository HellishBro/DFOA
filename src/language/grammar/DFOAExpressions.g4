parser grammar DFOAExpressions;
options {
    tokenVocab=DFOALexer;
}

expr: literal;

literal: NUMBER | STRING | TEXT;