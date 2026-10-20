import React, { useState, useEffect } from 'react';
import { Database, Play, Clock, FileText, Trash2, RotateCcw, Sparkles } from 'lucide-react';

interface DBItem {
  value: string;
  type: 'string' | 'integer';
  createdAt: number;
  expiresAt: number | null; // timestamp in ms
}

export const KeyValuePlayground: React.FC = () => {
  const [db, setDb] = useState<Record<string, DBItem>>({
    session_token: { value: '9a8fbc12e4', type: 'string', createdAt: Date.now(), expiresAt: Date.now() + 45000 },
    site_hits: { value: '1420', type: 'integer', createdAt: Date.now(), expiresAt: null },
    app_version: { value: '2.4.0', type: 'string', createdAt: Date.now(), expiresAt: null }
  });

  const [aofLogs, setAofLogs] = useState<string[]>([
    '*3\\r\\n$3\\r\\nSET\\r\\n$13\\r\\nsession_token\\r\\n$10\\r\\n9a8fbc12e4\\r\\n',
    '*3\\r\\n$3\\r\\nSET\\r\\n$9\\r\\nsite_hits\\r\\n$4\\r\\n1420\\r\\n',
    '*3\\r\\n$3\\r\\nSET\\r\\n$11\\r\\napp_version\\r\\n$5\\r\\n2.4.0\\r\\n'
  ]);

  const [commandInput, setCommandInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ text: string; isOutput?: boolean; error?: boolean }>>([
    { text: '127.0.0.1:6379> Welcome to byo-redis (In-Memory Key-Value Store)!' },
    { text: '127.0.0.1:6379> Supported commands: SET, GET, DEL, INCR, EXPIRE, TTL, KEYS, FLUSHDB, PING' }
  ]);

  // Periodic TTL tick to expire keys
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      setDb(prev => {
        let changed = false;
        const next: Record<string, DBItem> = {};
        for (const [k, v] of Object.entries(prev)) {
          if (v.expiresAt !== null && v.expiresAt <= now) {
            changed = true;
          } else {
            next[k] = v;
          }
        }
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toUpperCase();
    const args = parts.slice(1);

    const newCli = [...cliHistory, { text: `127.0.0.1:6379> ${trimmed}` }];

    switch (cmd) {
      case 'PING':
        newCli.push({ text: 'PONG', isOutput: true });
        break;

      case 'SET': {
        if (args.length < 2) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "set" command', error: true });
          break;
        }
        const key = args[0];
        const val = args.slice(1).join(' ');
        const isNum = !isNaN(Number(val));
        const expiresAt: number | null = null;

        setDb(prev => ({
          ...prev,
          [key]: { value: val, type: isNum ? 'integer' : 'string', createdAt: Date.now(), expiresAt }
        }));

        setAofLogs(prev => [
          ...prev,
          `*3\\r\\n$3\\r\\nSET\\r\\n$${key.length}\\r\\n${key}\\r\\n$${val.length}\\r\\n${val}\\r\\n`
        ]);

        newCli.push({ text: 'OK', isOutput: true });
        break;
      }

      case 'GET': {
        if (!args[0]) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "get" command', error: true });
          break;
        }
        const key = args[0];
        const item = db[key];
        if (!item) {
          newCli.push({ text: '(nil)', isOutput: true });
        } else {
          newCli.push({ text: `"${item.value}"`, isOutput: true });
        }
        break;
      }

      case 'DEL': {
        if (!args[0]) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "del" command', error: true });
          break;
        }
        let count = 0;
        setDb(prev => {
          const next = { ...prev };
          for (const k of args) {
            if (next[k]) {
              delete next[k];
              count++;
            }
          }
          return next;
        });
        setAofLogs(prev => [
          ...prev,
          `*${args.length + 1}\\r\\n$3\\r\\nDEL\\r\\n${args.map(k => `$${k.length}\\r\\n${k}\\r\\n`).join('')}`
        ]);
        newCli.push({ text: `(integer) ${count}`, isOutput: true });
        break;
      }

      case 'INCR': {
        if (!args[0]) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "incr" command', error: true });
          break;
        }
        const key = args[0];
        const item = db[key];
        let newVal = 1;
        if (item) {
          const num = parseInt(item.value, 10);
          if (isNaN(num)) {
            newCli.push({ text: '(error) ERR value is not an integer or out of range', error: true });
            break;
          }
          newVal = num + 1;
        }

        setDb(prev => ({
          ...prev,
          [key]: { value: String(newVal), type: 'integer', createdAt: Date.now(), expiresAt: item?.expiresAt || null }
        }));
        newCli.push({ text: `(integer) ${newVal}`, isOutput: true });
        break;
      }

      case 'EXPIRE': {
        if (args.length < 2) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "expire" command', error: true });
          break;
        }
        const [key, secsStr] = args;
        const secs = parseInt(secsStr, 10);
        if (!db[key] || isNaN(secs)) {
          newCli.push({ text: '(integer) 0', isOutput: true });
        } else {
          setDb(prev => ({
            ...prev,
            [key]: { ...prev[key], expiresAt: Date.now() + secs * 1000 }
          }));
          newCli.push({ text: '(integer) 1', isOutput: true });
        }
        break;
      }

      case 'TTL': {
        if (!args[0]) {
          newCli.push({ text: '(error) ERR wrong number of arguments for "ttl" command', error: true });
          break;
        }
        const item = db[args[0]];
        if (!item) {
          newCli.push({ text: '(integer) -2', isOutput: true }); // key does not exist
        } else if (item.expiresAt === null) {
          newCli.push({ text: '(integer) -1', isOutput: true }); // no timeout
        } else {
          const remainingSecs = Math.max(0, Math.round((item.expiresAt - Date.now()) / 1000));
          newCli.push({ text: `(integer) ${remainingSecs}`, isOutput: true });
        }
        break;
      }

      case 'KEYS': {
        const keys = Object.keys(db);
        if (keys.length === 0) {
          newCli.push({ text: '(empty array)', isOutput: true });
        } else {
          const list = keys.map((k, i) => `${i + 1}) "${k}"`).join('\n');
          newCli.push({ text: list, isOutput: true });
        }
        break;
      }

      case 'FLUSHDB':
        setDb({});
        newCli.push({ text: 'OK (flushed all keys)', isOutput: true });
        break;

      default:
        newCli.push({
          text: `(error) ERR unknown command '${cmd}', with args beginning with: ${args.slice(0, 2).join(' ')}`,
          error: true
        });
        break;
    }

    setCliHistory(newCli);
    setCommandInput('');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Header bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Build Your Own Database / Key-Value Store</h4>
            <p className="text-slate-400 text-xs">Simulating Redis in-memory storage, RESP protocol serialization, and TTL eviction</p>
          </div>
        </div>

        <button
          onClick={() => {
            setDb({
              session_token: { value: '9a8fbc12e4', type: 'string', createdAt: Date.now(), expiresAt: Date.now() + 45000 },
              site_hits: { value: '1420', type: 'integer', createdAt: Date.now(), expiresAt: null },
              app_version: { value: '2.4.0', type: 'string', createdAt: Date.now(), expiresAt: null }
            });
            setCliHistory([{ text: '127.0.0.1:6379> DB reset to seed dataset.' }]);
          }}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Store
        </button>
      </div>

      {/* Grid: CLI vs In-Memory Table vs AOF */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* REPL / CLI */}
        <div className="p-4 bg-slate-950/90 flex flex-col h-80">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Redis REPL Interface</span>
            <span className="text-[11px] text-blue-400 font-mono">Port 6379</span>
          </div>

          <div className="flex-1 overflow-y-auto font-mono text-xs text-slate-300 space-y-1 mb-2 pr-1">
            {cliHistory.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.error
                    ? 'text-rose-400'
                    : item.isOutput
                    ? 'text-cyan-300 pl-4 whitespace-pre-wrap'
                    : 'text-slate-200 font-semibold'
                }
              >
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-emerald-400 font-mono text-xs font-bold select-none">&gt;</span>
            <input
              type="text"
              value={commandInput}
              onChange={e => setCommandInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCommand(commandInput)}
              placeholder="e.g. SET score 99 or GET score"
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-slate-100 placeholder:text-slate-600"
            />
            <button
              onClick={() => handleCommand(commandInput)}
              className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium"
            >
              Exec
            </button>
          </div>
        </div>

        {/* Memory Store Visualizer */}
        <div className="p-4 bg-slate-950/80 flex flex-col h-80 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">In-Memory Hash Table</span>
            <span className="text-[11px] text-emerald-400 font-mono">{Object.keys(db).length} Keys</span>
          </div>

          {Object.keys(db).length === 0 ? (
            <div className="text-slate-500 text-xs italic flex-1 flex items-center justify-center">
              (Database is empty — use SET to add keys)
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(db).map(([key, item]) => {
                const ttlRemaining =
                  item.expiresAt === null
                    ? null
                    : Math.max(0, Math.round((item.expiresAt - Date.now()) / 1000));

                return (
                  <div
                    key={key}
                    className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-semibold">{key}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-slate-300 mt-0.5 text-[11px] truncate max-w-[160px]">
                        value: &quot;{item.value}&quot;
                      </div>
                    </div>

                    <div className="text-right">
                      {ttlRemaining === null ? (
                        <span className="text-[10px] text-slate-500">Persistent</span>
                      ) : (
                        <span className="text-[10px] text-amber-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ttlRemaining}s TTL
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* AOF Append-Only Log Stream */}
        <div className="p-4 bg-slate-950/95 flex flex-col h-80 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Append-Only File (AOF)</span>
            <span className="text-[11px] text-amber-400 font-mono">RESP Wire Format</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-[11px] text-amber-300/80 leading-relaxed space-y-2">
            {aofLogs.map((log, idx) => (
              <div key={idx} className="border-b border-slate-800/60 pb-1">
                <span className="text-slate-600 select-none mr-2">[{idx + 1}]</span>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
        <span>
          💡 <strong>Redis Architecture:</strong> Single-threaded event loop (<code className="text-slate-300">epoll / kqueue</code>), custom hash table with incremental rehashing, and append-only persistence log.
        </span>
      </div>
    </div>
  );
};
