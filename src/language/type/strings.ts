import { IntegerType } from "./numerics.js";
import { BasicType, Type } from "./base.js";

export const StringType = new class StringType extends Type {
    constructor() {
        super(BasicType.String, {
            length: IntegerType
        });
    }
    describe(): string { return "string"; };
};

export const TextType = new class TextType extends Type {
    constructor() {
        super(BasicType.Text, {
            length: IntegerType
        });
    }
    describe(): string { return "text"; }
};