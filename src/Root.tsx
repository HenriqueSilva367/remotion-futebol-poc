// src/RemotionRoot.tsx

import { Composition } from "remotion";
import { MyComp } from "./components/MyComp";
import { FinalVideo } from "./components/FullVideo";
import { IntroVideo } from "./components/VideoDefault/IntroVideo";
import { CoverDefault } from "./components/VideoDefault/CoverDefault";
import { Videos } from "./components/Youtube/Video";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InstagramVideo"
        component={MyComp}
        durationInFrames={300} // 10 segundos a 30fps
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      {/* 
      <Composition
        id="Embaixadinhas"
        component={JugglingCounter} 
        durationInFrames={300 * 60} // 10 segundos
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          totalJuggles: 15, // Total de embaixadinhas
        }}
      /> */}

      <Composition
        id="IntroVideo"
        component={IntroVideo}
        durationInFrames={100 * 30} // duração da intro (6 segundos a 30fps)
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoFileName: "/videos/intro.mp4", // arquivo colocado em /public
          backgroundColor: "#000000",
          muted: false, // áudio da intro habilitado
        }}
      />

      <Composition
        id="Full-video"
        component={FinalVideo}
        durationInFrames={100 * 30} // 100 segundos * 30fps = 3000 frames
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="CoverDefault"
        component={CoverDefault}
        durationInFrames={100 * 4}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="YoutubeTemplate"
        component={Videos}
        durationInFrames={100 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
