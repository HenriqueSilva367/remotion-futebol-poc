// src/components/transitions/GifEffect.tsx
import { Gif } from '@remotion/gif';
import { Sequence, staticFile } from 'remotion';

type GifEffectProps = {
  startFrame: number;
  durationInFrames: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export const GifEffect: React.FC<GifEffectProps> = ({
  startFrame,
  durationInFrames,
  x = 100,
  y = 100,
  width = 200,
  height = 200,
}) => {
  return (
    <Sequence from={startFrame} durationInFrames={durationInFrames}>
      <Gif
        src={staticFile('image/marcacao.gif')}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          pointerEvents: 'none',
        }}
      />
    </Sequence>
  );
};
