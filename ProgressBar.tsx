import React from "react";
import { px } from "../utils/scale";

interface Props {
  pct: number;
  color?: string;
  h?: number;
  s: number;
}

export const ProgressBar: React.FC<Props> = ({
  pct,
  color = "#16a34a",
  h = 8,
  s,
}) => (
  <div
    style={{
      background: "#1e293b",
      borderRadius: px(s, h),
      height: px(s, h),
      overflow: "hidden",
      width: "100%",
    }}
  >
    <div
      style={{
        width: `${Math.min(Math.max(pct, 0), 100)}%`,
        height: "100%",
        background: color,
        borderRadius: px(s, h),
        transition: "width 0.4s",
      }}
    />
  </div>
);
