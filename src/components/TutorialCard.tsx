import React, { useState } from 'react';
import { ExternalLink, Bookmark, CheckCircle2, Clock, Edit3, Share2, Star, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Tutorial } from '../data/tutorialsData';
import { UserTutorialRecord, TutorialStatus } from '../types';

interface TutorialCardProps {
  tutorial: Tutorial;
  record?: UserTutorialRecord;
  onStatusChange: (status: TutorialStatus) => void;
  onOpenNotes: () => void;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({
  tutorial,
  record,
  onStatusChange,
  onOpenNotes
}) => {
  const [copied, setCopied] = useState(false);
  const currentStatus = record?.status || 'not_started';
  const hasNotes = !!record?.notes;
  const rating = record?.rating || 0;

  const handleStatusSelect = (newStatus: TutorialStatus) => {
    if (newStatus === 'completed' && currentStatus !== 'completed') {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 }
      });
    }
    onStatusChange(newStatus);
  };

  const copyUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(tutorial.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group relative bg-slate-900/90 border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 ${
        currentStatus === 'completed'
          ? 'border-emerald-500/40 bg-emerald-950/10'
          : currentStatus === 'in_progress'
          ? 'border-indigo-500/40 bg-indigo-950/10'
          : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono text-[11px] font-semibold border border-slate-700/60">
              {tutorial.category}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-[11px] font-medium border border-indigo-500/20">
              {tutorial.rawLanguage}
            </span>
          </div>

          {/* Bookmark Toggle */}
          <button
            onClick={() => handleStatusSelect(currentStatus === 'bookmarked' ? 'not_started' : 'bookmarked')}
            className={`p-1.5 rounded-lg transition-colors ${
              currentStatus === 'bookmarked'
                ? 'text-amber-400 bg-amber-400/10'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
            title="Bookmark this guide"
          >
            <Bookmark className={`w-4 h-4 ${currentStatus === 'bookmarked' ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug mb-2">
          {tutorial.title}
        </h3>

        {/* Format & Extra notes */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
          <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 font-medium">
            {tutorial.format}
          </span>
          {tutorial.extra && (
            <span className="text-[11px] text-slate-500 truncate">
              {tutorial.extra}
            </span>
          )}
        </div>
      </div>

      {/* User Progress, Notes, & External Link */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* Status Dropdown */}
        <div className="flex items-center gap-1">
          <select
            value={currentStatus}
            onChange={e => handleStatusSelect(e.target.value as TutorialStatus)}
            className={`text-xs rounded-lg px-2 py-1 outline-none font-medium transition-colors cursor-pointer border ${
              currentStatus === 'completed'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
                : currentStatus === 'in_progress'
                ? 'bg-indigo-950/60 text-indigo-300 border-indigo-700/60'
                : currentStatus === 'bookmarked'
                ? 'bg-amber-950/60 text-amber-300 border-amber-700/60'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <option value="not_started">○ Not Started</option>
            <option value="in_progress">◐ In Progress</option>
            <option value="completed">● Completed</option>
            <option value="bookmarked">★ Bookmarked</option>
          </select>

          {/* Notes Trigger */}
          <button
            onClick={onOpenNotes}
            className={`p-1.5 rounded-lg text-xs transition-colors relative ${
              hasNotes || rating > 0
                ? 'text-indigo-400 bg-indigo-500/10'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
            title="Add notes and rating"
          >
            <Edit3 className="w-3.5 h-3.5" />
            {hasNotes && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
            )}
          </button>
        </div>

        {/* Share & Open Link */}
        <div className="flex items-center gap-1">
          <button
            onClick={copyUrl}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
            title="Copy link to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>

          <a
            href={tutorial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-semibold transition-all"
          >
            <span>Open</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
