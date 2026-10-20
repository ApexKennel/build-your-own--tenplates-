import React from 'react';
import { Terminal, Code, Sparkles, BookOpen, Layers, Dices, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';

interface BannerHeroProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onRandomChallenge: () => void;
}

export const BannerHero: React.FC<BannerHeroProps> = ({
  activeTab,
  onTabChange,
  onRandomChallenge
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-6 border-b border-slate-800/80">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Link to CodeCrafters */}
        <div className="flex justify-center mb-6">
          <a
            href="https://codecrafters.io/github-banner"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 hover:border-indigo-500/80 hover:bg-slate-850 shadow-lg transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="font-medium text-slate-300">Maintained with love by CodeCrafters</span>
            <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Hero Title & Feynman Quote */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Build your own <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">&lt;technology&gt;</span> from scratch
          </h1>

          <div className="mt-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm max-w-xl mx-auto">
            <blockquote className="text-slate-300 italic text-sm font-medium leading-relaxed">
              &ldquo;What I cannot create, I do not understand.&rdquo;
            </blockquote>
            <cite className="block text-right text-xs font-mono text-indigo-400 mt-1 not-italic font-semibold">
              — Richard Feynman
            </cite>
          </div>

          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            The definitive compilation of step-by-step guides for recreating our favorite technologies—from databases and programming languages to ray tracers, kernels, and BitTorrent clients.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-6 text-center">
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
            <div className="text-xl font-extrabold text-white font-mono">358</div>
            <div className="text-[11px] text-slate-400 font-medium">Curated Guides</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
            <div className="text-xl font-extrabold text-indigo-400 font-mono">31</div>
            <div className="text-[11px] text-slate-400 font-medium">Technology Domains</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
            <div className="text-xl font-extrabold text-emerald-400 font-mono">25+</div>
            <div className="text-[11px] text-slate-400 font-medium">Languages (C, Rust, Go...)</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
            <div className="text-xl font-extrabold text-amber-400 font-mono">100%</div>
            <div className="text-[11px] text-slate-400 font-medium">Free & Open Source</div>
          </div>
        </div>

        {/* Action Tabs Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => onTabChange('catalog')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Tutorial Catalog</span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300">
                358
              </span>
            </button>

            <button
              onClick={() => onTabChange('playgrounds')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'playgrounds'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Interactive Sandboxes</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                Live
              </span>
            </button>

            <button
              onClick={() => onTabChange('tracker')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'tracker'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Learning Tracker</span>
            </button>

            <button
              onClick={() => onTabChange('templates')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'templates'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Starter Templates</span>
            </button>
          </div>

          <button
            onClick={onRandomChallenge}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-all shadow-sm"
          >
            <Dices className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>Surprise Me (Random Challenge)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
