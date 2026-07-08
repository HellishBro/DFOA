import { BasicType, Type } from "./base.js";

export const StringType = new class StringType extends Type {
    constructor() {
        super(BasicType.String);
    }
    describe(): string { return "string"; };
    subtypes(other: Type): boolean {
        if (other.type == BasicType.Text) return true;
        return super.subtypes(other);
    }
};

export const TextType = new class TextType extends Type {
    constructor() {
        super(BasicType.Text);
    }
    describe(): string { return "text"; }
};