export function extract_doc_comment(raw: string): string {
    let content = raw.substring(
        3, // length of /**
        raw.length - 2 // length of */
    ).replace(/^[ \t]+|[ \n\t]+$/g, '');
    let lines = content.split("\n");
    let fixed_lines: string[] = [];
    let indent = 0;
    let indenting_index = 0;
    let i = 0;
    for (let line of lines) {
        if (i == 0 && line.trim().length == 0) {
            continue;
        }

        if (i == indenting_index && indenting_index < 2) {
            if (line.startsWith(" ") || line.startsWith("\t")) {
                let fixed_line = line.trimStart();
                indent = line.length - fixed_line.length;
                line = fixed_line;
            } else {
                indenting_index++;
            }
        } else {
            if (line.substring(0, indent).trim().length == 0) {
                line = line.substring(indent);
            }
        }
        if (line.startsWith("* ")) {
            line = line.substring(2);
        }

        fixed_lines.push(line)
        i++;
    }

    return fixed_lines.join("\n");
}