import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { GifEffect } from "../transitions/GifEffect";
import { buildTimeline } from "../../utils/buildTimeline";
import { videoConfig } from "../../config/videoConfig";
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

type InstagramTemplateProps = {
  scenes: Scene[];
  musicStartAtFrame: number;
  musicDuration: number;
  coverStartFrame: number; 
  coverDurationInFrames: number;
};

export const InstagramTemplate: React.FC<InstagramTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  musicDuration,
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

      {/* AUDIO */}
      <Sequence from={musicStartAtFrame} durationInFrames={musicDuration}>
        <BackgroundMusic
          src={videoConfig.music.src}
          startAt={0}
          durationInFrames={musicDuration}
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

      {/* LOGO FOOTER */}
      {videoConfig.logoFooters?.map((effect: LogoFooterEffect, i: number) => (
        <LogoFooter key={i} {...effect} />
      ))}
    </AbsoluteFill>
  );
};
