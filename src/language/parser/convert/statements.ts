import { ExpressionStatement, NoOpStatement, PrintStatement, Statement } from "lang/ast/statements.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { ExprStatementContext, PrintStatementContext, SemiContext, StatementContext } from "../dfoa/DFOAParser.js";

export default class StatementCSTASTConverter extends DFOAVisitor<Statement> {
    visitStatement: (ctx: StatementContext) => Statement = ctx => {
        if (ctx.printStatement()) {
            return this.visitPrintStatement(ctx.printStatement()!);
        } else if (ctx.exprStatement()) {
            return this.visitExprStatement(ctx.exprStatement()!);
        } else if (ctx.semi()) {
            return this.visitSemi(ctx.semi()!);
        }
        unreachable();
    }

    visitPrintStatement: (ctx: PrintStatementContext) => Statement = ctx => {
        return new PrintStatement(this.visit_expression(ctx.expr()), this.get_span(ctx));
    }

    visitExprStatement: (ctx: ExprStatementContext) => Statement = ctx => {
        return new ExpressionStatement(this.visit_expression(ctx.expr()), this.get_span(ctx));
    }

    visitSemi: (ctx: SemiContext) => Statement = ctx => {
        return new NoOpStatement(this.get_span(ctx));
    }
}