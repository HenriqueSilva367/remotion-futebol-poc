import { IntroVideo } from "../VideoDefault/IntroVideo";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { YoutubeTemplate } from "./Youtube";
// importe seu player
import { staticFile } from "remotion";
import { PauseableVideo } from "./PauseableVideo";

export const Videos: React.FC = () => {
  const introDuration = 196;
  const coverDuration = 90;
  const sequenceDuration = 4590; // duração do vídeo + pausa

  const scenes = [
    {
      id: "intro",
      component: <IntroVideo />,
      durationInFrames: introDuration,
    },
    {
      id: "cover",
      component: <CoverDefault />,
      durationInFrames: coverDuration,
    },
    {
      id: "sequence-player",
      component: (
        <PauseableVideo
          src={staticFile('/videos/gol.mp4')}
          pauseFrame={500}
          pauseDuration={45}
          totalDuration={4500}
          zoomStartFrame={100}
          zoomEndFrame={200}
        />

      ),
      durationInFrames: sequenceDuration, 
    },
  ];

  return (
    <YoutubeTemplate
      scenes={scenes}
      musicStartAtFrame={177}
      coverStartFrame={165}
      coverDurationInFrames={coverDuration}
    />
  );
};
