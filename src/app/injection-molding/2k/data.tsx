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
      2K Injection Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Discover the versatile world of 2K injection molding, from its applications to its benefits and manufacturing process.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">2K</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your 2K Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      2K Injection Molding is the superhero of the molding world, combining two
      materials into one seamless part—like a plastic sandwich but way cooler.
      This process, also known as two-component or two-shot molding, is perfect
      for creating parts with both rigid and flexible sections, like a phone
      case with a grippy edge or a medical syringe with a soft plunger.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this craft for over 20 years,
      delivering precision and innovation to industries worldwide.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process where two different materials are injected into the same mold to create a single, integrated part.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description:
      'Two-Component Molding, Two-Shot Molding, Double Injection Molding, Two-Color Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'First, one material is injected, then the mold rotates or shifts, and the second material is injected, bonding with the first.',
  },
];

// Applications and Benefits
export const APPLICATIONS_INFO = {
  title: (
    <>
      Applications <span className="text-primary">&</span> Benefits
    </>
  ),
  description:
    '2K Injection Molding is used in various industries for its versatility and efficiency.',
  action: {
    text: 'See How Zetar Transforms 2K Molding for Your Needs',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Syringes, ergonomic handles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Soft-touch dashboards, gear knobs.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Electronics',
    description: 'Phone cases, buttons.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Household Goods',
    description: 'Toothbrushes, tool grips.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">2K</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your 2K Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Multi-Functional',
    description: 'Combines rigidity and flexibility in one part.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Fewer assembly steps mean less time and money spent.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Aesthetic Appeal',
    description: 'Multi-color or multi-texture designs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Efficient',
    description: 'Perfect for high-volume production.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Injection Molding Method <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare different injection molding methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
  action: {
    text: 'Overwhelmed by Data? Let Zetar Make the Decision',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Method',
    accessorKey: 'method',
  },
  {
    header: 'Cost per Part',
    accessorKey: 'costPerPart',
  },
  {
    header: 'Initial Investment',
    accessorKey: 'initialInvestment',
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
    header: 'Material Options',
    accessorKey: 'materialOptions',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: '2K Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Single-Component Molding',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Limited',
    complexity: 'Medium',
  },
  {
    method: 'Assembling Separate Parts',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Wide',
    complexity: 'Low',
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
    text: 'Discover Zetar: 300+ Projects Delivered Annually',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including specialized 2K systems.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, and TS16949 certifications.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description: 'M7 level for medical and food-grade perfection.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let Zetar Patiently Explain the Principles',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'First Injection',
    description: 'The base material is injected into the mold.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Movement',
    description: 'The mold rotates or shifts for the second material.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Second Injection',
    description: 'The second material is injected, bonding with the first.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling & Ejection',
    description: 'The part cools and is ejected.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for 2K Injection
    </>
  ),
  action: {
    text: 'Sit Back and Let Zetar Design Your Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Molds crafted with precision for accurate dimensions.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: 'Designed to handle two different materials.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Advanced cooling systems to minimize warping.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      2K Injection <span className="text-primary">Material</span> Considerations
    </>
  ),
  action: {
    text: 'Get expert material advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Compatibility',
    description:
      'Materials must have similar processing temps and shrinkage rates.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Common Combos',
    description: 'PP + TPE for flexibility, or multi-color PP for style.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description: 'Incompatible materials can lead to delamination.',
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
    text: 'Discover expert solutions with Zetar',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold's Edge</b>: Our engineers are material matchmakers, ensuring
      your parts bond perfectly every time.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Bonding Issues',
    description:
      'Ensure materials are compatible and design for mechanical interlocking.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping',
    description: 'Use uniform cooling and precise temperature control.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Flash',
    description: 'Adjust injection speed and pressure.',
  },
];

// Checklist
export const CHECKLIST = {
  title: '2K Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Choose compatible materials—don’t pair frenemies.',
  },
  {
    content: 'Design for bonding surfaces—maximize contact area.',
  },
  {
    content: 'Keep wall thickness uniform to avoid drama.',
  },
  {
    content: 'Position gates for optimal flow—no clogs here.',
  },
  {
    content: 'Add draft angles for a smooth exit.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for Manufacturing
      Method
    </>
  ),
  action: {
    text: 'Let Zetar Make Decisions for You',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Does your part need multiple materials or colors?',
    options: [
      { text: 'Yes', result: "2K molding's your hero" },
      { text: 'No', result: 'Single-component molding might suffice' },
    ],
  },
  {
    question: 'Is production volume high?',
    options: [
      { text: 'Yes', result: '2K molding wins on efficiency' },
      { text: 'No', result: 'Consider assembling separate parts' },
    ],
  },
  {
    question: 'Need a strong bond between materials?',
    options: [
      { text: 'Yes', result: "2K molding's got your back" },
      { text: 'No', result: 'Explore other options' },
    ],
  },
];

// Related Tech
export const RELATED_TECH = {
  title: 'Related Technologies',
  action: {
    text: "Explore Zetar's Innovative Solutions",
    href: '/contact',
  },
};

export const RELATED_TECH_MEDIA_BESIDE_LAYOUT = {
  image: '/images/placeholder/1.svg',
};

export const RELATED_TECH_ITEMS: TextListProps['items'] = [
  {
    title: 'Single-Component Molding',
    content: 'For simpler, uniform parts.',
  },
  {
    title: 'Overmolding',
    content: 'Similar but often done in separate steps.',
  },
  {
    title: 'Blow Molding',
    content: 'For hollow goodies like bottles.',
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
    text: 'Partner with Zetar Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '18+ Years of Know-How',
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
      'ZetarMold’s 2K expertise turned our project around—fast and flawless. — Sarah K., Medical Device Engineer',
  },
];
