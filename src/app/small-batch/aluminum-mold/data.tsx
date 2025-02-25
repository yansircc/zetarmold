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
      Aluminum Molds for Small Batch:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Hey there, R&D rockstar! If you’re knee-deep in prototyping or gearing up for a small batch production run, aluminum molds might just be your new best friend. These lightweight, budget-friendly champs shine in injection molding, delivering speedy results without breaking the bank—think of them as the espresso shot of the manufacturing world. At **ZetarMold**, we’ve been crafting top-notch aluminum molds for over 20 years, helping industrial product managers like you turn ideas into reality with precision, speed, and a dash of fun. Ready to dive in? Let’s mold some knowledge!',
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
      <span className="text-primary">
        Aluminum Molds for Small Batch Production
      </span>
      ?
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
      Molds carved from aluminum alloys, designed for injection molding to crank
      out small batches of plastic parts—typically up to 5,000 units.
    </p>
    <p>
      Also known as aluminum injection molds, rapid molds, or prototype
      molds—because who doesn’t love a good nickname?
    </p>
    <p>
      Aluminum’s stellar thermal conductivity and machinability mean faster
      production and lower costs—perfect for when you need parts yesterday.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'Molds carved from aluminum alloys, designed for injection molding to crank out small batches of plastic parts—typically up to 5,000 units.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Aliases',
    description: 'Aluminum injection molds, rapid molds, prototype molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Aluminum’s stellar thermal conductivity and machinability mean faster production and lower costs—perfect for when you need parts yesterday.',
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
      <b>Fun Fact</b>: Aluminum molds can be ready 50% faster than steel
      ones—giving you more time to perfect your victory dance while competitors
      scramble!
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
    title: 'Injection Molding',
    description: 'Mainly injection molding, with some blow molding cameos.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Alloys',
    description:
      'Crafted from alloys like 7050 (the tough guy), 6061-T651 (the big mold maestro), or M-1 (the all-purpose player).',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Prototyping',
    description: 'Test your wild ideas without betting the farm.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Small Batch Production',
    description: 'Launch limited runs for market testing or niche products.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Bridge Tooling',
    description:
      'Keep things rolling while your steel mold dreams come together.',
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
    'Aluminum molds are used in prototyping, small batch production, and bridge tooling across industries like consumer electronics, medical devices, and automotive.',
  action: {
    text: 'See How ZetarMold Delivers Excellence',
    href: '/contact',
  },
};

// Where It's Used Gallery
export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Prototyping',
    description: 'Test your wild ideas without betting the farm.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Small Batch Production',
    description: 'Launch limited runs for market testing or niche products.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Bridge Tooling',
    description:
      'Keep things rolling while your steel mold dreams come together.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Aluminum Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Transform Your Ideas',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Save 5%–20% upfront compared to steel molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Speedy Delivery',
    description: 'Cuts lead times by weeks—because deadlines wait for no one.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Lightweight',
    description: 'Easier to tweak and handle than their steel cousins.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Versatile',
    description: 'Handles a broad range of plastics with ease.',
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
    'Compare aluminum molds with other methods to find the best fit for your project.',
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
    header: 'Production Volume',
    accessorKey: 'productionVolume',
  },
  {
    header: 'Durability',
    accessorKey: 'durability',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'Aluminum Molds',
    costPerPart: 'Medium',
    initialInvestment: 'Low-Medium',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    productionVolume: 'Small (up to 5,000)',
    durability: 'Moderate',
  },
  {
    method: 'Steel Molds',
    costPerPart: 'Low',
    initialInvestment: 'High',
    speed: 'Moderate',
    precision: 'Very High',
    materialOptions: 'Wide',
    productionVolume: 'Large (10,000+)',
    durability: 'High',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Very Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    productionVolume: 'Very Small (1–100)',
    durability: 'Low',
  },
  {
    method: 'Vacuum Forming',
    costPerPart: 'Low',
    initialInvestment: 'Low-Medium',
    speed: 'Moderate',
    precision: 'Low-Medium',
    materialOptions: 'Limited',
    productionVolume: 'Small to Medium',
    durability: 'Moderate',
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
    title: '20+ Years Strong',
    description: 'Kicking it since 2005 with global mold-making cred.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Worldwide Vibes',
    description:
      '20+ English-speaking pros ready to chat with you, no translator needed.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Awesome',
    description:
      'ISO 9001, ISO 13485, TS16949—proof we don’t mess around with quality.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Gear',
    description:
      '45 injection molding machines, including a beefy 1850T beast for parts up to 10kg.',
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
    title: 'Design',
    description:
      'Sketch your part and mold in CAD—think of it as doodling with purpose.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Manufacturing',
    description: 'CNC machines carve your aluminum masterpiece.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Mold Prep',
    description: 'Load it into the injection molding machine.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Injection',
    description:
      'Melted plastic zips in, cools fast, and pops out as your part.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Post-Processing',
    description: 'Trim, polish, or jazz it up as needed.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Aluminum Molds
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
    title: 'Design Tricks',
    description:
      'Nail gate placement, venting, and cooling channels for peak performance.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Materials',
    description:
      'Pick alloys like 7050 for strength or 6061-T651 for bigger molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Cooling',
    description:
      'Fancy channels can slash cooling time by half—because nobody likes waiting.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Boosts',
    description:
      'Anodizing or nickel plating toughens up your mold for the long haul.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Aluminum Molds <span className="text-primary">Material</span>{' '}
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
    title: 'Works With',
    description: 'Most thermoplastics—PP, PET, ABS, Nylon, you name it.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Not So Much',
    description:
      'High-temp plastics or abrasive stuff like glass-filled Nylon.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Alloy Effects',
    description: '7050 keeps things cool; 6061-T651 handles the big jobs.',
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
      <b>ZetarMold’s Edge</b>: Our engineers geek out over mold design and
      material picks, ensuring your project runs smoother than a freshly molded
      part.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Wear',
    description:
      'Aluminum isn’t as tough as steel. Fix: Add surface treatments or go with a harder alloy.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Flash',
    description:
      'Softness can lead to pesky overflow. Fix: Tweak gates and dialing in injection settings.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Volume Limits',
    description:
      'Not built for million-part marathons. Fix: Stick to small batches or switch to steel later.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Aluminum Molds Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Keep wall thickness consistent (1–3 mm is the sweet spot).',
  },
  {
    content: 'Place gates smartly to avoid flash disasters.',
  },
  {
    content: 'Add vents to dodge burn marks.',
  },
  {
    content: 'Use 1–2° draft angles for easy ejection.',
  },
  {
    content: 'Match alloy to your part’s vibe—complexity, volume, you get it.',
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
    question: 'Volume under 10,000?',
    options: [
      { text: 'Yes', result: 'Aluminum molds FTW' },
      { text: 'No', result: 'Steel might be your jam' },
    ],
  },
  {
    question: 'Need it fast?',
    options: [
      { text: 'Yes', result: 'Aluminum or 3D printing' },
      { text: 'No', result: 'Take your time with other options' },
    ],
  },
  {
    question: 'Complex design?',
    options: [
      { text: 'Yes', result: 'Aluminum’s precision shines' },
      { text: 'No', result: 'Vacuum forming could work' },
    ],
  },
  {
    question: 'Tight timeline?',
    options: [
      { text: 'Yes', result: 'Aluminum’s speed saves the day' },
      { text: 'No', result: 'Shop around' },
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
    title: 'Steel Molds',
    content: 'The heavy hitters for big runs.',
  },
  {
    title: '3D Printing',
    content: 'Quick and quirky for tiny batches.',
  },
  {
    title: 'Vacuum Forming',
    content: 'Simple and shallow wins the race.',
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
    title: '20+ Years Strong',
    description: 'Kicking it since 2005 with global mold-making cred.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Worldwide Vibes',
    description:
      'Our English-speaking crew serves 20+ countries—no language barriers here.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Awesome',
    description:
      'ISO 9001, ISO 13485, TS16949—we’ve got the stamps to prove it.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Gear',
    description:
      '45 machines, dust-free workshops, and a knack for perfection.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s speed and quality blew us away. Top-tier molds, every time.” — John D., Automotive Engineer',
  },
];
