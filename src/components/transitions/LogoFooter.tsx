import React from "react";
import { Img, staticFile } from "remotion";

type LogoProps = {
  width?: number;
  height?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export const Logo: React.FC<LogoProps> = ({
  width = 150,
  height = 150,
  position = "top-right",
}) => {
  const positionStyles: Record<string, React.CSSProperties> = {
    "top-left": { top: 20, left: 20 },
    "top-right": { top: 20, right: 20 },
    "bottom-left": { bottom: 20, left: 20 },
    "bottom-right": { bottom: 20, right: 20 },
  };

  return (
    <Img
      src={staticFile("/image/MVP-HORIZONTAL.png")}
      style={{
        position: "absolute",
        width,
        height,
        ...positionStyles[position],
      }}
    />
  );
};
