
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DFOAParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class DFOAVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `DFOAParser.start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart?: (ctx: StartContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.tlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTlStatement?: (ctx: TlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.func`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc?: (ctx: FuncContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.paramslist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamslist?: (ctx: ParamslistContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.print_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrint_statement?: (ctx: Print_statementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.expr_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_statement?: (ctx: Expr_statementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSemi?: (ctx: SemiContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdent?: (ctx: IdentContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

