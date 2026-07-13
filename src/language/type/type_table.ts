import { AnyType, ErrorType, FunctionType } from "./misc_builtins.js";
import { IntType, FloatType, BooleanType } from "./numerics.js";
import { StringType, TextType } from "./strings.js";
import { TypeID, TypeData } from "./type.js";

export class TypeTable {
    map: Map<TypeID, TypeData>;
    id: number;

    String: TypeID;
    Text: TypeID;
    Int: TypeID;
    Float: TypeID;
    Boolean: TypeID;
    Any: TypeID;
    Error: TypeID;
    
    default_methods_map: Map<string, TypeID>;

    constructor() {
        this.map = new Map();
        this.id = 0;

        this.String = this.reserve();
        this.Text = this.reserve();
        this.Int = this.reserve();
        this.Float = this.reserve();
        this.Boolean = this.reserve();

        this.set(this.String, new StringType());
        this.set(this.Text, new TextType());
        this.set(this.Int, new IntType());
        this.set(this.Float, new FloatType());
        this.set(this.Boolean, new BooleanType());
        
        this.Any = this.append(AnyType);
        this.Error = this.append(ErrorType);

        let eq = this.append(new FunctionType([this.Any], this.Boolean));

        this.default_methods_map = new Map([
            ["$eq", eq],
            ["$neq", eq]
        ]);
    }

    reserve(): TypeID {
        return this.id++ as TypeID;
    }

    set(id: TypeID, dat: TypeData): TypeID {
        this.map.set(id, dat);
        dat.post_init(this);
        return id;
    }

    append(dat: TypeData): TypeID {
        let id = this.id++ as TypeID;
        this.map.set(id, dat);
        dat.post_init(this);
        return id;
    }

    get(id: TypeID): TypeData | undefined {
        return this.map.get(id);
    }

    valid(id: TypeID): boolean {
        return this.map.get(id)?.valid(this) ?? false;
    }

    attribute(attr: string, id: TypeID): TypeID | undefined {
        let type = this.get(id);
        if (type == undefined) {
            return undefined;
        }

        return type.attribute(attr, this) ?? this.default_methods_map.get(attr);
    }
}

