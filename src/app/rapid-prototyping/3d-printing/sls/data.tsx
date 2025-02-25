import {
  FlaskConical,
  Tag,
  Thermometer,
  Shield,
  DollarSign,
  Repeat,
  Globe,
  Award,
  Hammer,
  Heart,
  Wrench,
  Wind,
  Ruler,
  Droplet,
  Factory,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';
import type { GalleryItem } from '@/components/data-sections/gallery';
import type { Step } from '@/components/sections/steps';
import type { TextListProps } from '@/components/sections/text-list';
import type { Tip } from '@/components/sections/checklist';
import type { FlowDecisionTreeProps } from '@/components/sections/flow-decision-tree';
import type { CarouselItem } from '@/components/sections/carousel';
import type { Column } from '@/components/sections/data-table';
import type { ComparisonData } from '@/components/sections/templates';

// Page Header
export const PAGE_HEADER_INFO = {
  title: (
    <>
      Selective Laser Sintering (SLS) 3D Printing:
      <br /> Your Guide to Strong, Functional Prototypes
    </>
  ),
  description:
    'Selective Laser Sintering (SLS) 3D printing is the superhero of rapid prototyping—zapping powdered materials into strong, complex parts faster than you can sketch a blueprint.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">SLS 3D Printing</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Guide Your Prototyping Journey',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      SLS is a 3D printing process that uses a laser to sinter (fuse) powdered
      materials into solid parts, building them up layer by layer.
    </p>
    <p>
      Invented in the 1980s, SLS uses a laser to fuse materials like Nylon into
      durable prototypes, layer by layer, without the fuss of support
      structures.
    </p>
    <p>
      At <b>ZetarMold</b>, we’re injection molding wizards, but we also know SLS
      is your ticket to testing designs with speed and strength.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A 3D printing process that uses a laser to sinter powdered materials into solid parts.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'SLS, Laser Sintering, Powder Bed Fusion.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Think of it as a high-tech sandcastle—powder is spread thin, and a laser “zaps” it into shape, with leftover powder acting as a built-in support.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: (
    <>
      Standards <span className="text-primary">&</span> Classifications
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: SLS parts have flown on NASA missions—like the Mars
      Rover—proving they’re tough enough to handle extraterrestrial adventures!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Prototype',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Process',
    title: 'Additive Manufacturing',
    description: 'Powder Bed Fusion (PBF).',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Thermoplastics',
    description: 'Nylon (PA 12, PA 11), TPU, composites.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Rapid Prototyping',
    description: 'Functional testing, small-batch production.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Where It's Used
export const WHERE_ITS_USED = {
  title: (
    <>
      Applications <span className="text-primary">&</span> Benefits
    </>
  ),
  description:
    'SLS is used in automotive, aerospace, healthcare, and consumer goods for its strength and complexity.',
  action: {
    text: 'See How ZetarMold Enhances Prototyping',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Prototypes for air vents, brackets, and more.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Aerospace',
    description: 'Lightweight, complex components for planes and spacecraft.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Healthcare',
    description: 'Custom medical tools and anatomical models.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Consumer Goods',
    description: 'Rugged enclosures for gadgets and gear.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">SLS for Prototyping</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Boost Your Prototyping',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Strength',
    description:
      'Creates tough, functional parts ready for real-world testing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Complexity',
    description:
      'No supports needed—print wild geometries without breaking a sweat.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speed',
    description: 'Faster than many 3D printing rivals for intricate designs.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Flexibility',
    description: 'Offers a range of materials for different needs.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      3D Printing Technology <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare SLS with other 3D printing methods to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Simplify Your Choice',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Technology',
    accessorKey: 'technology',
  },
  {
    header: 'Strength',
    accessorKey: 'strength',
  },
  {
    header: 'Surface Finish',
    accessorKey: 'surfaceFinish',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
  {
    header: 'Cost',
    accessorKey: 'cost',
  },
  {
    header: 'Best For',
    accessorKey: 'bestFor',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'SLS',
    strength: 'High',
    surfaceFinish: 'Moderate',
    complexity: 'High',
    cost: 'Medium',
    bestFor: 'Functional Prototypes',
  },
  {
    technology: 'FDM',
    strength: 'Medium',
    surfaceFinish: 'Rough',
    complexity: 'Medium',
    cost: 'Low',
    bestFor: 'Large, Simple Parts',
  },
  {
    technology: 'SLA',
    strength: 'Low',
    surfaceFinish: 'Smooth',
    complexity: 'High',
    cost: 'Medium',
    bestFor: 'Detailed Visual Models',
  },
  {
    technology: 'MJF',
    strength: 'High',
    surfaceFinish: 'Smooth',
    complexity: 'High',
    cost: 'Medium',
    bestFor: 'Functional Prototypes',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = {
  title: (
    <>
      Why Choose <span className="text-primary">ZetarMold</span>?
    </>
  ),
  action: {
    text: 'Discover ZetarMold’s Expertise',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description: 'Since 2005, crafting precision solutions worldwide.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Full-Service Power',
    description: 'From SLS prototyping to injection molding production.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949 for top quality.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide Your Prototyping',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Design',
    description: 'Model your part in CAD software.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Printing',
    description:
      'A roller spreads powder, and a laser fuses it layer by layer—no supports required!',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Post-Processing',
    description: 'Cool it down, brush off excess powder, and polish if needed.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">SLS 3D Printing</span> for Mold Making
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Prototype',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Strength',
    description: 'Tough, functional parts ready for real-world testing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Complexity',
    description: 'No supports needed—print wild geometries.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speed',
    description: 'Fast for intricate designs.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      SLS 3D Printing <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get Material Advice from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Nylon (PA 12)',
    description: 'Strong and versatile—great for most prototypes.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Nylon (PA 11)',
    description: 'Flexible and durable—ideal for parts that bend.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'TPU',
    description: 'Rubber-like—perfect for soft, shock-absorbing components.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Composites',
    description: 'Glass-filled Nylon for extra toughness.',
    image: '/images/placeholder/1.svg',
  },
];

// Challenges
export const CHALLENGES = {
  title: (
    <>
      Challenges <span className="text-primary">&</span> Solutions
    </>
  ),
  action: {
    text: 'Discover ZetarMold’s Prototyping Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Expertise</b>: Our engineers optimize your SLS designs for
      prototyping and future production, saving you time and headaches.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Wrench className="size-6" />,
    title: 'Surface Finish',
    description: 'Moderate—polish for smoothness.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Material Limits',
    description: 'Mostly Nylon and TPU.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Powder Removal',
    description: 'Design with powder clearance in mind.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'SLS 3D Printing Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Walls ≥ 1.0 mm for durability.',
  },
  {
    content: 'Features ≥ 0.5 mm for precision.',
  },
  {
    content: 'No support worries—design freely!',
  },
  {
    content: 'Holes ≥ 1.0 mm for powder removal.',
  },
  {
    content: 'Match material to your part’s purpose.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for 3D Printing Method
    </>
  ),
  action: {
    text: 'Let ZetarMold Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Need a strong, functional prototype?',
    options: [
      { text: 'Yes', result: 'SLS is your hero' },
      { text: 'No', result: 'Try FDM or SLA for simpler needs' },
    ],
  },
  {
    question: 'Okay with a moderate surface finish?',
    options: [
      { text: 'Yes', result: 'SLS works great' },
      { text: 'No', result: 'Check out SLA or MJF' },
    ],
  },
  {
    question: 'Got complex shapes?',
    options: [
      { text: 'Yes', result: 'SLS shines without supports' },
      { text: 'No', result: 'Other methods might do' },
    ],
  },
];

// Related Tech
export const RELATED_TECH = {
  title: 'Related Technologies',
  action: {
    text: 'Explore ZetarMold’s Solutions',
    href: '/contact',
  },
};

export const RELATED_TECH_MEDIA_BESIDE_LAYOUT = {
  image: '/images/placeholder/1.svg',
};

export const RELATED_TECH_ITEMS: TextListProps['items'] = [
  {
    title: 'FDM',
    content: 'Cheap and cheerful for big, basic parts.',
  },
  {
    title: 'SLA',
    content: 'Smooth and detailed for visual prototypes.',
  },
  {
    title: 'MJF',
    content: 'Like SLS but faster with better finishes.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: (
    <>
      Why Partner with <span className="text-primary">ZetarMold</span>?
    </>
  ),
  youtubeId: '6gAjMdkEd2s',
  action: {
    text: 'Partner with ZetarMold Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description:
      'Since 2005, we’ve been crafting precision solutions worldwide.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Full-Service Power',
    description: 'From SLS prototyping to injection molding production.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949 for top quality.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Praise',
    description:
      '“ZetarMold turned our prototype into a market-ready product in no time!” — Mike T., R&D Manager',
  },
];
