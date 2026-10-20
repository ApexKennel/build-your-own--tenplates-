import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Play, BookOpen, Layers, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface FileNode {
  type: 'file' | 'dir';
  content?: string;
  children?: Record<string, FileNode>;
}

const INITIAL_FS: Record<string, FileNode> = {
  home: {
    type: 'dir',
    children: {
      user: {
        type: 'dir',
        children: {
          'README.md': {
            type: 'file',
            content: '# Welcome to BYO-Shell!\nThis is an interactive Unix-like shell sandbox running in your browser.\nRecreate commands from scratch using fork(), execvp(), and pipes.'
          },
          'hello.c': {
            type: 'file',
            content: '#include <stdio.h>\nint main() {\n    printf("Hello from your custom shell!\\n");\n    return 0;\n}'
          },
          'projects': {
            type: 'dir',
            children: {
              'notes.txt': {
                type: 'file',
                content: 'Step 1: Read line from stdin\nStep 2: Tokenize string into argv array\nStep 3: Check built-ins (cd, exit)\nStep 4: fork() and execvp()\nStep 5: waitpid()'
              }
            }
          }
        }
      }
    }
  },
  bin: {
    type: 'dir',
    children: {
      ls: { type: 'file', content: '[binary ELF]' },
      cat: { type: 'file', content: '[binary ELF]' },
      echo: { type: 'file', content: '[binary ELF]' },
      grep: { type: 'file', content: '[binary ELF]' }
    }
  }
};

export const ShellPlayground: React.FC = () => {
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'error'; text: string; details?: string }>>([
    { type: 'output', text: '🐚 Build Your Own Shell Simulator v1.0.0 (x86_64-wasm)' },
    { type: 'output', text: 'Type "help" to see available built-ins and Unix commands.' },
    { type: 'output', text: 'Try commands like: ls, cat README.md, echo "Hello World" | grep Hello, pwd, cd projects' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cwd, setCwd] = useState<string[]>(['home', 'user']);
  const [envVars, setEnvVars] = useState<Record<string, string>>({
    USER: 'user',
    HOME: '/home/user',
    PATH: '/bin:/usr/bin',
    SHELL: '/bin/byo-sh'
  });
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [fsState, setFsState] = useState<Record<string, FileNode>>(INITIAL_FS);
  const [lastExecutedTokens, setLastExecutedTokens] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'terminal' | 'internals' | 'guide'>('terminal');

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const getCwdPath = () => '/' + cwd.join('/');

  const resolvePath = (pathStr: string): { dir: FileNode | null; name: string } | null => {
    let parts: string[];
    if (pathStr.startsWith('/')) {
      parts = pathStr.split('/').filter(Boolean);
    } else if (pathStr.startsWith('~')) {
      parts = ['home', 'user', ...pathStr.slice(1).split('/').filter(Boolean)];
    } else {
      parts = [...cwd, ...pathStr.split('/').filter(Boolean)];
    }

    const normalized: string[] = [];
    for (const p of parts) {
      if (p === '.') continue;
      if (p === '..') {
        normalized.pop();
      } else {
        normalized.push(p);
      }
    }

    if (normalized.length === 0) {
      return { dir: { type: 'dir', children: fsState }, name: '' };
    }

    const targetName = normalized[normalized.length - 1];
    const parentParts = normalized.slice(0, -1);

    let curr: any = { type: 'dir', children: fsState };
    for (const seg of parentParts) {
      if (!curr.children || !curr.children[seg] || curr.children[seg].type !== 'dir') {
        return null;
      }
      curr = curr.children[seg];
    }

    return { dir: curr, name: targetName };
  };

  const handleCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    setCmdHistory(prev => [...prev, trimmed]);
    setHistoryIdx(-1);

    // Record user command
    const promptDisplay = `${envVars.USER}@byo-shell:${getCwdPath()}$ ${trimmed}`;
    const newHist = [...history, { type: 'input' as const, text: promptDisplay }];

    // Handle Pipe syntax
    if (trimmed.includes('|')) {
      const stages = trimmed.split('|').map(s => s.trim());
      setLastExecutedTokens(stages);
      
      let intermediateOutput = '';
      let hasError = false;

      for (let i = 0; i < stages.length; i++) {
        const stage = stages[i];
        const tokens = stage.match(/(?:[^\s"]+|"[^"]*")+/g)?.map(t => t.replace(/^"|"$/g, '')) || [];
        const cmd = tokens[0];
        const args = tokens.slice(1);

        if (cmd === 'echo') {
          intermediateOutput = args.join(' ');
        } else if (cmd === 'grep') {
          const pattern = args[0] || '';
          const lines = (i === 0 ? '' : intermediateOutput).split('\n');
          intermediateOutput = lines.filter(l => l.toLowerCase().includes(pattern.toLowerCase())).join('\n');
        } else if (cmd === 'wc') {
          const flag = args[0];
          const words = intermediateOutput.trim().split(/\s+/).filter(Boolean);
          const lines = intermediateOutput.split('\n').filter(Boolean);
          if (flag === '-w') intermediateOutput = `${words.length}`;
          else if (flag === '-l') intermediateOutput = `${lines.length}`;
          else intermediateOutput = `\t${lines.length}\t${words.length}\t${intermediateOutput.length}`;
        } else if (cmd === 'cat') {
          intermediateOutput = intermediateOutput || `(empty pipe stream)`;
        } else {
          newHist.push({ type: 'error', text: `byo-sh: pipe stage '${cmd}' not supported in demo` });
          hasError = true;
          break;
        }
      }

      if (!hasError) {
        newHist.push({
          type: 'output',
          text: intermediateOutput || '(no matching output)',
          details: `Executed via pipe() and dup2(): [${stages.join(' -> ')}]`
        });
      }
      setHistory(newHist);
      setInputVal('');
      return;
    }

    // Tokenize
    const tokens = trimmed.match(/(?:[^\s"]+|"[^"]*")+/g)?.map(t => t.replace(/^"|"$/g, '')) || [];
    setLastExecutedTokens(tokens);

    const cmd = tokens[0];
    const args = tokens.slice(1);

    switch (cmd) {
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        newHist.push({
          type: 'output',
          text: `BUILD YOUR OWN SHELL — Commands supported:
  • ls [-l] [path]       - List directory contents
  • pwd                  - Print current working directory
  • cd [path]            - Change directory (supports ~, .., relative, absolute)
  • cat <file>           - Concatenate and display file content
  • echo [text]          - Print arguments to standard output
  • touch <file>         - Create an empty file
  • mkdir <dir>          - Create a new directory
  • export KEY=VAL       - Set shell environment variable
  • env                  - List all environment variables
  • history              - Print command history list
  • clear                - Clear screen
  • [cmd1] | [cmd2]      - Pipe output between commands (e.g. echo "foo" | grep foo)`
        });
        break;

      case 'pwd':
        newHist.push({ type: 'output', text: getCwdPath() });
        break;

      case 'cd': {
        const dest = args[0] || '~';
        let targetParts: string[];
        if (dest === '~' || dest === '') {
          targetParts = ['home', 'user'];
        } else if (dest.startsWith('/')) {
          targetParts = dest.split('/').filter(Boolean);
        } else {
          targetParts = [...cwd, ...dest.split('/').filter(Boolean)];
        }

        const normalized: string[] = [];
        for (const p of targetParts) {
          if (p === '.') continue;
          if (p === '..') normalized.pop();
          else normalized.push(p);
        }

        // Validate path exists in fs
        let valid = true;
        let curr: any = { type: 'dir', children: fsState };
        for (const seg of normalized) {
          if (!curr.children || !curr.children[seg] || curr.children[seg].type !== 'dir') {
            valid = false;
            break;
          }
          curr = curr.children[seg];
        }

        if (valid) {
          setCwd(normalized);
        } else {
          newHist.push({ type: 'error', text: `cd: no such file or directory: ${dest}` });
        }
        break;
      }

      case 'ls': {
        const targetPath = args.find(a => !a.startsWith('-')) || '.';
        const showLong = args.includes('-l');

        let targetDir: FileNode | null = null;
        if (targetPath === '.') {
          let curr: any = { type: 'dir', children: fsState };
          for (const seg of cwd) {
            curr = curr.children[seg];
          }
          targetDir = curr;
        } else {
          const res = resolvePath(targetPath);
          if (res && res.dir?.children && res.dir.children[res.name]) {
            const node = res.dir.children[res.name];
            if (node.type === 'dir') targetDir = node;
            else {
              newHist.push({ type: 'output', text: res.name });
              break;
            }
          }
        }

        if (!targetDir || !targetDir.children) {
          newHist.push({ type: 'error', text: `ls: cannot access '${targetPath}': No such file or directory` });
        } else {
          const entries = Object.entries(targetDir.children);
          if (entries.length === 0) {
            newHist.push({ type: 'output', text: '(empty directory)' });
          } else if (showLong) {
            const lines = entries.map(([name, node]) => {
              const perm = node.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--';
              const size = node.content ? node.content.length : 4096;
              return `${perm}  1 ${envVars.USER}  staff  ${String(size).padStart(5)}  Oct 12  ${name}${node.type === 'dir' ? '/' : ''}`;
            });
            newHist.push({ type: 'output', text: lines.join('\n') });
          } else {
            const list = entries.map(([name, node]) => node.type === 'dir' ? `${name}/` : name).join('   ');
            newHist.push({ type: 'output', text: list });
          }
        }
        break;
      }

      case 'cat': {
        if (!args[0]) {
          newHist.push({ type: 'error', text: 'cat: missing operand' });
          break;
        }
        const res = resolvePath(args[0]);
        if (res && res.dir?.children && res.dir.children[res.name]) {
          const node = res.dir.children[res.name];
          if (node.type === 'dir') {
            newHist.push({ type: 'error', text: `cat: ${args[0]}: Is a directory` });
          } else {
            newHist.push({ type: 'output', text: node.content || '' });
          }
        } else {
          newHist.push({ type: 'error', text: `cat: ${args[0]}: No such file or directory` });
        }
        break;
      }

      case 'echo': {
        const text = args.join(' ');
        newHist.push({ type: 'output', text });
        break;
      }

      case 'touch': {
        if (!args[0]) {
          newHist.push({ type: 'error', text: 'touch: missing file operand' });
          break;
        }
        const fileName = args[0];
        const res = resolvePath(fileName);
        if (res && res.dir && res.dir.children) {
          res.dir.children[res.name] = { type: 'file', content: '' };
          setFsState({ ...fsState });
          newHist.push({ type: 'output', text: `Created file: ${fileName}` });
        } else {
          newHist.push({ type: 'error', text: `touch: cannot touch '${fileName}': No such directory` });
        }
        break;
      }

      case 'mkdir': {
        if (!args[0]) {
          newHist.push({ type: 'error', text: 'mkdir: missing operand' });
          break;
        }
        const dirName = args[0];
        const res = resolvePath(dirName);
        if (res && res.dir && res.dir.children) {
          res.dir.children[res.name] = { type: 'dir', children: {} };
          setFsState({ ...fsState });
          newHist.push({ type: 'output', text: `Created directory: ${dirName}` });
        } else {
          newHist.push({ type: 'error', text: `mkdir: cannot create directory '${dirName}': No such directory` });
        }
        break;
      }

      case 'export': {
        if (!args[0] || !args[0].includes('=')) {
          newHist.push({ type: 'error', text: 'export: usage: export KEY=VALUE' });
          break;
        }
        const [k, ...rest] = args[0].split('=');
        const v = rest.join('=');
        setEnvVars(prev => ({ ...prev, [k]: v }));
        newHist.push({ type: 'output', text: `Set environment variable: ${k}="${v}"` });
        break;
      }

      case 'env': {
        const lines = Object.entries(envVars).map(([k, v]) => `${k}=${v}`).join('\n');
        newHist.push({ type: 'output', text: lines });
        break;
      }

      case 'history': {
        const lines = cmdHistory.map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`).join('\n');
        newHist.push({ type: 'output', text: lines || 'No commands in history yet.' });
        break;
      }

      default:
        newHist.push({
          type: 'error',
          text: `byo-sh: command not found: ${cmd}. (Type "help" for supported commands)`
        });
        break;
    }

    setHistory(newHist);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      if (historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Header bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-slate-400 font-mono text-xs flex items-center gap-1.5 ml-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            byo-shell • Interactive Unix Shell Simulator
          </span>
        </div>

        {/* Navigation tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1 rounded-md transition-all ${
              activeTab === 'terminal' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Terminal
          </button>
          <button
            onClick={() => setActiveTab('internals')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'internals' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            How Shells Work
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'guide' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            C Implementation Blueprint
          </button>
        </div>
      </div>

      {/* Main Tab View */}
      {activeTab === 'terminal' && (
        <div
          className="p-5 font-mono text-sm bg-slate-950/90 text-slate-200 min-h-[380px] max-h-[460px] overflow-y-auto flex flex-col cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((h, i) => (
            <div key={i} className="mb-2 leading-relaxed">
              {h.type === 'input' ? (
                <div className="text-emerald-400 font-semibold">{h.text}</div>
              ) : h.type === 'error' ? (
                <div className="text-rose-400">{h.text}</div>
              ) : (
                <div className="text-slate-300 whitespace-pre-wrap">
                  {h.text}
                  {h.details && (
                    <div className="text-indigo-400/80 text-xs mt-1 border-l-2 border-indigo-500 pl-2">
                      💡 {h.details}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-emerald-400 font-semibold select-none">
              {envVars.USER}@byo-shell:{getCwdPath()}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono caret-emerald-400"
              autoFocus
              placeholder="Try: ls -l, cat hello.c, echo hello | grep he"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      )}

      {activeTab === 'internals' && (
        <div className="p-6 bg-slate-950/95 text-slate-300 text-sm space-y-6 max-h-[460px] overflow-y-auto">
          <div>
            <h4 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              The 5 Core Steps of Every Unix Shell (sh, bash, zsh)
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Every shell runs an infinite Read-Eval-Print Loop (REPL). Behind every command execution in Linux or macOS, the following 5 system calls occur:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-1">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">1</span>
                Tokenization / Lexing
              </div>
              <p className="text-xs text-slate-400">
                Splits the raw string input into an array of pointers (<code className="text-slate-200">char *argv[]</code>) using delimiters like space or quotes via <code className="text-slate-200">strtok()</code>.
              </p>
              {lastExecutedTokens.length > 0 && (
                <div className="mt-2 text-[11px] font-mono bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
                  Last tokens: [{lastExecutedTokens.map(t => `"${t}"`).join(', ')}]
                </div>
              )}
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-1">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">2</span>
                Built-in Command Check
              </div>
              <p className="text-xs text-slate-400">
                Commands like <code className="text-slate-200">cd</code> and <code className="text-slate-200">exit</code> MUST run in the shell parent process itself; running <code className="text-slate-200">cd</code> in a child process would not change the parent directory!
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-1">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">3</span>
                Process Forking (fork())
              </div>
              <p className="text-xs text-slate-400">
                The operating system clones the shell process. The parent gets the child PID; the child gets return value 0.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-1">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">4</span>
                Program Execution (execvp())
              </div>
              <p className="text-xs text-slate-400">
                The child process replaces its own memory space with the executable found on <code className="text-slate-200">$PATH</code>, passing in <code className="text-slate-200">argv</code>.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'guide' && (
        <div className="p-6 bg-slate-950/95 text-slate-300 text-xs font-mono max-h-[460px] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-white">Minimal C Shell in 50 lines (main.c)</span>
            <span className="text-[11px] text-slate-400">POSIX Standard</span>
          </div>
          <pre className="bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto text-slate-300 leading-relaxed">
{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    char line[1024];
    while (1) {
        printf("my-sh> ");
        if (!fgets(line, sizeof(line), stdin)) break;
        line[strcspn(line, "\\n")] = 0; // strip newline

        // 1. Tokenize line into argv
        char *argv[64];
        int i = 0;
        char *token = strtok(line, " ");
        while (token && i < 63) {
            argv[i++] = token;
            token = strtok(NULL, " ");
        }
        argv[i] = NULL;
        if (argv[0] == NULL) continue;

        // 2. Built-in: cd & exit
        if (strcmp(argv[0], "exit") == 0) break;
        if (strcmp(argv[0], "cd") == 0) {
            if (chdir(argv[1] ? argv[1] : getenv("HOME")) != 0)
                perror("cd");
            continue;
        }

        // 3. fork() child process
        pid_t pid = fork();
        if (pid == 0) {
            // Child: execute program
            execvp(argv[0], argv);
            perror(argv[0]);
            exit(1);
        } else if (pid > 0) {
            // Parent: wait for child to finish
            int status;
            waitpid(pid, &status, 0);
        } else {
            perror("fork");
        }
    }
    return 0;
}`}
          </pre>
        </div>
      )}

      {/* Footer controls */}
      <div className="bg-slate-950 px-5 py-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Tab</span>
          <span>Switch tabs</span>
          <span className="mx-2">•</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">↑ / ↓</span>
          <span>Command history</span>
        </div>
        <button
          onClick={() => {
            setHistory([
              { type: 'output', text: '🐚 Reset to default state. Type "help" to start.' }
            ]);
            setCwd(['home', 'user']);
            setFsState(INITIAL_FS);
          }}
          className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Sandbox
        </button>
      </div>
    </div>
  );
};
