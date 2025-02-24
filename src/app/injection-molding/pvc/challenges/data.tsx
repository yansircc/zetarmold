import { Shield, Wrench, Wind } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const BASIC_INFO = {
  title: (
    <>
      Challenges <span className="text-primary">&</span> Solutions
    </>
  ),
  description: 'Learn about the challenges of PVC injection molding.',
};

export const FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Degradation',
    description: 'Stabilizers and precise heating save the day.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Corrosion',
    description: 'Corrosion-resistant molds keep things smooth.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Warping',
    description: 'Uniform cooling and clever design prevent part tantrums.',
  },
];
