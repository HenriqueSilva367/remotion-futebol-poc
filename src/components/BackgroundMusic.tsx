import React from "react";
import { Audio, staticFile, Sequence } from "remotion";

type BackgroundMusicProps = {
  startAt: number; // Em frames
  volume?: number;
};

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  startAt,
  volume = 1,
}) => {
  return (
    <Sequence from={startAt}>
      <Audio src={staticFile("audios/music.mp3")} volume={volume} />
    </Sequence>
  );
};
