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
  Wind,
  Ruler,
  Droplet,
  Factory,
  ShieldCheck,
  Users,
  Clock, // Added for consistency with benefits and partner sections
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
      Small Batch Reaction Injection Molding:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Small Batch Reaction Injection Molding (RIM) is a manufacturing gem for producing 500 to 1,000 parts annually—perfect for those who need complex, lightweight plastic components without committing to massive production runs. Imagine it as the Goldilocks of molding: not too big, not too small, but just right for industries like automotive, medical, and industrial manufacturing. At ZetarMold, we’ve been mastering this process for over 20 years, delivering precision, flexibility, and a dash of innovation to clients worldwide.',
  action: {
    text: 'Get a Quick Quote for Your RIM Project',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">
        Small Batch Reaction Injection Molding
      </span>
      ?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your RIM Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Small Batch Reaction Injection Molding (RIM) is a specialized
      manufacturing process designed for producing 500 to 1,000 parts annually.
      It’s ideal for creating complex, lightweight plastic components without
      the need for large-scale production.
    </p>
    <p>
      By mixing reactive liquid components and injecting them into a mold, RIM
      produces parts with exceptional strength, precision, and surface finish.
      It’s a favorite in industries like automotive, medical, and industrial
      manufacturing.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been honing our RIM expertise for over 20
      years, delivering innovative solutions to clients around the globe.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'Small Batch RIM involves mixing reactive liquid components—like polyol and isocyanate—and injecting them into a mold, where they chemically react and solidify into durable plastic parts. It’s tailored for production volumes of 500 to 1,000 parts per year.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'RIM, Reaction Injection Molding, Small Batch RIM.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Unlike traditional molding with melted plastics, RIM uses a chemical reaction between thermosetting polymers to form parts. This makes it ideal for large, intricate designs with stellar surface finishes and low weight.',
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
      <b>Fun Fact</b>: RIM can whip up a car bumper in mere minutes—faster than
      you can say “polyurethane” three times! It’s like the Usain Bolt of
      molding processes.
    </>
  ),
  action: {
    text: 'Let Zetar engineer your RIM project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Bumpers, fenders, and air spoilers.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Device housings and components.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Industrial',
    description:
      'Custom enclosures that need to be light yet impact-resistant.',
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
    'Small Batch RIM is widely used in industries requiring complex, lightweight parts with excellent surface finishes, such as automotive, medical, and industrial sectors.',
  action: {
    text: 'See How Zetar Transforms RIM for Your Needs',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Automotive',
    description:
      'Perfect for prototyping or small runs of big parts like bumpers and spoilers.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical',
    description: 'Creates precise, biocompatible housings for devices.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Industrial',
    description:
      'Produces lightweight, durable enclosures for custom projects.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose <span className="text-primary">Small Batch RIM</span>?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your RIM Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective Tooling',
    description:
      'Uses aluminum molds, slashing initial costs compared to steel-heavy alternatives.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Complex Shapes Made Easy',
    description: 'Handles large, tricky designs with finesse.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Lightweight Strength',
    description:
      'Delivers parts that are both feather-light and tough as nails.',
  },
  {
    icon: <Clock className="size-6" />,
    title: 'Quick Turnaround',
    description: 'Faster cycle times mean your project stays on track.',
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
    method: 'Small Batch RIM',
    costPerPart: 'Medium',
    initialInvestment: 'Low-Medium',
    speed: 'Moderate',
    precision: 'High',
    materialOptions: 'Thermosets',
    complexity: 'High',
  },
  {
    method: 'Traditional Injection Molding',
    costPerPart: 'Medium-High',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Thermoplastics',
    complexity: 'High',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Limited',
    complexity: 'High',
  },
  {
    method: 'Compression Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'Medium',
    materialOptions: 'Limited',
    complexity: 'Low-Medium',
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
  youtubeId: '', // No video specified in the document
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including jumbo 1850T models for parts up to 10kg.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description:
      'ISO 9001, ISO 13485, and TS16949 certifications for unbeatable quality.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Dust-free Workshops',
    description:
      'Dust-free workshops (M7 level) for medical and food-grade precision.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros ready to support your global project.',
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
    title: 'Storage',
    description:
      'Liquid components are kept separate, like oil and water waiting to mingle.',
    image: '/images/placeholder/1.svg',
    icon: 'Droplet',
  },
  {
    title: 'Recirculation',
    description:
      'They’re circulated to keep temperature and viscosity just right.',
    image: '/images/placeholder/1.svg',
    icon: 'Repeat',
  },
  {
    title: 'Mixing',
    description:
      'A high-pressure mixing head blends them into a perfect cocktail.',
    image: '/images/placeholder/1.svg',
    icon: 'FlaskConical',
  },
  {
    title: 'Injection',
    description: 'The mix flows into the mold at a chill 100 psi or so.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Curing',
    description:
      'The magic happens—a chemical reaction turns liquid into solid.',
    image: '/images/placeholder/1.svg',
    icon: 'Thermometer',
  },
  {
    title: 'Ejection',
    description: 'Out pops your shiny new part.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Small Batch RIM
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
    title: 'Aluminum Molds',
    description: 'Lower cost and faster production compared to steel molds.',
  },
  {
    icon: <Droplet className="size-6" />,
    title: 'Design Flexibility',
    description: 'Allows for complex geometries and intricate designs.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Surface Finish',
    description: 'Excellent for parts requiring high-quality surface finishes.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Small Batch RIM <span className="text-primary">Material</span>{' '}
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
    title: 'Polyurethane',
    description: 'Offers flexibility or rigidity depending on formulation.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Material Impact',
    description:
      'Choices affect everything—viscosity, reaction speed, and final properties like strength or finish.',
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
      <b>ZetarMold’s Edge</b>: Our engineers are wizards at mold design and
      material selection, ensuring your parts perform flawlessly.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Consistent Quality',
    description:
      'Precision control over mixing, temperatures, and curing—ZetarMold’s specialty.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Material Costs',
    description:
      'Smart optimization to stretch every drop of material further.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Small Batch RIM Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content:
      'Add venting to dodge air traps—like giving your mold room to breathe.',
  },
  {
    content:
      'Plan for material expansion during curing (it’s a bit of a drama queen).',
  },
  {
    content:
      'Include draft angles for smooth ejection—no sticky situations here.',
  },
  {
    content: 'Consider inserts or reinforcements for extra oomph.',
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
    question: 'Need a large, complex part?',
    options: [
      { text: 'Yes', result: 'Small Batch RIM is calling your name' },
      { text: 'No', result: 'Check out traditional injection molding' },
    ],
  },
  {
    question: 'Production volume between 500 and 1,000 parts?',
    options: [
      { text: 'Yes', result: 'RIM’s your sweet spot' },
      {
        text: 'No',
        result: '3D printing for tiny runs, or scale up with other methods',
      },
    ],
  },
  {
    question: 'Want lightweight, impact-resistant thermosets?',
    options: [
      { text: 'Yes', result: 'RIM’s got you covered' },
      { text: 'No', result: 'Explore thermoplastic options' },
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
    title: 'Traditional Injection Molding',
    content: 'For high-volume thermoplastic needs.',
  },
  {
    title: 'Foam Molding',
    content: 'Great for lightweight, insulated parts.',
  },
  {
    title: 'Reinforced RIM (RRIM)',
    content:
      'Adds fibers for extra strength—think of it as RIM’s muscular cousin.',
  },
];

// Partner With Us
export const PARTNER_WITH_US = {
  title: (
    <>
      Why Partner with <span className="text-primary">ZetarMold</span>?
    </>
  ),
  youtubeId: '', // No video specified in the document
  action: {
    text: 'Partner with Zetar Today',
    href: '/contact',
  },
};

export const PARTNER_WITH_US_FEATURES: FeatureItem[] = [
  {
    icon: <Hammer className="size-6" />,
    title: '20+ Years of Mastery',
    description:
      'Since 2005, we’ve been crafting precision molds and parts for the world.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Reach',
    description:
      'Our English-speaking team serves 20+ countries—USA, UK, Germany, you name it.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Excellence',
    description:
      'ISO 9001, ISO 13485, and TS16949 mean top-tier quality, every time.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Wins',
    description:
      '“ZetarMold’s small batch RIM expertise got our medical device to market ahead of schedule. Their precision and speed are unmatched.” — Sarah L., Medical Device Engineer',
  },
];
