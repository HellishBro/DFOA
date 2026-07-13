import { Span } from "lang/utils/span.js";

export interface TypeError {
    offending_span: Span,
    message: string
}