import { Span } from "lang/utils/span.js";
import { Body, Identifier, Node } from "./ast.js";

export type TopLevel = Func;

export class Module extends Node {
    constructor(public filename: string, public items: TopLevel[], span: Span) { super(span); }
}

export class Func extends Node {
    constructor(public name: Identifier, public signature: Signature, public body: Body, span: Span) { super(span); }
}

export interface Signature {

}