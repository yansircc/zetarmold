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
  title:
    'Impact Resistant Injection Mold Development: A Comprehensive Guide for Your Project with ZetarMold',
  description:
    'Impact Resistant Injection Mold Development is the superhero of plastic manufacturing—creating parts that can take a punch (or a crash) and keep on ticking. Think car bumpers, sports helmets, and surgical tools that refuse to crack under pressure. This process blends precision molding with tough-as-nails materials to deliver durability where it counts. At ZetarMold, with over 20 years of experience, we’re here to make your parts invincible—faster than you can say &quot;bulletproof.&quot;',
  action: {
    text: 'Get a Free Consultation from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: 'What is Impact Resistant Injection Mold?',
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Impact Resistant Injection Mold Development is a specialized injection
      molding process designed to produce plastic parts that withstand
      high-impact forces without breaking or deforming.
    </p>
    <p>
      At <b>ZetarMold</b>, with over 20 years of experience, we&apos;re here to
      make your parts invincible—faster than you can say
      &quot;bulletproof.&quot;
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A specialized injection molding process designed to produce plastic parts that withstand high-impact forces without breaking or deforming.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'High-Durability Molding, Impact-Tough IM.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Uses impact-resistant materials (like polycarbonate and ABS) and smart part design to ensure strength, tested by standards like Izod or Charpy impact tests.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: 'Applications and Benefits',
  description: (
    <>
      <b>Fun Fact</b>: Polycarbonate is so tough it’s used in bulletproof
      glass—your next part could stop a speeding bullet (or at least a rogue
      shopping cart)!
    </>
  ),
  action: {
    text: 'Let Zetar Engineer Your Project',
    href: '/contact',
  },
};

// Applications
export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Industry',
    title: 'Automotive',
    description:
      'Bumpers and panels that take a hit so your car doesn’t have to.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Sports Equipment',
    description: 'Helmets and guards that keep athletes in the game.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Medical Devices',
    description: 'Tools and cases that stay solid under stress.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Consumer Goods',
    description: 'Power tools that survive your DIY “enthusiasm.”',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: 'Why Choose Impact Resistant Injection Mold Development?',
  action: {
    text: 'Let Zetar Take Care of Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Unbreakable Durability',
    description: 'Parts that scoff at cracks and dents.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Saving',
    description: 'Fewer replacements, more value.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Lightweight',
    description: 'Tougher than metal but half the weight.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Design Freedom',
    description: 'Handles complex shapes with ease.',
  },
];

// Comparison
export const COMPARISON = {
  title: 'Injection Molding Method Comparison',
  description:
    'Compare different injection molding methods to find the best fit for your project. Consider factors like cost, speed, and durability.',
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
    header: 'Durability',
    accessorKey: 'durability',
  },
  {
    header: 'Weight',
    accessorKey: 'weight',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'Impact-Resistant IM',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    durability: 'High',
    weight: 'Light',
    complexity: 'High',
  },
  {
    method: 'Metal Parts',
    costPerPart: 'High',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    durability: 'Very High',
    weight: 'Heavy',
    complexity: 'Medium',
  },
  {
    method: 'Vacuum Forming',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Low',
    speed: 'Moderate',
    precision: 'Low-Medium',
    durability: 'Medium',
    weight: 'Light',
    complexity: 'Low',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    durability: 'Low-Medium',
    weight: 'Light',
    complexity: 'High',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = {
  title: 'Why Choose ZetarMold?',
  action: {
    text: 'Discover Zetar: Your Durability Dream Team',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including 1850T giants for massive, tough parts.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, TS16949 certifications—quality is our middle name.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description: 'Dust-free workshops for flawless production.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros to make global collaboration a breeze.',
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
    title: 'Part Design',
    description:
      'Built with uniform walls and rounded corners for maximum strength.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Material Selection',
    description: 'Polycarbonate or ABS for top-tier toughness.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Design',
    description: 'Precision-engineered with tolerances <0.01mm.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Injection',
    description:
      'Molten plastic blasts in at 70-140 MPa—high stakes, high strength.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Cooling & Ejection',
    description: 'Quick chill, smooth release, ready to roll.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: 'Mold Design for Impact Resistant Injection',
  action: {
    text: 'Sit Back and Let Zetar Design Your Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Design',
    description:
      'Multi-cavity setups with strategic gate placement for efficiency.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Materials',
    description:
      'H13 steel (Hardness ≥50 HRC) for molds that endure the grind.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Cooling',
    description: 'Clever channels to keep warping at bay and speed up cycles.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: 'Impact Resistant Injection Material Considerations',
  action: {
    text: 'Get Expert Material Advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Polycarbonate',
    description: 'Super-tough, processed at 280-320°C.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'ABS',
    description: 'Affordable and resilient, processed at 230-260°C.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Reinforced PP',
    description: 'Strong and budget-friendly, processed at 200-250°C.',
    image: '/images/placeholder/1.svg',
  },
];

// Challenges
export const CHALLENGES = {
  title: 'Challenges and Solutions',
  action: {
    text: 'Discover Expert Solutions with Zetar',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold&apos;s Edge</b>: We turn your concepts into unbreakable
      realities—faster than a linebacker tackling a piñata!
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Material Selection',
    description: 'Choosing the right tough material for your application.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Design Optimization',
    description: 'Ensuring part design maximizes impact resistance.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Processing Conditions',
    description: 'Fine-tuning injection parameters for optimal strength.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Impact Resistant Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (2-4 mm) for even strength.',
  },
  {
    content: 'Rounded corners to dodge stress fractures.',
  },
  {
    content: 'Draft angles (1-2°) for smooth ejection.',
  },
  {
    content: 'Smart gate placement to avoid weak spots.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: 'Decision Tree for Manufacturing Method',
  action: {
    text: 'Let Zetar Make Decisions for You',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Need high impact resistance?',
    options: [
      { text: 'Yes', result: 'Impact-Resistant Injection Molding' },
      { text: 'No', result: 'Standard Injection Molding' },
    ],
  },
  {
    question: 'High-volume production?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: '3D Printing or CNC' },
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
    title: 'Standard Injection Molding',
    content: 'For less rugged needs.',
  },
  {
    title: 'Blow Molding',
    content: 'Perfect for hollow items.',
  },
  {
    title: 'Vacuum Forming',
    content: 'Great for big, simple shapes.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: 'Why Partner with ZetarMold?',
  youtubeId: '6gAjMdkEd2s',
  action: {
    text: 'Partner with Zetar Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Grit',
    description: 'Molding mastery since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s durability game is unmatched.” — Alex P., R&D Manager',
  },
];
