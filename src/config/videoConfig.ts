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
      src: 'videos/gol-01-h264.mp4',
      startFrom: 0,
      durationInFrames: 210,
      pause: {
        timelineFrame: 167,
        duration: 60,
        freezeFrame: 83,
        zoomPauseTo: 2, 
      },
      zoom: {
        from: 2,
        to: 1.9,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-2',
      src: 'videos/gol-01-h264.mp4',
      startFrom: 159,
      durationInFrames: 250,
      zoom: {
        from: 2,
        to: 2.1,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-3',
      src: 'videos/gol-02-h264.mp4',
      startFrom: 159,
      durationInFrames: 195,
      pause: {
        timelineFrame: 134,
        duration: 60,
        freezeFrame: 146,
        zoomPauseTo: 2, 
      },
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-4',
      src: 'videos/gol-02-h264.mp4',
      startFrom: 295,
      durationInFrames: 300,
      zoom: {
        from: 2,
        to: 1.3,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-5',
      src: 'videos/lance-05-h264.mp4',
      startFrom: 0,
      durationInFrames: 375,
      zoom: {
        from: 2,
        to: 1.9,
        startFrame: 100,
        endFrame: 200,
      },
      pause: {
        timelineFrame: 1267,
        duration: 60,
        freezeFrame: 83,
        zoomPauseTo: 2, 
      },
     
    },  
    {
      id: 'clip-6',
      src: 'videos/gol-04-h264.mp4',
      startFrom: 0,
      durationInFrames: 129,
      pause: {
        timelineFrame: 70,
        duration: 60,
        freezeFrame: 35,
        zoomPauseTo: 2, 
      },
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-7',
      src: 'videos/gol-04-h264.mp4',
      startFrom: 64,
      durationInFrames: 160,
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-8',
      src: 'videos/gol-03-h264.mp4',
      startFrom: 0,
      durationInFrames: 125,
      pause: {
        timelineFrame: 65,
        duration: 60,
        freezeFrame: 32,
        zoomPauseTo: 2, 
      },
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    },
    {
      id: 'clip-8',
      src: 'videos/gol-03-h264.mp4',
      startFrom: 66,
      durationInFrames: 200,
      zoom: {
        from: 2,
        to: 1.5,
        startFrame: 100,
        endFrame: 200,
      },
    }, 
  ],

  gifEffects: [
    {
      startFrame: 454,
      durationInFrames: 45,
      x: 730,
      y: 130,
      width: 250,
      height: 450,
    },
    {
      startFrame: 890, 
      durationInFrames: 50,
      x: 1370,
      y: 190,
      width: 400,
      height: 600,
    },
    {
      startFrame: 1342, 
      durationInFrames: 29,
      x: 300,
      y: 280,
      width: 400,
      height: 600,
    },
    {
      startFrame: 1690, 
      durationInFrames: 56,
      x: 1020,
      y: 145,
      width: 400,
      height: 600,
    },    {
      startFrame: 1974, 
      durationInFrames: 56,
      x: 650,
      y: 85,
      width: 400,
      height: 600,
    }
  ],

  logoFooters: [   
    {
      startFrame: 290,
      durationInFrames: 4500,
      x: 800,
      y: 980,
      width: 320,
      height: 80,
    },
  ],
  
};
