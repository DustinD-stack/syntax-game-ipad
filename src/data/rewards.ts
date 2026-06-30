import type { Achievement, SkillEntry, SubjectEntry, ActivityDay, DailyReward } from "./types";

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: "Sentence Builder",  desc: "Build 50 sentences",           icon: "📖", date: "May 12" },
  { id: 2, title: "Word Explorer",     desc: "Learn 25 new words",           icon: "💡", date: "May 11" },
  { id: 3, title: "Science Superstar", desc: "Complete 10 science missions", icon: "🧪", date: "May 10" },
  { id: 4, title: "Perfect Builder",   desc: "Get 100% accuracy 5 times",   icon: "🎯", date: "May 9"  },
];

export const SKILL_MASTERY: SkillEntry[] = [
  { name: "Nouns",               level: 6, pct: 85, color: "#1e6ef5" },
  { name: "Verbs",               level: 6, pct: 78, color: "#16a34a" },
  { name: "Adjectives",          level: 5, pct: 63, color: "#7c3aed" },
  { name: "Prepositions",        level: 4, pct: 55, color: "#f97316" },
  { name: "Prefixes & Suffixes", level: 4, pct: 48, color: "#ef4444" },
  { name: "Sentence Structure",  level: 6, pct: 80, color: "#0d9488" },
];

export const SUBJECT_PROGRESS: SubjectEntry[] = [
  { name: "Math",          pct: 78, color: "#1e6ef5" },
  { name: "Science",       pct: 72, color: "#16a34a" },
  { name: "History",       pct: 64, color: "#f97316" },
  { name: "Language Arts", pct: 75, color: "#7c3aed" },
  { name: "Social Studies",pct: 68, color: "#ec4899" },
];

export const ACTIVITY: ActivityDay[] = [
  { day: "Mon", mins: 45 },
  { day: "Tue", mins: 60 },
  { day: "Wed", mins: 35 },
  { day: "Thu", mins: 85 },
  { day: "Fri", mins: 35 },
  { day: "Sat", mins: 70 },
  { day: "Sun", mins: 60 },
];

export const DAILY_REWARDS: DailyReward[] = [
  { day: 1, reward: "✅", label: "Claimed", claimed: true  },
  { day: 2, reward: "🪙", label: "100",     current: true  },
  { day: 3, reward: "💎", label: "5",       locked:  true  },
  { day: 4, reward: "⚡", label: "2",       locked:  true  },
  { day: 5, reward: "🧪", label: "1",       locked:  true  },
  { day: 6, reward: "📦", label: "1",       locked:  true  },
  { day: 7, reward: "💎", label: "25",      locked:  true  },
];
