'use client'

import {
  AbsoluteFill,
  Freeze,
  useCurrentFrame,
  Video,
  interpolate,
} from 'remotion'

type PauseableVideoProps = {
  src: string
  pauseFrame?: number
  pauseDuration?: number
  startFrom?: number
  freezeFrame?: number
  totalDuration?: number
  zoomStartFrame?: number
  zoomEndFrame?: number
  zoomFrom?: number
  zoomTo?: number
  zoomPauseTo?: number
  timelineStartFrame: number
}

export const PauseableVideo: React.FC<PauseableVideoProps> = ({
  src,
  pauseFrame = 0,
  pauseDuration = 0,
  startFrom = 0,
  freezeFrame = 0,
  totalDuration = 300,
  zoomStartFrame,
  zoomEndFrame,
  zoomFrom = 1,
  zoomTo = 1,
  zoomPauseTo = 1,
}) => {
  const frame = useCurrentFrame()

  const isInPause =
    pauseDuration > 0 &&
    frame >= pauseFrame &&
    frame < pauseFrame + pauseDuration

  const animatedZoom =
    zoomStartFrame !== undefined &&
    zoomEndFrame !== undefined &&
    zoomFrom !== undefined &&
    zoomTo !== undefined
      ? interpolate(frame, [zoomStartFrame, zoomEndFrame], [zoomFrom, zoomTo], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : 1

  const zoomScale = isInPause ? zoomPauseTo : animatedZoom

  const videoStyle = {
    transform: `scale(${zoomScale})`,
    transformOrigin: 'center',
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  }

  return (
    <AbsoluteFill style={{ position: 'relative' }}>
      {isInPause && freezeFrame > 0 ? (
        <Freeze frame={freezeFrame}>
          <Video
            src={src} 
            startFrom={freezeFrame}
            volume={0}
            style={videoStyle}
          />
        </Freeze>
      ) : (
        <Video
          src={src} 
          startFrom={startFrom}
          volume={0}
          style={videoStyle}
        />
      )}
    </AbsoluteFill>
  )
}
