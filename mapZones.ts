import type { MapZone } from "./types";

export const MAP_ZONES: MapZone[] = [
  { id: "noun",    label: "1. NOUN NEIGHBORHOOD",        stars: "12/12", emoji: "🏠", color: "#1e6ef5", x: 13, y: 22 },
  { id: "verb",    label: "2. VERB FACTORY",             stars: "10/12", emoji: "⚙️", color: "#16a34a", x: 39, y: 17 },
  { id: "adj",     label: "3. ADJECTIVE ART STUDIO",     stars: "8/12",  emoji: "🎨", color: "#7c3aed", x: 65, y: 22 },
  { id: "prefix",  label: "4. PREFIX & SUFFIX WORKSHOP", stars: "6/12",  emoji: "🧩", color: "#f97316", x: 13, y: 55 },
  { id: "subject", label: "5. SUBJECT KINGDOMS",         stars: "9/12",  emoji: "👑", color: "#0d9488", x: 41, y: 57 },
  { id: "wordlab", label: "6. WORD LAB",                 stars: "4/12",  emoji: "🧪", color: "#ec4899", x: 70, y: 55 },
  { id: "story",   label: "7. STORY MOUNTAIN",           stars: "0/12",  emoji: "⛰️", color: "#6b7280", x: 88, y: 22, locked: true },
];
