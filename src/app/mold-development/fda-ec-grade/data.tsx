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
      FDA/EC-Grade Injection Molding:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Explore the world of FDA/EC-grade injection molding, crafting safe, compliant parts for medical, food, and pharmaceutical applications with ZetarMold’s expertise.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">FDA/EC-Grade</span> Injection
      Molding?
    </>
  ),
  action: {
    text: 'Let ZetarMold Handle Your Compliant Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      FDA/EC-grade injection molding is the gold standard for producing plastic
      parts that meet the rigorous safety and performance demands of the Food
      and Drug Administration (FDA) and European Commission (EC).
    </p>
    <p>
      It’s the go-to process for crafting everything from syringes to food
      containers, ensuring safety, sterility, and compliance.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve spent over 20 years mastering this art,
      delivering precision and trust to clients across the globe.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A precision process using specialized molds to create plastic parts compliant with FDA and EC regulations for safety and biocompatibility.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'FDA-Compliant Molding, EC-Approved Injection Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Ensures parts are safe, sterile, and contaminant-free, meeting the high standards of regulated industries.',
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
      <b>Fun Fact</b>: These molds are so clean they could star in a sci-fi
      flick—spotless enough for aliens and FDA inspectors alike!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Compliant Project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Medical Devices',
    description: 'Syringes, IV components, implants.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Food Contact Materials',
    description: 'Bottles, trays, utensils.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Pharmaceutical Packaging',
    description: 'Vials, caps, drug delivery systems.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Polypropylene (PP)',
    description: 'Food-safe and autoclavable.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Polycarbonate (PC)',
    description: 'Clear and tough for diagnostics.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'PEEK',
    description: 'Heat-resistant and implant-ready.',
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
    'FDA/EC-grade molding shines in healthcare, food packaging, and pharmaceuticals, delivering safe and reliable parts.',
  action: {
    text: 'See How ZetarMold Ensures Compliance',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Healthcare',
    description: 'Syringes and implants that meet strict safety standards.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Food Packaging',
    description: 'Containers that keep your food safe and sound.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Pharmaceuticals',
    description: 'Vials and caps that protect critical medications.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">FDA/EC-Grade</span> Injection
      Molding?
    </>
  ),
  action: {
    text: 'Let ZetarMold Ensure Your Project’s Compliance',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Safety Guaranteed',
    description: 'Meets FDA and EC standards—no regulatory headaches.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision Perfection',
    description: 'Tolerances tighter than a surgeon’s knot.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Material Flexibility',
    description: 'Works with a range of FDA/EC-approved plastics.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'High-Volume Hero',
    description: 'Scales up production without compromising quality.',
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
    'Compare molding methods to find the perfect fit for your compliant project.',
  action: {
    text: 'Let ZetarMold Simplify Your Choice',
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
    header: 'Compliance',
    accessorKey: 'compliance',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'FDA/EC-Grade IM',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    compliance: 'Yes',
  },
  {
    method: 'Standard IM',
    costPerPart: 'Low-Medium',
    initialInvestment: 'High',
    speed: 'Moderate',
    precision: 'High',
    compliance: 'No',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    compliance: 'Limited',
  },
  {
    method: 'CNC Machining',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Very High',
    compliance: 'Limited',
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
    text: 'Discover Compliance with ZetarMold',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description: '45 machines, including 1850T giants for big projects.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, TS16949—compliance is our core.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-Free Workshops',
    description: 'M7-level cleanrooms for pristine, compliant parts.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros for global collaboration.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide You Through Compliance',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Part Design',
    description: 'CAD tailored to FDA/EC regulations.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Material Selection',
    description: 'Choosing FDA/EC-approved plastics like PP or PE.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Design',
    description: 'Built for cleanrooms and sterilization.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Production',
    description: 'Cleanroom molding with tight tolerances.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Quality Control',
    description: 'Rigorous checks for compliance.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for FDA/EC-Grade
      Injection
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Compliant Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Tolerances <0.01mm for flawless parts.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Sterility',
    description: 'Designed for cleanroom compatibility.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Durability',
    description: 'Made with tough steels like P20 and H13.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      FDA/EC-Grade <span className="text-primary">Material</span> Considerations
    </>
  ),
  action: {
    text: 'Get Material Expertise from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Polypropylene',
    description: 'Food-safe and autoclavable.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Polycarbonate',
    description: 'Clear and tough for medical tools.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'PEEK',
    description: 'Heat-resistant for implants.',
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
    text: 'Discover ZetarMold’s Compliance Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Edge</b>: We turn regulatory hurdles into smooth successes.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Compliance',
    description: 'Meeting FDA/EC standards with precision.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Sterility',
    description: 'Cleanroom production eliminates risks.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Tolerances',
    description: 'Tight specs ensure reliability.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'FDA/EC-Grade Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (2-4 mm) for stability.',
  },
  {
    content: 'Generous corner radii (>0.5 mm) to reduce stress.',
  },
  {
    content: 'Draft angles (1-2°) for easy ejection.',
  },
  {
    content: 'Smart gate placement for smooth flow.',
  },
  {
    content: 'Ensure FDA/EC compliance at every step.',
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
    question: 'Need high volume?',
    options: [
      { text: 'Yes', result: 'FDA/EC-Grade Injection Molding' },
      { text: 'No', result: '3D Printing or CNC' },
    ],
  },
  {
    question: 'Regulatory compliance required?',
    options: [
      { text: 'Yes', result: 'FDA/EC-Grade Injection Molding' },
      { text: 'No', result: 'Standard Injection Molding' },
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
    title: 'Material Science',
    content: 'Crafting FDA/EC-approved plastics.',
  },
  {
    title: 'CAD Software',
    content: 'Designing with regulatory precision.',
  },
  {
    title: 'Quality Control',
    content: 'Ensuring compliance every step of the way.',
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
    title: '20+ Years of Excellence',
    description: 'Molding expertise since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—top-tier standards.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s compliance game is unmatched.” — Dr. Lee, Medical Device Engineer',
  },
];
