import { CharStream, CommonTokenStream } from "antlr4ng";
import { DFOALexer } from "./dfoa/DFOALexer.js";
import { DFOAParser, StartContext } from "./dfoa/DFOAParser.js";

export function gather_cst(code: string): StartContext {
    let input_stream = CharStream.fromString(code);
    let lexer = new DFOALexer(input_stream);
    let token_stream = new CommonTokenStream(lexer);
    let parser = new DFOAParser(token_stream);
    return parser.start();
}