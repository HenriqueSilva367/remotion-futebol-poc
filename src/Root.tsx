import { Composition } from "remotion";
import { MyComp } from "./components/MyComp";
import { FinalVideo } from "./components/FullVideo";
import { Videos } from "./components/Youtube/Video";
import { VideosInstagram } from "./components/Instagram/VideosIntagram";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InstagramVideo"
        component={MyComp}
        durationInFrames={300} 
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
 
      <Composition
        id="Full-video"
        component={FinalVideo}
        durationInFrames={100 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="YoutubeTemplate"
        component={Videos}
        durationInFrames={100 * 30}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="InstagramTemplate"
        component={VideosInstagram}
        durationInFrames={100 * 30}
        fps={30}
        width={1080}
        height={1920}
        
      />
    </>
  );
};
