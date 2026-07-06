import { IntegerType } from "./numerics.js";
import { Type, BasicType } from "./base.js";

export class ListType extends Type {
    constructor(public value: Type) {
        super(BasicType.List, {
            length: IntegerType
        });
    }
    describe(): string { return `list<${this.value.describe()}>`; }
}

export class DictionaryType extends Type {
    constructor(public value: Type) {
        super(BasicType.Dictionary, {
            length: IntegerType
        });
    }
    describe(): string { return `dict<${this.value.describe()}>`; }
}

export class TupleType extends Type {
    constructor(public values: Type[]) {
        super(BasicType.Tuple, {});
    }
    describe(): string { return `(${this.values.map(v => v.describe()).join(", ")})`; }
}