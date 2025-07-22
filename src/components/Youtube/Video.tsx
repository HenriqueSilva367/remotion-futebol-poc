import { IntroVideo } from "../VideoDefault/IntroVideo";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { YoutubeTemplate } from "./Youtube";

export const Videos: React.FC = () => {
  const introDuration = 196; // frames
  const coverDuration = 90;

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
  ];

  return (
    <YoutubeTemplate
      scenes={scenes}
      musicStartAtFrame={177} // Música entra com a capa
      coverStartFrame={165} // Capa entra 12 frames antes do final da intro
      coverDurationInFrames={90} // Ou o tempo que desejar
    />
  );
};
