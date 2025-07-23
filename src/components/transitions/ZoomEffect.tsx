import { useCurrentFrame, interpolate, spring } from 'remotion';
import { ReactNode } from 'react';

type ZoomEffectProps = {
  zoomFrom: number;
  zoomTo: number;
  zoomStartFrame: number;
  zoomEndFrame: number;
  children: ReactNode;
};

export const ZoomEffect: React.FC<ZoomEffectProps> = ({
  zoomFrom,
  zoomTo,
  zoomStartFrame,
  zoomEndFrame,
  children,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [zoomStartFrame, zoomEndFrame],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const scale = interpolate(progress, [0, 1], [zoomFrom, zoomTo]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};
