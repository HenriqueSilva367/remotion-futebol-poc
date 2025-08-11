'use client';

import { AbsoluteFill } from 'remotion';
import { Typewriter } from '../../Typewriter';

interface CustomTextProps {
  text: string;
  durationInFrames: number;
  fontSize?: number;
  color?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  text,
  durationInFrames,
  fontSize = 60,
  color = '#ffffff',
}) => {
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Typewriter
        text={text}
        durationInFrames={durationInFrames}
        style={{
          fontSize,
          color,
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: 1.2,
        }}
      />
    </AbsoluteFill>
  );
};
