import { BasicType, Type } from "./base.js";


export class ErrorType extends Type {
    message: string | undefined;
    constructor(message: string | undefined, guards: Type[]) {
        super(BasicType.Error);
        if (guards.some(g => g.type == BasicType.Error)) {
            this.message = undefined;
        } else {
            this.message = message;
        }
    }
    describe(): string | undefined { return undefined; };
    subtypes(other: Type): boolean {
        return false;
    }
};

export class FunctionType extends Type {
    constructor(public name: string, public inputs: Type[], public output: Type) {
        super(BasicType.Function);
    }
    describe(): string { return `func ${this.name}`; }
    subtypes(other: Type): boolean {
        if (other.type == BasicType.Function && (other as FunctionType).inputs.length == this.inputs.length) {
            return this.inputs.every((v, i) => v.subtypes((other as FunctionType).inputs[i]!)) && (other as FunctionType).output.subtypes(this.output);
        }
        return super.subtypes(other);
    }
}

export const AnyType = new class AnyType extends Type {
    constructor() {
        super(BasicType.Any);
    }
    describe(): string { return "any"; }
};

export const UncheckedType = new class UncheckedType extends Type {
    constructor() {
        super(BasicType.Unchecked);
    }
    describe(): string { return "$unchecked"; }
    subtypes(other: Type): boolean {
        return false;
    }
}
