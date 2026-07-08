parser grammar DFOATopLevels;
import DFOAStatements;
options {
    tokenVocab=DFOALexer;
}

tlStatement: func;

func: FUNC ident signature block;

signature: genericDef? paramslist returnSig?;

genericDef: LANGLE (typeParam (COMMA typeParam)* COMMA?) RANGLE;
paramslist: LPAREN (param (COMMA param)* COMMA?)? RPAREN;
returnSig: COLON type;

param: ident (COLON type)?;