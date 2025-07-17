import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  spring,
  interpolate,
  Audio,
  Img,
} from "remotion";

export const JugglingCounter: React.FC<{ totalJuggles: number }> = ({
  totalJuggles,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Define velocidade do contador (ajuste como quiser)
  const secondsPerJuggle = 0.7;
  const framesPerJuggle = secondsPerJuggle * fps;

  // Contagem baseada no tempo do vídeo
  const count = Math.min(Math.floor(frame / framesPerJuggle), totalJuggles);

  // Animação de entrada
  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: { damping: 200 },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade-in da logo após 7 segundos
  const imageStart = 20 * fps;
  const imageOpacity = interpolate(
    frame,
    [imageStart, imageStart + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Texto final (últimos 20 frames)
  const textStart = durationInFrames - 20;
  const textOpacity = interpolate(
    frame,
    [textStart, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      
      {/* VÍDEO */}
      <OffthreadVideo
        src={staticFile("/videos/00.mp4")}
        muted
        style={{
          width: 1080,
          height: 1920,
          objectFit: "cover",
          border: "10px solid white",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.7)",
          opacity,
          transform: `scale(${scale})`,
        }}
      />

      {/* ÁUDIO */}
      <Audio
        src={staticFile("/audios/musica-nova.mp3")}
        volume={interpolate(
          frame,
          [0, 2 * fps, durationInFrames - 2 * fps, durationInFrames],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )}
      />

      {/* LOGO (após 7 segundos) */}
      <Img
        src={staticFile("/image/logo.png")}
        style={{
          position: "absolute",
          top: 50,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          opacity: imageOpacity,
        }}
      />

      {/* TEXTO FINAL */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          fontSize: 150,
          color: "white",
          fontWeight: "bold",
          opacity: textOpacity,
        }}
      >
        MVP Studium
      </div>

      {/* CONTADOR COM BOLA */}
      <div
        style={{
          position: "absolute",
          top: 1600,
          right: 80,
          width: 180,
          height: 180,
          borderRadius: "50%",
          backgroundImage: `url(${staticFile("/image/ball.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontSize: 80,
          fontWeight: "bold",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textShadow: "0 0 10px black",
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        {count}
      </div>
    </AbsoluteFill>
  );
};
