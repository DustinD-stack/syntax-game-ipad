import React, { useState, useCallback } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { Owl } from "../components/Owl";
import { WORDS } from "../data/words";
import { PATTERNS, SLOT_CFG, SLOT_TYPES } from "../data/patterns";
import { validateSentence } from "../utils/validateSentence";
import type { Word, FilledSlots } from "../data/types";
import { px } from "../utils/scale";

interface Props { s: number }

const TAB_TYPES: Record<string, string> = {
  PEOPLE:  "noun_phrase",
  ACTIONS: "verb",
  DETAILS: "adverb",
  PLACE:   "place_phrase",
};

const FB_CFG = {
  correct:    { color: "#16a34a", bg: "#052e16", text: "🎉 Great Job! Perfect sentence!" },
  incorrect:  { color: "#ef4444", bg: "#2d0808", text: "❌ Check your word types!"       },
  incomplete: { color: "#f97316", bg: "#2a1500", text: "⚠️ Fill all the slots first!"    },
} as const;

export const BuildScreen: React.FC<Props> = ({ s }) => {
  const [patId,     setPatId    ] = useState("svodp");
  const [filled,    setFilled   ] = useState<FilledSlots>({});
  const [tab,       setTab      ] = useState("PEOPLE");
  const [feedback,  setFeedback ] = useState<keyof typeof FB_CFG | null>(null);
  const [hintOpen,  setHintOpen ] = useState(false);
  // For tap-to-place: which slot is "selected" as the target
  const [targetSlot, setTargetSlot] = useState<string | null>(null);

  const pattern = PATTERNS.find((p) => p.id === patId);
  const slots   = pattern?.slots ?? [];
  const tabWords = WORDS.filter((w) => w.type === TAB_TYPES[tab]);
  const usedIds  = Object.values(filled).map((w) => w?.id);

  // ── Tap a slot to select it as the target ──────────────────
  const tapSlot = useCallback((sl: string) => {
    const word = filled[sl];
    if (word) {
      // Tap filled slot → clear it
      setFilled((prev) => { const n = { ...prev }; delete n[sl]; return n; });
      setFeedback(null);
      if (targetSlot === sl) setTargetSlot(null);
    } else {
      // Tap empty slot → select it as target
      setTargetSlot(sl);
    }
  }, [filled, targetSlot]);

  // ── Tap a word card ─────────────────────────────────────────
  const tapWord = useCallback((word: Word) => {
    if (usedIds.includes(word.id)) return;

    // If a slot is targeted and accepts this word type → place there
    if (targetSlot && SLOT_TYPES[targetSlot]?.includes(word.type)) {
      setFilled((prev) => ({ ...prev, [targetSlot]: word }));
      setTargetSlot(null);
      setFeedback(null);
      return;
    }

    // Otherwise auto-place in the first compatible empty slot
    for (const sl of slots) {
      if (!filled[sl] && SLOT_TYPES[sl]?.includes(word.type)) {
        setFilled((prev) => ({ ...prev, [sl]: word }));
        setFeedback(null);
        setTargetSlot(null);
        return;
      }
    }
  }, [usedIds, targetSlot, slots, filled]);

  const check = () =>
    setFeedback(validateSentence(patId, filled) as keyof typeof FB_CFG);

  const clear = () => {
    setFilled({});
    setFeedback(null);
    setTargetSlot(null);
  };

  const fb = feedback ? FB_CFG[feedback] : null;
  const cardMin = Math.max(Math.round(80 * s), 72); // word card min-width

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

      {/* ── Pattern sidebar ── */}
      <div
        style={{
          width: px(s, 190),
          background: "#0a1628",
          borderRight: "2px solid #1e3a5f",
          padding: px(s, 10),
          overflowY: "auto",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: px(s, 10), fontWeight: 800, color: "#94a3b8", letterSpacing: 1, marginBottom: px(s, 8) }}>
          SENTENCE PATTERNS
        </div>

        {PATTERNS.map((p, i) => (
          <div
            key={p.id}
            onClick={() => { setPatId(p.id); clear(); }}
            style={{
              background: patId === p.id ? "#1e3a8a" : "#162033",
              border: patId === p.id ? "3px solid #fbbf24" : "2px solid #1e3a5f",
              borderRadius: px(s, 12),
              padding: `${px(s, 10)} ${px(s, 11)}`,
              marginBottom: px(s, 8),
              cursor: "pointer",
              touchAction: "manipulation",
              minHeight: "52px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: px(s, 6), marginBottom: px(s, 3) }}>
              <span style={{
                background: "#1e6ef5", color: "#fff", borderRadius: "50%",
                width: px(s, 20), height: px(s, 20), display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: px(s, 10), fontWeight: 700, flexShrink: 0,
              }}>{i + 1}</span>
              <span style={{ fontSize: px(s, 11), fontWeight: 700, color: patId === p.id ? "#fbbf24" : "#e2e8f0" }}>
                {p.label}
              </span>
            </div>
            <div style={{ fontSize: px(s, 9), color: "#64748b", paddingLeft: px(s, 26) }}>{p.ex}</div>
          </div>
        ))}

        <Btn onClick={() => {}} color="#f97316" s={s} style={{ width: "100%", textAlign: "center" }}>
          💡 Examples
        </Btn>
      </div>

      {/* ── Main build area ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#0d1829" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(90deg,#1e6ef5,#7c3aed)",
          padding: `${px(s, 11)} ${px(s, 16)}`,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0,
        }}>
          <span style={{ fontWeight: 800, fontSize: px(s, 18), color: "#fff", letterSpacing: 1 }}>
            BUILD YOUR SENTENCE
          </span>
          <button
            onClick={() => setHintOpen((v) => !v)}
            style={{
              background: "#1e3a5f", border: "2px solid #60a5fa", borderRadius: "50%",
              width: px(s, 36), height: px(s, 36), minWidth: "44px", minHeight: "44px",
              color: "#60a5fa", fontWeight: 700, cursor: "pointer", fontSize: px(s, 14),
              fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center",
              touchAction: "manipulation",
            }}
          >?</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"], padding: px(s, 13), display: "flex", flexDirection: "column", gap: px(s, 12) }}>

          {/* Tap-to-place instruction */}
          <div style={{
            background: "#1e3a5f33", border: "1px solid #1e6ef5", borderRadius: px(s, 8),
            padding: `${px(s, 7)} ${px(s, 12)}`, fontSize: px(s, 11), color: "#60a5fa", textAlign: "center",
          }}>
            {targetSlot
              ? `👆 Now tap a word to place it in the ${SLOT_CFG[targetSlot]?.label} slot`
              : "👆 Tap a slot to select it, then tap a word card to place it there"}
          </div>

          {/* Slots row */}
          <div style={{ display: "flex", gap: px(s, 8), flexWrap: "wrap" }}>
            {slots.map((sl) => {
              const cfg  = SLOT_CFG[sl];
              const word = filled[sl];
              const isTarget = targetSlot === sl;
              return (
                <div
                  key={sl}
                  onClick={() => tapSlot(sl)}
                  style={{
                    flex: 1,
                    minWidth: px(s, 90),
                    minHeight: "60px",
                    background: isTarget ? `${cfg.bg}44` : word ? `${cfg.bg}22` : "#0a1628",
                    border: isTarget
                      ? `3px solid ${cfg.bg}`
                      : word ? `2px solid ${cfg.bg}` : "2px dashed #2d4a7a",
                    borderRadius: px(s, 12),
                    display: "flex", flexDirection: "column", alignItems: "center",
                    padding: px(s, 8), cursor: "pointer", gap: px(s, 4),
                    touchAction: "manipulation",
                    boxShadow: isTarget ? `0 0 12px ${cfg.bg}66` : "none",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{
                    background: cfg.bg, borderRadius: px(s, 6),
                    padding: `2px ${px(s, 8)}`, fontSize: px(s, 9), fontWeight: 800,
                    color: "#fff", letterSpacing: 0.5, textTransform: "uppercase",
                  }}>
                    {isTarget ? "▼ " : ""}{cfg.label}
                  </div>
                  {word ? (
                    <>
                      <span style={{ fontSize: px(s, 24) }}>{word.emoji}</span>
                      <span style={{ fontSize: px(s, 11), color: "#fff", fontWeight: 600, textAlign: "center" }}>
                        {word.text}
                      </span>
                    </>
                  ) : (
                    <div style={{ fontSize: px(s, 22), color: isTarget ? cfg.bg : "#2d4a7a" }}>
                      {isTarget ? "✦" : "+"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sentence preview */}
          <div style={{
            background: fb ? fb.bg : "#0a1628",
            border: `2px solid ${fb ? fb.color : "#1e3a5f"}`,
            borderRadius: px(s, 12), padding: `${px(s, 12)} ${px(s, 14)}`,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: px(s, 9),
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: px(s, 8), flex: 1, flexWrap: "wrap" }}>
              <span style={{ fontSize: px(s, 22), cursor: "pointer" }}>🔊</span>
              <span style={{ fontWeight: 700, fontSize: px(s, 14), color: "#e2e8f0" }}>
                {slots.map((sl, i) => (
                  <span key={sl}>
                    {i > 0 ? " " : ""}
                    <span style={{ color: SLOT_CFG[sl]?.bg ?? "#fff" }}>
                      {filled[sl]?.text ?? "___"}
                    </span>
                  </span>
                ))}.
              </span>
            </div>
            {fb && (
              <div style={{ fontWeight: 700, color: fb.color, fontSize: px(s, 12), whiteSpace: "nowrap" }}>
                {fb.text}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: px(s, 10), flexWrap: "wrap" }}>
            <Btn onClick={check} color="#16a34a" s={s}>✅ Check</Btn>
            <Btn onClick={clear} color="#ef4444" s={s}>🗑️ Clear</Btn>
            <Btn onClick={() => setHintOpen((v) => !v)} color="#f97316" s={s}>💡 Hint</Btn>
          </div>

          {/* Owl hint */}
          {hintOpen && (
            <Card glow="#fbbf24">
              <CardHead color="#f97316" icon="🦉" s={s}>OWL GRAMMAR COACH</CardHead>
              <div style={{ padding: px(s, 13), display: "flex", gap: px(s, 12), alignItems: "flex-start" }}>
                <Owl size={52} s={s} />
                <div>
                  <p style={{ fontSize: px(s, 13), color: "#fde68a", marginBottom: px(s, 7) }}>
                    How to build the sentence:
                  </p>
                  <p style={{ fontSize: px(s, 12), color: "#94a3b8", lineHeight: 1.5 }}>
                    1. Tap a <strong style={{ color: "#60a5fa" }}>slot</strong> to select it (it glows).<br/>
                    2. Tap a <strong style={{ color: "#4ade80" }}>word card</strong> below to place it there.<br/>
                    3. Tap a filled slot to <strong style={{ color: "#f87171" }}>remove</strong> that word.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Word tabs + cards */}
          <Card>
            {/* Tab bar */}
            <div style={{ display: "flex", borderBottom: "2px solid #1e3a5f" }}>
              {Object.keys(TAB_TYPES).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    flex: 1, background: tab === t ? "#1e6ef5" : "transparent",
                    border: "none", padding: `${px(s, 10)} ${px(s, 6)}`,
                    cursor: "pointer", color: tab === t ? "#fff" : "#64748b",
                    fontWeight: 700, fontSize: Math.max(Math.round(11 * s), 11) + "px",
                    whiteSpace: "nowrap", fontFamily: "inherit", minHeight: "44px",
                    touchAction: "manipulation",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Word cards  -- tap to place */}
            <div style={{ padding: px(s, 12), display: "flex", gap: px(s, 8), flexWrap: "wrap" }}>
              {tabWords.map((w) => {
                const used = usedIds.includes(w.id);
                return (
                  <div
                    key={w.id}
                    onClick={() => !used && tapWord(w)}
                    className="word-card"
                    style={{
                      background: used ? "#1e293b" : "linear-gradient(145deg,#1e3a5f,#162033)",
                      border: `2px solid ${used ? "#334155" : "#2d4a7a"}`,
                      borderRadius: px(s, 10), padding: `${px(s, 9)} ${px(s, 11)}`,
                      cursor: used ? "not-allowed" : "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      gap: px(s, 4), minWidth: cardMin + "px", opacity: used ? 0.4 : 1,
                      minHeight: "64px", touchAction: "manipulation",
                      transition: "transform 0.1s, box-shadow 0.1s",
                    }}
                  >
                    <span style={{ fontSize: Math.max(Math.round(26 * s), 24) + "px" }}>{w.emoji}</span>
                    <span style={{ fontSize: Math.max(Math.round(10 * s), 10) + "px", color: "#e2e8f0", fontWeight: 600, textAlign: "center" }}>
                      {w.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ padding: `${px(s, 4)} ${px(s, 12)} ${px(s, 10)}`, fontSize: px(s, 10), color: "#475569" }}>
              👆 Tap a slot first (it lights up), then tap a word to place it there.
            </div>
          </Card>
        </div>
      </div>

      {/* ── Word Bank sidebar ── */}
      <div style={{
        width: px(s, 200),
        background: "#0a1628", borderLeft: "2px solid #1e3a5f",
        overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        flexShrink: 0,
      }}>
        <CardHead color="#7c3aed" s={s}>WORD BANK</CardHead>
        <div style={{ padding: px(s, 10) }}>
          {(
            [
              ["NOUNS",   "#f97316", "noun_phrase"],
              ["VERBS",   "#16a34a", "verb"       ],
              ["DETAILS", "#7c3aed", "adverb"     ],
            ] as Array<[string, string, string]>
          ).map(([title, color, type]) => (
            <div key={title} style={{ marginBottom: px(s, 12) }}>
              <div style={{ fontSize: px(s, 10), fontWeight: 800, color, marginBottom: px(s, 6), letterSpacing: 0.5 }}>
                {title}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: px(s, 6) }}>
                {WORDS.filter((w) => w.type === type).slice(0, 6).map((w) => (
                  <div
                    key={w.id}
                    style={{
                      background: "#162033", border: "2px solid #1e3a5f",
                      borderRadius: px(s, 9), padding: `${px(s, 7)} ${px(s, 4)}`,
                      display: "flex", flexDirection: "column", alignItems: "center", gap: px(s, 3),
                      minHeight: "52px",
                    }}
                  >
                    <span style={{ fontSize: Math.max(Math.round(20 * s), 18) + "px" }}>{w.emoji}</span>
                    <span style={{ fontSize: px(s, 9), color: "#94a3b8", textAlign: "center" }}>{w.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
