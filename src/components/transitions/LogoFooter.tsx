
import { Img, Sequence, staticFile } from 'remotion';

type LogoFooterEffect = {
  startFrame: number;
  durationInFrames: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};


export const LogoFooter: React.FC<LogoFooterEffect> = ({
  startFrame,
  durationInFrames,
  x = 100,
  y = 100,
  width = 200,
  height = 200,
}) => {
  return (
    <Sequence from={startFrame} durationInFrames={durationInFrames}>
      <Img
        src={staticFile('/image/MVP-HORIZONTAL.png')}
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


  