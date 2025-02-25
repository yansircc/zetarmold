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
      Corrosion Resistant Injection Mold:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Discover how Corrosion Resistant Injection Molds protect against rust and wear, delivering long-lasting performance in harsh environments.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">Corrosion Resistant</span>{' '}
      Injection Mold?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Mold Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Corrosion Resistant Injection Molds are like armored warriors in
      manufacturing, shielding against rust and wear to produce pristine parts
      for years.
    </p>
    <p>
      Made from materials like stainless steel S136 or 4Cr13 steel with
      nitriding, they excel in industries such as medical, food, and automotive.
    </p>
    <p>
      At <b>ZetarMold</b>, with over 20 years of mastery, we craft molds that
      make corrosion a distant memory.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A mold engineered with corrosion-resistant materials like stainless steel S136 or 4Cr13 with nitriding to withstand harsh conditions.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Anti-Corrosion Molds, Stainless Steel Molds.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Core Principle',
    description:
      'Combats rust and degradation to extend mold life and ensure top-quality parts for critical industries.',
  },
];

export const APPLICATIONS_INFO = {
  title: (
    <>
      Standards <span className="text-primary">&</span> Classifications
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Some corrosion-resistant molds can churn out over a
      million parts without a hiccup—true stamina!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your corrosion-resistant mold',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Syringes, surgical tools, implants.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Food Packaging',
    description: 'Containers that stay spotless.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Parts that endure weather and wear.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Chemical Handling',
    description: 'Components resistant to corrosive chemicals.',
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
    'Corrosion Resistant Molds shine in industries requiring durability and resistance to tough conditions.',
  action: {
    text: 'See How Zetar Safeguards Your Molds',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical',
    description: 'Sterile tools and implants that scoff at rust.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Food Packaging',
    description: 'Containers that stay safe and spotless.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Parts that endure like champions.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Chemical Handling',
    description: 'Components that shrug off corrosive chemicals.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits (Why It)
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Corrosion Resistant</span>{' '}
      Injection Molds?
    </>
  ),
  action: {
    text: 'Let Zetar Protect Your Mold Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Longevity',
    description: 'Molds that last longer than a superhero franchise.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Consistency',
    description: 'Perfect parts, batch after batch.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Low Maintenance',
    description: 'Less fixing, more producing—downtime’s the enemy.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Safety',
    description: 'No rust, no contamination—vital for medical and food.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Mold Type <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare Corrosion Resistant Molds with Standard Molds to find the best fit for your project.',
  action: {
    text: 'Overwhelmed by Choices? Let Zetar Decide',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Mold Type',
    accessorKey: 'moldType',
  },
  {
    header: 'Lifespan',
    accessorKey: 'lifespan',
  },
  {
    header: 'Cost',
    accessorKey: 'cost',
  },
  {
    header: 'Maintenance',
    accessorKey: 'maintenance',
  },
  {
    header: 'Applications',
    accessorKey: 'applications',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    moldType: 'Corrosion Resistant Molds',
    lifespan: 'Over a million cycles',
    cost: 'Higher upfront',
    maintenance: 'Low',
    applications: 'Harsh environments',
  },
  {
    moldType: 'Standard Molds',
    lifespan: '100,000-500,000 cycles',
    cost: 'Lower upfront',
    maintenance: 'Medium',
    applications: 'General use',
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
    description: '45 machines, including 1850T giants for hefty projects.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, TS16949—quality is our promise.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description: 'Squeaky-clean production for medical and food-grade parts.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description: '20+ English-speaking pros for seamless global projects.',
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
    description: 'Built to resist corrosion with easy-clean features.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Material Selection',
    description:
      'Stainless steel S136 or 4Cr13 with nitriding to fend off rust.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Design',
    description: 'No crevices, great drainage, hot runners for efficiency.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Fabrication',
    description: 'Precision machining with protective treatments.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Machine Setup',
    description: 'Standard settings with extra care for coatings.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Corrosion Resistance
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
    description: 'Designed to skip corrosion traps with stainless steel.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: 'S136 excels as a rust-repelling rockstar.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Protective Treatments',
    description: 'Nitriding or PVD coatings add an extra shield.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Corrosion Resistant <span className="text-primary">Material</span>{' '}
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
    title: 'Stainless Steel',
    description: 'Rust-proof but pricier—a worthy investment.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: '4Cr13 with Nitriding',
    description: 'Budget-friendly, needs more care over time.',
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
      <b>ZetarMold&apos;s Edge</b>: We turn rust challenges into victories with
      expert engineering.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Corrosive Plastics',
    description: 'Temperature control prevents gas damage.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Cost vs. Durability',
    description: 'Balancing upfront costs with long-term gains.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Precision Fabrication',
    description: 'Ensuring treatments enhance performance.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Corrosion Resistant Mold Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Pick stainless steel S136 or 4Cr13 with nitriding.',
  },
  {
    content: 'Design for easy cleaning and water drainage.',
  },
  {
    content: 'Add protective coatings or treatments.',
  },
  {
    content: 'Keep wall thickness uniform (2-4 mm).',
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
    text: 'Let Zetar Make Decisions for You',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Harsh environment?',
    options: [
      { text: 'Yes', result: 'Corrosion Resistant Molds are your hero' },
      { text: 'No', result: 'Standard Molds might work' },
    ],
  },
  {
    question: 'High-volume production?',
    options: [
      { text: 'Yes', result: 'Go corrosion-resistant for longevity' },
      { text: 'No', result: 'Standard Molds could save cash' },
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
    content: 'Fine for less corrosive tasks.',
  },
  {
    title: '3D Printing',
    content: 'Perfect for prototypes, not mass production.',
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
    description: 'Molding wizards since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with English fluency.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—top-tier quality.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s molds are tougher than rust!” — Jane S., R&D Manager',
  },
];
