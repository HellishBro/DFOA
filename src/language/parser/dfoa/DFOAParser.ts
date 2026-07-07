
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
    public static readonly AS = 6;
    public static readonly NEW = 7;
    public static readonly EQEQ = 8;
    public static readonly LE = 9;
    public static readonly GE = 10;
    public static readonly NEQ = 11;
    public static readonly LANGLE = 12;
    public static readonly RANGLE = 13;
    public static readonly LBRACE = 14;
    public static readonly RBRACE = 15;
    public static readonly LPAREN = 16;
    public static readonly RPAREN = 17;
    public static readonly LBRACK = 18;
    public static readonly RBRACK = 19;
    public static readonly SEMI = 20;
    public static readonly PLUS = 21;
    public static readonly MINUS = 22;
    public static readonly STAR = 23;
    public static readonly SLASH = 24;
    public static readonly DOT = 25;
    public static readonly COMMA = 26;
    public static readonly COLON = 27;
    public static readonly SIMPLE_IDENT = 28;
    public static readonly COMPLEX_IDENT = 29;
    public static readonly STRING = 30;
    public static readonly TEXT = 31;
    public static readonly INTEGER = 32;
    public static readonly FLOAT = 33;
    public static readonly WS = 34;
    public static readonly COMMENT = 35;
    public static readonly MULT_LINE_COMMENT = 36;
    public static readonly RULE_start = 0;
    public static readonly RULE_tlStatement = 1;
    public static readonly RULE_func = 2;
    public static readonly RULE_signature = 3;
    public static readonly RULE_genericDef = 4;
    public static readonly RULE_paramslist = 5;
    public static readonly RULE_returnSig = 6;
    public static readonly RULE_param = 7;
    public static readonly RULE_statement = 8;
    public static readonly RULE_printStatement = 9;
    public static readonly RULE_exprStatement = 10;
    public static readonly RULE_semi = 11;
    public static readonly RULE_block = 12;
    public static readonly RULE_expr = 13;
    public static readonly RULE_or = 14;
    public static readonly RULE_and = 15;
    public static readonly RULE_not = 16;
    public static readonly RULE_comparison = 17;
    public static readonly RULE_compOp = 18;
    public static readonly RULE_addSub = 19;
    public static readonly RULE_addSubOp = 20;
    public static readonly RULE_multDiv = 21;
    public static readonly RULE_multDivOp = 22;
    public static readonly RULE_unop = 23;
    public static readonly RULE_funcInvoke = 24;
    public static readonly RULE_trail = 25;
    public static readonly RULE_atom = 26;
    public static readonly RULE_newExpr = 27;
    public static readonly RULE_literal = 28;
    public static readonly RULE_list = 29;
    public static readonly RULE_tuple = 30;
    public static readonly RULE_type = 31;
    public static readonly RULE_generics = 32;
    public static readonly RULE_typeParam = 33;
    public static readonly RULE_ident = 34;

    public static readonly literalNames = [
        null, "'func'", "'print'", "'not'", "'and'", "'or'", "'as'", "'new'", 
        "'=='", "'<='", "'>='", "'!='", "'<'", "'>'", "'{'", "'}'", "'('", 
        "')'", "'['", "']'", "';'", "'+'", "'-'", "'*'", "'/'", "'.'", "','", 
        "':'"
    ];

    public static readonly symbolicNames = [
        null, "FUNC", "PRINT", "NOT", "AND", "OR", "AS", "NEW", "EQEQ", 
        "LE", "GE", "NEQ", "LANGLE", "RANGLE", "LBRACE", "RBRACE", "LPAREN", 
        "RPAREN", "LBRACK", "RBRACK", "SEMI", "PLUS", "MINUS", "STAR", "SLASH", 
        "DOT", "COMMA", "COLON", "SIMPLE_IDENT", "COMPLEX_IDENT", "STRING", 
        "TEXT", "INTEGER", "FLOAT", "WS", "COMMENT", "MULT_LINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "start", "tlStatement", "func", "signature", "genericDef", "paramslist", 
        "returnSig", "param", "statement", "printStatement", "exprStatement", 
        "semi", "block", "expr", "or", "and", "not", "comparison", "compOp", 
        "addSub", "addSubOp", "multDiv", "multDivOp", "unop", "funcInvoke", 
        "trail", "atom", "newExpr", "literal", "list", "tuple", "type", 
        "generics", "typeParam", "ident",
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
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 70;
                this.tlStatement();
                }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 76;
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
            this.state = 78;
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
            this.state = 80;
            this.match(DFOAParser.FUNC);
            this.state = 81;
            this.ident();
            this.state = 82;
            this.signature();
            this.state = 83;
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
    public signature(): SignatureContext {
        let localContext = new SignatureContext(this.context, this.state);
        this.enterRule(localContext, 6, DFOAParser.RULE_signature);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 85;
                this.genericDef();
                }
            }

            this.state = 88;
            this.paramslist();
            this.state = 90;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 89;
                this.returnSig();
                }
                break;
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
    public genericDef(): GenericDefContext {
        let localContext = new GenericDefContext(this.context, this.state);
        this.enterRule(localContext, 8, DFOAParser.RULE_genericDef);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 92;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 93;
            this.typeParam();
            this.state = 98;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 94;
                    this.match(DFOAParser.COMMA);
                    this.state = 95;
                    this.typeParam();
                    }
                    }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 101;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 104;
            this.match(DFOAParser.RANGLE);
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
        this.enterRule(localContext, 10, DFOAParser.RULE_paramslist);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.match(DFOAParser.LPAREN);
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || _la === 29) {
                {
                this.state = 107;
                this.param();
                this.state = 112;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 108;
                        this.match(DFOAParser.COMMA);
                        this.state = 109;
                        this.param();
                        }
                        }
                    }
                    this.state = 114;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                }
                this.state = 116;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 115;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 120;
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
    public returnSig(): ReturnSigContext {
        let localContext = new ReturnSigContext(this.context, this.state);
        this.enterRule(localContext, 12, DFOAParser.RULE_returnSig);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.type_();
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
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 14, DFOAParser.RULE_param);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.ident();
            this.state = 127;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 125;
                this.match(DFOAParser.COLON);
                this.state = 126;
                this.type_();
                }
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
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 16, DFOAParser.RULE_statement);
        try {
            this.state = 132;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.PRINT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 129;
                this.printStatement();
                }
                break;
            case DFOAParser.NOT:
            case DFOAParser.NEW:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.MINUS:
            case DFOAParser.SIMPLE_IDENT:
            case DFOAParser.COMPLEX_IDENT:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 130;
                this.exprStatement();
                }
                break;
            case DFOAParser.SEMI:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 131;
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
        this.enterRule(localContext, 18, DFOAParser.RULE_printStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            this.match(DFOAParser.PRINT);
            this.state = 135;
            this.expr();
            this.state = 136;
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
        this.enterRule(localContext, 20, DFOAParser.RULE_exprStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
            this.expr();
            this.state = 139;
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
        this.enterRule(localContext, 22, DFOAParser.RULE_semi);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
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
        this.enterRule(localContext, 24, DFOAParser.RULE_block);
        let _la: number;
        try {
            this.state = 152;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 143;
                this.match(DFOAParser.LBRACE);
                this.state = 147;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & 4229251107) !== 0)) {
                    {
                    {
                    this.state = 144;
                    this.statement();
                    }
                    }
                    this.state = 149;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 150;
                this.match(DFOAParser.RBRACE);
                }
                break;
            case DFOAParser.PRINT:
            case DFOAParser.NOT:
            case DFOAParser.NEW:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.SEMI:
            case DFOAParser.MINUS:
            case DFOAParser.SIMPLE_IDENT:
            case DFOAParser.COMPLEX_IDENT:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 151;
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
        this.enterRule(localContext, 26, DFOAParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 154;
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
        this.enterRule(localContext, 28, DFOAParser.RULE_or);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.and();
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 157;
                this.match(DFOAParser.OR);
                this.state = 158;
                this.and();
                }
                }
                this.state = 163;
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
        this.enterRule(localContext, 30, DFOAParser.RULE_and);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.not();
            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 165;
                this.match(DFOAParser.AND);
                this.state = 166;
                this.not();
                }
                }
                this.state = 171;
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
        this.enterRule(localContext, 32, DFOAParser.RULE_not);
        try {
            this.state = 175;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 172;
                this.match(DFOAParser.NOT);
                this.state = 173;
                this.not();
                }
                break;
            case DFOAParser.NEW:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.MINUS:
            case DFOAParser.SIMPLE_IDENT:
            case DFOAParser.COMPLEX_IDENT:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 174;
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
        this.enterRule(localContext, 34, DFOAParser.RULE_comparison);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 177;
            this.addSub();
            this.state = 181;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 178;
                this.compOp();
                this.state = 179;
                this.addSub();
                }
                break;
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
        this.enterRule(localContext, 36, DFOAParser.RULE_compOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
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
        this.enterRule(localContext, 38, DFOAParser.RULE_addSub);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 185;
            this.multDiv();
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 21 || _la === 22) {
                {
                {
                this.state = 186;
                this.addSubOp();
                this.state = 187;
                this.multDiv();
                }
                }
                this.state = 193;
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
        this.enterRule(localContext, 40, DFOAParser.RULE_addSubOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
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
    public multDiv(): MultDivContext {
        let localContext = new MultDivContext(this.context, this.state);
        this.enterRule(localContext, 42, DFOAParser.RULE_multDiv);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 196;
            this.unop();
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                {
                this.state = 197;
                this.multDivOp();
                this.state = 198;
                this.unop();
                }
                }
                this.state = 204;
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
        this.enterRule(localContext, 44, DFOAParser.RULE_multDivOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            _la = this.tokenStream.LA(1);
            if(!(_la === 23 || _la === 24)) {
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
        this.enterRule(localContext, 46, DFOAParser.RULE_unop);
        try {
            this.state = 210;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.MINUS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 207;
                this.match(DFOAParser.MINUS);
                this.state = 208;
                this.unop();
                }
                break;
            case DFOAParser.NEW:
            case DFOAParser.LPAREN:
            case DFOAParser.LBRACK:
            case DFOAParser.SIMPLE_IDENT:
            case DFOAParser.COMPLEX_IDENT:
            case DFOAParser.STRING:
            case DFOAParser.TEXT:
            case DFOAParser.INTEGER:
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 209;
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
        this.enterRule(localContext, 48, DFOAParser.RULE_funcInvoke);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 212;
            this.match(DFOAParser.LPAREN);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 2114494481) !== 0)) {
                {
                this.state = 213;
                this.expr();
                this.state = 218;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 214;
                        this.match(DFOAParser.COMMA);
                        this.state = 215;
                        this.expr();
                        }
                        }
                    }
                    this.state = 220;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                }
                this.state = 222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 221;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 226;
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
        let _startState = 50;
        this.enterRecursionRule(localContext, 50, DFOAParser.RULE_trail, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new AtomTrailContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 229;
            this.atom();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 252;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 250;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 231;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 232;
                        this.match(DFOAParser.LBRACK);
                        this.state = 233;
                        this.expr();
                        this.state = 234;
                        this.match(DFOAParser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TupleAccessContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 236;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 237;
                        this.match(DFOAParser.DOT);
                        this.state = 238;
                        this.match(DFOAParser.INTEGER);
                        }
                        break;
                    case 3:
                        {
                        localContext = new TypeAliasContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 239;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 240;
                        this.match(DFOAParser.AS);
                        this.state = 241;
                        this.type_();
                        }
                        break;
                    case 4:
                        {
                        localContext = new AttributeContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 242;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 243;
                        this.match(DFOAParser.DOT);
                        this.state = 244;
                        this.ident();
                        }
                        break;
                    case 5:
                        {
                        localContext = new FuncCallTrailContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 245;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 247;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 12) {
                            {
                            this.state = 246;
                            this.generics();
                            }
                        }

                        this.state = 249;
                        this.funcInvoke();
                        }
                        break;
                    }
                    }
                }
                this.state = 254;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
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
        this.enterRule(localContext, 52, DFOAParser.RULE_atom);
        try {
            this.state = 264;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 255;
                this.list();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 256;
                this.tuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 257;
                this.literal();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 258;
                this.ident();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 259;
                this.newExpr();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 260;
                this.match(DFOAParser.LPAREN);
                this.state = 261;
                this.expr();
                this.state = 262;
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
    public newExpr(): NewExprContext {
        let localContext = new NewExprContext(this.context, this.state);
        this.enterRule(localContext, 54, DFOAParser.RULE_newExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 266;
            this.match(DFOAParser.NEW);
            this.state = 267;
            this.expr();
            this.state = 269;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 268;
                this.generics();
                }
            }

            this.state = 271;
            this.funcInvoke();
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
        this.enterRule(localContext, 56, DFOAParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 273;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 15) !== 0))) {
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
        this.enterRule(localContext, 58, DFOAParser.RULE_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 275;
            this.match(DFOAParser.LBRACK);
            this.state = 287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 2114494481) !== 0)) {
                {
                this.state = 276;
                this.expr();
                this.state = 281;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 277;
                        this.match(DFOAParser.COMMA);
                        this.state = 278;
                        this.expr();
                        }
                        }
                    }
                    this.state = 283;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                }
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 284;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 289;
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
        this.enterRule(localContext, 60, DFOAParser.RULE_tuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 291;
            this.match(DFOAParser.LPAREN);
            this.state = 305;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 292;
                this.expr();
                this.state = 293;
                this.match(DFOAParser.COMMA);
                }
                break;
            case 2:
                {
                this.state = 295;
                this.expr();
                this.state = 298;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 296;
                        this.match(DFOAParser.COMMA);
                        this.state = 297;
                        this.expr();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 300;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 302;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
                break;
            }
            this.state = 307;
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
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 62, DFOAParser.RULE_type);
        let _la: number;
        try {
            let alternative: number;
            this.state = 332;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                localContext = new TupleTypeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 309;
                this.match(DFOAParser.LPAREN);
                this.state = 321;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805371904) !== 0)) {
                    {
                    this.state = 310;
                    this.type_();
                    this.state = 315;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                    while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                        if (alternative === 1) {
                            {
                            {
                            this.state = 311;
                            this.match(DFOAParser.COMMA);
                            this.state = 312;
                            this.type_();
                            }
                            }
                        }
                        this.state = 317;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                    }
                    this.state = 319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 26) {
                        {
                        this.state = 318;
                        this.match(DFOAParser.COMMA);
                        }
                    }

                    }
                }

                this.state = 323;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 2:
                localContext = new GroupingTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 324;
                this.match(DFOAParser.LPAREN);
                this.state = 325;
                this.type_();
                this.state = 326;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 3:
                localContext = new BasicTypeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 328;
                this.ident();
                this.state = 330;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
                case 1:
                    {
                    this.state = 329;
                    this.generics();
                    }
                    break;
                }
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
    public generics(): GenericsContext {
        let localContext = new GenericsContext(this.context, this.state);
        this.enterRule(localContext, 64, DFOAParser.RULE_generics);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 334;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 335;
            this.type_();
            this.state = 340;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 336;
                    this.match(DFOAParser.COMMA);
                    this.state = 337;
                    this.type_();
                    }
                    }
                }
                this.state = 342;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 343;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 346;
            this.match(DFOAParser.RANGLE);
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
    public typeParam(): TypeParamContext {
        let localContext = new TypeParamContext(this.context, this.state);
        this.enterRule(localContext, 66, DFOAParser.RULE_typeParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 348;
            this.ident();
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
        this.enterRule(localContext, 68, DFOAParser.RULE_ident);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            _la = this.tokenStream.LA(1);
            if(!(_la === 28 || _la === 29)) {
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
        case 25:
            return this.trail_sempred(localContext as TrailContext, predIndex);
        }
        return true;
    }
    private trail_sempred(localContext: TrailContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 6);
        case 1:
            return this.precpred(this.context, 5);
        case 2:
            return this.precpred(this.context, 4);
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,36,353,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,1,0,5,0,72,8,0,10,0,12,0,75,9,0,1,0,1,0,1,1,1,1,1,
        2,1,2,1,2,1,2,1,2,1,3,3,3,87,8,3,1,3,1,3,3,3,91,8,3,1,4,1,4,1,4,
        1,4,5,4,97,8,4,10,4,12,4,100,9,4,1,4,3,4,103,8,4,1,4,1,4,1,5,1,5,
        1,5,1,5,5,5,111,8,5,10,5,12,5,114,9,5,1,5,3,5,117,8,5,3,5,119,8,
        5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,128,8,7,1,8,1,8,1,8,3,8,133,8,
        8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,5,12,146,8,
        12,10,12,12,12,149,9,12,1,12,1,12,3,12,153,8,12,1,13,1,13,1,14,1,
        14,1,14,5,14,160,8,14,10,14,12,14,163,9,14,1,15,1,15,1,15,5,15,168,
        8,15,10,15,12,15,171,9,15,1,16,1,16,1,16,3,16,176,8,16,1,17,1,17,
        1,17,1,17,3,17,182,8,17,1,18,1,18,1,19,1,19,1,19,1,19,5,19,190,8,
        19,10,19,12,19,193,9,19,1,20,1,20,1,21,1,21,1,21,1,21,5,21,201,8,
        21,10,21,12,21,204,9,21,1,22,1,22,1,23,1,23,1,23,3,23,211,8,23,1,
        24,1,24,1,24,1,24,5,24,217,8,24,10,24,12,24,220,9,24,1,24,3,24,223,
        8,24,3,24,225,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,
        248,8,25,1,25,5,25,251,8,25,10,25,12,25,254,9,25,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,3,26,265,8,26,1,27,1,27,1,27,3,27,
        270,8,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,5,29,280,8,29,10,
        29,12,29,283,9,29,1,29,3,29,286,8,29,3,29,288,8,29,1,29,1,29,1,30,
        1,30,1,30,1,30,1,30,1,30,1,30,4,30,299,8,30,11,30,12,30,300,1,30,
        3,30,304,8,30,3,30,306,8,30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,314,
        8,31,10,31,12,31,317,9,31,1,31,3,31,320,8,31,3,31,322,8,31,1,31,
        1,31,1,31,1,31,1,31,1,31,1,31,3,31,331,8,31,3,31,333,8,31,1,32,1,
        32,1,32,1,32,5,32,339,8,32,10,32,12,32,342,9,32,1,32,3,32,345,8,
        32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,0,1,50,35,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,0,5,1,0,8,13,1,0,21,22,1,0,23,24,1,0,30,33,1,0,
        28,29,367,0,73,1,0,0,0,2,78,1,0,0,0,4,80,1,0,0,0,6,86,1,0,0,0,8,
        92,1,0,0,0,10,106,1,0,0,0,12,122,1,0,0,0,14,124,1,0,0,0,16,132,1,
        0,0,0,18,134,1,0,0,0,20,138,1,0,0,0,22,141,1,0,0,0,24,152,1,0,0,
        0,26,154,1,0,0,0,28,156,1,0,0,0,30,164,1,0,0,0,32,175,1,0,0,0,34,
        177,1,0,0,0,36,183,1,0,0,0,38,185,1,0,0,0,40,194,1,0,0,0,42,196,
        1,0,0,0,44,205,1,0,0,0,46,210,1,0,0,0,48,212,1,0,0,0,50,228,1,0,
        0,0,52,264,1,0,0,0,54,266,1,0,0,0,56,273,1,0,0,0,58,275,1,0,0,0,
        60,291,1,0,0,0,62,332,1,0,0,0,64,334,1,0,0,0,66,348,1,0,0,0,68,350,
        1,0,0,0,70,72,3,2,1,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,
        73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,77,5,0,0,1,77,1,1,0,
        0,0,78,79,3,4,2,0,79,3,1,0,0,0,80,81,5,1,0,0,81,82,3,68,34,0,82,
        83,3,6,3,0,83,84,3,24,12,0,84,5,1,0,0,0,85,87,3,8,4,0,86,85,1,0,
        0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,90,3,10,5,0,89,91,3,12,6,0,90,
        89,1,0,0,0,90,91,1,0,0,0,91,7,1,0,0,0,92,93,5,12,0,0,93,98,3,66,
        33,0,94,95,5,26,0,0,95,97,3,66,33,0,96,94,1,0,0,0,97,100,1,0,0,0,
        98,96,1,0,0,0,98,99,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,103,
        5,26,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,105,
        5,13,0,0,105,9,1,0,0,0,106,118,5,16,0,0,107,112,3,14,7,0,108,109,
        5,26,0,0,109,111,3,14,7,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,
        1,0,0,0,112,113,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,115,117,
        5,26,0,0,116,115,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,107,
        1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,5,17,0,0,121,11,
        1,0,0,0,122,123,3,62,31,0,123,13,1,0,0,0,124,127,3,68,34,0,125,126,
        5,27,0,0,126,128,3,62,31,0,127,125,1,0,0,0,127,128,1,0,0,0,128,15,
        1,0,0,0,129,133,3,18,9,0,130,133,3,20,10,0,131,133,3,22,11,0,132,
        129,1,0,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,17,1,0,0,0,134,135,
        5,2,0,0,135,136,3,26,13,0,136,137,5,20,0,0,137,19,1,0,0,0,138,139,
        3,26,13,0,139,140,5,20,0,0,140,21,1,0,0,0,141,142,5,20,0,0,142,23,
        1,0,0,0,143,147,5,14,0,0,144,146,3,16,8,0,145,144,1,0,0,0,146,149,
        1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,
        1,0,0,0,150,153,5,15,0,0,151,153,3,16,8,0,152,143,1,0,0,0,152,151,
        1,0,0,0,153,25,1,0,0,0,154,155,3,28,14,0,155,27,1,0,0,0,156,161,
        3,30,15,0,157,158,5,5,0,0,158,160,3,30,15,0,159,157,1,0,0,0,160,
        163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,29,1,0,0,0,163,161,
        1,0,0,0,164,169,3,32,16,0,165,166,5,4,0,0,166,168,3,32,16,0,167,
        165,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,
        31,1,0,0,0,171,169,1,0,0,0,172,173,5,3,0,0,173,176,3,32,16,0,174,
        176,3,34,17,0,175,172,1,0,0,0,175,174,1,0,0,0,176,33,1,0,0,0,177,
        181,3,38,19,0,178,179,3,36,18,0,179,180,3,38,19,0,180,182,1,0,0,
        0,181,178,1,0,0,0,181,182,1,0,0,0,182,35,1,0,0,0,183,184,7,0,0,0,
        184,37,1,0,0,0,185,191,3,42,21,0,186,187,3,40,20,0,187,188,3,42,
        21,0,188,190,1,0,0,0,189,186,1,0,0,0,190,193,1,0,0,0,191,189,1,0,
        0,0,191,192,1,0,0,0,192,39,1,0,0,0,193,191,1,0,0,0,194,195,7,1,0,
        0,195,41,1,0,0,0,196,202,3,46,23,0,197,198,3,44,22,0,198,199,3,46,
        23,0,199,201,1,0,0,0,200,197,1,0,0,0,201,204,1,0,0,0,202,200,1,0,
        0,0,202,203,1,0,0,0,203,43,1,0,0,0,204,202,1,0,0,0,205,206,7,2,0,
        0,206,45,1,0,0,0,207,208,5,22,0,0,208,211,3,46,23,0,209,211,3,50,
        25,0,210,207,1,0,0,0,210,209,1,0,0,0,211,47,1,0,0,0,212,224,5,16,
        0,0,213,218,3,26,13,0,214,215,5,26,0,0,215,217,3,26,13,0,216,214,
        1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,222,
        1,0,0,0,220,218,1,0,0,0,221,223,5,26,0,0,222,221,1,0,0,0,222,223,
        1,0,0,0,223,225,1,0,0,0,224,213,1,0,0,0,224,225,1,0,0,0,225,226,
        1,0,0,0,226,227,5,17,0,0,227,49,1,0,0,0,228,229,6,25,-1,0,229,230,
        3,52,26,0,230,252,1,0,0,0,231,232,10,6,0,0,232,233,5,18,0,0,233,
        234,3,26,13,0,234,235,5,19,0,0,235,251,1,0,0,0,236,237,10,5,0,0,
        237,238,5,25,0,0,238,251,5,32,0,0,239,240,10,4,0,0,240,241,5,6,0,
        0,241,251,3,62,31,0,242,243,10,3,0,0,243,244,5,25,0,0,244,251,3,
        68,34,0,245,247,10,2,0,0,246,248,3,64,32,0,247,246,1,0,0,0,247,248,
        1,0,0,0,248,249,1,0,0,0,249,251,3,48,24,0,250,231,1,0,0,0,250,236,
        1,0,0,0,250,239,1,0,0,0,250,242,1,0,0,0,250,245,1,0,0,0,251,254,
        1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,51,1,0,0,0,254,252,1,
        0,0,0,255,265,3,58,29,0,256,265,3,60,30,0,257,265,3,56,28,0,258,
        265,3,68,34,0,259,265,3,54,27,0,260,261,5,16,0,0,261,262,3,26,13,
        0,262,263,5,17,0,0,263,265,1,0,0,0,264,255,1,0,0,0,264,256,1,0,0,
        0,264,257,1,0,0,0,264,258,1,0,0,0,264,259,1,0,0,0,264,260,1,0,0,
        0,265,53,1,0,0,0,266,267,5,7,0,0,267,269,3,26,13,0,268,270,3,64,
        32,0,269,268,1,0,0,0,269,270,1,0,0,0,270,271,1,0,0,0,271,272,3,48,
        24,0,272,55,1,0,0,0,273,274,7,3,0,0,274,57,1,0,0,0,275,287,5,18,
        0,0,276,281,3,26,13,0,277,278,5,26,0,0,278,280,3,26,13,0,279,277,
        1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,285,
        1,0,0,0,283,281,1,0,0,0,284,286,5,26,0,0,285,284,1,0,0,0,285,286,
        1,0,0,0,286,288,1,0,0,0,287,276,1,0,0,0,287,288,1,0,0,0,288,289,
        1,0,0,0,289,290,5,19,0,0,290,59,1,0,0,0,291,305,5,16,0,0,292,293,
        3,26,13,0,293,294,5,26,0,0,294,306,1,0,0,0,295,298,3,26,13,0,296,
        297,5,26,0,0,297,299,3,26,13,0,298,296,1,0,0,0,299,300,1,0,0,0,300,
        298,1,0,0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,304,5,26,0,0,303,
        302,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,292,1,0,0,0,305,
        295,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,308,5,17,0,0,308,
        61,1,0,0,0,309,321,5,16,0,0,310,315,3,62,31,0,311,312,5,26,0,0,312,
        314,3,62,31,0,313,311,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,
        316,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,318,320,5,26,0,0,319,
        318,1,0,0,0,319,320,1,0,0,0,320,322,1,0,0,0,321,310,1,0,0,0,321,
        322,1,0,0,0,322,323,1,0,0,0,323,333,5,17,0,0,324,325,5,16,0,0,325,
        326,3,62,31,0,326,327,5,17,0,0,327,333,1,0,0,0,328,330,3,68,34,0,
        329,331,3,64,32,0,330,329,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,
        0,332,309,1,0,0,0,332,324,1,0,0,0,332,328,1,0,0,0,333,63,1,0,0,0,
        334,335,5,12,0,0,335,340,3,62,31,0,336,337,5,26,0,0,337,339,3,62,
        31,0,338,336,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,
        0,0,341,344,1,0,0,0,342,340,1,0,0,0,343,345,5,26,0,0,344,343,1,0,
        0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,347,5,13,0,0,347,65,1,0,
        0,0,348,349,3,68,34,0,349,67,1,0,0,0,350,351,7,4,0,0,351,69,1,0,
        0,0,40,73,86,90,98,102,112,116,118,127,132,147,152,161,169,175,181,
        191,202,210,218,222,224,247,250,252,264,269,281,285,287,300,303,
        305,315,319,321,330,332,340,344
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
    public signature(): SignatureContext {
        return this.getRuleContext(0, SignatureContext)!;
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


export class SignatureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public paramslist(): ParamslistContext {
        return this.getRuleContext(0, ParamslistContext)!;
    }
    public genericDef(): GenericDefContext | null {
        return this.getRuleContext(0, GenericDefContext);
    }
    public returnSig(): ReturnSigContext | null {
        return this.getRuleContext(0, ReturnSigContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_signature;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterSignature) {
             listener.enterSignature(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitSignature) {
             listener.exitSignature(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitSignature) {
            return visitor.visitSignature(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericDefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LANGLE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LANGLE, 0)!;
    }
    public RANGLE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RANGLE, 0)!;
    }
    public typeParam(): TypeParamContext[];
    public typeParam(i: number): TypeParamContext | null;
    public typeParam(i?: number): TypeParamContext[] | TypeParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParamContext);
        }

        return this.getRuleContext(i, TypeParamContext);
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
        return DFOAParser.RULE_genericDef;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterGenericDef) {
             listener.enterGenericDef(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitGenericDef) {
             listener.exitGenericDef(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitGenericDef) {
            return visitor.visitGenericDef(this);
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
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
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


export class ReturnSigContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_returnSig;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterReturnSig) {
             listener.enterReturnSig(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitReturnSig) {
             listener.exitReturnSig(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitReturnSig) {
            return visitor.visitReturnSig(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.COLON, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_param;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
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
    public compOp(): CompOpContext | null {
        return this.getRuleContext(0, CompOpContext);
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
export class TypeAliasContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public trail(): TrailContext {
        return this.getRuleContext(0, TrailContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(DFOAParser.AS, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTypeAlias) {
             listener.enterTypeAlias(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTypeAlias) {
             listener.exitTypeAlias(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
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
export class FuncCallTrailContext extends TrailContext {
    public constructor(ctx: TrailContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public trail(): TrailContext {
        return this.getRuleContext(0, TrailContext)!;
    }
    public funcInvoke(): FuncInvokeContext {
        return this.getRuleContext(0, FuncInvokeContext)!;
    }
    public generics(): GenericsContext | null {
        return this.getRuleContext(0, GenericsContext);
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterFuncCallTrail) {
             listener.enterFuncCallTrail(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitFuncCallTrail) {
             listener.exitFuncCallTrail(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitFuncCallTrail) {
            return visitor.visitFuncCallTrail(this);
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
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public newExpr(): NewExprContext | null {
        return this.getRuleContext(0, NewExprContext);
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


export class NewExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEW(): antlr.TerminalNode {
        return this.getToken(DFOAParser.NEW, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public funcInvoke(): FuncInvokeContext {
        return this.getRuleContext(0, FuncInvokeContext)!;
    }
    public generics(): GenericsContext | null {
        return this.getRuleContext(0, GenericsContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_newExpr;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterNewExpr) {
             listener.enterNewExpr(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitNewExpr) {
             listener.exitNewExpr(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitNewExpr) {
            return visitor.visitNewExpr(this);
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


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_type;
    }
    public override copyFrom(ctx: TypeContext): void {
        super.copyFrom(ctx);
    }
}
export class TupleTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RPAREN, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
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
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTupleType) {
             listener.enterTupleType(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTupleType) {
             listener.exitTupleType(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTupleType) {
            return visitor.visitTupleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LPAREN, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RPAREN, 0)!;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterGroupingType) {
             listener.enterGroupingType(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitGroupingType) {
             listener.exitGroupingType(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitGroupingType) {
            return visitor.visitGroupingType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BasicTypeContext extends TypeContext {
    public constructor(ctx: TypeContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public generics(): GenericsContext | null {
        return this.getRuleContext(0, GenericsContext);
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterBasicType) {
             listener.enterBasicType(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitBasicType) {
             listener.exitBasicType(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitBasicType) {
            return visitor.visitBasicType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LANGLE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LANGLE, 0)!;
    }
    public RANGLE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RANGLE, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
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
        return DFOAParser.RULE_generics;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterGenerics) {
             listener.enterGenerics(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitGenerics) {
             listener.exitGenerics(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitGenerics) {
            return visitor.visitGenerics(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_typeParam;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterTypeParam) {
             listener.enterTypeParam(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitTypeParam) {
             listener.exitTypeParam(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitTypeParam) {
            return visitor.visitTypeParam(this);
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
