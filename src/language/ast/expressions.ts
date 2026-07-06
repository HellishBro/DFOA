import { Span } from "lang/utils/span.js";
import { Identifier, Node } from "./ast.js";
import { IntegerType, FloatType } from "lang/type/numerics.js";
import { StringType, TextType } from "lang/type/strings.js";
import { Type } from "lang/type/base.js";

export abstract class Expression extends Node {
    constructor(public type: Type, span: Span) { super(span); }
}



export enum BinaryOperators {
    ADD = "+",
    SUB = "-",
    MULT = "*",
    DIV = "/",
    AND = "and",
    OR = "or",
    EQ = "==",
    NEQ = "!=",
    LE = "<=",
    GE = ">=",
    LT = "<",
    GT = ">"
}

export enum UnaryOperators {
    NEG = "-",
    NOT = "not"
}

export class Operator<Ops> extends Node {
    constructor(public op: Ops, span: Span) { super(span); }
}

export class BinOp extends Expression {
    constructor(public left: Expression, public operator: Operator<BinaryOperators>, public right: Expression, type: Type, span: Span) { super(type, span); }
}

export class UnOp extends Expression {
    constructor(public operator: Operator<UnaryOperators>, public operand: Expression, type: Type, span: Span) { super(type, span); }
}



export abstract class Trailed extends Expression {
    constructor(public value: Expression, type: Type, span: Span) { super(type, span); }
}

export class Subscript extends Trailed {
    constructor(value: Expression, public subscription: Expression, type: Type, span: Span) { super(value, type, span); }
}

export class TupleSubscript extends Trailed {
    constructor(value: Expression, public index: LiteralInteger, type: Type, span: Span) { super(value, type, span); }
}

export class Attribute extends Trailed {
    constructor(value: Expression, public attribute: Identifier, type: Type, span: Span) { super(value, type, span); }
}

export class FunctionCall extends Trailed {
    constructor(value: Expression, public args: Expression[], type: Type, span: Span) { super(value, type, span); }
}



export type Literal = LiteralString;

export class LiteralString extends Expression {
    constructor(public content: string, span: Span) { super(StringType, span); }
}

export class LiteralText extends Expression {
    constructor(public content: string, span: Span) { super(TextType, span); }
}

export class LiteralInteger extends Expression {
    constructor(public number: number, span: Span) { super(IntegerType, span); }
}

export class LiteralFloat extends Expression {
    constructor(public number: number, span: Span) { super(FloatType, span); }
}


export class List extends Expression {
    constructor(public items: Expression[], type: Type, span: Span) { super(type, span); }
}

export class Tuple extends Expression {
    constructor(public items: Expression[], type: Type, span: Span) { super(type, span); }
}