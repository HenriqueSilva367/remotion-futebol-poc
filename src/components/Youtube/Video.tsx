import { IntroVideo } from "../VideoDefault/IntroVideo";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { YoutubeTemplate } from "./Youtube";
import { Video, staticFile } from "remotion";
import { videoConfig } from "../../config/videoConfig";
import { ZoomEffect } from "../transitions/ZoomEffect";
import { PauseableVideo } from "./PauseableVideo";

export const Videos: React.FC = () => {
  const { intro, cover } = videoConfig.durations;

  const videoCutScenes = videoConfig.videoCuts.map((cut) => ({
    id: cut.id,
    component: (
      <PauseableVideo
        key={cut.id}
        src={staticFile(cut.src)}
        pauseFrame={cut.pause?.timelineFrame ?? 0}        // pega do config, ou 0 se não existir
        pauseDuration={cut.pause?.duration ?? 60}          // idem
        freezeFrame={cut.pause?.freezeFrame ?? 0}          // idem
        totalDuration={cut.durationInFrames}
        zoomStartFrame={videoConfig.zoom.startFrame}
        zoomEndFrame={videoConfig.zoom.endFrame}
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
