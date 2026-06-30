// ── Shared Types ─────────────────────────────────────────────

export interface Word {
  id: string;
  text: string;
  type: "noun_phrase" | "verb" | "adverb" | "place_phrase" | "adjective";
  emoji: string;
  category?: string;
}

export type FilledSlots = Record<string, Word | undefined>;

export interface SentencePattern {
  id: string;
  label: string;
  slots: string[];
  ex: string;
}

export interface Mission {
  id: number;
  title: string;
  subject: string;
  diff: "Easy" | "Medium" | "Hard";
  reward: number;
  icon: string;
  desc: string;
  locked: boolean;
  practice: string[];
}

export interface MapZone {
  id: string;
  label: string;
  stars: string;
  emoji: string;
  color: string;
  x: number;
  y: number;
  locked?: boolean;
}

export interface WordPart {
  id: string;
  text: string;
  meaning: string;
}

export interface WordFamily {
  id: string;
  label: string;
  emoji: string;
  count: number;
}

export interface NotebookWord {
  word: string;
  meaning: string;
}

export interface Achievement {
  id: number;
  title: string;
  desc: string;
  icon: string;
  date: string;
}

export interface SkillEntry {
  name: string;
  level: number;
  pct: number;
  color: string;
}

export interface SubjectEntry {
  name: string;
  pct: number;
  color: string;
}

export interface ActivityDay {
  day: string;
  mins: number;
}

export interface DailyReward {
  day: number;
  reward: string;
  label: string;
  claimed?: boolean;
  current?: boolean;
  locked?: boolean;
}

export interface ShopItem {
  id: string;
  name: string;
  emoji: string;
  price: number;
  owned: boolean;
}

export interface SettingsSection {
  id: string;
  label: string;
  emoji: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  stars: number;
  max: number;
  current?: boolean;
  locked?: boolean;
}
