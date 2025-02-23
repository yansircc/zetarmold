'use client';

import BlueTextComponent from '../bits/TextAnimations/BlurText/BlurText';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  className,
  delay = 50,
  onAnimationComplete,
}: BlurTextProps) {
  return (
    <BlueTextComponent
      text={text}
      delay={delay}
      animateBy="words"
      direction="top"
      onAnimationComplete={onAnimationComplete}
      className={className}
    />
  );
}
