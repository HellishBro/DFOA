import { TypeNode, TupleType, BasicType } from "lang/ast/ast.js";
import { TypeContext, TupleTypeContext, GroupingTypeContext, BasicTypeContext, GenericsContext } from "../dfoa/DFOAParser.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { UncheckedType } from "lang/type/type.js";

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
            undefined,
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
            undefined,
            this.get_span(ctx)
        )
    }
    
    visit_generics: (ctx: GenericsContext | null) => TypeNode[] = ctx => {
        return ctx == null ? [] : ctx.type_().map(t => this.visitType(t));
    }
}
