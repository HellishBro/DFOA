import {
    Identifier,
    BasicType,
    TupleType,
    LiteralString,
    LiteralText,
    LiteralInteger,
    LiteralFloat,
    LiteralBoolean,
    BinOp,
    UnOp,
    Subscript,
    TupleSubscript,
    Attribute,
    FunctionCall,
    As,
    New,
    List,
    Tuple,
    Variable,
    Print,
    ExpressionStatement,
    If,
    For,
    While,
    Break,
    Continue,
    NoOp,
    Let,
    Assign,
    Return,
    Body,
    VarDecl,
    Func,
    TypeVar,
    Parameter,
    Signature,
    Module
} from "lang/ast/ast.js";

import { Node } from "lang/ast/ast.js";

export class Visitor<T> {
    visit(node: Node): T {
        return node.accept(this);
    }

    visit_identifier?(identifier: Identifier): T;
    visit_basic_type?(basic_type: BasicType): T;
    visit_tuple_type?(tuple_type: TupleType): T;
    visit_literal_string?(literal_string: LiteralString): T;
    visit_literal_text?(literal_text: LiteralText): T;
    visit_literal_integer?(literal_integer: LiteralInteger): T;
    visit_literal_float?(literal_float: LiteralFloat): T;
    visit_literal_boolean?(literal_boolean: LiteralBoolean): T;
    visit_bin_op?(bin_op: BinOp): T;
    visit_un_op?(un_op: UnOp): T;
    visit_subscript?(subscript: Subscript): T;
    visit_tuple_subscript?(tuple_subscript: TupleSubscript): T;
    visit_attribute?(attribute: Attribute): T;
    visit_function_call?(function_call: FunctionCall): T;
    visit_as?(as_: As): T;
    visit_new?(new_: New): T;
    visit_list?(list: List): T;
    visit_tuple?(tuple: Tuple): T;
    visit_variable?(variable: Variable): T;
    visit_print?(print: Print): T;
    visit_expression_statement?(expression_statement: ExpressionStatement): T;
    visit_if?(if_: If): T;
    visit_for?(for_: For): T;
    visit_while?(while_: While): T;
    visit_break?(break_: Break): T;
    visit_continue?(continue_: Continue): T;
    visit_no_op?(no_op: NoOp): T;
    visit_let?(let_: Let): T;
    visit_assign?(assign: Assign): T;
    visit_return?(return_: Return): T;
    visit_body?(body: Body): T;
    visit_var_decl?(var_decl: VarDecl): T;
    visit_func?(func: Func): T;
    visit_type_var?(type_var: TypeVar): T;
    visit_parameter?(parameter: Parameter): T;
    visit_signature?(signature: Signature): T;
    visit_module?(module: Module): T;
}
