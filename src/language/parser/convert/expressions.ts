import { Expression, LiteralString } from "lang/ast/expressions.js";
import { DFOAVisitor, unreachable } from "./orchestrator.js";
import { ExprContext, LiteralContext } from "../dfoa/DFOAParser.js";

function parse_string(text: string): string {
    return JSON.parse('"' + text.substring(1, text.length - 1).replace('"', '\\"') + '"').toString(); // TODO: HACKY ASF SOLUTION; IN-HOUSE SOLUTION NEEDED.
}

export default class ExpressionCSTASTConverter extends DFOAVisitor<Expression> {
    visitExpr: (ctx: ExprContext) => Expression = ctx => {
        if (ctx.literal()) {
            return this.visitLiteral(ctx.literal());
        }
        throw unreachable();
    }

    visitLiteral: (ctx: LiteralContext) => Expression = ctx => {
        if (ctx.STRING()) {
            return new LiteralString(parse_string(ctx.STRING()!.getText()), this.get_span(ctx.STRING()!));
        }
        throw new Error("not implemented"); // TODO: IMPLEMENT THIS
    }
}
