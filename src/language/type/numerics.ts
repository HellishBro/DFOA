import { BasicType, Type } from "./base.js";

export const IntegerType = new class IntegerType extends Type {
    constructor() {
        super(BasicType.Integer, {});
    }
    describe(): string { return "int"; }
};

export const FloatType = new class FloatType extends Type {
    constructor() {
        super(BasicType.Float, {});
    }
    describe(): string { return "float"; }
};

export const BooleanType = new class BooleanType extends Type {
    constructor() {
        super(BasicType.Boolean, {});
    }
    describe(): string { return "boolean"; }
};