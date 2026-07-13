import { FunctionType } from "./misc_builtins.js";
import { TypeData, TypeID, TypeKind } from "./type.js";
import { TypeTable } from "./type_table.js";

abstract class NumericalType extends TypeData {
    method_ord?: TypeID;
    method_un?: TypeID;
    method_bin?: TypeID;

    numerical_type?: TypeID;

    post_init(table: TypeTable) {
        this.method_ord = table.append(
            new FunctionType([this.numerical_type!], table.Boolean)
        );
        this.method_un = table.append(
            new FunctionType([], this.numerical_type!)
        );
        this.method_bin = table.append(
            new FunctionType([this.numerical_type!], this.numerical_type!)
        );
    }

    valid(table: TypeTable): boolean { return true }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (["$lt", "$le", "$gt", "$ge"].includes(attr)) {
            return this.method_ord!;
        }
        if (attr == "$neg") {
            return this.method_un!;
        }
        if (["$add", "$sub", "$mult"].includes(attr)) { // the set of integers is not closed under division
            return this.method_bin!;
        }
    }
}

export class IntType extends NumericalType {
    division?: TypeID;

    constructor() {
        super(TypeKind.Integer);
    }

    post_init(table: TypeTable): void {
        this.numerical_type = table.Int;
        super.post_init(table);
        this.division = table.append(
            new FunctionType([table.Float], table.Float)
        );
    }

    repr(table: TypeTable): string { return "int" }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        let res = super.attribute(attr, table);
        if (res) return res;

        if (attr == "$div") {
            return this.division!;
        }
    }
}

export class FloatType extends NumericalType {
    division?: TypeID;

    constructor() {
        super(TypeKind.Float);
    }

    post_init(table: TypeTable): void {
        this.numerical_type = table.Float;
        super.post_init(table);
        this.division = table.append(
            new FunctionType([table.Float], table.Float)
        );
    }

    repr(table: TypeTable): string { return "float" }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        let res = super.attribute(attr, table);
        if (res) return res;

        if (attr == "$div") {
            return this.division!;
        }
    }
}

export class BooleanType extends TypeData {
    method_bool_op?: TypeID;
    method_bool_un?: TypeID;

    constructor() {
        super(TypeKind.Boolean);
    }

    post_init(table: TypeTable) {
        this.method_bool_op = table.append(
            new FunctionType([table.Boolean], table.Boolean)
        );
        this.method_bool_un = table.append(
            new FunctionType([], table.Boolean)
        );
    }

    repr(table: TypeTable): string { return "boolean" }
    valid(table: TypeTable): boolean { return true }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (["$and", "$or"].includes(attr)) {
            return this.method_bool_op!;
        }
        if (attr == "$not") {
            return this.method_bool_un!;
        }
    }
}