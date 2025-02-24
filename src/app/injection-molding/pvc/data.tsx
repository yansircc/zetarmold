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
      PVC Injection Molding:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Discover the versatile world of PVC injection molding, from its applications to its benefits and manufacturing process.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is <span className="text-primary">PVC</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your PVC Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      PVC Injection Molding is the unsung hero of the manufacturing world,
      turning humble polyvinyl chloride (PVC) into durable, precise parts that
      power industries like construction, medical, automotive, and consumer
      goods.
    </p>
    <p>
      Known for its strength, chemical resistance, and wallet-friendly
      efficiency, this process is a go-to for mass production.
    </p>
    <p>
      At <b>ZetarMold</b>, we&apos;ve been perfecting this craft for over 20
      years, delivering top-tier solutions with a global reach and a dash of
      expertise that makes your projects shine.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process where molten PVC—a versatile thermoplastic—is injected into a mold to create everything from pipes to medical tubes with precision and speed.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'PVC Molding, Vinyl Injection Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Heat PVC pellets until they&apos;re a gooey delight, inject them into a mold under high pressure, cool them down, and pop out a shiny new part. Simple, yet brilliant.',
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
      <b>Fun Fact</b>: PVC was accidentally discovered <i>twice</i> in 1838 and
      1872—before someone finally said, &quot;Hey, this could be useful!&quot;
      in the 1920s. Talk about a plastic with persistence!
    </>
  ),
  action: {
    text: 'Let Zetar engineer your PVC project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Construction',
    description: 'Pipes, fittings, vinyl siding.',
    image: '/images/placeholder/6.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Tubes, catheters, and more.',
    image: '/images/placeholder/5.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Seals, gaskets, and more.',
    image: '/images/placeholder/4.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description: 'Plastic toys, household items, and more.',
    image: '/images/placeholder/3.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Electrical',
    description: 'Cables, wires, and more.',
    image: '/images/placeholder/2.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Industrial',
    description: 'Machinery parts, tools, and more.',
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
    'PVC is a versatile material that can be used in a wide range of applications. It is a popular choice for construction, automotive, and consumer goods.',
  action: {
    text: 'See How Zetar Transforms PVC for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Construction',
    description:
      'Think pipes and fittings that laugh in the face of corrosion.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Tubes and blood bags that demand durability and cleanliness.',
    image: '/images/placeholder/2.svg',
  },
  {
    title: 'Automotive',
    description: 'Dashboards that make your car&apos;s interior pop.',
    image: '/images/placeholder/3.svg',
  },
  {
    title: 'Consumer Goods',
    description: 'Toys and packaging that prove PVC can play nice too.',
    image: '/images/placeholder/4.svg',
  },
];

// Benefits (Why It)
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">PVC</span> Injection Molding?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your PVC Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Durability',
    description:
      'PVC parts are built to last—tougher than a toddler with a toy hammer.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Chemical Resistance',
    description:
      'Perfect for environments that would make lesser materials cry.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description:
      'High initial mold costs pay off with low per-part prices in big runs.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Versatility',
    description:
      'Rigid or flexible, PVC bends over backwards to meet your needs.',
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
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'PVC Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Limited to PVC',
    complexity: 'High',
  },
  {
    method: 'ABS Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'ABS',
    complexity: 'High',
  },
  {
    method: 'Extrusion',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'Medium',
    materialOptions: 'Various',
    complexity: 'Low',
  },
  {
    method: 'Blow Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
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
    title: 'Material Prep',
    description: 'Dry PVC pellets to kick moisture to the curb.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Melting',
    description: "Heat to 160-190°C until it's molten magic.",
    image: '/images/placeholder/2.svg',
    icon: 'Layers',
  },
  {
    title: 'Injection',
    description: 'Blast it into the mold with high-pressure gusto.',
    image: '/images/placeholder/3.svg',
    icon: 'Zap',
  },
  {
    title: 'Cooling',
    description: 'Chill it out to solidify the shape.',
    image: '/images/placeholder/4.svg',
    icon: 'Sticker',
  },
  {
    title: 'Ejection',
    description: 'Pop out the part, and repeat the fun.',
    image: '/images/placeholder/5.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for PVC Injection
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
    description: "Designed to withstand PVC's corrosive nature with ease.",
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
      PVC Injection <span className="text-primary">Material</span>{' '}
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
    title: 'Additives',
    description:
      'Plasticizers for flexibility, stabilizers to keep things cool under heat.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Challenges',
    description:
      'Overheat PVC, and it might release HCl gas—proper temp control is key.',
    image: '/images/placeholder/2.svg',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers tame PVC&apos;s quirks like
      pros, ensuring your parts are flawless.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Degradation',
    description: 'Stabilizers and precise heating save the day.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Corrosion',
    description: 'Corrosion-resistant molds keep things smooth.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Warping',
    description: 'Uniform cooling and clever design prevent part tantrums.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'PVC Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content:
      'Plan for shrinkage (0.2-0.6%)—PVC likes to shrink a little post-party.',
  },
  {
    content: 'Keep wall thickness uniform to avoid warp drama.',
  },
  {
    content: 'Add draft angles for a smooth ejection exit.',
  },
  {
    content: 'Design gates and runners for optimal flow—no clogs allowed.',
  },
  {
    content: 'Vent properly to dodge burn marks.',
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
    question: 'Is your part complex?',
    options: [
      { text: 'Yes', result: "Injection molding's your jam" },
      { text: 'No', result: 'Extrusion might do the trick' },
    ],
  },
  {
    question: 'Need durability and chemical resistance?',
    options: [
      { text: 'Yes', result: "PVC's your guy" },
      { text: 'No', result: 'Explore other plastics' },
    ],
  },
  {
    question: 'High production volume?',
    options: [
      { text: 'Yes', result: 'Injection molding wins on cost' },
      { text: 'No', result: 'Consider simpler options' },
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
    title: 'Extrusion',
    content: 'For continuous goodies like pipes.',
  },
  {
    title: 'Blow Molding',
    content: 'For hollow wonders like bottles.',
  },
  {
    title: 'Thermoforming',
    content: "For big, simple shapes that don't need the VIP treatment.",
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
    description: 'Since 2005, we&apos;ve been molding dreams into reality.',
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
    description: 'ISO 9001, ISO 13485, TS16949—quality&apos;s our middle name.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      'ZetarMold&apos;s PVC expertise turned our project around—fast and flawless. — Sarah K., Medical Device Engineer',
  },
];
