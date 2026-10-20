import { Tutorial, CategoryMeta } from './data/tutorialsData';

export type TutorialStatus = 'not_started' | 'in_progress' | 'completed' | 'bookmarked';

export interface UserTutorialRecord {
  tutorialId: string;
  status: TutorialStatus;
  notes?: string;
  rating?: number; // 1-5
  repoUrl?: string;
  updatedAt: string;
}

export interface UserStats {
  totalTracked: number;
  inProgressCount: number;
  completedCount: number;
  bookmarkedCount: number;
}

export type ActiveTab = 'catalog' | 'playgrounds' | 'tracker' | 'templates';

export interface FilterState {
  search: string;
  category: string;
  language: string;
  format: string;
  statusFilter: 'all' | 'bookmarked' | 'in_progress' | 'completed';
  sortBy: 'default' | 'title' | 'category' | 'level';
}
