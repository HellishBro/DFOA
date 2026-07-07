import { Module } from "lang/ast/top_levels.js";
import { StartContext } from "../dfoa/DFOAParser.js";
import ExpressionCSTASTConverter from "./expressions.js";
import Orchestrator from "./orchestrator.js";
import StatementCSTASTConverter from "./statements.js";
import TopLevelCSTASTConverter from "./top_levels.js";
import TypeCSTASTConverter from "./type.js";

export default class CSTASTConverter {
    orchestrator: Orchestrator;

    constructor(file: string) {
        this.orchestrator = {
            expression: undefined!,
            statement: undefined!,
            top_level: undefined!,
            type: undefined!,
            file
        } as Orchestrator;
        let expression_converter = new ExpressionCSTASTConverter(this.orchestrator);
        let statement_converter = new StatementCSTASTConverter(this.orchestrator);
        let top_level_converter = new TopLevelCSTASTConverter(this.orchestrator);
        let type_converter = new TypeCSTASTConverter(this.orchestrator);
        this.orchestrator.expression = expression_converter;
        this.orchestrator.statement = statement_converter;
        this.orchestrator.top_level = top_level_converter;
        this.orchestrator.type = type_converter;
    }

    start(module: StartContext): Module {
        let interval = module.getSourceInterval();
        return new Module(
            this.orchestrator.file,
            module.tlStatement().map(s => this.orchestrator.top_level.visitTlStatement!(s)),
            {
                start: interval.start,
                end: interval.stop,
                file: this.orchestrator.file
            }
        )
    }
}