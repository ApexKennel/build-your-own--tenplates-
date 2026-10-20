import React from 'react';
import { Terminal, Trophy, Sparkles, Dices, BookOpen, ExternalLink } from 'lucide-react';
import { ActiveTab, UserStats } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onRandomChallenge: () => void;
  stats: UserStats;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onRandomChallenge,
  stats
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div
          onClick={() => onTabChange('catalog')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-tight font-mono">
                BuildYourOwn<span className="text-indigo-400">(X)</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 font-mono text-[10px] border border-indigo-500/20 font-semibold">
                v3.0 • 358 Guides
              </span>
            </div>
            <p className="hidden md:block text-[11px] text-slate-400 font-sans">
              Recreating technology from first principles
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* User Progress Pill */}
          <button
            onClick={() => onTabChange('tracker')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">
              <span className="text-emerald-400 font-bold">{stats.completedCount}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">358</span>
            </span>
          </button>

          {/* Upstream Github Link */}
          <a
            href="https://github.com/codecrafters-io/build-your-own-x"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            title="View original CodeCrafters repo on GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
