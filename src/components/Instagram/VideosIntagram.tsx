import React from 'react';
import { InstagramTemplate } from './instagram';
import { videoConfigInsta } from '../../config/videoConfigInsta';
import { CustomText } from './components/CustomText';
import { SlowMotionVideo } from './components/SlowMotion';
import { BlackAndWhite } from './components/BalckAndWhite';
import { resolveAssetPath } from '../../config/resolveAssetPath';
import { Video } from 'remotion';


export const VideosInstagram: React.FC = () => {

  const textScenes = (videoConfigInsta.texts || []).map((txt) => ({
    id: txt.id || 'intro-text',
    component: (
      <CustomText
        text={txt.text}
        durationInFrames={txt.durationInFrames}
        fontSize={txt.fontSize}
        color={txt.color}
      />
    ),
    durationInFrames: txt.durationInFrames,
  }));

  const videoScenes = videoConfigInsta.videoCuts.map((cut) => {
    let videoElement: React.ReactNode = (
      <Video
        src={resolveAssetPath(cut.src)}
        startFrom={cut.startFrom ?? 0}
        volume={cut.volume ?? 1}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

    return {
      id: cut.id,
      component: videoElement,
      durationInFrames: cut.durationInFrames,
    };
  });

  return (
    <InstagramTemplate
      scenes={[...textScenes, ...videoScenes]}
      musicStartAtFrame={videoConfigInsta.music.startFrame}
      musicDuration={videoConfigInsta.music.musicDuration}
    />
  );
};
