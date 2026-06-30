import type { FilledSlots, SentencePattern } from "../data/types";
import { PATTERNS } from "../data/patterns";

export type ValidationResult = "correct" | "incorrect" | "incomplete";

const SLOT_TYPES: Record<string, string[]> = {
  subject: ["noun_phrase"],
  verb:    ["verb"],
  object:  ["noun_phrase"],
  detail:  ["adverb"],
  place:   ["place_phrase"],
};

export function validateSentence(
  patternId: string,
  filled: FilledSlots
): ValidationResult {
  const pattern: SentencePattern | undefined = PATTERNS.find(
    (p) => p.id === patternId
  );
  const slots = pattern?.slots ?? [];

  let allFilled = true;
  let allCorrect = true;

  for (const slot of slots) {
    const word = filled[slot];
    if (!word) {
      allFilled = false;
      continue;
    }
    const allowed = SLOT_TYPES[slot] ?? [];
    if (!allowed.includes(word.type)) {
      allCorrect = false;
    }
  }

  if (!allFilled) return "incomplete";
  return allCorrect ? "correct" : "incorrect";
}
