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
      Automotive Injection Mold Development:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Automotive injection mold development is the unsung hero of modern car manufacturing, shaping everything from sleek dashboards to rugged bumpers with precision and efficiency. This process churns out lightweight, durable plastic parts that meet the automotive industry’s sky-high standards for performance, aesthetics, and cost-effectiveness. At ZetarMold, with over 20 years of molding magic, we’re here to turn your automotive dreams into reality—faster than you can say “horsepower!”',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">
        Automotive Injection Mold Development
      </span>
      ?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Automotive Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Automotive Injection Mold Development is a precision-driven process of
      designing and manufacturing molds for injection molding, used to create
      plastic parts tailored for vehicles—think dashboards, door panels, and
      engine covers.
    </p>
    <p>
      These molds are built to automotive-grade perfection, with tolerances as
      tight as ±0.02 mm, crafted from top-tier tool steels like H13 and P20, and
      designed to produce parts with specific finishes, from glossy dashboards
      to textured bumpers.
    </p>
    <p>
      At <b>ZetarMold</b>, with over 20 years of molding magic, we deliver
      solutions that meet the industry’s sky-high standards with a global reach
      and expertise that makes your projects shine.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A precision-driven process of designing and manufacturing molds for injection molding, used to create plastic parts tailored for vehicles.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Auto Mold Design, Car Part Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Molten plastic is injected into custom molds under high pressure, cooled, and ejected as finished parts ready for the assembly line.',
  },
];

export const APPLICATIONS_INFO = {
  title: (
    <>
      How It’s <span className="text-primary">Classified</span>
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: The first plastic car part debuted in 1939 on a
      Chrysler—proof that even back then, plastic was gearing up to steal the
      show!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your automotive project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Process',
    title: 'Standard Injection Molding',
    description: 'For straightforward parts.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Multi-Cavity Molding',
    description: 'For cranking out multiple parts at once.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Overmolding',
    description: 'For fancy multi-material designs like soft-touch handles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Mold Materials',
    description:
      'P20 for cost, H13 for toughness, S136 for corrosion resistance.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Part Materials',
    description: 'PP, ABS, PC—plastic’s greatest hits.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Interior',
    description: 'Panels, seats, consoles.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Exterior',
    description: 'Bumpers, grilles, lights.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Functional',
    description: 'Engine housings, connectors.',
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
    'Automotive injection molding shapes everything from interior components to exterior parts and functional elements, meeting the industry’s high standards.',
  action: {
    text: 'See How Zetar Transforms Automotive Parts',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Interior Components',
    description: 'Dashboards and door panels that elevate the driver’s vibe.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Exterior Parts',
    description: 'Bumpers and fenders tough enough for the open road.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Functional Parts',
    description:
      'Engine covers and air ducts that keep things running smoothly.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits (Why It)
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Automotive Injection Molding</span>?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Automotive Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Lightweight',
    description:
      'Sheds vehicle weight for better mileage—your fuel gauge will thank you.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'High-volume runs slash per-part costs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatile',
    description: 'Tackles intricate designs without breaking a sweat.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Durable',
    description: 'Parts stand up to heat, cold, and the occasional pothole.',
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
    'Compare different manufacturing methods to find the best fit for your automotive project. Consider factors like cost, speed, and material options.',
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
    method: 'Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Metal Stamping',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    complexity: 'Medium',
  },
  {
    method: 'Vacuum Forming',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Low',
    speed: 'Moderate',
    precision: 'Low-Medium',
    materialOptions: 'Limited',
    complexity: 'Low',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Wide',
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
      '45 injection molding machines, including 1850T for big parts.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our middle name.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description: 'For pristine production.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros bridging the globe for seamless collaboration.',
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
    description: 'Dreamed up in CAD with automotive precision in mind.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Design',
    description:
      'Engineered with tolerances tighter than a pit crew’s schedule (<0.02 mm).',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description: 'Plastic flows in at 70-140 MPa—high pressure, high stakes.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling',
    description: 'Rapid chill for shape retention.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Ejection',
    description: 'Pop goes the part, ready for the road.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Automotive Injection
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
    description: 'Multi-cavity for volume, overmolding for flair.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Materials',
    description:
      'H13 steel (Hardness ≥50 HRC) takes the heat and keeps on ticking.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Cooling',
    description: 'Smart channels cut warpage and speed things up.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Automotive Injection <span className="text-primary">Material</span>{' '}
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
    title: 'ABS',
    description: 'Smooth and strong for interiors.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'PP',
    description: 'Flexible and tough for bumpers.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'PC',
    description: 'Crystal-clear strength for functional bits.',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers tackle automotive molding
      challenges like pros, ensuring your parts are flawless.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Tight Tolerances',
    description: 'Precision engineering to meet ±0.02 mm tolerances.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Heat Management',
    description: 'Smart cooling channels prevent warpage.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Durability',
    description: 'Materials built to endure heat, cold, and impacts.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Automotive Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (2-4 mm) for smooth flow.',
  },
  {
    content: 'Draft angles (1-2°) for easy ejection.',
  },
  {
    content: 'Rounded corners to dodge stress cracks.',
  },
  {
    content: 'Gate placement that avoids ugly seams.',
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
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: '3D Printing or CNC' },
    ],
  },
  {
    question: 'Complex shape?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: 'Vacuum Forming' },
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
    title: 'CAD Software',
    content: 'Precision design from the get-go.',
  },
  {
    title: 'Quality Control',
    content: 'PPAP ensures every part’s a winner.',
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
    title: '20+ Years of Expertise',
    description: 'Molding masters since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with a multilingual crew.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—check, check, check.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s precision and speed are unmatched.” — Jane S., Automotive Engineer',
  },
];
