import { Type, BasicType } from "./base.js";

export class ListType extends Type {
    constructor(public value: Type) {
        super(BasicType.List);
    }
    describe(): string { return `list<${this.value.describe()}>`; }
    subtypes(other: Type): boolean {
        if (other.type == BasicType.List) {
            return this.value.subtypes((other as ListType).value);
        }
        return super.subtypes(other);
    }
}

export class DictionaryType extends Type {
    constructor(public value: Type) {
        super(BasicType.Dictionary);
    }
    describe(): string { return `dict<${this.value.describe()}>`; }
    subtypes(other: Type): boolean {
        if (other.type == BasicType.Dictionary) {
            return this.value.subtypes((other as DictionaryType).value);
        }
        return super.subtypes(other);
    }
}

export class TupleType extends Type {
    constructor(public values: Type[]) {
        super(BasicType.Tuple);
    }
    describe(): string { return `(${this.values.map(v => v.describe()).join(", ")})`; }
    subtypes(other: Type): boolean {
        if (other.type == BasicType.Tuple && (other as TupleType).values.length == this.values.length) {
            return this.values.every((v, i) => v.subtypes((other as TupleType).values[i]!));
        }
        if (other.type == BasicType.List && this.values.every(v => v.subtypes((other as ListType).value))) {
            return true;
        }
        return super.subtypes(other);
    }
}