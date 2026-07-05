parser grammar DFOATopLevels;
import DFOAStatements;
options {
    tokenVocab=DFOALexer;
}

tlStatement: func;

func: FUNC ident paramslist block;
paramslist: LPAREN RPAREN;