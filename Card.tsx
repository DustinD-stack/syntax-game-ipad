import React from "react";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  glow?: string;
}

export const Card: React.FC<CardProps> = ({ children, style, glow }) => (
  <div
    style={{
      background: "linear-gradient(145deg,#162033,#0f1b2d)",
      border: "2px solid #1e3a5f",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: glow ? `0 0 18px ${glow}55` : "none",
      ...style,
    }}
  >
    {children}
  </div>
);

interface CardHeadProps {
  children: React.ReactNode;
  color?: string;
  icon?: string;
  s: number;
}

export const CardHead: React.FC<CardHeadProps> = ({
  children,
  color = "#1e6ef5",
  icon,
  s,
}) => (
  <div
    style={{
      background: `linear-gradient(90deg,${color},${color}bb)`,
      padding: `${Math.round(7 * s)}px ${Math.round(13 * s)}px`,
      fontWeight: 800,
      fontSize: Math.round(11 * s) + "px",
      color: "#fff",
      letterSpacing: 1,
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: Math.round(6 * s) + "px",
    }}
  >
    {icon && (
      <span style={{ fontSize: Math.round(13 * s) + "px" }}>{icon}</span>
    )}
    {children}
  </div>
);
