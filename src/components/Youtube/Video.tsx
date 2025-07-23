import { IntroVideo } from "../VideoDefault/IntroVideo";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { YoutubeTemplate } from "./Youtube";
import { staticFile } from "remotion";
import { videoConfig } from "../../config/videoConfig";

import { PauseableVideo } from "./PauseableVideo";

export const Videos: React.FC = () => {
  const { intro, cover } = videoConfig.durations;

  const videoCutScenes = videoConfig.videoCuts.map((cut) => ({
    id: cut.id,
    component: (
      <PauseableVideo
        key={cut.id}
        src={staticFile(cut.src)}
        startFrom={cut.startFrom ?? 0}
        pauseFrame={cut.pause?.timelineFrame ?? 0}
        pauseDuration={cut.pause?.duration ?? 0}
        freezeFrame={cut.pause?.freezeFrame ?? 0}
        totalDuration={cut.durationInFrames}
        zoomStartFrame={cut.zoom?.startFrame ?? 0}
        zoomEndFrame={cut.zoom?.endFrame ?? (cut.zoom?.startFrame ?? 0) + 1} 
        zoomFrom={cut.zoom?.from ?? 1}
        zoomTo={cut.zoom?.to ?? 1}
      />
    ),
    durationInFrames: cut.durationInFrames,
  }));
  

  const scenes = [
    {
      id: "intro",
      component: <IntroVideo />,
      durationInFrames: intro,
    },
    {
      id: "cover",
      component: <CoverDefault />,
      durationInFrames: cover,
    },
    ...videoCutScenes,
  ];

  return (
    <YoutubeTemplate
      scenes={scenes}
      musicStartAtFrame={videoConfig.music.startFrame}
      coverStartFrame={videoConfig.cover.startFrame}
      coverDurationInFrames={videoConfig.cover.durationInFrames}
    />
  );
};