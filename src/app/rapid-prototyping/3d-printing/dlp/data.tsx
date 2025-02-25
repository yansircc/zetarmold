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
      Digital Light Processing (DLP) 3D Printing:
      <br /> Your Guide to Precision Prototypes
    </>
  ),
  description:
    'DLP 3D printing uses a digital light projector to cure photopolymer resins layer by layer, offering precision, speed, and smooth finishes for rapid prototyping.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">DLP 3D Printing</span>?
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
      DLP 3D printing is a vat photopolymerization process where a digital light
      projector cures entire layers of photosensitive resin at once.
    </p>
    <p>
      It’s fast, precise, and delivers smooth finishes—ideal for rapid
      prototyping.
    </p>
    <p>
      At <b>ZetarMold</b>, we combine DLP’s prototyping power with our injection
      molding expertise to take you from concept to production.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A process where a digital light projector cures photopolymer resins layer by layer.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'DLP, Digital Light Projection, Masked Stereolithography.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'A DMD projects UV patterns to cure resin one layer at a time.',
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
      <b>Fun Fact</b>: DLP can churn out parts with details so fine they’ve been
      used to craft microscopic medical devices!
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
    title: 'Dental & Medical',
    description: 'Custom molds, surgical guides.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Product Design',
    description: 'Prototypes for electronics, gadgets.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Jewelry & Art',
    description: 'Intricate, precise designs.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Small, complex parts for testing.',
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
    'DLP excels in dental, medical, product design, jewelry, and automotive for its speed, precision, and smooth finishes.',
  action: {
    text: 'See How ZetarMold Enhances Prototyping',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Dental & Medical',
    description: 'Custom dental molds, surgical guides, biocompatible devices.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Product Design',
    description: 'Detailed prototypes for electronics and gadgets.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Jewelry & Art',
    description: 'Intricate designs with precision.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Small, complex parts for testing.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">DLP for Prototyping</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Boost Your Prototyping',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speed',
    description: 'Cures entire layers at once—fast results.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Resolutions as fine as 25 microns.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth finishes reduce post-processing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Material Variety',
    description: 'Flexible, rigid, clear, and more resins.',
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
    'Compare DLP with other 3D printing methods to find the best fit for your project.',
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
    header: 'Speed',
    accessorKey: 'speed',
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
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'DLP',
    speed: 'Fast',
    precision: 'High',
    surfaceFinish: 'Smooth',
    materialOptions: 'Photopolymer resins',
  },
  {
    technology: 'SLA',
    speed: 'Medium',
    precision: 'High',
    surfaceFinish: 'Smooth',
    materialOptions: 'Photopolymer resins',
  },
  {
    technology: 'FDM',
    speed: 'Medium',
    precision: 'Medium',
    surfaceFinish: 'Rough',
    materialOptions: 'Thermoplastics',
  },
  {
    technology: 'SLS',
    speed: 'Slow',
    precision: 'Medium',
    surfaceFinish: 'Moderate',
    materialOptions: 'Thermoplastics',
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
  youtubeId: '6gAjMdkEd2s', // Placeholder YouTube ID
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description: 'Perfecting manufacturing solutions since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'Seamless transition from DLP to injection molding.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with English-speaking pros.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—top standards.',
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
    description: 'Break it into layers and add supports.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Printing',
    description: 'The DLP projector cures the resin layer by layer.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Post-Processing',
    description: 'Wash, remove supports, and UV cure the part.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">DLP 3D Printing</span> for Mold Making
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
    description: 'Resolutions as fine as 25 microns.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth finishes for detailed molds.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Material Variety',
    description: 'Resins for various mold needs.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      DLP 3D Printing <span className="text-primary">Material</span>{' '}
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
    description: 'Stiff and detailed for prototypes.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Engineering Resins',
    description: 'Tough for functional testing.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Flexible Resins',
    description: 'Bendy for wearables or seals.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Clear Resins',
    description: 'Polishes to near transparency.',
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
      <b>ZetarMold’s Expertise</b>: Our engineers optimize materials and designs
      for flawless prototypes.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Brittleness',
    description: 'Use engineering or tough resins.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Support Removal',
    description: 'Optimize orientation to reduce supports.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Resin Mess',
    description: 'Use gloves and proper cleaning tools.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'DLP 3D Printing Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Wall thickness ≥ 0.5 mm.',
  },
  {
    content: 'Overhangs ≤ 45° to minimize supports.',
  },
  {
    content: 'Holes ≥ 0.5 mm for resin drainage.',
  },
  {
    content: 'Plan supports or orient smartly.',
  },
  {
    content: 'Pick layer thickness for detail or speed.',
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
    question: 'Need intricate details and smooth finishes?',
    options: [
      { text: 'Yes', result: 'DLP is ideal' },
      { text: 'No', result: 'Consider FDM or SLS' },
    ],
  },
  {
    question: 'Is speed a must?',
    options: [
      { text: 'Yes', result: 'DLP’s layer-at-once curing' },
      { text: 'No', result: 'Other methods may suffice' },
    ],
  },
  {
    question: 'Testing functionality?',
    options: [
      { text: 'Yes', result: 'Use engineering resins with DLP' },
      { text: 'No', result: 'Standard resins work' },
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
    title: 'SLA',
    content: 'Laser-based curing—slower but sharp.',
  },
  {
    title: 'LCD/MSLA',
    content: 'Affordable with solid quality.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: (
    <>
      Why Partner with <span className="text-primary">ZetarMold</span>?
    </>
  ),
  youtubeId: '6gAjMdkEd2s', // Placeholder YouTube ID
  action: {
    text: 'Partner with ZetarMold Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description: 'Manufacturing solutions since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'Seamless transition with injection molding.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Happy Clients',
    description:
      '“ZetarMold turned our prototype into a market-ready product!” — Sarah L., R&D Manager',
  },
];
