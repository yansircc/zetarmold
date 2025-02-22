import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { Checklist } from '@/components/data-sections/checklist';
import type { BackgroundVariant } from './types';

interface TipsProps {
  background?: BackgroundVariant;
}

// Simplified tips array without categories
const tips: Array<{ id: number; content: string }> = [
  {
    id: 1,
    content:
      "Don't overmold the whole base substrate. Overmold it in sections.",
  },
  {
    id: 2,
    content:
      "Don't make edges that are too thin or that come to a point. When you inject the plastic, the flow slows and cools, reducing adhesion.",
  },
  {
    id: 3,
    content:
      'Keep the overmolding thickness consistent: the overmolding should be between 1.5 and 3 millimeters (0.060 and 0.120 inches).',
  },
  {
    id: 4,
    content:
      'Try not to have sudden changes in thickness. If you need different thicknesses, try to make them as smooth as possible.',
  },
  {
    id: 5,
    content:
      'Lots of overmolding materials are stretchy, so you can put smooth bumps into the design.',
  },
  {
    id: 6,
    content:
      'Make sure the overmolding layer is thinner than the substrate underneath to help prevent warping.',
  },
  {
    id: 7,
    content:
      'To make sure the overmolding cavity bonds well, you need to account for substrate shrinkage.',
  },
  {
    id: 8,
    content:
      'Use a TPE or TPU that has a melt temperature lower than the substrate.',
  },
  {
    id: 9,
    content:
      'Design the overmold to sit just below the surface of the substrate.',
  },
  {
    id: 10,
    content:
      'If you want more holding power, design undercuts, keyways, and other mechanical features to lock the materials together.',
  },
];

export default function Tips({ background = 'default' }: TipsProps) {
  return (
    <TextWrapper title="10 Tips For Overmolding Design" background={background}>
      <Checklist tips={tips} />
    </TextWrapper>
  );
}
