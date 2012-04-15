// Add a convenient top function to the Array type
Array.prototype.top = function() { return this[this.length-1]; };

var Block = function(stmts) {
    return {'node': 'block', 'stmts': stmts};
};

var If = function(exp, tBlock, fBlock) {
    return {
        'node': 'if',
        'exp': exp,
        'tBlock': tBlock,
        'fBlock': fBlock
    };
};

var Op = function(op, args) {
    return {'node': 'op', 'op': op, 'args': args};
};

var Sym = function(name) {
    return {'node': 'sym', 'name': name};
};

var NumLit = function(literal) {
    return {'node': 'numlit', 'literal': literal};
};

var Call = function(exp, args) {
    return {'node': 'call', 'exp': exp, 'args': args};
};

var lookup = function(name, s) {
    for (var i = s.length - 1; i >= 0; i--)
    {
        var v = s[i][name];
        if (v !== undefined)
            return v;
    }
    return undefined;
};

var assign = function(name, value, s) {
    for (var i = s.length - 1; i >= 0; i--)
    {
        var v = s[i][name];
        if (v !== undefined)
            return (s[i][name] = value);
    }
    return (s.top()[name] = value);
};

var ops = {
    '+': function(a, s){ return ev(a[0], s) + ev(a[1], s); },
    '-': function(a, s){ return ev(a[0], s) - ev(a[1], s); },
    '*': function(a, s){ return ev(a[0], s) * ev(a[1], s); },
    '/': function(a, s){ return ev(a[0], s) / ev(a[1], s); },
    '^': function(a, s){ return Math.pow(ev(a[0], s),ev(a[1], s)); },
    '==': function(a, s){ return ev(a[0], s) === ev(a[1], s); },
    '=': function(a, s){ return assign(a[0].name, ev(a[1], s), s); }
};

var ev = function(exp, s)
{
    if (exp.node == 'op')
        return (ops[exp.op])(exp.args, s);
    else if (exp.node == 'sym')
        return lookup(exp.name, s);
    else if (exp.node == 'lit')
        return exp.literal;
    else if (exp.node == 'call')
    {
        var args = exp.args.map(function(arg){return ev(arg, s);});
        return ev(exp.exp, s).apply(this, args);
    }
    else
        return null;
};

var execute = function(block, globals) {
    var symbolStack = [globals];
    executeBlock(block, symbolStack);
};

var executeBlock = function(block, s) {
    s.push({});
    var stmts = block.stmts;
    for (var i = 0; i < stmts.length; i++) {
        var stmt = stmts[i];
        if (stmt.node == 'if')
        {
            if (ev(stmt.exp, s))
                executeBlock(stmt.tBlock, s);
            else
                executeBlock(stmt.fBlock, s);
        }
        else
            ev(stmt, s);
    }
    s.pop();
};

var globals = {
    'print': function(v){console.log(v);},
    'ask': function(caption){return prompt(caption);},
    'answer': function(caption){return alert(caption);},
    'num': function(s){return Number(s);}
};

var executeCode = function(code)
{
    var byteCode = parser.parse(code);
    execute(byteCode, globals);
};

