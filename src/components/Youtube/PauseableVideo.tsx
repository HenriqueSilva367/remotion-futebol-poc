import { Sequence, AbsoluteFill, Video, Freeze } from 'remotion';
import { ZoomEffect } from '../transitions/ZoomEffect';

type SplitVideoWithPauseProps = {
  src: string;
  pauseFrame: number;
  pauseDuration: number;
  freezeFrame: number;
  totalDuration: number;
  zoomStartFrame: number;
  zoomEndFrame: number;
};

export const PauseableVideo: React.FC<SplitVideoWithPauseProps> = ({
  src,
  pauseFrame,
  pauseDuration,
  freezeFrame,
  totalDuration,
  zoomStartFrame,
  zoomEndFrame,
}) => {
  return (
    <AbsoluteFill style={{ position: 'relative' }}>
      <ZoomEffect
        zoomStartFrame={zoomStartFrame}
        zoomEndFrame={zoomEndFrame}
        zoomFrom={1}
        zoomTo={2}
      >
        <Video
          src={src}
          volume={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ZoomEffect>

      <Sequence from={pauseFrame} durationInFrames={pauseDuration}>
        <ZoomEffect
          zoomStartFrame={zoomStartFrame}
          zoomEndFrame={zoomEndFrame}
          zoomFrom={1}
          zoomTo={2}
        >
          <Freeze frame={freezeFrame}>
          <Video
              src={src}
              startFrom={freezeFrame}
              volume={0}
              onError={(error) => {
                console.error('Erro no vídeo Freeze:', error);
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

          </Freeze>
        </ZoomEffect>
      </Sequence>
    </AbsoluteFill>
  );
};
