
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
    public static readonly IF = 8;
    public static readonly ELSE = 9;
    public static readonly FOR = 10;
    public static readonly IN = 11;
    public static readonly WHILE = 12;
    public static readonly LET = 13;
    public static readonly RETURN = 14;
    public static readonly BREAK = 15;
    public static readonly CONTINUE = 16;
    public static readonly TRUE = 17;
    public static readonly FALSE = 18;
    public static readonly GLOBAL = 19;
    public static readonly PERSISTENT = 20;
    public static readonly LOCAL = 21;
    public static readonly LINE = 22;
    public static readonly EQEQ = 23;
    public static readonly LE = 24;
    public static readonly GE = 25;
    public static readonly NEQ = 26;
    public static readonly LANGLE = 27;
    public static readonly RANGLE = 28;
    public static readonly LBRACE = 29;
    public static readonly RBRACE = 30;
    public static readonly LPAREN = 31;
    public static readonly RPAREN = 32;
    public static readonly LBRACK = 33;
    public static readonly RBRACK = 34;
    public static readonly SEMI = 35;
    public static readonly PLUS = 36;
    public static readonly MINUS = 37;
    public static readonly STAR = 38;
    public static readonly SLASH = 39;
    public static readonly DOT = 40;
    public static readonly COMMA = 41;
    public static readonly COLON = 42;
    public static readonly EQUALS = 43;
    public static readonly SIMPLE_IDENT = 44;
    public static readonly COMPLEX_IDENT = 45;
    public static readonly STRING = 46;
    public static readonly TEXT = 47;
    public static readonly INTEGER = 48;
    public static readonly FLOAT = 49;
    public static readonly WS = 50;
    public static readonly COMMENT = 51;
    public static readonly DOC_COMMENT = 52;
    public static readonly MULT_LINE_COMMENT = 53;
    public static readonly RULE_start = 0;
    public static readonly RULE_tlStatement = 1;
    public static readonly RULE_func = 2;
    public static readonly RULE_signature = 3;
    public static readonly RULE_genericDef = 4;
    public static readonly RULE_paramslist = 5;
    public static readonly RULE_returnSig = 6;
    public static readonly RULE_param = 7;
    public static readonly RULE_statement = 8;
    public static readonly RULE_if = 9;
    public static readonly RULE_for = 10;
    public static readonly RULE_while = 11;
    public static readonly RULE_break = 12;
    public static readonly RULE_continue = 13;
    public static readonly RULE_let = 14;
    public static readonly RULE_assign = 15;
    public static readonly RULE_return = 16;
    public static readonly RULE_print = 17;
    public static readonly RULE_exprStmt = 18;
    public static readonly RULE_semi = 19;
    public static readonly RULE_block = 20;
    public static readonly RULE_varDeclList = 21;
    public static readonly RULE_varDecl = 22;
    public static readonly RULE_expr = 23;
    public static readonly RULE_or = 24;
    public static readonly RULE_and = 25;
    public static readonly RULE_not = 26;
    public static readonly RULE_comparison = 27;
    public static readonly RULE_compOp = 28;
    public static readonly RULE_addSub = 29;
    public static readonly RULE_addSubOp = 30;
    public static readonly RULE_multDiv = 31;
    public static readonly RULE_multDivOp = 32;
    public static readonly RULE_unop = 33;
    public static readonly RULE_funcInvoke = 34;
    public static readonly RULE_trail = 35;
    public static readonly RULE_atom = 36;
    public static readonly RULE_newExpr = 37;
    public static readonly RULE_variable = 38;
    public static readonly RULE_literal = 39;
    public static readonly RULE_list = 40;
    public static readonly RULE_tuple = 41;
    public static readonly RULE_lifetime = 42;
    public static readonly RULE_type = 43;
    public static readonly RULE_generics = 44;
    public static readonly RULE_typeParam = 45;
    public static readonly RULE_ident = 46;

    public static readonly literalNames = [
        null, "'func'", "'print'", "'not'", "'and'", "'or'", "'as'", "'new'", 
        "'if'", "'else'", "'for'", "'in'", "'while'", "'let'", "'return'", 
        "'break'", "'continue'", "'true'", "'false'", "'global'", "'saved'", 
        "'local'", "'line'", "'=='", "'<='", "'>='", "'!='", "'<'", "'>'", 
        "'{'", "'}'", "'('", "')'", "'['", "']'", "';'", "'+'", "'-'", "'*'", 
        "'/'", "'.'", "','", "':'", "'='"
    ];

    public static readonly symbolicNames = [
        null, "FUNC", "PRINT", "NOT", "AND", "OR", "AS", "NEW", "IF", "ELSE", 
        "FOR", "IN", "WHILE", "LET", "RETURN", "BREAK", "CONTINUE", "TRUE", 
        "FALSE", "GLOBAL", "PERSISTENT", "LOCAL", "LINE", "EQEQ", "LE", 
        "GE", "NEQ", "LANGLE", "RANGLE", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
        "LBRACK", "RBRACK", "SEMI", "PLUS", "MINUS", "STAR", "SLASH", "DOT", 
        "COMMA", "COLON", "EQUALS", "SIMPLE_IDENT", "COMPLEX_IDENT", "STRING", 
        "TEXT", "INTEGER", "FLOAT", "WS", "COMMENT", "DOC_COMMENT", "MULT_LINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "start", "tlStatement", "func", "signature", "genericDef", "paramslist", 
        "returnSig", "param", "statement", "if", "for", "while", "break", 
        "continue", "let", "assign", "return", "print", "exprStmt", "semi", 
        "block", "varDeclList", "varDecl", "expr", "or", "and", "not", "comparison", 
        "compOp", "addSub", "addSubOp", "multDiv", "multDivOp", "unop", 
        "funcInvoke", "trail", "atom", "newExpr", "variable", "literal", 
        "list", "tuple", "lifetime", "type", "generics", "typeParam", "ident",
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
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1 || _la === 52) {
                {
                {
                this.state = 94;
                this.tlStatement();
                }
                }
                this.state = 99;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 100;
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
            this.state = 102;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 104;
                this.match(DFOAParser.DOC_COMMENT);
                }
            }

            this.state = 107;
            this.match(DFOAParser.FUNC);
            this.state = 108;
            this.ident();
            this.state = 109;
            this.signature();
            this.state = 110;
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
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 112;
                this.genericDef();
                }
            }

            this.state = 115;
            this.paramslist();
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 116;
                this.returnSig();
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
    public genericDef(): GenericDefContext {
        let localContext = new GenericDefContext(this.context, this.state);
        this.enterRule(localContext, 8, DFOAParser.RULE_genericDef);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 119;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 120;
            this.typeParam();
            this.state = 125;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 121;
                    this.match(DFOAParser.COMMA);
                    this.state = 122;
                    this.typeParam();
                    }
                    }
                }
                this.state = 127;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 128;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 131;
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
            this.state = 133;
            this.match(DFOAParser.LPAREN);
            this.state = 145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44 || _la === 45) {
                {
                this.state = 134;
                this.param();
                this.state = 139;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 135;
                        this.match(DFOAParser.COMMA);
                        this.state = 136;
                        this.param();
                        }
                        }
                    }
                    this.state = 141;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                }
                this.state = 143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 142;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 147;
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
            this.state = 149;
            this.match(DFOAParser.COLON);
            this.state = 150;
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
            this.state = 152;
            this.ident();
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 153;
                this.match(DFOAParser.COLON);
                this.state = 154;
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
            this.state = 168;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 157;
                this.print();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 158;
                this.exprStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 159;
                this.if_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 160;
                this.for_();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 161;
                this.while_();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 162;
                this.let_();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 163;
                this.assign();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 164;
                this.return_();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 165;
                this.break_();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 166;
                this.continue_();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 167;
                this.semi();
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
    public if_(): IfContext {
        let localContext = new IfContext(this.context, this.state);
        this.enterRule(localContext, 18, DFOAParser.RULE_if);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(DFOAParser.IF);
            this.state = 171;
            this.expr();
            this.state = 172;
            this.block();
            this.state = 175;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 173;
                this.match(DFOAParser.ELSE);
                this.state = 174;
                this.block();
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
    public for_(): ForContext {
        let localContext = new ForContext(this.context, this.state);
        this.enterRule(localContext, 20, DFOAParser.RULE_for);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 177;
            this.match(DFOAParser.FOR);
            this.state = 178;
            this.varDeclList();
            this.state = 179;
            this.match(DFOAParser.IN);
            this.state = 180;
            this.expr();
            this.state = 181;
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
    public while_(): WhileContext {
        let localContext = new WhileContext(this.context, this.state);
        this.enterRule(localContext, 22, DFOAParser.RULE_while);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.match(DFOAParser.WHILE);
            this.state = 184;
            this.expr();
            this.state = 185;
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
    public break_(): BreakContext {
        let localContext = new BreakContext(this.context, this.state);
        this.enterRule(localContext, 24, DFOAParser.RULE_break);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.match(DFOAParser.BREAK);
            this.state = 188;
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
    public continue_(): ContinueContext {
        let localContext = new ContinueContext(this.context, this.state);
        this.enterRule(localContext, 26, DFOAParser.RULE_continue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            this.match(DFOAParser.CONTINUE);
            this.state = 191;
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
    public let_(): LetContext {
        let localContext = new LetContext(this.context, this.state);
        this.enterRule(localContext, 28, DFOAParser.RULE_let);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 193;
            this.varDeclList();
            this.state = 196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 194;
                this.match(DFOAParser.EQUALS);
                this.state = 195;
                this.expr();
                }
            }

            this.state = 198;
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
    public assign(): AssignContext {
        let localContext = new AssignContext(this.context, this.state);
        this.enterRule(localContext, 30, DFOAParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.varDecl();
            this.state = 201;
            this.match(DFOAParser.EQUALS);
            this.state = 202;
            this.expr();
            this.state = 203;
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
    public return_(): ReturnContext {
        let localContext = new ReturnContext(this.context, this.state);
        this.enterRule(localContext, 32, DFOAParser.RULE_return);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.match(DFOAParser.RETURN);
            this.state = 207;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 206;
                this.expr();
                }
            }

            this.state = 209;
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
    public print(): PrintContext {
        let localContext = new PrintContext(this.context, this.state);
        this.enterRule(localContext, 34, DFOAParser.RULE_print);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.match(DFOAParser.PRINT);
            this.state = 212;
            this.expr();
            this.state = 213;
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
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 36, DFOAParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.expr();
            this.state = 216;
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
        this.enterRule(localContext, 38, DFOAParser.RULE_semi);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 218;
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
        this.enterRule(localContext, 40, DFOAParser.RULE_block);
        let _la: number;
        try {
            this.state = 229;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 220;
                this.match(DFOAParser.LBRACE);
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155869580) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129045) !== 0)) {
                    {
                    {
                    this.state = 221;
                    this.statement();
                    }
                    }
                    this.state = 226;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 227;
                this.match(DFOAParser.RBRACE);
                }
                break;
            case DFOAParser.PRINT:
            case DFOAParser.NOT:
            case DFOAParser.NEW:
            case DFOAParser.IF:
            case DFOAParser.FOR:
            case DFOAParser.WHILE:
            case DFOAParser.LET:
            case DFOAParser.RETURN:
            case DFOAParser.BREAK:
            case DFOAParser.CONTINUE:
            case DFOAParser.TRUE:
            case DFOAParser.FALSE:
            case DFOAParser.GLOBAL:
            case DFOAParser.PERSISTENT:
            case DFOAParser.LOCAL:
            case DFOAParser.LINE:
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
                this.state = 228;
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
    public varDeclList(): VarDeclListContext {
        let localContext = new VarDeclListContext(this.context, this.state);
        this.enterRule(localContext, 42, DFOAParser.RULE_varDeclList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 231;
            this.match(DFOAParser.LET);
            this.state = 232;
            this.varDecl();
            this.state = 237;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 233;
                    this.match(DFOAParser.COMMA);
                    this.state = 234;
                    this.varDecl();
                    }
                    }
                }
                this.state = 239;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 240;
                this.match(DFOAParser.COMMA);
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
    public varDecl(): VarDeclContext {
        let localContext = new VarDeclContext(this.context, this.state);
        this.enterRule(localContext, 44, DFOAParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.variable();
            this.state = 246;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 244;
                this.match(DFOAParser.COLON);
                this.state = 245;
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
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 46, DFOAParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
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
        this.enterRule(localContext, 48, DFOAParser.RULE_or);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.and();
            this.state = 255;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 251;
                this.match(DFOAParser.OR);
                this.state = 252;
                this.and();
                }
                }
                this.state = 257;
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
        this.enterRule(localContext, 50, DFOAParser.RULE_and);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 258;
            this.not();
            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 259;
                this.match(DFOAParser.AND);
                this.state = 260;
                this.not();
                }
                }
                this.state = 265;
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
        this.enterRule(localContext, 52, DFOAParser.RULE_not);
        try {
            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 266;
                this.match(DFOAParser.NOT);
                this.state = 267;
                this.not();
                }
                break;
            case DFOAParser.NEW:
            case DFOAParser.TRUE:
            case DFOAParser.FALSE:
            case DFOAParser.GLOBAL:
            case DFOAParser.PERSISTENT:
            case DFOAParser.LOCAL:
            case DFOAParser.LINE:
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
                this.state = 268;
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
        this.enterRule(localContext, 54, DFOAParser.RULE_comparison);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.addSub();
            this.state = 275;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 272;
                this.compOp();
                this.state = 273;
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
        this.enterRule(localContext, 56, DFOAParser.RULE_compOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 277;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
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
        this.enterRule(localContext, 58, DFOAParser.RULE_addSub);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.multDiv();
            this.state = 285;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 280;
                    this.addSubOp();
                    this.state = 281;
                    this.multDiv();
                    }
                    }
                }
                this.state = 287;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
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
        this.enterRule(localContext, 60, DFOAParser.RULE_addSubOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 288;
            _la = this.tokenStream.LA(1);
            if(!(_la === 36 || _la === 37)) {
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
        this.enterRule(localContext, 62, DFOAParser.RULE_multDiv);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 290;
            this.unop();
            this.state = 296;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 38 || _la === 39) {
                {
                {
                this.state = 291;
                this.multDivOp();
                this.state = 292;
                this.unop();
                }
                }
                this.state = 298;
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
        this.enterRule(localContext, 64, DFOAParser.RULE_multDivOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 299;
            _la = this.tokenStream.LA(1);
            if(!(_la === 38 || _la === 39)) {
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
        this.enterRule(localContext, 66, DFOAParser.RULE_unop);
        try {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.MINUS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 301;
                this.match(DFOAParser.MINUS);
                this.state = 302;
                this.unop();
                }
                break;
            case DFOAParser.NEW:
            case DFOAParser.TRUE:
            case DFOAParser.FALSE:
            case DFOAParser.GLOBAL:
            case DFOAParser.PERSISTENT:
            case DFOAParser.LOCAL:
            case DFOAParser.LINE:
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
                this.state = 303;
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
        this.enterRule(localContext, 68, DFOAParser.RULE_funcInvoke);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.match(DFOAParser.LPAREN);
            this.state = 318;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 307;
                this.expr();
                this.state = 312;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 308;
                        this.match(DFOAParser.COMMA);
                        this.state = 309;
                        this.expr();
                        }
                        }
                    }
                    this.state = 314;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
                }
                this.state = 316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 315;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 320;
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
        let _startState = 70;
        this.enterRecursionRule(localContext, 70, DFOAParser.RULE_trail, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new AtomTrailContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 323;
            this.atom();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 346;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 344;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 325;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 326;
                        this.match(DFOAParser.LBRACK);
                        this.state = 327;
                        this.expr();
                        this.state = 328;
                        this.match(DFOAParser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TupleAccessContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 330;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 331;
                        this.match(DFOAParser.DOT);
                        this.state = 332;
                        this.match(DFOAParser.INTEGER);
                        }
                        break;
                    case 3:
                        {
                        localContext = new TypeAliasContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 333;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 334;
                        this.match(DFOAParser.AS);
                        this.state = 335;
                        this.type_();
                        }
                        break;
                    case 4:
                        {
                        localContext = new AttributeContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 336;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 337;
                        this.match(DFOAParser.DOT);
                        this.state = 338;
                        this.ident();
                        }
                        break;
                    case 5:
                        {
                        localContext = new FuncCallTrailContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 339;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 341;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                            this.state = 340;
                            this.generics();
                            }
                        }

                        this.state = 343;
                        this.funcInvoke();
                        }
                        break;
                    }
                    }
                }
                this.state = 348;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
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
        this.enterRule(localContext, 72, DFOAParser.RULE_atom);
        try {
            this.state = 358;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 349;
                this.list();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 350;
                this.tuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 351;
                this.literal();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 352;
                this.variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 353;
                this.newExpr();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 354;
                this.match(DFOAParser.LPAREN);
                this.state = 355;
                this.expr();
                this.state = 356;
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
        this.enterRule(localContext, 74, DFOAParser.RULE_newExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 360;
            this.match(DFOAParser.NEW);
            this.state = 361;
            this.expr();
            this.state = 363;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 362;
                this.generics();
                }
            }

            this.state = 365;
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
    public variable(): VariableContext {
        let localContext = new VariableContext(this.context, this.state);
        this.enterRule(localContext, 76, DFOAParser.RULE_variable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7864320) !== 0)) {
                {
                this.state = 367;
                this.lifetime();
                }
            }

            this.state = 370;
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 78, DFOAParser.RULE_literal);
        try {
            let alternative: number;
            this.state = 386;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.INTEGER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 372;
                this.match(DFOAParser.INTEGER);
                }
                break;
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 373;
                this.match(DFOAParser.FLOAT);
                }
                break;
            case DFOAParser.STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 375;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 374;
                        this.match(DFOAParser.STRING);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 377;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case DFOAParser.TEXT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 380;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 379;
                        this.match(DFOAParser.TEXT);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 382;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case DFOAParser.TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 384;
                this.match(DFOAParser.TRUE);
                }
                break;
            case DFOAParser.FALSE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 385;
                this.match(DFOAParser.FALSE);
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
    public list(): ListContext {
        let localContext = new ListContext(this.context, this.state);
        this.enterRule(localContext, 80, DFOAParser.RULE_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 388;
            this.match(DFOAParser.LBRACK);
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 389;
                this.expr();
                this.state = 394;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 390;
                        this.match(DFOAParser.COMMA);
                        this.state = 391;
                        this.expr();
                        }
                        }
                    }
                    this.state = 396;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                }
                this.state = 398;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 397;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 402;
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
        this.enterRule(localContext, 82, DFOAParser.RULE_tuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.match(DFOAParser.LPAREN);
            this.state = 418;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 405;
                this.expr();
                this.state = 406;
                this.match(DFOAParser.COMMA);
                }
                break;
            case 2:
                {
                this.state = 408;
                this.expr();
                this.state = 411;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 409;
                        this.match(DFOAParser.COMMA);
                        this.state = 410;
                        this.expr();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 413;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 416;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 415;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
                break;
            }
            this.state = 420;
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
    public lifetime(): LifetimeContext {
        let localContext = new LifetimeContext(this.context, this.state);
        this.enterRule(localContext, 84, DFOAParser.RULE_lifetime);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 422;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7864320) !== 0))) {
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
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 86, DFOAParser.RULE_type);
        let _la: number;
        try {
            let alternative: number;
            this.state = 449;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                localContext = new TupleTypeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 424;
                this.match(DFOAParser.LPAREN);
                this.state = 438;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
                case 1:
                    {
                    this.state = 425;
                    this.type_();
                    this.state = 426;
                    this.match(DFOAParser.COMMA);
                    }
                    break;
                case 2:
                    {
                    this.state = 428;
                    this.type_();
                    this.state = 431;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 429;
                            this.match(DFOAParser.COMMA);
                            this.state = 430;
                            this.type_();
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 433;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    this.state = 436;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 41) {
                        {
                        this.state = 435;
                        this.match(DFOAParser.COMMA);
                        }
                    }

                    }
                    break;
                }
                this.state = 440;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 2:
                localContext = new GroupingTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 441;
                this.match(DFOAParser.LPAREN);
                this.state = 442;
                this.type_();
                this.state = 443;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 3:
                localContext = new BasicTypeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 445;
                this.ident();
                this.state = 447;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                case 1:
                    {
                    this.state = 446;
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
        this.enterRule(localContext, 88, DFOAParser.RULE_generics);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 451;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 452;
            this.type_();
            this.state = 457;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 453;
                    this.match(DFOAParser.COMMA);
                    this.state = 454;
                    this.type_();
                    }
                    }
                }
                this.state = 459;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            }
            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 460;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 463;
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
        this.enterRule(localContext, 90, DFOAParser.RULE_typeParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 465;
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
        this.enterRule(localContext, 92, DFOAParser.RULE_ident);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
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
        case 35:
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
        4,1,53,470,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,1,0,5,0,96,8,0,10,0,12,0,99,9,0,1,0,1,0,1,1,1,1,1,2,3,2,106,
        8,2,1,2,1,2,1,2,1,2,1,2,1,3,3,3,114,8,3,1,3,1,3,3,3,118,8,3,1,4,
        1,4,1,4,1,4,5,4,124,8,4,10,4,12,4,127,9,4,1,4,3,4,130,8,4,1,4,1,
        4,1,5,1,5,1,5,1,5,5,5,138,8,5,10,5,12,5,141,9,5,1,5,3,5,144,8,5,
        3,5,146,8,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,3,7,156,8,7,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,169,8,8,1,9,1,9,1,9,1,9,
        1,9,3,9,176,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,
        1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,3,14,197,8,14,1,14,
        1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,3,16,208,8,16,1,16,1,16,
        1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,20,1,20,5,20,223,
        8,20,10,20,12,20,226,9,20,1,20,1,20,3,20,230,8,20,1,21,1,21,1,21,
        1,21,5,21,236,8,21,10,21,12,21,239,9,21,1,21,3,21,242,8,21,1,22,
        1,22,1,22,3,22,247,8,22,1,23,1,23,1,24,1,24,1,24,5,24,254,8,24,10,
        24,12,24,257,9,24,1,25,1,25,1,25,5,25,262,8,25,10,25,12,25,265,9,
        25,1,26,1,26,1,26,3,26,270,8,26,1,27,1,27,1,27,1,27,3,27,276,8,27,
        1,28,1,28,1,29,1,29,1,29,1,29,5,29,284,8,29,10,29,12,29,287,9,29,
        1,30,1,30,1,31,1,31,1,31,1,31,5,31,295,8,31,10,31,12,31,298,9,31,
        1,32,1,32,1,33,1,33,1,33,3,33,305,8,33,1,34,1,34,1,34,1,34,5,34,
        311,8,34,10,34,12,34,314,9,34,1,34,3,34,317,8,34,3,34,319,8,34,1,
        34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,342,8,35,1,35,5,35,345,
        8,35,10,35,12,35,348,9,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,3,36,359,8,36,1,37,1,37,1,37,3,37,364,8,37,1,37,1,37,1,38,3,
        38,369,8,38,1,38,1,38,1,39,1,39,1,39,4,39,376,8,39,11,39,12,39,377,
        1,39,4,39,381,8,39,11,39,12,39,382,1,39,1,39,3,39,387,8,39,1,40,
        1,40,1,40,1,40,5,40,393,8,40,10,40,12,40,396,9,40,1,40,3,40,399,
        8,40,3,40,401,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        4,41,412,8,41,11,41,12,41,413,1,41,3,41,417,8,41,3,41,419,8,41,1,
        41,1,41,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,4,43,432,8,
        43,11,43,12,43,433,1,43,3,43,437,8,43,3,43,439,8,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,3,43,448,8,43,3,43,450,8,43,1,44,1,44,1,44,
        1,44,5,44,456,8,44,10,44,12,44,459,9,44,1,44,3,44,462,8,44,1,44,
        1,44,1,45,1,45,1,46,1,46,1,46,0,1,70,47,0,2,4,6,8,10,12,14,16,18,
        20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
        64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,0,5,1,0,23,28,1,0,36,
        37,1,0,38,39,1,0,19,22,1,0,44,45,496,0,97,1,0,0,0,2,102,1,0,0,0,
        4,105,1,0,0,0,6,113,1,0,0,0,8,119,1,0,0,0,10,133,1,0,0,0,12,149,
        1,0,0,0,14,152,1,0,0,0,16,168,1,0,0,0,18,170,1,0,0,0,20,177,1,0,
        0,0,22,183,1,0,0,0,24,187,1,0,0,0,26,190,1,0,0,0,28,193,1,0,0,0,
        30,200,1,0,0,0,32,205,1,0,0,0,34,211,1,0,0,0,36,215,1,0,0,0,38,218,
        1,0,0,0,40,229,1,0,0,0,42,231,1,0,0,0,44,243,1,0,0,0,46,248,1,0,
        0,0,48,250,1,0,0,0,50,258,1,0,0,0,52,269,1,0,0,0,54,271,1,0,0,0,
        56,277,1,0,0,0,58,279,1,0,0,0,60,288,1,0,0,0,62,290,1,0,0,0,64,299,
        1,0,0,0,66,304,1,0,0,0,68,306,1,0,0,0,70,322,1,0,0,0,72,358,1,0,
        0,0,74,360,1,0,0,0,76,368,1,0,0,0,78,386,1,0,0,0,80,388,1,0,0,0,
        82,404,1,0,0,0,84,422,1,0,0,0,86,449,1,0,0,0,88,451,1,0,0,0,90,465,
        1,0,0,0,92,467,1,0,0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,
        97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,
        5,0,0,1,101,1,1,0,0,0,102,103,3,4,2,0,103,3,1,0,0,0,104,106,5,52,
        0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,108,5,1,
        0,0,108,109,3,92,46,0,109,110,3,6,3,0,110,111,3,40,20,0,111,5,1,
        0,0,0,112,114,3,8,4,0,113,112,1,0,0,0,113,114,1,0,0,0,114,115,1,
        0,0,0,115,117,3,10,5,0,116,118,3,12,6,0,117,116,1,0,0,0,117,118,
        1,0,0,0,118,7,1,0,0,0,119,120,5,27,0,0,120,125,3,90,45,0,121,122,
        5,41,0,0,122,124,3,90,45,0,123,121,1,0,0,0,124,127,1,0,0,0,125,123,
        1,0,0,0,125,126,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,128,130,
        5,41,0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,
        5,28,0,0,132,9,1,0,0,0,133,145,5,31,0,0,134,139,3,14,7,0,135,136,
        5,41,0,0,136,138,3,14,7,0,137,135,1,0,0,0,138,141,1,0,0,0,139,137,
        1,0,0,0,139,140,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,142,144,
        5,41,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,134,
        1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,5,32,0,0,148,11,
        1,0,0,0,149,150,5,42,0,0,150,151,3,86,43,0,151,13,1,0,0,0,152,155,
        3,92,46,0,153,154,5,42,0,0,154,156,3,86,43,0,155,153,1,0,0,0,155,
        156,1,0,0,0,156,15,1,0,0,0,157,169,3,34,17,0,158,169,3,36,18,0,159,
        169,3,18,9,0,160,169,3,20,10,0,161,169,3,22,11,0,162,169,3,28,14,
        0,163,169,3,30,15,0,164,169,3,32,16,0,165,169,3,24,12,0,166,169,
        3,26,13,0,167,169,3,38,19,0,168,157,1,0,0,0,168,158,1,0,0,0,168,
        159,1,0,0,0,168,160,1,0,0,0,168,161,1,0,0,0,168,162,1,0,0,0,168,
        163,1,0,0,0,168,164,1,0,0,0,168,165,1,0,0,0,168,166,1,0,0,0,168,
        167,1,0,0,0,169,17,1,0,0,0,170,171,5,8,0,0,171,172,3,46,23,0,172,
        175,3,40,20,0,173,174,5,9,0,0,174,176,3,40,20,0,175,173,1,0,0,0,
        175,176,1,0,0,0,176,19,1,0,0,0,177,178,5,10,0,0,178,179,3,42,21,
        0,179,180,5,11,0,0,180,181,3,46,23,0,181,182,3,40,20,0,182,21,1,
        0,0,0,183,184,5,12,0,0,184,185,3,46,23,0,185,186,3,40,20,0,186,23,
        1,0,0,0,187,188,5,15,0,0,188,189,5,35,0,0,189,25,1,0,0,0,190,191,
        5,16,0,0,191,192,5,35,0,0,192,27,1,0,0,0,193,196,3,42,21,0,194,195,
        5,43,0,0,195,197,3,46,23,0,196,194,1,0,0,0,196,197,1,0,0,0,197,198,
        1,0,0,0,198,199,5,35,0,0,199,29,1,0,0,0,200,201,3,44,22,0,201,202,
        5,43,0,0,202,203,3,46,23,0,203,204,5,35,0,0,204,31,1,0,0,0,205,207,
        5,14,0,0,206,208,3,46,23,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,
        1,0,0,0,209,210,5,35,0,0,210,33,1,0,0,0,211,212,5,2,0,0,212,213,
        3,46,23,0,213,214,5,35,0,0,214,35,1,0,0,0,215,216,3,46,23,0,216,
        217,5,35,0,0,217,37,1,0,0,0,218,219,5,35,0,0,219,39,1,0,0,0,220,
        224,5,29,0,0,221,223,3,16,8,0,222,221,1,0,0,0,223,226,1,0,0,0,224,
        222,1,0,0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,
        230,5,30,0,0,228,230,3,16,8,0,229,220,1,0,0,0,229,228,1,0,0,0,230,
        41,1,0,0,0,231,232,5,13,0,0,232,237,3,44,22,0,233,234,5,41,0,0,234,
        236,3,44,22,0,235,233,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,237,
        238,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,240,242,5,41,0,0,241,
        240,1,0,0,0,241,242,1,0,0,0,242,43,1,0,0,0,243,246,3,76,38,0,244,
        245,5,42,0,0,245,247,3,86,43,0,246,244,1,0,0,0,246,247,1,0,0,0,247,
        45,1,0,0,0,248,249,3,48,24,0,249,47,1,0,0,0,250,255,3,50,25,0,251,
        252,5,5,0,0,252,254,3,50,25,0,253,251,1,0,0,0,254,257,1,0,0,0,255,
        253,1,0,0,0,255,256,1,0,0,0,256,49,1,0,0,0,257,255,1,0,0,0,258,263,
        3,52,26,0,259,260,5,4,0,0,260,262,3,52,26,0,261,259,1,0,0,0,262,
        265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,51,1,0,0,0,265,263,
        1,0,0,0,266,267,5,3,0,0,267,270,3,52,26,0,268,270,3,54,27,0,269,
        266,1,0,0,0,269,268,1,0,0,0,270,53,1,0,0,0,271,275,3,58,29,0,272,
        273,3,56,28,0,273,274,3,58,29,0,274,276,1,0,0,0,275,272,1,0,0,0,
        275,276,1,0,0,0,276,55,1,0,0,0,277,278,7,0,0,0,278,57,1,0,0,0,279,
        285,3,62,31,0,280,281,3,60,30,0,281,282,3,62,31,0,282,284,1,0,0,
        0,283,280,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,
        0,286,59,1,0,0,0,287,285,1,0,0,0,288,289,7,1,0,0,289,61,1,0,0,0,
        290,296,3,66,33,0,291,292,3,64,32,0,292,293,3,66,33,0,293,295,1,
        0,0,0,294,291,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,1,
        0,0,0,297,63,1,0,0,0,298,296,1,0,0,0,299,300,7,2,0,0,300,65,1,0,
        0,0,301,302,5,37,0,0,302,305,3,66,33,0,303,305,3,70,35,0,304,301,
        1,0,0,0,304,303,1,0,0,0,305,67,1,0,0,0,306,318,5,31,0,0,307,312,
        3,46,23,0,308,309,5,41,0,0,309,311,3,46,23,0,310,308,1,0,0,0,311,
        314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,316,1,0,0,0,314,
        312,1,0,0,0,315,317,5,41,0,0,316,315,1,0,0,0,316,317,1,0,0,0,317,
        319,1,0,0,0,318,307,1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,
        321,5,32,0,0,321,69,1,0,0,0,322,323,6,35,-1,0,323,324,3,72,36,0,
        324,346,1,0,0,0,325,326,10,6,0,0,326,327,5,33,0,0,327,328,3,46,23,
        0,328,329,5,34,0,0,329,345,1,0,0,0,330,331,10,5,0,0,331,332,5,40,
        0,0,332,345,5,48,0,0,333,334,10,4,0,0,334,335,5,6,0,0,335,345,3,
        86,43,0,336,337,10,3,0,0,337,338,5,40,0,0,338,345,3,92,46,0,339,
        341,10,2,0,0,340,342,3,88,44,0,341,340,1,0,0,0,341,342,1,0,0,0,342,
        343,1,0,0,0,343,345,3,68,34,0,344,325,1,0,0,0,344,330,1,0,0,0,344,
        333,1,0,0,0,344,336,1,0,0,0,344,339,1,0,0,0,345,348,1,0,0,0,346,
        344,1,0,0,0,346,347,1,0,0,0,347,71,1,0,0,0,348,346,1,0,0,0,349,359,
        3,80,40,0,350,359,3,82,41,0,351,359,3,78,39,0,352,359,3,76,38,0,
        353,359,3,74,37,0,354,355,5,31,0,0,355,356,3,46,23,0,356,357,5,32,
        0,0,357,359,1,0,0,0,358,349,1,0,0,0,358,350,1,0,0,0,358,351,1,0,
        0,0,358,352,1,0,0,0,358,353,1,0,0,0,358,354,1,0,0,0,359,73,1,0,0,
        0,360,361,5,7,0,0,361,363,3,46,23,0,362,364,3,88,44,0,363,362,1,
        0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,366,3,68,34,0,366,75,1,
        0,0,0,367,369,3,84,42,0,368,367,1,0,0,0,368,369,1,0,0,0,369,370,
        1,0,0,0,370,371,3,92,46,0,371,77,1,0,0,0,372,387,5,48,0,0,373,387,
        5,49,0,0,374,376,5,46,0,0,375,374,1,0,0,0,376,377,1,0,0,0,377,375,
        1,0,0,0,377,378,1,0,0,0,378,387,1,0,0,0,379,381,5,47,0,0,380,379,
        1,0,0,0,381,382,1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,387,
        1,0,0,0,384,387,5,17,0,0,385,387,5,18,0,0,386,372,1,0,0,0,386,373,
        1,0,0,0,386,375,1,0,0,0,386,380,1,0,0,0,386,384,1,0,0,0,386,385,
        1,0,0,0,387,79,1,0,0,0,388,400,5,33,0,0,389,394,3,46,23,0,390,391,
        5,41,0,0,391,393,3,46,23,0,392,390,1,0,0,0,393,396,1,0,0,0,394,392,
        1,0,0,0,394,395,1,0,0,0,395,398,1,0,0,0,396,394,1,0,0,0,397,399,
        5,41,0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,401,1,0,0,0,400,389,
        1,0,0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,5,34,0,0,403,81,
        1,0,0,0,404,418,5,31,0,0,405,406,3,46,23,0,406,407,5,41,0,0,407,
        419,1,0,0,0,408,411,3,46,23,0,409,410,5,41,0,0,410,412,3,46,23,0,
        411,409,1,0,0,0,412,413,1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,
        414,416,1,0,0,0,415,417,5,41,0,0,416,415,1,0,0,0,416,417,1,0,0,0,
        417,419,1,0,0,0,418,405,1,0,0,0,418,408,1,0,0,0,418,419,1,0,0,0,
        419,420,1,0,0,0,420,421,5,32,0,0,421,83,1,0,0,0,422,423,7,3,0,0,
        423,85,1,0,0,0,424,438,5,31,0,0,425,426,3,86,43,0,426,427,5,41,0,
        0,427,439,1,0,0,0,428,431,3,86,43,0,429,430,5,41,0,0,430,432,3,86,
        43,0,431,429,1,0,0,0,432,433,1,0,0,0,433,431,1,0,0,0,433,434,1,0,
        0,0,434,436,1,0,0,0,435,437,5,41,0,0,436,435,1,0,0,0,436,437,1,0,
        0,0,437,439,1,0,0,0,438,425,1,0,0,0,438,428,1,0,0,0,438,439,1,0,
        0,0,439,440,1,0,0,0,440,450,5,32,0,0,441,442,5,31,0,0,442,443,3,
        86,43,0,443,444,5,32,0,0,444,450,1,0,0,0,445,447,3,92,46,0,446,448,
        3,88,44,0,447,446,1,0,0,0,447,448,1,0,0,0,448,450,1,0,0,0,449,424,
        1,0,0,0,449,441,1,0,0,0,449,445,1,0,0,0,450,87,1,0,0,0,451,452,5,
        27,0,0,452,457,3,86,43,0,453,454,5,41,0,0,454,456,3,86,43,0,455,
        453,1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,
        461,1,0,0,0,459,457,1,0,0,0,460,462,5,41,0,0,461,460,1,0,0,0,461,
        462,1,0,0,0,462,463,1,0,0,0,463,464,5,28,0,0,464,89,1,0,0,0,465,
        466,3,92,46,0,466,91,1,0,0,0,467,468,7,4,0,0,468,93,1,0,0,0,51,97,
        105,113,117,125,129,139,143,145,155,168,175,196,207,224,229,237,
        241,246,255,263,269,275,285,296,304,312,316,318,341,344,346,358,
        363,368,377,382,386,394,398,400,413,416,418,433,436,438,447,449,
        457,461
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
    public DOC_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.DOC_COMMENT, 0);
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
    public COLON(): antlr.TerminalNode {
        return this.getToken(DFOAParser.COLON, 0)!;
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
    public print(): PrintContext | null {
        return this.getRuleContext(0, PrintContext);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public if(): IfContext | null {
        return this.getRuleContext(0, IfContext);
    }
    public for(): ForContext | null {
        return this.getRuleContext(0, ForContext);
    }
    public while(): WhileContext | null {
        return this.getRuleContext(0, WhileContext);
    }
    public let(): LetContext | null {
        return this.getRuleContext(0, LetContext);
    }
    public assign(): AssignContext | null {
        return this.getRuleContext(0, AssignContext);
    }
    public return(): ReturnContext | null {
        return this.getRuleContext(0, ReturnContext);
    }
    public break(): BreakContext | null {
        return this.getRuleContext(0, BreakContext);
    }
    public continue(): ContinueContext | null {
        return this.getRuleContext(0, ContinueContext);
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


export class IfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(DFOAParser.IF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_if;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(DFOAParser.FOR, 0)!;
    }
    public varDeclList(): VarDeclListContext {
        return this.getRuleContext(0, VarDeclListContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.IN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_for;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterFor) {
             listener.enterFor(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitFor) {
             listener.exitFor(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitFor) {
            return visitor.visitFor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.WHILE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_while;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterWhile) {
             listener.enterWhile(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitWhile) {
             listener.exitWhile(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitWhile) {
            return visitor.visitWhile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BREAK(): antlr.TerminalNode {
        return this.getToken(DFOAParser.BREAK, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_break;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterBreak) {
             listener.enterBreak(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitBreak) {
             listener.exitBreak(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitBreak) {
            return visitor.visitBreak(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONTINUE(): antlr.TerminalNode {
        return this.getToken(DFOAParser.CONTINUE, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_continue;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterContinue) {
             listener.enterContinue(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitContinue) {
             listener.exitContinue(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitContinue) {
            return visitor.visitContinue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varDeclList(): VarDeclListContext {
        return this.getRuleContext(0, VarDeclListContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public EQUALS(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.EQUALS, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_let;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterLet) {
             listener.enterLet(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitLet) {
             listener.exitLet(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitLet) {
            return visitor.visitLet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varDecl(): VarDeclContext {
        return this.getRuleContext(0, VarDeclContext)!;
    }
    public EQUALS(): antlr.TerminalNode {
        return this.getToken(DFOAParser.EQUALS, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_assign;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(DFOAParser.RETURN, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(DFOAParser.SEMI, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_return;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterReturn) {
             listener.enterReturn(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitReturn) {
             listener.exitReturn(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitReturn) {
            return visitor.visitReturn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintContext extends antlr.ParserRuleContext {
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
        return DFOAParser.RULE_print;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterPrint) {
             listener.enterPrint(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitPrint) {
             listener.exitPrint(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitPrint) {
            return visitor.visitPrint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStmtContext extends antlr.ParserRuleContext {
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
        return DFOAParser.RULE_exprStmt;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
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


export class VarDeclListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(DFOAParser.LET, 0)!;
    }
    public varDecl(): VarDeclContext[];
    public varDecl(i: number): VarDeclContext | null;
    public varDecl(i?: number): VarDeclContext[] | VarDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclContext);
        }

        return this.getRuleContext(i, VarDeclContext);
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
        return DFOAParser.RULE_varDeclList;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterVarDeclList) {
             listener.enterVarDeclList(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitVarDeclList) {
             listener.exitVarDeclList(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitVarDeclList) {
            return visitor.visitVarDeclList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.COLON, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_varDecl;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterVarDecl) {
             listener.enterVarDecl(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitVarDecl) {
             listener.exitVarDecl(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
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
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
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


export class VariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_variable;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterVariable) {
             listener.enterVariable(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitVariable) {
             listener.exitVariable(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
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
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.STRING);
    	} else {
    		return this.getToken(DFOAParser.STRING, i);
    	}
    }
    public TEXT(): antlr.TerminalNode[];
    public TEXT(i: number): antlr.TerminalNode | null;
    public TEXT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DFOAParser.TEXT);
    	} else {
    		return this.getToken(DFOAParser.TEXT, i);
    	}
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.FALSE, 0);
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


export class LifetimeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.GLOBAL, 0);
    }
    public PERSISTENT(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.PERSISTENT, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LOCAL, 0);
    }
    public LINE(): antlr.TerminalNode | null {
        return this.getToken(DFOAParser.LINE, 0);
    }
    public override get ruleIndex(): number {
        return DFOAParser.RULE_lifetime;
    }
    public override enterRule(listener: DFOAListener): void {
        if(listener.enterLifetime) {
             listener.enterLifetime(this);
        }
    }
    public override exitRule(listener: DFOAListener): void {
        if(listener.exitLifetime) {
             listener.exitLifetime(this);
        }
    }
    public override accept<Result>(visitor: DFOAVisitor<Result>): Result | null {
        if (visitor.visitLifetime) {
            return visitor.visitLifetime(this);
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
