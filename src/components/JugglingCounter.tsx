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
} from "remotion";

export const JugglingCounter: React.FC<{
  totalJuggles: number;
}> = ({ totalJuggles }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const secondsPerJuggle = 0.7; // ajusta como quiser (0.7 segundos por embaixadinha)
const framesPerJuggle = secondsPerJuggle * fps;

const count = Math.min(
  Math.floor(frame / framesPerJuggle),
  totalJuggles
);
  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 200,
    },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // IMAGEM APARECE APÓS 7 SEGUNDOS
  const imageStart = 8 * fps; // 7 segundos convertido para frames
  const imageOpacity = interpolate(
    frame,
    [imageStart, imageStart + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // TEXTO "MVP Studium" APARECE NO FINAL (depois do fade da imagem)
  const textStart = durationInFrames - 20; // Últimos 1 segundo
  const textOpacity = interpolate(
    frame,
    [textStart, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      {/* VÍDEO (muted) */}
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
          [
            0,                  // início do vídeo
            fps * 2,            // após 2 segundos (fade-in termina)
            durationInFrames - fps * 2,  // começa fade-out 2 segundos antes do fim
            durationInFrames    // final do vídeo
          ],
          [
            0,  // volume 0 (início)
            1,  // volume 100% após 2 segundos
            1,  // mantém 100% até quase o fim
            0   // volume 0 no fim (fade-out)
          ],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
          }
        )}
      />


      {/* IMAGEM (aparece após 7 segundos) */}
      <img
        src={staticFile("/image/logo.png")}
        style={{
          position: "absolute",
          top: 0,
          left: -420,
          width: 1920,
          height: "auto",
          opacity: imageOpacity,
        }}
      />

      {/* TEXTO (aparece apenas no final) */}
      <div
        style={{
          position: "absolute",
          top: 850,
          fontSize: 150,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "hsla(96, 100.00%, 38.00%, 0.00)",
          padding: "10px 20px",
          borderRadius: 15,
          opacity: textOpacity,
        }}
      >
        MVP Studium
      </div>

      {/* CONTADOR COM FUNDO DE BOLA */}
      <div
        style={{
          position: "absolute",
          top: 1700,
          right: 50,
          fontSize: 100,
          color: "#5c6b74",
          fontWeight: "bold",
          textShadow: "0 0 10px white, 0 0 10px white", 
          backgroundImage: `url(${staticFile("/image/bola-atual.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: 150,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        {count}
      </div>

    </AbsoluteFill>
  );
};
