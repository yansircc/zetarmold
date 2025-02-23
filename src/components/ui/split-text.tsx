'use client';

import SplitText from '../bits/TextAnimations/SplitText/SplitText';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  onLetterAnimationComplete?: () => void;
}

export default function AnimatedText({
  text = 'No text provided',
  className,
  delay = 50,
  onLetterAnimationComplete,
}: AnimatedTextProps) {
  return (
    <SplitText
      text={text}
      className={className}
      delay={delay}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing={(t: number) => t}
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={onLetterAnimationComplete}
    />
  );
}
