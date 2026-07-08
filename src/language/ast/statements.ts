import { Span } from "lang/utils/span.js";
import { Body, Node } from "./ast.js";
import { Expression, Variable } from "./expressions.js";
import { TypeNode } from "./types.js";

export abstract class Statement extends Node {
    constructor(span: Span) { super(span); }
}

export class Print extends Statement {
    constructor(public expression: Expression, span: Span) { super(span); }
}

export class ExpressionStatement extends Statement {
    constructor(public expression: Expression, span: Span) { super(span); }
}

export class If extends Statement {
    constructor(public expression: Expression, public if_true: Body, public if_false: Body | null, span: Span) { super(span); }
}

export class For extends Statement {
    constructor(public variables: VarDecl[], public expression: Expression, public body: Body, span: Span) { super(span); }
}

export class While extends Statement {
    constructor(public expression: Expression, public body: Body, span: Span) { super(span); }
}

export class Break extends Statement {}
export class Continue extends Statement {}
export class NoOp extends Statement {}

export class Let extends Statement {
    constructor(public lhs: VarDecl[], public rhs: Expression | null, span: Span) { super(span); }
}

export class Assign extends Statement {
    constructor(public lhs: VarDecl, public rhs: Expression, span: Span) { super(span); }
}

export class Return extends Statement {
    constructor(public expression: Expression | null, span: Span) { super(span); }
}


export class VarDecl extends Node {
    constructor(public variable: Variable, public type: TypeNode | null, span: Span) { super(span); }
}