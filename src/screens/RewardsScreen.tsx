import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { ACHIEVEMENTS, DAILY_REWARDS } from "../data/rewards";
import { px } from "../utils/scale";

interface Props { s: number }

const REWARD_SECTIONS: Array<[string, string]> = [
  ["Daily Rewards",    "📅"],
  ["Login Calendar",   "🗓️"],
  ["Achievements",     "🏆"],
  ["Milestone Rewards","⭐"],
  ["Season Pass",      "💫"],
  ["Redeem Code",      "🎟️"],
];

const MILESTONES: Array<[number, string, string, boolean]> = [
  [100,  "🏅", "250 🪙",   true  ],
  [250,  "🪙", "250 🪙",   false ],
  [500,  "💎", "10 💎",    false ],
  [1000, "🦉", "Wise Owl", false ],
  [2000, "📦", "Mega Chest",false],
];

export const RewardsScreen: React.FC<Props> = ({ s }) => {
  const [claimed, setClaimed] = useState(false);
  const [section, setSection] = useState("Daily Rewards");

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Sidebar ── */}
      <div
        style={{
          width: px(s, 180),
          background: "#0a1628",
          borderRight: "2px solid #1e3a5f",
          padding: px(s, 9),
          display: "flex",
          flexDirection: "column",
          gap: px(s, 5),
          flexShrink: 0,
        }}
      >
        <CardHead color="#fbbf24" icon="🎁" s={s}>
          REWARDS
        </CardHead>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: px(s, 5),
            marginTop: px(s, 7),
          }}
        >
          {REWARD_SECTIONS.map(([label, icon]) => (
            <div
              key={label}
              onClick={() => setSection(label)}
              style={{
                padding: `${px(s, 7)} ${px(s, 9)}`,
                borderRadius: px(s, 8),
                cursor: "pointer",
                background: section === label ? "#fbbf2433" : "#162033",
                color: section === label ? "#fbbf24" : "#94a3b8",
                fontWeight: section === label ? 700 : 400,
                fontSize: px(s, 11),
                border:
                  section === label
                    ? "2px solid #fbbf24"
                    : "2px solid #1e3a5f",
                display: "flex",
                alignItems: "center",
                gap: px(s, 7),
              }}
            >
              {icon} {label}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "auto",
            background: "#162033",
            border: "2px solid #1e3a5f",
            borderRadius: px(s, 10),
            padding: px(s, 9),
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: px(s, 32) }}>📦</div>
          <p style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
            Keep playing to earn amazing rewards!
          </p>
        </div>
      </div>

      {/* ── Center ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          padding: px(s, 12),
          background: "#0d1829",
          display: "flex",
          flexDirection: "column",
          gap: px(s, 12),
        }}
      >
        {/* Daily rewards */}
        <Card glow="#c084fc">
          <div
            style={{
              background: "linear-gradient(90deg,#7c3aed,#c084fc)",
              padding: `${px(s, 13)} ${px(s, 17)}`,
              textAlign: "center",
            }}
          >
            <div
              style={{ fontSize: px(s, 18), fontWeight: 800, color: "#fff" }}
            >
              🎁 DAILY REWARDS
            </div>
            <div style={{ fontSize: px(s, 11), color: "#c4b5fd" }}>
              Come back every day to claim awesome rewards!
            </div>
          </div>
          <div style={{ padding: px(s, 13) }}>
            <div
              style={{
                display: "flex",
                gap: px(s, 7),
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {DAILY_REWARDS.map((d) => (
                <div
                  key={d.day}
                  style={{
                    background: d.claimed
                      ? "#052e16"
                      : d.current
                      ? "#fbbf2422"
                      : d.locked
                      ? "#0d1829"
                      : "#162033",
                    border: d.current
                      ? "3px solid #fbbf24"
                      : d.claimed
                      ? "2px solid #16a34a"
                      : "2px solid #1e3a5f",
                    borderRadius: px(s, 11),
                    padding: `${px(s, 11)} ${px(s, 9)}`,
                    minWidth: px(s, 74),
                    textAlign: "center",
                    opacity: d.locked ? 0.5 : 1,
                    boxShadow: d.current ? "0 0 14px #fbbf2444" : "none",
                    touchAction: "manipulation",
                  }}
                >
                  <div
                    style={{
                      fontSize: px(s, 9),
                      fontWeight: 700,
                      color: "#94a3b8",
                      marginBottom: px(s, 4),
                    }}
                  >
                    Day {d.day}
                  </div>
                  <div
                    style={{
                      fontSize: px(s, 28),
                      marginBottom: px(s, 4),
                    }}
                  >
                    {d.reward}
                  </div>
                  <div
                    style={{
                      fontSize: px(s, 11),
                      fontWeight: 700,
                      color: d.claimed ? "#4ade80" : "#fff",
                    }}
                  >
                    {d.label}
                  </div>
                  {d.claimed && (
                    <div
                      style={{
                        fontSize: px(s, 8),
                        color: "#4ade80",
                        marginTop: px(s, 3),
                      }}
                    >
                      Claimed
                    </div>
                  )}
                  {d.current && !claimed && (
                    <Btn
                      onClick={() => setClaimed(true)}
                      color="#16a34a"
                      s={s}
                      style={{
                        marginTop: px(s, 5),
                        width: "100%",
                        fontSize: px(s, 10),
                      }}
                    >
                      Claim
                    </Btn>
                  )}
                  {d.current && claimed && (
                    <div
                      style={{
                        fontSize: px(s, 8),
                        color: "#4ade80",
                        marginTop: px(s, 3),
                      }}
                    >
                      ✅ Claimed!
                    </div>
                  )}
                  {d.locked && (
                    <div
                      style={{
                        fontSize: px(s, 15),
                        color: "#475569",
                        marginTop: px(s, 2),
                      }}
                    >
                      🔒
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: px(s, 9),
                fontSize: px(s, 10),
                color: "#64748b",
              }}
            >
              <span>⏱️ Resets in 08:45:12</span>
              <span>Don't miss a day! 📅</span>
            </div>
          </div>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHead color="#fbbf24" icon="🏆" s={s}>
            MILESTONE REWARDS
          </CardHead>
          <div style={{ padding: px(s, 13) }}>
            <div
              style={{
                display: "flex",
                gap: px(s, 8),
                flexWrap: "wrap",
              }}
            >
              {MILESTONES.map(([n, icon, label, done]) => (
                <div
                  key={n}
                  style={{
                    background: done ? "#052e16" : "#162033",
                    border: `2px solid ${done ? "#16a34a" : "#1e3a5f"}`,
                    borderRadius: px(s, 11),
                    padding: `${px(s, 11)} ${px(s, 9)}`,
                    flex: 1,
                    minWidth: px(s, 88),
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{ fontSize: px(s, 9), color: "#94a3b8" }}
                  >
                    Sentences Built
                  </div>
                  <div
                    style={{
                      fontSize: px(s, 18),
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: px(s, 26),
                      margin: `${px(s, 5)} 0`,
                    }}
                  >
                    {icon}
                  </div>
                  <div
                    style={{
                      fontSize: px(s, 11),
                      fontWeight: 700,
                      color: done ? "#4ade80" : "#fbbf24",
                    }}
                  >
                    {label}
                  </div>
                  {done ? (
                    <div style={{ fontSize: px(s, 9), color: "#4ade80" }}>
                      ✅ Claimed
                    </div>
                  ) : (
                    <div style={{ fontSize: px(s, 14), color: "#475569" }}>
                      🔒
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: px(s, 10) }}>
              <ProgressBar pct={88} color="#fbbf24" h={8} s={s} />
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#64748b",
                  marginTop: px(s, 3),
                  textAlign: "center",
                }}
              >
                220 / 250 sentences to next milestone
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Right ── */}
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
          <CardHead color="#0d9488" icon="🗓️" s={s}>
            LOGIN CALENDAR
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            <p
              style={{
                fontSize: px(s, 10),
                color: "#94a3b8",
                marginBottom: px(s, 8),
              }}
            >
              Log in 7 days to get the special reward!
            </p>
            <div
              style={{
                display: "flex",
                gap: px(s, 5),
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <div
                  key={d}
                  style={{
                    width: px(s, 25),
                    height: px(s, 25),
                    borderRadius: px(s, 6),
                    background: d <= 6 ? "#052e16" : "#162033",
                    border:
                      d <= 6
                        ? "2px solid #16a34a"
                        : d === 7
                        ? "2px solid #fbbf24"
                        : "2px solid #1e3a5f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: d <= 6 ? px(s, 11) : px(s, 17),
                  }}
                >
                  {d <= 6 ? "✅" : "📦"}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <CardHead color="#f97316" icon="🗝️" s={s}>
            WEEKLY CHEST
          </CardHead>
          <div style={{ padding: px(s, 9), textAlign: "center" }}>
            <div style={{ fontSize: px(s, 46) }}>📦</div>
            <p
              style={{
                fontSize: px(s, 10),
                color: "#94a3b8",
                marginBottom: px(s, 7),
              }}
            >
              Earn stars by completing missions!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: px(s, 5),
                marginBottom: px(s, 7),
              }}
            >
              <span style={{ fontSize: px(s, 11) }}>⭐</span>
              <ProgressBar pct={60} color="#fbbf24" s={s} />
              <span
                style={{
                  fontSize: px(s, 9),
                  color: "#fbbf24",
                  whiteSpace: "nowrap",
                }}
              >
                18/30
              </span>
            </div>
            <Btn
              color="#f97316"
              s={s}
              style={{ width: "100%", textAlign: "center" }}
            >
              🎯 Go to Missions
            </Btn>
          </div>
        </Card>

        <Card>
          <CardHead color="#7c3aed" icon="🏅" s={s}>
            RECENT ACHIEVEMENTS
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            {ACHIEVEMENTS.slice(0, 3).map((a) => (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #1e3a5f",
                  padding: `${px(s, 4)} 0`,
                }}
              >
                <div style={{ display: "flex", gap: px(s, 6) }}>
                  <span style={{ fontSize: px(s, 17) }}>{a.icon}</span>
                  <div>
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
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: px(s, 9),
                      color: "#4ade80",
                      fontWeight: 700,
                    }}
                  >
                    +100 ⭐
                  </div>
                  <div style={{ fontSize: px(s, 7), color: "#64748b" }}>
                    {a.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
