import { UserTutorialRecord, TutorialStatus } from '../types';

const STORAGE_KEY = 'byo_x_user_progress_v1';

export function loadUserRecords(): Record<string, UserTutorialRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load user records from localStorage', err);
    return {};
  }
}

export function saveUserRecords(records: Record<string, UserTutorialRecord>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save user records to localStorage', err);
  }
}

export function updateTutorialStatus(
  records: Record<string, UserTutorialRecord>,
  tutorialId: string,
  status: TutorialStatus
): Record<string, UserTutorialRecord> {
  const existing = records[tutorialId] || {
    tutorialId,
    status: 'not_started',
    updatedAt: new Date().toISOString()
  };

  const updated: Record<string, UserTutorialRecord> = {
    ...records,
    [tutorialId]: {
      ...existing,
      status,
      updatedAt: new Date().toISOString()
    }
  };

  saveUserRecords(updated);
  return updated;
}

export function updateTutorialNotes(
  records: Record<string, UserTutorialRecord>,
  tutorialId: string,
  notes: string,
  rating?: number,
  repoUrl?: string
): Record<string, UserTutorialRecord> {
  const existing = records[tutorialId] || {
    tutorialId,
    status: 'in_progress',
    updatedAt: new Date().toISOString()
  };

  const updated: Record<string, UserTutorialRecord> = {
    ...records,
    [tutorialId]: {
      ...existing,
      notes,
      rating: rating !== undefined ? rating : existing.rating,
      repoUrl: repoUrl !== undefined ? repoUrl : existing.repoUrl,
      updatedAt: new Date().toISOString()
    }
  };

  saveUserRecords(updated);
  return updated;
}
