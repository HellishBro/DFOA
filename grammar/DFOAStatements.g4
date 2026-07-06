parser grammar DFOAStatements;
import DFOAExpressions;
options {
    tokenVocab=DFOALexer;
}

statement: printStatement | exprStatement | semi;

printStatement: PRINT expr SEMI;
exprStatement: expr SEMI;
semi: SEMI;

block: LBRACE statement* RBRACE | statement;