type Scene = {
    id: string;
    component: React.ReactNode;
    durationInFrames: number;
  };
  
  export const buildTimeline = (scenes: Scene[]) => {
    let fromFrame = 0;
    return scenes.map((scene) => {
      const startAt = fromFrame;
      fromFrame += scene.durationInFrames;
      return {
        ...scene,
        from: startAt,
      };
    });
  };
  