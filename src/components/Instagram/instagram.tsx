import React from "react";
import { AbsoluteFill, Sequence, Video } from "remotion";
import { LogoFooter } from "../transitions/LogoFooter";
import { BackgroundMusic } from "../BackgroundMusic";
import { MultiVideoLayout } from "./components/MuiltVideosLayout";
import { resolveAssetPath } from "../../config/resolveAssetPath";
import { BlackAndWhite } from "./components/BalckAndWhite";
import { SlowMotionVideo } from "./components/SlowMotion";
import { videoConfigInsta } from "../../config/videoConfigInsta";

type Scene = {
  id: string;
  component: React.ReactNode;
  durationInFrames: number;
};

type InstagramTemplateProps = {
  scenes: Scene[];
  musicStartAtFrame: number;
  musicDuration: number;
};

export const InstagramTemplate: React.FC<InstagramTemplateProps> = ({
  scenes,
  musicStartAtFrame,
  musicDuration,
}) => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>

      {scenes
        .filter((scene) => 'text' in scene.component.props)
        .map((scene) => {
          const seq = (
            <Sequence
              key={scene.id}
              from={currentFrame}
              durationInFrames={scene.durationInFrames}
            >
              {scene.component}
            </Sequence>
          );
          currentFrame += scene.durationInFrames;
          return seq;
        })}

      {videoConfigInsta.multiVideos?.length > 0 && (
        <Sequence
          from={currentFrame}
          durationInFrames={videoConfigInsta.multiVideos.reduce(
            (acc, vid) => acc + (vid.durationInFrames ?? 180),
            0
          )}
        >
          <MultiVideoLayout videos={videoConfigInsta.multiVideos} />
        </Sequence>
      )}
      {currentFrame += videoConfigInsta.multiVideos.reduce(
        (acc, vid) => acc + (vid.durationInFrames ?? 180),
        0
      )}

   
      {videoConfigInsta.videoCuts.map((cut) => {
        const seq = (
          <Sequence
            key={cut.id}
            from={currentFrame}
            durationInFrames={cut.durationInFrames}
          >
            {(() => {
            
              let videoElement: React.ReactNode = (
                <Video
                  src={resolveAssetPath(cut.src)}
                  startFrom={cut.startFrom ?? 0}
                  volume={cut.volume ?? 1}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              );

              if (
                cut.slowMotionStart !== undefined &&
                cut.slowMotionEnd !== undefined &&
                cut.slowMotionFactor !== undefined
              ) {
                videoElement = (
                  <SlowMotionVideo
                    src={resolveAssetPath(cut.src)}
                    startFrom={cut.startFrom ?? 0}
                    durationInFrames={cut.durationInFrames}
                    slowStart={cut.slowMotionStart}
                    slowEnd={cut.slowMotionEnd}
                    slowFactor={cut.slowMotionFactor}
                    volume={cut.volume ?? 1}
                  />
                );
              }

              if (
                cut.blackAndWhiteStart !== undefined &&
                cut.blackAndWhiteEnd !== undefined
              ) {
                videoElement = (
                  <BlackAndWhite
                    startFrame={cut.blackAndWhiteStart}
                    endFrame={cut.blackAndWhiteEnd}
                  >
                    {videoElement}
                  </BlackAndWhite>
                );
              }

              return videoElement;
            })()}
          </Sequence>
        );

        currentFrame += cut.durationInFrames;
        return seq;
      })}

      <Sequence from={musicStartAtFrame} durationInFrames={musicDuration}>
        <BackgroundMusic
          src={videoConfigInsta.music.src}
          startAt={0}
          durationInFrames={musicDuration}
          fadeInDuration={videoConfigInsta.music.fadeInDuration}
          fadeOutDuration={videoConfigInsta.music.fadeOutDuration}
          useFade={videoConfigInsta.music.useFade}
          maxVolume={videoConfigInsta.music.volume}
        />
      </Sequence>
      
      {videoConfigInsta.logoFooters?.map((effect, i) => (
        <LogoFooter key={i} {...effect} />
      ))}

      {videoConfigInsta.logoFooters?.map((effect, i) => (
        <LogoFooter key={i} {...effect} />
      ))}

    </AbsoluteFill>
  );
};
