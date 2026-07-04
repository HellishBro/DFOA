parser grammar DFOAStatements;
import DFOAExpressions;
options {
    tokenVocab=DFOALexer;
}

tlStatement: func;

func: FUNC ident paramslist block;
paramslist: LPAREN RPAREN;

block: LBRACE statement* RBRACE | statement;

statement: print_statement | expr_statement | semi;

print_statement: PRINT expr SEMI;
expr_statement: expr SEMI;
semi: SEMI;

ident: SIMPLE_IDENT | COMPLEX_IDENT;