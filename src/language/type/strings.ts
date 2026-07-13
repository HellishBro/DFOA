import { FunctionType } from "./misc_builtins.js";
import { TypeData, TypeID, TypeKind } from "./type.js";
import { TypeTable } from "./type_table.js";

abstract class BaseStringType extends TypeData {
    method_concat?: TypeID;
    method_repeat?: TypeID;

    string_type?: TypeID;

    post_init(table: TypeTable): void {
        this.method_concat = table.append(new FunctionType(
            [this.string_type!], this.string_type!
        ));
        this.method_repeat = table.append(new FunctionType(
            [table.Int], this.string_type!
        ));
    }

    valid(table: TypeTable): boolean { return true }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (attr == "$add") {
            return this.method_concat!;
        }
        if (attr == "$mult") {
            return this.method_repeat!;
        }

        if (attr == "length") {
            return table.Int;
        }
    }
}

export class StringType extends BaseStringType {
    constructor() {
        super(TypeKind.String);
    }

    post_init(table: TypeTable): void {
        this.string_type = table.String;
        super.post_init(table);
    }

    repr(table: TypeTable): string { return "string" }
}

export class TextType extends BaseStringType {
    constructor() {
        super(TypeKind.Text);
    }

    post_init(table: TypeTable): void {
        this.string_type = table.Text;
        super.post_init(table);
    }

    repr(table: TypeTable): string { return "text" }
}