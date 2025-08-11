import { Video } from 'remotion';
import { resolveAssetPath } from '../../config/resolveAssetPath';
import { InstagramTemplate } from './instagram';
import { videoConfigInsta } from '../../config/videoConfigInsta';
import { CustomText } from './components/CustomText';

export const VideosInstagram: React.FC = () => {
  const videoCutScenes = videoConfigInsta.videoCuts.map((cut) => {
    const offsetX = cut.position?.offsetX ?? 0;
    const offsetY = cut.position?.offsetY ?? 0;
    return {
      id: cut.id,
      component: (
        <Video
          key={cut.id}
          src={resolveAssetPath(cut.src)}
          startFrom={cut.startFrom ?? 0}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
        />
      ),
      durationInFrames: cut.durationInFrames,
    };
  });

  const textScenes = (videoConfigInsta.texts || []).map((txt) => ({
    id: 'intro-text',
  component: (
    <CustomText
      text="What happens on the field, stays in history!"
      durationInFrames={80}
      fontSize={90}
      color="#FFFFFF"
    />
  ),
  durationInFrames: 90,
  }));

  const scenes = [
    ...textScenes,
    ...videoCutScenes,
  ];

  return (
    <InstagramTemplate
      scenes={scenes}
      musicStartAtFrame={videoConfigInsta.music.startFrame}
      musicDuration={videoConfigInsta.music.musicDuration}
      coverStartFrame={0}
      coverDurationInFrames={0}
    />
  );
};
