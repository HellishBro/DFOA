import { File, NodeID } from "lang/table/table.js";
import { Node } from "./ast.js";
import { Span } from "lang/utils/span.js";

export class AstFileContext {
    current_node_id: number;
    file: File

    constructor(file: File) {
        this.current_node_id = 0;
        this.file = file;
    }

    register_node<N extends Node>(node: N, span: Span): NodeID {
        let id = (this.current_node_id++) as NodeID;
        this.file.nodes.set(id, node);
        this.file.spans.set(id, span);
        return id;
    }
}

export let current_file_context: AstFileContext; // stinky global state thing because dep.inj. takes too much work

export function switch_context(file: File) {
    current_file_context = new AstFileContext(file);
}