// src/RemotionRoot.tsx

import { Composition } from "remotion";
import { MyComp } from "./components/MyComp";
import { JugglingCounter } from "./components/JugglingCounter";
import { FinalVideo } from "./components/FullVideo";

export const RemotionRoot: React.FC = () => {
  const totalFrames = 38160;

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
      id="Full-video"
      component={FinalVideo}
      durationInFrames={100 * 30} // 100 segundos * 30fps = 3000 frames
      fps={30}
      width={1080}
      height={1920}
    />
    </>
  );
};
