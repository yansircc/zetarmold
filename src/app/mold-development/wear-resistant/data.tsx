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
  Droplet,
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
      Wear-Resistant Injection Molds:
      <br /> The Durable Workhorses of Manufacturing
    </>
  ),
  description:
    'Wear-resistant injection molds are built to handle abrasive plastics and high-volume production, delivering precision and durability. ZetarMold brings 20+ years of expertise to power your projects.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What Are{' '}
      <span className="text-primary">Wear-Resistant Injection Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Power Your Tough Projects',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Wear-resistant injection molds are engineered to resist wear from abrasive
      materials like glass-fiber reinforced plastics and relentless production
      cycles.
    </p>
    <p>
      Crafted from high-hardness tool steels (e.g., H13, P20) and enhanced with
      coatings like TiAlSiN or CrN/CrCN/DLC, they deliver durability and
      performance.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been perfecting these molds for over 20 years,
      ready to tackle your toughest challenges.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'Molds built to withstand abrasive materials and high-volume production.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Abrasion-resistant molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'High-hardness steels and coatings like TiAlSiN or DLC ensure long-lasting performance.',
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
      <b>Fun Fact</b>: Some plastics are so abrasive they’d wear out a standard
      mold faster than a kid demolishes a piñata!
    </>
  ),
  action: {
    text: 'Let ZetarMold Build Your Durable Mold',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Material',
    title: 'Abrasive Plastics',
    description: 'Glass-filled nylon, carbon-fiber composites.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Engine parts, structural components.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Aerospace',
    description: 'Tough components for harsh conditions.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical Devices',
    description: 'Syringes, precision parts.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'High-Volume Production',
    description: 'Consistent quality for massive runs.',
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
    'From abrasive plastics to high-volume production, these molds excel in tough environments.',
  action: {
    text: 'See How ZetarMold Boosts Durability',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Abrasive Plastics',
    description: 'Handles glass-filled nylon and carbon-fiber composites.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive & Aerospace',
    description: 'Engine parts and tough structural components.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical Devices',
    description: 'Syringes and precision parts with consistency.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'High-Volume Production',
    description: 'Rock-solid quality for millions of cycles.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Wear-Resistant Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Strengthen Your Production',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Longer Lifespan',
    description: 'Fewer replacements save you money.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Low Maintenance',
    description: 'Less downtime, more output.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Consistent Quality',
    description: 'Perfect parts under pressure.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatility',
    description: 'Tackles abrasive plastics and long runs.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Mold Type <span className="text-primary">Comparison</span>
    </>
  ),
  description: 'See how wear-resistant molds stack up against standard molds.',
  action: {
    text: 'Let ZetarMold Guide Your Choice',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Feature',
    accessorKey: 'feature',
  },
  {
    header: 'Wear-Resistant Molds',
    accessorKey: 'wearResistant',
  },
  {
    header: 'Standard Molds',
    accessorKey: 'standard',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    feature: 'Initial Cost',
    wearResistant: 'Higher (worth it!)',
    standard: 'Lower',
  },
  {
    feature: 'Lifespan',
    wearResistant: 'Way longer',
    standard: 'Meh',
  },
  {
    feature: 'Maintenance',
    wearResistant: 'Barely breaks a sweat',
    standard: 'Constant TLC',
  },
  {
    feature: 'Product Quality',
    wearResistant: 'Always on point',
    standard: 'Hit or miss',
  },
  {
    feature: 'Application Range',
    wearResistant: 'Abrasive plastics, huge runs',
    standard: 'Basic stuff',
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
    text: 'Discover Durability with ZetarMold',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Grit',
    description: 'Crafting tough molds since 2005.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Awesome',
    description: 'ISO 9001, ISO 13485, TS16949.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Powerhouse Facilities',
    description: 'Dust-free M7-level workshops.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Global Team',
    description: '20+ English-speaking pros worldwide.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How They’re Built',
  action: {
    text: 'Let ZetarMold Explain the Process',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Material Selection',
    description: 'High-grade steels like H13 or P20.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Design Smarts',
    description: 'Optimized cooling, high-hardness inserts.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Manufacturing',
    description: 'Precision machining for tight tolerances.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Surface Treatments',
    description: 'Coatings like TiAlSiN or DLC for protection.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Wear-Resistance
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Tough Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Material Selection',
    description: 'High-hardness steels ensure durability.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Design',
    description: 'Optimized cooling and smooth surfaces.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Coatings',
    description: 'TiAlSiN or CrN/CrCN/DLC for extra toughness.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Wear-Resistant <span className="text-primary">Material</span>{' '}
      Compatibility
    </>
  ),
  action: {
    text: 'Get Material Advice from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Abrasive Plastics',
    description: 'Glass-filled nylon, carbon-fiber composites.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Thermal Trade-Offs',
    description: 'Adjusted cooling for cycle efficiency.',
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
    text: 'Discover ZetarMold’s Tough Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Edge</b>: Our engineers select materials and designs
      tailored to your toughest conditions.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Wind className="size-6" />,
    title: 'Surface Wear',
    description: 'Coatings like TiAlSiN or DLC shield against abrasion.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Internal Wear',
    description: 'High-hardness inserts minimize damage.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Maintenance',
    description: 'Clean, lubricate, store properly.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Wear-Resistant Mold Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Choose the right steel (e.g., H13 for abrasive plastics).',
  },
  {
    content: 'Design with cooling channels, inserts, and smooth surfaces.',
  },
  {
    content: 'Add coatings like TiAlSiN or CrN/CrCN/DLC.',
  },
  {
    content: 'Plan maintenance: cleaning and lubrication.',
  },
  {
    content: 'Store in a controlled environment.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for Mold Selection
    </>
  ),
  action: {
    text: 'Let ZetarMold Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Molding abrasive plastics (e.g., glass-filled nylon)?',
    options: [
      { text: 'Yes', result: 'Wear-resistant molds' },
      { text: 'No', result: 'Next question' },
    ],
  },
  {
    question: 'Planning a high-volume run (100,000+ parts)?',
    options: [
      { text: 'Yes', result: 'Wear-resistant molds' },
      { text: 'No', result: 'Next question' },
    ],
  },
  {
    question: 'Need pinpoint precision?',
    options: [
      { text: 'Yes', result: 'Wear-resistant molds' },
      { text: 'No', result: 'Next question' },
    ],
  },
  {
    question: 'Eyeing long-term savings over upfront cost?',
    options: [
      { text: 'Yes', result: 'Wear-resistant molds' },
      { text: 'No', result: 'Standard molds' },
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
    title: 'Material Science',
    content: 'New steels and coatings enhance durability.',
  },
  {
    title: 'Injection Molding',
    content: 'Foundation for reliable production.',
  },
  {
    title: 'Post-Processing',
    content: 'Treatments boost toughness.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: (
    <>
      Why Team Up with <span className="text-primary">ZetarMold</span>?
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
    title: '20+ Years of Grit',
    description: 'Molding success since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Game',
    description: 'Serving 20+ countries with English-speaking pros.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Awesome',
    description: 'ISO 9001, ISO 13485, ISO 14001, ISO 45001.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Powerhouse Facilities',
    description: '45 machines, dust-free workshops.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Cheers',
    description:
      '“ZetarMold’s molds revolutionized our production. Top quality!” — Alex R., Automotive Engineer',
  },
];
