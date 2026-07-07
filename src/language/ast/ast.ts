import { Span } from "lang/utils/span.js";
import { Statement } from "./statements.js";

export abstract class Node {
    constructor(public span: Span) {}
}

export class Body extends Node {
    constructor(public statements: Statement[], span: Span) { super(span); }
}

export class Identifier extends Node {
    constructor(public name: string, span: Span) { super(span); }
}