import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { FuncContext, GenericDefContext, ParamContext, ParamslistContext, ReturnSigContext, SignatureContext, TlStatementContext, TypeParamContext } from "../dfoa/DFOAParser.js";
import { TerminalNode } from "antlr4ng";
import { Func, Node, Parameter, Signature, TopLevel, TypeNode, TypeVar } from "lang/ast/ast.js";
import { extract_doc_comment } from "../extract_doc_comment.js";

export default class TopLevelCSTASTConverter extends DFOAVisitor<TopLevel> {
    collect_doc_comment(ctx: { DOC_COMMENT: () => TerminalNode | null }, node: Node) {
        if (ctx.DOC_COMMENT()) {
            this.orch.file.docs.set(node.id, extract_doc_comment(ctx.DOC_COMMENT()!.getText()));
        }
    }

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
        let f = new Func(ident, signature, body, this.get_span(ctx));
        this.collect_doc_comment(ctx, f);
        return f;
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