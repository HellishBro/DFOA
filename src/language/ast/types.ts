import { Type } from "lang/type/base.js";
import { Span } from "lang/utils/span.js";
import { Identifier, Node } from "./ast.js";

export abstract class TypeNode extends Node {
    constructor(public type: Type, span: Span) { super(span); }
}

export class BasicType extends TypeNode {
    constructor(public name: Identifier, public args: TypeNode[], type: Type, span: Span) { super(type, span); }
}

export class TupleType extends TypeNode {
    constructor(public items: TypeNode[], type: Type, span: Span) { super(type, span); }
}