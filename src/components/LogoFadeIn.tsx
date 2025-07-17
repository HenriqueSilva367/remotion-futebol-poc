import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, Img } from "remotion";

type LogoFadeInProps = {
  appearFrame: number;
  durationInFrames: number;
};

export const LogoFadeIn: React.FC<LogoFadeInProps> = ({ appearFrame, durationInFrames }) => {
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
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", pointerEvents: "none", opacity, zIndex: 100 }}>
      <Img
        src={staticFile("/image/logo.png")}
        style={{
          width: 700,
          height: "auto",
          marginTop: 50,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
