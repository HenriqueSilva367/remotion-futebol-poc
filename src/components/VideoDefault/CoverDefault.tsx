import React from "react";
import { useCurrentFrame, interpolate, Img, staticFile } from "remotion";

export const CoverDefault: React.FC = () => {
  const frame = useCurrentFrame();
  const durationInFrames = 45; // 1,5 segundos

  // Fade-in
  const opacity = interpolate(frame, [0, durationInFrames / 2], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Giro rápido (2 voltas completas = 720°)
  const rotation = interpolate(frame, [0, durationInFrames], [0, 720], {
    extrapolateRight: "clamp",
  });

  return (
    <Img
      src={staticFile("/image/Bruno_souza.png")}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        display: "block",
        margin: "0 auto",
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
};
