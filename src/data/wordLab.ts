import type { WordPart, WordFamily, NotebookWord, StoryChapter } from "./types";

export const PREFIXES: WordPart[] = [
  { id: "un",    text: "un-",    meaning: "not"      },
  { id: "re",    text: "re-",    meaning: "again"    },
  { id: "in",    text: "in-",    meaning: "in, not"  },
  { id: "dis",   text: "dis-",   meaning: "not"      },
  { id: "pre",   text: "pre-",   meaning: "before"   },
  { id: "mis",   text: "mis-",   meaning: "wrong"    },
  { id: "over",  text: "over-",  meaning: "too much" },
  { id: "under", text: "under-", meaning: "below"    },
];

export const ROOTS: WordPart[] = [
  { id: "help",   text: "help",   meaning: "to help"  },
  { id: "play",   text: "play",   meaning: "to play"  },
  { id: "care",   text: "care",   meaning: "to care"  },
  { id: "act",    text: "act",    meaning: "to do"    },
  { id: "use",    text: "use",    meaning: "to use"   },
  { id: "form",   text: "form",   meaning: "to form"  },
  { id: "struct", text: "struct", meaning: "to build" },
  { id: "move",   text: "move",   meaning: "to move"  },
];

export const SUFFIXES: WordPart[] = [
  { id: "ful",  text: "ful",  meaning: "full of"           },
  { id: "less", text: "less", meaning: "without"           },
  { id: "ing",  text: "ing",  meaning: "doing"             },
  { id: "ed",   text: "ed",   meaning: "past tense"        },
  { id: "er",   text: "er",   meaning: "one who"           },
  { id: "able", text: "able", meaning: "able to be"        },
  { id: "ion",  text: "ion",  meaning: "action or process" },
  { id: "ment", text: "ment", meaning: "result"            },
];

export const WORD_FAMILIES: WordFamily[] = [
  { id: "act",    label: "act",    emoji: "🎯", count: 12 },
  { id: "play",   label: "play",   emoji: "🏃", count: 10 },
  { id: "help",   label: "help",   emoji: "🤝", count: 8  },
  { id: "move",   label: "move",   emoji: "➡️", count: 9  },
  { id: "form",   label: "form",   emoji: "📋", count: 6  },
  { id: "struct", label: "struct", emoji: "🏗️", count: 9  },
];

export const NOTEBOOK_WORDS: NotebookWord[] = [
  { word: "unhappy",   meaning: "not happy"                  },
  { word: "replay",    meaning: "play again"                 },
  { word: "careful",   meaning: "full of care"               },
  { word: "unhelpful", meaning: "not helpful"                },
  { word: "movement",  meaning: "an act of moving"           },
  { word: "structure", meaning: "the way something is built" },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  { id: 1, title: "The Lost Map",        stars: 3, max: 5, current: true  },
  { id: 2, title: "Into the Cave",       stars: 0, max: 5, locked: true   },
  { id: 3, title: "The Hidden City",     stars: 0, max: 5, locked: true   },
  { id: 4, title: "The Ancient Library", stars: 0, max: 5, locked: true   },
  { id: 5, title: "The Final Choice",    stars: 0, max: 5, locked: true   },
];

export const MADE_WORDS = [
  { word: "react",    def: "to act again"                },
  { word: "reaction", def: "the action of doing again"   },
  { word: "reacted",  def: "acted again"                 },
  { word: "reactor",  def: "one who reacts"              },
  { word: "active",   def: "tending to act"              },
  { word: "activate", def: "to make active"              },
];
