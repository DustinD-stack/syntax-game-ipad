import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import {
  PREFIXES, ROOTS, SUFFIXES,
  WORD_FAMILIES, NOTEBOOK_WORDS, MADE_WORDS,
} from "../data/wordLab";
import type { WordPart, WordFamily } from "../data/types";
import { px } from "../utils/scale";

interface Props { s: number }

export const WordLabScreen: React.FC<Props> = ({ s }) => {
  const [family, setFamily] = useState<WordFamily>(WORD_FAMILIES[0]);
  const [prefix, setPrefix] = useState<WordPart>(PREFIXES[1]);
  const [root,   setRoot  ] = useState<WordPart>(ROOTS[3]);
  const [suffix, setSuffix] = useState<WordPart>(SUFFIXES[6]);

  const builtWord =
    prefix.text.replace("-", "") + root.text + suffix.text;
  const meaning =
    prefix.meaning + " + " + root.meaning + " + " + suffix.meaning;

  const columns: Array<{
    title: string;
    items: WordPart[];
    selected: WordPart;
    setter: (v: WordPart) => void;
    color: string;
  }> = [
    { title: "PREFIXES", items: PREFIXES, selected: prefix, setter: setPrefix, color: "#7c3aed" },
    { title: "ROOTS",    items: ROOTS,    selected: root,   setter: setRoot,   color: "#1e6ef5" },
    { title: "SUFFIXES", items: SUFFIXES, selected: suffix, setter: setSuffix, color: "#16a34a" },
  ];

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* ── Word families sidebar ── */}
      <div
        style={{
          width: px(s, 170),
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
          WORD FAMILIES
        </div>

        {WORD_FAMILIES.map((f) => (
          <div
            key={f.id}
            onClick={() => setFamily(f)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: px(s, 6),
              padding: `${px(s, 6)} ${px(s, 8)}`,
              borderRadius: px(s, 8),
              cursor: "pointer",
              marginBottom: px(s, 4),
              background: family.id === f.id ? "#1e3a8a" : "#162033",
              border:
                family.id === f.id
                  ? "2px solid #fbbf24"
                  : "2px solid #1e3a5f",
              color: family.id === f.id ? "#fbbf24" : "#e2e8f0",
              fontWeight: family.id === f.id ? 700 : 400,
            }}
          >
            <span style={{ fontSize: px(s, 15) }}>{f.emoji}</span>
            <span style={{ flex: 1, fontSize: px(s, 12) }}>{f.label}</span>
            <span
              style={{
                background: "#1e293b",
                borderRadius: px(s, 6),
                padding: `1px ${px(s, 5)}`,
                fontSize: px(s, 9),
                color: "#60a5fa",
              }}
            >
              {f.count}
            </span>
          </div>
        ))}

        <div
          style={{
            marginTop: px(s, 9),
            borderTop: "1px solid #1e3a5f",
            paddingTop: px(s, 8),
          }}
        >
          <Btn
            color="#7c3aed"
            s={s}
            style={{ width: "100%", textAlign: "center" }}
          >
            + Add to Notebook
          </Btn>
        </div>
      </div>

      {/* ── Builder ── */}
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
            background: "linear-gradient(90deg,#7c3aed,#1e6ef5)",
            padding: `${px(s, 9)} ${px(s, 16)}`,
            flexShrink: 0,
          }}
        >
          <div
            style={{ fontWeight: 800, fontSize: px(s, 18), color: "#fff" }}
          >
            WORD LAB
          </div>
          <div style={{ fontSize: px(s, 10), color: "#c4b5fd" }}>
            Combine prefixes, roots, and suffixes to build new words!
          </div>
        </div>

        <div
          style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"], padding: px(s, 12) }}
        >
          {/* Equation */}
          <div
            style={{
              background: "#162033",
              border: "2px solid #1e3a5f",
              borderRadius: px(s, 13),
              padding: `${px(s, 16)} ${px(s, 18)}`,
              marginBottom: px(s, 13),
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: px(s, 7),
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {columns.map((col, i) => (
                <React.Fragment key={col.title}>
                  {i > 0 && (
                    <span
                      style={{
                        fontSize: px(s, 20),
                        color: "#94a3b8",
                        fontWeight: 700,
                      }}
                    >
                      +
                    </span>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: px(s, 3),
                    }}
                  >
                    <div
                      style={{
                        fontSize: px(s, 9),
                        fontWeight: 800,
                        color: col.color,
                        letterSpacing: 1,
                      }}
                    >
                      {col.title}
                    </div>
                    <div
                      style={{
                        background: `${col.color}33`,
                        border: `3px solid ${col.color}`,
                        borderRadius: px(s, 11),
                        padding: `${px(s, 9)} ${px(s, 16)}`,
                        minWidth: px(s, 88),
                        textAlign: "center",
                        boxShadow: `0 4px 14px ${col.color}44`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: px(s, 19),
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        {col.selected.text}
                      </div>
                      <div
                        style={{ fontSize: px(s, 9), color: "#94a3b8" }}
                      >
                        {col.selected.meaning}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}

              <span
                style={{
                  fontSize: px(s, 20),
                  color: "#94a3b8",
                  fontWeight: 700,
                }}
              >
                =
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: px(s, 3),
                }}
              >
                <div
                  style={{
                    fontSize: px(s, 9),
                    fontWeight: 800,
                    color: "#fbbf24",
                    letterSpacing: 1,
                  }}
                >
                  YOUR WORD
                </div>
                <div
                  style={{
                    background: "#fbbf2433",
                    border: "3px solid #fbbf24",
                    borderRadius: px(s, 11),
                    padding: `${px(s, 9)} ${px(s, 18)}`,
                    minWidth: px(s, 105),
                    textAlign: "center",
                    boxShadow: "0 4px 14px #fbbf2444",
                  }}
                >
                  <div
                    style={{
                      fontSize: px(s, 20),
                      fontWeight: 800,
                      color: "#fbbf24",
                    }}
                  >
                    {builtWord}
                  </div>
                  <div style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                    {meaning}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Picker grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: px(s, 10),
              marginBottom: px(s, 12),
            }}
          >
            {columns.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontSize: px(s, 10),
                    fontWeight: 800,
                    color: col.color,
                    textAlign: "center",
                    marginBottom: px(s, 6),
                    background: `${col.color}33`,
                    borderRadius: px(s, 6),
                    padding: `${px(s, 2)} 0`,
                    letterSpacing: 1,
                  }}
                >
                  {col.title}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: px(s, 5),
                  }}
                >
                  {col.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => col.setter(item)}
                      style={{
                        background:
                          col.selected.id === item.id
                            ? `${col.color}44`
                            : "#162033",
                        border: `2px solid ${
                          col.selected.id === item.id
                            ? col.color
                            : "#1e3a5f"
                        }`,
                        borderRadius: px(s, 8),
                        padding: `${px(s, 6)} ${px(s, 3)}`,
                        textAlign: "center",
                        cursor: "pointer",
                        minHeight: "52px",
                        touchAction: "manipulation",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 800,
                          color:
                            col.selected.id === item.id
                              ? "#fff"
                              : "#e2e8f0",
                          fontSize: px(s, 11),
                        }}
                      >
                        {item.text}
                      </div>
                      <div
                        style={{ fontSize: px(s, 8), color: "#64748b" }}
                      >
                        {item.meaning}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Words you can make */}
          <Card>
            <CardHead color="#0d9488" icon="✨" s={s}>
              WORDS YOU CAN MAKE
            </CardHead>
            <div
              style={{
                padding: px(s, 10),
                display: "flex",
                gap: px(s, 7),
                flexWrap: "wrap",
              }}
            >
              {MADE_WORDS.map((w, i) => (
                <div
                  key={w.word}
                  style={{
                    background: i === 1 ? "#fbbf2433" : "#162033",
                    border: `2px solid ${i === 1 ? "#fbbf24" : "#1e3a5f"}`,
                    borderRadius: px(s, 8),
                    padding: `${px(s, 6)} ${px(s, 11)}`,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: i === 1 ? "#fbbf24" : "#e2e8f0",
                      fontSize: px(s, 11),
                    }}
                  >
                    {w.word}
                  </div>
                  <div style={{ fontSize: px(s, 8), color: "#64748b" }}>
                    {w.def}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* ── Right: Meaning + Notebook ── */}
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
          <CardHead color="#f97316" icon="📖" s={s}>
            WORD MEANING
          </CardHead>
          <div style={{ padding: px(s, 10) }}>
            <div
              style={{
                fontSize: px(s, 19),
                fontWeight: 800,
                color: "#f97316",
                marginBottom: px(s, 2),
              }}
            >
              {builtWord}
            </div>
            <div
              style={{
                fontSize: px(s, 8),
                color: "#94a3b8",
                marginBottom: px(s, 7),
              }}
            >
              noun
            </div>
            <p
              style={{
                fontSize: px(s, 10),
                color: "#e2e8f0",
                marginBottom: px(s, 9),
              }}
            >
              {meaning}
            </p>
            <div
              style={{ borderTop: "1px solid #1e3a5f", paddingTop: px(s, 7) }}
            >
              <div
                style={{
                  fontSize: px(s, 9),
                  fontWeight: 700,
                  color: "#fbbf24",
                  marginBottom: px(s, 4),
                }}
              >
                EXAMPLE SENTENCES
              </div>
              <p style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                The athlete had a quick {builtWord}.
              </p>
              <p style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                Her {builtWord} to the news was surprising.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHead color="#7c3aed" icon="📓" s={s}>
            MY WORD NOTEBOOK
          </CardHead>
          <div style={{ padding: px(s, 9) }}>
            {NOTEBOOK_WORDS.map((w) => (
              <div
                key={w.word}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #1e3a5f",
                  padding: `${px(s, 5)} 0`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: px(s, 11),
                      color: "#60a5fa",
                      fontWeight: 700,
                    }}
                  >
                    {w.word}
                  </div>
                  <div style={{ fontSize: px(s, 8), color: "#64748b" }}>
                    {w.meaning}
                  </div>
                </div>
                <span style={{ color: "#fbbf24", fontSize: px(s, 13) }}>
                  ⭐
                </span>
              </div>
            ))}
          </div>
          <div style={{ padding: `0 ${px(s, 9)} ${px(s, 9)}` }}>
            <Btn
              color="#1e6ef5"
              s={s}
              style={{ width: "100%", textAlign: "center" }}
            >
              📖 Open Notebook
            </Btn>
          </div>
        </Card>
      </div>
    </div>
  );
};
