import { TypeTable } from "./type_table.js";

export enum TypeKind {
    String,
    Text,
    Integer,
    Float,
    Boolean,
    List,
    Dictionary,
    Tuple,
    Any,
    Function,
    Error
}

export abstract class TypeData {
    constructor(public kind: TypeKind) {}

    post_init(table: TypeTable) {}

    abstract repr(table: TypeTable): string;
    abstract valid(table: TypeTable): boolean;
    abstract attribute(attr: string, table: TypeTable): TypeID | undefined;
}

export type TypeID = number & {readonly $tag: unique symbol};
