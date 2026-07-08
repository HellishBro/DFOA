import UNICODE_DATA from "data/unicode_lookup.json" with { type: "json" };

export default function unescape(quoted: string): string {
    let unquoted = quoted.substring(1, quoted.length - 1); // strip quote

    let output = "";
    let i = 0;
    while (i < unquoted.length) {
        let char = unquoted[i];
        if (char == "\\") {
            i++; // move past \
            let next = unquoted[i];
            i++; // move past the escaped character
            if (next == "n") {
                output += "\n";
            } else if (next == "t") {
                output += "\t";
            } else if (next == "r") {
                output += "\r";
            } else if (next == "u") {
                let start = i; // i is at start of hex
                i += 4;
                let end = i;
                let hex = unquoted.substring(start, end);
                output += String.fromCodePoint(parseInt(hex, 16));
            } else if (next == "N") {
                i++; // into the unicode name
                let start = i;
                let end = unquoted.indexOf("}", i);
                let name = unquoted.substring(start, end);
                i = end + 1; // move past the closing brace
                let char_code = (UNICODE_DATA as { [key: string]: number })[name];
                let char = char_code ? String.fromCodePoint(char_code) : `\\u{${name}}`;
                output += char;
            } else if (next == "x") {
                let start = i; // i is at start of hex
                i += 2;
                let end = i;
                let hex = unquoted.substring(start, end);
                output += String.fromCodePoint(parseInt(hex, 16));
            } else if (next == '"') {
                output += '"';
            } else if (next == "'") {
                output += "'";
            } else if (next == "\\") {
                output += "\\";
            } else if (next == "a") {
                output += "\a";
            } else if (next == "b") {
                output += "\b";
            } else if (next == "f") {
                output += "\f";
            } else if (next == "v") {
                output += "\v";
            } else {
                output += "\\" + next; // python behavior
            }
        } else {
            output += char;
            i++;
        }
    }
    
    return output;
}