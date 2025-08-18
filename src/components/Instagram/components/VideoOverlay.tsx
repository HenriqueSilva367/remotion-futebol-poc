import { AbsoluteFill, Sequence, Video, staticFile } from "remotion";

type BackgroundConfig = {
  src: string;
  startFrame: number;
  durationInFrames: number;
  volume?: number;
};

type OverlayConfig = {
  src: string;
  startFrame: number;
  durationInFrames: number;
  x?: number;
  y?: number;
  width?: number | string;
  height?: number | string;
  volume?: number;
};

type VideoWithOverlayProps = {
  background: BackgroundConfig;
  overlay: OverlayConfig;
};

export const VideoWithOverlay: React.FC<VideoWithOverlayProps> = ({
  background,
  overlay,
}) => {
  return (
    <AbsoluteFill>
 
      <Sequence from={background.startFrame} durationInFrames={background.durationInFrames}>
        <Video
          src={staticFile(background.src)}
          volume={background.volume ?? 1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>

      <Sequence from={overlay.startFrame} durationInFrames={overlay.durationInFrames}>
        <Video
          src={staticFile(overlay.src)}
          volume={overlay.volume ?? 1}
          style={{
            position: "absolute",
            left: overlay.x ?? 0,
            top: overlay.y ?? 0,
            width: overlay.width ?? 300,
            height: overlay.height ?? 200,
            objectFit: "cover",
            zIndex: 999,
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
