import { TypeData, TypeKind, TypeID } from "./type.js";
import { TypeTable } from "./type_table.js";

export const ErrorType = new class ErrorType extends TypeData {
    constructor() {
        super(TypeKind.Error);
    }

    repr(table: TypeTable): string { return "$error" }
    valid(table: TypeTable): boolean { return false }
    attribute(attr: string, table: TypeTable): TypeID | undefined { return undefined }
}

export const AnyType = new class AnyType extends TypeData {
    constructor() {
        super(TypeKind.Any);
    }

    repr(table: TypeTable): string { return "any" }
    valid(table: TypeTable): boolean { return true }
    attribute(attr: string, table: TypeTable): TypeID | undefined { return undefined }
}

export class FunctionType extends TypeData {
    constructor(public inputs: TypeID[], public output: TypeID) {
        super(TypeKind.Function);
    }

    repr(table: TypeTable): string {
        return `func(${this.inputs.map(id => table.get(id)!.repr(table)).join(", ")}): ${table.get(this.output)!.repr(table)}`
    }
    valid(table: TypeTable): boolean {
        return this.inputs.every(id => table.valid(id)) && table.valid(this.output)
    }
    attribute(attr: string, table: TypeTable): TypeID | undefined { return undefined }
}