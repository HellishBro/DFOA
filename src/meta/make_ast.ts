import * as fs from "node:fs/promises";
import prettier from "prettier";
import { from_camel_pascal, to_snake } from "utils/case.js";

class FileRenderer {
    nodes: string[];
    visitor_methods: string[];
    listener_methods: string[];
    imports: string[];

    constructor() {
        this.nodes = [];
        this.visitor_methods = [];
        this.listener_methods = [];
        this.imports = [];
    }

    push_node(node: string) {
        this.nodes.push(node);
    }

    push_visitor(signature: string) {
        this.visitor_methods.push(signature);
    }

    push_listener(signatures: string[]) {
        this.listener_methods.push(...signatures);
    }

    push_import(symbol: string) {
        this.imports.push(symbol);
    }

    get_imports(): string {
        return `
        import { ${this.imports.join(", ")} } from "lang/ast/ast.js";
        `
    }

    get_visitor(): string {
        return `
        ${this.get_imports()}
        import { Node } from "lang/ast/ast.js";

        export class Visitor<T> {
            visit(node: Node): T {
                return node.accept(this);
            }

            ${this.visitor_methods.join("")}
        }
        `;
    }

    get_listener(): string {
        return `
        ${this.get_imports()}

        export class Listener {
            ${this.listener_methods.join("")}
        }
        `
    }

    get_code(): string {
        return this.nodes.join("");
    }
}

interface Field {
    name: string,
    type: string,

    $builder: {
        $array: boolean,
        $nullable: boolean,
        $can_hear: boolean
    }
}

function get_good_name(n: string, standalone: boolean): string {
    n = to_snake(from_camel_pascal(n));

    if ([
        "new", "as", "class", "if", "else", "for", "while", "break", "continue", "return", "let"
    ].includes(n) && standalone) {
        n += "_";
    }

    return n;
}

export class FieldBuilder {
    $type: string;
    $name: string;
    $array: boolean;
    $nullable: boolean;
    $can_hear: boolean

    $name_set: boolean;

    constructor(name: string, can_hear: boolean) {
        this.$type = name;
        this.$can_hear = can_hear;
        this.$name = get_good_name(name, true);
        this.$array = false;
        this.$nullable = false;
        this.$name_set = false;
    }

    array(): FieldBuilder {
        this.$array = true;
        return this;
    }

    nullable(): FieldBuilder {
        this.$nullable = true;
        return this;
    }

    name(name: string): FieldBuilder {
        this.$name = name;
        this.$name_set = true;
        return this
    }

    $refine_type(type: string): string {
        if (this.$array) {
            type = type + "[]";
        }
        if (this.$nullable) {
            type = type + " | null";
        }
        return type;
    }

    $get_name(): string {
        return this.$name + (this.$array && !this.$name_set ? 's' : '');
    }

    build(): Field {
        return {
            name: this.$get_name(),
            type: this.$refine_type(this.$type),
            $builder: this
        };
    }

    with_type(type: string): FieldBuilder {
        this.$type = type;
        return this;
    }
}

function generate_listener_field(f: Field, meth: string, v?: string): string {
    if (!f.$builder.$can_hear) return "";

    v = v ?? `this.${f.name}`;

    if (f.$builder.$nullable) {
        return `if (${v} != null) {
            ${generate_listener_field({
                ...f,
                $builder: {
                    ...f.$builder,
                    $nullable: false
                }
            }, meth)}
        }`;
    }
    if (f.$builder.$array) {
        return `for (let v of ${v}) {
            ${generate_listener_field({
                ...f,
                $builder: {
                    ...f.$builder,
                    $array: false
                }
            }, meth, "v")}
        }`;
    }
    return `${v}.${meth}(listener);`
}

class Node {
    constructor(
        public name: string,
        public fields: Field[],
        public children: Node[],
        public flags: number
    ) {}

    field(): FieldBuilder {
        return new FieldBuilder(this.name, true);
    }

    add(child: Node): Node {
        this.children.push(child);
        return child;
    }

    $render_children(renderer: FileRenderer, parent_fields: Field[]) {
        for (let child of this.children) {
            child.render(renderer, this.name, [...this.fields, ...parent_fields]);
        }
    }

    render(renderer: FileRenderer, parent_name: string, parent_fields: Field[]) {
        let good_name = get_good_name(this.name, false);
        let good_name_ = get_good_name(this.name, true);
        let then_dont_hear = (this.flags & prefer_not_to_hear) == prefer_not_to_hear;

        if (this.children.length == 0 && !then_dont_hear) {
            renderer.push_visitor(`visit_${good_name}?(${good_name_}: ${this.name}): T;`);
            renderer.push_listener([
                `enter_${good_name}?(${good_name_}: ${this.name}): void;`,
                `exit_${good_name}?(${good_name_}: ${this.name}): void;`
            ]);
            renderer.push_import(this.name);
        }

        let but_i_wanna_see = `throw new Error("please do not see me -${this.name}");`;
        let but_i_wanna_hear = `throw new Error("please do not hear me -${this.name}");`

        renderer.push_node(
            `
            export ${this.children.length != 0 ? 'abstract' : ''} class ${this.name} extends ${parent_name} {
                constructor(${
                    [
                        ...this.fields.map(f => `public ${f.name}: ${f.type}`),
                        ...parent_fields.map(f => `${f.name}: ${f.type}`)
                    ].join(", ")
                }) {
                    super(${parent_fields.map(f => f.name).join(", ")});
                }
            
                ${this.children.length == 0 ?
                    `
                    accept<T>(visitor: Visitor<T>): T {
                        ${
                            !then_dont_hear ?
                                `return visitor.visit_${good_name}!(this);` :
                                but_i_wanna_see
                        }
                    }

                    enter(listener: Listener): void {
                        ${
                            !then_dont_hear ?
                                `
                                listener.enter_${good_name}!(this);

                                ${
                                    this.fields.map(f => generate_listener_field(f, "enter")).join("")
                                }
                                ` :
                                but_i_wanna_hear
                        }
                        
                    }

                    exit(listener: Listener): void {
                        ${
                            !then_dont_hear ?
                                `
                                ${
                                    this.fields.map(f => generate_listener_field(f, "exit")).join("")
                                }

                                listener.exit_${good_name}!(this);
                                ` :
                                but_i_wanna_hear
                        }
                        
                    }
                    ` : ``
                }
            }
            `
        );

        this.$render_children(renderer, parent_fields);
    }
}

export const prefer_not_to_hear = 1;

export function node(name: string, fields: FieldBuilder[], flags: number = 0): Node {
    return new Node(name, fields.map(f => f.build()), [], flags);
}

export const BaseNode = new class extends Node {
    constructor() {
        super("Node", [{
            name: "span",
            type: "Span",

            $builder: {
                $array: false,
                $nullable: false,
                $can_hear: false
            }
        }], [], 0)
    }

    render(renderer: FileRenderer) {
        renderer.push_node(
            `
                export abstract class Node {
                    id: NodeID;
                
                    constructor(span: Span) {
                        this.id = current_file_context.register_node(this, span);
                    }
                
                    abstract accept<T>(visitor: Visitor<T>): T;
                    abstract enter(listener: Listener): void;
                    abstract exit(listener: Listener): void;
                }
            `
        );

        this.$render_children(renderer, []);
    }
};

export const String = {
    field: () => new FieldBuilder("string", false)
}

export const Number = {
    field: () => new FieldBuilder("number", false)
}

export const Boolean = {
    field: () => new FieldBuilder("boolean", false)
}

export const Type = {
    field: () => new FieldBuilder("Type", false)
}

const preamble = `
import { Span } from "lang/utils/span.js";
import { Type } from "lang/type/base.js";
import { NodeID } from "lang/table/table.js";
import { current_file_context } from "./ast_file_context.js";
import { Visitor } from "./visitor.js";
import { Listener } from "./listener.js";

export enum BinaryOperators {
    ADD = "+",
    SUB = "-",
    MULT = "*",
    DIV = "/",
    AND = "and",
    OR = "or",
    EQ = "==",
    NEQ = "!=",
    LE = "<=",
    GE = ">=",
    LT = "<",
    GT = ">"
}

export enum UnaryOperators {
    NEG = "-",
    NOT = "not"
}

export enum VariableLifetimes {
    GLOBAL = "global",
    PERSISTENT = "saved",
    LOCAL = "local",
    LINE = "line"
}
`;

async function format(code: string): Promise<string> {
    return await prettier.format(code, {
        trailingComma: "none",
        parser: "babel-ts",
        tabWidth: 4
    });
}

export async function render() {
    let renderer = new FileRenderer();

    BaseNode.render(renderer);

    console.log("Writing to ast.ts...");
    await fs.writeFile(
        "src/language/ast/ast.ts",
        await format(preamble + renderer.get_code())
    );

    console.log("Writing to listener.ts...");
    await fs.writeFile(
        "src/language/ast/listener.ts",
        await format(renderer.get_listener())
    );

    console.log("Writing to visitor.ts...");
    await fs.writeFile(
        "src/language/ast/visitor.ts",
        await format(renderer.get_visitor())
    );

    console.log("Done!");
}