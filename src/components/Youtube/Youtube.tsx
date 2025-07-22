import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { FadeTransition } from "../transitions/FadeTransition";
import { CoverDefault } from "../VideoDefault/CoverDefault";

type Scene = {
  id: string;
  component: React.ReactNode;
  durationInFrames: number;
};

type YoutubeTemplateProps = {
  scenes: Scene[];
  musicStartAtFrame: number;
  coverStartFrame: number;
  coverDurationInFrames: number;
};

export const YoutubeTemplate: React.FC<YoutubeTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  coverStartFrame,
  coverDurationInFrames,
}) => {
  let fromFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {scenes.map((scene) => {
        const startAt = fromFrame;
        fromFrame += scene.durationInFrames;

        return (
          <Sequence
            key={scene.id}
            from={startAt}
            durationInFrames={scene.durationInFrames}
          >
            <FadeTransition durationInFrames={20}>
              {scene.component}
            </FadeTransition>
          </Sequence>
        );
      })}

      {/* Capa sobreposta antes do final da intro */}
      <Sequence from={coverStartFrame} durationInFrames={coverDurationInFrames}>
        <CoverDefault />
      </Sequence>

      {/* Música sincronizada com a capa */}
      <Sequence from={musicStartAtFrame}>
        <Audio src={staticFile("audios/music.mp3")} volume={0.8} />
      </Sequence>
    </AbsoluteFill>
  );
};
