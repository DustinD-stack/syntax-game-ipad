import React from "react";
import { useScale, px } from "./utils/scale";
import { TopBar } from "./components/TopBar";
import { BottomNav } from "./components/BottomNav";
import { ProgressBar } from "./components/ProgressBar";
import { PLAYER } from "./data/player";

import { MapScreen }      from "./screens/MapScreen";
import { MissionsScreen } from "./screens/MissionsScreen";
import { BuildScreen }    from "./screens/BuildScreen";
import { LabScreen }      from "./screens/LabScreen";
import { StoryScreen }    from "./screens/StoryScreen";
import { WordLabScreen }  from "./screens/WordLabScreen";
import { ProgressScreen } from "./screens/ProgressScreen";
import { RewardsScreen }  from "./screens/RewardsScreen";
import { ShopScreen }     from "./screens/ShopScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

type ScreenName =
  | "map" | "missions" | "build" | "lab" | "story"
  | "wordlab" | "progress" | "rewards" | "shop" | "settings";

export default function App() {
  const s = useScale();
  const [screen, setScreen] = React.useState<ScreenName>("map");
  const navigate = (name: string) => setScreen(name as ScreenName);

  const renderScreen = () => {
    switch (screen) {
      case "map":      return <MapScreen      setScreen={navigate} s={s} />;
      case "missions": return <MissionsScreen setScreen={navigate} s={s} />;
      case "build":    return <BuildScreen    s={s} />;
      case "lab":      return <LabScreen      s={s} />;
      case "story":    return <StoryScreen    s={s} />;
      case "wordlab":  return <WordLabScreen  s={s} />;
      case "progress": return <ProgressScreen s={s} />;
      case "rewards":  return <RewardsScreen  s={s} />;
      case "shop":     return <ShopScreen     s={s} />;
      case "settings": return <SettingsScreen s={s} />;
      default:         return <MapScreen      setScreen={navigate} s={s} />;
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        /* Use dvh on modern iOS so the bottom bar does not clip content */
        height: "100dvh" as React.CSSProperties["height"],
        background: "#070e1a",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        color: "#fff",
        /* Pad for notch/home indicator */
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)",
      }}
    >
      <TopBar screen={screen} setScreen={navigate} s={s} />

      {/* XP subbar */}
      <div
        style={{
          background: "#0a1420",
          padding: `${px(s, 3)} ${px(s, 14)}`,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: px(s, 8),
          flexShrink: 0,
          borderBottom: "1px solid #1e3a5f",
        }}
      >
        <span style={{ fontSize: px(s, 9), color: "#64748b" }}>
          {PLAYER.xp} / {PLAYER.xpMax} XP
        </span>
        <div style={{ width: px(s, 120) }}>
          <ProgressBar
            pct={(PLAYER.xp / PLAYER.xpMax) * 100}
            color="#60a5fa"
            h={4}
            s={s}
          />
        </div>
      </div>

      {/* Screen area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {renderScreen()}
      </div>

      <BottomNav screen={screen} setScreen={navigate} s={s} />
    </div>
  );
}
