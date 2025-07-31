import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { CoverDefault } from "../VideoDefault/CoverDefault";
import { GifEffect } from "../transitions/GifEffect"; // named export

import { buildTimeline } from "../../utils/buildTimeline";
import { videoConfig } from "../../config/videoConfig"; // importa config
import { LogoFooter } from "../transitions/LogoFooter";
import { BackgroundMusic } from "../BackgroundMusic";

type Scene = {
  id: string;
  component: React.ReactNode;
  durationInFrames: number;
};

type LogoFooterEffect = {
  startFrame: number;
  durationInFrames: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};


type YoutubeTemplateProps = {
  scenes: Scene[];
  musicStartAtFrame: number;
  musicDuration: number;
  coverStartFrame: number;
  coverDurationInFrames: number;
};

export const YoutubeTemplate: React.FC<YoutubeTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  musicDuration,
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
          {scene.component}
        </Sequence>
      ))}


      {/* COVER */}
      <Sequence from={coverStartFrame} durationInFrames={coverDurationInFrames}>
        <CoverDefault />
      </Sequence>

      {/* AUDIO */}
      <Sequence from={musicStartAtFrame} durationInFrames={musicDuration}>
        <BackgroundMusic
          src={videoConfig.music.src}
          startAt={0} // Começa no início da música, você pode ajustar se quiser cortar o começo
          durationInFrames={musicDuration} // Quanto tempo tocar a música (em frames)
          fadeInDuration={videoConfig.music.fadeInDuration}
          fadeOutDuration={videoConfig.music.fadeOutDuration}
          useFade={videoConfig.music.useFade}
          maxVolume={videoConfig.music.volume}
        />
      </Sequence>

      {/* EFEITOS GIF DINÂMICOS */}
      {videoConfig.gifEffects?.map((effect, i) => (
        <GifEffect key={i} {...effect} />
      ))}

      {videoConfig.logoFooters?.map((effect: LogoFooterEffect, i: number) => (
        <LogoFooter key={i} {...effect} />
      ))}

    </AbsoluteFill>
  );
};
