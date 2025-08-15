import React from "react";
import { Sequence, Video, staticFile } from "remotion";

type MultiVideoProps = {
  videos: {
    src: string;
    startFrame?: number;
    durationInFrames?: number;
    blackAndWhite?: boolean;
    volume?: number;
  }[];
};

export const MultiVideoLayout: React.FC<MultiVideoProps> = ({ videos }) => {
  const total = videos.length;

  return (
    <>
      {videos.map((video, index) => {
        const heightPercent = 100 / total;
        const topPercent = index * heightPercent;

        return (
          <Sequence
            key={index}
            from={video.startFrame ?? 0}
            durationInFrames={video.durationInFrames ?? 10}
          >
            <Video
              src={staticFile(video.src)}
              volume={video.volume ?? 1}
              style={{
                position: "absolute",
                top: `${topPercent}%`,
                left: 0,
                width: "100%",
                height: `${heightPercent}%`,
                objectFit: 'cover',
                filter: video.blackAndWhite ? "grayscale(100%)" : "none",
              }}
            />
          </Sequence>
        );
      })}
    </>
  );
};
