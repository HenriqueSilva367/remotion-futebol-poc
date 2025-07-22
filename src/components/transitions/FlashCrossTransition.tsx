import React from "react";
import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";

type CoverRevealProps = {
  durationInFrames: number;
  children: React.ReactNode;
};

export const CoverReveal: React.FC<CoverRevealProps> = ({
  durationInFrames,
  children,
}) => {
  const frame = useCurrentFrame();

  // Progresso suave da animação usando spring (mais natural)
  const progress = spring({
    frame,
    fps: 30,
    config: {
      damping: 15,
      stiffness: 200,
    },
    durationInFrames,
  });

  // Opacidade vai de 0 para 1 conforme o progresso
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  // Rotação vai de 360 graus para 0 (giro rápido invertido até posição normal)
  const rotation = interpolate(progress, [0, 1], [360, 0]);

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
