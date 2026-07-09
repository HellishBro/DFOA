import { Span } from "lang/utils/span.js";
import { Statement } from "./statements.js";
import { NodeID } from "lang/table/table.js";
import { current_file_context } from "./ast_file_context.js";

export abstract class Node {
    id: NodeID;

    constructor(span: Span) {
        this.id = current_file_context.register_node(this, span);
    }
}

export class Body extends Node {
    constructor(public statements: Statement[], span: Span) { super(span); }
}

export class Identifier extends Node {
    constructor(public name: string, span: Span) { super(span); }
}