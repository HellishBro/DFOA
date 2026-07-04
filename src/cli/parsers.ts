import { InvalidArgumentError } from "commander";
import * as fs from "node:fs";

interface ParseFsOptions {
    file?: boolean,
    directory?: boolean,
    exists?: boolean | undefined,
    empty?: boolean | undefined,
}

export function parse_fs(options?: ParseFsOptions): (value: string) => string {
    let opts = {
        file: options?.file ?? false,
        directory: options?.directory ?? false,
        exists: options?.exists ?? undefined,
        empty: options?.empty ?? undefined,
    };

    return (value: string) => {
        let exists = fs.existsSync(value);

        if (exists && opts.exists == false) {
            throw new InvalidArgumentError(`requires ${value} not to be existing.`);
        }
        if (opts.exists != false) {
            if (exists) {
                let stat = fs.lstatSync(value);
                let is_directory = stat.isDirectory();

                if (opts.file && !stat.isFile()) {
                    throw new InvalidArgumentError(`${value} is not a file.`);
                }

                if (opts.directory && !is_directory) {
                    throw new InvalidArgumentError(`${value} is not a directory.`);
                }

                if (opts.directory && is_directory) {
                    let directory_empty = fs.readdirSync(value).length == 0;

                    if (opts.empty == true && directory_empty) {
                        throw new InvalidArgumentError(`${value} is not empty.`);
                    }

                    if (opts.empty == false && !directory_empty) {
                        throw new InvalidArgumentError(`requires ${value} not to be empty.`);
                    }
                }
            }
        }

        return value;
    };
}