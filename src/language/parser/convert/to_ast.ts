import { Module } from "lang/ast/top_levels.js";
import { StartContext } from "../dfoa/DFOAParser.js";
import ExpressionCSTASTConverter from "./expressions.js";
import Orchestrator from "./orchestrator.js";
import StatementCSTASTConverter from "./statements.js";
import TopLevelCSTASTConverter from "./top_levels.js";
import TypeCSTASTConverter from "./type.js";
import { File } from "lang/table/table.js";
import { switch_context } from "lang/ast/ast_file_context.js";
import { ParseTree, TokenStream } from "antlr4ng";
import { Span } from "lang/utils/span.js";

export default class CSTASTConverter {
    orchestrator: Orchestrator;
    file: File;
    token_stream: TokenStream;

    // TODO: stop leaking abstraction: token_stream
    constructor(file: string, token_stream: TokenStream) {
        this.file = new File(
            file,
            new Map(),
            new Map(),
            new Map()
        );
        switch_context(this.file);
        this.token_stream = token_stream;

        this.orchestrator = {
            expression: undefined!,
            statement: undefined!,
            top_level: undefined!,
            type: undefined!,
            file: this.file
        } as Orchestrator;
        let expression_converter = new ExpressionCSTASTConverter(this.orchestrator, token_stream);
        let statement_converter = new StatementCSTASTConverter(this.orchestrator, token_stream);
        let top_level_converter = new TopLevelCSTASTConverter(this.orchestrator, token_stream);
        let type_converter = new TypeCSTASTConverter(this.orchestrator, token_stream);
        this.orchestrator.expression = expression_converter;
        this.orchestrator.statement = statement_converter;
        this.orchestrator.top_level = top_level_converter;
        this.orchestrator.type = type_converter;
    }

    start(module: StartContext): Module {
        return new Module(
            this.orchestrator.file.filename,
            module.tlStatement().map(s => this.orchestrator.top_level.visitTlStatement!(s)),
            this.get_span(module)
        );
    }

    get_span(node: ParseTree): Span {
        let interval = node.getSourceInterval();
        return {
            start: this.token_stream.get(interval.start).start,
            end: this.token_stream.get(interval.stop).stop
        }
    }
}