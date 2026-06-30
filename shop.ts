import type { ShopItem } from "./types";

export const SHOP_ITEMS: Record<string, ShopItem[]> = {
  characters: [
    { id: "jada",   name: "Jada",        emoji: "👧🏾", price: 200, owned: false },
    { id: "zion",   name: "Zion",        emoji: "👦🏿", price: 200, owned: false },
    { id: "byte",   name: "Byte",        emoji: "🤖",  price: 300, owned: false },
  ],
  themes: [
    { id: "ocean",  name: "Ocean",       emoji: "🌊",  price: 150, owned: false },
    { id: "space",  name: "Space",       emoji: "🚀",  price: 150, owned: false },
    { id: "forest", name: "Forest",      emoji: "🌲",  price: 100, owned: false },
  ],
  boosters: [
    { id: "hint",   name: "Double Hints",emoji: "💡",  price: 50,  owned: false },
    { id: "xp2x",   name: "2x XP Boost", emoji: "⚡",  price: 80,  owned: false },
    { id: "star2x", name: "Star Rush",   emoji: "⭐",  price: 60,  owned: false },
  ],
  pets: [
    { id: "owl",    name: "Prof. Hoot",  emoji: "🦉",  price: 500, owned: true  },
    { id: "cat",    name: "Grammar Cat", emoji: "🐱",  price: 400, owned: false },
    { id: "dragon", name: "Word Dragon", emoji: "🐉",  price: 600, owned: false },
  ],
};

export const SHOP_TABS: Array<[string, string, string]> = [
  ["characters", "Characters", "👦🏾"],
  ["pets",       "Pets",       "🦉" ],
  ["themes",     "Themes",     "🎨" ],
  ["boosters",   "Boosters",   "⚡" ],
];

export const BUNDLES = [
  { name: "Starter Pack",   desc: "500 stars + 3 boosters",                   emoji: "🚀", price: "Free",    color: "#16a34a" },
  { name: "Science Bundle", desc: "Science theme + Scientist character + 2 pets", emoji: "🧪", price: "500 ⭐", color: "#1e6ef5" },
];
