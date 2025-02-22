import FeatureList from '@/components/data-sections/feature-list';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import {
  BeakerIcon,
  Puzzle,
  LayersIcon,
  Zap,
  Paintbrush,
  Feather,
  Thermometer,
  Shield,
  Cable,
  Palette,
} from 'lucide-react';
import type { BackgroundVariant } from './types';

interface BenifitsProps {
  background?: BackgroundVariant;
}

export default function Benifits({ background = 'default' }: BenifitsProps) {
  return (
    <TextWrapper
      title="What are the Benefits of Overmolding?"
      background={background}
    >
      <FeatureList
        background="default"
        props={[
          {
            icon: <BeakerIcon className="size-6" />,
            title: 'Better Chemical Resistance',
            description:
              'Enhanced protection against corrosive substances and chemical exposure, ensuring longer product lifespan and reliability.',
          },
          {
            icon: <Puzzle className="size-6" />,
            title: 'Added Functionality',
            description:
              'Integrate additional features and capabilities into the primary component, enhancing product versatility and value.',
          },
          {
            icon: <LayersIcon className="size-6" />,
            title: 'Simplified Assembly',
            description:
              'Consolidate multiple components into a single part, streamlining manufacturing processes and reducing assembly time.',
          },
          {
            icon: <Zap className="size-6" />,
            title: 'Enhanced Performance',
            description:
              'Improve product functionality through strategic material combinations and property enhancements.',
          },
          {
            icon: <Paintbrush className="size-6" />,
            title: 'Aesthetic Enhancement',
            description:
              'Achieve superior aesthetic qualities and design flexibility through material and color combinations.',
          },
          {
            icon: <Feather className="size-6" />,
            title: 'Weight Reduction',
            description:
              'Optimize component weight while maintaining structural integrity and performance characteristics.',
          },
          {
            icon: <Thermometer className="size-6" />,
            title: 'Improved Thermal Resistance',
            description:
              'Enhanced protection against temperature extremes, ensuring consistent performance across varying conditions.',
          },
          {
            icon: <Shield className="size-6" />,
            title: 'Increased Durability',
            description:
              'Superior structural integrity and impact resistance for extended product lifecycle.',
          },
          {
            icon: <Cable className="size-6" />,
            title: 'Enhanced Electrical Insulation',
            description:
              'Improved protection against electrical hazards through strategic material selection and design.',
          },
          {
            icon: <Palette className="size-6" />,
            title: 'Design Flexibility',
            description:
              'Extensive customization options for both functional and aesthetic requirements.',
          },
        ]}
      />
    </TextWrapper>
  );
}
