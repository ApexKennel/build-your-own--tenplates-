import React, { useRef, useEffect } from 'react';
import { Search, X, Filter, RotateCcw, Check } from 'lucide-react';
import { FilterState } from '../types';
import { CATEGORIES_META } from '../data/tutorialsData';

interface FiltersBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  popularLanguages: string[];
  totalResults: number;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  onFilterChange,
  popularLanguages,
  totalResults
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hasActiveFilters =
    filters.search !== '' ||
    filters.category !== 'all' ||
    filters.language !== 'all' ||
    filters.format !== 'all' ||
    filters.statusFilter !== 'all';

  const resetFilters = () => {
    onFilterChange({
      search: '',
      category: 'all',
      language: 'all',
      format: 'all',
      statusFilter: 'all',
      sortBy: 'default'
    });
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 lg:p-5 shadow-xl space-y-4 my-6">
      {/* Top Search & Category Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            ref={searchInputRef}
            type="text"
            value={filters.search}
            onChange={e => onFilterChange({ ...filters, search: e.target.value })}
            placeholder="Search 358 tutorials by title, language, or topic... (Press '/' to focus)"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-9 py-2.5 text-xs text-slate-200 outline-none focus:border-indigo-500 placeholder:text-slate-500 transition-colors"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ ...filters, search: '' })}
              className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Select */}
        <div className="md:col-span-4">
          <select
            value={filters.category}
            onChange={e => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="all">All 31 Categories ({Object.keys(CATEGORIES_META).length})</option>
            {Object.entries(CATEGORIES_META).map(([name, meta]) => (
              <option key={name} value={name}>
                {name} ({meta.count})
              </option>
            ))}
          </select>
        </div>

        {/* Format Select */}
        <div className="md:col-span-2">
          <select
            value={filters.format}
            onChange={e => onFilterChange({ ...filters, format: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="all">All Formats</option>
            <option value="Article">Article / Guide</option>
            <option value="Video">Video</option>
            <option value="PDF / Book">PDF / Book</option>
            <option value="Repository">Repository</option>
            <option value="Interactive">Interactive</option>
          </select>
        </div>
      </div>

      {/* Language Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="text-xs text-slate-400 font-medium mr-1.5 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          Language:
        </span>
        <button
          onClick={() => onFilterChange({ ...filters, language: 'all' })}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
            filters.language === 'all'
              ? 'bg-indigo-600 text-white font-semibold shadow-sm'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          All
        </button>

        {popularLanguages.map(lang => (
          <button
            key={lang}
            onClick={() => onFilterChange({ ...filters, language: filters.language === lang ? 'all' : lang })}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              filters.language === lang
                ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Progress Status Filter & Result Count Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">Show:</span>
          {(['all', 'bookmarked', 'in_progress', 'completed'] as const).map(status => (
            <button
              key={status}
              onClick={() => onFilterChange({ ...filters, statusFilter: status })}
              className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
                filters.statusFilter === status
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {status === 'all' ? 'All Guides' : status.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-mono text-[11px]">
            Showing <strong className="text-white">{totalResults}</strong> tutorials
          </span>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
