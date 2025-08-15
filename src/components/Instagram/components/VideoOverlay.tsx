import { Sequence, staticFile, Video } from "remotion";

type VideoOverlayProps = {
  startFrame: number;
  durationInFrames: number;
  src: string;
  x?: number;
  y?: number;
  width?: number | string;
  height?: number | string;
};

export const VideoOverlay: React.FC<VideoOverlayProps> = ({
  startFrame,
  durationInFrames,
  src,
  x = 100,
  y = 100,
  width = 200,
  height = 200,
}) => {
  return (
    <Sequence from={startFrame} durationInFrames={durationInFrames}>
      <Video
        src={staticFile(src)}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width,
          height,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </Sequence>
  );
};
