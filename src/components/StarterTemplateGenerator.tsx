import React, { useState } from 'react';
import { Terminal, Copy, Check, FileCode, FolderTree, Milestone, Sparkles } from 'lucide-react';

interface TemplateOption {
  tech: string;
  languages: Record<string, {
    fileTree: string;
    starterCode: string;
    steps: string[];
    testCommand: string;
  }>;
}

const TEMPLATES: Record<string, TemplateOption> = {
  'Shell': {
    tech: 'Unix Shell (POSIX)',
    languages: {
      'C': {
        fileTree: `my-shell/
├── Makefile
├── README.md
└── src/
    ├── main.c
    ├── parser.c
    ├── parser.h
    └── builtins.c`,
        starterCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#define BUFSIZE 1024

int main(int argc, char **argv) {
    char line[BUFSIZE];

    while (1) {
        printf("my-sh> ");
        if (!fgets(line, sizeof(line), stdin)) break;
        line[strcspn(line, "\\n")] = 0;

        char *args[64];
        int i = 0;
        char *token = strtok(line, " ");
        while (token && i < 63) {
            args[i++] = token;
            token = strtok(NULL, " ");
        }
        args[i] = NULL;
        if (!args[0]) continue;

        if (strcmp(args[0], "exit") == 0) exit(0);
        if (strcmp(args[0], "cd") == 0) {
            chdir(args[1] ? args[1] : getenv("HOME"));
            continue;
        }

        pid_t pid = fork();
        if (pid == 0) {
            execvp(args[0], args);
            perror(args[0]);
            exit(1);
        } else if (pid > 0) {
            wait(NULL);
        }
    }
    return 0;
}`,
        steps: [
          'Print prompt and read line with fgets() or getline()',
          'Tokenize input line into argv array of strings',
          'Implement built-in commands (cd, pwd, exit)',
          'Fork child processes and run external binaries with execvp()',
          'Add pipeline support: pipe(), dup2(), and fork() chaining'
        ],
        testCommand: 'gcc -Wall -O2 src/main.c -o my-sh && ./my-sh'
      },
      'Rust': {
        fileTree: `my-shell/
├── Cargo.toml
└── src/
    └── main.rs`,
        starterCode: `use std::io::{self, Write};
use std::process::Command;

fn main() {
    let stdin = io::stdin();
    loop {
        print!("my-sh> ");
        io::stdout().flush().unwrap();

        let mut input = String::new();
        if stdin.read_line(&mut input).unwrap() == 0 {
            break;
        }

        let mut parts = input.trim().split_whitespace();
        let Some(command) = parts.next() else { continue };
        let args: Vec<&str> = parts.collect();

        match command {
            "exit" => break,
            "cd" => {
                let new_dir = args.first().copied().unwrap_or("/");
                if let Err(e) = std::env::set_current_dir(new_dir) {
                    eprintln!("cd error: {e}");
                }
            }
            cmd => match Command::new(cmd).args(args).spawn() {
                Ok(mut child) => { child.wait().unwrap(); }
                Err(e) => eprintln!("{cmd}: {e}"),
            },
        }
    }
}`,
        steps: [
          'Read lines using std::io::stdin().read_line()',
          'Parse commands and flags with split_whitespace()',
          'Implement built-in commands like cd and exit',
          'Spawn external child processes using std::process::Command',
          'Wire up stdin/stdout redirects and multi-command piping'
        ],
        testCommand: 'cargo run'
      },
      'Python': {
        fileTree: `my-shell/
├── main.py
└── test_shell.py`,
        starterCode: `import os
import sys

def main():
    while True:
        try:
            line = input(f"{os.getcwd()}$ ").strip()
            if not line:
                continue
            args = line.split()
            cmd = args[0]

            if cmd == "exit":
                break
            elif cmd == "cd":
                target = args[1] if len(args) > 1 else os.path.expanduser("~")
                os.chdir(target)
                continue

            pid = os.fork()
            if pid == 0:
                os.execvp(cmd, args)
            else:
                os.waitpid(pid, 0)
        except (EOFError, KeyboardInterrupt):
            print()
            break

if __name__ == "__main__":
    main()`,
        steps: [
          'Build infinite REPL reading input with input()',
          'Split line into args using shlex.split() or split()',
          'Check built-ins (cd, exit, export)',
          'Invoke os.fork() and os.execvp() in Unix environment',
          'Implement os.pipe() and os.dup2() for pipes (|)'
        ],
        testCommand: 'python3 main.py'
      }
    }
  },
  'Database': {
    tech: 'In-Memory KV Store / Mini Redis',
    languages: {
      'Go': {
        fileTree: `mini-redis/
├── go.mod
├── main.go
└── store/
    └── kv.go`,
        starterCode: `package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
	"sync"
)

var (
	store = make(map[string]string)
	mu    sync.RWMutex
)

func main() {
	ln, err := net.Listen("tcp", ":6379")
	if err != nil { panic(err) }
	fmt.Println("mini-redis listening on :6379...")

	for {
		conn, err := ln.Accept()
		if err != nil { continue }
		go handleClient(conn)
	}
}

func handleClient(conn net.Conn) {
	defer conn.Close()
	scanner := bufio.NewScanner(conn)
	for scanner.Scan() {
		line := scanner.Text()
		args := strings.Fields(line)
		if len(args) == 0 { continue }

		switch strings.ToUpper(args[0]) {
		case "PING":
			conn.Write([]byte("+PONG\\r\\n"))
		case "SET":
			if len(args) < 3 {
				conn.Write([]byte("-ERR wrong args\\r\\n"))
				continue
			}
			mu.Lock()
			store[args[1]] = args[2]
			mu.Unlock()
			conn.Write([]byte("+OK\\r\\n"))
		case "GET":
			mu.RLock()
			val, ok := store[args[1]]
			mu.RUnlock()
			if !ok {
				conn.Write([]byte("$-1\\r\\n"))
			} else {
				conn.Write([]byte(fmt.Sprintf("$%d\\r\\n%s\\r\\n", len(val), val)))
			}
		}
	}
}`,
        steps: [
          'Listen for TCP connections on port 6379 with net.Listen',
          'Parse RESP protocol (Simple Strings, Bulk Strings, Arrays)',
          'Thread-safe hash map with sync.RWMutex',
          'Implement TTL expiration with background goroutine ticker',
          'Persist writes to disk using Append-Only File (AOF)'
        ],
        testCommand: 'go run main.go (then test with redis-cli -p 6379 PING)'
      },
      'TypeScript': {
        fileTree: `mini-redis/
├── package.json
├── tsconfig.json
└── src/
    └── server.ts`,
        starterCode: `import net from 'net';

const store = new Map<string, { value: string; expiresAt?: number }>();

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const raw = data.toString().trim();
    const [cmd, key, ...rest] = raw.split(/\\s+/);
    const command = cmd.toUpperCase();

    if (command === 'PING') {
      socket.write('+PONG\\r\\n');
    } else if (command === 'SET') {
      const val = rest.join(' ');
      store.set(key, { value: val });
      socket.write('+OK\\r\\n');
    } else if (command === 'GET') {
      const item = store.get(key);
      if (!item) {
        socket.write('$-1\\r\\n');
      } else {
        socket.write(\`\$\${item.value.length}\\r\\n\${item.value}\\r\\n\`);
      }
    }
  });
});

server.listen(6379, () => {
  console.log('mini-redis TS listening on 6379');
});`,
        steps: [
          'Create TCP socket server with node:net',
          'Parse incoming protocol tokens',
          'Implement core SET, GET, DEL, INCR operations',
          'Add active and passive TTL expiration checks',
          'Append mutations to aof.log using fs.appendFile'
        ],
        testCommand: 'npx tsx src/server.ts'
      }
    }
  },
  'Web Server': {
    tech: 'HTTP/1.1 Web Server',
    languages: {
      'C': {
        fileTree: `web-server/
├── Makefile
└── src/
    └── server.c`,
        starterCode: `#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    int opt = 1;
    setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));

    struct sockaddr_in addr = {
        .sin_family = AF_INET,
        .sin_addr.s_addr = INADDR_ANY,
        .sin_port = htons(8080)
    };

    bind(server_fd, (struct sockaddr*)&addr, sizeof(addr));
    listen(server_fd, 10);
    printf("HTTP Server running on http://localhost:8080\\n");

    while (1) {
        int client_fd = accept(server_fd, NULL, NULL);
        char buffer[1024] = {0};
        read(client_fd, buffer, sizeof(buffer) - 1);

        char response[] = 
            "HTTP/1.1 200 OK\\r\\n"
            "Content-Type: text/html\\r\\n"
            "Content-Length: 46\\r\\n\\r\\n"
            "<h1>Hello from your C HTTP/1.1 Server!</h1>";

        write(client_fd, response, strlen(response));
        close(client_fd);
    }
    return 0;
}`,
        steps: [
          'Create TCP socket and bind to port 8080',
          'Parse incoming HTTP request line (GET /path HTTP/1.1)',
          'Extract request headers and query parameters',
          'Serve static files from public/ directory with correct MIME types',
          'Handle multi-client concurrency using fork() or epoll'
        ],
        testCommand: 'gcc src/server.c -o server && ./server'
      }
    }
  }
};

export const StarterTemplateGenerator: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('Shell');
  const availableLangs = Object.keys(TEMPLATES[selectedTech].languages);
  const [selectedLang, setSelectedLang] = useState<string>(availableLangs[0]);
  const [copied, setCopied] = useState(false);

  const currentTemplate = TEMPLATES[selectedTech].languages[selectedLang] || TEMPLATES[selectedTech].languages[availableLangs[0]];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentTemplate.starterCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 my-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <FileCode className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-bold text-white">Starter Template & Roadmap Generator</h3>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Generate pristine scaffoldings, directory trees, and milestone checklists to build your own systems from zero.
          </p>
        </div>

        {/* Tech Selector */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(TEMPLATES).map(tech => (
            <button
              key={tech}
              onClick={() => {
                setSelectedTech(tech);
                const langs = Object.keys(TEMPLATES[tech].languages);
                setSelectedLang(langs[0]);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTech === tech
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {TEMPLATES[tech].tech}
            </button>
          ))}
        </div>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-3 my-4">
        <span className="text-xs text-slate-400 font-medium">Programming Language:</span>
        <div className="flex gap-2">
          {availableLangs.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                selectedLang === lang
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Project Layout & Checklist */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FolderTree className="w-4 h-4 text-emerald-400" />
              Project File Structure
            </div>
            <pre className="font-mono text-xs text-emerald-300/90 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800/80">
              {currentTemplate.fileTree}
            </pre>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-indigo-400" />
              5-Step Implementation Checklist
            </div>
            <div className="space-y-2 text-xs">
              {currentTemplate.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-400">
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">Verify Command</div>
            <div className="text-cyan-300">{currentTemplate.testCommand}</div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300">Starter Boilerplate Code</span>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <pre className="p-4 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto flex-1 max-h-[380px]">
            {currentTemplate.starterCode}
          </pre>
        </div>
      </div>
    </div>
  );
};
