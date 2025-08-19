import React from "react";
import {
  Audio,
  staticFile,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";

type TheSoundCameraProps = {
  src: string;
  startAt: number;
  durationInFrames: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  useFade?: boolean;
  maxVolume?: number;
};

export const TheSoundCamera: React.FC<TheSoundCameraProps> = ({
  src,
  startAt,
  durationInFrames,
  fadeInDuration = 30,
  fadeOutDuration = 30,
  useFade = true,
  maxVolume = 1,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startAt;

  const volume = useFade
    ? interpolate(
        relativeFrame,
        [0, fadeInDuration, durationInFrames - fadeOutDuration, durationInFrames],
        [0, maxVolume, maxVolume, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : maxVolume;

  return (
    <Sequence from={startAt} durationInFrames={durationInFrames}>
      <Audio src={staticFile(src)} volume={volume} />
    </Sequence>
  );
};
