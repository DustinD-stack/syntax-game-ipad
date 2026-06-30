import { useState, useEffect } from "react";

/**
 * Responsive scale hook for SYNTAX.
 *
 * Base design: 1280 × 800  (iPad Air landscape / laptop)
 * Clamps: min 0.72 (portrait phone)  max 1.35 (large desktop)
 *
 * iPad breakpoints:
 *   iPad Mini  landscape : 1024×768  → scale ≈ 0.96
 *   iPad Air   landscape : 1180×820  → scale ≈ 1.00
 *   iPad Pro   landscape : 1366×1024 → scale ≈ 1.07
 *   iPad Air   portrait  :  820×1180 → scale ≈ 0.94  (width-limited)
 */
export function useScale(): number {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const sw = window.innerWidth;
      const sh = window.innerHeight;
      const baseW = 1280;
      const baseH = 800;

      // Fit both dimensions; width usually governs on landscape iPad
      const fitScale = Math.min(sw / baseW, sh / baseH);

      // Tablet-first floor: 0.92 keeps everything readable on iPad Mini
      const readableScale = Math.max(0.92, Math.min(fitScale, 1.35));
      setScale(readableScale);
    };

    update();

    // Listen to both resize and orientationchange for iPad rotation
    const handleOrientationChange = () => {
      setTimeout(update, 120); // slight delay so browser reports new dims
    };

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return scale;
}

/** Convert a base-design pixel value to a scaled CSS pixel string. */
export function px(scale: number, n: number): string {
  return Math.round(n * scale) + "px";
}

/** Minimum touch-target helper  -- returns the larger of scaled value or 44px. */
export function touchPx(scale: number, n: number): string {
  return Math.max(Math.round(n * scale), 44) + "px";
}
