import { Attribute, BinaryOperators, BinOp, Expression, FunctionCall, List, LiteralFloat, LiteralInteger, LiteralString, LiteralText, Operator, Subscript, Tuple, TupleSubscript, UnaryOperators, UnOp } from "lang/ast/expressions.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { AddSubContext, AddSubOpContext, AndContext, AtomContext, AtomTrailContext, AttributeContext, ComparisonContext, CompOpContext, ExprContext, FuncInvokeContext, ListContext, LiteralContext, MultDivContext, MultDivOpContext, NotContext, OrContext, SubscriptContext, TrailContext, TupleAccessContext, TupleContext, UnopContext } from "../dfoa/DFOAParser.js";
import unescape from "lang/utils/unescape.js";
import { ParseTree } from "antlr4ng";
import { spanning } from "lang/utils/span.js";
import { UncheckedType } from "lang/type/type.js";

export default class ExpressionCSTASTConverter extends DFOAVisitor<Expression> {
    visitExpr: (ctx: ExprContext) => Expression = ctx => {
        return this.visitOr(ctx.or());
    }

    visitOr: (ctx: OrContext) => Expression = ctx => {
        let i = 0;
        let value = this.visitAnd(ctx.and(i)!);
        let next_sep: ParseTree | null, next_value: AndContext | null;
        while (next_sep = ctx.OR(i), next_value = ctx.and(++i), next_sep != null && next_value != null) {
            let right = this.visitAnd(next_value!);
            value = new BinOp(
                value,
                new Operator(BinaryOperators.OR, this.get_span(next_sep!)),
                right,
                UncheckedType,
                spanning(value.span, right.span)
            );
        }
        return value;
    }
    
    visitAnd: (ctx: AndContext) => Expression = ctx => {
        let i = 0;
        let value = this.visitNot(ctx.not(i)!);
        let next_sep: ParseTree | null, next_value: NotContext | null;
        while (next_sep = ctx.AND(i), next_value = ctx.not(++i), next_sep != null && next_value != null) {
            let right = this.visitNot(next_value!);
            value = new BinOp(
                value,
                new Operator(BinaryOperators.AND, this.get_span(next_sep!)),
                right,
                UncheckedType,
                spanning(value.span, right.span)
            );
        }
        return value;
    }

    visitNot: (ctx: NotContext) => Expression = ctx => {
        if (ctx.comparison()) {
            return this.visitComparison(ctx.comparison()!);
        }
        let value = this.visitNot(ctx.not()!);
        return new UnOp(
            new Operator(UnaryOperators.NOT, this.get_span(ctx.NOT()!)),
            value,
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitComparison: (ctx: ComparisonContext) => Expression = ctx => {
        let i = 0;
        let value = this.visitAddSub(ctx.addSub(i)!);
        let next_sep: CompOpContext | null, next_value: AddSubContext | null;
        while (next_sep = ctx.compOp(i), next_value = ctx.addSub(++i), next_sep != null && next_value != null) {
            let right = this.visitAddSub(next_value!);
            let op =
                next_sep!.EQEQ() ? BinaryOperators.EQ :
                next_sep!.NEQ() ? BinaryOperators.NEQ :
                next_sep!.LANGLE() ? BinaryOperators.LT :
                next_sep!.RANGLE() ? BinaryOperators.GT :
                next_sep!.LE() ? BinaryOperators.LE :
                next_sep!.GE() ? BinaryOperators.GE : unreachable();
            value = new BinOp(
                value,
                new Operator(op, this.get_span(next_sep!)),
                right,
                UncheckedType,
                spanning(value.span, right.span)
            );
        }
        return value;
    }

    visitAddSub: (ctx: AddSubContext) => Expression = ctx => {
        let i = 0;
        let value = this.visitMultDiv(ctx.multDiv(i)!);
        let next_sep: AddSubOpContext | null, next_value: MultDivContext | null;
        while (next_sep = ctx.addSubOp(i), next_value = ctx.multDiv(++i), next_sep != null && next_value != null) {
            let right = this.visitMultDiv(next_value!);
            let op =
                next_sep!.PLUS() ? BinaryOperators.ADD :
                next_sep!.MINUS() ? BinaryOperators.SUB : unreachable();
            value = new BinOp(
                value,
                new Operator(op, this.get_span(next_sep!)),
                right,
                UncheckedType,
                spanning(value.span, right.span)
            );
        }
        return value;
    }

    visitMultDiv: (ctx: MultDivContext) => Expression = ctx => {
        let i = 0;
        let value = this.visitUnop(ctx.unop(i)!);
        let next_sep: MultDivOpContext | null, next_value: UnopContext | null;
        while (next_sep = ctx.multDivOp(i), next_value = ctx.unop(++i), next_sep != null && next_value != null) {
            let right = this.visitUnop(next_value!);
            let op =
                next_sep!.STAR() ? BinaryOperators.MULT :
                next_sep!.SLASH() ? BinaryOperators.DIV : unreachable();
            value = new BinOp(
                value,
                new Operator(op, this.get_span(next_sep!)),
                right,
                UncheckedType,
                spanning(value.span, right.span)
            );
        }
        return value;
    }

    visitUnop: (ctx: UnopContext) => Expression = ctx => {
        if (ctx.trail()) {
            return this.visitTrail(ctx.trail()!);
        }
        let value = this.visitUnop(ctx.unop()!);
        return new UnOp(
            new Operator(UnaryOperators.NEG, this.get_span(ctx.MINUS()!)),
            value,
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitTrail: (ctx: TrailContext) => Expression = ctx => {
        if (ctx instanceof AtomTrailContext) {
            return this.visitAtomTrail(ctx);
        } else if (ctx instanceof SubscriptContext) {
            return this.visitSubscript(ctx);
        } else if (ctx instanceof TupleAccessContext) {
            return this.visitTupleAccess(ctx);
        } else if (ctx instanceof AttributeContext) {
            return this.visitAttribute(ctx);
        }
        unreachable();
    }

    #visitFuncInvoke: (ctx: FuncInvokeContext) => {
        args: Expression[]
    } = ctx => {
        return {
            args: ctx.expr().map(e => this.visitExpr(e))
        }
    }

    visitAtomTrail: (ctx: AtomTrailContext) => Expression = ctx => {
        let value = this.visitAtom(ctx.atom());
        if (ctx.funcInvoke()) {
            let invoked = this.#visitFuncInvoke(ctx.funcInvoke()!);
            value = new FunctionCall(value, invoked.args, UncheckedType, this.get_span(ctx));
        }
        return value;
    }

    visitSubscript: (ctx: SubscriptContext) => Expression = ctx => {
        let left = this.visitTrail(ctx.trail());
        let subscript = this.visitExpr(ctx.expr());
        return new Subscript(left, subscript, UncheckedType, this.get_span(ctx));
    }

    visitTupleAccess: (ctx: TupleAccessContext) => Expression = ctx => {
        let left = this.visitTrail(ctx.trail());
        let index = new LiteralInteger(parseInt(ctx.INTEGER().getText()), this.get_span(ctx.INTEGER()));
        return new TupleSubscript(left, index, UncheckedType, this.get_span(ctx));
    }

    visitAttribute: (ctx: AttributeContext) => Expression = ctx => {
        let value = this.visitTrail(ctx.trail());
        let attribute = this.visit_ident(ctx.ident());
        let attr: Expression = new Attribute(value, attribute, UncheckedType, spanning(value.span, attribute.span));
        if (ctx.funcInvoke()) {
            let invoked = this.#visitFuncInvoke(ctx.funcInvoke()!);
            attr = new FunctionCall(attr, invoked.args, UncheckedType, this.get_span(ctx));
        }
        return attr;
    }

    visitAtom: (ctx: AtomContext) => Expression = ctx => {
        if (ctx.literal()) {
            return this.visitLiteral(ctx.literal()!);
        } else if (ctx.list()) {
            return this.visitList(ctx.list()!);
        } else if (ctx.tuple()) {
            return this.visitTuple(ctx.tuple()!);
        } else if (ctx.expr()) {
            return this.visitExpr(ctx.expr()!);
        }
        throw unreachable();
    }

    visitLiteral: (ctx: LiteralContext) => Expression = ctx => {
        if (ctx.STRING()) {
            return new LiteralString(unescape(ctx.STRING()!.getText()), this.get_span(ctx.STRING()!));
        } else if (ctx.TEXT()) {
            return new LiteralText(unescape(ctx.TEXT()!.getText()), this.get_span(ctx.TEXT()!));
        } else if (ctx.INTEGER()) {
            return new LiteralInteger(parseInt(ctx.INTEGER()!.getText()), this.get_span(ctx.INTEGER()!));
        } else if (ctx.FLOAT()) {
            return new LiteralFloat(parseFloat(ctx.FLOAT()!.getText()), this.get_span(ctx.FLOAT()!));
        }
        throw unreachable();
    }

    visitList: (ctx: ListContext) => Expression = ctx => {
        return new List(ctx.expr().map(e => this.visitExpr(e)), UncheckedType, this.get_span(ctx));
    }

    visitTuple: (ctx: TupleContext) => Expression = ctx => {
        return new Tuple(ctx.expr().map(e => this.visitExpr(e)), UncheckedType, this.get_span(ctx));
    }
}
