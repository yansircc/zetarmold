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
      Precision Polish Injection Mold:
      <br /> A Comprehensive Guide by ZetarMold
    </>
  ),
  description:
    'Unlock the secrets of Precision Polish Injection Molding for flawless, high-gloss plastic parts with ZetarMold’s unmatched expertise.',
  action: {
    text: 'Get Your Free Quote from ZetarMold Today',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">Precision Polish Injection Mold</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Elevate Your Precision Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Precision Polish Injection Molding uses ultra-smooth molds (Ra &lt; 0.1
      microns) to craft plastic parts with mirror-like finishes.
    </p>
    <p>
      It’s the go-to choice for industries like automotive, electronics, and
      medical devices where surface quality is paramount.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve mastered this art over 20 years, delivering
      perfection to clients worldwide.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A high-precision technique using polished molds for flawless surfaces.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Mirror-Finish Mold, High-Gloss Injection Mold.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'The mold’s polished surface directly shapes the part’s finish.',
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
      <b>Fun Fact</b>: Polishing a mold can take longer than binge-watching your
      favorite series—but the result is worth it!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Precision Project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Process',
    title: 'Mechanical Polishing',
    description: 'Abrasives grind away imperfections.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Chemical Polishing',
    description: 'Chemical bath for tricky spots.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Electrolytic Polishing',
    description: 'Electricity and chemistry for precision.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Ultrasonic Polishing',
    description: 'Sound waves for delicate surfaces.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Fluid Polishing',
    description: 'Abrasive fluids for consistent results.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Magnetic Polishing',
    description: 'Magnets and abrasives for Ra as low as 0.1 microns.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Process',
    title: 'Ultra-Precision Polishing',
    description: 'Ra 0.008 microns for optical-grade parts.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Tool Steels',
    description: 'NAK80, S136 for durability and polishability.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'High-gloss panels and trim.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Glossy device casings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Smooth, sterile instrument housings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Optics',
    description: 'Crystal-clear lenses.',
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
    'Precision Polish Injection Molding is used in industries where flawless surfaces are a must, like automotive, electronics, medical, and optics.',
  action: {
    text: 'See How ZetarMold Delivers Perfection',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'High-gloss panels and trim that impress.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Device casings that look as good as they perform.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Sterile, smooth tools and cases.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Optics',
    description: 'Lenses with distortion-free clarity.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Precision Polish Injection Mold</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Elevate Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Stunning Surface Finish',
    description: 'Mirror-like or high-gloss finishes that impress.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Pinpoint Precision',
    description: 'Tight tolerances for intricate designs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Top Functionality',
    description: 'Smooth surfaces reduce friction and enhance performance.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'High-Volume Ready',
    description: 'Efficient production of flawless parts.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Technology <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare Precision Polish Injection Molding with other technologies to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Help You Choose',
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
    header: 'Surface Finish',
    accessorKey: 'surfaceFinish',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'Precision Polish IM',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    surfaceFinish: 'Outstanding',
  },
  {
    technology: 'Standard IM',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Moderate',
    precision: 'High',
    surfaceFinish: 'Decent',
  },
  {
    technology: 'CNC Machining',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Very High',
    surfaceFinish: 'Variable',
  },
  {
    technology: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    surfaceFinish: 'Meh',
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
    text: 'Discover Excellence with ZetarMold',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description: 'Delivering precision molds since 2005.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—quality assured.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Facilities',
    description: '45 machines, dust-free workshops, and more.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Global Service',
    description: '20+ English-speaking experts serving 20+ countries.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide You Through Precision Polishing',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Mold Design',
    description: 'Precision design with tolerances <0.01mm.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Machining',
    description: 'CNC or EDM shapes the mold.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Polishing',
    description: 'From rough grinding to ultra-smooth finishes.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Quality Check',
    description: 'Surface roughness measured with profilometers.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Injection Molding',
    description: 'Plastic flows in, perfection flows out.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Precision Polish
      Injection
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Precision Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Design',
    description: 'Accessibility for polishing is key.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Materials',
    description: 'High-grade steels like S136 for durability.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Polishing',
    description: 'Method matched to the finish required.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Control',
    description: 'Ensuring Ra meets specifications.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Precision Polish <span className="text-primary">Material</span>{' '}
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
    title: 'Mold Materials',
    description: 'P20 for cost, H13 for toughness, S136 for polishability.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Plastics',
    description: 'Polycarbonate, ABS, Acrylic, Polypropylene.',
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
    text: 'Discover ZetarMold’s Precision Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Expertise</b>: We polish molds like works of art, ensuring
      flawless parts.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Wrench className="size-6" />,
    title: 'Accessibility',
    description: 'Design molds with polishing in mind.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Material Selection',
    description: 'Choose materials that polish well.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Cost and Time',
    description: 'Factor in polishing costs and timelines.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Precision Polish Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Define surface finish goal (e.g., Ra < 0.1 microns).',
  },
  {
    content: 'Design molds with polishing accessibility.',
  },
  {
    content: 'Pick mold material that shines (e.g., S136).',
  },
  {
    content: 'Factor in polishing costs and timelines.',
  },
  {
    content: 'Add 1-2° draft angles for smooth ejection.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for Process Selection
    </>
  ),
  action: {
    text: 'Let ZetarMold Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Need a mirror finish?',
    options: [
      { text: 'Yes', result: 'Precision Polish Injection Molding' },
      { text: 'No', result: 'Standard Injection Molding' },
    ],
  },
  {
    question: 'Complex geometry?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: 'CNC Machining or 3D Printing' },
    ],
  },
  {
    question: 'High production volume?',
    options: [
      { text: 'Yes', result: 'Injection Molding' },
      { text: 'No', result: '3D Printing' },
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
    title: 'Standard Injection Molding',
    content: 'For parts with less focus on finish.',
  },
  {
    title: 'CNC Machining',
    content: 'Precision for small runs, no mold needed.',
  },
  {
    title: '3D Printing',
    content: 'Quick prototypes, but limited finish.',
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
    title: '20+ Years of Mastery',
    description: 'Crafting molds since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description: 'Serving 20+ countries with expert support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—quality guaranteed.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Facilities',
    description: '45 machines, dust-free workshops, 100+ molds monthly.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold turned our vision into reality with flawless execution.” — Alex P., R&D Manager',
  },
];
