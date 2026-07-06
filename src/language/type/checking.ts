import { BinaryOperators, UnaryOperators } from "lang/ast/expressions.js";
import { TupleType, ListType, DictionaryType } from "./collections.js";
import { IntegerType, FloatType, BooleanType } from "./numerics.js";
import { TextType, StringType } from "./strings.js";
import { ErrorType, AnyType, FunctionType } from "./type.js";
import { Type } from "./base.js";

export function isinstance(value_type: Type, parent_type: Type): boolean {
    if (!value_type.workable()) {
        return false;
    }
    if (parent_type.peq(AnyType)) {
        return true;
    }
    if (value_type.number_like() && parent_type.peq(FloatType)) {
        return true;
    }
    if (value_type instanceof ListType && parent_type instanceof ListType) {
        return isinstance(value_type.value, parent_type.value);
    }
    if (value_type instanceof TupleType && parent_type instanceof TupleType) {
        if (value_type.values.length == parent_type.values.length) {
            return value_type.values.every((v, i) => isinstance(v, parent_type.values[i]!));
        }
        return false;
    }
    if (value_type instanceof DictionaryType && parent_type instanceof DictionaryType) {
        return isinstance(value_type.value, parent_type.value);
    }
    return false;
}


export function binop_result(left: Type, operator: BinaryOperators, right: Type): Type {
    if (left instanceof ErrorType || right instanceof ErrorType) {
        return new ErrorType(undefined, []);
    }
    if (left.number_like() && right.number_like()) {
        if ([BinaryOperators.ADD, BinaryOperators.SUB, BinaryOperators.MULT].includes(operator)) {
            if (left.peq(IntegerType) && right.peq(IntegerType)) {
                return IntegerType;
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
    if (left.list_like() && right.list_like() && operator == BinaryOperators.ADD) {
        if (left instanceof TupleType && right instanceof TupleType) {
            return new TupleType([...left.values, ...right.values]);
        }
        if (left instanceof ListType && right instanceof ListType && left.value == right.value) {
            return new ListType(left.value);
        }
        return new ListType(AnyType);
    }
    if (left.string_like() && right.peq(IntegerType) && operator == BinaryOperators.MULT) {
        return left;
    }
    if (left.string_like() && right.string_like() && operator == BinaryOperators.ADD) {
        if (left.peq(right)) {
            return left;
        }
        return TextType;
    }
    if (left.peq(BooleanType) && right.peq(BooleanType)) {
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
    if (operand.number_like() && operator == UnaryOperators.NEG) {
        return operand;
    }
    if (operand.peq(BooleanType) && operator == UnaryOperators.NOT) {
        return BooleanType;
    }
    return new ErrorType(`cannot use ${operator} ${operand.describe()}`, [operand]);
}

export function subscript_result(left: Type, subscript: Type): Type {
    if (left instanceof ListType && subscript.peq(IntegerType)) {
        return left.value;
    }
    if (left instanceof DictionaryType && subscript.peq(StringType)) {
        return left.value;
    }
    if (left.peq(StringType) && subscript.peq(IntegerType)) {
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

export function attribute_result(left: Type, attribute: string): Type {
    if (attribute in left.fields) {
        return left.fields[attribute]!;
    }
    return new ErrorType(`cannot access attribute ${left.describe()}.${attribute}`, [left]);
}

export function function_call(func_type: Type, args: Type[]): Type {
    if (func_type instanceof FunctionType) {
        let inp = new TupleType(args);
        if (isinstance(inp, new TupleType(func_type.inputs))) {
            return func_type.output;
        }
        return new ErrorType(`${func_type.describe()} cannot take in ${inp.describe()}`, []);
    }
    return new ErrorType(`cannot call ${func_type.describe()}`, [func_type]);
}
