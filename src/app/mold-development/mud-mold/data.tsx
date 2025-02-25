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
  Factory,
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
      MUD Injection Molds:
      <br /> Your Go-To Guide for Rapid Prototyping and Small Runs
    </>
  ),
  description:
    'Discover the power of MUD injection molds for rapid prototyping and small to medium production runs, with ZetarMold’s expertise.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What Are <span className="text-primary">MUD Injection Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Handle Your MUD Mold Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      MUD injection molds, or Master Unit Die molds, use a standardized frame
      with interchangeable inserts for flexible and cost-effective production.
    </p>
    <p>
      They’re perfect for rapid prototyping and small to medium runs, offering
      quick changeovers and reduced costs.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve mastered this technology to deliver precision
      and efficiency.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A molding system with a fixed frame and interchangeable inserts for quick design changes.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'MUD molds, quick-change mold systems.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'One frame, multiple inserts—swap inserts in minutes for different parts.',
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
      <b>Fun Fact</b>: Switching inserts in a MUD mold can take just minutes,
      unlike traditional molds that take weeks!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your MUD Mold Project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Process',
    title: 'Injection Molding Subset',
    description: 'Focuses on quick changeovers.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Frame and Inserts',
    description: 'Steel frames with aluminum or steel inserts.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Prototyping dashboards and more.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description: 'Small batches of casings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Prototyping surgical tools.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Parts with frequent design tweaks.',
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
    'MUD molds excel in prototyping and small runs across industries like automotive, consumer goods, medical, and electronics.',
  action: {
    text: 'See How ZetarMold Optimizes MUD Molds',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Prototyping dashboards and interior parts.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Consumer Goods',
    description: 'Small batches of electronic casings.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Prototyping surgical instruments.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Parts needing frequent design changes.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">MUD Injection Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Enhance Your Prototyping',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Lower upfront costs and faster lead times.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Flexible',
    description: 'Easily tweak designs without major expenses.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Scalable',
    description: 'Ideal for small to medium production runs.',
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
    'Compare MUD molds with other methods to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Simplify Your Decision',
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
    header: 'Flexibility',
    accessorKey: 'flexibility',
  },
  {
    header: 'Production Volume',
    accessorKey: 'productionVolume',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'MUD Injection Molds',
    costPerPart: 'Medium',
    initialInvestment: 'Low-Medium',
    speed: 'Fast',
    flexibility: 'High',
    productionVolume: 'Low-Medium',
  },
  {
    method: 'Full Molds',
    costPerPart: 'Low',
    initialInvestment: 'High',
    speed: 'Slow',
    flexibility: 'Low',
    productionVolume: 'High',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Medium',
    flexibility: 'High',
    productionVolume: 'Very Low',
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
    text: 'Discover Efficiency with ZetarMold',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Expertise',
    description: 'Mastering injection molding since 2005.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—trustworthy standards.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking professionals at your service.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Machinery',
    description: '45 machines, including 1850T for large projects.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide Your MUD Mold Process',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Design',
    description: 'Create part and insert designs with CAD.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Manufacture Inserts',
    description: 'Precision machining with CNC or EDM.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Select Frame',
    description: 'Choose the right MUD frame for your insert.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Assemble',
    description: 'Insert snaps into the frame easily.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Set Up Machine',
    description: 'Dial in injection parameters.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
  {
    title: 'Produce Parts',
    description: 'Inject, cool, eject—repeat.',
    image: '/images/placeholder/1.svg',
    icon: 'Repeat',
  },
  {
    title: 'Disassemble',
    description: 'Store the insert for future use.',
    image: '/images/placeholder/1.svg',
    icon: 'Save',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for MUD Injection
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your MUD Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Design',
    description: 'Inserts must fit the frame perfectly.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Materials',
    description: 'Aluminum for prototypes, steel for production.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Precision',
    description: 'Tight tolerances for a seamless fit.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      MUD Injection <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get Material Expertise from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Plastic Compatibility',
    description: 'Match insert material to plastic properties.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Thermal Management',
    description: 'Ensure inserts handle heat without warping.',
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
    text: 'Discover ZetarMold’s MUD Mold Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Expertise</b>: Our engineers ensure your MUD projects run
      smoothly with precision design and material selection.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Insert Fit',
    description: 'Precision machining for a perfect fit.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Wear and Tear',
    description: 'Durable materials extend insert life.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Cooling Efficiency',
    description: 'Optimized channels for fast cycles.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'MUD Injection Molding Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Ensure insert design fits the MUD frame.',
  },
  {
    content: 'Pick the right insert material (aluminum or steel).',
  },
  {
    content: 'Optimize gating and venting to avoid defects.',
  },
  {
    content: 'Plan cooling channels for efficient cycles.',
  },
  {
    content: 'Test initial runs to fine-tune parameters.',
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
    text: 'Let ZetarMold Decide for You',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Is your production volume low to medium?',
    options: [
      { text: 'Yes', result: 'MUD molds could be ideal' },
      { text: 'No', result: 'Full molds might be better' },
    ],
  },
  {
    question: 'Expecting design changes?',
    options: [
      { text: 'Yes', result: 'MUD molds offer flexibility' },
      { text: 'No', result: 'Compare cost per part' },
    ],
  },
];

// Related Tech
export const RELATED_TECH = {
  title: 'Related Technologies',
  action: {
    text: 'Explore ZetarMold’s Innovative Solutions',
    href: '/contact',
  },
};

export const RELATED_TECH_MEDIA_BESIDE_LAYOUT = {
  image: '/images/placeholder/1.svg',
};

export const RELATED_TECH_ITEMS: TextListProps['items'] = [
  {
    title: 'Standard Injection Molding',
    content: 'For high-volume production.',
  },
  {
    title: '3D Printing',
    content: 'For unique shapes or one-offs.',
  },
  {
    title: 'Compression Molding',
    content: 'For different part geometries.',
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
    description: 'Delivering precision since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description: 'Supporting clients in 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, ISO 14001, ISO 45001.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Facilities',
    description: '45 machines and dust-free workshops.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Success',
    description:
      '“ZetarMold’s quick response and high-quality molds have been a game-changer.” — Sarah L., Product Manager',
  },
];
