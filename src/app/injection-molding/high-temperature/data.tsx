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
      High Temperature Material Injection Molding:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Explore the power of high temperature material injection molding—perfect for parts that thrive in extreme heat and tough conditions with ZetarMold’s expertise.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">High Temperature Material</span>{' '}
      Injection Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      High Temperature Material Injection Molding is a specialized process that
      transforms high-performance plastics like PEEK and PEI into durable,
      heat-resistant parts capable of withstanding up to 400°C.
    </p>
    <p>
      It’s the go-to choice for industries like aerospace, automotive, medical,
      and electronics where precision and resilience are non-negotiable.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this for over 20 years,
      delivering parts that perform under pressure with global expertise.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A process where high-performance plastics are melted at extreme temperatures and injected into molds to create tough, heat-resistant parts.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description:
      'High-Performance Plastic Molding, Heat-Resistant Injection Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'High-performance plastics are heated to 340–400°C, injected into molds under pressure, cooled, and ejected with precision.',
  },
];

// Standards & Classifications
export const APPLICATIONS_INFO = {
  title: (
    <>
      Standards <span className="text-primary">&</span> Classifications
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Materials like PEEK can handle 250°C without breaking a
      sweat—perfect for when your project needs to stay cool in a firestorm!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your project',
    href: '/contact',
  },
};

// Applications
export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Aerospace',
    description: 'Engine components, heat shields.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Under-hood components.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Sterilizable instruments.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Heat-resistant parts.',
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
    'High temperature material injection molding shines in industries needing parts that endure extreme heat and demanding conditions.',
  action: {
    text: 'See How Zetar Transforms Materials for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Aerospace',
    description: 'Parts that scoff at 250°C jet engine vibes.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Components that thrive next to roaring engines.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Tools that endure sterilization like champs.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Bits that keep devices humming in the heat.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">High Temperature Material</span>{' '}
      Injection Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Heat Resistance',
    description: 'Laughs at extreme temperatures up to 250°C and beyond.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Strength',
    description: 'Tough enough to handle brutal applications.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Efficiency',
    description: 'Built for high-volume production to save time and cost.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Precision',
    description: 'Nails complex shapes with tolerances down to 0.02mm.',
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
    'Compare methods to find the perfect fit for your heat-resistant project.',
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
    header: 'Heat Resistance',
    accessorKey: 'heatResistance',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'High Temp Injection Molding',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    heatResistance: 'High',
    complexity: 'High',
  },
  {
    method: 'Metal Injection Molding',
    costPerPart: 'High',
    initialInvestment: 'Very High',
    speed: 'Moderate',
    precision: 'High',
    heatResistance: 'Very High',
    complexity: 'High',
  },
  {
    method: 'CNC Machining',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Very High',
    heatResistance: 'Varies',
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
    text: 'Discover Zetar: 300+ Projects Delivered Annually',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description: '45 machines ready for high-temp challenges.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, TS16949—top-tier standards.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description: 'M7-level clean rooms for medical and food-grade parts.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros for global success.',
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
    title: 'Material Prep',
    description: 'High-performance plastics are dried and prepped.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Melting',
    description: 'Heated to 340–400°C until molten.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description: 'Shot into molds at high pressure.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling',
    description: 'Cooled slowly to prevent warping.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Ejection',
    description: 'Ejected and ready for action.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for High Temperature
      Injection
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
    description: 'Molds with tolerances tighter than 0.02mm.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: 'Hardened steels like H13 to handle the heat.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Advanced channels for warp-free cooling.',
  },
];

// Material Considerations
export const MATERIAL_CONSIDER = {
  title: (
    <>
      High Temperature Injection <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get expert material advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Heat Resistance',
    description: 'Materials like PEEK thrive at 250°C and beyond.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Strength',
    description: 'High tensile strength for tough applications.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description: 'Higher costs and longer cycles, but worth the payoff.',
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
      <b>ZetarMold’s Edge</b>: Our engineers are heat-whisperers, crafting molds
      and parts that stand up to the toughest tests.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Material Degradation',
    description: 'Precision temp control keeps plastics intact.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping',
    description: 'Uniform cooling systems prevent distortion.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Cost',
    description: 'High-volume runs make it cost-effective.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'High Temperature Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Pick materials with high HDT (e.g., PEEK, PEI).',
  },
  {
    content: 'Keep wall thickness uniform to avoid warping.',
  },
  {
    content: 'Place gates for smooth flow.',
  },
  {
    content: 'Add draft angles for easy ejection.',
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
    question: 'Need heat resistance above 150°C?',
    options: [
      { text: 'Yes', result: 'High-temp molding’s your hero.' },
      { text: 'No', result: 'Standard molding could work.' },
    ],
  },
  {
    question: 'High production volume?',
    options: [
      { text: 'Yes', result: 'Injection molding’s the ticket.' },
      { text: 'No', result: 'CNC might be your vibe.' },
    ],
  },
  {
    question: 'Complex shapes?',
    options: [
      { text: 'Yes', result: 'Injection molding nails it.' },
      { text: 'No', result: 'Simpler methods may do.' },
    ],
  },
];

// Related Technologies
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
    title: 'Metal Injection Molding',
    content: 'For metal parts that love the heat.',
  },
  {
    title: 'Hot Isostatic Pressing',
    content: 'Boosts part density.',
  },
  {
    title: 'Additive Manufacturing',
    content: 'Great for prototypes or small batches.',
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
    title: '20+ Years of Mastery',
    description: 'Turning heat into perfection since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—we’ve got the creds.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      'ZetarMold’s high-temp skills took our aerospace project to new heights! — Sarah K., Aerospace Engineer',
  },
];
