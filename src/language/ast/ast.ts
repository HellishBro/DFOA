import { Span } from "lang/utils/span.js";
import { TypeID } from "lang/type/type.js";
import { NodeID } from "lang/table/table.js";
import { current_file_context } from "./ast_file_context.js";
import { Visitor } from "./visitor.js";
import { Listener } from "./listener.js";

type Type = TypeID | undefined;

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

export enum VariableLifetimes {
    GLOBAL = "global",
    PERSISTENT = "saved",
    LOCAL = "local",
    LINE = "line"
}

export abstract class Node {
    id: NodeID;

    constructor(span: Span) {
        this.id = current_file_context.register_node(this, span);
    }

    abstract accept<T>(visitor: Visitor<T>): T;
    abstract enter(listener: Listener): void;
    abstract exit(listener: Listener): void;
    abstract toString(): string;
}

export class Identifier extends Node {
    constructor(
        public name: string,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Identifier(name=${this.name})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_identifier!(this);
    }

    enter(listener: Listener): void {
        listener.enter_identifier!(this);
    }

    exit(listener: Listener): void {
        listener.exit_identifier!(this);
    }
}

export abstract class TypeNode extends Node {
    constructor(
        public type: Type,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `TypeNode(type=${this.type})`;
    }
}

export class BasicType extends TypeNode {
    constructor(
        public name: Identifier,
        public args: TypeNode[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `BasicType(name=${this.name}, args=${this.args}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_basic_type!(this);
    }

    enter(listener: Listener): void {
        listener.enter_basic_type!(this);

        this.name.enter(listener);
        for (let v of this.args) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.name.exit(listener);
        for (let v of this.args) {
            v.exit(listener);
        }

        listener.exit_basic_type!(this);
    }
}

export class TupleType extends TypeNode {
    constructor(
        public items: TypeNode[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `TupleType(items=${this.items}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_tuple_type!(this);
    }

    enter(listener: Listener): void {
        listener.enter_tuple_type!(this);

        for (let v of this.items) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.items) {
            v.exit(listener);
        }

        listener.exit_tuple_type!(this);
    }
}

export abstract class Expression extends Node {
    constructor(
        public type: Type,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Expression(type=${this.type})`;
    }
}

export class LiteralString extends Expression {
    constructor(
        public value: string,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `LiteralString(value=${this.value}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_literal_string!(this);
    }

    enter(listener: Listener): void {
        listener.enter_literal_string!(this);
    }

    exit(listener: Listener): void {
        listener.exit_literal_string!(this);
    }
}

export class LiteralText extends Expression {
    constructor(
        public value: string,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `LiteralText(value=${this.value}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_literal_text!(this);
    }

    enter(listener: Listener): void {
        listener.enter_literal_text!(this);
    }

    exit(listener: Listener): void {
        listener.exit_literal_text!(this);
    }
}

export class LiteralInteger extends Expression {
    constructor(
        public value: number,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `LiteralInteger(value=${this.value}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_literal_integer!(this);
    }

    enter(listener: Listener): void {
        listener.enter_literal_integer!(this);
    }

    exit(listener: Listener): void {
        listener.exit_literal_integer!(this);
    }
}

export class LiteralFloat extends Expression {
    constructor(
        public value: number,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `LiteralFloat(value=${this.value}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_literal_float!(this);
    }

    enter(listener: Listener): void {
        listener.enter_literal_float!(this);
    }

    exit(listener: Listener): void {
        listener.exit_literal_float!(this);
    }
}

export class LiteralBoolean extends Expression {
    constructor(
        public value: boolean,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `LiteralBoolean(value=${this.value}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_literal_boolean!(this);
    }

    enter(listener: Listener): void {
        listener.enter_literal_boolean!(this);
    }

    exit(listener: Listener): void {
        listener.exit_literal_boolean!(this);
    }
}

export class BinOp extends Expression {
    constructor(
        public left: Expression,
        public operator: Operator<BinaryOperators>,
        public right: Expression,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `BinOp(left=${this.left}, operator=${this.operator}, right=${this.right}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_bin_op!(this);
    }

    enter(listener: Listener): void {
        listener.enter_bin_op!(this);

        this.left.enter(listener);
        this.right.enter(listener);
    }

    exit(listener: Listener): void {
        this.left.exit(listener);
        this.right.exit(listener);

        listener.exit_bin_op!(this);
    }
}

export class UnOp extends Expression {
    constructor(
        public operator: Operator<UnaryOperators>,
        public operand: Expression,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `UnOp(operator=${this.operator}, operand=${this.operand}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_un_op!(this);
    }

    enter(listener: Listener): void {
        listener.enter_un_op!(this);

        this.operand.enter(listener);
    }

    exit(listener: Listener): void {
        this.operand.exit(listener);

        listener.exit_un_op!(this);
    }
}

export class Subscript extends Expression {
    constructor(
        public value: Expression,
        public subscription: Expression,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `Subscript(value=${this.value}, subscription=${this.subscription}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_subscript!(this);
    }

    enter(listener: Listener): void {
        listener.enter_subscript!(this);

        this.value.enter(listener);
        this.subscription.enter(listener);
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        this.subscription.exit(listener);

        listener.exit_subscript!(this);
    }
}

export class TupleSubscript extends Expression {
    constructor(
        public value: Expression,
        public index: LiteralInteger,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `TupleSubscript(value=${this.value}, index=${this.index}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_tuple_subscript!(this);
    }

    enter(listener: Listener): void {
        listener.enter_tuple_subscript!(this);

        this.value.enter(listener);
        this.index.enter(listener);
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        this.index.exit(listener);

        listener.exit_tuple_subscript!(this);
    }
}

export class Attribute extends Expression {
    constructor(
        public value: Expression,
        public attribute: Identifier,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `Attribute(value=${this.value}, attribute=${this.attribute}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_attribute!(this);
    }

    enter(listener: Listener): void {
        listener.enter_attribute!(this);

        this.value.enter(listener);
        this.attribute.enter(listener);
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        this.attribute.exit(listener);

        listener.exit_attribute!(this);
    }
}

export class FunctionCall extends Expression {
    constructor(
        public value: Expression,
        public args: Expression[],
        public generics: TypeNode[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `FunctionCall(value=${this.value}, args=${this.args}, generics=${this.generics}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_function_call!(this);
    }

    enter(listener: Listener): void {
        listener.enter_function_call!(this);

        this.value.enter(listener);
        for (let v of this.args) {
            v.enter(listener);
        }
        for (let v of this.generics) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        for (let v of this.args) {
            v.exit(listener);
        }
        for (let v of this.generics) {
            v.exit(listener);
        }

        listener.exit_function_call!(this);
    }
}

export class As extends Expression {
    constructor(
        public value: Expression,
        public alias: TypeNode,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `As(value=${this.value}, alias=${this.alias}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_as!(this);
    }

    enter(listener: Listener): void {
        listener.enter_as!(this);

        this.value.enter(listener);
        this.alias.enter(listener);
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        this.alias.exit(listener);

        listener.exit_as!(this);
    }
}

export class New extends Expression {
    constructor(
        public value: Expression,
        public args: Expression[],
        public generics: TypeNode[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `New(value=${this.value}, args=${this.args}, generics=${this.generics}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_new!(this);
    }

    enter(listener: Listener): void {
        listener.enter_new!(this);

        this.value.enter(listener);
        for (let v of this.args) {
            v.enter(listener);
        }
        for (let v of this.generics) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.value.exit(listener);
        for (let v of this.args) {
            v.exit(listener);
        }
        for (let v of this.generics) {
            v.exit(listener);
        }

        listener.exit_new!(this);
    }
}

export class List extends Expression {
    constructor(
        public items: Expression[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `List(items=${this.items}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_list!(this);
    }

    enter(listener: Listener): void {
        listener.enter_list!(this);

        for (let v of this.items) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.items) {
            v.exit(listener);
        }

        listener.exit_list!(this);
    }
}

export class Tuple extends Expression {
    constructor(
        public items: Expression[],
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `Tuple(items=${this.items}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_tuple!(this);
    }

    enter(listener: Listener): void {
        listener.enter_tuple!(this);

        for (let v of this.items) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.items) {
            v.exit(listener);
        }

        listener.exit_tuple!(this);
    }
}

export class Variable extends Expression {
    constructor(
        public name: Identifier,
        public lifetime: VariableLifetime | null,
        type: Type,
        span: Span
    ) {
        super(type, span);
    }

    toString(): string {
        return `Variable(name=${this.name}, lifetime=${this.lifetime}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_variable!(this);
    }

    enter(listener: Listener): void {
        listener.enter_variable!(this);

        this.name.enter(listener);
        if (this.lifetime != null) {
            this.lifetime.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.name.exit(listener);
        if (this.lifetime != null) {
            this.lifetime.exit(listener);
        }

        listener.exit_variable!(this);
    }
}

export class Operator<Ops> extends Node {
    constructor(
        public op: Ops,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Operator<Ops>(op=${this.op})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        throw new Error("please do not see me -Operator<Ops>");
    }

    enter(listener: Listener): void {
        throw new Error("please do not hear me -Operator<Ops>");
    }

    exit(listener: Listener): void {
        throw new Error("please do not hear me -Operator<Ops>");
    }
}

export class VariableLifetime extends Node {
    constructor(
        public lifetime: VariableLifetimes,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `VariableLifetime(lifetime=${this.lifetime})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        throw new Error("please do not see me -VariableLifetime");
    }

    enter(listener: Listener): void {
        throw new Error("please do not hear me -VariableLifetime");
    }

    exit(listener: Listener): void {
        throw new Error("please do not hear me -VariableLifetime");
    }
}

export abstract class Statement extends Node {
    constructor(span: Span) {
        super(span);
    }

    toString(): string {
        return `Statement()`;
    }
}

export class Print extends Statement {
    constructor(
        public expression: Expression,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Print(expression=${this.expression})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_print!(this);
    }

    enter(listener: Listener): void {
        listener.enter_print!(this);

        this.expression.enter(listener);
    }

    exit(listener: Listener): void {
        this.expression.exit(listener);

        listener.exit_print!(this);
    }
}

export class ExpressionStatement extends Statement {
    constructor(
        public expression: Expression,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `ExpressionStatement(expression=${this.expression})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_expression_statement!(this);
    }

    enter(listener: Listener): void {
        listener.enter_expression_statement!(this);

        this.expression.enter(listener);
    }

    exit(listener: Listener): void {
        this.expression.exit(listener);

        listener.exit_expression_statement!(this);
    }
}

export class If extends Statement {
    constructor(
        public expression: Expression,
        public if_true: Body,
        public if_false: Body | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `If(expression=${this.expression}, if_true=${this.if_true}, if_false=${this.if_false})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_if!(this);
    }

    enter(listener: Listener): void {
        listener.enter_if!(this);

        this.expression.enter(listener);
        this.if_true.enter(listener);
        if (this.if_false != null) {
            this.if_false.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.expression.exit(listener);
        this.if_true.exit(listener);
        if (this.if_false != null) {
            this.if_false.exit(listener);
        }

        listener.exit_if!(this);
    }
}

export class For extends Statement {
    constructor(
        public variables: VarDecl[],
        public expression: Expression,
        public body: Body,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `For(variables=${this.variables}, expression=${this.expression}, body=${this.body})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_for!(this);
    }

    enter(listener: Listener): void {
        listener.enter_for!(this);

        for (let v of this.variables) {
            v.enter(listener);
        }
        this.expression.enter(listener);
        this.body.enter(listener);
    }

    exit(listener: Listener): void {
        for (let v of this.variables) {
            v.exit(listener);
        }
        this.expression.exit(listener);
        this.body.exit(listener);

        listener.exit_for!(this);
    }
}

export class While extends Statement {
    constructor(
        public expression: Expression,
        public body: Body,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `While(expression=${this.expression}, body=${this.body})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_while!(this);
    }

    enter(listener: Listener): void {
        listener.enter_while!(this);

        this.expression.enter(listener);
        this.body.enter(listener);
    }

    exit(listener: Listener): void {
        this.expression.exit(listener);
        this.body.exit(listener);

        listener.exit_while!(this);
    }
}

export class Break extends Statement {
    constructor(span: Span) {
        super(span);
    }

    toString(): string {
        return `Break()`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_break!(this);
    }

    enter(listener: Listener): void {
        listener.enter_break!(this);
    }

    exit(listener: Listener): void {
        listener.exit_break!(this);
    }
}

export class Continue extends Statement {
    constructor(span: Span) {
        super(span);
    }

    toString(): string {
        return `Continue()`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_continue!(this);
    }

    enter(listener: Listener): void {
        listener.enter_continue!(this);
    }

    exit(listener: Listener): void {
        listener.exit_continue!(this);
    }
}

export class NoOp extends Statement {
    constructor(span: Span) {
        super(span);
    }

    toString(): string {
        return `NoOp()`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_no_op!(this);
    }

    enter(listener: Listener): void {
        listener.enter_no_op!(this);
    }

    exit(listener: Listener): void {
        listener.exit_no_op!(this);
    }
}

export class Let extends Statement {
    constructor(
        public lhs: VarDecl[],
        public rhs: Expression | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Let(lhs=${this.lhs}, rhs=${this.rhs})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_let!(this);
    }

    enter(listener: Listener): void {
        listener.enter_let!(this);

        for (let v of this.lhs) {
            v.enter(listener);
        }
        if (this.rhs != null) {
            this.rhs.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.lhs) {
            v.exit(listener);
        }
        if (this.rhs != null) {
            this.rhs.exit(listener);
        }

        listener.exit_let!(this);
    }
}

export class Assign extends Statement {
    constructor(
        public lhs: VarDecl,
        public rhs: Expression,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Assign(lhs=${this.lhs}, rhs=${this.rhs})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_assign!(this);
    }

    enter(listener: Listener): void {
        listener.enter_assign!(this);

        this.lhs.enter(listener);
        this.rhs.enter(listener);
    }

    exit(listener: Listener): void {
        this.lhs.exit(listener);
        this.rhs.exit(listener);

        listener.exit_assign!(this);
    }
}

export class Return extends Statement {
    constructor(
        public expression: Expression | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Return(expression=${this.expression})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_return!(this);
    }

    enter(listener: Listener): void {
        listener.enter_return!(this);

        if (this.expression != null) {
            this.expression.enter(listener);
        }
    }

    exit(listener: Listener): void {
        if (this.expression != null) {
            this.expression.exit(listener);
        }

        listener.exit_return!(this);
    }
}

export class Body extends Node {
    constructor(
        public statements: Statement[],
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Body(statements=${this.statements})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_body!(this);
    }

    enter(listener: Listener): void {
        listener.enter_body!(this);

        for (let v of this.statements) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.statements) {
            v.exit(listener);
        }

        listener.exit_body!(this);
    }
}

export class VarDecl extends Node {
    constructor(
        public variable: Variable,
        public type: TypeNode | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `VarDecl(variable=${this.variable}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_var_decl!(this);
    }

    enter(listener: Listener): void {
        listener.enter_var_decl!(this);

        this.variable.enter(listener);
        if (this.type != null) {
            this.type.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.variable.exit(listener);
        if (this.type != null) {
            this.type.exit(listener);
        }

        listener.exit_var_decl!(this);
    }
}

export abstract class TopLevel extends Node {
    constructor(span: Span) {
        super(span);
    }

    toString(): string {
        return `TopLevel()`;
    }
}

export class Func extends TopLevel {
    constructor(
        public name: Identifier,
        public signature: Signature,
        public body: Body,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Func(name=${this.name}, signature=${this.signature}, body=${this.body})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_func!(this);
    }

    enter(listener: Listener): void {
        listener.enter_func!(this);

        this.name.enter(listener);
        this.signature.enter(listener);
        this.body.enter(listener);
    }

    exit(listener: Listener): void {
        this.name.exit(listener);
        this.signature.exit(listener);
        this.body.exit(listener);

        listener.exit_func!(this);
    }
}

export class TypeVar extends Node {
    constructor(
        public name: Identifier,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `TypeVar(name=${this.name})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_type_var!(this);
    }

    enter(listener: Listener): void {
        listener.enter_type_var!(this);

        this.name.enter(listener);
    }

    exit(listener: Listener): void {
        this.name.exit(listener);

        listener.exit_type_var!(this);
    }
}

export class Parameter extends Node {
    constructor(
        public name: Identifier,
        public type: TypeNode | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Parameter(name=${this.name}, type=${this.type})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_parameter!(this);
    }

    enter(listener: Listener): void {
        listener.enter_parameter!(this);

        this.name.enter(listener);
        if (this.type != null) {
            this.type.enter(listener);
        }
    }

    exit(listener: Listener): void {
        this.name.exit(listener);
        if (this.type != null) {
            this.type.exit(listener);
        }

        listener.exit_parameter!(this);
    }
}

export class Signature extends Node {
    constructor(
        public type_vars: TypeVar[],
        public parameters: Parameter[],
        public returns: TypeNode | null,
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Signature(type_vars=${this.type_vars}, parameters=${this.parameters}, returns=${this.returns})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_signature!(this);
    }

    enter(listener: Listener): void {
        listener.enter_signature!(this);

        for (let v of this.type_vars) {
            v.enter(listener);
        }
        for (let v of this.parameters) {
            v.enter(listener);
        }
        if (this.returns != null) {
            this.returns.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.type_vars) {
            v.exit(listener);
        }
        for (let v of this.parameters) {
            v.exit(listener);
        }
        if (this.returns != null) {
            this.returns.exit(listener);
        }

        listener.exit_signature!(this);
    }
}

export class Module extends Node {
    constructor(
        public filename: string,
        public items: TopLevel[],
        span: Span
    ) {
        super(span);
    }

    toString(): string {
        return `Module(filename=${this.filename}, items=${this.items})`;
    }

    accept<T>(visitor: Visitor<T>): T {
        return visitor.visit_module!(this);
    }

    enter(listener: Listener): void {
        listener.enter_module!(this);

        for (let v of this.items) {
            v.enter(listener);
        }
    }

    exit(listener: Listener): void {
        for (let v of this.items) {
            v.exit(listener);
        }

        listener.exit_module!(this);
    }
}
