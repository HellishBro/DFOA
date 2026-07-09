import * as fs from "node:fs";
import * as util from "node:util";

import { program } from "commander";
import { parse_fs } from "./parsers.js";
import { init_project } from "./tools/make_project.js";
import { gather_cst } from "lang/parser/gather_cst.js";
import CSTASTConverter from "lang/parser/convert/to_ast.js";

program.command("make")
    .description("Make and init a new df.oa project")
    .argument("[dir]", "directory to make the project in", parse_fs({
        file: false,
        directory: true,
        exists: false,
        empty: undefined
    }), ".")
    .action((dir: string) => {
        fs.mkdirSync(dir);
        init_project(dir);
    });

program.command("init")
    .description("Init a new df.oa project in an existing directory")
    .argument("[dir]", "directory to init the project in", parse_fs({
        file: false,
        directory: true,
        exists: true,
        empty: true
    }), ".")
    .action((dir: string) => {
        init_project(dir);
    });

program.command("parse")
    .description("Parse a single df.oa file and print its syntax tree")
    .argument("<file>", "file to parse", parse_fs({
        file: true,
        directory: false,
        exists: true
    }))
    .action((file: string) => {
        let {cst, pprint, tokens} = gather_cst(fs.readFileSync(file).toString(), true, true);
        console.log("Tokens:", tokens!);
        console.log("CST:", pprint!);
        let converter = new CSTASTConverter(file)
        let ast = converter.start(cst);
        console.log("AST:", util.inspect(ast, false, null, true));
        console.log("File:", util.inspect(converter.file, false, null, true));
    })

program.parse();