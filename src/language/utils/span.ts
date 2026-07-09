export interface Span {
    start: number,
    end: number
}

export function spanning(left: Span, right: Span): Span {
    return {
        start: left.start,
        end: right.end
    }
}