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
  Ruler,
  Droplet,
  Factory,
  ShieldCheck,
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
      Compression Silicone Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Compression silicone rubber molding is a versatile manufacturing process that shapes silicone rubber into durable, flexible parts using heat and pressure. Ideal for gaskets, seals, and medical components.',
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
      <span className="text-primary">Compression Silicone Rubber Molding</span>?
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
      Compression silicone rubber molding is a process where uncured silicone
      rubber is placed into a mold, compressed, and heated to cure, forming the
      desired shape.
    </p>
    <p>
      It’s ideal for creating flexible, temperature-resistant parts like gaskets
      and seals.
    </p>
    <p>
      At <b>ZetarMold</b>, we leverage over 20 years of expertise to deliver
      high-quality, precision-molded silicone parts.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A process where uncured silicone rubber is placed into a mold, compressed, and heated to cure, forming the desired shape.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description:
      'Silicone rubber compression molding, vulcanization process for silicone.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Utilizes heat and pressure to shape and cure silicone, resulting in flexible, temperature-resistant parts.',
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
      <b>Fun Fact</b>: Compression molding can produce parts with less residual
      stress, making them more durable—like a superhero cape that never tears!
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Material',
    title: 'High Consistency Rubber (HCR)',
    description:
      'With variations like platinum-cured or flame-resistant silicone.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Part Size',
    title: 'Small to Medium-Sized Parts',
    description: 'Often with complex geometries.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Production Volume',
    title: 'Small to Medium Production Runs',
    description: 'Perfect for prototyping and short runs.',
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
    'Compression silicone molding is used in medical, automotive, electronics, and lighting industries for its flexibility and heat resistance.',
  action: {
    text: 'See How ZetarMold Delivers Quality',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical',
    description:
      'Seals, gaskets, and components for devices, benefiting from silicone’s biocompatibility.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description:
      'Gaskets, seals, and vibration dampeners that withstand high temperatures.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description:
      'O-rings, connectors, and protective covers, especially in low-volume LED applications.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Lighting',
    description:
      'Optically clear silicone parts that replace glass in LED products.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Compression Silicone Molding</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Enhance Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description:
      'Lower tooling costs compared to other methods, ideal for prototypes and short runs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatile',
    description: 'Handles complex designs and intricate details with ease.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Durable',
    description:
      'Produces parts with excellent flexibility and heat resistance.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Scalable',
    description:
      'Suitable for small to medium production volumes, offering manufacturing flexibility.',
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
    'Compare compression silicone molding with other methods to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Guide Your Choice',
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
    method: 'Compression Molding',
    costPerPart: 'Medium',
    initialInvestment: 'Low-Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Injection Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Transfer Molding',
    costPerPart: 'Medium-High',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Limited',
    complexity: 'Medium',
  },
  {
    method: 'Extrusion',
    costPerPart: 'Low',
    initialInvestment: 'Low',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    complexity: 'Low',
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
    text: 'Discover ZetarMold’s Expertise',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Expertise',
    description:
      'Since 2005, we’ve been delivering precision molds and molding services globally.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description:
      'ISO 9001, ISO 13485, TS16949 certifications ensure top standards.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Facilities',
    description:
      '45 molding machines and dust-free workshops for sensitive industries.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description:
      'Supporting clients in 20+ countries with English-speaking pros.',
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
    title: 'Material Preparation',
    description:
      'Select and mix silicone rubber with additives like catalysts and pigments.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Preforming',
    description:
      'Shape the uncured silicone rubber into a preform approximating the final part.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Preparation',
    description:
      'Clean the mold, apply a mold release agent, and heat to the optimal temperature.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Loading and Compression',
    description:
      'Place the preform into the mold, close it, and apply pressure to shape the silicone.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Curing',
    description: 'Maintain heat and pressure for the specified curing time.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
  {
    title: 'Cooling and Demolding',
    description:
      'Cool the part uniformly and use an ejection system for gentle removal.',
    image: '/images/placeholder/1.svg',
    icon: 'Repeat',
  },
  {
    title: 'Post-processing and Quality Control',
    description: 'Trim excess material and inspect for defects.',
    image: '/images/placeholder/1.svg',
    icon: 'ShieldCheck',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Compression Silicone
      Molding
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
    description: 'Achieves intricate details with high precision.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Material Compatibility',
    description: 'Ensure mold release agents align with silicone properties.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Temperature Control',
    description: 'Optimal mold temperature for curing (160°C to 232°C).',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Compression Silicone Molding{' '}
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
    title: 'Platinum-Cured Silicone',
    description: 'For medical use, ensuring biocompatibility.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Flame-Resistant Silicone',
    description: 'For automotive applications, withstanding high temperatures.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'High-Clear Silicone',
    description: 'For optical applications, replacing glass in LED products.',
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
      <b>ZetarMold’s Expertise</b>: Our engineers specialize in selecting the
      right silicone rubber type and optimizing the molding process for your
      specific application.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Material Selection',
    description: 'Choosing the right silicone type for your application.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Mold Design',
    description: 'Designing molds for complex geometries and easy demolding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Temperature Control',
    description: 'Maintaining optimal temperature for curing.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Compression Silicone Molding Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Maintain uniform thickness to prevent warping.',
  },
  {
    content: 'Avoid undercuts unless the mold design accommodates them.',
  },
  {
    content:
      'Specify the silicone type based on application (e.g., platinum-cured for medical).',
  },
  {
    content: 'Ensure the part size is suitable for compression molding.',
  },
  {
    content: 'Design for easy demolding with proper draft angles.',
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
    question: 'Is the part flexible and temperature-resistant?',
    options: [
      { text: 'Yes', result: 'Consider compression silicone rubber molding' },
      { text: 'No', result: 'Explore other methods' },
    ],
  },
  {
    question: 'Is the production volume small to medium?',
    options: [
      { text: 'Yes', result: 'Compression molding is ideal' },
      { text: 'No', result: 'Consider injection molding for larger volumes' },
    ],
  },
  {
    question: 'Does the part require intricate details?',
    options: [
      { text: 'Yes', result: 'Compression molding excels' },
      { text: 'No', result: 'Simpler methods may suffice' },
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
    title: 'Liquid Silicone Injection Molding (LSIM)',
    content: 'For high-volume production with automation.',
  },
  {
    title: 'Transfer Molding',
    content: 'For unique material properties and medium complexity.',
  },
  {
    title: 'Extrusion',
    content: 'For continuous shapes like tubing.',
  },
  {
    title: 'Overmolding',
    content:
      'Combining silicone rubber with other materials for enhanced functionality.',
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
    title: '20+ Years of Expertise',
    description:
      'Since 2005, we’ve delivered precision molds and molding services globally.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description:
      'Our English-speaking team supports clients across 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description:
      'ISO 9001, ISO 13485, TS16949 certifications ensure top standards.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Advanced Facilities',
    description:
      '45 molding machines and dust-free workshops for sensitive industries.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Success Stories',
    description:
      '“ZetarMold’s professionalism and quick response impressed us. They always deliver high-quality molds on time.” — John D., Automotive Engineer',
  },
];
