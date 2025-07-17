import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

type ConfettiParticle = {
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
};

const confettiColors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
  "#ffeb3b",
  "#ff9800",
];

const generateConfetti = (numConfetti: number): ConfettiParticle[] => {
  return Array.from({ length: numConfetti }).map(() => ({
    x: Math.random() * 1080,
    y: -Math.random() * 200,
    size: 10 + Math.random() * 10,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    rotation: Math.random() * 360,
    speed: 2 + Math.random() * 3,
  }));
};

export const Confetti: React.FC<{
  startFrame: number;
  durationInFrames: number;
  numConfetti?: number; // opcional, padrão 40
}> = ({ startFrame, durationInFrames, numConfetti = 400 }) => {
  const frameGlobal = useCurrentFrame();
  const localFrame = frameGlobal - startFrame;

  if (localFrame < 0 || localFrame > durationInFrames) {
    return null;
  }

  const confettis = React.useMemo(() => generateConfetti(numConfetti), [numConfetti]);

  // Opacidade para o fade out no final (últimos 30 frames)
  const opacity = interpolate(
    localFrame,
    [durationInFrames - 30, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "visible", backgroundColor: "transparent" }}>
      {confettis.map((c, i) => {
        const y = c.y + c.speed * localFrame;

        // Não renderiza confetes fora da tela (abaixo de 1080px vertical)
        if (y > 1080) {
          return null;
        }

        const rotation = (c.rotation + localFrame * 10) % 360;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: c.size,
              height: c.size * 0.4,
              backgroundColor: c.color,
              top: y,
              left: c.x,
              borderRadius: 3,
              transform: `rotate(${rotation}deg)`,
              opacity,
              willChange: "transform, opacity",
              filter: "drop-shadow(0 0 2px rgba(0,0,0,0.2))",
              zIndex: 1000,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
