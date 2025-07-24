'use client'
import { IntroVideo } from "../VideoDefault/IntroVideo"
import { CoverDefault } from "../VideoDefault/CoverDefault"
import { YoutubeTemplate } from "./Youtube"
import { staticFile } from "remotion"
import { videoConfig } from "../../config/videoConfig"

import { PauseableVideo } from "./PauseableVideo"

export const Videos: React.FC = () => {
  const { intro, cover } = videoConfig.durations

  const videoCutScenes = videoConfig.videoCuts.map((cut) => ({
    id: cut.id,
    component: (
      <PauseableVideo
      key={cut.id}
      src={staticFile(cut.src)}
      startFrom={cut.startFrom ?? 0}
      totalDuration={cut.durationInFrames}
      {...(cut.pause && {
        pauseFrame: cut.pause.timelineFrame,
        pauseDuration: cut.pause.duration,
        freezeFrame: cut.pause.freezeFrame,
        zoomPauseTo: cut.pause.zoomPauseTo,
      })}
      {...(cut.zoom && {
        zoomStartFrame: cut.zoom.startFrame,
        zoomEndFrame: cut.zoom.endFrame,
        zoomFrom: cut.zoom.from,
        zoomTo: cut.zoom.to,
      })}
    />
    
    ),
    durationInFrames: cut.durationInFrames,
  }))

  const scenes = [
    {
      id: "intro",
      component: <IntroVideo />,
      durationInFrames: intro,
    },
    {
      id: "cover",
      component: <CoverDefault />,
      durationInFrames: cover,
    },
    ...videoCutScenes,
  ]

  return (
    <YoutubeTemplate
      scenes={scenes}
      musicStartAtFrame={videoConfig.music.startFrame}
      coverStartFrame={videoConfig.cover.startFrame}
      coverDurationInFrames={videoConfig.cover.durationInFrames}
    />
  )
}
