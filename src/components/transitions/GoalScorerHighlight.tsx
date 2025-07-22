import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

type GoalScorerHighlightProps = {
  gifPath: string; // Ex.: "gifs/player1.gif"
};

export const GoalScorerHighlight: React.FC<GoalScorerHighlightProps> = ({
  gifPath,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)", // fundo escurecido para dar destaque
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={staticFile(gifPath)}
        style={{
          width: 400,
          height: 400,
          borderRadius: 20,
          boxShadow: "0 0 20px white",
        }}
      />
    </AbsoluteFill>
  );
};
