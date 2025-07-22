import { AbsoluteFill, Sequence, staticFile, Video } from "remotion";

export const IntroVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Sequência do vídeo */}
      <Sequence durationInFrames={180}>
        <AbsoluteFill>
          <Video
            src={staticFile("/videos/intro.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            muted={false}
          />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
