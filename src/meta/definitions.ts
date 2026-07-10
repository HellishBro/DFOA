import { BaseNode, String, Number, Boolean, Type, node, render, FieldBuilder, prefer_not_to_hear } from "./make_ast.js";

const Identifier = BaseNode.add(node("Identifier", [
    String.field().name("name")
]));

namespace Types {
    export const TypeNode = BaseNode.add(node("TypeNode", [Type.field()]));

    const BasicType = TypeNode.add(node("BasicType", [
        Identifier.field().name("name"),
        TypeNode.field().array().name("args")
    ]));

    const TupleType = TypeNode.add(node("TupleType", [
        TypeNode.field().array().name("items")
    ]));
}


namespace Expressions {
    export const Expr = BaseNode.add(node("Expression", [Type.field()]));

    const LiteralString = Expr.add(node("LiteralString", [
        String.field().name("value")
    ]));

    const LiteralText = Expr.add(node("LiteralText", [
        String.field().name("value")
    ]));

    const LiteralInteger = Expr.add(node("LiteralInteger", [
        Number.field().name("value")
    ]));

    const LiteralFloat = Expr.add(node("LiteralFloat", [
        Number.field().name("value")
    ]));

    const LiteralBoolean = Expr.add(node("LiteralBoolean", [
        Boolean.field().name("value")
    ]));


    const Operator = BaseNode.add(node("Operator<Ops>", [
        new FieldBuilder("Ops", false).name("op")
    ], prefer_not_to_hear));

    const BinOp = Expr.add(node("BinOp", [
        Expr.field().name("left"),
        new FieldBuilder("Operator", false).with_type("Operator<BinaryOperators>"),
        Expr.field().name("right")
    ]));

    const UnOp = Expr.add(node("UnOp", [
        new FieldBuilder("Operator", false).with_type("Operator<UnaryOperators>"),
        Expr.field().name("operand")
    ]));


    const Subscript = Expr.add(node("Subscript", [
        Expr.field().name("value"),
        Expr.field().name("subscription")
    ]));

    const TupleSubscript = Expr.add(node("TupleSubscript", [
        Expr.field().name("value"),
        LiteralInteger.field().name("index")
    ]));

    const Attribute = Expr.add(node("Attribute", [
        Expr.field().name("value"),
        Identifier.field().name("attribute")
    ]));

    const FunctionCall = Expr.add(node("FunctionCall", [
        Expr.field().name("value"),
        Expr.field().array().name("args"),
        Types.TypeNode.field().array().name("generics")
    ]));

    const As = Expr.add(node("As", [
        Expr.field().name("value"),
        Types.TypeNode.field().name("alias")
    ]));

    const New = Expr.add(node("New", [
        Expr.field().name("value"),
        Expr.field().array().name("args"),
        Types.TypeNode.field().array().name("generics")
    ]));

    
    const List = Expr.add(node("List", [
        Expr.field().array().name("items")
    ]));

    const Tuple = Expr.add(node("Tuple", [
        Expr.field().array().name("items")
    ]));


    const VariableLifetime = BaseNode.add(node("VariableLifetime", [
        new FieldBuilder("VariableLifetimes", false).name("lifetime")
    ], prefer_not_to_hear));

    export const Variable = Expr.add(node("Variable", [
        Identifier.field().name("name"),
        VariableLifetime.field().nullable().name("lifetime")
    ]));
}


namespace Statements {
    export const Statement = BaseNode.add(node("Statement", []));

    export const Body = BaseNode.add(node("Body", [
        Statement.field().array()
    ]));

    const VarDecl = BaseNode.add(node("VarDecl", [
        Expressions.Variable.field(),
        Types.TypeNode.field().nullable().name("type")
    ]));


    const Print = Statement.add(node("Print", [
        Expressions.Expr.field()
    ]));

    const ExpressionStatement = Statement.add(node("ExpressionStatement", [
        Expressions.Expr.field()
    ]));

    const If = Statement.add(node("If", [
        Expressions.Expr.field(),
        Body.field().name("if_true"),
        Body.field().nullable().name("if_false")
    ]));

    const For = Statement.add(node("For", [
        VarDecl.field().array().name("variables"),
        Expressions.Expr.field(),
        Body.field()
    ]));

    const While = Statement.add(node("While", [
        Expressions.Expr.field(),
        Body.field()
    ]));

    const Break = Statement.add(node("Break", []));
    const Continue = Statement.add(node("Continue", []));
    const NoOp = Statement.add(node("NoOp", []));

    const Let = Statement.add(node("Let", [
        VarDecl.field().array().name("lhs"),
        Expressions.Expr.field().nullable().name("rhs")
    ]));

    const Assign = Statement.add(node("Assign", [
        VarDecl.field().name("lhs"),
        Expressions.Expr.field().name("rhs")
    ]));

    const Return = Statement.add(node("Return", [
        Expressions.Expr.field().nullable()
    ]));
}


namespace TopLevels {
    export const TopLevel = BaseNode.add(node("TopLevel", []));

    const TypeVar = BaseNode.add(node("TypeVar", [
        Identifier.field().name("name")
    ]));

    const Parameter = BaseNode.add(node("Parameter", [
        Identifier.field().name("name"),
        Types.TypeNode.field().nullable().name("type")
    ]))

    const Signature = BaseNode.add(node("Signature", [
        TypeVar.field().array(),
        Parameter.field().array(),
        Types.TypeNode.field().nullable().name("returns")
    ]));

    const Func = TopLevel.add(node("Func", [
        Identifier.field().name("name"),
        Signature.field(),
        Statements.Body.field()
    ]));
}


const Module = BaseNode.add(node("Module", [
    String.field().name("filename"),
    TopLevels.TopLevel.field().array().name("items")
]));


render().then(() => {});