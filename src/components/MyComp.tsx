import React from "react";
import { OffthreadVideo, staticFile } from "remotion";

export const MyComp: React.FC = () => {
  return (
    <OffthreadVideo
      src={staticFile("/videos/penalt.mp4")}
      style={{
        width: 1080,
        height: 1920,
        objectFit: "cover",
      }}
    />
  );
};
