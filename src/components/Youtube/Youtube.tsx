import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { FadeTransition } from "../transitions/FadeTransition";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { VideosSequence } from "../VideoDefault/VideosSequence";

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

// Dentro do YoutubeTemplate:
export const YoutubeTemplate: React.FC<YoutubeTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  coverStartFrame,
  coverDurationInFrames,
}) => {
  let fromFrame = 0;

  // soma total dos frames das cenas já passadas
  scenes.forEach((scene) => {
    fromFrame += scene.durationInFrames;
  });

  // Exemplo dos vídeos que você quer passar para sequência
  const videosToPlay = [
    { id: "vid1", src: "/videos/10.mp4", durationInFrames: 90 },
    { id: "vid2", src: "/videos/05.mp4", durationInFrames: 120 },
    { id: "vid3", src: "/videos/03.mp4", durationInFrames: 80 },
  ];

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

      {/* Capa */}
      <Sequence from={coverStartFrame} durationInFrames={coverDurationInFrames}>
        <CoverDefault />
      </Sequence>

      {/* Sequência de vídeos logo após a capa */}
      <Sequence from={coverStartFrame + coverDurationInFrames}>
        <VideosSequence videos={videosToPlay} fadeDurationInFrames={20} />
      </Sequence>

      {/* Música sincronizada com a capa */}
      <Sequence from={musicStartAtFrame}>
        <Audio src={staticFile("audios/music.mp3")} volume={0.8} />
      </Sequence>
    </AbsoluteFill>
  );
};
