import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  s: number;
}

export const Btn: React.FC<Props> = ({
  children, onClick, color = "#1e6ef5", disabled = false, style, s,
}) => {
  const h = Math.max(Math.round(36 * s), 44); // min 44px touch target
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        background: disabled ? "#334155" : `linear-gradient(180deg,${color},${color}aa)`,
        border: `2px solid ${disabled ? "#475569" : color}`,
        borderBottom: `3px solid ${disabled ? "#1e293b" : color + "66"}`,
        borderRadius: Math.round(10 * s) + "px",
        color: disabled ? "#64748b" : "#fff",
        fontWeight: 700,
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: Math.max(Math.round(13 * s), 13) + "px",
        padding: `0 ${Math.round(16 * s)}px`,
        height: h + "px",
        minHeight: "44px",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
        fontFamily: "inherit",
        lineHeight: 1.2,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation",
        userSelect: "none",
        WebkitUserSelect: "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
