import { ParseTree } from "antlr4ng";
import { DFOAVisitor as V } from "../dfoa/DFOAVisitor.js";
import { Expression } from "lang/ast/expressions.js";
import { Statement } from "lang/ast/statements.js";
import { TopLevel } from "lang/ast/top_levels.js";
import { Span } from "lang/utils/span.js";
import { BlockContext, ExprContext, IdentContext, StatementContext, TlStatementContext } from "../dfoa/DFOAParser.js";
import { Body, Identifier } from "lang/ast/ast.js";
import unescape from "lang/utils/unescape.js";

export default interface Orchestrator {
    expression: V<Expression>,
    statement: V<Statement>,
    top_level: V<TopLevel>,
    file: string
}

export class DFOAVisitor<T> extends V<T> {
    orch: Orchestrator;

    constructor(orchestrator: Orchestrator) {
        super();
        this.orch = orchestrator;
    }

    visit_expression(node: ExprContext): Expression {
        return this.orch.expression.visitExpr!(node);
    }

    visit_statement(node: StatementContext): Statement {
        return this.orch.statement.visitStatement!(node);
    }

    visit_top_level(node: TlStatementContext): TopLevel {
        return this.orch.top_level.visitTlStatement!(node);
    }

    visit_ident(node: IdentContext): Identifier {
        if (node.COMPLEX_IDENT()) {
            return new Identifier(unescape(node.COMPLEX_IDENT()!.getText()), this.get_span(node))
        }
        return new Identifier(node.SIMPLE_IDENT()!.getText(), this.get_span(node));
    }

    visit_block(node: BlockContext): Body {
        let statements = [];
        for (let statement of node.statement()) {
            statements.push(this.visit_statement(statement));
        }
        return new Body(statements, this.get_span(node));
    }

    get_span(node: ParseTree): Span {
        let interval = node.getSourceInterval();
        return {
            start: interval.start,
            end: interval.stop,
            file: this.orch.file
        }
    }
}

export function unreachable(): never {
    throw new Error("unreachable code!");
}