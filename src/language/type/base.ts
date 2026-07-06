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

export class Type {
    constructor(public type: BasicType, public fields: { [name: string]: Type }) {}
    describe(): string | undefined { return undefined; };
    toString(): string { return this.describe() ?? `$type<${BasicType[this.type].toLowerCase()}>`; }

    peq(other: Type): boolean {
        if ([BasicType.String, BasicType.Text, BasicType.Integer, BasicType.Float, BasicType.Boolean, BasicType.Any].includes(other.type)) {
            return this.type == other.type;
        }
        return false;
    }

    list_like(): boolean {
        return this.type == BasicType.List || this.type == BasicType.Tuple;
    }

    string_like(): boolean {
        return this.type == BasicType.String || this.type == BasicType.Text;
    }

    number_like(): boolean {
        return this.type == BasicType.Integer || this.type == BasicType.Float;
    }

    is_unchecked(): boolean {
        return this.type == BasicType.Unchecked;
    }

    workable(): boolean {
        return this.type != BasicType.Error && this.type != BasicType.Function;
    }
}
