import { writeFile } from "node:fs/promises";

const UNICODE_DATA_URL = "https://www.unicode.org/Public/UNIDATA/UnicodeData.txt";

async function main() {
    let object: { [key: string]: number } = {};
    console.log("Fetching UnicodeData.txt...");
    let response = await fetch(UNICODE_DATA_URL);
    let data = await response.text();
    console.log("Fetch finished. Processing...");
    
    for (let line of data.split("\n")) {
        if (line.trim().length == 0) break;

        let segments = line.split(";");
        let [code_point, name] = segments;
        if (!name!.startsWith("<")) {
            object[name!] = parseInt(code_point!, 16);
        }
    }

    console.log("Writing file...");
    await writeFile(
        "src/data/unicode_lookup.json",
        JSON.stringify(object, undefined, 0)
    );
    console.log("Write finished.");
}

main().then(() => {});