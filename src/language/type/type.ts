import { BasicType, Type } from "./base.js";


export const ErrorType = new class ErrorType extends Type {
    constructor() {
        super(BasicType.Error);
    }
    describe(): undefined { return undefined; };
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
    subtypes(other: Type): boolean {
        return false;
    }
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
