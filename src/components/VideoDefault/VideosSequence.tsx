import React from "react";
import { AbsoluteFill, Sequence, Video } from "remotion";
import { FadeTransition } from "../transitions/FadeTransition";

type VideoItem = {
  id: string;
  src: string;
  durationInFrames: number;
};

type VideosSequenceProps = {
  videos: VideoItem[];
  fadeDurationInFrames?: number; // duração do fade, padrão 20
};

export const VideosSequence: React.FC<VideosSequenceProps> = ({
  videos,
  fadeDurationInFrames = 20,
}) => {
  let fromFrame = 0;

  return (
    <AbsoluteFill>
      {videos.map((video, index) => {
        // Ajusta duração para incluir fade out do vídeo anterior
        // Para o primeiro vídeo, não precisa ajustar o início
        const videoStart = fromFrame;
        fromFrame += video.durationInFrames;
        console.log(index);
        return (
          <Sequence
            key={video.id}
            from={videoStart}
            durationInFrames={video.durationInFrames}
          >
            <FadeTransition durationInFrames={fadeDurationInFrames}>
              <Video
                src={video.src}
                startFrom={0}
                endAt={video.durationInFrames}
              />
            </FadeTransition>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
