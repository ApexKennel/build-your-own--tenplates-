import React, { useState } from 'react';
import { Sparkles, Dices, ExternalLink, Bookmark, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Tutorial } from '../data/tutorialsData';

interface RandomChallengeModalProps {
  tutorials: Tutorial[];
  onClose: () => void;
  onSelectTutorial: (tutorial: Tutorial) => void;
}

export const RandomChallengeModal: React.FC<RandomChallengeModalProps> = ({
  tutorials,
  onClose,
  onSelectTutorial
}) => {
  const [selected, setSelected] = useState<Tutorial>(() => {
    return tutorials[Math.floor(Math.random() * tutorials.length)];
  });

  const rollDice = () => {
    const next = tutorials[Math.floor(Math.random() * tutorials.length)];
    setSelected(next);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 mx-auto flex items-center justify-center shadow-lg shadow-orange-500/20 mb-4 text-white">
          <Dices className="w-6 h-6 animate-pulse" />
        </div>

        <h3 className="text-lg font-bold text-white">Your Weekend Build Challenge</h3>
        <p className="text-slate-400 text-xs mt-1 mb-6">
          Step outside your comfort zone. Reconstruct a core technology from first principles.
        </p>

        {/* Selected Project Card */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-left mb-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold">
              {selected.category}
            </span>
            <span className="text-xs font-mono text-emerald-400 font-medium">
              {selected.rawLanguage}
            </span>
          </div>

          <h4 className="text-base font-bold text-white pt-1">
            {selected.title}
          </h4>

          <div className="text-xs text-slate-400 pt-1">
            Format: <span className="text-slate-200">{selected.format}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={rollDice}
            className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          >
            <Dices className="w-4 h-4 text-amber-400" />
            Reroll Project
          </button>

          <a
            href={selected.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onSelectTutorial(selected);
              onClose();
            }}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-500/25 transition-all"
          >
            <span>Start Building</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
