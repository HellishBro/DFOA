import { Node } from "lang/ast/ast.js";
import { Span } from "lang/utils/span.js";

export type Table<Id extends number, N> = Map<Id, N>;

export class File {
    constructor(public filename: string, public spans: SpanTable, public nodes: NodeTable, public docs: DocTable) {}
}

export type FileID = number & {readonly $tag: unique symbol};
export type FileTable = Table<FileID, File>;

export type NodeID = number & {readonly $tag: unique symbol};
export type SpanTable = Table<NodeID, Span>;
export type NodeTable = Table<NodeID, Node>;
export type DocTable = Table<NodeID, string>;