import { Node, VariableLifetimes } from "lang/ast/ast.js";
import { TypeID } from "../base.js";

export let next_free_symbol = 0; // global state

export type SymbolID = number & {readonly $tag: unique symbol};

export class Symbol {
    constructor(
        public id: SymbolID,
        public name: string,
        public lifetime: VariableLifetimes | null,
        public definition: Node,
        public type: TypeID
    ) {}
}

export class SymbolMap {
    map: Map<SymbolID, Symbol>;
    
    constructor(
        public parent: SymbolMap | null
    ) {
        this.map = new Map();
    }

    enter(): SymbolMap {
        return new SymbolMap(this);
    }

    exit(): SymbolMap | null {
        return this.parent;
    }

    define(name: string, lifetime: VariableLifetimes | null, type: TypeID, definition: Node): Symbol {
        let sym = new Symbol(
            next_free_symbol++ as SymbolID,
            name,
            lifetime,
            definition,
            type
        );
        this.map.set(sym.id, sym);
        return sym;
    }

    $get(name: string, lifetime: VariableLifetimes | null): Symbol | undefined {
        return this.map.values().find(
            v => v.name == name && (lifetime == null ? true : v.lifetime)
        );
    }

    get(name: string, lifetime: VariableLifetimes | null): Symbol | undefined {
        let self_res = this.$get(name, lifetime);
        if (self_res == undefined && this.parent != null) {
            return this.parent.get(name, lifetime);
        }
        return self_res;
    }

    get_id(id: SymbolID): Symbol | undefined {
        return this.map.get(id) ?? this.parent?.get_id(id);
    }

    update(id: SymbolID, definition?: Node, type?: TypeID) {
        let sym = this.get_id(id);
        if (sym != undefined) {
            if (definition != undefined) {
                sym.definition = definition;
            }
            if (type != undefined) {
                sym.type = type;
            }
        }
    }
}