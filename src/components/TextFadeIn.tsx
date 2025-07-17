import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

type TextFadeInProps = {
  appearFrame: number;
  durationInFrames: number;
  text: string;
};

export const TextFadeIn: React.FC<TextFadeInProps> = ({ appearFrame, durationInFrames, text }) => {
  const frame = useCurrentFrame();

  const endFrame = appearFrame + durationInFrames;

  const opacity = interpolate(
    frame,
    [appearFrame, appearFrame + durationInFrames / 3, endFrame - durationInFrames / 3, endFrame],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (frame < appearFrame || frame > endFrame) {
    return null;
  }

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", pointerEvents: "none", opacity, zIndex: 101 }}>
      <div
        style={{
          fontSize: 100,
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          userSelect: "none",
          pointerEvents: "none",
          marginTop: 500,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
