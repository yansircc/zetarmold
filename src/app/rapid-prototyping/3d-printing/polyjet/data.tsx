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
      PolyJet 3D Printing for Rapid Prototyping:
      <br /> Your Guide to Precision Prototypes with ZetarMold
    </>
  ),
  description:
    'PolyJet 3D printing is a cutting-edge additive manufacturing technology that creates highly detailed, multi-material prototypes with exceptional precision and smooth surface finishes.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">PolyJet 3D Printing</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Guide Your Prototyping Journey',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      PolyJet is a 3D printing technology that jets liquid photopolymer resins
      onto a build platform, curing them instantly with UV light to form
      precise, multi-material parts.
    </p>
    <p>
      Developed by Stratasys, this process is perfect for industries like
      medical, dental, consumer electronics, and product design.
    </p>
    <p>
      At <b>ZetarMold</b>, we understand the value of PolyJet 3D printing in the
      prototyping phase, helping you transition smoothly to mass production.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A 3D printing technology that jets liquid photopolymer resins onto a build platform, curing them instantly with UV light.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'PolyJet, Multi-Material Jetting (MMJ), Photopolymer Jetting.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Inkjet-like printing in 3D, allowing complex geometries and multi-material parts.',
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
      <b>Fun Fact</b>: PolyJet can create prototypes so detailed that they’ve
      been used to print realistic human organ models for surgical planning.
    </>
  ),
  action: {
    text: 'Let ZetarMold Engineer Your Prototype',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Process',
    title: 'Additive Manufacturing',
    description: 'Photopolymer Jetting.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Photopolymer Resins',
    description: 'Rigid, flexible, transparent, and more.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical and Dental',
    description: 'Anatomical models, surgical guides, dental appliances.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Product Design',
    description: 'Realistic prototypes for consumer goods, electronics.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Detailed parts for testing form, fit, and function.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Education and Research',
    description: 'Complex models for teaching and experimentation.',
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
    'PolyJet is used in medical, dental, product design, automotive, and education for its precision, multi-material capabilities, and smooth finishes.',
  action: {
    text: 'See How ZetarMold Enhances Prototyping',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Medical and Dental',
    description: 'Anatomical models, surgical guides, dental appliances.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Product Design',
    description: 'Realistic prototypes for consumer goods and electronics.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Detailed parts for testing form, fit, and function.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Education and Research',
    description: 'Complex models for teaching and experimentation.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">PolyJet for Prototyping</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Boost Your Prototyping',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Detail and Accuracy',
    description:
      'Ideal for small to medium-sized parts where precision is critical.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Multi-Material Capabilities',
    description: 'Combine rigid and flexible materials in one print.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speed',
    description: 'Faster than many other high-precision methods.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Visual Realism',
    description: 'Full-color printing for lifelike prototypes.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      3D Printing Technology <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare PolyJet with other 3D printing technologies to find the best fit for your project.',
  action: {
    text: 'Let ZetarMold Simplify Your Choice',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Technology',
    accessorKey: 'technology',
  },
  {
    header: 'Precision',
    accessorKey: 'precision',
  },
  {
    header: 'Multi-Material',
    accessorKey: 'multiMaterial',
  },
  {
    header: 'Surface Finish',
    accessorKey: 'surfaceFinish',
  },
  {
    header: 'Cost',
    accessorKey: 'cost',
  },
  {
    header: 'Best For',
    accessorKey: 'bestFor',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    technology: 'PolyJet',
    precision: 'High',
    multiMaterial: 'Yes',
    surfaceFinish: 'Smooth',
    cost: 'High',
    bestFor: 'Detailed Prototypes',
  },
  {
    technology: 'FDM',
    precision: 'Medium',
    multiMaterial: 'No',
    surfaceFinish: 'Rough',
    cost: 'Low',
    bestFor: 'Large Parts, Functional',
  },
  {
    technology: 'SLA',
    precision: 'High',
    multiMaterial: 'No',
    surfaceFinish: 'Smooth',
    cost: 'Medium',
    bestFor: 'High Detail, Single Material',
  },
  {
    technology: 'SLS',
    precision: 'Medium',
    multiMaterial: 'No',
    surfaceFinish: 'Moderate',
    cost: 'Medium',
    bestFor: 'Functional Parts',
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
    title: '20+ Years of Manufacturing Expertise',
    description:
      'Delivering precision molds and injection molding services globally since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Seamless Transition from Prototype to Production',
    description:
      'Leverage PolyJet for prototyping and our injection molding for mass production.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description:
      'Supporting clients in 20+ countries with English-speaking pros.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description:
      'ISO 9001, ISO 13485, TS16949 certifications ensure top standards.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'Dive Deeper: How It Works',
  action: {
    text: 'Let ZetarMold Guide Your Prototyping',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Pre-Processing',
    description:
      'Prepare the 3D model, slice into layers, and select materials.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Printing',
    description:
      'Jet photopolymer resins and cure with UV light layer by layer.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Post-Processing',
    description:
      'Remove support materials, clean, and optionally finish the part.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">PolyJet 3D Printing</span> for Mold Making
    </>
  ),
  action: {
    text: 'Let ZetarMold Craft Your Prototype',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Achieves layer thicknesses as low as 16 microns.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Multi-Material',
    description: 'Print with multiple materials and colors in one build.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Finish',
    description: 'Naturally smooth finish, reducing post-processing.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      PolyJet 3D Printing <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get Material Advice from ZetarMold',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Photopolymer Resins',
    description: 'Rigid, flexible, transparent, and more.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Digital Materials',
    description:
      'Mixtures for custom properties like varying hardness or color.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Support Materials',
    description: 'Essential for overhangs, easily removed post-printing.',
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
    text: 'Discover ZetarMold’s Prototyping Solutions',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold’s Expertise</b>: Our engineers can assist in optimizing your
      design for PolyJet 3D printing, ensuring it meets both prototyping and
      future production needs.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Brittleness',
    description:
      'Some materials can be brittle; choose wisely for functional parts.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Support Removal',
    description: 'Design to minimize supports for easier cleanup.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost',
    description: 'Higher cost than other methods; budget accordingly.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'PolyJet 3D Printing Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Maintain wall thickness between 0.5 mm and 1 mm.',
  },
  {
    content:
      'Ensure holes and openings are at least 0.1 mm for support removal.',
  },
  {
    content: 'Minimize overhangs to reduce support material usage.',
  },
  {
    content: 'Include small draft angles for easier part removal.',
  },
  {
    content: 'Design smooth transitions for multi-material parts.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for 3D Printing Method
    </>
  ),
  action: {
    text: 'Let ZetarMold Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Do you need high precision and detail?',
    options: [
      { text: 'Yes', result: 'PolyJet is a strong candidate' },
      { text: 'No', result: 'Consider FDM or SLS for cost savings' },
    ],
  },
  {
    question: 'Is a smooth surface finish important?',
    options: [
      { text: 'Yes', result: 'PolyJet excels here' },
      { text: 'No', result: 'Other technologies might suffice' },
    ],
  },
  {
    question: 'Do you require multi-material or color capabilities?',
    options: [
      { text: 'Yes', result: 'PolyJet is ideal' },
      { text: 'No', result: 'SLA or SLS could be alternatives' },
    ],
  },
  {
    question: 'Is the part size small to medium?',
    options: [
      { text: 'Yes', result: 'PolyJet is suitable' },
      { text: 'No', result: 'Consider FDM for larger parts' },
    ],
  },
  {
    question: 'Is the budget flexible?',
    options: [
      { text: 'Yes', result: 'PolyJet’s higher cost may be justified' },
      { text: 'No', result: 'Explore more cost-effective options' },
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
    title: 'Fused Deposition Modeling (FDM)',
    content: 'Best for large, functional parts.',
  },
  {
    title: 'Stereolithography (SLA)',
    content: 'Ideal for high-detail, single-material parts.',
  },
  {
    title: 'Selective Laser Sintering (SLS)',
    content: 'Great for durable, functional prototypes.',
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
    title: '20+ Years of Manufacturing Expertise',
    description:
      'Delivering precision molds and injection molding services globally since 2005.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Seamless Transition from Prototype to Production',
    description:
      'Use PolyJet for prototyping and leverage our injection molding for mass production.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description:
      'Supporting clients in 20+ countries with English-speaking pros.',
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
      '45 injection molding machines and dust-free workshops for precision.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Success Stories',
    description:
      '“ZetarMold’s expertise in transitioning from prototype to production was invaluable.” — Sarah L., Product Designer',
  },
];
