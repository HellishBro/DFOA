import * as fs from "node:fs";

import { program } from "commander";
import { parse_fs } from "./parsers.js";
import { init_project } from "./tools/make_project.js";

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
    })

program.parse();