import {
  FlaskConical,
  Tag,
  Thermometer,
  Shield,
  DollarSign,
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
  Paintbrush,
  Zap,
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
      IMD Injection Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Explore the world of IMD Injection Molding, where style meets functionality in a single, efficient process.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">IMD</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your IMD Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      IMD Injection Molding, or In-Mold Decoration, is like the interior
      designer of the plastics world—adding style, color, and texture to parts
      right in the mold. No messy post-production painting or labeling required!
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this craft for over 20 years,
      turning your ideas into beautifully finished products with precision and
      flair.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A process where a predecorated film is placed in the mold, and plastic is injected over it, bonding the decoration into the final part.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'In-Mold Decoration, IMD Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Film meets plastic in the mold, and out comes a part that’s dressed to impress.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: (
    <>
      How It’s <span className="text-primary">Classified</span>
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: IMD molding skips the after-party of post-processing—your
      parts leave the mold ready for the spotlight!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your IMD project',
    href: '/contact',
  },
};

// Applications
export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Interior trims, buttons.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Device covers, bezels.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Appliances',
    description: 'Control panels.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Cosmetics',
    description: 'Packaging.',
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
    'IMD Injection Molding is widely used in industries like automotive, electronics, appliances, and cosmetics for its aesthetic appeal and durability.',
  action: {
    text: 'See How Zetar Transforms IMD for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Interior bits that look sharp and last long.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Phone cases and bezels with pizzazz.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Appliances',
    description: 'Control panels that double as decor.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Cosmetics',
    description: 'Packaging so pretty, it’s half the sale.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">IMD</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your IMD Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Paintbrush className="size-6" />,
    title: 'Stunning Looks',
    description: 'Integrated designs that pop without fading.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Saving',
    description: 'Fewer steps, less cash spent.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Tough as Nails',
    description: 'Decorations stay safe under a plastic shield.',
  },
  {
    icon: <Zap className="size-6" />,
    title: 'High-Speed Hero',
    description: 'Built for big production runs.',
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
    'Compare IMD Injection Molding with other methods to find the best fit for your project.',
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
    method: 'IMD Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Various',
    complexity: 'High',
  },
  {
    method: 'Post-Molding Painting',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Various',
    complexity: 'Low',
  },
  {
    method: 'Hot-Stamping',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'Medium',
    materialOptions: 'Various',
    complexity: 'Medium',
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
      '45 cutting-edge injection molding machines, including IMD-ready setups for flawless decoration.',
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
  title: 'Dive Deeper: How IMD Works',
  action: {
    text: 'Let Zetar Patiently Explain the Principles',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Film Prep',
    description: 'A decorative film is positioned in the mold.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Clamp Down',
    description: 'The mold locks tight, securing the film.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection Time',
    description: 'Molten plastic floods in, fusing with the film.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cool & Pop',
    description: 'The part cools, solidifies, and eject—voilà!',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for IMD Injection
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
    title: 'Precision Cavities',
    description: 'Designed to cradle the film just right.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Durable Materials',
    description: 'Hardened steels like H13 (≥50 HRC) for longevity.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Clever channels to chill evenly—no warps here.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      IMD Injection <span className="text-primary">Material</span>{' '}
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
    title: 'Film Fit',
    description: 'Must endure heat and pressure without a meltdown.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Top Picks',
    description: 'PC films with ABS or PP plastics.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Watch Out',
    description: 'Pairing mismatches can lead to poor bonding.',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers are the Cupids of materials,
      ensuring perfect harmony in every part.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Film Slippage',
    description: 'Precision placement tools and operator finesse.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping Woes',
    description: 'Uniform cooling and spot-on temp control.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Flash Mess',
    description: 'Fine-tune speed and pressure.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'IMD Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Match films and plastics like a pro—no odd couples.',
  },
  {
    content: 'Plan film placement so it sticks the landing.',
  },
  {
    content: 'Keep walls even to dodge cooling drama.',
  },
  {
    content: 'Place gates for smooth flow—no bottlenecks.',
  },
  {
    content: 'Add draft angles for an easy exit.',
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
    question: 'Need built-in decoration?',
    options: [
      { text: 'Yes', result: 'IMD molding’s your VIP' },
      { text: 'No', result: 'Standard molding might do' },
    ],
  },
  {
    question: 'High production volume?',
    options: [
      { text: 'Yes', result: 'IMD’s efficiency shines' },
      { text: 'No', result: 'Post-decoration could work' },
    ],
  },
  {
    question: 'Want a durable finish?',
    options: [
      { text: 'Yes', result: 'IMD’s your durability champ' },
      { text: 'No', result: 'Look elsewhere' },
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
    title: 'IML (In-Mold Labeling)',
    content: 'Labels baked right in.',
  },
  {
    title: 'IMF (In-Mold Forming)',
    content: '3D designs with flair.',
  },
  {
    title: 'IMR (In-Mold Roller)',
    content: 'Rolls out parts non-stop.',
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
    title: '20+ Years Strong',
    description: 'Crafting perfection since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Worldwide Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—we’ve got the badges.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top Gear',
    description: '45 machines and dust-free workshops for flawless results.',
  },
  {
    icon: <Zap className="size-6" />,
    title: 'Fast Track',
    description: 'Prototypes in days—speed is our superpower.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Happy Clients',
    description:
      '“ZetarMold’s IMD skills made our product a hit—fast and flawless.” — Sarah K., Medical Device Engineer',
  },
];
