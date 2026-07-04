import * as fs from "node:fs";
import path from "node:path";
import type { Manifest } from "../../struct/manifest.js";

export function init_project(dir: string) {
    fs.writeFileSync(
        path.resolve(dir, "manifest.json"),
        JSON.stringify({
            name: path.dirname(dir),
            description: "",
            version: "0.0.1",
            src_dir: "src",
            dist_dir: "dist",
            authors: [],
            cfg: {
                returns: {
                    slot: "first",
                    name: "ret"
                }
            }
        } as Manifest, undefined, 2)
    );
    fs.mkdirSync(
        path.resolve(dir, "src")
    );
    fs.mkdirSync(
        path.resolve(dir, "dist")
    );
    fs.writeFileSync(
        path.resolve(dir, "src", "main.df.oa"),
        "func hello() {\n    print 'Hello DF.oa!';\n}"
    )
}