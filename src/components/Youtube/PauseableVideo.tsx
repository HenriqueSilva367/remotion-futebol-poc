import { Sequence, AbsoluteFill, Video, useCurrentFrame, interpolate, Freeze } from 'remotion';

type SplitVideoWithPauseProps = {
  src: string;
  pauseFrame: number;
  pauseDuration: number;
  totalDuration: number;
  zoomStartFrame: number;
  zoomEndFrame: number;
};


export const PauseableVideo: React.FC<SplitVideoWithPauseProps> = ({
  src,
  pauseFrame,
  pauseDuration,
  totalDuration,
  zoomStartFrame,
  zoomEndFrame,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [zoomStartFrame, zoomEndFrame],
    [1, 2],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transform: `scale(${scale})`,
    transformOrigin: 'center center',
  };

  return (
    <AbsoluteFill style={{ position: 'relative' }}>
      {/* Vídeo contínuo */}
      <Video
        src={src}
        volume={0}
        style={videoStyle}
      />

      {/* Sequence que aparece no timeline */}
      <Sequence from={170} durationInFrames={100} name="Pausa Visual">
        <Freeze frame={202}>
          <Video
            src={src}
            volume={0}
            startFrom={230}     // Força o vídeo a começar no frame 202 interno
            style={videoStyle}
          />
        </Freeze>
      </Sequence>

    </AbsoluteFill>
  );
};
