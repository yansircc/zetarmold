import {
  FlaskConical,
  Tag,
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
  Layers,
  Paintbrush,
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
      Overmolding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Discover the superhero of molding—Overmolding. Layering materials for strength, functionality, and comfort. ZetarMold has been mastering this craft for over 20 years.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">Overmolding</span>?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Overmolding Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Overmolding is the process of layering one material over another to create
      a single, integrated part. It’s like a plastic sandwich but way
      cooler—think of a rigid handle with a soft, grippy surface.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been perfecting this craft for over 20 years,
      delivering precision and innovation to industries worldwide.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process where a second material is molded over a pre-existing part to create a single, integrated component.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description:
      'Insert Overmolding, Multi-Component Molding, Two-Step Molding.',
  },
  {
    icon: <Layers className="size-6" />,
    title: 'Core Principle',
    description:
      'It’s like a molding hug—first, the substrate is prepared, then the second material wraps around it, bonding perfectly to enhance functionality and aesthetics.',
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
      <b>Fun Fact</b>: Overmolding is like creating a &quot;plastic
      sandwich&quot; but way cooler—it&apos;s the secret sauce behind your comfy
      toothbrush grip and sleek phone case.
    </>
  ),
  action: {
    text: 'Let Zetar engineer your Overmolding project',
    href: '/contact',
  },
};

// Applications
export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Surgical tools with grippy handles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Interior trim with soft-touch surfaces.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description: 'Toothbrushes with soft bristles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Phone cases with rubberized edges.',
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
    'Overmolding is used in various industries to enhance functionality, aesthetics, and comfort. It’s perfect for medical, automotive, consumer goods, and electronics.',
  action: {
    text: 'See How Zetar Transforms Overmolding for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical',
    description: 'Surgical tools that feel like a dream to hold.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Dashboards that feel like a luxury hug.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Consumer Goods',
    description: 'Toothbrushes that don’t slip mid-brush.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Phone cases that look cool and feel grippy.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Overmolding</span>?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Overmolding Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Enhanced Functionality',
    description:
      'Combines rigidity and flexibility—like a superhero with a soft side.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Fewer assembly steps mean less time and money spent.',
  },
  {
    icon: <Paintbrush className="size-6" />,
    title: 'Aesthetic Appeal',
    description: 'Multi-material designs that pop.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Efficient',
    description: 'Perfect for high-volume production, like a molding marathon.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Molding Method <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare Overmolding with other methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
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
    method: 'Overmolding',
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
      '45 injection molding machines, including specialized overmolding systems.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, and TS16949 certifications—quality is our jam.',
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
    title: 'Substrate Preparation',
    description: 'The base part is molded or pre-formed.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Placement in Mold',
    description: 'The substrate is placed into the overmolding tool.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Second Material Injection',
    description: 'The second material is injected, bonding with the substrate.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling & Ejection',
    description: 'The part cools, solidifies, and pops out, ready to impress.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Overmolding
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
    description: 'Molds are crafted with precision for both materials.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: 'Designed to handle different material properties.',
  },
  {
    icon: <Wind className="size-6" />, // Replaced Thermometer with Wind as a placeholder
    title: 'Efficient Cooling',
    description:
      'Smart channels to cool both materials evenly—no warping allowed.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Overmolding <span className="text-primary">Material</span> Considerations
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
      'Materials must play nice together—similar processing temps and shrinkage rates.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Common Combos',
    description: 'PP + TPE for flexibility, or multi-color PP for style.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description:
      'Incompatible materials can lead to delamination—think of it as a bad breakup.',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers are material matchmakers,
      ensuring your parts bond perfectly every time.
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
    description: 'Adjust injection speed and pressure to keep things tidy.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Overmolding Design Checklist',
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
    question: 'Does your part need multiple materials or properties?',
    options: [
      { text: 'Yes', result: 'Overmolding’s your hero' },
      { text: 'No', result: 'Single-component molding might suffice' },
    ],
  },
  {
    question: 'Is production volume high?',
    options: [
      { text: 'Yes', result: 'Overmolding wins on efficiency' },
      { text: 'No', result: 'Consider assembling separate parts' },
    ],
  },
  {
    question: 'Need a strong bond between materials?',
    options: [
      { text: 'Yes', result: 'Overmolding’s got your back' },
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
    title: 'Two-Shot Molding',
    content:
      'A specific type of overmolding using one machine with two injection units.',
  },
  {
    title: 'Insert Molding',
    content:
      'Molding plastic around a non-plastic insert, like metal or glass.',
  },
  {
    title: 'Co-Injection Molding',
    content:
      'Injecting two materials simultaneously for specific internal structures.',
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
      '“ZetarMold’s overmolding expertise turned our project around—fast and flawless.” — Sarah K., Medical Device Engineer',
  },
];
