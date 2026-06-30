import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { Owl } from "../components/Owl";
import {
  ACHIEVEMENTS, SKILL_MASTERY, SUBJECT_PROGRESS, ACTIVITY,
} from "../data/rewards";
import { PLAYER } from "../data/player";
import { px } from "../utils/scale";

interface Props { s: number }

const MENU_ITEMS = [
  ["Overview",       "📊"],
  ["Skills",         "🧠"],
  ["Subjects",       "📚"],
  ["Word Lab",       "🔬"],
  ["Story Progress", "📖"],
  ["Achievements",   "🏆"],
  ["Time & Streaks", "🔥"],
  ["Reports",        "📋"],
] as const;

export const ProgressScreen: React.FC<Props> = ({ s }) => {
  const [section, setSection] = useState("Overview");
  const maxA = Math.max(...ACTIVITY.map((d) => d.mins));

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Menu ── */}
      <div
        style={{
          width: px(s, 180),
          background: "#0a1628",
          borderRight: "2px solid #1e3a5f",
          padding: px(s, 9),
          display: "flex",
          flexDirection: "column",
          gap: px(s, 5),
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: px(s, 10),
            fontWeight: 800,
            color: "#94a3b8",
            letterSpacing: 1,
            marginBottom: px(s, 4),
          }}
        >
          PROGRESS MENU
        </div>

        {MENU_ITEMS.map(([label, icon]) => (
          <div
            key={label}
            onClick={() => setSection(label)}
            style={{
              padding: `${px(s, 7)} ${px(s, 9)}`,
              borderRadius: px(s, 8),
              cursor: "pointer",
              background: section === label ? "#1e6ef5" : "#162033",
              color: section === label ? "#fff" : "#94a3b8",
              fontWeight: section === label ? 700 : 400,
              fontSize: px(s, 11),
              border:
                section === label
                  ? "2px solid #60a5fa"
                  : "2px solid #1e3a5f",
              display: "flex",
              alignItems: "center",
              gap: px(s, 6),
            }}
          >
            {icon} {label}
          </div>
        ))}

        <div style={{ marginTop: "auto", paddingTop: px(s, 9) }}>
          <Owl
            size={44}
            msg="Great job, Malik! You are building amazing sentences!"
            s={s}
          />
          <div style={{ marginTop: px(s, 7) }}>
            <div
              style={{
                fontSize: px(s, 8),
                color: "#64748b",
                marginBottom: px(s, 3),
              }}
            >
              Next Mascot Level
            </div>
            <ProgressBar pct={75} color="#fbbf24" s={s} />
            <div
              style={{
                fontSize: px(s, 8),
                color: "#64748b",
                marginTop: px(s, 2),
              }}
            >
              75 / 100
            </div>
          </div>
        </div>
      </div>

      {/* ── Center ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          padding: px(s, 13),
          background: "#0d1829",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: px(s, 12),
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: px(s, 8),
              }}
            >
              <span style={{ fontSize: px(s, 20) }}>🎯</span>
              <span
                style={{
                  fontSize: px(s, 17),
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                MY PROGRESS OVERVIEW
              </span>
            </div>
            <p style={{ fontSize: px(s, 11), color: "#94a3b8" }}>
              Keep building! You are becoming a Syntax Master!
            </p>
          </div>
          <Btn color="#1e3a5f" s={s}>
            📅 This Week
          </Btn>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: px(s, 9),
            marginBottom: px(s, 12),
          }}
        >
          {(
            [
              ["📖", "124",    "Sentences Built",    "#1e6ef5", "18 this week"   ],
              ["✅", "96%",    "Accuracy Rate",      "#16a34a", "8% this week"   ],
              ["🏆", "28",     "Missions Completed", "#f97316", "6 this week"    ],
              ["⏱️","3h 45m", "Time Learning",      "#fbbf24", "1h 15m this week"],
            ] as Array<[string, string, string, string, string]>
          ).map(([icon, val, label, color, sub]) => (
            <Card key={label}>
              <div style={{ padding: px(s, 11), textAlign: "center" }}>
                <div style={{ fontSize: px(s, 20), marginBottom: px(s, 3) }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: px(s, 19),
                    fontWeight: 800,
                    color,
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                  {label}
                </div>
                <div
                  style={{
                    fontSize: px(s, 8),
                    color: "#4ade80",
                    marginTop: px(s, 2),
                  }}
                >
                  ▲ {sub}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skill + Subject */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: px(s, 10),
            marginBottom: px(s, 12),
          }}
        >
          <Card>
            <CardHead color="#1e6ef5" icon="🧠" s={s}>
              SKILL MASTERY
            </CardHead>
            <div
              style={{
                padding: px(s, 10),
                display: "flex",
                flexDirection: "column",
                gap: px(s, 8),
              }}
            >
              {SKILL_MASTERY.map((sk) => (
                <div key={sk.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: px(s, 3),
                    }}
                  >
                    <span
                      style={{
                        fontSize: px(s, 11),
                        color: "#e2e8f0",
                        fontWeight: 600,
                      }}
                    >
                      {sk.name}
                    </span>
                    <div
                      style={{ display: "flex", gap: px(s, 5) }}
                    >
                      <span
                        style={{ fontSize: px(s, 8), color: "#64748b" }}
                      >
                        Lv {sk.level}
                      </span>
                      <span
                        style={{
                          fontSize: px(s, 11),
                          fontWeight: 700,
                          color: sk.color,
                        }}
                      >
                        {sk.pct}%
                      </span>
                    </div>
                  </div>
                  <ProgressBar pct={sk.pct} color={sk.color} s={s} />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHead color="#7c3aed" icon="📚" s={s}>
              SUBJECT PROGRESS
            </CardHead>
            <div style={{ padding: px(s, 10) }}>
              {/* Simple donut via SVG */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: px(s, 8),
                }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="38"
                    fill="none" stroke="#1e293b" strokeWidth="15"
                  />
                  {(() => {
                    let offset = 0;
                    const circ = 2 * Math.PI * 38;
                    return SUBJECT_PROGRESS.map((sp) => {
                      const dash = (sp.pct / 100) * circ * 0.86;
                      const el = (
                        <circle
                          key={sp.name}
                          cx="50" cy="50" r="38"
                          fill="none"
                          stroke={sp.color}
                          strokeWidth="13"
                          strokeDasharray={`${dash} ${circ - dash}`}
                          strokeDashoffset={-offset}
                          strokeLinecap="round"
                          style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50px 50px",
                          }}
                        />
                      );
                      offset += dash + 3;
                      return el;
                    });
                  })()}
                  <text
                    x="50" y="46" textAnchor="middle"
                    fill="#fff" fontSize="13" fontWeight="bold"
                  >
                    72%
                  </text>
                  <text
                    x="50" y="58" textAnchor="middle"
                    fill="#94a3b8" fontSize="7"
                  >
                    Average
                  </text>
                </svg>
              </div>

              {SUBJECT_PROGRESS.map((sp) => (
                <div
                  key={sp.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: px(s, 5),
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: px(s, 5) }}
                  >
                    <div
                      style={{
                        width: px(s, 7),
                        height: px(s, 7),
                        borderRadius: "50%",
                        background: sp.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: px(s, 10), color: "#e2e8f0" }}>
                      {sp.name}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: px(s, 5),
                      flex: 1,
                      marginLeft: px(s, 6),
                    }}
                  >
                    <ProgressBar pct={sp.pct} color={sp.color} h={5} s={s} />
                    <span
                      style={{
                        fontSize: px(s, 9),
                        color: sp.color,
                        fontWeight: 700,
                        minWidth: px(s, 28),
                        textAlign: "right",
                      }}
                    >
                      {sp.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Activity chart */}
        <Card>
          <CardHead color="#0d9488" icon="📈" s={s}>
            LEARNING ACTIVITY
          </CardHead>
          <div
            style={{
              padding: px(s, 13),
              display: "flex",
              gap: px(s, 13),
              alignItems: "flex-end",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: px(s, 3),
                  height: px(s, 75),
                  marginBottom: px(s, 5),
                }}
              >
                {ACTIVITY.map((d) => (
                  <div
                    key={d.day}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: px(s, 2),
                    }}
                  >
                    <span style={{ fontSize: px(s, 8), color: "#94a3b8" }}>
                      {d.mins}m
                    </span>
                    <div
                      style={{
                        width: "60%",
                        background: "#1e6ef5",
                        borderRadius: px(s, 3),
                        minHeight: px(s, 4),
                        height: `${(d.mins / maxA) * 64}px`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                {ACTIVITY.map((d) => (
                  <div
                    key={d.day}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      fontSize: px(s, 8),
                      color: "#64748b",
                    }}
                  >
                    {d.day}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                width: px(s, 125),
                background: "#162033",
                border: "2px solid #1e3a5f",
                borderRadius: px(s, 10),
                padding: px(s, 10),
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#94a3b8",
                  marginBottom: px(s, 4),
                }}
              >
                Total This Week
              </div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: px(s, 12),
                  marginBottom: px(s, 3),
                }}
              >
                ⏱️ 3h 45m
              </div>
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#94a3b8",
                  marginBottom: px(s, 7),
                }}
              >
                🎯 Daily Goal: 60 min
              </div>
              <div
                style={{
                  background: "#052e16",
                  border: "1px solid #16a34a",
                  borderRadius: px(s, 6),
                  padding: `${px(s, 3)} ${px(s, 7)}`,
                  fontSize: px(s, 9),
                  color: "#4ade80",
                  textAlign: "center",
                }}
              >
                ✅ Goal Achieved!
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Right sidebar ── */}
      <div
        style={{
          width: px(s, 205),
          background: "#0a1628",
          borderLeft: "2px solid #1e3a5f",
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
          padding: px(s, 9),
          display: "flex",
          flexDirection: "column",
          gap: px(s, 9),
        }}
      >
        <Card>
          <CardHead color="#7c3aed" icon="🏆" s={s}>
            RECENT ACHIEVEMENTS
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  gap: px(s, 7),
                  alignItems: "center",
                  borderBottom: "1px solid #1e3a5f",
                  paddingBottom: px(s, 7),
                  marginBottom: px(s, 7),
                }}
              >
                <div style={{ fontSize: px(s, 24), flexShrink: 0 }}>
                  {a.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: px(s, 10),
                      fontWeight: 700,
                      color: "#e2e8f0",
                    }}
                  >
                    {a.title}
                  </div>
                  <div style={{ fontSize: px(s, 8), color: "#64748b" }}>
                    {a.desc}
                  </div>
                  <div style={{ fontSize: px(s, 8), color: "#64748b" }}>
                    {a.date}
                  </div>
                </div>
                <span style={{ color: "#4ade80", fontSize: px(s, 14) }}>
                  ✅
                </span>
              </div>
            ))}
            <Btn
              color="#7c3aed"
              s={s}
              style={{ width: "100%", textAlign: "center" }}
            >
              🏆 Show All
            </Btn>
          </div>
        </Card>

        <Card>
          <CardHead color="#f97316" icon="🔥" s={s}>
            STREAKS &amp; RECORDS
          </CardHead>
          <div
            style={{
              padding: px(s, 9),
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: px(s, 7),
            }}
          >
            {(
              [
                ["🔥", "7",       "Day Streak",         "#f97316"],
                ["⭐", "42",      "Best Streak",        "#fbbf24"],
                ["⏱️","45 min",  "Longest Session",    "#60a5fa"],
                ["🎯", "98%",     "Best Accuracy",      "#4ade80"],
                ["✅", "32",      "Most Sent./Day",     "#16a34a"],
                ["💎", "156",     "Words Learned",      "#c084fc"],
              ] as Array<[string, string, string, string]>
            ).map(([icon, val, label, color]) => (
              <div
                key={label}
                style={{
                  background: "#162033",
                  border: "2px solid #1e3a5f",
                  borderRadius: px(s, 8),
                  padding: px(s, 7),
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: px(s, 17) }}>{icon}</div>
                <div
                  style={{
                    fontSize: px(s, 13),
                    fontWeight: 800,
                    color,
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: px(s, 7), color: "#64748b" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
