import React, { useState } from 'react';
import { X, Star, Link, Save, BookOpen } from 'lucide-react';
import { Tutorial } from '../data/tutorialsData';
import { UserTutorialRecord } from '../types';

interface NotesModalProps {
  tutorial: Tutorial;
  record?: UserTutorialRecord;
  onClose: () => void;
  onSave: (notes: string, rating: number, repoUrl: string) => void;
}

export const NotesModal: React.FC<NotesModalProps> = ({
  tutorial,
  record,
  onClose,
  onSave
}) => {
  const [notes, setNotes] = useState(record?.notes || '');
  const [rating, setRating] = useState(record?.rating || 0);
  const [repoUrl, setRepoUrl] = useState(record?.repoUrl || '');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(notes, rating, repoUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="font-semibold text-white text-sm">Learning Log & Notes</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div>
            <div className="text-xs font-semibold text-indigo-400 mb-1">
              {tutorial.category} • {tutorial.rawLanguage}
            </div>
            <h4 className="text-base font-bold text-white">{tutorial.title}</h4>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Difficulty / Quality Rating
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-1 transition-colors ${
                    star <= rating ? 'text-amber-400' : 'text-slate-700 hover:text-slate-500'
                  }`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
              <span className="text-xs text-slate-400 ml-2">
                {rating === 0 ? 'Not rated' : `${rating} / 5 Stars`}
              </span>
            </div>
          </div>

          {/* User's GitHub Repo Link */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Your Implementation Repo (optional)
            </label>
            <div className="relative">
              <Link className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="url"
                value={repoUrl}
                onChange={e => setRepoUrl(e.target.value)}
                placeholder="https://github.com/your-username/my-byo-project"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 outline-none focus:border-indigo-500 placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Personal Notes */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Personal Notes & Takeaways
            </label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="What did you learn? What bottlenecks or edge-cases did you encounter while building this from scratch?"
              rows={5}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-indigo-500 placeholder:text-slate-600 resize-none leading-relaxed"
            />
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all"
            >
              <Save className="w-4 h-4" />
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
