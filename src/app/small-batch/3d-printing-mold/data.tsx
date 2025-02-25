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
      3D Printing Injection Molds for Small Batch Production:
      <br /> A Comprehensive Guide for Your Project with ZetarMold
    </>
  ),
  description:
    'Imagine slashing weeks off your production timeline and cutting costs without sacrificing quality—sounds like a dream, right? Enter _3D printing injection molds_, the game-changer for small batch production. This innovative approach blends the speed of 3D printing with the precision of injection molding, making it a go-to for prototyping and limited runs. At ZetarMold, we’ve spent over 20 years perfecting this craft, delivering top-tier solutions to R&D managers like you across 20+ countries.',
  action: {
    text: 'Get a Free Consultation from ZetarMold',
    href: '/contact',
  },
};

// What It Is
export const WHAT_IT_IS = {
  title: (
    <>
      What Are <span className="text-primary">3D Printing Injection Molds</span>
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
      These are molds created via 3D printing, designed to churn out small
      batches of plastic parts using standard injection molding machines. Think
      of them as the quick-turn heroes of the molding world.
    </p>
    <p>
      By printing molds from materials like high-temp resins or metal-filled
      polymers, you get production-ready tools in days—not weeks—at a fraction
      of traditional costs.
    </p>
    <p>
      At <b>ZetarMold</b>, we’ve been mastering this process for over 20 years,
      delivering top-tier solutions to R&D managers like you across 20+
      countries.
    </p>
  </>
);

export const WHAT_IT_IS_FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'These are molds created via 3D printing, designed to churn out small batches of plastic parts using standard injection molding machines. Think of them as the quick-turn heroes of the molding world.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'Additive-manufactured molds, rapid prototyped molds.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'By printing molds from materials like high-temp resins or metal-filled polymers, you get production-ready tools in days—not weeks—at a fraction of traditional costs.',
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
      <b>Fun Fact</b>: A 3D printed mold can be ready faster than you can
      binge-watch your favorite series—talk about instant gratification!
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
    taxonomy: 'By 3D Printing Tech',
    title: 'Stereolithography (SLA)',
    description: 'Precision resin molds for smooth finishes.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By 3D Printing Tech',
    title: 'Selective Laser Sintering (SLS)',
    description: 'Tougher, heat-resistant options.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By 3D Printing Tech',
    title: 'Direct Metal Laser Sintering (DMLS)',
    description: 'For high-temp plastics needing metal-like durability.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Materials',
    title: 'Molds',
    description: 'High Temp Resin or metal-polymer composites.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Materials',
    title: 'Parts',
    description:
      'Thermoplastics like PP, PE, ABS, or even PC for sturdier needs.',
    image: '/images/placeholder/1.svg',
    hoverImage: '/images/placeholder/1.svg',
  },
  {
    taxonomy: 'By Use',
    title: 'Prototyping',
    description: 'Prototyping, testing, or small runs (100-500 parts).',
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
    '3D printing injection molds are used in consumer electronics, medical devices, automotive, and niche projects for their speed, cost savings, flexibility, and quality.',
  action: {
    text: 'See How ZetarMold Delivers Excellence',
    href: '/contact',
  },
};

// Where It's Used Gallery
export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'Consumer Electronics',
    description: 'Prototyping sleek phone cases or gadget housings.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Medical Devices',
    description: 'Small runs of custom tools or disposable instruments.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Automotive',
    description: 'Concept parts for testing before the big leagues.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Niche Projects',
    description: 'Limited-edition products or spare parts for vintage gear.',
    image: '/images/placeholder/1.svg',
  },
];

// Benefits
export const BENEFITS = {
  title: (
    <>
      Why Choose{' '}
      <span className="text-primary">3D Printing Injection Molds</span>?
    </>
  ),
  action: {
    text: 'Let ZetarMold Transform Your Ideas',
    href: '/contact',
  },
};

export const BENEFITS_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Speed',
    description: 'From design to mold in days—perfect for tight deadlines.',
  },
  {
    icon: <DollarSign className="size-6" />,
    title: 'Cost Savings',
    description: 'Lower upfront investment than CNC-machined metal molds.',
  },
  {
    icon: <Repeat className="size-6" />,
    title: 'Flexibility',
    description: 'Tweak designs on the fly without a budget meltdown.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Quality',
    description:
      'Parts rival traditional injection molding in strength and finish.',
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
    'Compare 3D printing injection molds with other methods to find the best fit for your project.',
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
];

export const COMPARISON_DATA: ComparisonData[] = [
  {
    method: '3D Printing Molds',
    costPerPart: 'Medium',
    initialInvestment: 'Low',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Wide (mold-limited)',
    productionVolume: 'Small-Medium',
  },
  {
    method: 'Traditional Molds',
    costPerPart: 'Low',
    initialInvestment: 'High',
    speed: 'Slow',
    precision: 'High',
    materialOptions: 'Wide',
    productionVolume: 'Large',
  },
  {
    method: 'Direct 3D Printing',
    costPerPart: 'High',
    initialInvestment: 'Low',
    speed: 'Medium',
    precision: 'Medium',
    materialOptions: 'Limited',
    productionVolume: 'Very Small',
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
    title: '20+ Years of Mastery',
    description: 'Since 2005, we’ve been molding excellence worldwide.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Crew',
    description: '20+ English-speaking pros serving 20+ countries.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description: 'ISO 9001, ISO 13485, ISO 14001, ISO 45001—quality’s our jam.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top-Notch Gear',
    description: '45 machines, dust-free workshops, and precision passion.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Client Love',
    description:
      '“ZetarMold’s speed and precision saved our prototype phase!” — Alex R., R&D Manager',
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
    description: 'Craft part and mold in CAD, factoring in 3D printing quirks.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: 'Print the Mold',
    description: 'Use SLA, SLS, or DMLS based on your needs.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: 'Post-Process',
    description: 'Cure or reinforce the mold for injection-ready strength.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: 'Set Up',
    description: 'Mount it in an injection molding machine, tweak settings.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
  {
    title: 'Produce',
    description: 'Inject plastic, cool, eject—rinse and repeat for your batch.',
    image: '/images/placeholder/1.svg',
    icon: 'Hammer',
  },
  {
    title: 'Inspect',
    description: 'Ensure parts meet spec, adjust as needed.',
    image: '/images/placeholder/1.svg',
    icon: 'ShieldCheck',
  },
];

// Mold Making
export const MOLD_MAKING = {
  title: (
    <>
      <span className="text-primary">Mold Design</span> for 3D Printing
      Injection Molds
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
    title: 'Design Tips',
    description:
      'Include draft angles (1-2°) and uniform thickness for easy ejection.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Materials',
    description:
      'Resin Molds for low to mid-temp plastics, Metal-Filled Composites for higher temps.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Durability',
    description:
      'Good for 100-500 cycles—ideal for small batches, not mass production.',
  },
];

// Material Consider
export const MATERIAL_CONSIDER = {
  title: (
    <>
      3D Printing Injection Molds <span className="text-primary">Material</span>{' '}
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
    title: 'Mold Limits',
    description:
      'Must withstand the plastic’s injection temp and pressure (e.g., ABS needs 200-250°C, >100 MPa).',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Plastic Picks',
    description:
      'PP, PE, and ABS work great with resin molds; PC or PEEK may need metal-filled options.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Compatibility',
    description: 'Test mold material via TGA to avoid melting mid-run.',
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
      <b>ZetarMold’s Edge</b>: Our engineers optimize every mold for peak
      performance, backed by 100+ molds crafted monthly.
    </p>
  ),
  image: '/images/placeholder/1.svg',
};

export const CHALLENGES_FEATURES: FeatureItem[] = [
  {
    icon: <Shield className="size-6" />,
    title: 'Wear and Tear',
    description:
      '3D printed molds degrade faster than steel. Solution: Stick to small runs or reinforce with coatings.',
  },
  {
    icon: <Wrench className="size-6" />,
    title: 'Heat Issues',
    description:
      'Resin molds can warp with high-temp plastics. Solution: Use metal-filled polymers or DMLS for tougher jobs.',
  },
  {
    icon: <Wind className="size-6" />,
    title: 'Finish',
    description:
      'Surfaces may need sanding for cosmetic parts. Solution: Budget for post-processing if looks matter.',
  },
];

// Checklist
export const CHECKLIST = {
  title: '3D Printing Injection Molds Design Checklist',
  action: {
    text: 'Let ZetarMold Review Your Design',
    href: '/contact',
  },
};

export const CHECKLIST_ITEMS: Tip[] = [
  {
    content: 'Pick a 3D printing tech (SLA, SLS, DMLS) based on plastic temps.',
  },
  {
    content: 'Match mold material to your part’s requirements.',
  },
  {
    content: 'Design with ejection in mind—draft angles are your friend.',
  },
  {
    content: 'Optimize gates and vents to avoid defects.',
  },
  {
    content: 'Test durability for your batch size (100-500 parts max).',
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
    question: 'Batch Size?',
    options: [
      { text: '<1,000 parts', result: '3D printed molds' },
      { text: '> 10,000 parts', result: 'Traditional molds' },
    ],
  },
  {
    question: 'Plastic Type?',
    options: [
      { text: 'Low-temp (PP, PE)', result: 'Resin molds' },
      { text: 'High-temp (PC, PEEK)', result: 'Metal-filled or DMLS molds' },
    ],
  },
  {
    question: 'Timeline?',
    options: [
      { text: 'Need it yesterday', result: '3D printed molds' },
      { text: 'Can wait', result: 'Traditional options' },
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
    title: 'Traditional Injection Molding',
    content: 'Your pick for massive runs.',
  },
  {
    title: 'Direct 3D Printing',
    content: 'Best for one-offs or wild geometries.',
  },
  {
    title: 'CNC Machining',
    content: 'Precision metal parts, no plastic involved.',
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
    title: '20+ Years of Know-How',
    description: 'Molding experts since 2005.',
  },
  {
    icon: <Globe className="size-6" />,
    title: 'Global Service',
    description: 'Supporting 20+ countries with a team fluent in English.',
  },
  {
    icon: <Award className="size-6" />,
    title: 'Certified Quality',
    description:
      'ISO 9001, ISO 13485, ISO 14001, ISO 45001—check, check, check!',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Top Facilities',
    description: '45 injection molding machines and dust-free workshops.',
  },
  {
    icon: <Heart className="size-6" />,
    title: 'Happy Clients',
    description:
      '“ZetarMold’s speed and precision saved our prototype phase!” — Alex R., R&D Manager',
  },
];
