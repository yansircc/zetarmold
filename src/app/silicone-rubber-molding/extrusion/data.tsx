import {
  FlaskConical,
  Tag,
  Thermometer,
  DollarSign,
  Repeat,
  Shield,
  Factory,
  Hammer,
  Award,
  Globe,
  Heart,
  Ruler,
  Wrench,
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
      Silicone Rubber Extrusion Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Silicone rubber extrusion molding is your go-to manufacturing process for creating long, continuous silicone parts like hoses, seals, and gaskets. Perfect for high-volume production of durable, temperature-resistant components.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">Silicone Rubber Extrusion Molding</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Guide Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Silicone rubber extrusion molding is a continuous process where uncured
      silicone rubber is forced through a die to form uniform shapes, then
      heat-cured for strength and flexibility.
    </p>
    <p>
      It’s perfect for high-volume production of durable, temperature-resistant
      components used in industries like automotive, medical, and electronics.
    </p>
    <p>
      At <b>ZetarMold</b>, with over 20 years of expertise, we transform your
      ideas into reality with precision, quality, and a touch of molding magic.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A continuous process where uncured silicone rubber is forced through a die to form uniform shapes, then heat-cured for strength and flexibility.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Silicone extrusion, rubber extrusion molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'A screw extruder pushes silicone through a die, followed by vulcanization in a heated oven, delivering parts with consistent cross-sections.',
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
      <b>Fun Fact</b>: Silicone can stretch up to seven times its length without
      snapping—think of it as the stretchy sidekick your project deserves!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Project',
    href: '/contact',
  },
};

// Applications
export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Material',
    title: 'High Consistency Rubber (HCR)',
    description: 'A solid or semi-solid silicone that’s tough yet pliable.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Part Shape',
    title: 'Long Profiles',
    description: 'Tubing, hoses, seals with uniform cross-sections.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Production Volume',
    title: 'High-Volume Runs',
    description: 'Built for high-volume runs, making it a cost-saving champ.',
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
    'Silicone rubber extrusion molding is used in automotive, electronics, medical, and industrial sectors for its versatility and durability.',
  action: {
    text: 'See How ZetarMold Delivers Excellence',
    href: '/contact',
  },
};

// Where It's Used Gallery
export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description:
      'Seals and hoses that laugh in the face of high temps and tough conditions.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description:
      'Insulation for wires and cables that keeps electricity in check.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Biocompatible tubing and gaskets for life-saving devices.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Industrial',
    description: 'Profiles and seals that keep machinery humming smoothly.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Silicone Rubber Extrusion Molding</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Transform Your Ideas',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Low waste and high output make your budget smile.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatile',
    description: 'Complex cross-sections? No problem!',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Durable',
    description: 'Flexibility and heat resistance that stand the test of time.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Scalable',
    description: 'Perfect for big production runs with economies of scale.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Manufacturing Method <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare silicone rubber extrusion molding with other methods to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Help You Decide',
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
    method: 'Extrusion Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    complexity: 'Low-Medium',
  },
  {
    method: 'Injection Molding',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Compression Molding',
    costPerPart: 'Medium',
    initialInvestment: 'Low-Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Transfer Molding',
    costPerPart: 'Medium-High',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Limited',
    complexity: 'Medium',
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
    text: 'Discover ZetarMold’s Molding Magic',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Expertise',
    description: 'Since 2005, we’ve been molding success worldwide.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description:
      'ISO 9001, ISO 13485, TS16949—proof we don’t mess around with quality.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Facilities',
    description:
      '45 injection molding machines, including massive 1850T beasts for any part size.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: '20+ English-speaking pros ready to guide you across borders.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide Your Project',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Material Prep',
    description:
      'Mix HCR silicone with catalysts and additives for the perfect recipe.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Extrusion',
    description:
      'Feed it into a screw extruder and push it through a die to shape it up.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Curing',
    description:
      'Send it through a hot oven to vulcanize and lock in durability.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Post-Processing',
    description: 'Trim, inspect, and measure—because details matter.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Silicone Rubber
      Extrusion Molding
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Tolerances from ±0.05 mm to ±0.5 mm, depending on part size.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Die Material',
    description: 'Hardened steel to handle the heat and pressure like a champ.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Temperature Control',
    description: 'Optimal curing temperature for HCR silicone (up to 220°C).',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Silicone Rubber Extrusion Molding{' '}
      <span className="text-primary">Material</span> Considerations
    </>
  ),
  action: {
    text: 'Get Material Advice from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'HCR Silicone',
    description:
      'High Consistency Rubber for flexibility and heat resistance (up to 220°C).',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Additives',
    description:
      'Customize with fillers for hardness, color, or flame resistance.',
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
    text: 'Discover ZetarMold’s Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Expertise</b>: Our engineers are silicone whisperers,
      picking the right mix and perfecting the process for your needs.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Material Selection',
    description: 'Choosing the right silicone type for your application.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Die Design',
    description: 'Designing dies for complex cross-sections.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Temperature Control',
    description: 'Maintaining optimal temperature for curing.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Silicone Rubber Extrusion Molding Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Keep cross-sections uniform for top-notch quality.',
  },
  {
    content: 'Stick to solid or hollow parts—skip the tricky internal stuff.',
  },
  {
    content: 'Go for straight or curved shapes, not wild 3D twists.',
  },
  {
    content: 'Choose HCR silicone based on hardness and heat needs.',
  },
  {
    content: 'Plan for trimming or cutting to length post-extrusion.',
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
    text: 'Let ZetarMold Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Is the part continuous with a uniform cross-section?',
    options: [
      { text: 'Yes', result: 'Extrusion molding’s your hero' },
      { text: 'No', result: 'Check out injection or compression molding' },
    ],
  },
  {
    question: 'Need high-volume production?',
    options: [
      { text: 'Yes', result: 'Extrusion shines here' },
      { text: 'No', result: 'Other methods might fit smaller runs' },
    ],
  },
  {
    question: 'Require flexibility and heat resistance?',
    options: [
      { text: 'Yes', result: 'Silicone extrusion’s the one' },
      { text: 'No', result: 'Other materials could work' },
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
    title: 'Injection Molding',
    content: 'For complex, standalone parts.',
  },
  {
    title: 'Compression Molding',
    content: 'Great for simple-to-medium shapes.',
  },
  {
    title: 'Transfer Molding',
    content: 'Unique properties, medium complexity.',
  },
  {
    title: 'Calendering',
    content: 'Thin silicone sheets, anyone?',
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
    title: '20+ Years of Expertise',
    description: 'Since 2005, we’ve been molding success worldwide.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Our English-speaking team serves 20+ countries with ease.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949 mean we deliver the goods.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Facilities',
    description: '45 machines and dust-free workshops for precision.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Wins',
    description:
      '“ZetarMold’s speed and quality blew us away. They’re our go-to for molds!” — John D., Automotive Engineer',
  },
];
