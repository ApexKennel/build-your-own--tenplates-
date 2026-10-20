import React, { useState } from 'react';
import { Code, Play, Sparkles, BookOpen, Layers, CheckCircle2, RotateCcw } from 'lucide-react';

type LispVal = number | string | boolean | LispVal[] | ((args: LispVal[]) => LispVal);

export const LispPlayground: React.FC = () => {
  const [code, setCode] = useState<string>(
`;; 1. Define a recursive factorial function
(def fact
  (lambda (n)
    (if (<= n 1)
        1
        (* n (fact (- n 1))))))

;; 2. Compute factorial of 5
(fact 5)`
  );

  const [output, setOutput] = useState<string>('Run the code to see AST & evaluated result!');
  const [astTree, setAstTree] = useState<any>(null);
  const [tokensList, setTokensList] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // 1. Lexer
  const tokenize = (input: string): string[] => {
    // Strip comments
    const noComments = input.replace(/;.*$/gm, '');
    const tokens = noComments
      .replace(/\(/g, ' ( ')
      .replace(/\)/g, ' ) ')
      .trim()
      .split(/\s+/)
      .filter(t => t.length > 0);
    return tokens;
  };

  // 2. Parser
  const parse = (tokens: string[]): any => {
    if (tokens.length === 0) return null;
    const token = tokens.shift();
    if (token === '(') {
      const list: any[] = [];
      while (tokens.length > 0 && tokens[0] !== ')') {
        list.push(parse(tokens));
      }
      tokens.shift(); // remove closing ')'
      return list;
    } else if (token === ')') {
      throw new Error('Unexpected closing parenthesis `)`');
    } else {
      // Atoms: number, string, boolean, symbol
      if (!isNaN(Number(token))) return Number(token);
      if (token === 'true') return true;
      if (token === 'false') return false;
      if (token?.startsWith('"') && token?.endsWith('"')) return token.slice(1, -1);
      return token; // symbol
    }
  };

  // 3. Evaluator
  const createEnv = (parent?: any): any => {
    const vars: Record<string, any> = {
      '+': (args: any[]) => args.reduce((a, b) => a + b, 0),
      '-': (args: any[]) => (args.length === 1 ? -args[0] : args[0] - args[1]),
      '*': (args: any[]) => args.reduce((a, b) => a * b, 1),
      '/': (args: any[]) => args[0] / args[1],
      '>': (args: any[]) => args[0] > args[1],
      '<': (args: any[]) => args[0] < args[1],
      '>=': (args: any[]) => args[0] >= args[1],
      '<=': (args: any[]) => args[0] <= args[1],
      '=': (args: any[]) => args[0] === args[1],
      'list': (args: any[]) => args,
      'first': (args: any[]) => Array.isArray(args[0]) ? args[0][0] : null,
      'rest': (args: any[]) => Array.isArray(args[0]) ? args[0].slice(1) : [],
      'print': (args: any[]) => { console.log(...args); return args.join(' '); }
    };

    return {
      get: (sym: string): any => {
        if (sym in vars) return vars[sym];
        if (parent) return parent.get(sym);
        throw new Error(`Unbound symbol: "${sym}"`);
      },
      set: (sym: string, val: any) => {
        vars[sym] = val;
      }
    };
  };

  const evaluate = (exp: any, env: any): any => {
    if (typeof exp === 'number' || typeof exp === 'boolean') return exp;
    if (typeof exp === 'string') {
      if (exp.startsWith('"') && exp.endsWith('"')) return exp.slice(1, -1);
      return env.get(exp);
    }
    if (!Array.isArray(exp)) return exp;
    if (exp.length === 0) return [];

    const [first, ...rest] = exp;

    // Special Form: def
    if (first === 'def') {
      const [name, valExp] = rest;
      const value = evaluate(valExp, env);
      env.set(name, value);
      return `Defined "${name}"`;
    }

    // Special Form: if
    if (first === 'if') {
      const [cond, thenExp, elseExp] = rest;
      const test = evaluate(cond, env);
      return test ? evaluate(thenExp, env) : evaluate(elseExp, env);
    }

    // Special Form: lambda
    if (first === 'lambda') {
      const [params, body] = rest;
      return (args: any[]) => {
        const localEnv = createEnv(env);
        params.forEach((param: string, i: number) => {
          localEnv.set(param, args[i]);
        });
        return evaluate(body, localEnv);
      };
    }

    // Function invocation
    const fn = evaluate(first, env);
    if (typeof fn !== 'function') {
      throw new Error(`Cannot call non-function expression: ${JSON.stringify(first)}`);
    }
    const evaluatedArgs = rest.map(arg => evaluate(arg, env));
    return fn(evaluatedArgs);
  };

  const runInterpreter = (inputCode: string) => {
    setError(null);
    try {
      const tokens = tokenize(inputCode);
      setTokensList(tokens);

      const tokensCopy = [...tokens];
      const expressions: any[] = [];
      while (tokensCopy.length > 0) {
        const expr = parse(tokensCopy);
        if (expr !== null) expressions.push(expr);
      }

      setAstTree(expressions);

      const globalEnv = createEnv();
      let lastResult: any = null;

      for (const expr of expressions) {
        lastResult = evaluate(expr, globalEnv);
      }

      setOutput(
        typeof lastResult === 'object' && lastResult !== null
          ? JSON.stringify(lastResult, null, 2)
          : String(lastResult)
      );
    } catch (err: any) {
      setError(err.message || 'Syntax/Runtime error');
      setOutput('');
    }
  };

  const samplePrograms: Record<string, string> = {
    factorial: `;; Recursive Factorial
(def fact
  (lambda (n)
    (if (<= n 1)
        1
        (* n (fact (- n 1))))))

(fact 6)`,
    fibonacci: `;; Fibonacci Sequence
(def fib
  (lambda (n)
    (if (<= n 1)
        n
        (+ (fib (- n 1)) (fib (- n 2))))))

(fib 7)`,
    higherOrder: `;; Higher-Order Functions: Custom Double & Map
(def double (lambda (x) (* x 2)))

(def apply-twice
  (lambda (f x)
    (f (f x))))

(apply-twice double 5)`,
    lists: `;; Working with Lists & Head/Tail
(def my-list (list 10 20 30 40))

(+ (first my-list) (first (rest my-list)))`
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Header bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Build Your Own Lisp / Interpreter Playground</h4>
            <p className="text-slate-400 text-xs">Real tree-walking AST interpreter running live in WebAssembly/JS</p>
          </div>
        </div>

        {/* Examples dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs">Load Example:</span>
          <select
            onChange={e => {
              const key = e.target.value;
              if (samplePrograms[key]) {
                setCode(samplePrograms[key]);
                runInterpreter(samplePrograms[key]);
              }
            }}
            className="bg-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 outline-none"
          >
            <option value="factorial">Factorial (Recursion)</option>
            <option value="fibonacci">Fibonacci</option>
            <option value="higherOrder">Higher Order Functions</option>
            <option value="lists">Lists (first/rest)</option>
          </select>

          <button
            onClick={() => runInterpreter(code)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-semibold shadow-md transition-all ml-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Evaluate Code
          </button>
        </div>
      </div>

      {/* Editor & Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* Code Input */}
        <div className="p-4 bg-slate-950/80 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Source Code (S-Expressions)</span>
            <span className="text-[11px] text-violet-400 font-mono">Lexer → Parser → Evaluator</span>
          </div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full h-72 bg-slate-900 border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-slate-200 outline-none focus:border-violet-500 leading-relaxed resize-none"
            spellCheck={false}
          />
        </div>

        {/* AST & Result Output */}
        <div className="p-4 bg-slate-950/90 flex flex-col space-y-4">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Evaluated Return Value
            </span>
            <div className={`p-3.5 rounded-xl border font-mono text-xs ${
              error
                ? 'bg-rose-950/40 border-rose-800/80 text-rose-300'
                : 'bg-slate-900 border-slate-800 text-emerald-400'
            }`}>
              {error ? `❌ ${error}` : `=> ${output}`}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Generated AST (Abstract Syntax Tree)
            </span>
            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl max-h-44 overflow-y-auto font-mono text-[11px] text-slate-300 leading-normal">
              {astTree ? (
                <pre>{JSON.stringify(astTree, null, 2)}</pre>
              ) : (
                <span className="text-slate-500 italic">Run code to inspect parsed AST</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Explainer Bar */}
      <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400"></span>
          <span>Core components: <strong>Lexer</strong> (splits parenthesized tokens) → <strong>Parser</strong> (builds nested AST array) → <strong>Evaluator</strong> (evaluates against environment scope)</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px]">
          Based on Peter Norvig’s Lispy & Crafting Interpreters
        </div>
      </div>
    </div>
  );
};
