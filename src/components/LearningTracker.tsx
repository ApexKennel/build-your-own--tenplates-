import React, { useState } from 'react';
import { Trophy, CheckCircle2, Clock, Bookmark, Download, ExternalLink, Edit3, Sparkles, FolderGit2 } from 'lucide-react';
import { ALL_TUTORIALS, CATEGORIES_META } from '../data/tutorialsData';
import { UserTutorialRecord } from '../types';

interface LearningTrackerProps {
  userRecords: Record<string, UserTutorialRecord>;
  onOpenNotes: (tutorialId: string) => void;
}

export const LearningTracker: React.FC<LearningTrackerProps> = ({
  userRecords,
  onOpenNotes
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'in_progress' | 'completed' | 'bookmarked'>('in_progress');

  const inProgressList = ALL_TUTORIALS.filter(t => userRecords[t.id]?.status === 'in_progress');
  const completedList = ALL_TUTORIALS.filter(t => userRecords[t.id]?.status === 'completed');
  const bookmarkedList = ALL_TUTORIALS.filter(t => userRecords[t.id]?.status === 'bookmarked');

  const totalCompleted = completedList.length;
  const totalInProgress = inProgressList.length;
  const totalBookmarked = bookmarkedList.length;
  const totalGuides = ALL_TUTORIALS.length;
  const progressPct = Math.round((totalCompleted / totalGuides) * 100);

  // Group by category counts
  const categoryCompletedCounts: Record<string, number> = {};
  completedList.forEach(t => {
    categoryCompletedCounts[t.category] = (categoryCompletedCounts[t.category] || 0) + 1;
  });

  const exportAsMarkdown = () => {
    let md = `# My Build-Your-Own-X Engineering Progress\n\n`;
    md += `**Total Completed:** ${totalCompleted} / ${totalGuides} (${progressPct}%)\n`;
    md += `**In Progress:** ${totalInProgress} | **Bookmarked:** ${totalBookmarked}\n\n`;

    if (completedList.length > 0) {
      md += `## Completed Projects\n`;
      completedList.forEach(t => {
        const rec = userRecords[t.id];
        md += `- [x] **[${t.category}]** [${t.title}](${t.url}) (${t.rawLanguage})\n`;
        if (rec?.repoUrl) md += `  - My Repo: [${rec.repoUrl}](${rec.repoUrl})\n`;
        if (rec?.notes) md += `  - Notes: ${rec.notes.replace(/\n/g, ' ')}\n`;
      });
      md += `\n`;
    }

    if (inProgressList.length > 0) {
      md += `## Currently In Progress\n`;
      inProgressList.forEach(t => {
        md += `- [/] **[${t.category}]** [${t.title}](${t.url}) (${t.rawLanguage})\n`;
      });
      md += `\n`;
    }

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'build-your-own-x-progress.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getSubList = () => {
    if (activeSubTab === 'completed') return completedList;
    if (activeSubTab === 'bookmarked') return bookmarkedList;
    return inProgressList;
  };

  const currentItems = getSubList();

  return (
    <div className="space-y-6">
      {/* Top Banner Stats */}
      <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-900/40 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Trophy className="w-4 h-4" />
              Developer Mastery Tracker
            </div>
            <h2 className="text-2xl font-extrabold text-white">Your Scratch-Building Journey</h2>
            <p className="text-slate-400 text-xs mt-1 max-w-xl">
              Track your hands-on journey from user to engineer. True understanding comes from building things yourself.
            </p>
          </div>

          <button
            onClick={exportAsMarkdown}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold shadow-md transition-all"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            Export Portfolio Markdown
          </button>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-8 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-medium text-slate-300">Catalog Completion</span>
            <span className="font-mono text-indigo-400 font-semibold">{totalCompleted} of {totalGuides} Completed ({progressPct}%)</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(2, progressPct)}%` }}
            />
          </div>
        </div>

        {/* 3 Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{totalInProgress}</div>
              <div className="text-xs text-slate-400">In Progress</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{totalCompleted}</div>
              <div className="text-xs text-slate-400">Completed Builds</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{totalBookmarked}</div>
              <div className="text-xs text-slate-400">Saved for Later</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: In Progress, Completed, Bookmarked */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveSubTab('in_progress')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'in_progress'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          In Progress ({totalInProgress})
        </button>

        <button
          onClick={() => setActiveSubTab('completed')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'completed'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Completed Builds ({totalCompleted})
        </button>

        <button
          onClick={() => setActiveSubTab('bookmarked')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeSubTab === 'bookmarked'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          Bookmarked ({totalBookmarked})
        </button>
      </div>

      {/* Items List */}
      {currentItems.length === 0 ? (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-500 mx-auto flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-white">No tutorials in this list yet</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Browse the catalog to bookmark or mark guides as in-progress.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentItems.map(item => {
            const rec = userRecords[item.id];
            return (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-400 font-mono text-[11px] font-semibold">
                      {item.category}
                    </span>
                    <span className="font-mono text-emerald-400 text-xs">
                      {item.rawLanguage}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {item.title}
                  </h4>

                  {rec?.notes && (
                    <div className="mt-2 text-xs text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 leading-relaxed italic">
                      &quot;{rec.notes}&quot;
                    </div>
                  )}

                  {rec?.repoUrl && (
                    <a
                      href={rec.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      View Your Implementation Repo
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenNotes(item.id)}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Edit Notes
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    <span>Read Guide</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
