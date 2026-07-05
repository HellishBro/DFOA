
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { DFOAListener } from "./DFOAListener.js";
import { DFOAVisitor } from "./DFOAVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class DFOAParser extends antlr.Parser {
    public static readonly FUNC = 1;
    public static readonly PRINT = 2;
    public static readonly LBRACE = 3;
    public static readonly RBRACE = 4;
    public static readonly LPAREN = 5;
    public static readonly RPAREN = 6;
    public static readonly LBRACK = 7;
    public static readonly RBRACK = 8;
    public static readonly SEMI = 9;
    public static readonly SIMPLE_IDENT = 10;
    public static readonly COMPLEX_IDENT = 11;
    public static readonly STRING = 12;
    public static readonly TEXT = 13;
    public static readonly NUMBER = 14;
    public static readonly WS = 15;
    public static readonly COMMENT = 16;
    public static readonly MULT_LINE_COMMENT = 17;
    public static readonly RULE_start = 0;
    public static readonly RULE_tlStatement = 1;
    public static readonly RULE_func = 2;
    public static readonly RULE_paramslist = 3;
    public static readonly RULE_statement = 4;
    public static readonly RULE_printStatement = 5;
    public static readonly RULE_exprStatement = 6;
    public static readonly RULE_semi = 7;
    public static readonly RULE_block = 8;
    public static readonly RULE_ident = 9;
    public static readonly RULE_expr = 10;
    public static readonly RULE_literal = 11;

    public static readonly literalNames = [
        null, "'func'", "'print'", "'{'", "'}'", "'('", "')'", "'['", "']'", 
        "';'"
    ];

    public static readonly symbolicNames = [
        null, "FUNC", "PRINT", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "LBRACK", 
        "RBRACK", "SEMI", "SIMPLE_IDENT", "COMPLEX_IDENT", "STRING", "TEXT", 
        "NUMBER", "WS", "COMMENT", "MULT_LINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "start", "tlStatement", "func", "paramslist", "statement", "printStatement", 
        "exprStatement", "semi", "block", "ident", "expr", "literal",
    ];

    public get grammarFileName(): string { return "DFOA.g4"; }
    public get literalNames(): (string | null)[] { return DFOAParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return DFOAParser.symbolicNames; }
    public get ruleNames(): string[] { return DFOAParser.ruleNames; }
    public get serializedATN(): number[] { return DFOAParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, DFOAParser._ATN, DFOAParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public start(): StartContext {
        let localContext = new StartContext(this.context, this.state);
        this.enterRule(localContext, 0, DFOAParser.RULE_start);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 27;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 24;
                this.tlStatement();
                }
                }
                this.state = 29;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 30;
            this.match(DFOAParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tlStatement(): TlStatementContext {
        let localContext = new TlStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, DFOAParser.RULE_tlStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 32;
            this.func();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public func(): FuncContext {
        let localContext = new FuncContext(this.context, this.state);
        this.enterRule(localContext, 4, DFOAParser.RULE_func);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 34;
            this.match(DFOAParser.FUNC);
            this.state = 35;
            this.ident();
            this.state = 36;
            this.paramslist();
            this.state = 37;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramslist(): ParamslistContext {
        let localContext = new ParamslistContext(this.context, this.state);
        this.enterRule(localContext, 6, DFOAParser.RULE_paramslist);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.match(DFOAParser.LPAREN);
            this.state = 40;
            this.match(DFOAParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 8, DFOAParser.RULE_statement);
        try {
            this.state = 45;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.PRINT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 42;
                this.printStatement();
                }
                break;
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.NUMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 43;
                this.exprStatement();
                }
                break;
            case DFOAParser.SEMI:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 44;
                this.semi();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public printStatement(): PrintStatementContext {
        let localContext = new PrintStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, DFOAParser.RULE_printStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 47;
            this.match(DFOAParser.PRINT);
            this.state = 48;
            this.expr();
            this.state = 49;
            this.match(DFOAParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprStatement(): ExprStatementContext {
        let localContext = new ExprStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, DFOAParser.RULE_exprStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 51;
            this.expr();
            this.state = 52;
            this.match(DFOAParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public semi(): SemiContext {
        let localContext = new SemiContext(this.context, this.state);
        this.enterRule(localContext, 14, DFOAParser.RULE_semi);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.match(DFOAParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 16, DFOAParser.RULE_block);
        let _la: number;
        try {
            this.state = 65;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 56;
                this.match(DFOAParser.LBRACE);
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29188) !== 0)) {
                    {
                    {
                    this.state = 57;
                    this.statement();
                    }
                    }
                    this.state = 62;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 63;
                this.match(DFOAParser.RBRACE);
                }
                break;
            case DFOAParser.PRINT:
            case DFOAParser.SEMI:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.NUMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 64;
                this.statement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 18, DFOAParser.RULE_ident);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 67;
            _la = this.tokenStream.LA(1);
            if(!(_la === 10 || _la === 11)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 20, DFOAParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 22, DFOAParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 71;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28672) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,17,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,0,10,
        0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,
        4,1,4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,
        5,8,59,8,8,10,8,12,8,62,9,8,1,8,1,8,3,8,66,8,8,1,9,1,9,1,10,1,10,
        1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,1,0,10,
        11,1,0,12,14,66,0,27,1,0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,39,1,0,
        0,0,8,45,1,0,0,0,10,47,1,0,0,0,12,51,1,0,0,0,14,54,1,0,0,0,16,65,
        1,0,0,0,18,67,1,0,0,0,20,69,1,0,0,0,22,71,1,0,0,0,24,26,3,2,1,0,
        25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,
        0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,33,3,4,2,0,33,
        3,1,0,0,0,34,35,5,1,0,0,35,36,3,18,9,0,36,37,3,6,3,0,37,38,3,16,
        8,0,38,5,1,0,0,0,39,40,5,5,0,0,40,41,5,6,0,0,41,7,1,0,0,0,42,46,
        3,10,5,0,43,46,3,12,6,0,44,46,3,14,7,0,45,42,1,0,0,0,45,43,1,0,0,
        0,45,44,1,0,0,0,46,9,1,0,0,0,47,48,5,2,0,0,48,49,3,20,10,0,49,50,
        5,9,0,0,50,11,1,0,0,0,51,52,3,20,10,0,52,53,5,9,0,0,53,13,1,0,0,
        0,54,55,5,9,0,0,55,15,1,0,0,0,56,60,5,3,0,0,57,59,3,8,4,0,58,57,
        1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,
        62,60,1,0,0,0,63,66,5,4,0,0,64,66,3,8,4,0,65,56,1,0,0,0,65,64,1,
        0,0,0,66,17,1,0,0,0,67,68,7,0,0,0,68,19,1,0,0,0,69,70,3,22,11,0,
        70,21,1,0,0,0,71,72,7,1,0,0,72,23,1,0,0,0,4,27,45,60,65
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!DFOAParser.__ATN) {
            DFOAParser.__ATN = new antlr.ATNDeserializer().deserialize(DFOAParser._serializedATN);
        }

        return DFOAParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(DFOAParser.literalNames, DFOAParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return DFOAParser.vocabulary;
    }

    private static readonly decisionsToDFA = DFOAParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class StartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(DFOAParser.EOF, 0)!;
    }
    public tlStatement(): TlStatementContext[];
    public tlStatement(i: number): TlStatementContext | null;
    public tlStatement(i?: number): TlStatementContext[] | TlStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TlStatementContext);
        }

        return this.getRuleContext(i, TlStatementContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_start;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterStart) {
             listener.enterStart(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitStart) {
             listener.exitStart(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public func(): FuncContext {
        return this.getRuleContext(0, FuncContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_tlStatement;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTlStatement) {
             listener.enterTlStatement(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTlStatement) {
             listener.exitTlStatement(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTlStatement) {
            return visitor.visitTlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FuncContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNC(): antlr.TerminalNode {
        return this.getToken(DFOAParser.FUNC, 0)!;
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public paramslist(): ParamslistContext {
        return this.getRuleContext(0, ParamslistContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_func;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterFunc) {
             listener.enterFunc(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitFunc) {
             listener.exitFunc(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamslistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_paramslist;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterParamslist) {
             listener.enterParamslist(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitParamslist) {
             listener.exitParamslist(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitParamslist) {
            return visitor.visitParamslist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public printStatement(): PrintStatementContext | null {
        return this.getRuleContext(0, PrintStatementContext);
    }
    public exprStatement(): ExprStatementContext | null {
        return this.getRuleContext(0, ExprStatementContext);
    }
    public semi(): SemiContext | null {
        return this.getRuleContext(0, SemiContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_statement;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRINT(): antlr.TerminalNode {
        return this.getToken(DFOAParser.PRINT, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_printStatement;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterPrintStatement) {
             listener.enterPrintStatement(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitPrintStatement) {
             listener.exitPrintStatement(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitPrintStatement) {
            return visitor.visitPrintStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_exprStatement;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterExprStatement) {
             listener.enterExprStatement(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitExprStatement) {
             listener.exitExprStatement(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitExprStatement) {
            return visitor.visitExprStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SemiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_semi;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterSemi) {
             listener.enterSemi(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitSemi) {
             listener.exitSemi(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitSemi) {
            return visitor.visitSemi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LBRACE, 0);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.RBRACE, 0);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_block;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SIMPLE_IDENT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.SIMPLE_IDENT, 0);
    }
    public COMPLEX_IDENT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.COMPLEX_IDENT, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_ident;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterIdent) {
             listener.enterIdent(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitIdent) {
             listener.exitIdent(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_expr;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.NUMBER, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.STRING, 0);
    }
    public TEXT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.TEXT, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_literal;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
