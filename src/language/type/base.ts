export enum BasicType {
    String,
    Text,
    Integer,
    Float,
    Boolean,
    List,
    Dictionary,
    Tuple,
    Any,
    Function,
    Unchecked,
    Error
}

export const PrimitiveTypes = [
    BasicType.String,
    BasicType.Text,
    BasicType.Integer,
    BasicType.Float,
    BasicType.Boolean
];

export abstract class Type {
    type: BasicType;
    constructor(type: BasicType) { this.type = type; }

    abstract describe(): string | undefined;
    toString(): string { return this.describe() ?? `$type<${BasicType[this.type].toLowerCase()}>`; }

    subtypes(other: Type): boolean {
        if (this.type == other.type && PrimitiveTypes.includes(this.type)) return true;
        if (other.type == BasicType.Any) return true;
        return false;
    }

    workable(): boolean {
        return this.type != BasicType.Error && this.type != BasicType.Function && this.type != BasicType.Unchecked;
    }

    equals(other: Type): boolean {
        return this.type == other.type && PrimitiveTypes.includes(this.type);
    }
}
