import { Attribute, BinaryOperators, BinOp, Expression, FunctionCall, List, LiteralFloat, LiteralInteger, LiteralString, LiteralText, Operator, Subscript, Tuple, TupleSubscript, UnaryOperators, UnOp } from "lang/ast/expressions.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { AddSubContext, AddSubOpContext, AndContext, AtomContext, AtomTrailContext, AttributeContext, BasicTypeContext, ComparisonContext, CompOpContext, ExprContext, FuncCallTrailContext, FuncInvokeContext, GenericsContext, GroupingTypeContext, ListContext, LiteralContext, MultDivContext, MultDivOpContext, NotContext, OrContext, SubscriptContext, TrailContext, TupleAccessContext, TupleContext, TupleTypeContext, TypeAliasContext, TypeContext, UnopContext } from "../dfoa/DFOAParser.js";
import unescape from "lang/utils/unescape.js";
import { ParseTree } from "antlr4ng";
import { spanning } from "lang/utils/span.js";
import { UncheckedType } from "lang/type/type.js";
import { BasicType, TupleType, TypeNode } from "lang/ast/types.js";

export default class TypeCSTASTConverter extends DFOAVisitor<TypeNode> {
    visitType: (ctx: TypeContext) => TypeNode = ctx => {
        if (ctx instanceof TupleTypeContext) {
            return this.visitTupleType(ctx);
        } else if (ctx instanceof GroupingTypeContext) {
            return this.visitGroupingType(ctx);
        } else if (ctx instanceof BasicTypeContext) {
            return this.visitBasicType(ctx);
        }
        unreachable();
    }

    visitTupleType: (ctx: TupleTypeContext) => TypeNode = ctx => {
        return new TupleType(
            ctx.type_().map(t => this.visitType(t)),
            UncheckedType,
            this.get_span(ctx)
        )
    }

    visitGroupingType: (ctx: GroupingTypeContext) => TypeNode = ctx => {
        return this.visitType(ctx.type());
    }

    visitBasicType: (ctx: BasicTypeContext) => TypeNode = ctx => {
        return new BasicType(
            this.visit_ident(ctx.ident()),
            this.visit_generics(ctx.generics()),
            UncheckedType,
            this.get_span(ctx)
        )
    }
    
    visit_generics: (ctx: GenericsContext | null) => TypeNode[] = ctx => {
        return ctx == null ? [] : ctx.type_().map(t => this.visitType(t));
    }
}
