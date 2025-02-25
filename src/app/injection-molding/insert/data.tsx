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
      Insert Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Discover the versatile world of insert molding, from its applications to its benefits and manufacturing process.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">Insert</span> Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Insert Molding Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Insert Molding is the unsung hero of the molding world, seamlessly
      combining a pre-formed insert (like metal or plastic) with injected
      plastic to create a single, integrated part that’s stronger, more
      functional, and often more efficient to produce.
    </p>
    <p>
      Think of it as a plastic-metal sandwich, but way cooler—like a car part
      with a metal thread for extra strength.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this craft for over 20 years,
      delivering precision and innovation to industries worldwide.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process where a pre-formed insert (e.g., metal, plastic, or ceramic) is placed into a mold, and molten plastic is injected around it to create a single, integrated part.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Insert Injection Molding, Molding with Inserts.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'It’s like a molding hug—first, the insert is prepared and placed in the mold, then plastic wraps around it, bonding to form a part with combined material properties.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: (
    <>
      Classifications <span className="text-primary">&</span> Standards
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Insert molding is like building a sandwich with plastic
      and metal layers—except this sandwich can withstand extreme conditions and
      last for years!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your Insert Molding project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Sensor holders, connectors.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'PCB components, connectors.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Sterilizable instruments, device housings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Household Appliances',
    description: 'Durable parts with functional features.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Metal Inserts',
    description: 'For strength, conductivity, or threading.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Plastic Inserts',
    description: 'For lightweight, corrosion-resistant parts.',
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
    'Insert molding is used in a wide range of industries, including automotive, electronics, medical, and household appliances.',
  action: {
    text: 'See How Zetar Transforms Insert Molding for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Sensor holders that laugh in the face of vibration.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'PCB components that keep your gadgets humming.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Surgical tools that are as tough as they are precise.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Household Appliances',
    description: 'Parts that make your life easier, like durable handles.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Insert</span> Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Insert Molding Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Enhanced Functionality',
    description:
      'Combines the best of both materials—like a superhero team-up.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Fewer assembly steps mean less time and money spent.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Design Flexibility',
    description: 'Allows for complex, multi-material designs.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Efficient',
    description: 'Perfect for high-volume production, like a molding marathon.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Molding Method <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare insert molding with other methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
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
    method: 'Insert Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    complexity: 'High',
  },
  {
    method: 'Standard Injection Molding',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Limited',
    complexity: 'Medium',
  },
  {
    method: 'Assembling Separate Parts',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Wide',
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
      '45 injection molding machines, including specialized insert molding systems.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, and TS16949 certifications—quality is our jam.',
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
    title: 'Insert Preparation',
    description: 'The insert is pre-formed and placed into the mold.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Clamping',
    description: 'The mold is securely closed, holding the insert in place.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description:
      'Molten plastic is injected around the insert, bonding with it.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling & Ejection',
    description: 'The part cools, solidifies, and is ejected, ready for use.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Insert Molding
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
    description: 'Designed to handle various insert materials with ease.',
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
      Insert Molding <span className="text-primary">Material</span>{' '}
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
    title: 'Compatibility',
    description:
      'Insert and plastic must bond well—metal inserts often need surface treatments.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Common Combos',
    description: 'Metal inserts with thermoplastics like PP or ABS.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description:
      'Incompatible materials can lead to weak bonds—think of it as a mismatched pair.',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers are material matchmakers,
      ensuring your parts bond perfectly every time.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Bonding Issues',
    description: 'Ensure inserts are clean and treated for better adhesion.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping',
    description: 'Use uniform cooling and precise temperature control.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Insert Movement',
    description:
      'Secure inserts properly to prevent shifting during injection.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Insert Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Choose compatible materials—don’t pair frenemies.',
  },
  {
    content: 'Design for insert placement—ensure it stays put.',
  },
  {
    content: 'Keep wall thickness uniform to avoid drama.',
  },
  {
    content: 'Position gates for optimal flow—no clogs here.',
  },
  {
    content: 'Add draft angles for a smooth exit.',
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
    question: 'Does your part need integrated material properties?',
    options: [
      { text: 'Yes', result: 'Insert molding’s your hero' },
      { text: 'No', result: 'Standard injection molding might suffice' },
    ],
  },
  {
    question: 'Is production volume high?',
    options: [
      { text: 'Yes', result: 'Insert molding wins on efficiency' },
      { text: 'No', result: 'Consider assembling separate parts' },
    ],
  },
  {
    question: 'Need a strong bond between materials?',
    options: [
      { text: 'Yes', result: 'Insert molding’s got your back' },
      { text: 'No', result: 'Explore other options' },
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
    title: 'Overmolding',
    content: 'Molding plastic over another plastic part.',
  },
  {
    title: 'Two-Shot Molding',
    content: 'Using two different plastics in one molding cycle.',
  },
  {
    title: 'Metal Injection Molding (MIM)',
    content: 'For small, complex metal parts.',
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
      'ZetarMold’s insert molding expertise turned our project around—fast and flawless. — Sarah K., Medical Device Engineer',
  },
];
