parser grammar DFOAStatements;
import DFOAExpressions;
options {
    tokenVocab=DFOALexer;
}

statement: print
    | exprStmt
    | if
    | for
    | while
    | let
    | assign
    | return
    | break
    | continue
    | semi;

if: IF expr block (ELSE block)?;

for: FOR varDeclList IN expr block;
while: WHILE expr block;
break: BREAK SEMI;
continue: CONTINUE SEMI;

let: varDeclList (EQUALS expr)? SEMI;
assign: varDecl EQUALS expr SEMI;

return: RETURN expr? SEMI;

print: PRINT expr SEMI;
exprStmt: expr SEMI;
semi: SEMI;

block: LBRACE statement* RBRACE | statement;

varDeclList: LET varDecl (COMMA varDecl)* COMMA?;

varDecl: variable (COLON type)?;