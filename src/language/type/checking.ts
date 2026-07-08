import { BinaryOperators, UnaryOperators } from "lang/ast/expressions.js";
import { TupleType, ListType, DictionaryType } from "./collections.js";
import { IntegerType, FloatType, BooleanType } from "./numerics.js";
import { TextType, StringType } from "./strings.js";
import { ErrorType, AnyType, FunctionType } from "./type.js";
import { BasicType, Type } from "./base.js";


export function binop_result(left: Type, operator: BinaryOperators, right: Type): Type {
    if (left instanceof ErrorType || right instanceof ErrorType) {
        return new ErrorType(undefined, []);
    }

    if (left.subtypes(FloatType) && right.subtypes(FloatType)) {
        if ([BinaryOperators.ADD, BinaryOperators.SUB, BinaryOperators.MULT].includes(operator)) {
            if (left.equals(IntegerType) && left.equals(IntegerType)) {
                return left;
            }
            return FloatType;
        }
        if (operator == BinaryOperators.DIV) {
            return FloatType;
        }
        if ([BinaryOperators.GE, BinaryOperators.LE, BinaryOperators.GT, BinaryOperators.LT].includes(operator)) {
            return BooleanType;
        }
    }

    if (
        [BasicType.List, BasicType.Tuple].includes(left.type) &&
        [BasicType.List, BasicType.Tuple].includes(right.type) &&
        operator == BinaryOperators.ADD
    ) {
        if (left instanceof TupleType && right instanceof TupleType) {
            return new TupleType([...left.values, ...right.values]);
        }
        if (left instanceof ListType && right instanceof ListType && left.value == right.value) {
            return new ListType(left.value);
        }
        return new ListType(AnyType);
    }

    if (left.subtypes(TextType) && right.equals(IntegerType) && operator == BinaryOperators.MULT) {
        return left;
    }

    if (left.subtypes(TextType) && right.subtypes(TextType) && operator == BinaryOperators.ADD) {
        if (left.equals(right)) {
            return left;
        }
        return TextType;
    }

    if (left.equals(BooleanType) && right.equals(BooleanType)) {
        if ([BinaryOperators.OR, BinaryOperators.AND].includes(operator)) {
            return BooleanType;
        }
    }

    if ([BinaryOperators.EQ, BinaryOperators.NEQ].includes(operator)) {
        return BooleanType;
    }

    return new ErrorType(`cannot use ${left.describe()} ${operator} ${right.describe()}`, [left, right]);
}

export function unop_result(operator: UnaryOperators, operand: Type): Type {
    if (operand.subtypes(FloatType) && operator == UnaryOperators.NEG) {
        return operand;
    }
    if (operand.equals(BooleanType) && operator == UnaryOperators.NOT) {
        return BooleanType;
    }
    return new ErrorType(`cannot use ${operator} ${operand.describe()}`, [operand]);
}

export function subscript_result(left: Type, subscript: Type): Type {
    if (left instanceof ListType && subscript.equals(IntegerType)) {
        return left.value;
    }
    if (left instanceof DictionaryType && subscript.equals(StringType)) {
        return left.value;
    }
    if (left.equals(StringType) && subscript.equals(IntegerType)) {
        return StringType;
    }
    return new ErrorType(`cannot use ${left.describe()}[${subscript.describe()}]`, [left, subscript]);
}

export function tuple_access_result(left: Type, index: number): Type {
    if (left instanceof TupleType && index % 1 == 0) {
        if (index < left.values.length) {
            return left.values[index]!;
        }
        return new ErrorType(`cannot index a tuple with a float`, [left]);
    }
    return new ErrorType(`cannot access attribute ${left.describe()}.${index}`, [left]);
}

export function attribute_result(left: Type, attribute: string): Type { // FIXME
    if (attribute in left.fields) {
        return left.fields[attribute]!;
    }
    return new ErrorType(`cannot access attribute ${left.describe()}.${attribute}`, [left]);
}

export function function_call(func_type: Type, args: Type[]): Type {
    if (func_type instanceof FunctionType) {
        let inp = new TupleType(args);
        if (inp.subtypes(new TupleType(func_type.inputs))) {
            return func_type.output;
        }
        return new ErrorType(`${func_type.describe()} cannot take in ${inp.describe()}`, []);
    }
    return new ErrorType(`cannot call ${func_type.describe()}`, [func_type]);
}
