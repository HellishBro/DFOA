
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./DFOAParser.js";
import { TlStatementContext } from "./DFOAParser.js";
import { FuncContext } from "./DFOAParser.js";
import { ParamslistContext } from "./DFOAParser.js";
import { BlockContext } from "./DFOAParser.js";
import { StatementContext } from "./DFOAParser.js";
import { Print_statementContext } from "./DFOAParser.js";
import { Expr_statementContext } from "./DFOAParser.js";
import { SemiContext } from "./DFOAParser.js";
import { IdentContext } from "./DFOAParser.js";
import { ExprContext } from "./DFOAParser.js";
import { LiteralContext } from "./DFOAParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DFOAParser`.
 */
export class DFOAListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `DFOAParser.start`.
     * @param ctx the parse tree
     */
    enterStart?: (ctx: StartContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.start`.
     * @param ctx the parse tree
     */
    exitStart?: (ctx: StartContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.tlStatement`.
     * @param ctx the parse tree
     */
    enterTlStatement?: (ctx: TlStatementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.tlStatement`.
     * @param ctx the parse tree
     */
    exitTlStatement?: (ctx: TlStatementContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.func`.
     * @param ctx the parse tree
     */
    enterFunc?: (ctx: FuncContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.func`.
     * @param ctx the parse tree
     */
    exitFunc?: (ctx: FuncContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.paramslist`.
     * @param ctx the parse tree
     */
    enterParamslist?: (ctx: ParamslistContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.paramslist`.
     * @param ctx the parse tree
     */
    exitParamslist?: (ctx: ParamslistContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.print_statement`.
     * @param ctx the parse tree
     */
    enterPrint_statement?: (ctx: Print_statementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.print_statement`.
     * @param ctx the parse tree
     */
    exitPrint_statement?: (ctx: Print_statementContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.expr_statement`.
     * @param ctx the parse tree
     */
    enterExpr_statement?: (ctx: Expr_statementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.expr_statement`.
     * @param ctx the parse tree
     */
    exitExpr_statement?: (ctx: Expr_statementContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.semi`.
     * @param ctx the parse tree
     */
    enterSemi?: (ctx: SemiContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.semi`.
     * @param ctx the parse tree
     */
    exitSemi?: (ctx: SemiContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.ident`.
     * @param ctx the parse tree
     */
    enterIdent?: (ctx: IdentContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.ident`.
     * @param ctx the parse tree
     */
    exitIdent?: (ctx: IdentContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

