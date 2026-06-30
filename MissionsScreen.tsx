import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { MISSIONS, DIFF_COLOR } from "../data/missions";
import type { Mission } from "../data/types";
import { px } from "../utils/scale";

interface Props {
  setScreen: (s: string) => void;
  s: number;
}

const SIDE_FILTERS: Array<[string, string, number, boolean?]> = [
  ["All",           "⭐", 36],
  ["Daily",         "📅",  1],
  ["Assignments",   "📋",  4],
  ["Language Arts", "💬", 16, true],
  ["Math",          "🔢",  8, true],
  ["Science",       "🧪",  6, true],
  ["Social Studies","🌍",  4, true],
  ["Mixed",         "🎲",  2, true],
];

export const MissionsScreen: React.FC<Props> = ({ setScreen, s }) => {
  const [selected, setSelected] = useState<Mission>(MISSIONS[0]);
  const [sideFilter, setSideFilter] = useState("All");

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Sidebar ── */}
      <div
        style={{
          width: px(s, 190),
          background: "#0a1628",
          borderRight: "2px solid #1e3a5f",
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
          padding: px(s, 9),
        }}
      >
        <div
          style={{
            fontSize: px(s, 14),
            fontWeight: 800,
            color: "#fff",
            marginBottom: px(s, 9),
          }}
        >
          🎯 Missions
        </div>

        {SIDE_FILTERS.map(([label, emoji, count, isSubject], i) => (
          <React.Fragment key={label}>
            {isSubject && i === 3 && (
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#475569",
                  fontWeight: 700,
                  padding: `${px(s, 7)} 0 ${px(s, 3)}`,
                  letterSpacing: 1,
                }}
              >
                SUBJECT AREAS
              </div>
            )}
            <div
              onClick={() => setSideFilter(label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: px(s, 6),
                padding: `${px(s, 6)} ${px(s, 8)}`,
                borderRadius: px(s, 8),
                cursor: "pointer",
                marginBottom: px(s, 2),
                background:
                  sideFilter === label ? "#1e3a8a" : "transparent",
                border:
                  sideFilter === label
                    ? "2px solid #1e6ef5"
                    : "2px solid transparent",
                color: sideFilter === label ? "#fbbf24" : "#94a3b8",
                fontWeight: sideFilter === label ? 700 : 400,
                fontSize: px(s, 11),
              }}
            >
              <span>{emoji}</span>
              <span style={{ flex: 1 }}>{label}</span>
              <span
                style={{
                  background: "#1e293b",
                  borderRadius: px(s, 7),
                  padding: `1px ${px(s, 5)}`,
                  fontSize: px(s, 9),
                  color: "#60a5fa",
                }}
              >
                {count}
              </span>
            </div>
          </React.Fragment>
        ))}

        <div
          style={{
            marginTop: px(s, 10),
            borderTop: "1px solid #1e3a5f",
            paddingTop: px(s, 9),
          }}
        >
          <div
            style={{
              fontSize: px(s, 9),
              color: "#475569",
              fontWeight: 700,
              marginBottom: px(s, 5),
              letterSpacing: 1,
            }}
          >
            DIFFICULTY
          </div>
          <div style={{ display: "flex", gap: px(s, 4), flexWrap: "wrap" }}>
            {Object.entries(DIFF_COLOR).map(([d, c]) => (
              <span
                key={d}
                style={{
                  background: `${c}33`,
                  color: c,
                  border: `1px solid ${c}`,
                  borderRadius: px(s, 5),
                  padding: `1px ${px(s, 7)}`,
                  fontSize: px(s, 9),
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission list ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#0d1829",
        }}
      >
        <div
          style={{
            padding: `${px(s, 10)} ${px(s, 13)}`,
            borderBottom: "2px solid #1e3a5f",
            flexShrink: 0,
          }}
        >
          <div
            style={{ fontSize: px(s, 16), fontWeight: 800, color: "#fff" }}
          >
            ALL MISSIONS
          </div>
        </div>

        <div
          style={{
            overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
            flex: 1,
            padding: px(s, 9),
            display: "flex",
            flexDirection: "column",
            gap: px(s, 7),
          }}
        >
          {MISSIONS.map((m) => (
            <div
              key={m.id}
              onClick={() => !m.locked && setSelected(m)}
              style={{
                background:
                  selected?.id === m.id ? "#1e3a8a" : "#162033",
                border:
                  selected?.id === m.id
                    ? "3px solid #fbbf24"
                    : "2px solid #1e3a5f",
                borderRadius: px(s, 11),
                padding: `${px(s, 10)} ${px(s, 12)}`,
                cursor: m.locked ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: px(s, 10),
                opacity: m.locked ? 0.6 : 1,
              }}
            >
              <div style={{ fontSize: px(s, 30), flexShrink: 0 }}>
                {m.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: px(s, 12),
                  }}
                >
                  {m.id}. {m.title}
                </div>
                <div style={{ fontSize: px(s, 10), color: "#94a3b8" }}>
                  {m.desc}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: px(s, 3),
                  alignItems: "flex-end",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    background: "#1e293b",
                    borderRadius: px(s, 5),
                    padding: `1px ${px(s, 6)}`,
                    fontSize: px(s, 9),
                    color: "#94a3b8",
                    fontWeight: 700,
                  }}
                >
                  {m.subject}
                </span>
                <span
                  style={{
                    background: `${DIFF_COLOR[m.diff]}22`,
                    color: DIFF_COLOR[m.diff],
                    borderRadius: px(s, 5),
                    padding: `1px ${px(s, 6)}`,
                    fontSize: px(s, 9),
                    fontWeight: 700,
                  }}
                >
                  {m.diff}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: px(s, 4),
                  minWidth: px(s, 52),
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    color: "#fbbf24",
                    fontWeight: 700,
                    fontSize: px(s, 12),
                  }}
                >
                  ⭐ {m.reward}
                </div>
                {m.locked ? (
                  <div
                    style={{
                      background: "#334155",
                      borderRadius: px(s, 6),
                      padding: `${px(s, 4)} ${px(s, 9)}`,
                      fontSize: px(s, 11),
                      color: "#64748b",
                    }}
                  >
                    🔒
                  </div>
                ) : (
                  <Btn
                    onClick={() => setSelected(m)}
                    color="#1e6ef5"
                    s={s}
                  >
                    PLAY
                  </Btn>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Preview panel ── */}
      {selected && (
        <div
          style={{
            width: px(s, 245),
            background: "#0a1628",
            borderLeft: "2px solid #1e3a5f",
            overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
            flexShrink: 0,
          }}
        >
          <div
            style={{
              background: "#1e6ef5",
              padding: `${px(s, 10)} ${px(s, 13)}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontWeight: 800, color: "#fff", fontSize: px(s, 12) }}
            >
              {selected.id}. {selected.title}
            </span>
          </div>

          <div
            style={{
              background: "#0d2040",
              height: px(s, 110),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: px(s, 64),
            }}
          >
            {selected.icon}
          </div>

          <div
            style={{
              padding: px(s, 10),
              display: "flex",
              flexDirection: "column",
              gap: px(s, 8),
            }}
          >
            <Card>
              <div style={{ padding: px(s, 9) }}>
                <div
                  style={{
                    fontSize: px(s, 9),
                    color: "#60a5fa",
                    fontWeight: 700,
                    marginBottom: px(s, 4),
                  }}
                >
                  MISSION GOAL
                </div>
                <p style={{ fontSize: px(s, 11), color: "#e2e8f0" }}>
                  {selected.desc}
                </p>
              </div>
            </Card>

            <Card>
              <div style={{ padding: px(s, 9) }}>
                <div
                  style={{
                    fontSize: px(s, 9),
                    color: "#60a5fa",
                    fontWeight: 700,
                    marginBottom: px(s, 6),
                  }}
                >
                  YOU WILL PRACTICE
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: px(s, 5) }}
                >
                  {selected.practice.map((p) => (
                    <span
                      key={p}
                      style={{
                        background: "#1e3a5f",
                        borderRadius: px(s, 6),
                        padding: `${px(s, 2)} ${px(s, 8)}`,
                        fontSize: px(s, 9),
                        color: "#94a3b8",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: `${DIFF_COLOR[selected.diff]}22`,
                  color: DIFF_COLOR[selected.diff],
                  borderRadius: px(s, 6),
                  padding: `${px(s, 2)} ${px(s, 9)}`,
                  fontWeight: 700,
                  fontSize: px(s, 10),
                }}
              >
                {selected.diff}
              </span>
              <span
                style={{
                  color: "#fbbf24",
                  fontWeight: 700,
                  fontSize: px(s, 12),
                }}
              >
                ⭐ {selected.reward}
              </span>
            </div>

            <Btn
              onClick={() => setScreen("build")}
              color="#16a34a"
              s={s}
              style={{ width: "100%", textAlign: "center", fontSize: px(s, 13) }}
            >
              🎮 PLAY MISSION
            </Btn>
          </div>
        </div>
      )}
    </div>
  );
};
