import type { SentencePattern } from "./types";

export const PATTERNS: SentencePattern[] = [
  {
    id: "sv",
    label: "Subject + Verb",
    slots: ["subject", "verb"],
    ex: "The scientist observes.",
  },
  {
    id: "svo",
    label: "Subject + Verb + Object",
    slots: ["subject", "verb", "object"],
    ex: "The scientist observes the plant.",
  },
  {
    id: "svod",
    label: "Subject + Verb + Object + Detail",
    slots: ["subject", "verb", "object", "detail"],
    ex: "The scientist observes the plant carefully.",
  },
  {
    id: "svodp",
    label: "Full Sentence",
    slots: ["subject", "verb", "object", "detail", "place"],
    ex: "The scientist observes the plant carefully in the lab.",
  },
];

export const SLOT_CFG: Record<string, { bg: string; label: string }> = {
  subject: { bg: "#1e6ef5", label: "SUBJECT"    },
  verb:    { bg: "#16a34a", label: "VERB"        },
  object:  { bg: "#f97316", label: "OBJECT"      },
  detail:  { bg: "#7c3aed", label: "DETAIL"      },
  place:   { bg: "#ef4444", label: "PLACE / TIME" },
};

export const SLOT_TYPES: Record<string, string[]> = {
  subject: ["noun_phrase"],
  verb:    ["verb"],
  object:  ["noun_phrase"],
  detail:  ["adverb"],
  place:   ["place_phrase"],
};
