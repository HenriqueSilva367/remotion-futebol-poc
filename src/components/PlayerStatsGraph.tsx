import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

type PlayerStatsPanelProps = {
  playerName: string;
  goals: number;
  isTopScorer: boolean;
  height: number;       // altura em cm
  weight: number;       // peso em kg
  position: string;     // posição do jogador
  age: number;          // idade
  appearFrame: number;
  durationInFrames: number;
};

export const PlayerStatsPanel: React.FC<PlayerStatsPanelProps> = ({
  playerName,
  goals,
  isTopScorer,
  height,
  weight,
  position,
  age,
  appearFrame,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
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
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        pointerEvents: "none",
        padding: 10,
        opacity,
        zIndex: 20, // Mantém sobre o vídeo
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 20,
          padding: "30px 60px",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: 40,
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 20 }}>{playerName}</div>
        <div style={{ fontSize: 30, color: "#f8e71c", marginBottom: 20 }}>
          {isTopScorer ? "⚽️ Artilheiro da Temporada" : "Jogador em Destaque"}
        </div>

        <div style={{ textAlign: "left", fontSize: 35 }}>
          <div>⚽️ - Gols na temporada: <strong>{goals}</strong></div>
          <br/>
          <div>📏 - Altura: <strong>{height} cm</strong></div>
          <br/>
          <div>⚖️ - Peso: <strong>{weight} kg</strong></div>
          <br/>
          <div>🎽 - Posição: <strong>{position}</strong></div>
          <br/>
          <div>🎂 - Idade: <strong>{age} anos</strong></div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
