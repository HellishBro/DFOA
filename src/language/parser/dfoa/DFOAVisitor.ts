
import { AbstractParseTreeVisitor } from "antlr4ng";


import { StartContext } from "./DFOAParser.js";
import { TlStatementContext } from "./DFOAParser.js";
import { FuncContext } from "./DFOAParser.js";
import { SignatureContext } from "./DFOAParser.js";
import { GenericDefContext } from "./DFOAParser.js";
import { ParamslistContext } from "./DFOAParser.js";
import { ReturnSigContext } from "./DFOAParser.js";
import { ParamContext } from "./DFOAParser.js";
import { StatementContext } from "./DFOAParser.js";
import { IfContext } from "./DFOAParser.js";
import { ForContext } from "./DFOAParser.js";
import { WhileContext } from "./DFOAParser.js";
import { BreakContext } from "./DFOAParser.js";
import { ContinueContext } from "./DFOAParser.js";
import { LetContext } from "./DFOAParser.js";
import { AssignContext } from "./DFOAParser.js";
import { ReturnContext } from "./DFOAParser.js";
import { PrintContext } from "./DFOAParser.js";
import { ExprStmtContext } from "./DFOAParser.js";
import { SemiContext } from "./DFOAParser.js";
import { BlockContext } from "./DFOAParser.js";
import { VarDeclListContext } from "./DFOAParser.js";
import { VarDeclContext } from "./DFOAParser.js";
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
import { VariableContext } from "./DFOAParser.js";
import { LiteralContext } from "./DFOAParser.js";
import { ListContext } from "./DFOAParser.js";
import { TupleContext } from "./DFOAParser.js";
import { LifetimeContext } from "./DFOAParser.js";
import { TupleTypeContext } from "./DFOAParser.js";
import { GroupingTypeContext } from "./DFOAParser.js";
import { BasicTypeContext } from "./DFOAParser.js";
import { GenericsContext } from "./DFOAParser.js";
import { TypeParamContext } from "./DFOAParser.js";
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
     * Visit a parse tree produced by `DFOAParser.signature`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignature?: (ctx: SignatureContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.genericDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericDef?: (ctx: GenericDefContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.paramslist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamslist?: (ctx: ParamslistContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.returnSig`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnSig?: (ctx: ReturnSigContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf?: (ctx: IfContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor?: (ctx: ForContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.while`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile?: (ctx: WhileContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.break`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreak?: (ctx: BreakContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.continue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue?: (ctx: ContinueContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.let`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLet?: (ctx: LetContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.assign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign?: (ctx: AssignContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn?: (ctx: ReturnContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.print`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrint?: (ctx: PrintContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
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
     * Visit a parse tree produced by `DFOAParser.varDeclList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDeclList?: (ctx: VarDeclListContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.varDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDecl?: (ctx: VarDeclContext) => Result;
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
     * Visit a parse tree produced by the `typeAlias`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAlias?: (ctx: TypeAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `attribute`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute?: (ctx: AttributeContext) => Result;
    /**
     * Visit a parse tree produced by the `funcCallTrail`
     * labeled alternative in `DFOAParser.trail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncCallTrail?: (ctx: FuncCallTrailContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.newExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNewExpr?: (ctx: NewExprContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable?: (ctx: VariableContext) => Result;
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
     * Visit a parse tree produced by `DFOAParser.lifetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLifetime?: (ctx: LifetimeContext) => Result;
    /**
     * Visit a parse tree produced by the `tupleType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleType?: (ctx: TupleTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `groupingType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingType?: (ctx: GroupingTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `basicType`
     * labeled alternative in `DFOAParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBasicType?: (ctx: BasicTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.generics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerics?: (ctx: GenericsContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.typeParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParam?: (ctx: TypeParamContext) => Result;
    /**
     * Visit a parse tree produced by `DFOAParser.ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdent?: (ctx: IdentContext) => Result;
}

