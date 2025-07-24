export const videoConfig = {
  fps: 30,

  durations: {
    intro: 196,
    cover: 90,
    sequence: 4590,
    freezeDuration: 100,
  },

  music: {
    src: 'audios/music.mp3',
    volume: 0.8,
    startFrame: 177,
  },

  cover: {
    startFrame: 165,
    durationInFrames: 90,
  },

  videoCuts: [
    {
      id: 'clip-1',
      src: '/videos/gol.mp4',
      startFrom: 0,
      durationInFrames: 210,

      pause: {
        timelineFrame: 165,
        duration: 45,
        freezeFrame: 225,
        zoomPauseTo: 2, 
      },

      zoom: {
        from: 1,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-2',
      src: '/videos/gol.mp4',
      startFrom: 159,
      durationInFrames: 400,
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
  ],
};
