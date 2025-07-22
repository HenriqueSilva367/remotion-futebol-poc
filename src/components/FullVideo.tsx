import {
  AbsoluteFill,
  Sequence,
  Video,
  staticFile,
  Audio,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { JugglingCounter } from "./JugglingCounter";
import { GameScoreboard } from "./GameScoreboard";
import { ChampionsTitle } from "./ChampionsTitle";
import { PlayerStatsPanel } from "./PlayerStatsGraph";
import { LogoFadeIn } from "./LogoFadeIn";
import { TextFadeIn } from "./TextFadeIn";
import { Confetti } from "./Confetti";

export const FadeOverlay: React.FC<{ start: number; duration: number }> = ({
  start,
  duration,
}) => {
  const frame = useCurrentFrame();
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

export const FadeInOverlay: React.FC<{ start: number; duration: number }> = ({
  start,
  duration,
}) => {
  const frame = useCurrentFrame();
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
  const frame = useCurrentFrame();

  const graphStart = 14 * fps;
  const graphEnd = 20 * fps;

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

  const showScoreboardFrame = 21 * fps; // 21 segundos
  const updateScoreFrame = (1 * 60 + 12) * fps; // 1 minuto e 11 segundos
  const hideScoreboardFrame = (1 * 60 + 21) * fps;
  const leftScore = 2;

  const rightScore = frame >= updateScoreFrame ? 4 : 3;
  const frameGlobal = useCurrentFrame();

  const logoAppearFrame = (1 * 60 + 30) * fps; // 1m28s
  const fadeDuration = 3 * fps; // 3 segundos
  const textAppearFrame = logoAppearFrame + fadeDuration;

  const confettiEndFrame = 88 * fps; // 1:28 em frames
  const confettiStartFrame = 81 * fps; // 1:21 em frames
  const confettiDuration = 7 * fps; // duração 7 segundos (até 1:28)

  let accumulatedFrames = 0;

  const showScoreboard =
    frameGlobal >= showScoreboardFrame && frameGlobal < hideScoreboardFrame;
  const showPlayerStats = frameGlobal >= graphStart && frameGlobal <= graphEnd;

  const opacity = interpolate(
    frameGlobal,
    [confettiStartFrame, confettiEndFrame - 30, confettiEndFrame], // fade começa 1s antes do fim (30 frames)
    [1, 1, 0], // opacidade permanece 1 até começar o fade para 0
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Audio src={staticFile("/audios/musica-nova.mp3")} />

      {/* seu conteúdo aqui */}
      {frameGlobal >= confettiStartFrame &&
        frameGlobal <= confettiStartFrame + confettiDuration && (
          <Confetti
            startFrame={confettiStartFrame}
            durationInFrames={confettiDuration}
          />
        )}

      {videos.map((videoSrc, index) => {
        const durationInFrames = videoDurations[index] * fps;
        const startFrame = accumulatedFrames;

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
            <ChampionsTitle
              frame={frameGlobal}
              appearFrame={(1 * 60 + 21) * fps}
              durationInFrames={5 * fps}
            />

            {index === 0 && <JugglingCounter totalJuggles={100} />}

            {/* ✅ Placar controlado globalmente */}
            {showScoreboard && (
              <GameScoreboard
                leftTeamName=""
                rightTeamName=""
                leftTeamScore={leftScore}
                rightTeamScore={rightScore}
              />
            )}

            {index === 0 && (
              <FadeInOverlay start={startFrame} duration={2 * fps} />
            )}

            {index < videos.length - 1 && (
              <FadeOverlay
                start={startFrame + durationInFrames - 2 * fps}
                duration={2 * fps}
              />
            )}
          </Sequence>
        );
      })}
      {showPlayerStats && (
        <PlayerStatsPanel
          playerName="Pablo Veloso"
          goals={27}
          isTopScorer={true}
          height={182}
          weight={78}
          position="Atacante"
          age={25}
          appearFrame={14 * fps}
          durationInFrames={6 * fps}
        />
      )}

      <LogoFadeIn
        appearFrame={logoAppearFrame}
        durationInFrames={fadeDuration}
      />
      <TextFadeIn
        appearFrame={textAppearFrame}
        durationInFrames={fadeDuration}
        text="MVP Studium"
      />
    </AbsoluteFill>
  );
};
