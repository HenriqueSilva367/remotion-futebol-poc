import React from "react";
import { AbsoluteFill } from "remotion";

type GameScoreboardProps = {
  leftTeamName: string;
  rightTeamName: string;
  leftTeamScore: number;
  rightTeamScore: number;
};

export const GameScoreboard: React.FC<GameScoreboardProps> = ({
  leftTeamName,
  rightTeamName,
  leftTeamScore,
  rightTeamScore,
}) => {
  return (
    <AbsoluteFill
      style={{
        padding: 30,
        alignItems: "center",
        pointerEvents: "none", // não interfere nos cliques
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: 20,
          padding: "10px 30px",
          fontFamily: "Arial, sans-serif",
          fontSize: 60,
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        {/* Time Esquerda */}
        <div style={{ marginRight: 20, display: "flex", alignItems: "center" }}>
          <span>{leftTeamName}</span>
          <span
            style={{
              marginLeft: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              padding: "5px 15px",
            }}
          >
            {leftTeamScore}
          </span>
        </div>

        {/* Separador */}
        <div style={{ margin: "0 20px", fontSize: 50 }}>X</div>

        {/* Time Direita */}
        <div style={{ marginLeft: 20, display: "flex", alignItems: "center" }}>
          <span>{rightTeamName}</span>
          <span
            style={{
              marginLeft: 10,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              padding: "5px 15px",
            }}
          >
            {rightTeamScore}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
