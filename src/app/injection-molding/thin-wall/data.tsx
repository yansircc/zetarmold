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
      Thin Wall Injection Molding:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Discover the efficient world of thin wall injection molding, from its applications to its benefits and manufacturing process.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">Thin Wall</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Thin Wall Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Thin Wall Injection Molding is a specialized manufacturing process
      designed to produce lightweight, high-precision plastic parts with wall
      thicknesses typically less than 1 mm.
    </p>
    <p>
      This technology is widely utilized in industries such as packaging,
      automotive, consumer electronics, and medical devices due to its
      efficiency, cost-effectiveness, and ability to handle complex designs.
    </p>
    <p>
      At <b>ZetarMold</b>, we leverage over 18 years of expertise to deliver
      exceptional results, ensuring your project benefits from our advanced
      capabilities and global service standards.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A high-speed injection molding process that fills mold cavities with wall thicknesses below 1 mm, enabling the production of thin, lightweight parts.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Thin Wall IM, Thin Wall Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Uses rapid injection and precise control to ensure complete filling of thin-walled molds, resulting in efficient, high-volume production.',
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
      <b>Fun Fact</b>: Thin wall molding can reduce cycle times by up to 50%,
      making it a faster option for high-volume projects—like producing a phone
      case in just 5 seconds!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your Thin Wall project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Packaging',
    description: 'Food containers, bottle caps.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Interior components like dashboards.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Electronics',
    description: 'Phone cases, tablet housings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Syringes, disposable devices.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Thermoplastics',
    description:
      'Polypropylene (PP), Polyethylene (PE), Polystyrene (PS), Acrylonitrile Butadiene Styrene (ABS).',
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
    'Thin wall injection molding is widely used in industries such as packaging, automotive, consumer electronics, and medical devices due to its efficiency, cost-effectiveness, and ability to handle complex designs.',
  action: {
    text: 'See How Zetar Transforms Thin Wall Molding for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Packaging',
    description:
      'Lightweight containers and lids that reduce material and shipping costs.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Durable, intricate parts for vehicle interiors.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Thin, precise casings for modern devices.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Clean, biocompatible tools like syringes and implants.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Thin Wall</span> Injection
      Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Thin Wall Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Lightweight',
    description: 'Reduces material usage and costs.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Cost-Effective',
    description: 'Faster cycle times lower production expenses.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Versatile',
    description:
      'Handles complex designs with high flow length-to-thickness ratios (L/t > 200).',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Scalable',
    description: 'Ideal for high-volume production runs.',
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
    'Compare different injection molding methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
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
    header: 'Wall Thickness',
    accessorKey: 'wallThickness',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'Thin Wall Injection',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    wallThickness: '<1 mm',
    complexity: 'High',
  },
  {
    method: 'Standard Injection',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Wide',
    wallThickness: 'Medium-Thick',
    complexity: 'High',
  },
  {
    method: 'Blow Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    wallThickness: 'Thin-Medium',
    complexity: 'Low-Medium',
  },
  {
    method: 'Vacuum Forming',
    costPerPart: 'Low',
    initialInvestment: 'Low-Medium',
    speed: 'Moderate',
    precision: 'Low-Medium',
    materialOptions: 'Limited',
    wallThickness: 'Thin-Medium',
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
      '45 cutting-edge injection molding machines, including a beefy 1850T model for parts up to 10kg.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      "ISO 9001, ISO 13485, and TS16949 certifications—proof we don't mess around with quality.",
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description:
      'Dust-free workshops (M7 level) for medical and food-grade perfection.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros ready to make your global project a breeze.',
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
    title: 'Clamping',
    description: 'The mold is securely closed.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Injection',
    description:
      'Molten plastic is injected at high speed and pressure (>100 MPa) to fill the thin cavities.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Cooling',
    description:
      'Parts cool rapidly (2-5 seconds) at controlled mold temperatures (50-80°C).',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Ejection',
    description: 'The finished part is ejected from the mold.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Thin Wall Injection
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
    description:
      'Molds are crafted with precision to ensure accurate dimensions.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Material Compatibility',
    description: "Designed to withstand Thin Wall's high pressures with ease.",
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Advanced cooling systems to minimize warping and defects.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Thin Wall Injection <span className="text-primary">Material</span>{' '}
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
    title: 'Flowability',
    description:
      'Thin-wall molding demands materials with excellent flow properties to fill narrow cavities during high-speed injection.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Recommended Materials',
    description:
      'Opt for high-flow thermoplastics like PP, PE, PS, and ABS, which balance flowability, strength, and cost.',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers excel in mold design and
      material selection, ensuring optimal performance for your thin-wall
      projects.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Filling Issues',
    description:
      'Use high-flow materials (e.g., PP with Melt Index >60) and optimize gate placement.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping',
    description: 'Design uniform wall thickness and advanced cooling systems.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Shrinkage',
    description:
      'Adjust injection pressure and holding time, and select low-shrinkage plastics.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Thin Wall Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Maintain uniform wall thickness (0.7-1 mm recommended).',
  },
  {
    content: 'Position gates strategically to avoid visible defects.',
  },
  {
    content: 'Incorporate proper venting to prevent burn marks.',
  },
  {
    content: 'Design ribs and bosses at 50-60% of wall thickness.',
  },
  {
    content: 'Use draft angles of 1-2° for easy part release.',
  },
  {
    content: 'Add rounded corners to reduce stress concentrations.',
  },
  {
    content: 'Prioritize high-flow materials for better filling.',
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
    question: 'Is the part hollow?',
    options: [
      { text: 'Yes', result: 'Consider blow molding' },
      { text: 'No', result: 'Proceed' },
    ],
  },
  {
    question: 'Is the wall thickness less than 1 mm?',
    options: [
      { text: 'Yes', result: 'Thin wall injection or vacuum forming' },
      { text: 'No', result: 'Standard injection molding' },
    ],
  },
  {
    question: 'Is the part shape complex?',
    options: [
      { text: 'Yes', result: 'Thin wall injection is ideal' },
      { text: 'No', result: 'Vacuum forming may suffice' },
    ],
  },
  {
    question: 'Is high-volume production needed?',
    options: [
      { text: 'Yes', result: 'Thin wall injection excels' },
      { text: 'No', result: 'Explore cost-effective alternatives' },
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
    content: 'Best for thicker, complex parts.',
  },
  {
    title: 'Blow Molding',
    content: 'Ideal for hollow items like bottles.',
  },
  {
    title: 'Vacuum Forming',
    content: 'Suitable for large, simple thin-walled parts.',
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
    title: '20+ Years of Know-How',
    description: 'Since 2005, we’ve been molding dreams into reality.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description:
      'Serving 20+ countries with a team fluent in English and expertise.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our middle name.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '"ZetarMold’s professionalism and quick response impressed us. They always deliver high-quality molds on time." — John D., Automotive Engineer',
  },
];
