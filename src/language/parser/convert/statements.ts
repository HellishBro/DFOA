import { Assign, Break, Continue, ExpressionStatement, For, If, Let, NoOp, Print, Return, Statement, VarDecl, While } from "lang/ast/statements.js";
import { AssignContext, BreakContext, ContinueContext, ExprStmtContext, ForContext, IfContext, LetContext, PrintContext, ReturnContext, SemiContext, StatementContext, VarDeclContext, VarDeclListContext, WhileContext } from "../dfoa/DFOAParser.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { Variable } from "lang/ast/expressions.js";

export default class StatementCSTASTConverter extends DFOAVisitor<Statement> {
    visitStatement: (ctx: StatementContext) => Statement = ctx => {
        if (ctx.print()) {
            return this.visitPrint(ctx.print()!);
        } else if (ctx.exprStmt()) {
            return this.visitExprStmt(ctx.exprStmt()!);
        } else if (ctx.if()) {
            return this.visitIf(ctx.if()!);
        } else if (ctx.for()) {
            return this.visitFor(ctx.for()!);
        } else if (ctx.while()) {
            return this.visitWhile(ctx.while()!);
        } else if (ctx.let()) {
            return this.visitLet(ctx.let()!);
        } else if (ctx.assign()) {
            return this.visitAssign(ctx.assign()!);
        } else if (ctx.return()) {
            return this.visitReturn(ctx.return()!);
        } else if (ctx.break()) {
            return this.visitBreak(ctx.break()!);
        } else if (ctx.continue()) {
            return this.visitContinue(ctx.continue()!);
        } else if (ctx.semi()) {
            return this.visitSemi(ctx.semi()!);
        }
        unreachable();
    }

    visitPrint: (ctx: PrintContext) => Statement = ctx => {
        return new Print(this.visit_expression(ctx.expr()), this.get_span(ctx));
    }

    visitExprStmt: (ctx: ExprStmtContext) => Statement = ctx => {
        return new ExpressionStatement(this.visit_expression(ctx.expr()), this.get_span(ctx));
    }

    visitIf: (ctx: IfContext) => Statement = ctx => {
        return new If(
            this.visit_expression(ctx.expr()),
            this.visit_block(ctx.block(0)!),
            ctx.block(1) == null ? null : this.visit_block(ctx.block(1)!),
            this.get_span(ctx)
        );
    }

    visitFor: (ctx: ForContext) => Statement = ctx => {
        return new For(
            this.visit_var_decl_list(ctx.varDeclList()),
            this.visit_expression(ctx.expr()),
            this.visit_block(ctx.block()),
            this.get_span(ctx)
        );
    }

    visitWhile: (ctx: WhileContext) => Statement = ctx => {
        return new While(
            this.visit_expression(ctx.expr()),
            this.visit_block(ctx.block()),
            this.get_span(ctx)
        );
    }

    visitLet: (ctx: LetContext) => Statement = ctx => {
        return new Let(
            this.visit_var_decl_list(ctx.varDeclList()),
            ctx.expr() == null ? null : this.visit_expression(ctx.expr()!),
            this.get_span(ctx)
        );
    }

    visitAssign: (ctx: AssignContext) => Statement = ctx => {
        return new Assign(
            this.visit_var_decl(ctx.varDecl()),
            this.visit_expression(ctx.expr()),
            this.get_span(ctx)
        );
    }

    visitReturn: (ctx: ReturnContext) => Statement = ctx => {
        return new Return(
            ctx.expr() == null ? null : this.visit_expression(ctx.expr()!),
            this.get_span(ctx)
        )
    }

    visitBreak: (ctx: BreakContext) => Statement = ctx => {
        return new Break(this.get_span(ctx));
    }

    visitContinue: (ctx: ContinueContext) => Statement = ctx => {
        return new Continue(this.get_span(ctx));
    }

    visitSemi: (ctx: SemiContext) => Statement = ctx => {
        return new NoOp(this.get_span(ctx));
    }


    visit_var_decl_list: (ctx: VarDeclListContext) => VarDecl[] = ctx => {
        return ctx.varDecl().map(v => this.visit_var_decl(v));
    }

    visit_var_decl: (ctx: VarDeclContext) => VarDecl = ctx => {
        return new VarDecl(
            this.orch.expression.visitVariable!(ctx.variable()) as Variable,
            ctx.type() == null ? null : this.visit_type(ctx.type()!),
            this.get_span(ctx)
        );
    }
}