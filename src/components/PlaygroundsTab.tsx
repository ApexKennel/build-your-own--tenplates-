import React, { useState } from 'react';
import { Terminal, Code, Database, Box, Sparkles, BookOpen } from 'lucide-react';
import { ShellPlayground } from '../playgrounds/ShellPlayground';
import { LispPlayground } from '../playgrounds/LispPlayground';
import { KeyValuePlayground } from '../playgrounds/KeyValuePlayground';
import { RaytracerPlayground } from '../playgrounds/RaytracerPlayground';

export const PlaygroundsTab: React.FC = () => {
  const [activePlayground, setActivePlayground] = useState<'shell' | 'lisp' | 'redis' | 'raytracer'>('shell');

  return (
    <div className="space-y-6">
      {/* Introduction Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Interactive Code Laboratories
            </div>
            <h2 className="text-2xl font-bold text-white">Live In-Browser Sandboxes</h2>
            <p className="text-slate-400 text-xs mt-1 max-w-xl">
              Don&apos;t just read tutorials—interact with working models of shells, interpreters, database storage engines, and 3D ray tracers directly in your browser.
            </p>
          </div>

          {/* Sandbox Selector */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActivePlayground('shell')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activePlayground === 'shell'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Terminal className="w-4 h-4" />
              Unix Shell
            </button>

            <button
              onClick={() => setActivePlayground('lisp')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activePlayground === 'lisp'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4" />
              Lisp Interpreter
            </button>

            <button
              onClick={() => setActivePlayground('redis')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activePlayground === 'redis'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Database className="w-4 h-4" />
              Redis KV Store
            </button>

            <button
              onClick={() => setActivePlayground('raytracer')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activePlayground === 'raytracer'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Box className="w-4 h-4" />
              3D Ray Tracer
            </button>
          </div>
        </div>
      </div>

      {/* Render Active Sandbox */}
      {activePlayground === 'shell' && <ShellPlayground />}
      {activePlayground === 'lisp' && <LispPlayground />}
      {activePlayground === 'redis' && <KeyValuePlayground />}
      {activePlayground === 'raytracer' && <RaytracerPlayground />}
    </div>
  );
};
