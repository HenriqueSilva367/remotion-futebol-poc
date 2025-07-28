import { Freeze, Sequence } from "remotion";

type Pause = {
  frame: number;
  duration: number;
};

type MultiPauseProps = {
  pauses: Pause[];
};

export const MultiPause: React.FC<MultiPauseProps> = ({ pauses }) => {
  return (
    <>
      {pauses.map((pause, index) => (
        <Sequence key={index} from={pause.frame} durationInFrames={pause.duration}>
          <Freeze frame={pause.frame} children={undefined} />
        </Sequence>
      ))}
    </>
  );
};
