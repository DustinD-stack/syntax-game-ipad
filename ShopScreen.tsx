import React, { useState } from "react";
import { Card, CardHead } from "../components/Card";
import { Btn } from "../components/Button";
import { SHOP_ITEMS, SHOP_TABS, BUNDLES } from "../data/shop";
import { px } from "../utils/scale";

interface Props { s: number }

export const ShopScreen: React.FC<Props> = ({ s }) => {
  const [tab, setTab] = useState("characters");

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
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        }}
      >
        <CardHead color="#f97316" icon="🛒" s={s}>
          SHOP
        </CardHead>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: px(s, 5),
            marginTop: px(s, 7),
          }}
        >
          {SHOP_TABS.map(([id, label, emoji]) => (
            <div
              key={id}
              onClick={() => setTab(id)}
              style={{
                padding: `${px(s, 7)} ${px(s, 9)}`,
                borderRadius: px(s, 8),
                cursor: "pointer",
                background: tab === id ? "#f9731622" : "#162033",
                color: tab === id ? "#fb923c" : "#94a3b8",
                fontWeight: tab === id ? 700 : 400,
                fontSize: px(s, 11),
                border: tab === id ? "2px solid #f97316" : "2px solid #1e3a5f",
                display: "flex",
                alignItems: "center",
                gap: px(s, 7),
                minHeight: "44px",
                touchAction: "manipulation",
              }}
            >
              {emoji} {label}
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#162033",
            border: "2px solid #1e3a5f",
            borderRadius: px(s, 9),
            padding: px(s, 9),
            textAlign: "center",
          }}
        >
          <div
            style={{ fontSize: px(s, 9), color: "#64748b", marginBottom: px(s, 4) }}
          >
            YOUR BALANCE
          </div>
          <div
            style={{ color: "#fbbf24", fontWeight: 700, fontSize: px(s, 13) }}
          >
            ⭐ 1,250
          </div>
          <div
            style={{ color: "#c084fc", fontWeight: 700, fontSize: px(s, 13) }}
          >
            💎 38
          </div>
        </div>

        <div
          style={{
            background: "#1e3a5f33",
            border: "2px dashed #1e6ef5",
            borderRadius: px(s, 8),
            padding: px(s, 9),
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: px(s, 20) }}>🎁</div>
          <div
            style={{
              fontSize: px(s, 10),
              fontWeight: 700,
              color: "#60a5fa",
            }}
          >
            Daily Freebie!
          </div>
          <div style={{ fontSize: px(s, 9), color: "#64748b" }}>
            Come back tomorrow
          </div>
        </div>
      </div>

      {/* ── Main area ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          padding: px(s, 13),
          background: "#0d1829",
        }}
      >
        <div
          style={{
            fontSize: px(s, 16),
            fontWeight: 800,
            color: "#fff",
            marginBottom: px(s, 4),
          }}
        >
          {SHOP_TABS.find((t) => t[0] === tab)?.[2]}{" "}
          {SHOP_TABS.find((t) => t[0] === tab)?.[1]?.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: px(s, 9),
            color: "#64748b",
            marginBottom: px(s, 12),
          }}
        >
          Educational game currency only  -- no real purchases needed
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: px(s, 10),
          }}
        >
          {(SHOP_ITEMS[tab] ?? []).map((item) => (
            <Card key={item.id} glow={item.owned ? "#16a34a" : undefined}>
              <div style={{ padding: px(s, 16), textAlign: "center" }}>
                <div
                  style={{
                    fontSize: px(s, 54),
                    marginBottom: px(s, 7),
                  }}
                >
                  {item.emoji}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: px(s, 13),
                    color: "#fff",
                    marginBottom: px(s, 7),
                  }}
                >
                  {item.name}
                </div>
                {item.owned ? (
                  <div
                    style={{
                      background: "#052e16",
                      border: "2px solid #16a34a",
                      borderRadius: px(s, 6),
                      padding: `${px(s, 4)} ${px(s, 11)}`,
                      color: "#4ade80",
                      fontSize: px(s, 11),
                      fontWeight: 700,
                    }}
                  >
                    ✅ Owned
                  </div>
                ) : (
                  <Btn color="#f97316" s={s}>
                    ⭐ {item.price}
                  </Btn>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bundles */}
        <div style={{ marginTop: px(s, 16) }}>
          <div
            style={{
              fontSize: px(s, 14),
              fontWeight: 800,
              color: "#fbbf24",
              marginBottom: px(s, 10),
            }}
          >
            🎁 BUNDLES
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: px(s, 9),
            }}
          >
            {BUNDLES.map((b) => (
              <Card key={b.name} glow={b.color}>
                <div
                  style={{
                    padding: px(s, 12),
                    display: "flex",
                    gap: px(s, 10),
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: px(s, 36) }}>{b.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: px(s, 12),
                      }}
                    >
                      {b.name}
                    </div>
                    <div style={{ fontSize: px(s, 9), color: "#94a3b8" }}>
                      {b.desc}
                    </div>
                  </div>
                  <Btn color={b.color} s={s}>
                    {b.price}
                  </Btn>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
