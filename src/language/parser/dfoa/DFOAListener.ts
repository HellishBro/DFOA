
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
     * Enter a parse tree produced by `DFOAParser.printStatement`.
     * @param ctx the parse tree
     */
    enterPrintStatement?: (ctx: PrintStatementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.printStatement`.
     * @param ctx the parse tree
     */
    exitPrintStatement?: (ctx: PrintStatementContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.exprStatement`.
     * @param ctx the parse tree
     */
    enterExprStatement?: (ctx: ExprStatementContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.exprStatement`.
     * @param ctx the parse tree
     */
    exitExprStatement?: (ctx: ExprStatementContext) => void;
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
     * Enter a parse tree produced by `DFOAParser.or`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.or`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.and`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.and`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.not`.
     * @param ctx the parse tree
     */
    enterNot?: (ctx: NotContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.not`.
     * @param ctx the parse tree
     */
    exitNot?: (ctx: NotContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.comparison`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.comparison`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.compOp`.
     * @param ctx the parse tree
     */
    enterCompOp?: (ctx: CompOpContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.compOp`.
     * @param ctx the parse tree
     */
    exitCompOp?: (ctx: CompOpContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.addSub`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.addSub`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.addSubOp`.
     * @param ctx the parse tree
     */
    enterAddSubOp?: (ctx: AddSubOpContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.addSubOp`.
     * @param ctx the parse tree
     */
    exitAddSubOp?: (ctx: AddSubOpContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.multDiv`.
     * @param ctx the parse tree
     */
    enterMultDiv?: (ctx: MultDivContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.multDiv`.
     * @param ctx the parse tree
     */
    exitMultDiv?: (ctx: MultDivContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.multDivOp`.
     * @param ctx the parse tree
     */
    enterMultDivOp?: (ctx: MultDivOpContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.multDivOp`.
     * @param ctx the parse tree
     */
    exitMultDivOp?: (ctx: MultDivOpContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.unop`.
     * @param ctx the parse tree
     */
    enterUnop?: (ctx: UnopContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.unop`.
     * @param ctx the parse tree
     */
    exitUnop?: (ctx: UnopContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.funcInvoke`.
     * @param ctx the parse tree
     */
    enterFuncInvoke?: (ctx: FuncInvokeContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.funcInvoke`.
     * @param ctx the parse tree
     */
    exitFuncInvoke?: (ctx: FuncInvokeContext) => void;
    /**
     * Enter a parse tree produced by the `atomTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterAtomTrail?: (ctx: AtomTrailContext) => void;
    /**
     * Exit a parse tree produced by the `atomTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitAtomTrail?: (ctx: AtomTrailContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `tupleAccess`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterTupleAccess?: (ctx: TupleAccessContext) => void;
    /**
     * Exit a parse tree produced by the `tupleAccess`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitTupleAccess?: (ctx: TupleAccessContext) => void;
    /**
     * Enter a parse tree produced by the `attribute`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterAttribute?: (ctx: AttributeContext) => void;
    /**
     * Exit a parse tree produced by the `attribute`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitAttribute?: (ctx: AttributeContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.atom`.
     * @param ctx the parse tree
     */
    enterAtom?: (ctx: AtomContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.atom`.
     * @param ctx the parse tree
     */
    exitAtom?: (ctx: AtomContext) => void;
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
    /**
     * Enter a parse tree produced by `DFOAParser.list`.
     * @param ctx the parse tree
     */
    enterList?: (ctx: ListContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.list`.
     * @param ctx the parse tree
     */
    exitList?: (ctx: ListContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.tuple`.
     * @param ctx the parse tree
     */
    enterTuple?: (ctx: TupleContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.tuple`.
     * @param ctx the parse tree
     */
    exitTuple?: (ctx: TupleContext) => void;
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

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

