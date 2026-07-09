import { CharStream, CommonTokenStream, TokenStream } from "antlr4ng";
import { DFOALexer } from "./dfoa/DFOALexer.js";
import { DFOAParser, StartContext } from "./dfoa/DFOAParser.js";

export function gather_cst(code: string, pprint: boolean, tokens: boolean): {
    cst: StartContext,
    token_stream: TokenStream,
    tokens?: string,
    pprint?: string
} {
    let input_stream = CharStream.fromString(code);
    let lexer = new DFOALexer(input_stream);
    let token_stream = new CommonTokenStream(lexer);
    let parser = new DFOAParser(token_stream);
    let tree = parser.start();
    let obj: ReturnType<typeof gather_cst> = {
        cst: tree,
        token_stream
    };
    if (pprint) {
        obj.pprint = tree.toStringTree(parser);
    }
    if (tokens) {
        obj.tokens = token_stream.getTokens().map(tok => 
            `${tok.tokenIndex}: ${lexer.symbolicNames[tok.type]} [${code.substring(tok.start, tok.stop + 1)}]`
        ).join(", ");
    }
    return obj;
}