import type { Tip } from '@/components/sections/checklist';

export const BASIC_INFO = {
  title: 'PVC Injection Molding Design Checklist',
  linkText: 'Let Zetar Check Your Project in Detail',
  href: '/contact',
};

export const CHECKLIST: Tip[] = [
  {
    content:
      'Plan for shrinkage (0.2-0.6%)—PVC likes to shrink a little post-party.',
  },
  {
    content: 'Keep wall thickness uniform to avoid warp drama.',
  },
  {
    content: 'Add draft angles for a smooth ejection exit.',
  },
  {
    content: 'Design gates and runners for optimal flow—no clogs allowed.',
  },
  {
    content: 'Vent properly to dodge burn marks.',
  },
];
