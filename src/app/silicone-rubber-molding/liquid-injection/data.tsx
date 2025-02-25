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
      Liquid Silicone Injection Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Liquid Silicone Injection Molding (LSIM) is like the superhero of manufacturing—flexible, fast, and ready to save the day for industries needing durable, high-precision parts.',
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
      <span className="text-primary">Liquid Silicone Injection Molding</span>?
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
      Liquid Silicone Injection Molding (LSIM) is a high-speed process where
      liquid silicone rubber (LSR) is injected into a mold and cured to create
      flexible, durable parts—think of it as baking a cake, but with silicone
      instead of batter.
    </p>
    <p>
      Whether you’re designing medical devices, automotive seals, or electronic
      keypads, LSIM delivers with the precision of a ninja and the speed of a
      caffeinated cheetah.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this process for over 20 years,
      helping R&D managers like you bring ideas to life with top-notch quality
      and global service standards.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A high-speed process where liquid silicone rubber (LSR) is injected into a mold and cured to create flexible, durable parts—think of it as baking a cake, but with silicone instead of batter.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'LSIM, LSR Molding, Liquid Injection Molding (LIM).',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Mixes two liquid components, injects them into a heated mold, and cures them to form parts that can handle extreme temperatures and stay flexible.',
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
      <b>Fun Fact</b>: LSIM can produce parts faster than you can say
      “silicone”—with cycle times as quick as 30 seconds!
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
    taxonomy: 'By Process',
    title: 'Mixing, Injecting, and Curing',
    description:
      'Involves mixing, injecting, and curing LSR in a closed-loop system.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Liquid Silicone Rubber (LSR)',
    description:
      'Uses liquid silicone rubber (LSR), available in various formulations for medical, food, or industrial use.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical Devices',
    description:
      'Syringes, valves, and baby bottle nipples that are biocompatible and bacteria-resistant.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description:
      'Seals, gaskets, and connectors that can withstand temperatures from -60°C to 250°C.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description:
      'Keypads, buttons, and protective sleeves that are flexible and electrically insulating.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description:
      'Baking pans, spatulas, and other heat-resistant, flexible items.',
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
    'LSIM is used in medical, automotive, electronics, and consumer goods for its flexibility, durability, and precision.',
  action: {
    text: 'See How ZetarMold Delivers Excellence',
    href: '/contact',
  },
};

// Where It's Used Gallery
export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical',
    description:
      'Syringes, valves, and baby bottle nipples that are biocompatible and bacteria-resistant.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description:
      'Seals, gaskets, and connectors that laugh in the face of extreme temperatures.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description:
      'Keypads, buttons, and protective sleeves that are flexible and electrically insulating.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Consumer Goods',
    description:
      'Baking pans, spatulas, and other heat-resistant, flexible items.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Liquid Silicone Injection Molding</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Transform Your Ideas',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Flexible & Durable',
    description:
      'Parts can bend, stretch, and bounce back like a yoga instructor.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Temperature-Resistant',
    description:
      'Handles -60°C to 250°C—perfect for both Arctic expeditions and desert road trips.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Biocompatible',
    description:
      'Safe for skin contact and medical use, meeting FDA and USP Class VI standards.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Fast & Precise',
    description:
      'Cycle times as short as 30 seconds with high precision for complex shapes.',
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
    'Compare Liquid Silicone Injection Molding with other methods to find the best fit for your project.',
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
    header: 'Flexibility',
    accessorKey: 'flexibility',
  },
  {
    header: 'Temperature Resistance',
    accessorKey: 'temperatureResistance',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'LSIM',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Limited (LSR)',
    flexibility: 'High',
    temperatureResistance: 'Extreme',
  },
  {
    method: 'Compression Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Wide',
    flexibility: 'Medium',
    temperatureResistance: 'Moderate',
  },
  {
    method: 'Thermoplastic IM',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    flexibility: 'Low',
    temperatureResistance: 'Moderate',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low-Medium',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Limited',
    flexibility: 'Variable',
    temperatureResistance: 'Variable',
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
    description: 'ISO 9001, ISO 13485, TS16949—quality is our middle name.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Facilities',
    description:
      '45 injection molding machines and dust-free workshops (M7 level) for medical and food-grade products.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description:
      '20+ English-speaking pros to make your global projects a breeze.',
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
    description: 'Mix two LSR components (A and B) with precision.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Injection',
    description: 'Inject the mixture into a heated mold at 150°C to 200°C.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Curing',
    description: 'Cure the part in seconds to minutes, depending on size.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Ejection',
    description: 'Pop out the flexible part and repeat.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Liquid Silicone
      Injection Molding
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
    description:
      'Precision molds with tight tolerances of ±0.05 mm and venting for air escape.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Mold Materials',
    description:
      'Use hardened steels or aluminum, often with surface treatments for durability.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Cooling System',
    description:
      'Advanced systems to control mold temperature and curing time.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Venting Optimization',
    description: 'Micro vents to prevent defects in high-viscosity LSR.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Liquid Silicone Injection Molding{' '}
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
    title: 'Formulations',
    description: 'LSR can be tailored for medical, food, or industrial use.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Durometer Range',
    description: 'From 30 to 70 Shore A for varying flexibility.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Additives',
    description:
      'Color pigments, silica, or carbon black for specific properties.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Overmolding',
    description: 'Can bond to plastics like Nylon with proper treatment.',
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
      <b>ZetarMold’s Expertise</b>: Our engineers are LSR wizards, ensuring your
      parts are flawless every time.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Flash',
    description:
      'Excess material can sneak out. Solution: Optimize gate design and mold fit.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Incomplete Curing',
    description:
      'Parts might not fully cure. Solution: Adjust mold temperature and cure time.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'High Initial Costs',
    description:
      'Equipment and molds are pricey. Solution: Ideal for high-volume runs to spread costs.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Liquid Silicone Injection Molding Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (0.5–3 mm recommended).',
  },
  {
    content: 'Draft angles of 1–2° for easy ejection.',
  },
  {
    content: 'Rounded corners to reduce stress.',
  },
  {
    content: 'Gates placed strategically to avoid flash.',
  },
  {
    content: 'Venting to let air escape without a fuss.',
  },
  {
    content: 'Choose the right LSR grade for your application.',
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
    question: 'Need flexibility and temperature resistance?',
    options: [
      { text: 'Yes', result: 'LSIM is your hero' },
      { text: 'No', result: 'Consider thermoplastic IM' },
    ],
  },
  {
    question: 'Production volume over 1,000?',
    options: [
      { text: 'Yes', result: 'LSIM shines for high volumes' },
      { text: 'No', result: 'Explore 3D printing or compression molding' },
    ],
  },
  {
    question: 'Complex shape with fine details?',
    options: [
      { text: 'Yes', result: 'LSIM handles it like a pro' },
      { text: 'No', result: 'Other methods might suffice' },
    ],
  },
  {
    question: 'Biocompatibility required?',
    options: [
      { text: 'Yes', result: 'LSIM with medical-grade LSR' },
      { text: 'No', result: 'Broaden your options' },
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
    title: 'Compression Molding',
    content: 'Great for simpler, larger parts.',
  },
  {
    title: 'Thermoplastic IM',
    content: 'Best for rigid, high-volume parts.',
  },
  {
    title: '3D Printing',
    content: 'Quick and quirky for prototypes.',
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
    description: 'Since 2005, we’ve been molding excellence worldwide.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Crew',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our jam.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Gear',
    description: '45 machines, dust-free workshops, and precision passion.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s speed and quality are unmatched. They’re our go-to for LSR projects.” — Lisa M., Medical Device Engineer',
  },
];
