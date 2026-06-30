import React from "react";

interface Props { s: number }

export const Logo: React.FC<Props> = ({ s }) => (
  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, flexShrink: 0 }}>
    <div
      style={{
        fontSize: Math.round(26 * s) + "px",
        fontWeight: 900,
        letterSpacing: -1,
        fontFamily: "Georgia, serif",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#ff6b6b" }}>S</span>
      <span style={{ color: "#ffd93d" }}>Y</span>
      <span style={{ color: "#6bcb77" }}>N</span>
      <span style={{ color: "#4d96ff" }}>T</span>
      <span style={{ color: "#ff6b6b" }}>A</span>
      <span style={{ color: "#c77dff" }}>X</span>
    </div>
    <div style={{ fontSize: Math.round(8 * s) + "px", color: "#94a3b8" }}>
      Build Words. Build Sentences. Build Confidence.
    </div>
  </div>
);
