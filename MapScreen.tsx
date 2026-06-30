import React from "react";
import { Card, CardHead } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { MAP_ZONES } from "../data/mapZones";
import { px } from "../utils/scale";

interface Props {
  setScreen: (s: string) => void;
  s: number;
}

export const MapScreen: React.FC<Props> = ({ setScreen, s }) => (
  <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
    {/* ── Sidebar ── */}
    <div
      style={{
        width: px(s, 190),
        background: "#0a1628",
        borderRight: "2px solid #1e3a5f",
        padding: px(s, 9),
        display: "flex",
        flexDirection: "column",
        gap: px(s, 9),
        overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        flexShrink: 0,
      }}
    >
      <Card>
        <CardHead color="#1e6ef5" icon="🗺️" s={s}>
          WORLD MAP
        </CardHead>
        <div style={{ padding: px(s, 9), fontSize: px(s, 11), color: "#94a3b8" }}>
          Explore the world and complete missions to unlock new skills!
        </div>
      </Card>

      <Card>
        <div style={{ padding: px(s, 9) }}>
          <div
            style={{
              fontSize: px(s, 9),
              color: "#64748b",
              fontWeight: 700,
              marginBottom: px(s, 5),
            }}
          >
            YOUR PROGRESS
          </div>
          <div
            style={{
              fontSize: px(s, 13),
              fontWeight: 700,
              color: "#fbbf24",
              marginBottom: px(s, 4),
            }}
          >
            ⭐ 18 / 60
          </div>
          <ProgressBar pct={30} color="#fbbf24" s={s} />
        </div>
      </Card>

      <Card>
        <div style={{ padding: px(s, 9) }}>
          <div
            style={{
              fontSize: px(s, 9),
              color: "#64748b",
              fontWeight: 700,
              marginBottom: px(s, 6),
            }}
          >
            MAP LEGEND
          </div>
          {(
            [
              ["⭐", "#fbbf24", "Completed" ],
              ["🔵", "#60a5fa", "In Progress"],
              ["🔒", "#64748b", "Locked"    ],
              ["💫", "#c084fc", "Bonus Area" ],
            ] as Array<[string, string, string]>
          ).map(([icon, color, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: px(s, 6),
                marginBottom: px(s, 4),
                fontSize: px(s, 11),
                color,
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardHead color="#f97316" icon="🎯" s={s}>
          DAILY CHALLENGE
        </CardHead>
        <div style={{ padding: px(s, 9) }}>
          <p
            style={{
              fontSize: px(s, 11),
              color: "#e2e8f0",
              marginBottom: px(s, 6),
            }}
          >
            Build 3 sentences using adjectives.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: px(s, 4),
            }}
          >
            <span style={{ fontSize: px(s, 10), color: "#94a3b8" }}>1/3</span>
            <span style={{ fontSize: px(s, 11), color: "#c084fc" }}>💎 10</span>
          </div>
          <ProgressBar pct={33} color="#f97316" s={s} />
        </div>
      </Card>
    </div>

    {/* ── Map canvas ── */}
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      {/* Ocean background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,#87ceeb 0%,#5ba3d0 30%,#1e6ef5 60%,#1a5cb0 100%)",
        }}
      />
      {/* Island */}
      <div
        style={{
          position: "absolute",
          inset: "5%",
          background:
            "radial-gradient(ellipse at 50% 60%,#3a8c2f,#2d6e22 40%,transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Zone nodes */}
      {MAP_ZONES.map((z) => (
        <div
          key={z.id}
          onClick={() => !z.locked && setScreen("missions")}
          style={{
            position: "absolute",
            left: `${z.x}%`,
            top: `${z.y}%`,
            transform: "translate(-50%,-50%)",
            cursor: z.locked ? "not-allowed" : "pointer",
            zIndex: 5,
          }}
        >
          <div
            style={{
              background: z.locked ? "#334155" : z.color,
              borderRadius: px(s, 11),
              padding: `${px(s, 5)} ${px(s, 10)}`,
              border: `3px solid ${z.locked ? "#475569" : "#fff"}`,
              boxShadow: z.locked ? "none" : `0 4px 14px ${z.color}66`,
              textAlign: "center",
              minWidth: px(s, 105),
            }}
          >
            <div
              style={{ fontSize: px(s, 9), fontWeight: 800, color: "#fff" }}
            >
              {z.locked ? "🔒 " : z.emoji + " "}
              {z.label}
            </div>
            <div
              style={{ fontSize: px(s, 10), color: "#fbbf24", fontWeight: 700 }}
            >
              ⭐ {z.stars}
            </div>
          </div>
        </div>
      ))}

      {/* Characters */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          top: "65%",
          fontSize: px(s, 42),
          filter: "drop-shadow(0 4px 8px #000)",
          userSelect: "none",
        }}
      >
        👦🏾
      </div>
      <div
        style={{
          position: "absolute",
          left: "54%",
          top: "70%",
          fontSize: px(s, 42),
          filter: "drop-shadow(0 4px 8px #000)",
          userSelect: "none",
        }}
      >
        👧🏾
      </div>

      {/* Bonus island label */}
      <div
        style={{
          position: "absolute",
          right: "2%",
          bottom: "8%",
          background: "#1e293b",
          border: "2px solid #475569",
          borderRadius: px(s, 9),
          padding: `${px(s, 6)} ${px(s, 10)}`,
          fontSize: px(s, 10),
          color: "#64748b",
          maxWidth: px(s, 140),
        }}
      >
        🔒 <strong>BONUS ISLAND</strong>
        <br />
        Complete more missions to unlock!
      </div>
    </div>
  </div>
);
