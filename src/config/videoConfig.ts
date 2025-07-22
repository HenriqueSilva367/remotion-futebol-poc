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
        durationInFrames: 300,
  
        pause: {
          timelineFrame: 100,    // onde na timeline global inicia a pausa
          duration: 45,          // duração da pausa em frames
          freezeFrame: 150,      // frame específico do vídeo a ser congelado
        },
      },
      {
        id: 'clip-2',
        src: '/videos/gol.mp4',
        startFrom: 450,
        durationInFrames: 600,
  
        pause: {
          timelineFrame: 200,   // pode ser qualquer ponto da timeline global
          duration: 60,
          freezeFrame: 500,
        },
      },
    ],
  };
  