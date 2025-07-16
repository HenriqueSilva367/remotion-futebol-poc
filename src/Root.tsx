// src/RemotionRoot.tsx

import { Composition } from "remotion";
import { MyComp } from "./components/MyComp";
import { JugglingCounter } from "./components/JugglingCounter";

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

      <Composition
        id="Embaixadinhas"
        component={JugglingCounter}
        durationInFrames={30 * 10} // 10 segundos
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          totalJuggles: 15, // Total de embaixadinhas
        }}
      />
    </>
  );
};
