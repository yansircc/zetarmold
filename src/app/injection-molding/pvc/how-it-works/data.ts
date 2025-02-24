import type { Step } from '@/components/sections/steps';

export const BASIC_INFO = {
  title: 'Dive Deeper: How It Works',
  description:
    'Delivers precision parts with tight tolerances, perfect for complex designs.',
};

export const STEPS: Step[] = [
  {
    title: 'Material Prep',
    description: 'Dry PVC pellets to kick moisture to the curb.',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop',
    icon: 'Paintbrush',
  },
  {
    title: 'Melting',
    description: 'Heat to 160-190°C until it’s molten magic.',
    image:
      'https://images.unsplash.com/photo-1624365169364-0640dd10e180?q=80&w=2000&auto=format&fit=crop',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description: 'Blast it into the mold with high-pressure gusto.',
    image:
      'https://images.unsplash.com/photo-1611462985358-60d3498e0364?q=80&w=2000&auto=format&fit=crop',
    icon: 'Zap',
  },
  {
    title: 'Cooling',
    description: 'Chill it out to solidify the shape.',
    image:
      'https://images.unsplash.com/photo-1588412079929-790b9f593d8e?q=80&w=2000&auto=format&fit=crop',
    icon: 'Sticker',
  },
  {
    title: 'Ejection',
    description: 'Pop out the part, and repeat the fun.',
    image:
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2000&auto=format&fit=crop',
    icon: 'Hammer',
  },
];
