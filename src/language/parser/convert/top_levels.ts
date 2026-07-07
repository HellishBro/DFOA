import { Func, Parameter, Signature, TopLevel, TypeVar } from "lang/ast/top_levels.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { FuncContext, GenericDefContext, ParamContext, ParamslistContext, ReturnSigContext, SignatureContext, TlStatementContext, TypeParamContext } from "../dfoa/DFOAParser.js";
import { TypeNode } from "lang/ast/types.js";

export default class TopLevelCSTASTConverter extends DFOAVisitor<TopLevel> {
    visitTlStatement: (ctx: TlStatementContext) => TopLevel = ctx => {
        if (ctx.func()) {
            return this.visitFunc(ctx.func()!);
        }
        unreachable();
    }

    visitFunc: (ctx: FuncContext) => TopLevel = ctx => {
        let ident = this.visit_ident(ctx.ident());
        let signature = this.visit_signature(ctx.signature());
        let body = this.visit_block(ctx.block());
        return new Func(ident, signature, body, this.get_span(ctx));
    }

    visit_signature: (ctx: SignatureContext) => Signature = ctx => {
        return new Signature(
            this.visit_generic_def(ctx.genericDef()),
            this.visit_paramslist(ctx.paramslist()),
            this.visit_return_sig(ctx.returnSig()),
            this.get_span(ctx)
        )
    }

    visit_return_sig: (ctx: ReturnSigContext | null) => TypeNode | null = ctx => {
        return ctx == null ? null : this.visit_type(ctx.type());
    }

    visit_paramslist: (ctx: ParamslistContext) => Parameter[] = ctx => {
        return ctx.param().map(p => this.visit_parameter(p));
    }

    visit_parameter: (ctx: ParamContext) => Parameter = ctx => {
        return new Parameter(this.visit_ident(ctx.ident()), ctx.type() == null ? null : this.visit_type(ctx.type()!), this.get_span(ctx))
    }

    visit_generic_def: (ctx: GenericDefContext | null) => TypeVar[] = ctx => {
        return ctx == null ? [] : ctx.typeParam().map(t => this.visit_type_param(t));
    }

    visit_type_param: (ctx: TypeParamContext) => TypeVar = ctx => {
        return new TypeVar(this.visit_ident(ctx.ident()), this.get_span(ctx));
    }
}