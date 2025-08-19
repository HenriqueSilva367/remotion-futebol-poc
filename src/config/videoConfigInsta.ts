type VideoCut = {
  id: string;
  src: string;
  startFrom: number;
  durationInFrames: number;
  volume: number;
  blackAndWhiteStart?: number;
  blackAndWhiteEnd?: number;
  slowMotionStart?: number;
  slowMotionEnd?: number;
  slowMotionFactor?: number;
};

type PhotoConfig = {
  src: string;
  startAt: number;
  durationInFrames: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  opacity?: number; 
};

export const videoConfigInsta = {
  fps: 30,

  durations: {
    intro: 196,
    cover: 90,
    sequence: 4590,
    freezeDuration: 100,
  },

  music: {
    src: "audios/hip-hop.mp3",
    volume: 0.2,
    startFrame: 0,
    fadeInDuration: 30,
    fadeOutDuration: 15,
    useFade: true,
    durationInFrames: 600,
    musicDuration: 1555,
  },

  SoundCameras: [
    {
      src: "audios/Fotografia.mp3",
      startAt: 726,
      durationInFrames: 46,
      fadeInDuration: 30,
      fadeOutDuration: 15,
      useFade: true,
      maxVolume: 0.9,
    },
    {
      src: "audios/tecladoDigitando.mp3",
      startAt: 0,
      durationInFrames: 100,
      fadeInDuration: 30,
      fadeOutDuration: 15,
      useFade: true,
      maxVolume: 0.9,
    },
  ],

  Photos: [
    {
      src: "image/Fotografia.png",
      startAt: 755,
      durationInFrames: 25,
      x: 0,
      y: 0,
      width: 1080,
      height: 2080,
      opacity: 1,
    },
  ] as PhotoConfig[],
  

  videoCuts: [
    {
      id: "clip-1",
      src: "videos/cruzamento.mp4",
      startFrom: 10,
      durationInFrames: 190,
      blackAndWhiteStart: 0,
      blackAndWhiteEnd: 70,
      volume: 0.0,
    },
    {
      id: "clip-2",
      src: "videos/jogador.mp4",
      startFrom: 3,
      durationInFrames: 50,
      slowMotionStart: 0,
      slowMotionEnd: 25,
      slowMotionFactor: 0.4,
      volume: 0.0,
    },
    {
      id: "clip-3",
      src: "videos/roubodebola.mp4",
      startFrom: 0,
      durationInFrames: 250,
      volume: 0.0,
    },
    {
      id: "clip-4",
      src: "videos/falta.mp4",
      startFrom: 0,
      durationInFrames: 190,
      volume: 0.0,
    },
    {
      id: "clip-5",
      src: "videos/noastra.mp4",
      startFrom: 657,
      durationInFrames: 85,
      volume: 0.0,
    },
    {
      id: "clip-6",
      src: "videos/VideoCompleto.mp4",
      startFrom: 11880,
      durationInFrames: 160,
      volume: 0.0,
    },
    {
      id: "clip-7",
      src: "videos/noastra.mp4",
      startFrom: 957,
      durationInFrames: 85,
      volume: 0.0,
    },
    
  ] as VideoCut[],

  multiVideos: [
    {
      src: "videos/escanteio1.mp4",
      startFrame: 0,
      durationInFrames: 90,
      blackAndWhite: true,
      volume: 0,
    },
    {
      src: "videos/escanteio2.mp4",
      startFrame: 89,
      durationInFrames: 70,
      blackAndWhite: false,
      volume: 0,
    },
    {
      src: "videos/escanteio3.mp4",
      startFrame: 160,
      durationInFrames: 150,
      blackAndWhite: false,
      volume: 0,
    },
  ],

  videoOverlays: [
    {
      background: {
        src: "videos/backgroundVideo.mp4",
        startFrame: 0,
        durationInFrames: 120,
        volume: 0.5,
      },
      overlay: {
        src: "videos/cruzamento.mp4",
        startFrame: 0,
        durationInFrames: 120,
        x: 100,
        y: 500,
        width: 900,
        height: 900,
        volume: 1,
      },
    },
  ],

  logoFooters: [
    {
      startFrame: 90,
      durationInFrames: 1380,
      x: 400,
      y: 1780,
      width: 340,
      height: 148,
    },
  ],

  BackgroundInsta: [
    {
      startFrame: 0,
      durationInFrames: 100,
      x: 0,
      y: 0,
      width: 1080,
      height: 1920,
    },
  ],

  texts: [
    {
      id: "intro-text",
      text: "What happens on the field, stays in history!",
      fontSize: 80,
      color: "#FFFFFF",
      durationInFrames: 110,
    },
  ],
};
