import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

type ZoomEffectProps = {
  children: React.ReactNode;
  zoomStartFrame: number;
  zoomEndFrame: number;
  zoomFrom?: number;
  zoomTo?: number;
};

export const ZoomEffect: React.FC<ZoomEffectProps> = ({
  children,
  zoomStartFrame,
  zoomEndFrame,
  zoomFrom = 1,
  zoomTo = 2,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [zoomStartFrame, zoomEndFrame],
    [zoomFrom, zoomTo],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};
