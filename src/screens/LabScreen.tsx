import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { LAB_WORDS } from "../data/words";
import { px } from "../utils/scale";

interface Props { s: number }

export const LabScreen: React.FC<Props> = ({ s }) => {
  const [built, setBuilt] = useState<typeof LAB_WORDS>([]);
  const success = built.length === LAB_WORDS.length;

  const addWord = (w: (typeof LAB_WORDS)[0]) => {
    if (built.find((x) => x.id === w.id)) return;
    setBuilt((prev) => [...prev, w]);
  };

  const clear = () => setBuilt([]);

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Scene + beakers ── */}
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
            flex: 1,
            position: "relative",
            background:
              "linear-gradient(180deg,#1a0a2e,#0d1829 50%,#071020 100%)",
            overflow: "hidden",
          }}
        >
          {/* Info panel */}
          <div
            style={{
              position: "absolute",
              top: px(s, 10),
              left: px(s, 13),
              background: "#1e3a5f",
              borderRadius: px(s, 9),
              padding: `${px(s, 8)} ${px(s, 13)}`,
            }}
          >
            <div
              style={{
                fontSize: px(s, 12),
                fontWeight: 800,
                color: "#60a5fa",
              }}
            >
              🧪 WORD LAB
            </div>
            <div
              style={{
                fontSize: px(s, 10),
                color: "#94a3b8",
                marginTop: px(s, 3),
              }}
            >
              Build the sentence using
              <br />
              the words in the beakers!
            </div>
          </div>

          {/* Chalkboard */}
          <div
            style={{
              position: "absolute",
              top: px(s, 15),
              right: px(s, 15),
              background: "#1a3a1a",
              border: "4px solid #4a6741",
              borderRadius: px(s, 9),
              padding: `${px(s, 10)} ${px(s, 14)}`,
              width: px(s, 160),
            }}
          >
            <div
              style={{
                fontSize: px(s, 11),
                color: "#86efac",
                fontWeight: 700,
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              DISCOVER
              <br />
              EXPLORE
              <br />
              LEARN!
            </div>
            <div
              style={{
                fontSize: px(s, 18),
                textAlign: "center",
                marginTop: px(s, 5),
              }}
            >
              ⚛️
            </div>
          </div>

          {/* Jada character placeholder */}
          <div
            style={{
              position: "absolute",
              left: "22%",
              top: px(s, 8),
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#162033",
                border: "2px solid #2d4a7a",
                borderRadius: px(s, 14),
                padding: `${px(s, 9)} ${px(s, 13)}`,
                display: "inline-block",
              }}
            >
              <div
                style={{
                  fontSize: px(s, 7),
                  color: "#475569",
                  marginBottom: px(s, 3),
                }}
              >
                [character_jada_placeholder]
              </div>
              <div style={{ fontSize: px(s, 65) }}>👧🏾</div>
              <div style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                Jada  -- Lab Scientist
              </div>
              <div style={{ fontSize: px(s, 8), color: "#475569" }}>
                🥽 Goggles · 🥼 Lab coat · 🧬 Braids with beads
              </div>
            </div>
            <div style={{ fontSize: px(s, 38) }}>🔬</div>
          </div>

          {/* Science props */}
          <div
            style={{
              position: "absolute",
              right: px(s, 28),
              top: px(s, 48),
              fontSize: px(s, 50),
            }}
          >
            🧬
          </div>
          <div
            style={{
              position: "absolute",
              left: px(s, 50),
              bottom: px(s, 100),
              fontSize: px(s, 32),
            }}
          >
            🧫
          </div>

          {/* Beaker word cards */}
          <div
            style={{
              position: "absolute",
              bottom: px(s, 8),
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: px(s, 7),
              padding: `0 ${px(s, 13)}`,
            }}
          >
            {LAB_WORDS.map((w) => {
              const used = !!built.find((x) => x.id === w.id);
              return (
                <div
                  key={w.id}
                  onClick={() => addWord(w)}
                  style={{
                    background: used ? `${w.color}11` : `${w.color}33`,
                    border: `3px solid ${used ? "#475569" : w.color}`,
                    borderRadius: `50% 50% ${px(s, 7)} ${px(s, 7)}`,
                    padding: `${px(s, 6)} ${px(s, 8)} ${px(s, 10)}`,
                    cursor: used ? "default" : "pointer",
                    minHeight: "60px",
                    touchAction: "manipulation",
                    WebkitTouchCallout: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "60px",
                    opacity: used ? 0.45 : 1,
                    boxShadow: used ? "none" : `0 4px 10px ${w.color}44`,
                  }}
                >
                  <div
                    style={{
                      fontSize: px(s, 7),
                      color: "#64748b",
                      marginBottom: px(s, 2),
                    }}
                  >
                    💧
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: px(s, 10),
                      color: used ? "#64748b" : "#fff",
                      textAlign: "center",
                    }}
                  >
                    {w.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sentence builder bar */}
        <div
          style={{
            background: "#0a1628",
            borderTop: "2px solid #1e3a5f",
            padding: `${px(s, 10)} ${px(s, 13)}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: px(s, 8),
              marginBottom: success ? px(s, 7) : undefined,
            }}
          >
            <span
              style={{
                fontSize: px(s, 11),
                fontWeight: 800,
                color: "#94a3b8",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              MY SENTENCE
            </span>
            <span style={{ fontSize: px(s, 17), cursor: "pointer" }}>🔊</span>
            <div
              style={{ flex: 1, display: "flex", gap: px(s, 5), flexWrap: "wrap" }}
            >
              {built.map((w) => (
                <span
                  key={w.id}
                  style={{
                    background: `${w.color}33`,
                    border: `2px solid ${w.color}`,
                    borderRadius: px(s, 6),
                    padding: `${px(s, 2)} ${px(s, 8)}`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: px(s, 11),
                  }}
                >
                  {w.text}
                </span>
              ))}
              {built.length > 0 && (
                <span
                  style={{
                    color: "#e2e8f0",
                    fontWeight: 700,
                    fontSize: px(s, 14),
                  }}
                >
                  .
                </span>
              )}
            </div>
            <Btn onClick={clear} color="#ef4444" s={s}>
              ↩ CLEAR
            </Btn>
          </div>
          {success && (
            <div
              style={{
                background: "#052e16",
                border: "2px solid #16a34a",
                borderRadius: px(s, 8),
                padding: `${px(s, 6)} ${px(s, 13)}`,
                color: "#4ade80",
                fontWeight: 700,
                textAlign: "center",
                fontSize: px(s, 12),
              }}
            >
              ✅ Excellent! You built a great sentence! ✨
            </div>
          )}
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
        <Card glow="#f97316">
          <CardHead color="#f97316" icon="🎯" s={s}>
            CURRENT MISSION
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            <p
              style={{
                fontSize: px(s, 11),
                color: "#e2e8f0",
                marginBottom: px(s, 6),
              }}
            >
              Build 5 sentences using feeling words.
            </p>
            <ProgressBar pct={60} color="#f97316" s={s} />
            <div
              style={{
                fontSize: px(s, 9),
                color: "#94a3b8",
                marginTop: px(s, 3),
              }}
            >
              3 / 5
            </div>
          </div>
        </Card>

        <Card glow="#fbbf24">
          <CardHead color="#ca8a04" icon="💡" s={s}>
            HINT
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            <p style={{ fontSize: px(s, 11), color: "#fde68a" }}>
              Feeling words tell us how someone feels inside.
            </p>
          </div>
        </Card>

        <Card glow="#4ade80">
          <CardHead color="#16a34a" icon="⭐" s={s}>
            LAB SCORE
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            <p style={{ fontSize: px(s, 10), color: "#86efac" }}>
              Great job, Scientist!
            </p>
            <div
              style={{
                fontSize: px(s, 20),
                fontWeight: 800,
                color: "#4ade80",
              }}
            >
              +50 XP
            </div>
          </div>
        </Card>

        <Card>
          <CardHead color="#7c3aed" icon="🔧" s={s}>
            LAB TOOLS
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
                ["🔍", "Magnifier"     ],
                ["🧪", "Test Tubes"    ],
                ["🔥", "Bunsen Burner" ],
                ["📒", "Notebook"      ],
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
                <div style={{ fontSize: px(s, 8), color: "#94a3b8" }}>
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
