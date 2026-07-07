
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./DFOAParser.js";
import { TlStatementContext } from "./DFOAParser.js";
import { FuncContext } from "./DFOAParser.js";
import { SignatureContext } from "./DFOAParser.js";
import { GenericDefContext } from "./DFOAParser.js";
import { ParamslistContext } from "./DFOAParser.js";
import { ReturnSigContext } from "./DFOAParser.js";
import { ParamContext } from "./DFOAParser.js";
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
import { TypeAliasContext } from "./DFOAParser.js";
import { AttributeContext } from "./DFOAParser.js";
import { FuncCallTrailContext } from "./DFOAParser.js";
import { AtomContext } from "./DFOAParser.js";
import { NewExprContext } from "./DFOAParser.js";
import { LiteralContext } from "./DFOAParser.js";
import { ListContext } from "./DFOAParser.js";
import { TupleContext } from "./DFOAParser.js";
import { TupleTypeContext } from "./DFOAParser.js";
import { GroupingTypeContext } from "./DFOAParser.js";
import { BasicTypeContext } from "./DFOAParser.js";
import { GenericsContext } from "./DFOAParser.js";
import { TypeParamContext } from "./DFOAParser.js";
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
     * Enter a parse tree produced by `DFOAParser.signature`.
     * @param ctx the parse tree
     */
    enterSignature?: (ctx: SignatureContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.signature`.
     * @param ctx the parse tree
     */
    exitSignature?: (ctx: SignatureContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.genericDef`.
     * @param ctx the parse tree
     */
    enterGenericDef?: (ctx: GenericDefContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.genericDef`.
     * @param ctx the parse tree
     */
    exitGenericDef?: (ctx: GenericDefContext) => void;
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
     * Enter a parse tree produced by `DFOAParser.returnSig`.
     * @param ctx the parse tree
     */
    enterReturnSig?: (ctx: ReturnSigContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.returnSig`.
     * @param ctx the parse tree
     */
    exitReturnSig?: (ctx: ReturnSigContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
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
     * Enter a parse tree produced by the `typeAlias`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterTypeAlias?: (ctx: TypeAliasContext) => void;
    /**
     * Exit a parse tree produced by the `typeAlias`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitTypeAlias?: (ctx: TypeAliasContext) => void;
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
     * Enter a parse tree produced by the `funcCallTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    enterFuncCallTrail?: (ctx: FuncCallTrailContext) => void;
    /**
     * Exit a parse tree produced by the `funcCallTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     */
    exitFuncCallTrail?: (ctx: FuncCallTrailContext) => void;
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
     * Enter a parse tree produced by `DFOAParser.newExpr`.
     * @param ctx the parse tree
     */
    enterNewExpr?: (ctx: NewExprContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.newExpr`.
     * @param ctx the parse tree
     */
    exitNewExpr?: (ctx: NewExprContext) => void;
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
     * Enter a parse tree produced by the `tupleType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    enterTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Exit a parse tree produced by the `tupleType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    exitTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Enter a parse tree produced by the `groupingType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    enterGroupingType?: (ctx: GroupingTypeContext) => void;
    /**
     * Exit a parse tree produced by the `groupingType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    exitGroupingType?: (ctx: GroupingTypeContext) => void;
    /**
     * Enter a parse tree produced by the `basicType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    enterBasicType?: (ctx: BasicTypeContext) => void;
    /**
     * Exit a parse tree produced by the `basicType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     */
    exitBasicType?: (ctx: BasicTypeContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.generics`.
     * @param ctx the parse tree
     */
    enterGenerics?: (ctx: GenericsContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.generics`.
     * @param ctx the parse tree
     */
    exitGenerics?: (ctx: GenericsContext) => void;
    /**
     * Enter a parse tree produced by `DFOAParser.typeParam`.
     * @param ctx the parse tree
     */
    enterTypeParam?: (ctx: TypeParamContext) => void;
    /**
     * Exit a parse tree produced by `DFOAParser.typeParam`.
     * @param ctx the parse tree
     */
    exitTypeParam?: (ctx: TypeParamContext) => void;
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

