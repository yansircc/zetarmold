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
      Injection Mold Mass-Production:
      <br /> A Comprehensive Guide
    </>
  ),
  description:
    'Learn how injection mold mass-production can transform your manufacturing process, delivering high-volume, precision parts for industries like automotive, electronics, and medical devices.',
  action: {
    text: 'Get a Quick Quote from Zetar',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What is{' '}
      <span className="text-primary">Injection Mold Mass-Production</span>?
    </>
  ),
  action: {
    text: 'Skip the Details, Let Zetar Handle Your Project',
    href: '/contact',
  },
  image: '/images/placeholder/1.svg',
};

export const WHAT_IT_IS_CONTENT = (
  <>
    <p>
      Injection mold mass-production is the rockstar of plastic
      manufacturing—churning out millions of identical parts with the precision
      of a Swiss watch and the speed of a caffeinated cheetah.
    </p>
    <p>
      Whether you’re dreaming up car dashboards, phone cases, or medical
      syringes, this process delivers high-volume brilliance that’ll make your
      competitors green with envy.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been rocking this game for over 20 years,
      crafting top-notch molds and parts for industries across the globe.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A powerhouse process where molten plastic gets injected into a mold to crank out heaps of identical parts—think 10,000 units or more.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Plastic injection molding, IM, or the snazzy “mass molding.”',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'It’s all about efficiency and repeatability—cycle times as quick as 10 seconds mean parts pop out faster than popcorn at a movie night.',
  },
];

// Standards & Classifications
export const APPLICATIONS_INFO = {
  title: (
    <>
      Standards <span className="text-primary">&</span> Classifications
    </>
  ),
  description: (
    <>
      <b>Fun Fact</b>: Injection molding can spit out a part every 10
      seconds—faster than you can yell “Mold me up, Scotty!”
    </>
  ),
  action: {
    text: 'Let Zetar engineer your project',
    href: '/contact',
  },
};

export const APPLICATIONS: CarouselItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Bumpers, dashboards, and all the cool interior bits.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Electronics',
    description: 'Phone cases, connectors, and gadget enclosures.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Syringes, vials, and diagnostic gear.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Packaging',
    description: 'Containers, lids, and bottle caps galore.',
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
    'Injection mold mass-production shines across industries, delivering precision parts from automotive to packaging with unmatched efficiency.',
  action: {
    text: 'See How Zetar Transforms Your Ideas',
    href: '/contact',
  },
};

export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'By Process',
    description: 'Melting, injecting, cooling, ejecting—rinse and repeat.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'By Material',
    description: 'Thermoplastics like PP, PE, PS, and ABS.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'By Application',
    description: 'Automotive, electronics, medical devices, and packaging.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">Injection Mold Mass-Production</span>?
    </>
  ),
  action: {
    text: 'Let Zetar Take Care of Your Project',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost-Effective',
    description: 'Per-part costs drop like a mic at high volumes.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Speedy',
    description:
      'Cycle times so short you’ll blink and miss ‘em—10 seconds, anyone?',
  },
  {
    icon: <Ruler className="size-6" />,
    title: 'Precise',
    description: 'Tolerances tighter than a drum at ±0.005 inches.',
  },
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Versatile',
    description: 'Tackles complex shapes and a smorgasbord of materials.',
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
    'Compare different manufacturing methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
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
    header: 'Production Volume',
    accessorKey: 'productionVolume',
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity',
  },
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: 'Injection Molding',
    costPerPart: 'Low',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide',
    productionVolume: 'High (10,000+)',
    complexity: 'High',
  },
  {
    method: '3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Slow',
    precision: 'Medium',
    materialOptions: 'Limited',
    productionVolume: 'Low (1–100)',
    complexity: 'High',
  },
  {
    method: 'CNC Machining',
    costPerPart: 'Medium-High',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'Very High',
    materialOptions: 'Wide',
    productionVolume: 'Low to Medium',
    complexity: 'High',
  },
  {
    method: 'Blow Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Limited',
    productionVolume: 'Medium to High',
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
  youtubeId: '6gAjMdkEd2s',
};

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    icon: <Factory className="size-6" />,
    title: 'Cutting-edge Machinery',
    description:
      '45 injection molding machines, including a beastly 1850T for parts up to 10kg.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Quality Certifications',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our jam.',
  },
  {
    icon: <Users className="size-6" />,
    title: 'Expert Team',
    description:
      '20+ English-speaking pros to make your global dreams a breeze.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s speed and quality are unreal. They’re our mold MVPs.” — Sarah L., Medical Device Engineer',
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
    title: 'Design',
    description: 'CAD wizards conjure your part into moldable reality.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Mold Making',
    description:
      'Steel or aluminum molds get machined with surgical precision.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Machine Setup',
    description: 'Temp, pressure, and speed dialed in just right.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Production',
    description: 'Melting, injecting, cooling, ejecting—rinse and repeat.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Quality Control',
    description: 'Every piece checked to be a perfect twin.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for Injection Molding
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
    icon: <Thermometer className="size-6" />,
    title: 'Efficient Cooling',
    description: 'Smart channels slash cooling time by up to 50%.',
  },
  {
    icon: <Shield className="size-6" />,
    title: 'Surface Treatments',
    description: 'Nitriding pumps mold life up by 30%.',
  },
];

// Material Considerations
export const MATERIAL_CONSIDER = {
  title: (
    <>
      Injection Molding <span className="text-primary">Material</span>{' '}
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
      'High Melt Flow Index (MFI) goodies like PP (>60 g/10min) flow like champs.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Thermal Stability',
    description: 'PC demands TLC to avoid turning yellow.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Chemical Resistance',
    description: 'PE shrugs off gasoline, while PS says “no thanks.”',
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
      <b>ZetarMold&apos;s Edge</b>: Our engineers geek out on mold design and
      materials, ensuring your parts are flawless every time.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Sink Marks',
    description:
      'Uneven cooling can leave blemishes. Fix: Uniform walls and spot-on cooling.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Warping',
    description:
      'Parts twist like a bad plot twist. Fix: Balanced molds and smart material picks.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Flash',
    description:
      'Plastic sneaks out where it shouldn’t. Fix: Tweak clamping pressure and mold fit.',
  },
];

// Checklist
export const CHECKLIST = {
  title: 'Injection Molding Design Checklist',
  action: {
    text: 'Let Zetar Check Your Project in Detail',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Uniform wall thickness (1.2–3 mm is the sweet spot).',
  },
  {
    content: 'Draft angles of 1.5–2° for smooth ejection.',
  },
  {
    content: 'Rounded corners to dodge stress.',
  },
  {
    content: 'Gates placed like a pro to avoid flaws.',
  },
  {
    content: 'Venting to let gases escape without a fuss.',
  },
  {
    content: 'Minimize undercuts to keep it simple.',
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
    question: 'Volume over 10,000?',
    options: [
      { text: 'Yes', result: 'Injection molding’s your MVP' },
      { text: 'No', result: 'Peek at 3D printing or CNC' },
    ],
  },
  {
    question: 'Complex shape?',
    options: [
      { text: 'Yes', result: 'Injection molding’s got the skills' },
      { text: 'No', result: 'Blow molding might do' },
    ],
  },
  {
    question: 'Tight tolerances?',
    options: [
      { text: 'Yes', result: 'Injection molding or CNC machining' },
      { text: 'No', result: 'Other options could work' },
    ],
  },
  {
    question: 'Material needs?',
    options: [
      {
        text: 'Specific vibes?',
        result: 'Check injection molding compatibility',
      },
    ],
  },
];

// Related Technologies
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
    title: '3D Printing',
    content: 'Prototyping pal, not a mass-production star.',
  },
  {
    title: 'CNC Machining',
    content: 'Precision king for smaller runs.',
  },
  {
    title: 'Blow Molding',
    content: 'Hollow-part hero, like bottles.',
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
    title: '20+ Years in the Game',
    description: 'Since 2005, we’ve been molding greatness worldwide.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Crew',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Awesome',
    description: 'ISO 9001, ISO 13485, TS16949—quality’s our DNA.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s speed and quality are unreal. They’re our mold MVPs.” — Sarah L., Medical Device Engineer',
  },
];
