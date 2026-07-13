import { LiteralString, LiteralText, LiteralInteger, LiteralFloat, LiteralBoolean, BinOp, UnOp, Subscript, TupleSubscript, Attribute, FunctionCall, As, New, List, Tuple, Variable, Expression, BinaryOperators, UnaryOperators, Node, BasicType, TupleType, TypeVar } from "lang/ast/ast.js";
import { Listener } from "lang/ast/listener.js";
import { TypeEngine } from "./engine.js";
import { SymbolMap } from "../comp/symbol.js";
import { TypeID, TypeKind } from "../type.js";
import { TypeTable } from "../type_table.js";
import { FunctionType } from "../misc_builtins.js";
import { ListType, TupleType as TypeTupleType } from "../collections.js";

type HasType = Node & { type: TypeID | undefined };

export class TypeProcessor extends Listener {
    constructor(
        public local_symbol_table: SymbolMap,
        public type_table: TypeTable,
        public engine: TypeEngine
    ) {
        super();
    }

    $call_method(node: HasType, type: TypeID, method: string, operands: TypeID[]) {
        let method_type = this.type_table.attribute(method, type);
        if (method_type == undefined) {
            this.$assign_type(node, undefined, `cannot find attribute ${method} on ${
                this.type_table.get(type)!.repr(this.type_table)
            }`);
            return;
        }
        this.$call_function(node, method_type, operands);
    }

    $call_function(node: HasType, function_type_id: TypeID, operands: TypeID[]) {
        let ty = this.type_table.get(function_type_id)!;
        if (ty.kind != TypeKind.Function) {
            this.$assign_type(node, undefined, `cannot call ${ty.repr(this.type_table)}.`);
            return;
        }
        let inputs = (ty as FunctionType).inputs;
        if (operands.length != inputs.length) {
            this.$assign_type(node, undefined, `expected arity of ${inputs.length}; got ${operands.length}.`);
            return;
        }
        let type_counterexample_index = operands.findIndex((op, i) => !this.engine.subtypes(op, (ty as FunctionType).inputs[i]!));
        if (type_counterexample_index != -1) {
            this.$assign_type(node, undefined, `cannot convert type ${
                this.type_table.get(operands[type_counterexample_index]!)!.repr(this.type_table)
            } to type ${
                this.type_table.get((ty as FunctionType).inputs[type_counterexample_index]!)!.repr(this.type_table)
            }.`);
        }
        node.type = (ty as FunctionType).output;
    }

    $assign_type(node: HasType, type: TypeID | undefined, message: string) {
        if (type == this.type_table.Error || type == undefined) {
            if (type == undefined) {
                this.engine.push_error(
                    this.engine.file.spans.get(node.id)!,
                    message
                );
            }
            node.type = this.type_table.Error;
            return;
        }
        node.type = type!;
    }

    $guard_deps(node: HasType, deps: HasType[]): boolean {
        if (deps.some(e => e.type == undefined || e.type == this.type_table.Error)) {
            node.type = this.type_table.Error;
            return true;
        }
        return false;
    }


    exit_literal_string(literal_string: LiteralString): void {
        literal_string.type = this.type_table.String;
    }

    exit_literal_text(literal_text: LiteralText): void {
        literal_text.type = this.type_table.Text;
    }

    exit_literal_integer(literal_integer: LiteralInteger): void {
        literal_integer.type = this.type_table.Int;
    }

    exit_literal_float(literal_float: LiteralFloat): void {
        literal_float.type = this.type_table.Float;
    }

    exit_literal_boolean(literal_boolean: LiteralBoolean): void {
        literal_boolean.type = this.type_table.Boolean;
    }

    exit_bin_op(bin_op: BinOp): void {
        if (this.$guard_deps(bin_op, [bin_op.left, bin_op.right])) return;

        let func_name =
            bin_op.operator.op == BinaryOperators.ADD ? "$add" :
            bin_op.operator.op == BinaryOperators.SUB ? "$sub" :
            bin_op.operator.op == BinaryOperators.MULT ? "$mult" :
            bin_op.operator.op == BinaryOperators.DIV ? "$div" :
            bin_op.operator.op == BinaryOperators.EQ ? "$eq" :
            bin_op.operator.op == BinaryOperators.NEQ ? "$neq" :
            bin_op.operator.op == BinaryOperators.GT ? "$gt" :
            bin_op.operator.op == BinaryOperators.GE ? "$ge" :
            bin_op.operator.op == BinaryOperators.LE ? "$le" :
            bin_op.operator.op == BinaryOperators.LT ? "$lt" :
            bin_op.operator.op == BinaryOperators.AND ? "$and" :
            bin_op.operator.op == BinaryOperators.OR ? "$or" : undefined!;

        this.$call_method(bin_op, bin_op.left.type!, func_name, [bin_op.right.type!]);
    }

    exit_un_op(un_op: UnOp): void {
        if (this.$guard_deps(un_op, [un_op.operand])) return;

        let func_name =
            un_op.operator.op == UnaryOperators.NEG ? "$neg" :
            un_op.operator.op == UnaryOperators.NOT ? "$not" : undefined!;

        this.$call_method(un_op, un_op.operand.type!, func_name, []);
    }

    exit_subscript(subscript: Subscript): void {
        if (this.$guard_deps(subscript, [subscript.value, subscript.subscription])) return;

        this.$call_method(subscript, subscript.value.type!, "$index", [subscript.subscription.type!]);
    }

    exit_tuple_subscript(tuple_subscript: TupleSubscript): void {
        if (this.$guard_deps(tuple_subscript, [tuple_subscript.value])) return;

        let type = this.type_table.get(tuple_subscript.value.type!)!;
        if (type.kind == TypeKind.Tuple) {
            let items = (type as TypeTupleType).items;
            let index = tuple_subscript.index.value;
            this.$assign_type(tuple_subscript, items[index], `index ${index} out of bounds.`)
        }
        this.$assign_type(tuple_subscript, undefined, `cannot tuple index a ${type.repr(this.type_table)}`);
    }

    exit_attribute(attribute: Attribute): void {
        if (this.$guard_deps(attribute, [attribute.value])) return;

        let type = this.type_table.get(attribute.value.type!)!;
        this.$assign_type(
            attribute,
            this.type_table.attribute(attribute.attribute.name, attribute.value.type!),
            `cannot find attribute ${attribute.attribute.name} on ${type.repr(this.type_table)}`
        );
    }

    exit_function_call(function_call: FunctionCall): void {
        if (this.$guard_deps(function_call, [function_call.value, ...function_call.args])) return;

        this.$call_function(function_call, function_call.value.type!, function_call.args.map(e => e.type!));
    }

    exit_as(as_: As): void {
        if (this.$guard_deps(as_, [as_.value, as_.alias])) return;

        as_.type = as_.alias.type;
    }

    exit_new(new_: New): void {
        throw new Error("not implemented")
    }

    exit_list(list: List): void {
        if (this.$guard_deps(list, list.items)) return;

        let previous_type: TypeID | undefined;
        for (let element of list.items) {
            if (previous_type != undefined && element.type != previous_type) {
                previous_type = undefined;
                break;
            }
            previous_type = element.type;
        }

        list.type = this.type_table.append(
            new ListType(previous_type ?? this.type_table.Any)
        );
    }

    exit_tuple(tuple: Tuple): void {
        if (this.$guard_deps(tuple, tuple.items)) return;

        tuple.type = this.type_table.append(
            new TypeTupleType(tuple.items.map(e => e.type!))
        );
    }

    exit_variable(variable: Variable): void {
        this.$assign_type(
            variable,
            this.local_symbol_table.get(variable.name.name, variable.lifetime?.lifetime ?? null)?.type,
            `${variable.name} is not defined.`
        );
    }

    exit_basic_type(basic_type: BasicType): void {
        throw new Error("not implemented")
    }

    exit_tuple_type(tuple_type: TupleType): void {
        throw new Error("not implemented")
    }

    exit_type_var(type_var: TypeVar): void {
        throw new Error("not implemented")
    }
}