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
    'Medical-Grade Injection Mold: A Comprehensive Guide for Your Project with ZetarMold',
  description:
    'Medical-grade injection mold development is the unsung hero behind the plastic parts that power healthcare—think syringes, IV components, and surgical tools that save lives daily. This process crafts components that meet sky-high standards for safety, sterility, and precision, all while keeping production efficient. At ZetarMold, we’ve been perfecting this craft for over 20 years, blending cutting-edge tech with a dash of creativity to deliver world-class solutions to clients across the globe.',
  action: {
    text: 'Get a Free Consultation from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: 'What is Medical-Grade Injection Mold?',
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Medical-grade injection mold development is a precision-driven process
      that designs and manufactures molds for injection molding plastic parts
      used in medical devices. These parts must be biocompatible, sterile, and
      flawlessly crafted.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been perfecting this craft for over 20 years,
      blending cutting-edge tech with a dash of creativity to deliver
      world-class solutions to clients across the globe.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A precision-driven process that designs and manufactures molds for injection molding plastic parts used in medical devices. These parts must be biocompatible, sterile, and flawlessly crafted.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Medical Injection Molds, Pharmaceutical Molding Tools.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Produces defect-free, sterilizable parts from medical-grade plastics, meeting strict FDA and ISO 13485 standards.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: 'Applications and Benefits',
  description: (
    <>
      <b>Fun Fact</b>: These molds are so precise, they could probably craft a
      plastic replica of your fingerprint—CSI would be jealous!
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
    title: 'Medical Devices',
    description: 'Syringes, IV components, diagnostic kits.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Surgical Instruments',
    description: 'Tools that endure sterilization like champs.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Implants',
    description: 'Biocompatible parts that live inside us.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: 'Why It’s a Game-Changer',
  action: {
    text: 'Let Zetar Take Care of Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Precision',
    description: 'Tight tolerances for flawless parts.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Sterility',
    description: 'Cleanroom magic keeps bugs out.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatility',
    description: 'Handles a buffet of medical-grade plastics.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Scalability',
    description: 'High-volume production? No sweat.',
  },
];

// Comparison
export const COMPARISON = {
  title: 'Technology Comparison',
  description:
    'Compare different technologies to find the best fit for your project. Consider factors like cost, speed, and sterility.',
  action: {
    text: 'Overwhelmed by Data? Let Zetar Make the Decision',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Technology',
    accessorKey: 'technology',
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
    header: 'Sterility',
    accessorKey: 'sterility',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'Medical-Grade IM',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    sterility: 'Yes',
  },
  {
    technology: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    sterility: 'No',
  },
  {
    technology: 'CNC Machining',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Very High',
    sterility: 'No',
  },
  {
    technology: 'Blow Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    sterility: 'No',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = {
  title: 'Why Choose ZetarMold?',
  action: {
    text: 'Discover Zetar: Your Healthcare Heroes',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including 1850T beasts for big jobs.',
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
    description: 'Dust-free M7-level workshops for pristine parts.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros ready to chat with global clients.',
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
    description: 'CAD magic tailored to medical needs.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Material Selection',
    description: 'Picking biocompatible winners like PEEK.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Design',
    description: 'Cleanroom-ready precision.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Mold Fabrication',
    description: 'CNC or EDM for surgical-grade accuracy.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Machine Setup',
    description: 'Dialing in 50-80°C mold temps and 70-140 MPa pressure.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
  {
    title: 'Production & QC',
    description: 'Cleanroom molding with sterility checks.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: 'Mold Design for Medical-Grade Injection',
  action: {
    text: 'Sit Back and Let Zetar Design Your Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Design',
    description: 'Built for cleanrooms and easy sterilization.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Materials',
    description:
      'Tough steels like H13 that last longer than your favorite scalpel.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Quality Control',
    description: 'Inspections for defects and germ-free glory.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: 'Medical-Grade Injection Material Considerations',
  action: {
    text: 'Get Expert Material Advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Polypropylene',
    description: 'Autoclavable and syringe-friendly.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Polycarbonate',
    description: 'Clear and tough for diagnostics.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'PEEK',
    description: 'Implant-ready and heat-resistant.',
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
      <b>ZetarMold&apos;s Secret Sauce</b>: We turn your ideas into medical
      miracles with precision and pizzazz.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Sterility',
    description: 'Cleanroom production to keep contamination at bay.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Precision',
    description: 'Tolerances tighter than a surgeon’s stitch—think <0.01mm.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Material Selection',
    description:
      'Choosing biocompatible materials that meet ISO 10993 standards.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Medical-Grade Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (2-4 mm).',
  },
  {
    content: 'Generous corner radii (>0.5 mm).',
  },
  {
    content: 'Draft angles (1-2°) for smooth ejection.',
  },
  {
    content: 'Smart gate placement.',
  },
  {
    content: 'Meets FDA and ISO 13485 standards.',
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
    question: 'High volume?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: '3D Printing or CNC' },
    ],
  },
  {
    question: 'Need sterility?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: 'Other options' },
    ],
  },
  {
    question: 'Complex design?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: 'Blow Molding, Vacuum Forming, Extrusion Molding' },
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
    title: 'Material Science',
    content: 'Cooking up next-gen medical plastics.',
  },
  {
    title: 'CAD Software',
    content: 'Designing parts with surgical accuracy.',
  },
  {
    title: 'Simulation Tools',
    content: 'Predicting mold flow like a crystal ball.',
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
    title: '20+ Years of Mastery',
    description: 'Injection Mold since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Brilliance',
    description: 'ISO 9001, ISO 13485, TS16949.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Cheers',
    description:
      '“ZetarMold’s precision is a game-changer.” — Dr. Lee, Medical Device Engineer',
  },
];
