'use client';

import React from 'react';
import { useCurrentFrame } from 'remotion';

type TypewriterProps = {
  text: string;
  durationInFrames: number; 
  style?: React.CSSProperties;
};

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  durationInFrames,
  style,
}) => {
  const frame = useCurrentFrame();

  // calcula a proporção da animação (de 0 a 1)
  const progress = Math.min(frame / durationInFrames, 1);

  // calcula quantas letras mostrar
  const lettersToShow = Math.floor(progress * text.length);

  const displayedText = text.substring(0, lettersToShow);

  return (
    <span style={{ display: 'inline-block', ...style }}>
      {displayedText}
    </span>
  );
};
