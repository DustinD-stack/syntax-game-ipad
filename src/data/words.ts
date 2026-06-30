import type { Word } from "./types";

export const WORDS: Word[] = [
  { id: "scientist",   text: "The scientist",   type: "noun_phrase",  emoji: "🧑🏾‍🔬", category: "science"  },
  { id: "student",     text: "The student",     type: "noun_phrase",  emoji: "🧒🏾",    category: "general"  },
  { id: "explorer",    text: "The explorer",    type: "noun_phrase",  emoji: "🧒🏿",    category: "story"    },
  { id: "inventor",    text: "The inventor",    type: "noun_phrase",  emoji: "💡",       category: "science"  },
  { id: "writer",      text: "The writer",      type: "noun_phrase",  emoji: "✍🏾",     category: "language" },
  { id: "observes",    text: "observes",        type: "verb",         emoji: "🔍",       category: "science"  },
  { id: "discovers",   text: "discovers",       type: "verb",         emoji: "🗺️",      category: "story"    },
  { id: "measures",    text: "measures",        type: "verb",         emoji: "📏",       category: "math"     },
  { id: "writes",      text: "writes",          type: "verb",         emoji: "📝",       category: "language" },
  { id: "builds",      text: "builds",          type: "verb",         emoji: "🔧",       category: "science"  },
  { id: "plant",       text: "the plant",       type: "noun_phrase",  emoji: "🌱",       category: "science"  },
  { id: "map",         text: "the map",         type: "noun_phrase",  emoji: "🗺️",      category: "story"    },
  { id: "treasure",    text: "the treasure",    type: "noun_phrase",  emoji: "💎",       category: "story"    },
  { id: "equation",    text: "the equation",    type: "noun_phrase",  emoji: "➕",       category: "math"     },
  { id: "story",       text: "the story",       type: "noun_phrase",  emoji: "📚",       category: "language" },
  { id: "carefully",   text: "carefully",       type: "adverb",       emoji: "🐢",       category: "detail"   },
  { id: "quickly",     text: "quickly",         type: "adverb",       emoji: "⚡",       category: "detail"   },
  { id: "quietly",     text: "quietly",         type: "adverb",       emoji: "🤫",       category: "detail"   },
  { id: "bravely",     text: "bravely",         type: "adverb",       emoji: "🦁",       category: "detail"   },
  { id: "inthelab",    text: "in the lab",      type: "place_phrase", emoji: "🧪",       category: "science"  },
  { id: "atschool",    text: "at school",       type: "place_phrase", emoji: "🏫",       category: "general"  },
  { id: "inforest",    text: "in the forest",   type: "place_phrase", emoji: "🌲",       category: "story"    },
  { id: "today",       text: "today",           type: "place_phrase", emoji: "📅",       category: "time"     },
];

export const LAB_WORDS = [
  { id: "the",       text: "The",       color: "#7c3aed" },
  { id: "sci2",      text: "scientist", color: "#1e6ef5" },
  { id: "was",       text: "was",       color: "#16a34a" },
  { id: "excited",   text: "excited",   color: "#f97316" },
  { id: "about",     text: "about",     color: "#ec4899" },
  { id: "the2",      text: "the",       color: "#0d9488" },
  { id: "discovery", text: "discovery", color: "#fbbf24" },
];

export const STORY_BANK: Word[] = [
  { id: "alex",      text: "Alex",         type: "noun_phrase",  emoji: "🧒🏿" },
  { id: "disc",      text: "discovers",    type: "verb",         emoji: "🔍"   },
  { id: "themap",    text: "the map",      type: "noun_phrase",  emoji: "🗺️"  },
  { id: "carefully2",text: "carefully",    type: "adverb",       emoji: "🐢"   },
  { id: "inattic",   text: "in the attic", type: "place_phrase", emoji: "🏚️"  },
];
