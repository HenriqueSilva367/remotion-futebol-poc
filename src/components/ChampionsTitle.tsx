import React from "react";
import { interpolate } from "remotion";

type ChampionsTitleProps = {
  frame: number;
  appearFrame: number;
  durationInFrames: number;
};

export const ChampionsTitle: React.FC<ChampionsTitleProps> = ({
  frame,
  appearFrame,
  durationInFrames,
}) => {
  const endFrame = appearFrame + durationInFrames;

  const opacity = interpolate(
    frame,
    [appearFrame, appearFrame + 15, endFrame - 15, endFrame],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (frame < appearFrame || frame > endFrame) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 250,
        width: "100%",
        textAlign: "center",
        fontSize: 120,
        fontWeight: "bold",
        color: "white",
        textShadow: "0 0 10px rgba(0,0,0,0.8)",
        opacity,
        pointerEvents: "none",
      }}
    >
      CHAMPIONS!
    </div>
  );
};
