
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
            while (_la === 1) {
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.match(DFOAParser.FUNC);
            this.state = 105;
            this.ident();
            this.state = 106;
            this.signature();
            this.state = 107;
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
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 109;
                this.genericDef();
                }
            }

            this.state = 112;
            this.paramslist();
            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 113;
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
            this.state = 116;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 117;
            this.typeParam();
            this.state = 122;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 118;
                    this.match(DFOAParser.COMMA);
                    this.state = 119;
                    this.typeParam();
                    }
                    }
                }
                this.state = 124;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 125;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 128;
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
            this.state = 130;
            this.match(DFOAParser.LPAREN);
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44 || _la === 45) {
                {
                this.state = 131;
                this.param();
                this.state = 136;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 132;
                        this.match(DFOAParser.COMMA);
                        this.state = 133;
                        this.param();
                        }
                        }
                    }
                    this.state = 138;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                }
                this.state = 140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 139;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 144;
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
            this.state = 146;
            this.match(DFOAParser.COLON);
            this.state = 147;
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
            this.state = 149;
            this.ident();
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 150;
                this.match(DFOAParser.COLON);
                this.state = 151;
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
            this.state = 165;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 154;
                this.print();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 155;
                this.exprStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 156;
                this.if_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 157;
                this.for_();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 158;
                this.while_();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 159;
                this.let_();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 160;
                this.assign();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 161;
                this.return_();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 162;
                this.break_();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 163;
                this.continue_();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 164;
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
            this.state = 167;
            this.match(DFOAParser.IF);
            this.state = 168;
            this.expr();
            this.state = 169;
            this.block();
            this.state = 172;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 170;
                this.match(DFOAParser.ELSE);
                this.state = 171;
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
            this.state = 174;
            this.match(DFOAParser.FOR);
            this.state = 175;
            this.varDeclList();
            this.state = 176;
            this.match(DFOAParser.IN);
            this.state = 177;
            this.expr();
            this.state = 178;
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
            this.state = 180;
            this.match(DFOAParser.WHILE);
            this.state = 181;
            this.expr();
            this.state = 182;
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
            this.state = 184;
            this.match(DFOAParser.BREAK);
            this.state = 185;
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
            this.state = 187;
            this.match(DFOAParser.CONTINUE);
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
    public let_(): LetContext {
        let localContext = new LetContext(this.context, this.state);
        this.enterRule(localContext, 28, DFOAParser.RULE_let);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            this.varDeclList();
            this.state = 193;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 191;
                this.match(DFOAParser.EQUALS);
                this.state = 192;
                this.expr();
                }
            }

            this.state = 195;
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
            this.state = 197;
            this.varDecl();
            this.state = 198;
            this.match(DFOAParser.EQUALS);
            this.state = 199;
            this.expr();
            this.state = 200;
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
            this.state = 202;
            this.match(DFOAParser.RETURN);
            this.state = 204;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 203;
                this.expr();
                }
            }

            this.state = 206;
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
            this.state = 208;
            this.match(DFOAParser.PRINT);
            this.state = 209;
            this.expr();
            this.state = 210;
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
    public semi(): SemiContext {
        let localContext = new SemiContext(this.context, this.state);
        this.enterRule(localContext, 38, DFOAParser.RULE_semi);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
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
            this.state = 226;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 217;
                this.match(DFOAParser.LBRACE);
                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155869580) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129045) !== 0)) {
                    {
                    {
                    this.state = 218;
                    this.statement();
                    }
                    }
                    this.state = 223;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 224;
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
                this.state = 225;
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
            this.state = 228;
            this.match(DFOAParser.LET);
            this.state = 229;
            this.varDecl();
            this.state = 234;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 230;
                    this.match(DFOAParser.COMMA);
                    this.state = 231;
                    this.varDecl();
                    }
                    }
                }
                this.state = 236;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 237;
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
            this.state = 240;
            this.variable();
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 241;
                this.match(DFOAParser.COLON);
                this.state = 242;
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
            this.state = 245;
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
            this.state = 247;
            this.and();
            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 248;
                this.match(DFOAParser.OR);
                this.state = 249;
                this.and();
                }
                }
                this.state = 254;
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
            this.state = 255;
            this.not();
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 256;
                this.match(DFOAParser.AND);
                this.state = 257;
                this.not();
                }
                }
                this.state = 262;
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
            this.state = 266;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 263;
                this.match(DFOAParser.NOT);
                this.state = 264;
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
                this.state = 265;
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
            this.state = 268;
            this.addSub();
            this.state = 272;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 269;
                this.compOp();
                this.state = 270;
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
            this.state = 274;
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
            this.state = 276;
            this.multDiv();
            this.state = 282;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 277;
                    this.addSubOp();
                    this.state = 278;
                    this.multDiv();
                    }
                    }
                }
                this.state = 284;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
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
            this.state = 285;
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
            this.state = 287;
            this.unop();
            this.state = 293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 38 || _la === 39) {
                {
                {
                this.state = 288;
                this.multDivOp();
                this.state = 289;
                this.unop();
                }
                }
                this.state = 295;
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
            this.state = 296;
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
            this.state = 301;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.MINUS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 298;
                this.match(DFOAParser.MINUS);
                this.state = 299;
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
                this.state = 300;
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
            this.state = 303;
            this.match(DFOAParser.LPAREN);
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 304;
                this.expr();
                this.state = 309;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 305;
                        this.match(DFOAParser.COMMA);
                        this.state = 306;
                        this.expr();
                        }
                        }
                    }
                    this.state = 311;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
                }
                this.state = 313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 312;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 317;
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

            this.state = 320;
            this.atom();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 343;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 341;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 322;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 323;
                        this.match(DFOAParser.LBRACK);
                        this.state = 324;
                        this.expr();
                        this.state = 325;
                        this.match(DFOAParser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TupleAccessContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 327;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 328;
                        this.match(DFOAParser.DOT);
                        this.state = 329;
                        this.match(DFOAParser.INTEGER);
                        }
                        break;
                    case 3:
                        {
                        localContext = new TypeAliasContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 330;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 331;
                        this.match(DFOAParser.AS);
                        this.state = 332;
                        this.type_();
                        }
                        break;
                    case 4:
                        {
                        localContext = new AttributeContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 333;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 334;
                        this.match(DFOAParser.DOT);
                        this.state = 335;
                        this.ident();
                        }
                        break;
                    case 5:
                        {
                        localContext = new FuncCallTrailContext(new TrailContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, DFOAParser.RULE_trail);
                        this.state = 336;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 338;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                            this.state = 337;
                            this.generics();
                            }
                        }

                        this.state = 340;
                        this.funcInvoke();
                        }
                        break;
                    }
                    }
                }
                this.state = 345;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
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
            this.state = 355;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 346;
                this.list();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 347;
                this.tuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 348;
                this.literal();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 349;
                this.variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 350;
                this.newExpr();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 351;
                this.match(DFOAParser.LPAREN);
                this.state = 352;
                this.expr();
                this.state = 353;
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
            this.state = 357;
            this.match(DFOAParser.NEW);
            this.state = 358;
            this.expr();
            this.state = 360;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 359;
                this.generics();
                }
            }

            this.state = 362;
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
            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7864320) !== 0)) {
                {
                this.state = 364;
                this.lifetime();
                }
            }

            this.state = 367;
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
            this.state = 383;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DFOAParser.INTEGER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 369;
                this.match(DFOAParser.INTEGER);
                }
                break;
            case DFOAParser.FLOAT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 370;
                this.match(DFOAParser.FLOAT);
                }
                break;
            case DFOAParser.STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 372;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 371;
                        this.match(DFOAParser.STRING);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 374;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case DFOAParser.TEXT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 377;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 376;
                        this.match(DFOAParser.TEXT);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 379;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case DFOAParser.TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 381;
                this.match(DFOAParser.TRUE);
                }
                break;
            case DFOAParser.FALSE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 382;
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
            this.state = 385;
            this.match(DFOAParser.LBRACK);
            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2155741320) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 129041) !== 0)) {
                {
                this.state = 386;
                this.expr();
                this.state = 391;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 387;
                        this.match(DFOAParser.COMMA);
                        this.state = 388;
                        this.expr();
                        }
                        }
                    }
                    this.state = 393;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
                }
                this.state = 395;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 394;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
            }

            this.state = 399;
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
            this.state = 401;
            this.match(DFOAParser.LPAREN);
            this.state = 415;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 402;
                this.expr();
                this.state = 403;
                this.match(DFOAParser.COMMA);
                }
                break;
            case 2:
                {
                this.state = 405;
                this.expr();
                this.state = 408;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 406;
                        this.match(DFOAParser.COMMA);
                        this.state = 407;
                        this.expr();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 410;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 413;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 412;
                    this.match(DFOAParser.COMMA);
                    }
                }

                }
                break;
            }
            this.state = 417;
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
            this.state = 419;
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
            this.state = 446;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                localContext = new TupleTypeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 421;
                this.match(DFOAParser.LPAREN);
                this.state = 435;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
                case 1:
                    {
                    this.state = 422;
                    this.type_();
                    this.state = 423;
                    this.match(DFOAParser.COMMA);
                    }
                    break;
                case 2:
                    {
                    this.state = 425;
                    this.type_();
                    this.state = 428;
                    this.errorHandler.sync(this);
                    alternative = 1;
                    do {
                        switch (alternative) {
                        case 1:
                            {
                            {
                            this.state = 426;
                            this.match(DFOAParser.COMMA);
                            this.state = 427;
                            this.type_();
                            }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 430;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    this.state = 433;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 41) {
                        {
                        this.state = 432;
                        this.match(DFOAParser.COMMA);
                        }
                    }

                    }
                    break;
                }
                this.state = 437;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 2:
                localContext = new GroupingTypeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 438;
                this.match(DFOAParser.LPAREN);
                this.state = 439;
                this.type_();
                this.state = 440;
                this.match(DFOAParser.RPAREN);
                }
                break;
            case 3:
                localContext = new BasicTypeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 442;
                this.ident();
                this.state = 444;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
                case 1:
                    {
                    this.state = 443;
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
            this.state = 448;
            this.match(DFOAParser.LANGLE);
            {
            this.state = 449;
            this.type_();
            this.state = 454;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 450;
                    this.match(DFOAParser.COMMA);
                    this.state = 451;
                    this.type_();
                    }
                    }
                }
                this.state = 456;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            this.state = 458;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 457;
                this.match(DFOAParser.COMMA);
                }
            }

            }
            this.state = 460;
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
            this.state = 462;
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
            this.state = 464;
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
        4,1,53,467,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,1,0,5,0,96,8,0,10,0,12,0,99,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,
        1,2,1,2,1,3,3,3,111,8,3,1,3,1,3,3,3,115,8,3,1,4,1,4,1,4,1,4,5,4,
        121,8,4,10,4,12,4,124,9,4,1,4,3,4,127,8,4,1,4,1,4,1,5,1,5,1,5,1,
        5,5,5,135,8,5,10,5,12,5,138,9,5,1,5,3,5,141,8,5,3,5,143,8,5,1,5,
        1,5,1,6,1,6,1,6,1,7,1,7,1,7,3,7,153,8,7,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,3,8,166,8,8,1,9,1,9,1,9,1,9,1,9,3,9,173,8,9,
        1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,
        1,13,1,13,1,13,1,14,1,14,1,14,3,14,194,8,14,1,14,1,14,1,15,1,15,
        1,15,1,15,1,15,1,16,1,16,3,16,205,8,16,1,16,1,16,1,17,1,17,1,17,
        1,17,1,18,1,18,1,18,1,19,1,19,1,20,1,20,5,20,220,8,20,10,20,12,20,
        223,9,20,1,20,1,20,3,20,227,8,20,1,21,1,21,1,21,1,21,5,21,233,8,
        21,10,21,12,21,236,9,21,1,21,3,21,239,8,21,1,22,1,22,1,22,3,22,244,
        8,22,1,23,1,23,1,24,1,24,1,24,5,24,251,8,24,10,24,12,24,254,9,24,
        1,25,1,25,1,25,5,25,259,8,25,10,25,12,25,262,9,25,1,26,1,26,1,26,
        3,26,267,8,26,1,27,1,27,1,27,1,27,3,27,273,8,27,1,28,1,28,1,29,1,
        29,1,29,1,29,5,29,281,8,29,10,29,12,29,284,9,29,1,30,1,30,1,31,1,
        31,1,31,1,31,5,31,292,8,31,10,31,12,31,295,9,31,1,32,1,32,1,33,1,
        33,1,33,3,33,302,8,33,1,34,1,34,1,34,1,34,5,34,308,8,34,10,34,12,
        34,311,9,34,1,34,3,34,314,8,34,3,34,316,8,34,1,34,1,34,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,3,35,339,8,35,1,35,5,35,342,8,35,10,35,12,35,
        345,9,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,356,8,
        36,1,37,1,37,1,37,3,37,361,8,37,1,37,1,37,1,38,3,38,366,8,38,1,38,
        1,38,1,39,1,39,1,39,4,39,373,8,39,11,39,12,39,374,1,39,4,39,378,
        8,39,11,39,12,39,379,1,39,1,39,3,39,384,8,39,1,40,1,40,1,40,1,40,
        5,40,390,8,40,10,40,12,40,393,9,40,1,40,3,40,396,8,40,3,40,398,8,
        40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,4,41,409,8,41,11,
        41,12,41,410,1,41,3,41,414,8,41,3,41,416,8,41,1,41,1,41,1,42,1,42,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,4,43,429,8,43,11,43,12,43,430,
        1,43,3,43,434,8,43,3,43,436,8,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,3,43,445,8,43,3,43,447,8,43,1,44,1,44,1,44,1,44,5,44,453,8,44,
        10,44,12,44,456,9,44,1,44,3,44,459,8,44,1,44,1,44,1,45,1,45,1,46,
        1,46,1,46,0,1,70,47,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
        78,80,82,84,86,88,90,92,0,5,1,0,23,28,1,0,36,37,1,0,38,39,1,0,19,
        22,1,0,44,45,492,0,97,1,0,0,0,2,102,1,0,0,0,4,104,1,0,0,0,6,110,
        1,0,0,0,8,116,1,0,0,0,10,130,1,0,0,0,12,146,1,0,0,0,14,149,1,0,0,
        0,16,165,1,0,0,0,18,167,1,0,0,0,20,174,1,0,0,0,22,180,1,0,0,0,24,
        184,1,0,0,0,26,187,1,0,0,0,28,190,1,0,0,0,30,197,1,0,0,0,32,202,
        1,0,0,0,34,208,1,0,0,0,36,212,1,0,0,0,38,215,1,0,0,0,40,226,1,0,
        0,0,42,228,1,0,0,0,44,240,1,0,0,0,46,245,1,0,0,0,48,247,1,0,0,0,
        50,255,1,0,0,0,52,266,1,0,0,0,54,268,1,0,0,0,56,274,1,0,0,0,58,276,
        1,0,0,0,60,285,1,0,0,0,62,287,1,0,0,0,64,296,1,0,0,0,66,301,1,0,
        0,0,68,303,1,0,0,0,70,319,1,0,0,0,72,355,1,0,0,0,74,357,1,0,0,0,
        76,365,1,0,0,0,78,383,1,0,0,0,80,385,1,0,0,0,82,401,1,0,0,0,84,419,
        1,0,0,0,86,446,1,0,0,0,88,448,1,0,0,0,90,462,1,0,0,0,92,464,1,0,
        0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,
        1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,0,0,1,101,1,1,0,0,
        0,102,103,3,4,2,0,103,3,1,0,0,0,104,105,5,1,0,0,105,106,3,92,46,
        0,106,107,3,6,3,0,107,108,3,40,20,0,108,5,1,0,0,0,109,111,3,8,4,
        0,110,109,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,114,3,10,5,
        0,113,115,3,12,6,0,114,113,1,0,0,0,114,115,1,0,0,0,115,7,1,0,0,0,
        116,117,5,27,0,0,117,122,3,90,45,0,118,119,5,41,0,0,119,121,3,90,
        45,0,120,118,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,
        0,0,123,126,1,0,0,0,124,122,1,0,0,0,125,127,5,41,0,0,126,125,1,0,
        0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,5,28,0,0,129,9,1,0,0,
        0,130,142,5,31,0,0,131,136,3,14,7,0,132,133,5,41,0,0,133,135,3,14,
        7,0,134,132,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,
        0,0,137,140,1,0,0,0,138,136,1,0,0,0,139,141,5,41,0,0,140,139,1,0,
        0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,131,1,0,0,0,142,143,1,0,
        0,0,143,144,1,0,0,0,144,145,5,32,0,0,145,11,1,0,0,0,146,147,5,42,
        0,0,147,148,3,86,43,0,148,13,1,0,0,0,149,152,3,92,46,0,150,151,5,
        42,0,0,151,153,3,86,43,0,152,150,1,0,0,0,152,153,1,0,0,0,153,15,
        1,0,0,0,154,166,3,34,17,0,155,166,3,36,18,0,156,166,3,18,9,0,157,
        166,3,20,10,0,158,166,3,22,11,0,159,166,3,28,14,0,160,166,3,30,15,
        0,161,166,3,32,16,0,162,166,3,24,12,0,163,166,3,26,13,0,164,166,
        3,38,19,0,165,154,1,0,0,0,165,155,1,0,0,0,165,156,1,0,0,0,165,157,
        1,0,0,0,165,158,1,0,0,0,165,159,1,0,0,0,165,160,1,0,0,0,165,161,
        1,0,0,0,165,162,1,0,0,0,165,163,1,0,0,0,165,164,1,0,0,0,166,17,1,
        0,0,0,167,168,5,8,0,0,168,169,3,46,23,0,169,172,3,40,20,0,170,171,
        5,9,0,0,171,173,3,40,20,0,172,170,1,0,0,0,172,173,1,0,0,0,173,19,
        1,0,0,0,174,175,5,10,0,0,175,176,3,42,21,0,176,177,5,11,0,0,177,
        178,3,46,23,0,178,179,3,40,20,0,179,21,1,0,0,0,180,181,5,12,0,0,
        181,182,3,46,23,0,182,183,3,40,20,0,183,23,1,0,0,0,184,185,5,15,
        0,0,185,186,5,35,0,0,186,25,1,0,0,0,187,188,5,16,0,0,188,189,5,35,
        0,0,189,27,1,0,0,0,190,193,3,42,21,0,191,192,5,43,0,0,192,194,3,
        46,23,0,193,191,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,196,
        5,35,0,0,196,29,1,0,0,0,197,198,3,44,22,0,198,199,5,43,0,0,199,200,
        3,46,23,0,200,201,5,35,0,0,201,31,1,0,0,0,202,204,5,14,0,0,203,205,
        3,46,23,0,204,203,1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,207,
        5,35,0,0,207,33,1,0,0,0,208,209,5,2,0,0,209,210,3,46,23,0,210,211,
        5,35,0,0,211,35,1,0,0,0,212,213,3,46,23,0,213,214,5,35,0,0,214,37,
        1,0,0,0,215,216,5,35,0,0,216,39,1,0,0,0,217,221,5,29,0,0,218,220,
        3,16,8,0,219,218,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,
        1,0,0,0,222,224,1,0,0,0,223,221,1,0,0,0,224,227,5,30,0,0,225,227,
        3,16,8,0,226,217,1,0,0,0,226,225,1,0,0,0,227,41,1,0,0,0,228,229,
        5,13,0,0,229,234,3,44,22,0,230,231,5,41,0,0,231,233,3,44,22,0,232,
        230,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,
        238,1,0,0,0,236,234,1,0,0,0,237,239,5,41,0,0,238,237,1,0,0,0,238,
        239,1,0,0,0,239,43,1,0,0,0,240,243,3,76,38,0,241,242,5,42,0,0,242,
        244,3,86,43,0,243,241,1,0,0,0,243,244,1,0,0,0,244,45,1,0,0,0,245,
        246,3,48,24,0,246,47,1,0,0,0,247,252,3,50,25,0,248,249,5,5,0,0,249,
        251,3,50,25,0,250,248,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,
        253,1,0,0,0,253,49,1,0,0,0,254,252,1,0,0,0,255,260,3,52,26,0,256,
        257,5,4,0,0,257,259,3,52,26,0,258,256,1,0,0,0,259,262,1,0,0,0,260,
        258,1,0,0,0,260,261,1,0,0,0,261,51,1,0,0,0,262,260,1,0,0,0,263,264,
        5,3,0,0,264,267,3,52,26,0,265,267,3,54,27,0,266,263,1,0,0,0,266,
        265,1,0,0,0,267,53,1,0,0,0,268,272,3,58,29,0,269,270,3,56,28,0,270,
        271,3,58,29,0,271,273,1,0,0,0,272,269,1,0,0,0,272,273,1,0,0,0,273,
        55,1,0,0,0,274,275,7,0,0,0,275,57,1,0,0,0,276,282,3,62,31,0,277,
        278,3,60,30,0,278,279,3,62,31,0,279,281,1,0,0,0,280,277,1,0,0,0,
        281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,59,1,0,0,0,284,
        282,1,0,0,0,285,286,7,1,0,0,286,61,1,0,0,0,287,293,3,66,33,0,288,
        289,3,64,32,0,289,290,3,66,33,0,290,292,1,0,0,0,291,288,1,0,0,0,
        292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,294,63,1,0,0,0,295,
        293,1,0,0,0,296,297,7,2,0,0,297,65,1,0,0,0,298,299,5,37,0,0,299,
        302,3,66,33,0,300,302,3,70,35,0,301,298,1,0,0,0,301,300,1,0,0,0,
        302,67,1,0,0,0,303,315,5,31,0,0,304,309,3,46,23,0,305,306,5,41,0,
        0,306,308,3,46,23,0,307,305,1,0,0,0,308,311,1,0,0,0,309,307,1,0,
        0,0,309,310,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,312,314,5,41,
        0,0,313,312,1,0,0,0,313,314,1,0,0,0,314,316,1,0,0,0,315,304,1,0,
        0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,32,0,0,318,69,1,0,
        0,0,319,320,6,35,-1,0,320,321,3,72,36,0,321,343,1,0,0,0,322,323,
        10,6,0,0,323,324,5,33,0,0,324,325,3,46,23,0,325,326,5,34,0,0,326,
        342,1,0,0,0,327,328,10,5,0,0,328,329,5,40,0,0,329,342,5,48,0,0,330,
        331,10,4,0,0,331,332,5,6,0,0,332,342,3,86,43,0,333,334,10,3,0,0,
        334,335,5,40,0,0,335,342,3,92,46,0,336,338,10,2,0,0,337,339,3,88,
        44,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,342,3,68,
        34,0,341,322,1,0,0,0,341,327,1,0,0,0,341,330,1,0,0,0,341,333,1,0,
        0,0,341,336,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,
        0,0,344,71,1,0,0,0,345,343,1,0,0,0,346,356,3,80,40,0,347,356,3,82,
        41,0,348,356,3,78,39,0,349,356,3,76,38,0,350,356,3,74,37,0,351,352,
        5,31,0,0,352,353,3,46,23,0,353,354,5,32,0,0,354,356,1,0,0,0,355,
        346,1,0,0,0,355,347,1,0,0,0,355,348,1,0,0,0,355,349,1,0,0,0,355,
        350,1,0,0,0,355,351,1,0,0,0,356,73,1,0,0,0,357,358,5,7,0,0,358,360,
        3,46,23,0,359,361,3,88,44,0,360,359,1,0,0,0,360,361,1,0,0,0,361,
        362,1,0,0,0,362,363,3,68,34,0,363,75,1,0,0,0,364,366,3,84,42,0,365,
        364,1,0,0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,368,3,92,46,0,368,
        77,1,0,0,0,369,384,5,48,0,0,370,384,5,49,0,0,371,373,5,46,0,0,372,
        371,1,0,0,0,373,374,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,
        384,1,0,0,0,376,378,5,47,0,0,377,376,1,0,0,0,378,379,1,0,0,0,379,
        377,1,0,0,0,379,380,1,0,0,0,380,384,1,0,0,0,381,384,5,17,0,0,382,
        384,5,18,0,0,383,369,1,0,0,0,383,370,1,0,0,0,383,372,1,0,0,0,383,
        377,1,0,0,0,383,381,1,0,0,0,383,382,1,0,0,0,384,79,1,0,0,0,385,397,
        5,33,0,0,386,391,3,46,23,0,387,388,5,41,0,0,388,390,3,46,23,0,389,
        387,1,0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,
        395,1,0,0,0,393,391,1,0,0,0,394,396,5,41,0,0,395,394,1,0,0,0,395,
        396,1,0,0,0,396,398,1,0,0,0,397,386,1,0,0,0,397,398,1,0,0,0,398,
        399,1,0,0,0,399,400,5,34,0,0,400,81,1,0,0,0,401,415,5,31,0,0,402,
        403,3,46,23,0,403,404,5,41,0,0,404,416,1,0,0,0,405,408,3,46,23,0,
        406,407,5,41,0,0,407,409,3,46,23,0,408,406,1,0,0,0,409,410,1,0,0,
        0,410,408,1,0,0,0,410,411,1,0,0,0,411,413,1,0,0,0,412,414,5,41,0,
        0,413,412,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,402,1,0,0,
        0,415,405,1,0,0,0,415,416,1,0,0,0,416,417,1,0,0,0,417,418,5,32,0,
        0,418,83,1,0,0,0,419,420,7,3,0,0,420,85,1,0,0,0,421,435,5,31,0,0,
        422,423,3,86,43,0,423,424,5,41,0,0,424,436,1,0,0,0,425,428,3,86,
        43,0,426,427,5,41,0,0,427,429,3,86,43,0,428,426,1,0,0,0,429,430,
        1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,433,1,0,0,0,432,434,
        5,41,0,0,433,432,1,0,0,0,433,434,1,0,0,0,434,436,1,0,0,0,435,422,
        1,0,0,0,435,425,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,447,
        5,32,0,0,438,439,5,31,0,0,439,440,3,86,43,0,440,441,5,32,0,0,441,
        447,1,0,0,0,442,444,3,92,46,0,443,445,3,88,44,0,444,443,1,0,0,0,
        444,445,1,0,0,0,445,447,1,0,0,0,446,421,1,0,0,0,446,438,1,0,0,0,
        446,442,1,0,0,0,447,87,1,0,0,0,448,449,5,27,0,0,449,454,3,86,43,
        0,450,451,5,41,0,0,451,453,3,86,43,0,452,450,1,0,0,0,453,456,1,0,
        0,0,454,452,1,0,0,0,454,455,1,0,0,0,455,458,1,0,0,0,456,454,1,0,
        0,0,457,459,5,41,0,0,458,457,1,0,0,0,458,459,1,0,0,0,459,460,1,0,
        0,0,460,461,5,28,0,0,461,89,1,0,0,0,462,463,3,92,46,0,463,91,1,0,
        0,0,464,465,7,4,0,0,465,93,1,0,0,0,50,97,110,114,122,126,136,140,
        142,152,165,172,193,204,221,226,234,238,243,252,260,266,272,282,
        293,301,309,313,315,338,341,343,355,360,365,374,379,383,391,395,
        397,410,413,415,430,433,435,444,446,454,458
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
