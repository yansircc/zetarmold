import { Shield, FlaskConical, DollarSign, Repeat } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const basicInfo = {
  title: 'Why Choose PVC Injection Molding?',
  description:
    'PVC is a versatile material that can be used in a wide range of applications. It is a popular choice for construction, automotive, and consumer goods.',
};

export const features: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Durability',
    description:
      'PVC parts are built to last—tougher than a toddler with a toy hammer.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Chemical Resistance',
    description:
      'Perfect for environments that would make lesser materials cry.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description:
      'High initial mold costs pay off with low per-part prices in big runs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatility',
    description:
      'Rigid or flexible, PVC bends over backwards to meet your needs.',
  },
];
