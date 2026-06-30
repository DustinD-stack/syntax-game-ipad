import React from "react";
import { Logo } from "./Logo";
import { ProgressBar } from "./ProgressBar";
import { PLAYER } from "../data/player";
import { px } from "../utils/scale";

type Screen = string;
interface Props { screen: Screen; setScreen: (s: Screen) => void; s: number; }

export const TopBar: React.FC<Props> = ({ screen, setScreen, s }) => {
  const h = Math.max(Math.round(60 * s), 60);

  return (
    <div
      data-ui
      style={{
        background: "linear-gradient(180deg,#0d1525,#0f1b2d)",
        borderBottom: "2px solid #1e3a5f",
        height: h + "px",
        padding: `0 ${px(s, 12)}`,
        display: "flex", alignItems: "center", gap: px(s, 10),
        flexShrink: 0, zIndex: 20,
      }}
    >
      <Logo s={s} />

      {/* Player chip */}
      <div
        onClick={() => setScreen("progress")}
        style={{
          display: "flex", alignItems: "center", gap: px(s, 8),
          cursor: "pointer", background: "#162033",
          border: "2px solid #1e3a5f", borderRadius: px(s, 12),
          padding: `${px(s, 5)} ${px(s, 10)}`, flexShrink: 0,
          minHeight: "44px", touchAction: "manipulation",
        }}
      >
        <div style={{
          width: px(s, 36), height: px(s, 36), borderRadius: "50%",
          background: "linear-gradient(145deg,#f97316,#1e6ef5)",
          border: "3px solid #fbbf24", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: px(s, 21),
        }}>
          {PLAYER.avatar}
        </div>
        <div>
          <div style={{ fontSize: px(s, 13), fontWeight: 700, color: "#fff" }}>{PLAYER.name}</div>
          <div style={{ fontSize: px(s, 10), color: "#94a3b8" }}>Level {PLAYER.level}</div>
          <div style={{ width: px(s, 70) }}>
            <ProgressBar pct={(PLAYER.xp / PLAYER.xpMax) * 100} color="#60a5fa" h={3} s={s} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* Stat chips */}
      {(
        [
          ["⭐", "1,250", "#fbbf24", "#2a1f00"],
          ["💎", "38",    "#c084fc", "#1e0a3c"],
          ["⚡", "18/20", "#60a5fa", "#0c1f3c"],
        ] as Array<[string, string, string, string]>
      ).map(([icon, val, color, bg]) => (
        <div key={icon} style={{
          background: bg, border: `2px solid ${color}33`,
          borderRadius: px(s, 18), padding: `${px(s, 5)} ${px(s, 10)}`,
          display: "flex", alignItems: "center", gap: px(s, 4), flexShrink: 0,
          minHeight: "36px",
        }}>
          <span style={{ color, fontWeight: 700, fontSize: px(s, 13) }}>{icon} {val}</span>
        </div>
      ))}

      <div style={{ width: 1, height: px(s, 32), background: "#1e3a5f", margin: `0 ${px(s, 3)}` }} />

      {/* Nav icons */}
      {(
        [
          ["rewards",  "🎁", "Rewards" ],
          ["shop",     "🛒", "Shop"    ],
          ["settings", "⚙️", "Settings"],
        ] as Array<[string, string, string]>
      ).map(([id, icon, label]) => (
        <div
          key={id}
          onClick={() => setScreen(id)}
          style={{
            cursor: "pointer", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 2,
            color: screen === id ? "#fbbf24" : "#94a3b8",
            fontSize: px(s, 10), padding: `${px(s, 4)} ${px(s, 8)}`,
            borderRadius: px(s, 8), background: screen === id ? "#fbbf2411" : "transparent",
            flexShrink: 0, minWidth: "44px", minHeight: "44px",
            justifyContent: "center", touchAction: "manipulation",
          }}
        >
          <span style={{ fontSize: px(s, 22) }}>{icon}</span>
          {label}
        </div>
      ))}
    </div>
  );
};
