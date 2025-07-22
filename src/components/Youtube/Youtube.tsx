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

import { buildTimeline } from '../../utils/buildTimeline';

export const YoutubeTemplate: React.FC<YoutubeTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  coverStartFrame,
  coverDurationInFrames,
}) => {
  const timeline = buildTimeline(scenes);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
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

      <Sequence from={coverStartFrame} durationInFrames={coverDurationInFrames}>
        <CoverDefault />
      </Sequence>

      <Sequence from={musicStartAtFrame}>
        <Audio src={staticFile("audios/music.mp3")} volume={0.8} />
      </Sequence>
    </AbsoluteFill>
  );
};

