import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  spring,
  interpolate,
} from "remotion";

export const JugglingCounter: React.FC<{
  totalJuggles: number;
}> = ({ totalJuggles }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const count = Math.min(
    Math.floor((frame / durationInFrames) * totalJuggles),
    totalJuggles,
  );

  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 200,
    },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <OffthreadVideo
        src={staticFile("/videos/embaixadinha.mp4")}
        style={{
          width: 1080,
          height: 1920,
          objectFit: "cover",
          border: "10px solid white",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.7)",
          opacity,
          transform: `scale(${scale})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 100,
          fontSize: 150,
          color: "yellow",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 20,
          borderRadius: 20,
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        {count}
      </div>
    </AbsoluteFill>
  );
};
