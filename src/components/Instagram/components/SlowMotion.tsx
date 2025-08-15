import React from 'react';
import { Video, useCurrentFrame } from 'remotion';

type SlowMotionVideoProps = {
  src: string;
  startFrom?: number;
  durationInFrames: number;
  slowStart: number;
  slowEnd: number;
  slowFactor: number;
  volume?: number;
  style?: React.CSSProperties;
};


export const SlowMotionVideo: React.FC<SlowMotionVideoProps> = ({
  src,
  startFrom = 0,
  durationInFrames,
  slowStart,
  slowEnd,
  slowFactor,
  volume = 1,
  style,
}) => {
  const frame = useCurrentFrame();

  if (frame >= slowStart && frame <= slowEnd) {
    return (
      <Video
        src={src}
        startFrom={startFrom + slowStart}
        playbackRate={slowFactor}
        volume={volume}
        style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
      />
    );
  }

  return (
    <Video
      src={src}
      startFrom={startFrom + frame}
      volume={volume}
      style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
    />
  );
};
