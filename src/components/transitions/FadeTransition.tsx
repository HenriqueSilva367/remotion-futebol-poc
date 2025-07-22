import { useCurrentFrame, interpolate } from "remotion";

type FadeTransitionProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  return <div style={{ opacity }}>{children}</div>;
};
