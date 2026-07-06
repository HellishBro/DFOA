
import { AbstractParseTreeVisitor } from "antlr4ng";


import { StartContext } from "./DFOAParser.js";
import { TlStatementContext } from "./DFOAParser.js";
import { FuncContext } from "./DFOAParser.js";
import { ParamslistContext } from "./DFOAParser.js";
import { StatementContext } from "./DFOAParser.js";
import { PrintStatementContext } from "./DFOAParser.js";
import { ExprStatementContext } from "./DFOAParser.js";
import { SemiContext } from "./DFOAParser.js";
import { BlockContext } from "./DFOAParser.js";
import { ExprContext } from "./DFOAParser.js";
import { OrContext } from "./DFOAParser.js";
import { AndContext } from "./DFOAParser.js";
import { NotContext } from "./DFOAParser.js";
import { ComparisonContext } from "./DFOAParser.js";
import { CompOpContext } from "./DFOAParser.js";
import { AddSubContext } from "./DFOAParser.js";
import { AddSubOpContext } from "./DFOAParser.js";
import { MultDivContext } from "./DFOAParser.js";
import { MultDivOpContext } from "./DFOAParser.js";
import { UnopContext } from "./DFOAParser.js";
import { FuncInvokeContext } from "./DFOAParser.js";
import { AtomTrailContext } from "./DFOAParser.js";
import { SubscriptContext } from "./DFOAParser.js";
import { TupleAccessContext } from "./DFOAParser.js";
import { AttributeContext } from "./DFOAParser.js";
import { AtomContext } from "./DFOAParser.js";
import { LiteralContext } from "./DFOAParser.js";
import { ListContext } from "./DFOAParser.js";
import { TupleContext } from "./DFOAParser.js";
import { IdentContext } from "./DFOAParser.js";


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
     * Visit a parse tree produced by `DFOAParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.printStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintStatement?: (ctx: PrintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.exprStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStatement?: (ctx: ExprStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSemi?: (ctx: SemiContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.or`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.and`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNot?: (ctx: NotContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.comparison`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.compOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompOp?: (ctx: CompOpContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.addSub`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSub?: (ctx: AddSubContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.addSubOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubOp?: (ctx: AddSubOpContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.multDiv`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultDiv?: (ctx: MultDivContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.multDivOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultDivOp?: (ctx: MultDivOpContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.unop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnop?: (ctx: UnopContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.funcInvoke`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncInvoke?: (ctx: FuncInvokeContext) => Result;
    /**
     * Visit a parse tree produced by the `atomTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomTrail?: (ctx: AtomTrailContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `tupleAccess`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleAccess?: (ctx: TupleAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `attribute`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute?: (ctx: AttributeContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList?: (ctx: ListContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.tuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTuple?: (ctx: TupleContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdent?: (ctx: IdentContext) => Result;
}

