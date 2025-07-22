import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { PauseableVideo } from '../Youtube/PauseableVideo';

type VideoSequencePlayerProps = {
  videoUrls: string[];
  durationInFramesPerVideo?: number;
  pauseAtFrame?: number;
  pauseDuration?: number;
  zoomStartFrame?: number;
  zoomEndFrame?: number;
};

export const VideoSequencePlayer: React.FC<VideoSequencePlayerProps> = ({
  videoUrls,
  zoomStartFrame = 30,
  zoomEndFrame = 90,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [zoomStartFrame, zoomEndFrame],
    [1, 2],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {videoUrls.map((videoUrl, index) => {
        return (
          <PauseableVideo
            src={videoUrl}
            pauseFrame={580}
            pauseDuration={45}
            totalDuration={4500}
            zoomStartFrame={100}
            zoomEndFrame={200}
          />
        );
      })}
    </AbsoluteFill>
  );
};
