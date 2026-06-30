import React from "react";

interface Props {
  on: boolean;
  onToggle: () => void;
  s: number;
}

export const Toggle: React.FC<Props> = ({ on, onToggle, s }) => {
  const w = Math.max(Math.round(48 * s), 48);
  const h = Math.max(Math.round(26 * s), 26);
  const dot = Math.round(h * 0.65);
  const pad = Math.round((h - dot) / 2);

  return (
    // Wrapper gives a 44px touch target even if the visual is smaller
    <div
      onClick={onToggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "44px",
        minHeight: "44px",
        cursor: "pointer",
        touchAction: "manipulation",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: w + "px",
          height: h + "px",
          borderRadius: h + "px",
          background: on ? "#16a34a" : "#334155",
          border: `2px solid ${on ? "#22c55e" : "#475569"}`,
          position: "relative",
          transition: "all 0.2s",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: pad + "px",
            left: on ? w - dot - pad + "px" : pad + "px",
            width: dot + "px",
            height: dot + "px",
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s",
            boxShadow: "0 1px 4px #00000044",
          }}
        />
      </div>
    </div>
  );
};
