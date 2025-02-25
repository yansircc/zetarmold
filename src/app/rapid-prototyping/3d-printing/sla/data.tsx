import {
  FlaskConical,
  Tag,
  Thermometer,
  Shield,
  Repeat,
  Globe,
  Award,
  Hammer,
  Heart,
  Wrench,
  Ruler,
  Droplet,
  Factory,
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
      Stereolithography (SLA) 3D Printing:
      <br /> Your Guide to Precision Prototypes
    </>
  ),
  description:
    'Stereolithography (SLA) 3D printing is like the Michelangelo of additive manufacturing—sculpting detailed, precise prototypes with the finesse of a master artist.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">SLA 3D Printing</span>?
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
      Stereolithography (SLA) is a 3D printing technology that uses a UV laser
      to cure liquid photopolymer resins, creating highly detailed and accurate
      parts layer by layer.
    </p>
    <p>
      Developed in the 1980s, this technology is ideal for rapid prototyping
      when precision is key.
    </p>
    <p>
      At <b>ZetarMold</b>, while we’re experts in injection molding for mass
      production, we know that SLA is the go-to for rapid prototyping when
      precision is key.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A 3D printing technology that uses a UV laser to cure liquid photopolymer resins into solid parts.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'SLA, Vat Photopolymerization, Resin Printing.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'It’s like painting with light—each layer of resin is cured by the laser, building the part one precise slice at a time.',
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
      <b>Fun Fact</b>: SLA can print text so tiny it’s practically invisible to
      the naked eye—perfect for sneaking in a secret message!
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
    description: 'Vat Photopolymerization.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Photopolymer Resins',
    description: 'Standard, engineering, flexible, specialty.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Rapid Prototyping',
    description: 'Concept models, medical devices, intricate designs.',
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
    'SLA is used in medical, dental, product design, automotive, and jewelry for its precision and smooth finishes.',
  action: {
    text: 'See How ZetarMold Enhances Prototyping',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical & Dental',
    description: 'Anatomical models, surgical guides, dental appliances.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Product Design',
    description: 'Detailed prototypes for electronics and consumer goods.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Intricate parts for testing form, fit, and function.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Jewelry & Art',
    description: 'Complex, high-resolution designs that wow.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">SLA for Prototyping</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Boost Your Prototyping',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description:
      'Layer thicknesses as fine as 25 microns for unmatched detail.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth as silk, reducing the need for post-processing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Complex Geometries',
    description: 'Handles intricate designs with ease.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speed',
    description: 'Faster than traditional methods for small, detailed parts.',
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
    'Compare SLA with other 3D printing technologies to find the best fit for your project.',
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
    header: 'Precision',
    accessorKey: 'precision',
  },
  {
    header: 'Surface Finish',
    accessorKey: 'surfaceFinish',
  },
  {
    header: 'Material Options',
    accessorKey: 'materialOptions',
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
    technology: 'SLA',
    precision: 'High',
    surfaceFinish: 'Smooth',
    materialOptions: 'Photopolymer resins',
    cost: 'Medium-High',
    bestFor: 'Detailed Prototypes',
  },
  {
    technology: 'FDM',
    precision: 'Medium',
    surfaceFinish: 'Rough',
    materialOptions: 'Thermoplastics',
    cost: 'Low-Medium',
    bestFor: 'Large, Functional Parts',
  },
  {
    technology: 'SLS',
    precision: 'Medium',
    surfaceFinish: 'Moderate',
    materialOptions: 'Thermoplastics, metals',
    cost: 'Medium-High',
    bestFor: 'Durable Parts',
  },
  {
    technology: 'MJF',
    precision: 'High',
    surfaceFinish: 'Smooth',
    materialOptions: 'Thermoplastics',
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
    title: '20+ Years of Manufacturing Mastery',
    description:
      'Since 2005, delivering precision molds and injection molding services worldwide.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'Test with SLA, produce with us—smooth as butter.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—we take quality seriously.',
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
    description: 'Create a 3D model in CAD software.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Slicing',
    description: 'Convert the model into layers and generate supports.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Printing',
    description:
      'The UV laser cures the resin layer by layer—precision at its finest.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Post-Processing',
    description:
      'Clean the part, remove supports, and cure further under UV light.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">SLA 3D Printing</span> for Mold Making
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Prototype',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Layer thickness from 25 to 100 microns for unmatched detail.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth as silk, reducing the need for post-processing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Complex Geometries',
    description: 'Handles intricate designs with ease.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      SLA 3D Printing <span className="text-primary">Material</span>{' '}
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
    title: 'Standard Resins',
    description: 'Great for general prototyping—stiff and detailed.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Engineering Resins',
    description: 'Tougher, for functional testing.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Flexible Resins',
    description: 'Bendy and durable, perfect for gaskets or seals.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Clear Resins',
    description:
      'Nearly transparent after polishing—ideal for lenses or fluid devices.',
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
      <b>ZetarMold’s Edge</b>: Our engineers can optimize your design for SLA,
      ensuring it’s ready for both prototyping and future production.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Fragility',
    description: 'Walls under 0.6 mm may break. Solution: Thicken your design.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Support Removal',
    description:
      'Overhangs over 45° need supports. Solution: Optimize orientation.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Resin Drainage',
    description: 'Holes under 1 mm trap resin. Solution: Enlarge holes.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'SLA 3D Printing Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Wall thickness ≥ 0.6 mm for strength.',
  },
  {
    content: 'Overhangs ≤ 45° to reduce supports.',
  },
  {
    content: 'Holes ≥ 1 mm for resin drainage.',
  },
  {
    content: 'Supports planned or minimized through smart orientation.',
  },
  {
    content: 'Layer thickness chosen for detail vs. speed.',
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
    question: 'Need ultra-fine details?',
    options: [
      { text: 'Yes', result: 'SLA is your best bet' },
      { text: 'No', result: 'Consider FDM or SLS for cost savings' },
    ],
  },
  {
    question: 'Is a smooth finish crucial?',
    options: [
      { text: 'Yes', result: 'SLA delivers' },
      { text: 'No', result: 'Other technologies might work' },
    ],
  },
  {
    question: 'Require functional testing?',
    options: [
      { text: 'Yes', result: 'Use engineering resins with SLA' },
      { text: 'No', result: 'Standard resins will do' },
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
    title: 'Digital Light Processing (DLP)',
    content: 'Similar to SLA but uses a projector for faster curing.',
  },
  {
    title: 'Masked Stereolithography (MSLA)',
    content:
      'Uses an LCD screen to mask UV light, offering a balance of speed and detail.',
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
    title: '20+ Years of Manufacturing Mastery',
    description:
      'Since 2005, delivering precision molds and injection molding services worldwide.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'Test with SLA, produce with us—smooth as butter.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—we take quality seriously.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Wins',
    description:
      '“ZetarMold helped us perfect our prototype and deliver a flawless product to market!” — Sarah L., Product Designer',
  },
];
