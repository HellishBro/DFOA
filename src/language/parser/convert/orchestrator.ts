import { ParseTree, TokenStream } from "antlr4ng";
import { DFOAVisitor as V } from "../dfoa/DFOAVisitor.js";
import { Expression } from "lang/ast/expressions.js";
import { Statement } from "lang/ast/statements.js";
import { TopLevel } from "lang/ast/top_levels.js";
import { Span } from "lang/utils/span.js";
import { BlockContext, ExprContext, IdentContext, StatementContext, TlStatementContext, TypeContext } from "../dfoa/DFOAParser.js";
import { Body, Identifier, Node } from "lang/ast/ast.js";
import unescape from "lang/utils/unescape.js";
import { TypeNode } from "lang/ast/types.js";
import TypeCSTASTConverter from "./type.js";
import TopLevelCSTASTConverter from "./top_levels.js";
import StatementCSTASTConverter from "./statements.js";
import ExpressionCSTASTConverter from "./expressions.js";
import { File } from "lang/table/table.js";

export default interface Orchestrator {
    expression: ExpressionCSTASTConverter,
    statement: StatementCSTASTConverter,
    top_level: TopLevelCSTASTConverter,
    type: TypeCSTASTConverter,
    file: File
}

export class DFOAVisitor<T> extends V<T> {
    orch: Orchestrator;
    token_stream: TokenStream;

    constructor(orchestrator: Orchestrator, token_stream: TokenStream) {
        super();
        this.orch = orchestrator;
        this.token_stream = token_stream;
    }

    visit_expression(node: ExprContext): Expression {
        return this.orch.expression.visitExpr(node);
    }

    visit_statement(node: StatementContext): Statement {
        return this.orch.statement.visitStatement(node);
    }

    visit_top_level(node: TlStatementContext): TopLevel {
        return this.orch.top_level.visitTlStatement(node);
    }

    visit_type(node: TypeContext): TypeNode {
        return this.orch.type.visitType(node);
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
            start: this.token_stream.get(interval.start).start,
            end: this.token_stream.get(interval.stop).stop
        }
    }

    span_of(node: Node): Span {
        return this.orch.file.spans.get(node.id)!;
    }
}

export function unreachable(): never {
    throw new Error("unreachable code!");
}