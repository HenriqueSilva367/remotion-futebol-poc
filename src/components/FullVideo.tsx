import {
    AbsoluteFill,
    Sequence,
    Video,
    staticFile,
    Audio,
    useCurrentFrame,
    interpolate,
  } from "remotion";
  
  export const FadeOverlay: React.FC<{ start: number; duration: number }> = ({
    start,
    duration,
  }) => {
    const frame = useCurrentFrame();
  
    // Opacidade do fade-out (do vídeo)
    const opacity = interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity,
          pointerEvents: "none",
        }}
      />
    );
  };
  
  // Fade-in do próximo vídeo (negativo do fade-out)
  export const FadeInOverlay: React.FC<{ start: number; duration: number }> = ({
    start,
    duration,
  }) => {
    const frame = useCurrentFrame();
  
    // Opacidade do fade-in (do vídeo)
    const opacity = interpolate(frame, [start, start + duration], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity,
          pointerEvents: "none",
        }}
      />
    );
  };
  
  export const FinalVideo: React.FC = () => {
    const fps = 30;
    const videoDurations = [14, 9, 9, 16, 19, 16, 10, 20];
    const videos = [
      "/videos/00.mp4",
      "/videos/01.mp4",
      "/videos/02.mp4",
      "/videos/03.mp4",
      "/videos/04.mp4",
      "/videos/05.mp4",
      "/videos/06.mp4",
      "/videos/07.mp4",
    ];
  
    let accumulatedFrames = 0;
  
    return (
      <AbsoluteFill style={{ backgroundColor: "black" }}>
        {/* ÁUDIO CONTÍNUO */}
        <Audio src={staticFile("/audios/musica-nova.mp3")} />
        
        {videos.map((videoSrc, index) => {
          const durationInFrames = videoDurations[index] * fps;
          const startFrame = accumulatedFrames;
  
          // Para o próximo vídeo iniciar 2s antes do atual terminar (overlap)
          // exceto para o primeiro vídeo que começa normal
          if (index > 0) {
            accumulatedFrames = accumulatedFrames + durationInFrames - 2 * fps;
          } else {
            accumulatedFrames = accumulatedFrames + durationInFrames;
          }
  
          return (
            <Sequence
              key={videoSrc}
              from={startFrame}
              durationInFrames={durationInFrames}
            >
              <Video src={staticFile(videoSrc)} />
  
              {/* Fade-in só no primeiro vídeo */}
              {index === 0 && (
                <FadeInOverlay
                  start={startFrame}
                  duration={2 * fps}
                />
              )}
  
              {/* Crossfade (fade-out do vídeo atual) para todos menos o último */}
              {index < videos.length - 1 && (
                <FadeOverlay
                  start={startFrame + durationInFrames - 2 * fps}
                  duration={2 * fps}
                />
              )}
            </Sequence>
          );
        })}
      </AbsoluteFill>
    );
  };
  