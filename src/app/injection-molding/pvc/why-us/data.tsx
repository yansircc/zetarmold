import { Factory, ShieldCheck, Users } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const BASIC_INFO = {
  title: 'Why Choose ZetarMold?',
  description: 'With over 20 years of molding mastery, ZetarMold brings:',
  youtubeId: '6gAjMdkEd2s',
};

export const FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 cutting-edge injection molding machines, including a beefy 1850T model for parts up to 10kg.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, and TS16949 certifications—proof we don’t mess around with quality.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description:
      'Dust-free workshops (M7 level) for medical and food-grade perfection.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros ready to make your global project a breeze.',
  },
];
