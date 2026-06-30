import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { Toggle } from "../components/Toggle";
import { Owl } from "../components/Owl";
import {
  SETTINGS_SECTIONS,
  GAMEPLAY_OPTIONS,
  AUDIO_SLIDERS,
  DISPLAY_TOGGLES,
} from "../data/settings";
import { px } from "../utils/scale";

interface Props { s: number }

type TogglesState = Record<string, boolean>;

const DEFAULT_TOGGLES: TogglesState = {
  hints:          true,
  animations:     true,
  sfx:            true,
  autosave:       true,
  confirmActions: false,
  colorblind:     false,
  highContrast:   false,
};

const SIZE_OPTIONS = ["Small", "Medium", "Large"] as const;
type SizeOption = (typeof SIZE_OPTIONS)[number];

const THEMES = ["Bright", "Ocean", "Space"] as const;
type ThemeOption = (typeof THEMES)[number];

const THEME_BG: Record<ThemeOption, string> = {
  Bright: "linear-gradient(135deg,#87ceeb,#4caf50)",
  Ocean:  "linear-gradient(135deg,#006994,#00b4d8)",
  Space:  "linear-gradient(135deg,#0a0a2e,#533483)",
};

export const SettingsScreen: React.FC<Props> = ({ s }) => {
  const [section, setSection] = useState("general");
  const [toggles, setToggles] = useState<TogglesState>(DEFAULT_TOGGLES);
  const [textSize, setTextSize] = useState<SizeOption>("Large");
  const [uiSize,   setUiSize  ] = useState<SizeOption>("Medium");
  const [theme,    setTheme   ] = useState<ThemeOption>("Bright");

  const flip = (key: string) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  const SizeSel = ({
    opts,
    val,
    onChange,
  }: {
    opts: typeof SIZE_OPTIONS;
    val: SizeOption;
    onChange: (v: SizeOption) => void;
  }) => (
    <div style={{ display: "flex", gap: px(s, 3) }}>
      {opts.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          style={{
            background: val === o ? "#1e6ef5" : "#1e293b",
            border: `2px solid ${val === o ? "#60a5fa" : "#334155"}`,
            borderRadius: px(s, 6),
            padding: `${px(s, 3)} ${px(s, 9)}`,
            color: val === o ? "#fff" : "#64748b",
            fontSize: px(s, 10),
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );

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
          gap: px(s, 4),
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: px(s, 12),
            fontWeight: 800,
            color: "#fff",
            marginBottom: px(s, 5),
          }}
        >
          ⚙️ SETTINGS
        </div>

        {SETTINGS_SECTIONS.map((ss) => (
          <div
            key={ss.id}
            onClick={() => setSection(ss.id)}
            style={{
              padding: `${px(s, 6)} ${px(s, 9)}`,
              borderRadius: px(s, 8),
              cursor: "pointer",
              background: section === ss.id ? "#1e6ef5" : "#162033",
              color: section === ss.id ? "#fff" : "#94a3b8",
              fontWeight: section === ss.id ? 700 : 400,
              fontSize: px(s, 11),
              border:
                section === ss.id
                  ? "2px solid #60a5fa"
                  : "2px solid #1e3a5f",
              display: "flex",
              alignItems: "center",
              gap: px(s, 6),
            }}
          >
            {ss.emoji} {ss.label}
          </div>
        ))}

        <div style={{ marginTop: "auto", paddingTop: px(s, 7) }}>
          <Btn
            color="#7c3aed"
            s={s}
            style={{ width: "100%", textAlign: "center" }}
          >
            Restore Purchases
          </Btn>
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
        <Card>
          <CardHead color="#1e6ef5" icon="⚙️" s={s}>
            GENERAL SETTINGS
          </CardHead>
          <div style={{ padding: px(s, 13) }}>
            <p
              style={{
                fontSize: px(s, 11),
                color: "#94a3b8",
                marginBottom: px(s, 13),
              }}
            >
              Customize your Syntax experience.
            </p>

            {/* Language + Theme */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: px(s, 13),
                marginBottom: px(s, 13),
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: px(s, 7),
                    marginBottom: px(s, 7),
                  }}
                >
                  <span style={{ fontSize: px(s, 17) }}>🌐</span>
                  <div>
                    <div
                      style={{
                        fontSize: px(s, 11),
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      LANGUAGE
                    </div>
                    <div style={{ fontSize: px(s, 9), color: "#64748b" }}>
                      Choose your language.
                    </div>
                  </div>
                </div>
                <select
                  style={{
                    background: "#162033",
                    border: "2px solid #1e3a5f",
                    borderRadius: px(s, 7),
                    color: "#fff",
                    padding: `${px(s, 5)} ${px(s, 9)}`,
                    fontSize: px(s, 11),
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                >
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: px(s, 7),
                    marginBottom: px(s, 7),
                  }}
                >
                  <span style={{ fontSize: px(s, 17) }}>🎨</span>
                  <div>
                    <div
                      style={{
                        fontSize: px(s, 11),
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      THEME
                    </div>
                    <div style={{ fontSize: px(s, 9), color: "#64748b" }}>
                      Pick your favorite theme.
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: px(s, 6) }}>
                  {THEMES.map((t) => (
                    <div
                      key={t}
                      onClick={() => setTheme(t)}
                      style={{
                        flex: 1,
                        background: THEME_BG[t],
                        border:
                          theme === t
                            ? "3px solid #fbbf24"
                            : "2px solid #1e3a5f",
                        borderRadius: px(s, 8),
                        padding: `${px(s, 6)} ${px(s, 3)}`,
                        cursor: "pointer",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      {theme === t && (
                        <div
                          style={{
                            position: "absolute",
                            top: px(s, 2),
                            right: px(s, 3),
                            fontSize: px(s, 10),
                          }}
                        >
                          ✅
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: px(s, 9),
                          color: "#fff",
                          fontWeight: 700,
                          marginTop: px(s, 12),
                        }}
                      >
                        {t}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gameplay options */}
            <div
              style={{
                fontSize: px(s, 12),
                fontWeight: 800,
                color: "#fbbf24",
                marginBottom: px(s, 8),
              }}
            >
              🎮 GAMEPLAY OPTIONS
            </div>

            {GAMEPLAY_OPTIONS.map((opt) => (
              <div
                key={opt.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: px(s, 10),
                  borderBottom: "1px solid #1e3a5f",
                  padding: `${px(s, 9)} 0`,
                }}
              >
                <span style={{ fontSize: px(s, 19), flexShrink: 0 }}>
                  {opt.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: px(s, 11),
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {opt.label}
                  </div>
                  <div style={{ fontSize: px(s, 9), color: "#64748b" }}>
                    {opt.desc}
                  </div>
                </div>
                <Toggle
                  on={toggles[opt.id] ?? false}
                  onToggle={() => flip(opt.id)}
                  s={s}
                />
              </div>
            ))}

            {/* Account actions */}
            <div
              style={{
                display: "flex",
                gap: px(s, 8),
                marginTop: px(s, 13),
                flexWrap: "wrap",
              }}
            >
              <Btn color="#1e6ef5" s={s}>
                Log Out
              </Btn>
              <Btn color="#f97316" s={s}>
                Reset Progress
              </Btn>
              <Btn color="#ef4444" s={s}>
                🗑️ Delete Account
              </Btn>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Right ── */}
      <div
        style={{
          width: px(s, 225),
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
          <CardHead color="#0d9488" icon="🔊" s={s}>
            AUDIO SETTINGS
          </CardHead>
          <div
            style={{
              padding: px(s, 10),
              display: "flex",
              flexDirection: "column",
              gap: px(s, 8),
            }}
          >
            {AUDIO_SLIDERS.map((a) => (
              <div key={a.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: px(s, 3),
                    fontSize: px(s, 10),
                    color: "#e2e8f0",
                  }}
                >
                  <span>{a.label}</span>
                  <span style={{ color: a.color, fontWeight: 700 }}>
                    {a.value}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={a.value}
                  style={{ width: "100%", accentColor: a.color }}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHead color="#1e6ef5" icon="🖥️" s={s}>
            DISPLAY SETTINGS
          </CardHead>
          <div
            style={{
              padding: px(s, 10),
              display: "flex",
              flexDirection: "column",
              gap: px(s, 8),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: px(s, 5),
              }}
            >
              <span style={{ fontSize: px(s, 10), color: "#e2e8f0" }}>
                Aa Text Size
              </span>
              <SizeSel
                opts={SIZE_OPTIONS}
                val={textSize}
                onChange={setTextSize}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: px(s, 5),
              }}
            >
              <span style={{ fontSize: px(s, 10), color: "#e2e8f0" }}>
                UI Size
              </span>
              <SizeSel
                opts={SIZE_OPTIONS}
                val={uiSize}
                onChange={setUiSize}
              />
            </div>

            {DISPLAY_TOGGLES.map(([id, label]) => (
              <div
                key={id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: px(s, 10), color: "#e2e8f0" }}>
                  {label}
                </span>
                <Toggle
                  on={toggles[id] ?? false}
                  onToggle={() => flip(id)}
                  s={s}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card glow="#fbbf24">
          <CardHead color="#f97316" icon="👨‍👩‍👧" s={s}>
            PARENT / TEACHER CONTROLS
          </CardHead>
          <div
            style={{
              padding: px(s, 10),
              display: "flex",
              gap: px(s, 9),
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: px(s, 10),
                  color: "#94a3b8",
                  marginBottom: px(s, 7),
                }}
              >
                Manage time limits, content filters, and more.
              </p>
              <Btn
                color="#1e6ef5"
                s={s}
                style={{ width: "100%", textAlign: "center" }}
              >
                Open Parent Dashboard
              </Btn>
            </div>
            <Owl size={44} s={s} />
          </div>
        </Card>
      </div>
    </div>
  );
};
