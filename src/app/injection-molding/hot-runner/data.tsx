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
      Hot Runner Injection Molding:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Discover how Hot Runner Injection Molding reduces waste and speeds up production. With over 20 years of expertise, ZetarMold delivers precision parts for your project.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">Hot Runner</span> Injection
      Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Hot Runner Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Hot Runner Injection Molding is like the espresso machine of the plastics
      world—keeping things hot, fast, and flowing smoothly. This process uses a
      heated runner system to keep plastic molten, reducing waste and speeding
      up production.
    </p>
    <p>
      At <b>ZetarMold</b>, we&apos;ve been perfecting this craft for over 20
      years, turning your boldest ideas into precision parts that hit the mark
      every time.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A type of injection molding where the runner system is kept hot to maintain the plastic in a molten state, allowing direct injection into the mold cavity without solidifying in the runner.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Hot Runner Molding, Heated Runner System.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Think of it as a molten highway—plastic flows smoothly from the machine to the mold, no detours, no waste.',
  },
];

// Applications Info
export const APPLICATIONS_INFO = {
  title: (
    <>
      Applications <span className="text-primary">&</span> Benefits
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Hot runners are like the VIP lanes of injection
      molding—bypassing the traffic of cold runners for a faster, cleaner ride!
    </>
  ),
  action: {
    text: 'Let Zetar Engineer Your Hot Runner Project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Interior trim, connectors.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Syringes, inhalers.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Device housings.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Packaging',
    description: 'Bottles, caps.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
];

// Where It's Used
export const WHERE_ITS_USED = {
  title: (
    <>
      Where Hot Runner <span className="text-primary">Shines</span>
    </>
  ),
  description:
    'Hot Runner Injection Molding excels in industries requiring precision, speed, and minimal waste.',
  action: {
    text: 'See How Zetar Applies Hot Runner Technology',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description: 'Precision parts that keep cars sleek and safe.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Sterile, high-tolerance devices.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Electronics',
    description: 'Sleek, durable casings.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Packaging',
    description: 'Efficient, waste-free production.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Hot Runner</span> Injection
      Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Hot Runner Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Zero Waste',
    description: 'No solidified runners to toss.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Speed Demon',
    description: 'Faster cycles, higher output.',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision',
    description: 'Consistent, high-quality parts.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatile',
    description: 'Handles complex designs and multi-cavity molds.',
  },
];

// Comparison
export const COMPARISON = {
  title: (
    <>
      Hot Runner vs. Cold Runner{' '}
      <span className="text-primary">Comparison</span>
    </>
  ),
  description:
    'Compare Hot Runner and Cold Runner systems to find the best fit for your project. Consider factors like waste, speed, and cost.',
  action: {
    text: 'Need Help Deciding? Let Zetar Guide You',
    href: '/contact',
  },
};

export const COMPARISON_COLUMNS: Column<ComparisonData>[] = [
  {
    header: 'Method',
    accessorKey: 'method',
  },
  {
    header: 'Material Waste',
    accessorKey: 'materialWaste',
  },
  {
    header: 'Cycle Time',
    accessorKey: 'cycleTime',
  },
  {
    header: 'Initial Cost',
    accessorKey: 'initialCost',
  },
  {
    header: 'Maintenance',
    accessorKey: 'maintenance',
  },
  {
    header: 'Part Quality',
    accessorKey: 'partQuality',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'Hot Runner',
    materialWaste: 'None',
    cycleTime: 'Fast',
    initialCost: 'Higher',
    maintenance: 'More complex',
    partQuality: 'High consistency',
  },
  {
    method: 'Cold Runner',
    materialWaste: 'High (runners)',
    cycleTime: 'Slower',
    initialCost: 'Lower',
    maintenance: 'Simpler',
    partQuality: 'Variable',
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = {
  title: (
    <>
      Why Choose <span className="text-primary">ZetarMold</span> for Hot Runner
      Molding?
    </>
  ),
  action: {
    text: 'Discover Zetar: Expertise in Hot Runner Technology',
    href: '/contact',
  },
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including a 1850T model for large parts.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, and TS16949 certifications—quality is our DNA.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Dust-free Workshops',
    description:
      'M7 level dust-free workshops for medical and food-grade parts.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking professionals for seamless global collaboration.',
  },
];

// How It Works
export const HOW_IT_WORKS = {
  title: 'How Hot Runner Injection Molding Works',
  action: {
    text: 'Let Zetar Explain the Process in Detail',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: 'Mold Design',
    description: 'Custom hot runner system installed.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
  {
    title: 'Heating',
    description: 'System heats to keep plastic molten.',
    image: '/images/placeholder/1.svg',
    icon: 'Thermometer',
  },
  {
    title: 'Injection',
    description: 'Plastic flows directly into the mold cavity.',
    image: '/images/placeholder/1.svg',
    icon: 'Droplet',
  },
  {
    title: 'Cooling',
    description: 'Part cools, runner stays hot.',
    image: '/images/placeholder/1.svg',
    icon: 'Wind',
  },
  {
    title: 'Ejection',
    description: 'Part pops out, ready for action.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Hot Runner Injection
    </>
  ),
  action: {
    text: 'Let Zetar Design Your Hot Runner Mold',
    href: '/contact',
  },
};

export const MOLD_MAKING_FEATURES: FeatureItem[] = [
  {
    icon: <Ruler className="size-6" />,
    title: 'Precision Design',
    description: 'Multi-cavity layouts with heated manifolds for optimal flow.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Durable Materials',
    description:
      'P20 or Hardened steels like H13 to withstand high temperatures.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Advanced Cooling',
    description: 'Efficient cooling channels for rapid, even part cooling.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Hot Runner Injection <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  action: {
    text: 'Get Expert Material Advice from Zetar',
    href: '/contact',
  },
};

export const MATERIAL_CONSIDER_GALLERY: GalleryItem[] = [
  {
    title: 'Flowability',
    description:
      'High-flow plastics like PP and ABS are ideal for hot runners.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Temperature Control',
    description: 'Critical for high-performance materials like PEEK or PEI.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description: 'Higher costs but worth it for precision and efficiency.',
    image: '/images/placeholder/1.svg',
  },
];

// Challenges
export const CHALLENGES = {
  title: (
    <>
      Challenges <span className="text-primary">&</span> Solutions in Hot Runner
      Molding
    </>
  ),
  action: {
    text: 'Discover Expert Solutions with Zetar',
    href: '/contact',
  },
};

export const CHALLENGES_MEDIA_BESIDE_LAYOUT = {
  description: (
    <p>
      <b>ZetarMold&apos;s Edge</b>: Our engineers are hot runner whisperers,
      crafting systems that run like a dream.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Wrench className="size-6" />,
    title: 'System Failures',
    description: 'Regular maintenance and expert design prevent downtime.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Color Changes',
    description: 'Purging systems for quick and efficient color swaps.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'High Initial Cost',
    description:
      'Long-term savings on waste and cycle times justify the investment.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Hot Runner Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Choose the right system type (single, multi, valve gate).',
  },
  {
    content: 'Match materials to system capabilities.',
  },
  {
    content: 'Plan for maintenance—keep it running smooth.',
  },
  {
    content: 'Optimize gate placement for flow and finish.',
  },
];

// Decision Tree
export const DECISION_TREE = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for Choosing Hot vs.
      Cold Runner
    </>
  ),
  action: {
    text: 'Let Zetar Help You Decide',
    href: '/contact',
  },
};

export const DECISION_TREE_STEPS: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Is your production volume high?',
    options: [
      { text: 'Yes', result: "Hot runner's your speedster" },
      { text: 'No', result: 'Cold runner might do' },
    ],
  },
  {
    question: 'Do you need zero waste?',
    options: [
      { text: 'Yes', result: "Hot runner's the eco-hero" },
      { text: 'No', result: 'Cold runner could work' },
    ],
  },
  {
    question: 'Are your parts complex?',
    options: [
      { text: 'Yes', result: 'Hot runner nails precision' },
      { text: 'No', result: 'Simpler systems may suffice' },
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
    title: 'Cold Runner Systems',
    content: 'The old-school choice for simpler molds.',
  },
  {
    title: 'Insulated Runner Systems',
    content: 'A hybrid approach for specific applications.',
  },
  {
    title: 'Heated Runner Systems',
    content: 'For specialized high-temperature needs.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: (
    <>
      Why Partner with <span className="text-primary">ZetarMold</span> for Hot
      Runner Molding?
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
    title: '20+ Years of Mastery',
    description: 'Molding excellence since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description: 'Serving 20+ countries with fluent English support.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, TS16949—we’ve got the badges.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s hot runner expertise took our production to the next level!” — Sarah K., Medical Device Engineer',
  },
];
