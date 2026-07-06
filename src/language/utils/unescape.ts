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
                output += String.fromCharCode(parseInt(hex, 16));
            } else {
                output += next;
            }
        } else {
            output += char;
            i++;
        }
    }
    
    return output;
}