export interface Span { // due to limitations of antlr4ng, start and end are index of tokens, not of source code
    start: number,
    end: number,
    file: string
}

export function spanning(left: Span, right: Span): Span {
    return {
        start: left.start,
        end: right.end,
        file: left.file
    }
}