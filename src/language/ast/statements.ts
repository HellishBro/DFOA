import { Span } from "lang/utils/span.js";
import { Node } from "./ast.js";
import { Expression } from "./expressions.js";

export type Statement = PrintStatement | ExpressionStatement | NoOpStatement;

export class PrintStatement extends Node {
    constructor(public expression: Expression, span: Span) { super(span); }
}

export class ExpressionStatement extends Node {
    constructor(public expression: Expression, span: Span) { super(span); }
}

export class NoOpStatement extends Node {
    constructor(span: Span) { super(span); }
}