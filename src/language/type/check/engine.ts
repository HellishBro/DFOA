import { Visitor } from "lang/ast/visitor.js";
import { Span } from "lang/utils/span.js";
import { TypeError } from "./error.js";
import { File } from "lang/table/table.js";
import { TypeTable } from "../type_table.js";
import { TypeID, TypeKind } from "../type.js";
import { FunctionType } from "../misc_builtins.js";

export class TypeEngine extends Visitor<void> {
    errors: TypeError[];

    constructor(
        public type_table: TypeTable,
        public file: File
    ) {
        super();
        this.errors = [];
    }

    push_error(span: Span, message: string) {
        this.errors.push({
            offending_span: span,
            message
        });
    }

    subtypes(a: TypeID, b: TypeID): boolean {
        if (a == b) return true;
        let a_ = this.type_table.get(a)!;
        let b_ = this.type_table.get(b)!;
        if (b_.kind == TypeKind.Any) return true;
        let coerce = a_.attribute("$coerce", this.type_table);
        if (coerce) {
            let out = (this.type_table.get(coerce)! as FunctionType).output;
            return this.subtypes(out, b); // recursion!!!
        }
        return false;
    }
}