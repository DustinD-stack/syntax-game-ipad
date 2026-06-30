import React from "react";
import { px } from "../utils/scale";

type Screen = string;

interface Props {
  screen: Screen;
  setScreen: (s: Screen) => void;
  s: number;
}

const TABS: Array<[string, string, string]> = [
  ["map",      "Map",         "🗺️"],
  ["missions", "Missions",    "🎯"],
  ["lab",      "Lab",         "🧪"],
  ["build",    "Build",       "🧩"],
  ["story",    "Story",       "📖"],
  ["wordlab",  "Word Lab",    "🔤"],
  ["progress", "My Progress", "📊"],
];

export const BottomNav: React.FC<Props> = ({ screen, setScreen, s }) => {
  // Bottom nav: min 60px so thumb targets are always comfortable on iPad
  const navH = Math.max(Math.round(60 * s), 60);

  return (
    <div
      data-ui
      style={{
        background: "#070e1a",
        borderTop: "2px solid #1e3a5f",
        display: "flex",
        height: navH + "px",
        flexShrink: 0,
      }}
    >
      {TABS.map(([id, label, icon]) => {
        const active = screen === id;
        return (
          <button
            key={id}
            onClick={() => setScreen(id)}
            style={{
              flex: 1,
              background: active
                ? "linear-gradient(180deg,#1e3a8a,#1e40af)"
                : "transparent",
              border: "none",
              borderTop: active ? "3px solid #60a5fa" : "3px solid transparent",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              color: active ? "#fff" : "#475569",
              transition: "all 0.18s",
              fontFamily: "inherit",
              minHeight: "44px",
              touchAction: "manipulation",
              padding: "4px 2px",
            }}
          >
            <span style={{ fontSize: Math.max(Math.round(20 * s), 20) + "px", lineHeight: 1 }}>
              {icon}
            </span>
            <span
              style={{
                fontSize: Math.max(Math.round(9 * s), 9) + "px",
                fontWeight: active ? 700 : 400,
                lineHeight: 1.2,
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
