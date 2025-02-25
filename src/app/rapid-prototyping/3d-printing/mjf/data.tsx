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
  Wind,
  Ruler,
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
      Multi-Jet Fusion (MJF) 3D Printing:
      <br /> Your Guide to Fast, Functional Prototypes
    </>
  ),
  description:
    'Multi-Jet Fusion (MJF) 3D printing is like the superhero of additive manufacturing—swooping in to save the day with lightning-fast prototypes that don’t compromise on detail or strength.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">MJF 3D Printing</span>?
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
      Multi-Jet Fusion (MJF) is a 3D printing technology that uses powdered
      thermoplastics and liquid agents to whip up detailed, functional parts
      faster than you can say &quot;prototype.&quot;
    </p>
    <p>
      Developed by HP, this technology creates functional parts for industries
      such as automotive, aerospace, healthcare, and consumer goods.
    </p>
    <p>
      At <b>ZetarMold</b>, we know MJF is the MVP for rapid prototyping, guiding
      you from concept to reality.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A 3D printing technology using powdered thermoplastics and liquid agents for detailed parts.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'MJF, Multi Jet Fusion, HP MJF.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Spreads a layer of powder, sprinkles fusing and detailing agents, and fuses with infrared heat.',
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
      <b>Fun Fact</b>: MJF churns out prototypes so fast, you might have your
      part in hand before your coffee gets cold!
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
    description: 'Nylon (PA 12, PA 11), TPU.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Air ducts, brackets, interior bits.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Aerospace',
    description: 'Lightweight, tough parts like housings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Healthcare',
    description: 'Custom medical tools, models.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description: 'Phone cases, sports gear.',
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
    'MJF creates functional parts for industries like automotive, aerospace, healthcare, and consumer goods with speed and strength.',
  action: {
    text: 'See How ZetarMold Enhances Prototyping',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Air ducts, brackets, and slick interior bits.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Aerospace',
    description: 'Lightweight, tough parts like housings.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Healthcare',
    description: 'Custom medical tools and models.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Consumer Goods',
    description: 'Phone cases to sports gear.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">MJF for Prototyping</span>?
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
    description: 'Parts in as little as 24 hours.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth as a baby’s bottom.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Mechanical Properties',
    description: 'Consistent strength for real-world testing.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'No Supports Needed',
    description: 'Unfused powder doubles as support.',
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
    'Compare MJF with other 3D printing methods to find the best fit for your project.',
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
    header: 'Surface Finish',
    accessorKey: 'surfaceFinish',
  },
  {
    header: 'Mechanical Properties',
    accessorKey: 'mechanicalProperties',
  },
  {
    header: 'Material Options',
    accessorKey: 'materialOptions',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'MJF',
    speed: 'Fast',
    surfaceFinish: 'Smooth',
    mechanicalProperties: 'Consistent',
    materialOptions: 'Limited (Nylon, TPU)',
  },
  {
    technology: 'FDM',
    speed: 'Medium',
    surfaceFinish: 'Rough',
    mechanicalProperties: 'Variable',
    materialOptions: 'Wide',
  },
  {
    technology: 'SLS',
    speed: 'Medium',
    surfaceFinish: 'Moderate',
    mechanicalProperties: 'Good',
    materialOptions: 'Wide',
  },
  {
    technology: 'SLA',
    speed: 'Slow',
    surfaceFinish: 'Very Smooth',
    mechanicalProperties: 'Brittle',
    materialOptions: 'Limited',
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
    title: '20+ Years of Know-How',
    description: 'Molding success since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'From MJF prototyping to full-scale production.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949.',
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
    title: 'Pre-Processing',
    description: 'Design your 3D model—no support structures required.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Printing',
    description:
      'Powder gets layered, agents get jetted, and heat seals the deal.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Post-Processing',
    description: 'Cool it down, shake off excess powder, and finish if needed.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">MJF 3D Printing</span> for Mold Making
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
    description: '80-micron layer thickness for detail.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Smooth, injection-molding-like quality.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Material Variety',
    description: 'Nylon and TPU for various needs.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      MJF 3D Printing <span className="text-primary">Material</span>{' '}
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
    description: 'Strong, durable—your go-to for tough prototypes.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Nylon (PA 11)',
    description: 'Flexible and forgiving for parts that need give.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'TPU',
    description: 'Rubber-like and shock-absorbing.',
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
      <b>ZetarMold’s Edge</b>: Our engineers can tweak your design for MJF
      perfection, setting you up for a seamless shift to production.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Wrench className="size-6" />,
    title: 'Overhangs',
    description: 'Minimize them—no supports mean less error room.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Material Limits',
    description: 'Stick to Nylon or TPU for best results.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Powder Removal',
    description: 'Design 1.0 mm+ openings for easy cleanup.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'MJF 3D Printing Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Wall thickness ≥ 1.0 mm to avoid weak spots.',
  },
  {
    content: 'Features ≥ 0.5 mm for details that pop.',
  },
  {
    content: 'Keep overhangs minimal to dodge distortion.',
  },
  {
    content: 'Add 1° draft angles for smooth part removal.',
  },
  {
    content: 'Holes ≥ 1.0 mm to shake out powder.',
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
    question: 'Need functional prototypes ASAP?',
    options: [
      { text: 'Yes', result: 'MJF’s your speed demon' },
      { text: 'No', result: 'Take your time with other options' },
    ],
  },
  {
    question: 'Is a smooth finish a must?',
    options: [
      { text: 'Yes', result: 'MJF delivers the goods' },
      { text: 'No', result: 'FDM might do the trick' },
    ],
  },
  {
    question: 'Want strong, durable parts?',
    options: [
      { text: 'Yes', result: 'MJF’s Nylon is a champ' },
      { text: 'No', result: 'Cheaper materials could work' },
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
    title: 'Selective Laser Sintering (SLS)',
    content: 'Laser-powered cousin—slower but versatile.',
  },
  {
    title: 'Fused Deposition Modeling (FDM)',
    content: 'Big parts, rough finish—budget-friendly.',
  },
  {
    title: 'Stereolithography (SLA)',
    content: 'Super detailed but brittle.',
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
    title: '20+ Years of Know-How',
    description: 'Molding success since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Prototype to Production',
    description: 'Test with MJF, produce with us.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Wins',
    description:
      '“ZetarMold turned our prototype into a production hit faster than we dreamed!” — Sarah L., Product Designer',
  },
];
