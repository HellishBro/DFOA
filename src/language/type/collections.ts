import { FunctionType } from "./misc_builtins.js";
import { TypeData, TypeID, TypeKind } from "./type.js"
import { TypeTable } from "./type_table.js"

export class ListType extends TypeData {
    index_type?: TypeID;

    constructor(public item: TypeID) {
        super(TypeKind.List)
    }

    post_init(table: TypeTable): void {
        this.index_type = table.append(
            new FunctionType([table.Int], this.item)
        );
    }

    repr(table: TypeTable): string {
        return `list<${table.get(this.item)!.repr(table)}>`
    }
    valid(table: TypeTable): boolean {
        return table.valid(this.item)
    }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (attr == "$index") {
            return this.index_type;
        }
        if (attr == "length") {
            return table.Int;
        }
    }
}

export class DictionaryType extends TypeData {
    index_type?: TypeID;

    constructor(public item: TypeID) {
        super(TypeKind.Dictionary)
    }

    post_init(table: TypeTable): void {
        this.index_type = table.append(
            new FunctionType([table.String], this.item)
        );
    }

    repr(table: TypeTable): string {
        return `dict<${table.get(this.item)!.repr(table)}>`
    }
    valid(table: TypeTable): boolean {
        return table.valid(this.item)
    }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (attr == "$index") {
            return this.index_type;
        }
        if (attr == "length") {
            return table.Int;
        }
    }
}

export class TupleType extends TypeData {
    constructor(public items: TypeID[]) {
        super(TypeKind.Tuple)
    }

    repr(table: TypeTable): string {
        return `(${this.items.map(id => table.get(id)!.repr(table)).join(", ")})`
    }
    valid(table: TypeTable): boolean {
        return this.items.every(id => table.valid(id))
    }

    get length(): number {
        return this.items.length
    }

    attribute(attr: string, table: TypeTable): TypeID | undefined {
        if (attr == "length") {
            return table.Int;
        }
    }
}