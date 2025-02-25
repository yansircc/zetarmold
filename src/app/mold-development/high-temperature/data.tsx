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
  title:
    'High-Temperature Injection Molds: The Heatproof Heroes of Manufacturing',
  description:
    "High-temperature injection molds are the fearless titans of the manufacturing universe, laughing in the face of blazing heat that would send standard molds running for the hills. Designed to conquer the toughest plastics and harshest conditions, these molds are your go-to when precision meets scorching temperatures. At ZetarMold, we've been taming the heat for over 20 years, crafting high-temperature injection molds that redefine durability and performance. Ready to turn up the heat on your next project? Let's dive into the sizzling world of these heatproof heroes!",
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: 'What Are High-Temperature Injection Molds?',
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      High-temperature injection molds are specialized molds built to handle
      plastics with melting points above 250°C or to operate at elevated mold
      temperatures for top-notch part quality. They&apos;re engineered to stay
      cool-headed (well, sort of) under extreme heat without warping or losing
      their edge.
    </p>
    <p>
      At <b>ZetarMold</b>, we&apos;ve been taming the heat for over 20 years,
      crafting high-temperature injection molds that redefine durability and
      performance.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'Specialized molds built to handle plastics with melting points above 250°C or to operate at elevated mold temperatures for top-notch part quality.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Heat-resistant molds, high-heat molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Made from tough stuff like S136, H-13 or S-7 tool steels and often equipped with slick cooling systems, they mold even the hottest plastics with pinpoint accuracy.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: 'Applications and Benefits',
  description: (
    <>
      <b>Fun Fact</b>: Some plastics we mold are so heat-resistant they could
      sunbathe on a volcano and ask for a second round. High-temperature molds?
      They just smirk and keep on molding.
    </>
  ),
  action: {
    text: 'Let Zetar engineer your project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Industry',
    title: 'Automotive',
    description: 'Engine parts, manifolds, and radiator fans.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Aerospace',
    description: 'Lightweight, heat-proof bits for planes and satellites.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Electronics',
    description: 'LED housings and battery components.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Industry',
    title: 'Medical',
    description: 'Sterilizable tools and implants.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: 'Why Choose High-Temperature Injection Molds?',
  action: {
    text: 'Let Zetar Take Care of Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Extreme Plastic Mastery',
    description: 'Handles PEEK, PPS, and LCP like a chef with a hot skillet.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Top-Tier Parts',
    description:
      'Higher mold temps mean less stress and better stability—parts that stand tall.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Mold Longevity',
    description:
      'Built tough with H-13 steel, these molds outlast the competition.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatility',
    description:
      'From cars to catheters, they’ve got your heatproof needs covered.',
  },
];

// Comparison
export const COMPARISON = {
  title: 'Injection Molding Method Comparison',
  description:
    'Compare high-temperature injection molds with standard molds to find the best fit for your project. Consider factors like cost, material compatibility, and application range.',
  action: {
    text: 'Overwhelmed by Data? Let Zetar Make the Decision',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Feature',
    accessorKey: 'feature',
  },
  {
    header: 'High-Temperature Molds',
    accessorKey: 'highTempMolds',
  },
  {
    header: 'Standard Molds',
    accessorKey: 'standardMolds',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    feature: 'Initial Cost',
    highTempMolds: 'Higher (worth it!)',
    standardMolds: 'Lower (penny-pincher’s pick)',
  },
  {
    feature: 'Material Compatibility',
    highTempMolds: 'PEEK, PPS, LCP',
    standardMolds: 'PP, ABS—basic stuff',
  },
  {
    feature: 'Mold Temperature',
    highTempMolds: '160°C+ (bring it on)',
    standardMolds: '<100°C (tepid at best)',
  },
  {
    feature: 'Cycle Time',
    highTempMolds: 'Sometimes longer',
    standardMolds: 'Shorter (speedy but shaky)',
  },
  {
    feature: 'Application Range',
    highTempMolds: 'Auto, aero, med, elec',
    standardMolds: 'General use',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = {
  title: 'Why Choose ZetarMold?',
  action: {
    text: 'Discover Zetar: 300+ Projects Delivered Annually',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
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
    title: 'Material Selection',
    description: 'Choose heat-tough materials like H-13 steel.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Design Smarts',
    description: 'Optimize cooling channels for even heat distribution.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Craftsmanship',
    description: 'Precision machining for tight tolerances.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling Tech',
    description: 'Advanced systems to balance heat and speed.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Testing',
    description: 'Rigorous testing to ensure performance under heat.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: 'Mold Design for High-Temperature Injection',
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
    description: 'Designed to handle high-temperature plastics.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Advanced cooling systems to minimize warping and defects.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: 'High-Temperature Injection Material Considerations',
  action: {
    text: 'Get expert material advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Hotshot Plastics',
    description:
      'PEEK, PPS, and LCP need 300°C+ to melt—standard molds faint, but these champs thrive.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Thermal Trade-Offs',
    description:
      'Higher temps can slow cooling, but ZetarMold’s cooling wizardry keeps cycle times snappy.',
    image: '/images/placeholder/1.svg',
  },
];

// Challenges
export const CHALLENGES = {
  title: 'Challenges and Solutions',
  action: {
    text: 'Discover expert solutions with Zetar',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold&apos;s Edge</b>: Our engineers have wrangled PEEK at 400°C
      without breaking a sweat. We design molds that perform under pressure—
      because your project deserves nothing less.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Warping Woes',
    description:
      'H-13 steel and optimized cooling channels keep things straight.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Cycle Time Creep',
    description: 'Advanced cooling and temp control for efficiency.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Plastic Perils',
    description: 'Fine-tuned settings and thermally stable plastics.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'High-Temperature Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Pick heat-tough materials (H-13 steel, anyone?).',
  },
  {
    content: 'Optimize cooling channels—keep that heat in check.',
  },
  {
    content: 'Go for uniform wall thickness—no uneven cooling here.',
  },
  {
    content: 'Add 1.5-2° draft angles for smooth part release.',
  },
  {
    content: 'Choose high-temp plastics (PEEK’s calling!).',
  },
  {
    content: 'Crank mold temps (160°C for PEEK, no sweat).',
  },
  {
    content: 'Test prototypes—nail those parameters early.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: 'Decision Tree for Manufacturing Method',
  action: {
    text: 'Let Zetar Make Decisions for You',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Molding hot plastics (PEEK, PPS)?',
    options: [
      { text: 'Yes', result: 'High-temp molds or bust' },
      { text: 'No', result: 'Next up' },
    ],
  },
  {
    question: 'Parts need to handle extreme heat?',
    options: [
      { text: 'Yes', result: 'High-temp molds for the win' },
      { text: 'No', result: 'Keep going' },
    ],
  },
  {
    question: 'Precision a must-have?',
    options: [
      { text: 'Yes', result: 'High-temp molds lock it in' },
      { text: 'No', result: 'Standard might do' },
    ],
  },
  {
    question: 'Investing for the long haul?',
    options: [
      { text: 'Yes', result: 'High-temp molds pay off' },
      { text: 'No', result: 'Standard’s your budget buddy' },
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
    title: 'Material Magic',
    content: 'New plastics and steels push the heatproof frontier.',
  },
  {
    title: 'Molding Mastery',
    content: 'High-temp molds unlock advanced plastic potential.',
  },
  {
    title: 'Cooling Coolness',
    content: 'Cutting-edge systems keep efficiency sizzling.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: 'Why Partner with ZetarMold?',
  youtubeId: '6gAjMdkEd2s',
  action: {
    text: 'Partner with Zetar Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Heatproof Hustle',
    description: 'Since 2005, we’ve molded perfection worldwide.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Game',
    description:
      '20+ English-speaking pros serve 20+ countries—USA to Germany, we’re there.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Swagger',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our middle name.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Cheers',
    description:
      '“ZetarMold’s high-temp molds turbocharged our auto production. Precision and support? Unmatched.” — Alex R., Automotive Engineer',
  },
];
