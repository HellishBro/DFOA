grammar DFOA;
import DFOAStatements;
options {
    tokenVocab=DFOALexer;
}

start: tlStatement* EOF;
