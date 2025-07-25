import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { FadeTransition } from "../transitions/FadeTransition";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { GifEffect } from "../transitions/GifEffect"; // named export

import { buildTimeline } from "../../utils/buildTimeline";
import { videoConfig } from "../../config/videoConfig"; // importa config

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
  const timeline = buildTimeline(scenes);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* SCENES */}
      {timeline.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.from}
          durationInFrames={scene.durationInFrames}
        >
          <FadeTransition durationInFrames={20}>
            {scene.component}
          </FadeTransition>
        </Sequence>
      ))}

      {/* COVER */}
      <Sequence from={coverStartFrame} durationInFrames={coverDurationInFrames}>
        <CoverDefault />
      </Sequence>

      {/* AUDIO */}
      <Sequence from={musicStartAtFrame}>
        <Audio src={staticFile("audios/music.mp3")} volume={0.8} />
      </Sequence>

      {/* EFEITOS GIF DINÂMICOS */}
      {videoConfig.gifEffects?.map((effect, i) => (
        <GifEffect key={i} {...effect} />
      ))}

    </AbsoluteFill>
  );
};
