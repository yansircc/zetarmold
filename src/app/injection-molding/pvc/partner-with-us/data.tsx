import { Globe, Award, Hammer, Heart } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const BASIC_INFO = {
  title: (
    <>
      Why Partner with <span className="text-primary">ZetarMold</span>?
    </>
  ),
  description: 'Learn about how to partner with us for PVC injection molding.',
  youtubeId: '6gAjMdkEd2s',
};

export const FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Know-How',
    description: 'Since 2005, we’ve been molding dreams into reality.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description:
      'Serving 20+ countries with a team fluent in English and expertise.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our middle name.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s PVC expertise turned our project around—fast and flawless.” — Sarah K., Medical Device Engineer',
  },
];
