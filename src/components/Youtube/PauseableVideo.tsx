import { Sequence, AbsoluteFill, Video, Freeze } from 'remotion';
import { ZoomEffect } from '../transitions/ZoomEffect';

type SplitVideoWithPauseProps = {
  src: string;
  pauseFrame: number;
  pauseDuration: number;
  startFrom: number;
  freezeFrame: number;
  totalDuration: number;
  zoomStartFrame: number;
  zoomEndFrame: number;
  zoomFrom: number;
  zoomTo: number;
};


export const PauseableVideo: React.FC<SplitVideoWithPauseProps> = ({
  src,
  pauseFrame,
  pauseDuration,
  startFrom,
  freezeFrame,
  zoomStartFrame,
  zoomEndFrame,
  zoomFrom,
  zoomTo
}) => {
  return (
    <AbsoluteFill style={{ position: 'relative' }}>
      {/* Vídeo normal com zoom animado */}
      <ZoomEffect
        zoomStartFrame={zoomStartFrame}
        zoomEndFrame={zoomEndFrame}
        zoomFrom={zoomFrom}
        zoomTo={zoomTo}
      >

        <Video
          src={src}
          startFrom={startFrom}
          volume={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ZoomEffect>

      {/* Pausa congelada com o mesmo zoom aplicado */}
      {pauseDuration > 0 && (
        <Sequence from={pauseFrame} durationInFrames={pauseDuration}>
         <ZoomEffect
            zoomStartFrame={zoomStartFrame}
            zoomEndFrame={zoomEndFrame}
            zoomFrom={zoomFrom}
            zoomTo={zoomTo}
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
      )}
    </AbsoluteFill>
  );
};
