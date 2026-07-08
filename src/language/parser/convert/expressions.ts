import { As, Attribute, BinaryOperators, BinOp, Expression, FunctionCall, List, LiteralBoolean, LiteralFloat, LiteralInteger, LiteralString, LiteralText, New, Operator, Subscript, Tuple, TupleSubscript, UnaryOperators, UnOp, Variable, VariableLifetime, VariableLifetimeEnum } from "lang/ast/expressions.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { AddSubContext, AddSubOpContext, AndContext, AtomContext, AtomTrailContext, AttributeContext, ComparisonContext, ExprContext, FuncCallTrailContext, ListContext, LiteralContext, MultDivContext, MultDivOpContext, NewExprContext, NotContext, OrContext, SubscriptContext, TrailContext, TupleAccessContext, TupleContext, TypeAliasContext, UnopContext, VariableContext } from "../dfoa/DFOAParser.js";
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
        let value = this.visitAddSub(ctx.addSub(0)!);
        if (ctx.compOp()) {
            let sep = ctx.compOp()!;
            let right = this.visitAddSub(ctx.addSub(1)!);
            let op =
                sep.EQEQ() ? BinaryOperators.EQ :
                sep.NEQ() ? BinaryOperators.NEQ :
                sep.LANGLE() ? BinaryOperators.LT :
                sep.RANGLE() ? BinaryOperators.GT :
                sep.LE() ? BinaryOperators.LE :
                sep.GE() ? BinaryOperators.GE : unreachable();
            value = new BinOp(
                value,
                new Operator(op, this.get_span(sep)),
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
        } else if (ctx instanceof FuncCallTrailContext) {
            return this.visitFuncCallTrail(ctx);
        } else if (ctx instanceof TypeAliasContext) {
            return this.visitTypeAlias(ctx);
        }
        unreachable();
    }

    visitTypeAlias: (ctx: TypeAliasContext) => Expression = ctx => {
        return new As(
            this.visitTrail(ctx.trail()),
            this.visit_type(ctx.type()),
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitFuncCallTrail: (ctx: FuncCallTrailContext) => Expression = ctx => {
        return new FunctionCall(
            this.visitTrail(ctx.trail()),
            ctx.funcInvoke().expr().map(e => this.visitExpr(e)),
            this.orch.type.visit_generics(ctx.generics()),
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitAtomTrail: (ctx: AtomTrailContext) => Expression = ctx => {
        return this.visitAtom(ctx.atom());
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
        return new Attribute(value, attribute, UncheckedType, this.get_span(ctx));
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
        } else if (ctx.variable()) {
            return this.visitVariable(ctx.variable()!);
        } else if (ctx.newExpr()) {
            return this.visitNewExpr(ctx.newExpr()!);
        }
        unreachable();
    }

    visitLiteral: (ctx: LiteralContext) => Expression = ctx => {
        if (ctx.STRING()) {
            return new LiteralString(
                ctx.STRING()!.map(s => unescape(s.getText())).reduce((a, l) => a + l, ""),
                this.get_span(ctx)
            );
        } else if (ctx.TEXT()) {
            return new LiteralText(
                ctx.TEXT()!.map(t => unescape(t.getText())).reduce((a, l) => a + l, ""),
                this.get_span(ctx)
            );
        } else if (ctx.INTEGER()) {
            return new LiteralInteger(parseInt(ctx.INTEGER()!.getText()), this.get_span(ctx));
        } else if (ctx.FLOAT()) {
            return new LiteralFloat(parseFloat(ctx.FLOAT()!.getText()), this.get_span(ctx));
        } else if (ctx.TRUE()) {
            return new LiteralBoolean(true, this.get_span(ctx));
        } else if (ctx.FALSE()) {
            return new LiteralBoolean(false, this.get_span(ctx));
        }
        unreachable();
    }

    visitList: (ctx: ListContext) => Expression = ctx => {
        return new List(ctx.expr().map(e => this.visitExpr(e)), UncheckedType, this.get_span(ctx));
    }

    visitTuple: (ctx: TupleContext) => Expression = ctx => {
        return new Tuple(ctx.expr().map(e => this.visitExpr(e)), UncheckedType, this.get_span(ctx));
    }

    visitNewExpr: (ctx: NewExprContext) => Expression = ctx => {
        return new New(
            this.visitExpr(ctx.expr()),
            ctx.funcInvoke().expr().map(e => this.visitExpr(e)),
            this.orch.type.visit_generics(ctx.generics()),
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitVariable: (ctx: VariableContext) => Expression = ctx => {
        return new Variable(
            this.visit_ident(ctx.ident()),
            ctx.lifetime() == null ? null : new VariableLifetime(
                ctx.lifetime()!.GLOBAL() ? VariableLifetimeEnum.GLOBAL :
                ctx.lifetime()!.PERSISTENT() ? VariableLifetimeEnum.PERSISTENT :
                ctx.lifetime()!.LOCAL() ? VariableLifetimeEnum.LOCAL :
                ctx.lifetime()!.LINE() ? VariableLifetimeEnum.LINE : unreachable(),
                this.get_span(ctx.lifetime()!)
            ),
            UncheckedType,
            this.get_span(ctx)
        )
    }
}
