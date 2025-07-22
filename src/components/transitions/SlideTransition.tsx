// transitions/SlideTransition.tsx
import { useCurrentFrame, interpolate } from "remotion";

export const SlideTransition: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
}> = ({ children, durationInFrames }) => {
  const frame = useCurrentFrame();
  const translateX = interpolate(frame, [0, durationInFrames], [200, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ transform: `translateX(${translateX}px)` }}>{children}</div>
  );
};
