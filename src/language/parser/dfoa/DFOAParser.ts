
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
    public static readonly NOT = 3;
    public static readonly AND = 4;
    public static readonly OR = 5;
    public static readonly EQEQ = 6;
    public static readonly LE = 7;
    public static readonly GE = 8;
    public static readonly NEQ = 9;
    public static readonly LANGLE = 10;
    public static readonly RANGLE = 11;
    public static readonly LBRACE = 12;
    public static readonly RBRACE = 13;
    public static readonly LPAREN = 14;
    public static readonly RPAREN = 15;
    public static readonly LBRACK = 16;
    public static readonly RBRACK = 17;
    public static readonly SEMI = 18;
    public static readonly PLUS = 19;
    public static readonly MINUS = 20;
    public static readonly STAR = 21;
    public static readonly SLASH = 22;
    public static readonly DOT = 23;
    public static readonly COMMA = 24;
    public static readonly SIMPLE_IDENT = 25;
    public static readonly COMPLEX_IDENT = 26;
    public static readonly STRING = 27;
    public static readonly TEXT = 28;
    public static readonly INTEGER = 29;
    public static readonly FLOAT = 30;
    public static readonly WS = 31;
    public static readonly COMMENT = 32;
    public static readonly MULT_LINE_COMMENT = 33;
    public static readonly RULE_start = 0;
    public static readonly RULE_tlStatement = 1;
    public static readonly RULE_func = 2;
    public static readonly RULE_paramslist = 3;
    public static readonly RULE_statement = 4;
    public static readonly RULE_printStatement = 5;
    public static readonly RULE_exprStatement = 6;
    public static readonly RULE_semi = 7;
    public static readonly RULE_block = 8;
    public static readonly RULE_expr = 9;
    public static readonly RULE_or = 10;
    public static readonly RULE_and = 11;
    public static readonly RULE_not = 12;
    public static readonly RULE_comparison = 13;
    public static readonly RULE_compOp = 14;
    public static readonly RULE_addSub = 15;
    public static readonly RULE_addSubOp = 16;
    public static readonly RULE_multDiv = 17;
    public static readonly RULE_multDivOp = 18;
    public static readonly RULE_unop = 19;
    public static readonly RULE_funcInvoke = 20;
    public static readonly RULE_trail = 21;
    public static readonly RULE_atom = 22;
    public static readonly RULE_literal = 23;
    public static readonly RULE_list = 24;
    public static readonly RULE_tuple = 25;
    public static readonly RULE_ident = 26;

    public static readonly literalNames = [
        null, "'func'", "'print'", "'not'", "'and'", "'or'", "'=='", "'<='", 
        "'>='", "'!='", "'<'", "'>'", "'{'", "'}'", "'('", "')'", "'['", 
        "']'", "';'", "'+'", "'-'", "'*'", "'/'", "'.'", "','"
    ];

    public static readonly symbolicNames = [
        null, "FUNC", "PRINT", "NOT", "AND", "OR", "EQEQ", "LE", "GE", "NEQ", 
        "LANGLE", "RANGLE", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "LBRACK", 
        "RBRACK", "SEMI", "PLUS", "MINUS", "STAR", "SLASH", "DOT", "COMMA", 
        "SIMPLE_IDENT", "COMPLEX_IDENT", "STRING", "TEXT", "INTEGER", "FLOAT", 
        "WS", "COMMENT", "MULT_LINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "start", "tlStatement", "func", "paramslist", "statement", "printStatement", 
        "exprStatement", "semi", "block", "expr", "or", "and", "not", "comparison", 
        "compOp", "addSub", "addSubOp", "multDiv", "multDivOp", "unop", 
        "funcInvoke", "trail", "atom", "literal", "list", "tuple", "ident",
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
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 54;
                this.tlStatement();
                }
                }
                this.state = 59;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 60;
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
            this.state = 62;
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
            this.state = 64;
            this.match(DFOAParser.FUNC);
            this.state = 65;
            this.ident();
            this.state = 66;
            this.paramslist();
            this.state = 67;
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
            this.state = 69;
            this.match(DFOAParser.LPAREN);
            this.state = 70;
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
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.PRINT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 72;
                this.printStatement();
                }
                break;
            case DFOAParser.NOT:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.MINUS:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 73;
                this.exprStatement();
                }
                break;
            case DFOAParser.SEMI:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 74;
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
            this.state = 77;
            this.match(DFOAParser.PRINT);
            this.state = 78;
            this.expr();
            this.state = 79;
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
            this.state = 81;
            this.expr();
            this.state = 82;
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
            this.state = 84;
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
            this.state = 95;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 86;
                this.match(DFOAParser.LBRACE);
                this.state = 90;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014658572) !== 0)) {
                    {
                    {
                    this.state = 87;
                    this.statement();
                    }
                    }
                    this.state = 92;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 93;
                this.match(DFOAParser.RBRACE);
                }
                break;
            case DFOAParser.PRINT:
            case DFOAParser.NOT:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.SEMI:
            case DFOAParser.MINUS:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 94;
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
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 18, DFOAParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.or();
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
    public or(): OrContext {
        let localContext = new OrContext(this.context, this.state);
        this.enterRule(localContext, 20, DFOAParser.RULE_or);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.and();
            this.state = 104;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 100;
                this.match(DFOAParser.OR);
                this.state = 101;
                this.and();
                }
                }
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public and(): AndContext {
        let localContext = new AndContext(this.context, this.state);
        this.enterRule(localContext, 22, DFOAParser.RULE_and);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.not();
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 108;
                this.match(DFOAParser.AND);
                this.state = 109;
                this.not();
                }
                }
                this.state = 114;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public not(): NotContext {
        let localContext = new NotContext(this.context, this.state);
        this.enterRule(localContext, 24, DFOAParser.RULE_not);
        try {
            this.state = 118;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 115;
                this.match(DFOAParser.NOT);
                this.state = 116;
                this.not();
                }
                break;
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.MINUS:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 117;
                this.comparison();
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
    public comparison(): ComparisonContext {
        let localContext = new ComparisonContext(this.context, this.state);
        this.enterRule(localContext, 26, DFOAParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.addSub();
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4032) !== 0)) {
                {
                {
                this.state = 121;
                this.compOp();
                this.state = 122;
                this.addSub();
                }
                }
                this.state = 128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public compOp(): CompOpContext {
        let localContext = new CompOpContext(this.context, this.state);
        this.enterRule(localContext, 28, DFOAParser.RULE_compOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 129;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4032) !== 0))) {
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
    public addSub(): AddSubContext {
        let localContext = new AddSubContext(this.context, this.state);
        this.enterRule(localContext, 30, DFOAParser.RULE_addSub);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.multDiv();
            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19 || _la === 20) {
                {
                {
                this.state = 132;
                this.addSubOp();
                this.state = 133;
                this.multDiv();
                }
                }
                this.state = 139;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public addSubOp(): AddSubOpContext {
        let localContext = new AddSubOpContext(this.context, this.state);
        this.enterRule(localContext, 32, DFOAParser.RULE_addSubOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 20)) {
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
    public multDiv(): MultDivContext {
        let localContext = new MultDivContext(this.context, this.state);
        this.enterRule(localContext, 34, DFOAParser.RULE_multDiv);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.unop();
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 21 || _la === 22) {
                {
                {
                this.state = 143;
                this.multDivOp();
                this.state = 144;
                this.unop();
                }
                }
                this.state = 150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public multDivOp(): MultDivOpContext {
        let localContext = new MultDivOpContext(this.context, this.state);
        this.enterRule(localContext, 36, DFOAParser.RULE_multDivOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 151;
            _la = this.tokenStream.LA(1);
            if(!(_la === 21 || _la === 22)) {
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
    public unop(): UnopContext {
        let localContext = new UnopContext(this.context, this.state);
        this.enterRule(localContext, 38, DFOAParser.RULE_unop);
        try {
            this.state = 156;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.MINUS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 153;
                this.match(DFOAParser.MINUS);
                this.state = 154;
                this.unop();
                }
                break;
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 155;
                this.trail(0);
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
    public funcInvoke(): FuncInvokeContext {
        let localContext = new FuncInvokeContext(this.context, this.state);
        this.enterRule(localContext, 40, DFOAParser.RULE_funcInvoke);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.match(DFOAParser.LPAREN);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014396424) !== 0)) {
                {
                this.state = 159;
                this.expr();
                this.state = 164;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 160;
                        this.match(DFOAParser.COMMA);
                        this.state = 161;
                        this.expr();
                        }
                        }
                    }
                    this.state = 166;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                }
                this.state = 168;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 167;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 172;
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

    public trail(): TrailContext;
    public trail(_p: number): TrailContext;
    public trail(_p?: number): TrailContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TrailContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 42;
        this.enterRecursionRule(localContext, 42, DFOAParser.RULE_trail, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new AtomTrailContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 175;
            this.atom();
            this.state = 177;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
            case 1:
                {
                this.state = 176;
                this.funcInvoke();
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 195;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 193;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 179;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 180;
                        this.match(DFOAParser.LBRACK);
                        this.state = 181;
                        this.expr();
                        this.state = 182;
                        this.match(DFOAParser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TupleAccessContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 184;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 185;
                        this.match(DFOAParser.DOT);
                        this.state = 186;
                        this.match(DFOAParser.INTEGER);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AttributeContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 187;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 188;
                        this.match(DFOAParser.DOT);
                        this.state = 189;
                        this.ident();
                        this.state = 191;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
                        case 1:
                            {
                            this.state = 190;
                            this.funcInvoke();
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 197;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public atom(): AtomContext {
        let localContext = new AtomContext(this.context, this.state);
        this.enterRule(localContext, 44, DFOAParser.RULE_atom);
        try {
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 198;
                this.list();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 199;
                this.tuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 200;
                this.literal();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 201;
                this.match(DFOAParser.LPAREN);
                this.state = 202;
                this.expr();
                this.state = 203;
                this.match(DFOAParser.RPAREN);
                }
                break;
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
        this.enterRule(localContext, 46, DFOAParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013265920) !== 0))) {
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
    public list(): ListContext {
        let localContext = new ListContext(this.context, this.state);
        this.enterRule(localContext, 48, DFOAParser.RULE_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
            this.match(DFOAParser.LBRACK);
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014396424) !== 0)) {
                {
                this.state = 210;
                this.expr();
                this.state = 215;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 211;
                        this.match(DFOAParser.COMMA);
                        this.state = 212;
                        this.expr();
                        }
                        }
                    }
                    this.state = 217;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 218;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 223;
            this.match(DFOAParser.RBRACK);
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
    public tuple(): TupleContext {
        let localContext = new TupleContext(this.context, this.state);
        this.enterRule(localContext, 50, DFOAParser.RULE_tuple);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 225;
            this.match(DFOAParser.LPAREN);
            this.state = 236;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                this.state = 226;
                this.expr();
                this.state = 227;
                this.match(DFOAParser.COMMA);
                }
                break;
            case 2:
                {
                this.state = 229;
                this.expr();
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 230;
                    this.match(DFOAParser.COMMA);
                    this.state = 231;
                    this.expr();
                    }
                    }
                    this.state = 234;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                }
                break;
            }
            this.state = 238;
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
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 52, DFOAParser.RULE_ident);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            _la = this.tokenStream.LA(1);
            if(!(_la === 25 || _la === 26)) {
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 21:
            return this.trail_sempred(localContext as TrailContext, predIndex);
        }
        return true;
    }
    private trail_sempred(localContext: TrailContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        case 1:
            return this.precpred(this.context, 3);
        case 2:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,33,243,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        1,0,5,0,56,8,0,10,0,12,0,59,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,
        1,2,1,3,1,3,1,3,1,4,1,4,1,4,3,4,76,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,
        6,1,7,1,7,1,8,1,8,5,8,89,8,8,10,8,12,8,92,9,8,1,8,1,8,3,8,96,8,8,
        1,9,1,9,1,10,1,10,1,10,5,10,103,8,10,10,10,12,10,106,9,10,1,11,1,
        11,1,11,5,11,111,8,11,10,11,12,11,114,9,11,1,12,1,12,1,12,3,12,119,
        8,12,1,13,1,13,1,13,1,13,5,13,125,8,13,10,13,12,13,128,9,13,1,14,
        1,14,1,15,1,15,1,15,1,15,5,15,136,8,15,10,15,12,15,139,9,15,1,16,
        1,16,1,17,1,17,1,17,1,17,5,17,147,8,17,10,17,12,17,150,9,17,1,18,
        1,18,1,19,1,19,1,19,3,19,157,8,19,1,20,1,20,1,20,1,20,5,20,163,8,
        20,10,20,12,20,166,9,20,1,20,3,20,169,8,20,3,20,171,8,20,1,20,1,
        20,1,21,1,21,1,21,3,21,178,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,1,21,1,21,1,21,3,21,192,8,21,5,21,194,8,21,10,21,12,
        21,197,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,206,8,22,1,23,
        1,23,1,24,1,24,1,24,1,24,5,24,214,8,24,10,24,12,24,217,9,24,1,24,
        3,24,220,8,24,3,24,222,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,4,25,233,8,25,11,25,12,25,234,3,25,237,8,25,1,25,1,25,1,
        26,1,26,1,26,0,1,42,27,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,0,5,1,0,6,11,1,0,19,20,1,0,21,22,
        1,0,27,30,1,0,25,26,243,0,57,1,0,0,0,2,62,1,0,0,0,4,64,1,0,0,0,6,
        69,1,0,0,0,8,75,1,0,0,0,10,77,1,0,0,0,12,81,1,0,0,0,14,84,1,0,0,
        0,16,95,1,0,0,0,18,97,1,0,0,0,20,99,1,0,0,0,22,107,1,0,0,0,24,118,
        1,0,0,0,26,120,1,0,0,0,28,129,1,0,0,0,30,131,1,0,0,0,32,140,1,0,
        0,0,34,142,1,0,0,0,36,151,1,0,0,0,38,156,1,0,0,0,40,158,1,0,0,0,
        42,174,1,0,0,0,44,205,1,0,0,0,46,207,1,0,0,0,48,209,1,0,0,0,50,225,
        1,0,0,0,52,240,1,0,0,0,54,56,3,2,1,0,55,54,1,0,0,0,56,59,1,0,0,0,
        57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,5,
        0,0,1,61,1,1,0,0,0,62,63,3,4,2,0,63,3,1,0,0,0,64,65,5,1,0,0,65,66,
        3,52,26,0,66,67,3,6,3,0,67,68,3,16,8,0,68,5,1,0,0,0,69,70,5,14,0,
        0,70,71,5,15,0,0,71,7,1,0,0,0,72,76,3,10,5,0,73,76,3,12,6,0,74,76,
        3,14,7,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,9,1,0,0,0,
        77,78,5,2,0,0,78,79,3,18,9,0,79,80,5,18,0,0,80,11,1,0,0,0,81,82,
        3,18,9,0,82,83,5,18,0,0,83,13,1,0,0,0,84,85,5,18,0,0,85,15,1,0,0,
        0,86,90,5,12,0,0,87,89,3,8,4,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,
        1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,96,5,13,0,0,
        94,96,3,8,4,0,95,86,1,0,0,0,95,94,1,0,0,0,96,17,1,0,0,0,97,98,3,
        20,10,0,98,19,1,0,0,0,99,104,3,22,11,0,100,101,5,5,0,0,101,103,3,
        22,11,0,102,100,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,
        1,0,0,0,105,21,1,0,0,0,106,104,1,0,0,0,107,112,3,24,12,0,108,109,
        5,4,0,0,109,111,3,24,12,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,
        1,0,0,0,112,113,1,0,0,0,113,23,1,0,0,0,114,112,1,0,0,0,115,116,5,
        3,0,0,116,119,3,24,12,0,117,119,3,26,13,0,118,115,1,0,0,0,118,117,
        1,0,0,0,119,25,1,0,0,0,120,126,3,30,15,0,121,122,3,28,14,0,122,123,
        3,30,15,0,123,125,1,0,0,0,124,121,1,0,0,0,125,128,1,0,0,0,126,124,
        1,0,0,0,126,127,1,0,0,0,127,27,1,0,0,0,128,126,1,0,0,0,129,130,7,
        0,0,0,130,29,1,0,0,0,131,137,3,34,17,0,132,133,3,32,16,0,133,134,
        3,34,17,0,134,136,1,0,0,0,135,132,1,0,0,0,136,139,1,0,0,0,137,135,
        1,0,0,0,137,138,1,0,0,0,138,31,1,0,0,0,139,137,1,0,0,0,140,141,7,
        1,0,0,141,33,1,0,0,0,142,148,3,38,19,0,143,144,3,36,18,0,144,145,
        3,38,19,0,145,147,1,0,0,0,146,143,1,0,0,0,147,150,1,0,0,0,148,146,
        1,0,0,0,148,149,1,0,0,0,149,35,1,0,0,0,150,148,1,0,0,0,151,152,7,
        2,0,0,152,37,1,0,0,0,153,154,5,20,0,0,154,157,3,38,19,0,155,157,
        3,42,21,0,156,153,1,0,0,0,156,155,1,0,0,0,157,39,1,0,0,0,158,170,
        5,14,0,0,159,164,3,18,9,0,160,161,5,24,0,0,161,163,3,18,9,0,162,
        160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,
        168,1,0,0,0,166,164,1,0,0,0,167,169,5,24,0,0,168,167,1,0,0,0,168,
        169,1,0,0,0,169,171,1,0,0,0,170,159,1,0,0,0,170,171,1,0,0,0,171,
        172,1,0,0,0,172,173,5,15,0,0,173,41,1,0,0,0,174,175,6,21,-1,0,175,
        177,3,44,22,0,176,178,3,40,20,0,177,176,1,0,0,0,177,178,1,0,0,0,
        178,195,1,0,0,0,179,180,10,4,0,0,180,181,5,16,0,0,181,182,3,18,9,
        0,182,183,5,17,0,0,183,194,1,0,0,0,184,185,10,3,0,0,185,186,5,23,
        0,0,186,194,5,29,0,0,187,188,10,2,0,0,188,189,5,23,0,0,189,191,3,
        52,26,0,190,192,3,40,20,0,191,190,1,0,0,0,191,192,1,0,0,0,192,194,
        1,0,0,0,193,179,1,0,0,0,193,184,1,0,0,0,193,187,1,0,0,0,194,197,
        1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,43,1,0,0,0,197,195,1,
        0,0,0,198,206,3,48,24,0,199,206,3,50,25,0,200,206,3,46,23,0,201,
        202,5,14,0,0,202,203,3,18,9,0,203,204,5,15,0,0,204,206,1,0,0,0,205,
        198,1,0,0,0,205,199,1,0,0,0,205,200,1,0,0,0,205,201,1,0,0,0,206,
        45,1,0,0,0,207,208,7,3,0,0,208,47,1,0,0,0,209,221,5,16,0,0,210,215,
        3,18,9,0,211,212,5,24,0,0,212,214,3,18,9,0,213,211,1,0,0,0,214,217,
        1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,219,1,0,0,0,217,215,
        1,0,0,0,218,220,5,24,0,0,219,218,1,0,0,0,219,220,1,0,0,0,220,222,
        1,0,0,0,221,210,1,0,0,0,221,222,1,0,0,0,222,223,1,0,0,0,223,224,
        5,17,0,0,224,49,1,0,0,0,225,236,5,14,0,0,226,227,3,18,9,0,227,228,
        5,24,0,0,228,237,1,0,0,0,229,232,3,18,9,0,230,231,5,24,0,0,231,233,
        3,18,9,0,232,230,1,0,0,0,233,234,1,0,0,0,234,232,1,0,0,0,234,235,
        1,0,0,0,235,237,1,0,0,0,236,226,1,0,0,0,236,229,1,0,0,0,237,238,
        1,0,0,0,238,239,5,15,0,0,239,51,1,0,0,0,240,241,7,4,0,0,241,53,1,
        0,0,0,24,57,75,90,95,104,112,118,126,137,148,156,164,168,170,177,
        191,193,195,205,215,219,221,234,236
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


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public or(): OrContext {
        return this.getRuleContext(0, OrContext)!;
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


export class OrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public and(): AndContext[];
    public and(i: number): AndContext | null;
    public and(i?: number): AndContext[] | AndContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AndContext);
        }

        return this.getRuleContext(i, AndContext);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.OR);
    	} else {
    		return this.getToken(DFOAParser.OR, i);
    	}
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_or;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterOr) {
             listener.enterOr(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitOr) {
             listener.exitOr(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitOr) {
            return visitor.visitOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public not(): NotContext[];
    public not(i: number): NotContext | null;
    public not(i?: number): NotContext[] | NotContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NotContext);
        }

        return this.getRuleContext(i, NotContext);
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.AND);
    	} else {
    		return this.getToken(DFOAParser.AND, i);
    	}
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_and;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAnd) {
             listener.enterAnd(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAnd) {
             listener.exitAnd(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAnd) {
            return visitor.visitAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NotContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.NOT, 0);
    }
    public not(): NotContext | null {
        return this.getRuleContext(0, NotContext);
    }
    public comparison(): ComparisonContext | null {
        return this.getRuleContext(0, ComparisonContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_not;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterNot) {
             listener.enterNot(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitNot) {
             listener.exitNot(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitNot) {
            return visitor.visitNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public addSub(): AddSubContext[];
    public addSub(i: number): AddSubContext | null;
    public addSub(i?: number): AddSubContext[] | AddSubContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AddSubContext);
        }

        return this.getRuleContext(i, AddSubContext);
    }
    public compOp(): CompOpContext[];
    public compOp(i: number): CompOpContext | null;
    public compOp(i?: number): CompOpContext[] | CompOpContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CompOpContext);
        }

        return this.getRuleContext(i, CompOpContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_comparison;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQEQ(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.EQEQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.NEQ, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.GE, 0);
    }
    public LANGLE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LANGLE, 0);
    }
    public RANGLE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.RANGLE, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_compOp;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterCompOp) {
             listener.enterCompOp(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitCompOp) {
             listener.exitCompOp(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitCompOp) {
            return visitor.visitCompOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddSubContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multDiv(): MultDivContext[];
    public multDiv(i: number): MultDivContext | null;
    public multDiv(i?: number): MultDivContext[] | MultDivContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultDivContext);
        }

        return this.getRuleContext(i, MultDivContext);
    }
    public addSubOp(): AddSubOpContext[];
    public addSubOp(i: number): AddSubOpContext | null;
    public addSubOp(i?: number): AddSubOpContext[] | AddSubOpContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AddSubOpContext);
        }

        return this.getRuleContext(i, AddSubOpContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_addSub;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddSubOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_addSubOp;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAddSubOp) {
             listener.enterAddSubOp(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAddSubOp) {
             listener.exitAddSubOp(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAddSubOp) {
            return visitor.visitAddSubOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultDivContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unop(): UnopContext[];
    public unop(i: number): UnopContext | null;
    public unop(i?: number): UnopContext[] | UnopContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnopContext);
        }

        return this.getRuleContext(i, UnopContext);
    }
    public multDivOp(): MultDivOpContext[];
    public multDivOp(i: number): MultDivOpContext | null;
    public multDivOp(i?: number): MultDivOpContext[] | MultDivOpContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultDivOpContext);
        }

        return this.getRuleContext(i, MultDivOpContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_multDiv;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterMultDiv) {
             listener.enterMultDiv(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitMultDiv) {
             listener.exitMultDiv(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitMultDiv) {
            return visitor.visitMultDiv(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultDivOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.SLASH, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_multDivOp;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterMultDivOp) {
             listener.enterMultDivOp(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitMultDivOp) {
             listener.exitMultDivOp(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitMultDivOp) {
            return visitor.visitMultDivOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.MINUS, 0);
    }
    public unop(): UnopContext | null {
        return this.getRuleContext(0, UnopContext);
    }
    public trail(): TrailContext | null {
        return this.getRuleContext(0, TrailContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_unop;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterUnop) {
             listener.enterUnop(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitUnop) {
             listener.exitUnop(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitUnop) {
            return visitor.visitUnop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FuncInvokeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.COMMA);
    	} else {
    		return this.getToken(DFOAParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_funcInvoke;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterFuncInvoke) {
             listener.enterFuncInvoke(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitFuncInvoke) {
             listener.exitFuncInvoke(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitFuncInvoke) {
            return visitor.visitFuncInvoke(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_trail;
    }
    public override copyFrom(ctx: TrailContext): void {
        super.copyFrom(ctx);
    }
}
export class AtomTrailContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public atom(): AtomContext {
        return this.getRuleContext(0, AtomContext)!;
    }
    public funcInvoke(): FuncInvokeContext | null {
        return this.getRuleContext(0, FuncInvokeContext);
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAtomTrail) {
             listener.enterAtomTrail(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAtomTrail) {
             listener.exitAtomTrail(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAtomTrail) {
            return visitor.visitAtomTrail(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public trail(): TrailContext {
        return this.getRuleContext(0, TrailContext)!;
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LBRACK, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RBRACK, 0)!;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterSubscript) {
             listener.enterSubscript(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitSubscript) {
             listener.exitSubscript(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleAccessContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public trail(): TrailContext {
        return this.getRuleContext(0, TrailContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(DFOAParser.DOT, 0)!;
    }
    public INTEGER(): antlr.TerminalNode {
        return this.getToken(DFOAParser.INTEGER, 0)!;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTupleAccess) {
             listener.enterTupleAccess(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTupleAccess) {
             listener.exitTupleAccess(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTupleAccess) {
            return visitor.visitTupleAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AttributeContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public trail(): TrailContext {
        return this.getRuleContext(0, TrailContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(DFOAParser.DOT, 0)!;
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public funcInvoke(): FuncInvokeContext | null {
        return this.getRuleContext(0, FuncInvokeContext);
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAttribute) {
             listener.enterAttribute(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAttribute) {
             listener.exitAttribute(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AtomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public list(): ListContext | null {
        return this.getRuleContext(0, ListContext);
    }
    public tuple(): TupleContext | null {
        return this.getRuleContext(0, TupleContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LPAREN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_atom;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAtom) {
             listener.enterAtom(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAtom) {
             listener.exitAtom(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.INTEGER, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.FLOAT, 0);
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


export class ListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LBRACK, 0)!;
    }
    public RBRACK(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RBRACK, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.COMMA);
    	} else {
    		return this.getToken(DFOAParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_list;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterList) {
             listener.enterList(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitList) {
             listener.exitList(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitList) {
            return visitor.visitList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.COMMA);
    	} else {
    		return this.getToken(DFOAParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_tuple;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTuple) {
             listener.enterTuple(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTuple) {
             listener.exitTuple(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTuple) {
            return visitor.visitTuple(this);
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
