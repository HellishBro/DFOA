import { Type } from "lang/type/type.js";
import { Span } from "lang/utils/span.js";
import { Node } from "./ast.js";

export abstract class Expression extends Node {
    constructor(public type: Type, span: Span) { super(span); }
}

export type Literal = LiteralString;

export class LiteralString extends Expression {
    constructor(public literal: string, span: Span) { super(Type.String, span); }
}