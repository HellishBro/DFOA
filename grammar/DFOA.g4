grammar DFOA;
import DFOATopLevels;
options {
    tokenVocab=DFOALexer;
}

start: tlStatement* EOF;