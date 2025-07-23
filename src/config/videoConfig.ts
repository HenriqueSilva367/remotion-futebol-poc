export const videoConfig = {
    fps: 30,
  
    durations: {
      intro: 196,
      cover: 90,
      sequence: 4590,
      freezeDuration: 100,
    },
  
    zoom: {
      from: 1,
      to: 2,
      startFrame: 100,
      endFrame: 200,
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
          timelineFrame: 165,    // onde na timeline global inicia a pausa
          duration: 45,          // duração da pausa em frames
          freezeFrame: 225,      // frame específico do vídeo a ser congelado
        },
        zoom: {
          from: 1,
          to: 2,
          startFrame: 100,
          endFrame: 200,
        },
      },
      {
        id: 'clip-2',
        src: '/videos/gol.mp4',
        startFrom: 159,
        durationInFrames: 400,
      },
    ],
  };
  