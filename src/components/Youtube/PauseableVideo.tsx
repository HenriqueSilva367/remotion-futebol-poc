import { Sequence, AbsoluteFill, Video, Freeze } from 'remotion';
import { ZoomEffect } from '../transitions/ZoomEffect';

type SplitVideoWithPauseProps = {
  src: string;
  pauseFrame?: number;
  pauseDuration?: number;
  startFrom?: number;
  freezeFrame?: number;
  totalDuration?: number;
  zoomStartFrame?: number;
  zoomEndFrame?: number;
  zoomFrom?: number;
  zoomTo?: number;
  zoomPauseFrom?: number;
  zoomPauseTo?: number;
  pauseEffect?: string;
};

export const PauseableVideo: React.FC<SplitVideoWithPauseProps> = ({
  src,
  pauseFrame = 0,
  pauseDuration = 0,
  startFrom = 0,
  freezeFrame = 0,
  zoomStartFrame,
  zoomEndFrame,
  zoomFrom = 1,
  zoomTo = 1,
  zoomPauseFrom = 1,
  zoomPauseTo = 1,
}) => {
  const hasZoom = zoomStartFrame !== undefined && zoomEndFrame !== undefined && zoomFrom !== zoomTo;

  return (
    <AbsoluteFill style={{ position: 'relative' }}>
      {/* Vídeo principal com zoom animado (se configurado) */}
      {hasZoom ? (
        <ZoomEffect
          zoomStartFrame={zoomStartFrame!}
          zoomEndFrame={zoomEndFrame!}
          zoomFrom={zoomFrom}
          zoomTo={zoomTo}
          startFrom={startFrom}
        >
          <Video
            src={src}
            startFrom={startFrom}
            volume={0}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ZoomEffect>
      ) : (
        <Video
          src={src}
          startFrom={startFrom}
          volume={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* Pausa congelada com zoom fixo, se configurado */}
      {pauseDuration > 0 && (
        <Sequence from={pauseFrame} durationInFrames={pauseDuration}>
          <Freeze frame={freezeFrame}>
            <div
              style={{
                width: `${zoomPauseTo * 100}%`,
                height: `${zoomPauseTo * 100}%`,
                transformOrigin: 'center',
                position: 'absolute',
                top: `${-(zoomPauseTo - 1) * 50}%`,
                left: `${-(zoomPauseTo - 1) * 50}%`,
              }}
            >
              <Video
                src={src}
                startFrom={freezeFrame}
                volume={0}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Freeze>
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
