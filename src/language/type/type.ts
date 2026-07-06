import { ListType, TupleType, DictionaryType } from "./collections.js";
import { FloatType } from "./numerics.js";
import { BasicType, Type } from "./base.js";


export class ErrorType extends Type {
    message: string | undefined;
    constructor(message: string | undefined, guards: Type[]) {
        super(BasicType.Error, {});
        if (guards.some(g => g.type == BasicType.Error)) {
            this.message = undefined;
        } else {
            this.message = message;
        }
    }
};

export class FunctionType extends Type {
    constructor(public name: string, public inputs: Type[], public output: Type) {
        super(BasicType.Function, {});
    }
    describe(): string { return `func ${this.name}`; }
}

export class MethodType extends FunctionType {
    constructor(public parent: Type, name: string, inputs: Type[], output: Type) {
        super(name, inputs, output);
    }
    describe(): string { return `func ${this.parent.describe()}.${this.name}` }
}

export const AnyType = new class AnyType extends Type {
    constructor() {
        super(BasicType.Any, {});
    }
    describe(): string { return "any"; }
};

export const UncheckedType = new class UncheckedType extends Type {
    constructor() {
        super(BasicType.Unchecked, {});
    }
    describe(): string { return "$unchecked"; }
}
