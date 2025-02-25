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
      High Volume Injection Mold Development:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'High Volume Injection Mold Development is the turbocharged engine of plastic manufacturing—built to churn out thousands (or even millions) of identical parts with speed, precision, and cost-efficiency. Imagine it as the industrial equivalent of a coffee machine on steroids: fast, reliable, and ready to serve up a million cups (or parts) without breaking a sweat. At ZetarMold, with over 20 years of molding expertise, we’re here to turbocharge your next big project—whether it’s automotive components, packaging solutions, or tech gadgets.',
  action: {
    text: 'Get a Free Consultation from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">
        High Volume Injection Mold Development
      </span>
      ?
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
      High Volume Injection Mold Development is a manufacturing process designed
      to produce massive quantities of plastic parts quickly and consistently,
      using molds optimized for mass production.
    </p>
    <p>
      At <b>ZetarMold</b>, with over 20 years of molding expertise, we’re here
      to turbocharge your next big project—whether it’s automotive components,
      packaging solutions, or tech gadgets.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process designed to produce massive quantities of plastic parts quickly and consistently, using molds optimized for mass production.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Mass Production Molding, High-Capacity Injection Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Leverages multi-cavity molds, advanced cooling systems, and durable materials to maximize output and minimize cycle times.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: (
    <>
      Applications <span className="text-primary">&</span> Benefits
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Some high-volume molds can spit out 100 parts per
      cycle—faster than you can say “caffeine rush”!
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
    description: 'Dashboards and bumpers for mass-produced vehicles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Packaging',
    description: 'Lids and bottles for consumer goods by the millions.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Electronics',
    description: 'Casings for gadgets that fly off the shelves.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Medical',
    description: 'Disposable tools and devices in bulk.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">
        High Volume Injection Mold Development
      </span>
      ?
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
    title: 'Cost-Per-Part Crusher',
    description: 'Low unit costs for massive runs.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Consistency King',
    description: 'Every part is a carbon copy of the last.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Material Flexibility',
    description: 'Works with a wide range of plastics.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Speed Demon',
    description: 'Cycle times as low as 5 seconds—blink and you’ll miss it.',
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
    'Compare different injection molding methods to find the best fit for your project. Consider factors like cost, speed, and scalability.',
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
    header: 'Scalability',
    accessorKey: 'scalability',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'High Volume IM',
    costPerPart: 'Low-Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    scalability: 'High',
    complexity: 'High',
  },
  {
    method: 'Blow Molding',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    scalability: 'Medium',
    complexity: 'Low-Medium',
  },
  {
    method: 'Vacuum Forming',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Low',
    speed: 'Moderate',
    precision: 'Low-Medium',
    scalability: 'Low',
    complexity: 'Low',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    scalability: 'Low',
    complexity: 'High',
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
    text: 'Discover Zetar: Your High-Volume Superheroes',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including 1850T beasts for massive parts.',
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
    description: 'Dust-free workshops for pristine production perfection.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros to make global teamwork a breeze.',
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
    description: 'CAD wizardry tailored for high-volume production.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Design',
    description:
      'Multi-cavity layouts, hot runners, and cooling channels galore.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description:
      'Molten plastic blasts in at 70-140 MPa—like a pressure cooker on overdrive.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling & Ejection',
    description: 'Quick chill and a smooth exit, ready for the next round.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for High Volume
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
    title: 'Design',
    description: 'Multi-cavity setups for volume, hot runners for speed.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Materials',
    description:
      'H13 steel (Hardness ≥50 HRC) for molds that outlast your favorite sitcom.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Cooling',
    description:
      'Smart channels cut cycle times like a hot knife through butter.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      High Volume Injection <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get Expert Material Advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'PP',
    description: 'Flows like a river, ideal for packaging.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'ABS',
    description: 'Tough and stylish for automotive interiors.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'PC',
    description: 'Crystal-clear and strong for electronics.',
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
    text: 'Discover Expert Solutions with Zetar',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold&apos;s Edge</b>: We turn your ideas into millions of parts—
      faster than a cheetah chasing lunch!
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Mold Wear',
    description:
      'Durable materials and regular maintenance keep molds in top shape.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Cycle Time Optimization',
    description: 'Advanced cooling and process control for maximum efficiency.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Material Flow',
    description:
      'Optimized gating and runner systems ensure smooth plastic flow.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'High Volume Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (2-4 mm) for even cooling.',
  },
  {
    content: 'Draft angles (1-2°) for a smooth exit strategy.',
  },
  {
    content: 'Rounded corners to dodge stress fractures.',
  },
  {
    content: 'Gate placement for flawless plastic flow.',
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
    question: 'Need high volume?',
    options: [
      { text: 'Yes', result: 'High Volume Injection Molding' },
      { text: 'No', result: '3D Printing or CNC might do' },
    ],
  },
  {
    question: 'Complex shape?',
    options: [
      { text: 'Yes', result: 'Injection Molding’s your champ' },
      { text: 'No', result: 'Vacuum Forming could work' },
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
    title: 'Blow Molding',
    content: 'Perfect for hollow goodies like bottles.',
  },
  {
    title: 'Vacuum Forming',
    content: 'Great for big, simple shapes.',
  },
  {
    title: '3D Printing',
    content: 'Ideal for prototypes or small runs.',
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
    description: 'Molding magic since 2005.',
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
    title: 'Client Raves',
    description:
      '“ZetarMold’s precision and speed are unmatched.” — John D., Automotive Engineer',
  },
];
