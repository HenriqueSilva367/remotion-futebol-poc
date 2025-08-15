import React from 'react';
import { useCurrentFrame } from 'remotion';

type BlackAndWhiteProps = {
  startFrame: number;
  endFrame: number;
  children: React.ReactNode;
};

export const BlackAndWhite: React.FC<BlackAndWhiteProps> = ({ startFrame, endFrame, children }) => {
  const frame = useCurrentFrame();
  const isActive = frame >= startFrame && frame <= endFrame;


  if (!isActive) {
    return <>{children}</>;
  }


  return (
    <div
      style={{
        filter: 'grayscale(100%)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};
