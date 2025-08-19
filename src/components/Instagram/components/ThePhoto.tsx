import React from "react";
import { Img, Sequence, staticFile } from "remotion";

type ThePhotoProps = {
  src: string; 
  startAt: number; 
  durationInFrames: number; 
  x?: number; 
  y?: number; 
  width?: number; 
  height?: number; 
  opacity?: number; 
};

export const ThePhoto: React.FC<ThePhotoProps> = ({
  src,
  startAt,
  durationInFrames,
  x = 0,
  y = 0,
  width = 1080,
  height = 1920,
  opacity = 1,
}) => {
  return (
    <Sequence from={startAt} durationInFrames={durationInFrames}>
      <Img
        src={staticFile(src)}
        style={{
          position: "absolute",
          top: y,
          left: x,
          width,
          height,
          opacity,
          objectFit: "cover",
        }}
      />
    </Sequence>
  );
};
