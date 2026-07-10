type Underlying = string[]; // segments aren't normalized

export function is_upper(char: string): boolean {
    return char.toUpperCase() == char;
}

export function is_lower(char: string): boolean {
    return char.toLowerCase() == char;
}

export function from_camel_pascal(origin: string): Underlying {
    let output: string[] = [];
    let segment = ""
    for (let i = 0; i < origin.length; i++) {
        segment += origin[i]!;

        let a = is_upper(origin[i]!);
        let b = origin[i + 1] ? is_upper(origin[i + 1]!) : a;
        let c = origin[i + 2] ? is_upper(origin[i + 2]!) : b;

        if (
            // (!a && b)      // came *lC* aseTMDemonstration
            // ||
            // (a && b && !c) // camelCaseT *MDe* monstration
            // ~AB+AB~C = B~C+B~A
            (b && !c) || (b && !a)
        ) {
            output.push(segment);
            segment = "";
        }
    }

    if (segment.length != 0) {
        output.push(segment);
    }

    return output;
}

export function from_snake(origin: string): Underlying {
    return origin.split("_");
}

export function to_pascal(origin: Underlying): string {
    let output = "";
    for (let segment of origin) {
        output += segment[0]!.toUpperCase();
        output += segment.substring(1);
    }
    return output;
}

export function to_camel(origin: Underlying): string {
    let output = "";
    let first = true;
    for (let segment of origin) {
        if (first) {
            output += segment.toLowerCase();
            first = false;
        } else {
            output += segment[0]!.toUpperCase();
            output += segment.substring(1);
        }
    }
    return output;
}

export function to_snake(origin: Underlying): string {
    return origin.map(s => s.toLowerCase()).join("_");
}