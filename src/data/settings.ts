import type { SettingsSection } from "./types";

export const SETTINGS_SECTIONS: SettingsSection[] = [
  { id: "general",       label: "General",           emoji: "⚙️" },
  { id: "audio",         label: "Audio",             emoji: "🔊" },
  { id: "visuals",       label: "Visuals",           emoji: "🖥️" },
  { id: "learning",      label: "Learning",          emoji: "🎓" },
  { id: "notifications", label: "Notifications",     emoji: "🔔" },
  { id: "profile",       label: "Profile & Account", emoji: "👤" },
  { id: "privacy",       label: "Privacy & Safety",  emoji: "🛡️" },
  { id: "data",          label: "Data & Storage",    emoji: "💾" },
  { id: "help",          label: "Help & Support",    emoji: "❓" },
  { id: "about",         label: "About Syntax",      emoji: "ℹ️" },
];

export const GAMEPLAY_OPTIONS = [
  { id: "hints",          icon: "💡", label: "Hints",           desc: "Show hints during missions and challenges." },
  { id: "animations",     icon: "✨", label: "Animations",      desc: "Enable animations and visual effects."      },
  { id: "sfx",            icon: "🎵", label: "Sound Effects",   desc: "Play sound effects in the game."            },
  { id: "autosave",       icon: "☁️", label: "Auto Save",       desc: "Automatically save your progress."          },
  { id: "confirmActions", icon: "✅", label: "Confirm Actions", desc: "Ask for confirmation before important actions." },
];

export const AUDIO_SLIDERS = [
  { label: "Master Volume", value: 80, color: "#4ade80" },
  { label: "Music Volume",  value: 60, color: "#60a5fa" },
  { label: "SFX Volume",    value: 80, color: "#c084fc" },
];

export const DISPLAY_TOGGLES: Array<[string, string]> = [
  ["colorblind",   "👁️ Colorblind Mode" ],
  ["highContrast", "◑ High Contrast"    ],
];
