import { Span } from "lang/utils/span.js";
import { Body, Identifier, Node } from "./ast.js";
import { TypeNode } from "./types.js";

export type TopLevel = Func;

export class Module extends Node {
    constructor(public filename: string, public items: TopLevel[], span: Span) { super(span); }
}

export class Func extends Node {
    constructor(public name: Identifier, public signature: Signature, public body: Body, span: Span) { super(span); }
}

export class Signature extends Node {
    constructor(public generics: TypeVar[], public parameters: Parameter[], public returns: TypeNode | null, span: Span) { super(span); }
}

export class TypeVar extends Node {
    constructor(public name: Identifier, span: Span) { super(span); }
}

export class Parameter extends Node {
    constructor(public name: Identifier, public type: TypeNode | null, span: Span) { super(span); }
}