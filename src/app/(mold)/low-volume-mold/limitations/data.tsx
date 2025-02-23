import { Factory, Settings, Flame, Ruler, Brush } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const basicInfo = {
  title: 'Limitations of Low Volume Injection Mold',
  description:
    ' there are times when it might not be the best choice. Here are some situations where Low Volume Injection Molding might not be the best option',
};

export const features: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'High-volume Production',
    description:
      'If you need to make a lot of parts (thousands or tens of thousands), traditional injection mold might be cheaper.',
  },
  {
    icon: <Settings className="size-6" />,
    title: 'High Complexity',
    description:
      'If your part is really complicated, with lots of moving parts, lots of little details, or really tight tolerances, traditional injection mold might be a better choice.',
  },
  {
    icon: <Flame className="size-6" />,
    title: 'High-performance Materials',
    description:
      'If you need special materials, like materials that can handle high temperatures, chemicals, are really strong, or can take a big hit, traditional injection mold might be a better choice.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'High-precision Parts',
    description:
      'If your parts need to be really precise (like within ±0.01 mm) or really accurate, traditional injection mold might be a better choice.',
  },
  {
    icon: <Brush className="size-6" />,
    title: 'High Surface Finish Requirements',
    description:
      'If your parts need to have a really nice surface finish (like Ra < 0.1 μm), traditional injection mold might be a better choice.',
  },
];
