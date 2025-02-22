import { Puzzle, LayersIcon, Zap, Feather, Shield } from 'lucide-react';
import type { FeatureItem } from '@/components/data-sections/feature-list';
import type { BasicInfo } from '../types';

export const basicInfo: BasicInfo = {
  title: 'What are the Benefits of Overmolding?',
};

export const features: FeatureItem[] = [
  {
    icon: <Feather className="size-6" />,
    title: 'Smaller Mold Size',
    description:
      'Low Volume Injection Molds are designed to be smaller and more compact than traditional injection molds, making them more suitable for low-volume production.',
  },
  {
    icon: <LayersIcon className="size-6" />,
    title: 'Smaller Batch Sizes',
    description:
      'Low Volume Injection Mold is suitable for producing small batches of parts, often ranging from 1 to 1,000 units.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Cheaper Tooling',
    description:
      'Low Volume Injection Molds usually have cheaper tooling costs compared to traditional molds, which means they are more affordable for small businesses or startups.',
  },
  {
    icon: <Zap className="size-6" />,
    title: 'Shorter Lead Times',
    description:
      'Low Volume Injection Mold can be designed and made quickly, allowing for rapid prototyping and production and allows for faster production and delivery times, often within a few days or weeks.',
  },
  {
    icon: <Puzzle className="size-6" />,
    title: 'Flexibility',
    description:
      'Low Volume Injection Molds can be easily retooled to produce different parts, making it a great option for prototyping, testing, or small-scale production.',
  },
];
