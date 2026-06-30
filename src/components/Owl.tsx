import React from "react";

interface Props {
  size?: number;
  msg?: string;
  s: number;
}

export const Owl: React.FC<Props> = ({ size = 48, msg, s }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: Math.round(4 * s) + "px",
    }}
  >
    <div
      style={{
        width: Math.round(size * s) + "px",
        height: Math.round(size * s) + "px",
        borderRadius: "50%",
        background: "linear-gradient(145deg,#1e3a5f,#0f1b2d)",
        border: "3px solid #fbbf24",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.55 * s) + "px",
        boxShadow: "0 0 14px #fbbf2455",
        flexShrink: 0,
      }}
    >
      🦉
    </div>
    {msg && (
      <div
        style={{
          background: "#1e3a5f",
          border: "2px solid #fbbf24",
          borderRadius: Math.round(9 * s) + "px",
          padding: `${Math.round(5 * s)}px ${Math.round(8 * s)}px`,
          fontSize: Math.round(10 * s) + "px",
          color: "#fde68a",
          maxWidth: Math.round(140 * s) + "px",
          textAlign: "center",
        }}
      >
        {msg}
      </div>
    )}
  </div>
);
