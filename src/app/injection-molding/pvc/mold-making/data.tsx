import { Ruler, Droplet, Thermometer } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const BASIC_INFO = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for PVC Injection
    </>
  ),
  linkText: 'Sit Back and Let Zetar Design Your Mold',
  href: '/contact',
};

export const FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description:
      'Molds are crafted with precision to ensure accurate dimensions.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: 'Designed to withstand PVC’s corrosive nature with ease.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Advanced cooling systems to minimize warping and defects.',
  },
];
