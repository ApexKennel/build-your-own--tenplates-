import React, { useState, useMemo, useEffect } from 'react';
import { ALL_TUTORIALS, CATEGORIES_META, Tutorial } from './data/tutorialsData';
import { ActiveTab, FilterState, UserTutorialRecord, UserStats, TutorialStatus } from './types';
import { loadUserRecords, updateTutorialStatus, updateTutorialNotes } from './utils/storage';
import { Navbar } from './components/Navbar';
import { BannerHero } from './components/BannerHero';
import { CategoryGrid } from './components/CategoryGrid';
import { FiltersBar } from './components/FiltersBar';
import { TutorialCard } from './components/TutorialCard';
import { PlaygroundsTab } from './components/PlaygroundsTab';
import { LearningTracker } from './components/LearningTracker';
import { StarterTemplateGenerator } from './components/StarterTemplateGenerator';
import { NotesModal } from './components/NotesModal';
import { RandomChallengeModal } from './components/RandomChallengeModal';
import { Sparkles, ChevronDown } from 'lucide-react';

const POPULAR_LANGS = [
  'Python', 'C', 'C++', 'Go', 'Rust', 'JavaScript',
  'TypeScript', 'Java', 'C#', 'Ruby', 'Haskell', 'Nim'
];

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('catalog');
  const [userRecords, setUserRecords] = useState<Record<string, UserTutorialRecord>>(() => loadUserRecords());
  const [selectedTutorialForNotes, setSelectedTutorialForNotes] = useState<Tutorial | null>(null);
  const [showRandomModal, setShowRandomModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(36);

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'all',
    language: 'all',
    format: 'all',
    statusFilter: 'all',
    sortBy: 'default'
  });

  // Calculate stats
  const stats: UserStats = useMemo(() => {
    let completed = 0;
    let inProgress = 0;
    let bookmarked = 0;

    for (const rec of Object.values(userRecords)) {
      if (rec.status === 'completed') completed++;
      else if (rec.status === 'in_progress') inProgress++;
      else if (rec.status === 'bookmarked') bookmarked++;
    }

    return {
      totalTracked: Object.keys(userRecords).length,
      completedCount: completed,
      inProgressCount: inProgress,
      bookmarkedCount: bookmarked
    };
  }, [userRecords]);

  // Filter and search tutorials
  const filteredTutorials = useMemo(() => {
    const query = filters.search.toLowerCase().trim();

    return ALL_TUTORIALS.filter(tut => {
      // Search text query
      if (query) {
        const matchesTitle = tut.title.toLowerCase().includes(query);
        const matchesCat = tut.category.toLowerCase().includes(query);
        const matchesLang = tut.rawLanguage.toLowerCase().includes(query);
        const matchesFormat = tut.format.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCat && !matchesLang && !matchesFormat) {
          return false;
        }
      }

      // Category filter
      if (filters.category !== 'all' && tut.category !== filters.category) {
        return false;
      }

      // Language filter
      if (filters.language !== 'all') {
        const hasLang = tut.languages.some(l => l.toLowerCase() === filters.language.toLowerCase()) ||
          tut.rawLanguage.toLowerCase().includes(filters.language.toLowerCase());
        if (!hasLang) return false;
      }

      // Format filter
      if (filters.format !== 'all' && tut.format !== filters.format) {
        return false;
      }

      // User status filter
      if (filters.statusFilter !== 'all') {
        const rec = userRecords[tut.id];
        const status = rec?.status || 'not_started';
        if (status !== filters.statusFilter) {
          return false;
        }
      }

      return true;
    });
  }, [filters, userRecords]);

  const handleStatusChange = (tutorialId: string, status: TutorialStatus) => {
    const updated = updateTutorialStatus(userRecords, tutorialId, status);
    setUserRecords(updated);
  };

  const handleSaveNotes = (notes: string, rating: number, repoUrl: string) => {
    if (!selectedTutorialForNotes) return;
    const updated = updateTutorialNotes(
      userRecords,
      selectedTutorialForNotes.id,
      notes,
      rating,
      repoUrl
    );
    setUserRecords(updated);
  };

  const handleCategorySelect = (cat: string) => {
    setFilters(prev => ({ ...prev, category: cat }));
    setVisibleCount(36);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={tab => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRandomChallenge={() => setShowRandomModal(true)}
        stats={stats}
      />

      {/* Main Banner Hero */}
      <BannerHero
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onRandomChallenge={() => setShowRandomModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {/* TAB 1: Catalog */}
        {activeTab === 'catalog' && (
          <div>
            {/* Visual Category Grid */}
            <CategoryGrid
              selectedCategory={filters.category}
              onSelectCategory={handleCategorySelect}
            />

            {/* Filter controls */}
            <FiltersBar
              filters={filters}
              onFilterChange={f => {
                setFilters(f);
                setVisibleCount(36);
              }}
              popularLanguages={POPULAR_LANGS}
              totalResults={filteredTutorials.length}
            />

            {/* Tutorials List */}
            {filteredTutorials.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-16 text-center space-y-4 my-8">
                <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No tutorials match your filters</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try clearing your search query or switching to another category or language.
                </p>
                <button
                  onClick={() => setFilters({
                    search: '',
                    category: 'all',
                    language: 'all',
                    format: 'all',
                    statusFilter: 'all',
                    sortBy: 'default'
                  })}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTutorials.slice(0, visibleCount).map(tut => (
                    <TutorialCard
                      key={tut.id}
                      tutorial={tut}
                      record={userRecords[tut.id]}
                      onStatusChange={status => handleStatusChange(tut.id, status)}
                      onOpenNotes={() => setSelectedTutorialForNotes(tut)}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredTutorials.length && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 36)}
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold shadow-lg transition-all"
                    >
                      <span>Load More Tutorials ({filteredTutorials.length - visibleCount} remaining)</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Live Playgrounds */}
        {activeTab === 'playgrounds' && <PlaygroundsTab />}

        {/* TAB 3: Learning Tracker */}
        {activeTab === 'tracker' && (
          <LearningTracker
            userRecords={userRecords}
            onOpenNotes={tutId => {
              const found = ALL_TUTORIALS.find(t => t.id === tutId);
              if (found) setSelectedTutorialForNotes(found);
            }}
          />
        )}

        {/* TAB 4: Starter Templates */}
        {activeTab === 'templates' && <StarterTemplateGenerator />}
      </main>

      {/* Modals */}
      {selectedTutorialForNotes && (
        <NotesModal
          tutorial={selectedTutorialForNotes}
          record={userRecords[selectedTutorialForNotes.id]}
          onClose={() => setSelectedTutorialForNotes(null)}
          onSave={handleSaveNotes}
        />
      )}

      {showRandomModal && (
        <RandomChallengeModal
          tutorials={ALL_TUTORIALS}
          onClose={() => setShowRandomModal(false)}
          onSelectTutorial={tut => {
            handleStatusChange(tut.id, 'in_progress');
          }}
        />
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-slate-300">Build Your Own (X)</span>
            <span>•</span>
            <span>CC0 Public Domain</span>
            <span>•</span>
            <span>Started by Daniel Stefanovic & Maintained by CodeCrafters, Inc.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/codecrafters-io/build-your-own-x"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://codecrafters.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              CodeCrafters
            </a>
            <button
              onClick={() => {
                localStorage.clear();
                setUserRecords({});
              }}
              className="hover:text-rose-400 transition-colors"
            >
              Reset Local Storage
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
