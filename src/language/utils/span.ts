export interface Span { // due to limitations of antlr4ng, start and end are index of tokens, not of source code
    start: number,
    end: number,
    file: string
}