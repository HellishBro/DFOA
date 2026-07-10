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

export class Listener {
    enter_identifier?(identifier: Identifier): void;
    exit_identifier?(identifier: Identifier): void;
    enter_basic_type?(basic_type: BasicType): void;
    exit_basic_type?(basic_type: BasicType): void;
    enter_tuple_type?(tuple_type: TupleType): void;
    exit_tuple_type?(tuple_type: TupleType): void;
    enter_literal_string?(literal_string: LiteralString): void;
    exit_literal_string?(literal_string: LiteralString): void;
    enter_literal_text?(literal_text: LiteralText): void;
    exit_literal_text?(literal_text: LiteralText): void;
    enter_literal_integer?(literal_integer: LiteralInteger): void;
    exit_literal_integer?(literal_integer: LiteralInteger): void;
    enter_literal_float?(literal_float: LiteralFloat): void;
    exit_literal_float?(literal_float: LiteralFloat): void;
    enter_literal_boolean?(literal_boolean: LiteralBoolean): void;
    exit_literal_boolean?(literal_boolean: LiteralBoolean): void;
    enter_bin_op?(bin_op: BinOp): void;
    exit_bin_op?(bin_op: BinOp): void;
    enter_un_op?(un_op: UnOp): void;
    exit_un_op?(un_op: UnOp): void;
    enter_subscript?(subscript: Subscript): void;
    exit_subscript?(subscript: Subscript): void;
    enter_tuple_subscript?(tuple_subscript: TupleSubscript): void;
    exit_tuple_subscript?(tuple_subscript: TupleSubscript): void;
    enter_attribute?(attribute: Attribute): void;
    exit_attribute?(attribute: Attribute): void;
    enter_function_call?(function_call: FunctionCall): void;
    exit_function_call?(function_call: FunctionCall): void;
    enter_as?(as_: As): void;
    exit_as?(as_: As): void;
    enter_new?(new_: New): void;
    exit_new?(new_: New): void;
    enter_list?(list: List): void;
    exit_list?(list: List): void;
    enter_tuple?(tuple: Tuple): void;
    exit_tuple?(tuple: Tuple): void;
    enter_variable?(variable: Variable): void;
    exit_variable?(variable: Variable): void;
    enter_print?(print: Print): void;
    exit_print?(print: Print): void;
    enter_expression_statement?(
        expression_statement: ExpressionStatement
    ): void;
    exit_expression_statement?(expression_statement: ExpressionStatement): void;
    enter_if?(if_: If): void;
    exit_if?(if_: If): void;
    enter_for?(for_: For): void;
    exit_for?(for_: For): void;
    enter_while?(while_: While): void;
    exit_while?(while_: While): void;
    enter_break?(break_: Break): void;
    exit_break?(break_: Break): void;
    enter_continue?(continue_: Continue): void;
    exit_continue?(continue_: Continue): void;
    enter_no_op?(no_op: NoOp): void;
    exit_no_op?(no_op: NoOp): void;
    enter_let?(let_: Let): void;
    exit_let?(let_: Let): void;
    enter_assign?(assign: Assign): void;
    exit_assign?(assign: Assign): void;
    enter_return?(return_: Return): void;
    exit_return?(return_: Return): void;
    enter_body?(body: Body): void;
    exit_body?(body: Body): void;
    enter_var_decl?(var_decl: VarDecl): void;
    exit_var_decl?(var_decl: VarDecl): void;
    enter_func?(func: Func): void;
    exit_func?(func: Func): void;
    enter_type_var?(type_var: TypeVar): void;
    exit_type_var?(type_var: TypeVar): void;
    enter_parameter?(parameter: Parameter): void;
    exit_parameter?(parameter: Parameter): void;
    enter_signature?(signature: Signature): void;
    exit_signature?(signature: Signature): void;
    enter_module?(module: Module): void;
    exit_module?(module: Module): void;
}
