/* Jison generated parser */
var parser = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"stmtList":4,"EOF":5,"stmt":6,"e":7,"NEWLINE":8,"IF":9,"END":10,"ELSE":11,"symbol":12,"SYMBOL":13,"+":14,"-":15,"*":16,"/":17,"^":18,"=":19,"EQ":20,"!":21,"%":22,"(":23,")":24,"NUMBER":25,"STRING":26,"E":27,"PI":28,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"NEWLINE",9:"IF",10:"END",11:"ELSE",13:"SYMBOL",14:"+",15:"-",16:"*",17:"/",18:"^",19:"=",20:"EQ",21:"!",22:"%",23:"(",24:")",25:"NUMBER",26:"STRING",27:"E",28:"PI"},
productions_: [0,[3,2],[4,1],[4,2],[6,2],[6,6],[6,9],[12,1],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[7,2],[7,2],[7,2],[7,3],[7,1],[7,1],[7,1],[7,1],[7,1],[7,4]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1]; 
break;
case 2: this.$ = {'node': 'block', 'stmts': [$$[$0]]}; 
break;
case 3: $$[$0-1]['stmts'].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 4:this.$ = $$[$0-1];
break;
case 5: this.$ = {'node': 'if', 'exp': $$[$0-4], 'tBlock': $$[$0-2], 'fBlock': {'node': 'block', 'stmts': []}};
break;
case 6: this.$ = {'node': 'if', 'exp': $$[$0-7], 'tBlock': $$[$0-5], 'fBlock': $$[$0-2]}; 
break;
case 7: this.$ = yytext; 
break;
case 8:this.$ = {'node': 'op', 'op': '+', 'args': [$$[$0-2], $$[$0]]};
break;
case 9:this.$ = {'node': 'op', 'op': '-', 'args': [$$[$0-2], $$[$0]]};
break;
case 10:this.$ = {'node': 'op', 'op': '*', 'args': [$$[$0-2], $$[$0]]};
break;
case 11:this.$ = {'node': 'op', 'op': '/', 'args': [$$[$0-2], $$[$0]]};
break;
case 12:this.$ = {'node': 'op', 'op': '^', 'args': [$$[$0-2], $$[$0]]};
break;
case 13:this.$ = {'node': 'op', 'op': '=', 'args': [$$[$0-2], $$[$0]]};
break;
case 14:this.$ = {'node': 'op', 'op': '==', 'args': [$$[$0-2], $$[$0]]};
break;
case 15:
          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 16:this.$ = $$[$0-1]/100;
break;
case 17:this.$ = {'node': 'op', 'op': '-', 'args': [0, $$[$0]]};
break;
case 18:this.$ = $$[$0-1];
break;
case 19:this.$ = {'node': 'lit', 'literal': Number(yytext)};
break;
case 20:this.$ = {'node': 'lit', 'literal': JSON.parse(yytext)};
break;
case 21:this.$ = {'node': 'lit', 'literal': Math.E};
break;
case 22:this.$ = {'node': 'lit', 'literal': Math.PI};
break;
case 23:this.$ = {'node': 'sym', 'name': $$[$0]};
break;
case 24:this.$ = {'node': 'call', 'exp': $$[$0-3], 'args': [$$[$0-1]]};
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:[1,5],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{1:[3]},{5:[1,14],6:15,7:4,9:[1,5],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{5:[2,2],9:[2,2],10:[2,2],11:[2,2],13:[2,2],15:[2,2],23:[2,2],25:[2,2],26:[2,2],27:[2,2],28:[2,2]},{8:[1,16],14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,26]},{7:27,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:28,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:29,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19]},{8:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20]},{8:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21]},{8:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22]},{8:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23]},{8:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7]},{1:[2,1]},{5:[2,3],9:[2,3],10:[2,3],11:[2,3],13:[2,3],15:[2,3],23:[2,3],25:[2,3],26:[2,3],27:[2,3],28:[2,3]},{5:[2,4],9:[2,4],10:[2,4],11:[2,4],13:[2,4],15:[2,4],23:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4]},{7:30,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:31,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:32,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:33,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:34,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:35,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{7:36,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15]},{8:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16]},{7:37,12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[1,38],14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,26]},{8:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17]},{14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,26],24:[1,39]},{8:[2,8],14:[2,8],15:[2,8],16:[1,19],17:[1,20],18:[1,21],19:[2,8],20:[2,8],21:[1,24],22:[1,25],23:[2,8],24:[2,8]},{8:[2,9],14:[2,9],15:[2,9],16:[1,19],17:[1,20],18:[1,21],19:[2,9],20:[2,9],21:[1,24],22:[1,25],23:[2,9],24:[2,9]},{8:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[1,21],19:[2,10],20:[2,10],21:[1,24],22:[1,25],23:[2,10],24:[2,10]},{8:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[1,21],19:[2,11],20:[2,11],21:[1,24],22:[1,25],23:[2,11],24:[2,11]},{8:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[1,24],22:[1,25],23:[2,12],24:[2,12]},{8:[2,13],14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,26],24:[2,13]},{8:[2,14],14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[2,14],20:[2,14],21:[1,24],22:[1,25],23:[2,14],24:[2,14]},{14:[1,17],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,26],24:[1,40]},{4:41,6:3,7:4,9:[1,5],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18]},{8:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24]},{6:15,7:4,9:[1,5],10:[1,42],11:[1,43],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[1,44]},{8:[1,45]},{5:[2,5],9:[2,5],10:[2,5],11:[2,5],13:[2,5],15:[2,5],23:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5]},{4:46,6:3,7:4,9:[1,5],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{6:15,7:4,9:[1,5],10:[1,47],12:12,13:[1,13],15:[1,6],23:[1,7],25:[1,8],26:[1,9],27:[1,10],28:[1,11]},{8:[1,48]},{5:[2,6],9:[2,6],10:[2,6],11:[2,6],13:[2,6],15:[2,6],23:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6]}],
defaultActions: {14:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 8
break;
case 1:/* skip whitespace */
break;
case 2:return 25
break;
case 3:return 26
break;
case 4:return 16
break;
case 5:return 17
break;
case 6:return 15
break;
case 7:return 14
break;
case 8:return 18
break;
case 9:return 21
break;
case 10:return 22
break;
case 11:return 23
break;
case 12:return 24
break;
case 13:return 20
break;
case 14:return 19
break;
case 15:return 28
break;
case 16:return 27
break;
case 17:return 9
break;
case 18:return 10
break;
case 19:return 11
break;
case 20:return 13
break;
case 21:return 5
break;
case 22:return 'INVALID'
break;
}
};
lexer.rules = [/^\n+/,/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^"([^"\\"]|\\["\"""\\"])*"/,/^\*/,/^\//,/^-/,/^\+/,/^\^/,/^!/,/^%/,/^\(/,/^\)/,/^==/,/^=/,/^PI\b/,/^E\b/,/^if\b/,/^end\b/,/^else\b/,/^[a-zA-Z0-9_]+/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require("fs").readFileSync(require("path").join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}
