import { Func, TopLevel } from "lang/ast/top_levels.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { FuncContext, TlStatementContext } from "../dfoa/DFOAParser.js";

export default class TopLevelCSTASTConverter extends DFOAVisitor<TopLevel> {
    visitTlStatement: (ctx: TlStatementContext) => TopLevel = ctx => {
        if (ctx.func()) {
            return this.visitFunc(ctx.func()!);
        }
        throw unreachable();
    }

    visitFunc: (ctx: FuncContext) => TopLevel = ctx => {
        let ident = this.visit_ident(ctx.ident());
        let signature = {}; // TODO: IMPLEMENT THIS
        let body = this.visit_block(ctx.block());
        return new Func(ident, signature, body, this.get_span(ctx));
    }
}