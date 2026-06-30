import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { STORY_BANK } from "../data/words";
import { STORY_CHAPTERS } from "../data/wordLab";
import { SLOT_CFG, SLOT_TYPES } from "../data/patterns";
import type { Word, FilledSlots } from "../data/types";
import { px } from "../utils/scale";

interface Props { s: number }

const ST_SLOTS = ["subject", "verb", "object", "detail", "place"] as const;

export const StoryScreen: React.FC<Props> = ({ s }) => {
  const [filled, setFilled] = useState<FilledSlots>({});

  const addWord = (w: Word) => {
    for (const sl of ST_SLOTS) {
      if (!filled[sl] && SLOT_TYPES[sl]?.includes(w.type)) {
        setFilled((prev) => ({ ...prev, [sl]: w }));
        return;
      }
    }
  };

  const removeWord = (sl: string) =>
    setFilled((prev) => {
      const next = { ...prev };
      delete next[sl];
      return next;
    });

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Chapters ── */}
      <div
        style={{
          width: px(s, 185),
          background: "#0a1628",
          borderRight: "2px solid #1e3a5f",
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
          padding: px(s, 9),
        }}
      >
        <div
          style={{
            fontSize: px(s, 10),
            fontWeight: 800,
            color: "#94a3b8",
            letterSpacing: 1,
            marginBottom: px(s, 8),
          }}
        >
          STORY CHAPTERS
        </div>

        {STORY_CHAPTERS.map((ch) => (
          <div
            key={ch.id}
            style={{
              background: ch.current ? "#1e3a8a" : ch.locked ? "#0d1829" : "#162033",
              border: ch.current ? "3px solid #fbbf24" : "2px solid #1e3a5f",
              borderRadius: px(s, 10),
              padding: `${px(s, 9)} ${px(s, 10)}`,
              marginBottom: px(s, 7),
              opacity: ch.locked ? 0.5 : 1,
              cursor: ch.locked ? "not-allowed" : "pointer",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: px(s, 6) }}
            >
              <span style={{ fontSize: px(s, ch.locked ? 12 : 17) }}>
                {ch.locked ? "🔒" : "📜"}
              </span>
              <span
                style={{
                  fontSize: px(s, 11),
                  fontWeight: 700,
                  color: ch.current ? "#fbbf24" : "#e2e8f0",
                }}
              >
                {ch.id}. {ch.title}
              </span>
            </div>
            <div
              style={{
                fontSize: px(s, 10),
                color: "#fbbf24",
                marginTop: px(s, 3),
              }}
            >
              {"⭐".repeat(ch.stars)}
              {"☆".repeat(ch.max - ch.stars)} {ch.stars}/{ch.max}
            </div>
          </div>
        ))}

        <Btn
          color="#7c3aed"
          s={s}
          style={{ width: "100%", textAlign: "center" }}
        >
          📚 Story Collection
        </Btn>
      </div>

      {/* ── Main area ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "#0a1628",
            borderBottom: "2px solid #1e3a5f",
            padding: `${px(s, 10)} ${px(s, 13)}`,
            flexShrink: 0,
          }}
        >
          <div
            style={{ fontSize: px(s, 14), fontWeight: 800, color: "#fff" }}
          >
            CHAPTER 1: THE LOST MAP
          </div>
          <p style={{ fontSize: px(s, 11), color: "#94a3b8", marginTop: px(s, 3) }}>
            Alex finds an old map in the attic. It seems to lead to a{" "}
            <span style={{ color: "#c084fc", fontWeight: 700 }}>
              hidden island!
            </span>
          </p>
        </div>

        {/* Illustration / scene */}
        <div
          style={{
            flex: 1,
            position: "relative",
            background:
              "radial-gradient(ellipse at 40% 50%,#2d1f4e,#0a1020)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "center", zIndex: 2 }}>
            <div
              style={{
                fontSize: px(s, 7),
                color: "#475569",
                marginBottom: px(s, 4),
              }}
            >
              [story_attic_placeholder]
            </div>
            <div style={{ fontSize: px(s, 68) }}>🧒🏿</div>
            <div style={{ fontSize: px(s, 10), color: "#94a3b8" }}>
              Malik  -- The Explorer
            </div>
            <div style={{ fontSize: px(s, 8), color: "#475569" }}>
              📚 Backpack · 👓 Glasses · 🗺️ Map
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: px(s, 32),
              top: "28%",
              fontSize: px(s, 44),
            }}
          >
            🗺️
          </div>
          <div
            style={{
              position: "absolute",
              right: px(s, 32),
              top: "18%",
              fontSize: px(s, 44),
            }}
          >
            📦
          </div>
          <div
            style={{
              position: "absolute",
              right: px(s, 65),
              bottom: px(s, 18),
              fontSize: px(s, 30),
            }}
          >
            🕯️
          </div>

          {/* Mission bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#0a1628",
              borderTop: "2px solid #1e3a5f",
              padding: `${px(s, 8)} ${px(s, 13)}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#fbbf24",
                  fontWeight: 800,
                }}
              >
                YOUR MISSION
              </div>
              <p style={{ fontSize: px(s, 10), color: "#94a3b8" }}>
                ⭐ Build 5 sentences to continue the story.
              </p>
              <div style={{ width: px(s, 130) }}>
                <ProgressBar pct={60} color="#fbbf24" s={s} />
              </div>
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#94a3b8",
                  marginTop: px(s, 2),
                }}
              >
                3 / 5
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: px(s, 9),
                  color: "#60a5fa",
                  fontWeight: 700,
                }}
              >
                REWARD
              </div>
              <div
                style={{
                  color: "#fbbf24",
                  fontWeight: 700,
                  fontSize: px(s, 12),
                }}
              >
                ⭐ 100
              </div>
              <div
                style={{
                  color: "#c084fc",
                  fontWeight: 700,
                  fontSize: px(s, 12),
                }}
              >
                💎 5
              </div>
            </div>
          </div>
        </div>

        {/* Sentence builder */}
        <div
          style={{
            background: "#162033",
            borderTop: "2px solid #1e3a5f",
            padding: `${px(s, 10)} ${px(s, 13)}`,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontWeight: 800,
              color: "#fff",
              fontSize: px(s, 12),
              marginBottom: px(s, 7),
              textAlign: "center",
            }}
          >
            BUILD YOUR SENTENCE
          </div>

          <div
            style={{
              display: "flex",
              gap: px(s, 5),
              marginBottom: px(s, 8),
              flexWrap: "wrap",
            }}
          >
            {ST_SLOTS.map((sl) => {
              const cfg = SLOT_CFG[sl];
              const w = filled[sl];
              return (
                <div
                  key={sl}
                  onClick={() => w && removeWord(sl)}
                  style={{
                    background: w ? "#1e3a8a" : "#0a1628",
                    border: `2px solid ${w ? "#60a5fa" : "#1e3a5f"}`,
                    borderRadius: px(s, 8),
                    padding: `${px(s, 5)} ${px(s, 7)}`,
                    minWidth: px(s, 68),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: px(s, 2),
                    cursor: w ? "pointer" : "default",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: px(s, 7),
                      color: cfg.bg,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {cfg.label}
                  </div>
                  {w ? (
                    <>
                      <span style={{ fontSize: px(s, 17) }}>{w.emoji}</span>
                      <span
                        style={{
                          fontSize: px(s, 9),
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      >
                        {w.text}
                      </span>
                    </>
                  ) : (
                    <div style={{ fontSize: px(s, 16), color: "#334155" }}>
                      +
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              gap: px(s, 8),
              alignItems: "center",
              marginBottom: px(s, 8),
            }}
          >
            <span style={{ fontSize: px(s, 17), cursor: "pointer" }}>🔊</span>
            <div
              style={{
                flex: 1,
                background: "#0a1628",
                border: "2px solid #1e3a5f",
                borderRadius: px(s, 8),
                padding: `${px(s, 6)} ${px(s, 9)}`,
                fontSize: px(s, 11),
                color: "#e2e8f0",
                fontWeight: 600,
              }}
            >
              {ST_SLOTS.map((sl, i) => (
                <span key={sl}>
                  {i > 0 ? " " : ""}
                  <span style={{ color: SLOT_CFG[sl]?.bg ?? "#fff" }}>
                    {filled[sl]?.text ?? "___"}
                  </span>
                </span>
              ))}
              .
            </div>
            <Btn color="#16a34a" s={s}>
              ✅ USE SENTENCE
            </Btn>
          </div>

          <div
            style={{ display: "flex", gap: px(s, 6), flexWrap: "wrap" }}
          >
            {STORY_BANK.map((w) => (
              <div
                key={w.id}
                onClick={() => addWord(w)}
                style={{
                  background: "#1e3a5f",
                  border: "2px solid #2d4a7a",
                  borderRadius: px(s, 8),
                  padding: `${px(s, 4)} ${px(s, 8)}`,
                  cursor: "pointer",
                  minHeight: "44px",
                  touchAction: "manipulation",
                  display: "flex",
                  alignItems: "center",
                  gap: px(s, 5),
                }}
              >
                <span style={{ fontSize: px(s, 16) }}>{w.emoji}</span>
                <span
                  style={{
                    fontSize: px(s, 10),
                    color: "#e2e8f0",
                    fontWeight: 600,
                  }}
                >
                  {w.text}
                </span>
              </div>
            ))}
          </div>
        </div>
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
          <CardHead color="#7c3aed" icon="📍" s={s}>
            STORY PROGRESS
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            {(
              [
                ["Alex finds an old map.",                               true,  false],
                ["The map looks mysterious.",                            true,  false],
                ["Alex discovers the map carefully in the attic.",       false, true ],
                ["...",                                                  false, false],
                ["...",                                                  false, false],
              ] as Array<[string, boolean, boolean]>
            ).map(([text, done, active], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: px(s, 6),
                  marginBottom: px(s, 4),
                }}
              >
                <span style={{ fontSize: px(s, 12) }}>
                  {done ? "✅" : active ? "🟡" : "⭕"}
                </span>
                <span
                  style={{
                    fontSize: px(s, 10),
                    color: done ? "#86efac" : active ? "#fbbf24" : "#475569",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHead color="#f97316" icon="📖" s={s}>
            STORY WORDS
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
                ["🗺️", "map"      ],
                ["🏝️", "island"   ],
                ["💎", "treasure" ],
                ["🧭", "adventure"],
              ] as Array<[string, string]>
            ).map(([icon, label]) => (
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
                <div style={{ fontSize: px(s, 20) }}>{icon}</div>
                <div style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHead color="#fbbf24" icon="🛠️" s={s}>
            HELPERS
          </CardHead>
          <div
            style={{
              padding: px(s, 9),
              display: "flex",
              gap: px(s, 7),
            }}
          >
            {(
              [
                ["💡", "Hint",        "2"],
                ["📖", "Word Helper", "1"],
                ["🔍", "Check",       null],
              ] as Array<[string, string, string | null]>
            ).map(([icon, label, count]) => (
              <div
                key={label}
                style={{
                  background: "#162033",
                  border: "2px solid #1e3a5f",
                  borderRadius: px(s, 8),
                  padding: px(s, 7),
                  textAlign: "center",
                  flex: 1,
                  position: "relative",
                }}
              >
                {count && (
                  <div
                    style={{
                      position: "absolute",
                      top: px(s, 3),
                      right: px(s, 3),
                      background: "#c084fc",
                      borderRadius: "50%",
                      width: px(s, 15),
                      height: px(s, 15),
                      fontSize: px(s, 8),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {count}
                  </div>
                )}
                <div style={{ fontSize: px(s, 20) }}>{icon}</div>
                <div
                  style={{
                    fontSize: px(s, 8),
                    color: "#94a3b8",
                    marginTop: px(s, 2),
                  }}
                >
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
