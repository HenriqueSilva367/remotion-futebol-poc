import { AbsoluteFill, staticFile } from 'remotion';
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
  durationInFramesPerVideo = 4500,
  pauseAtFrame = 270,
  pauseDuration = 45,
  zoomStartFrame = 100,
  zoomEndFrame = 200,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {videoUrls.map((videoUrl, index) => {
        // Se já começa com /static-, assume que está resolvido
        const resolvedSrc = videoUrl.startsWith('/static-') ? videoUrl : staticFile(videoUrl);

        return (
          <PauseableVideo
            key={index}
            src={resolvedSrc}
            pauseFrame={pauseAtFrame}
            pauseDuration={pauseDuration}
            totalDuration={durationInFramesPerVideo}
            zoomStartFrame={zoomStartFrame}
            zoomEndFrame={zoomEndFrame}
            freezeFrame={0}
            timelineStartFrame={0}
          />
        );
      })}
    </AbsoluteFill>
  );
};
