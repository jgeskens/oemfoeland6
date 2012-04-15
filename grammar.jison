
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\n+                    return 'NEWLINE'
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b      return 'NUMBER'
\"([^"\\"]|"\\"["\"""\\"])*\"     return 'STRING'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"=="                  return 'EQ'
"="                   return '='
"PI"                  return 'PI'
"E"                   return 'E'
"if"                  return 'IF'
"end"                 return 'END'
"else"                 return 'ELSE'
[a-zA-Z0-9_]+         return 'SYMBOL'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */
%right '='
%right '('
%left EQ
%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : stmtList EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

stmtList : stmt { $$ = {'node': 'block', 'stmts': [$1]}; } | stmtList stmt { $1['stmts'].push($2); $$ = $1; };

stmt : e NEWLINE {$$ = $1;}
     | IF e NEWLINE stmtList END NEWLINE 
         { $$ = {'node': 'if', 'exp': $2, 'tBlock': $4, 'fBlock': {'node': 'block', 'stmts': []}};}
     | IF e NEWLINE stmtList ELSE NEWLINE stmtList END NEWLINE 
         { $$ = {'node': 'if', 'exp': $2, 'tBlock': $4, 'fBlock': $7}; }
     
     ;

symbol : SYMBOL { $$ = yytext; };

e
    : e '+' e
        {$$ = {'node': 'op', 'op': '+', 'args': [$1, $3]};}
    | e '-' e
        {$$ = {'node': 'op', 'op': '-', 'args': [$1, $3]};}
    | e '*' e
        {$$ = {'node': 'op', 'op': '*', 'args': [$1, $3]};}
    | e '/' e
        {$$ = {'node': 'op', 'op': '/', 'args': [$1, $3]};}
    | e '^' e
        {$$ = {'node': 'op', 'op': '^', 'args': [$1, $3]};}
    | e '=' e
        {$$ = {'node': 'op', 'op': '=', 'args': [$1, $3]};}
    | e EQ e
        {$$ = {'node': 'op', 'op': '==', 'args': [$1, $3]};}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = {'node': 'op', 'op': '-', 'args': [0, $2]};}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = {'node': 'lit', 'literal': Number(yytext)};}
    | STRING
        {$$ = {'node': 'lit', 'literal': JSON.parse(yytext)};}
    | E
        {$$ = {'node': 'lit', 'literal': Math.E};}
    | PI
        {$$ = {'node': 'lit', 'literal': Math.PI};}
    | symbol
        {$$ = {'node': 'sym', 'name': $1};}
    | e '(' e ')'
        {$$ = {'node': 'call', 'exp': $1, 'args': [$3]};}
    ;
