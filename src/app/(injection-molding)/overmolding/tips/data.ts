import type { Tip } from '@/components/data-sections/checklist';
import type { BasicInfo } from '../types';

export const basicInfo: BasicInfo = {
  title: '10 Tips For Overmolding Design',
};

export const tips: Tip[] = [
  {
    id: 'tip-1',
    content:
      "Don't overmold the whole base substrate. Overmold it in sections.",
  },
  {
    id: 'tip-2',
    content:
      "Don't make edges that are too thin or that come to a point. When you inject the plastic, the flow slows and cools, reducing adhesion.",
  },
  {
    id: 'tip-3',
    content:
      'Keep the overmolding thickness consistent: the overmolding should be between 1.5 and 3 millimeters (0.060 and 0.120 inches).',
  },
  {
    id: 'tip-4',
    content:
      'Try not to have sudden changes in thickness. If you need different thicknesses, try to make them as smooth as possible.',
  },
  {
    id: 'tip-5',
    content:
      'Lots of overmolding materials are stretchy, so you can put smooth bumps into the design.',
  },
  {
    id: 'tip-6',
    content:
      'Make sure the overmolding layer is thinner than the substrate underneath to help prevent warping.',
  },
  {
    id: 'tip-7',
    content:
      'To make sure the overmolding cavity bonds well, you need to account for substrate shrinkage.',
  },
  {
    id: 'tip-8',
    content:
      'Use a TPE or TPU that has a melt temperature lower than the substrate.',
  },
  {
    id: 'tip-9',
    content:
      'Design the overmold to sit just below the surface of the substrate.',
  },
  {
    id: 'tip-10',
    content:
      'If you want more holding power, design undercuts, keyways, and other mechanical features to lock the materials together.',
  },
];
