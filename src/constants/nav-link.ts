import {
  type LucideProps,
  Building2,
  Users,
  ClipboardCheck,
  Factory,
  GitGraph,
  Workflow,
  Component,
  Shapes,
  Layers,
  PenTool,
  Palette,
  Boxes,
  Box,
  Blocks,
  Cylinder,
  Combine,
  BookOpen,
  Newspaper,
  GraduationCap,
  Video,
} from 'lucide-react';

interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<LucideProps>;
}

interface NavLink {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

const aboutItems: DropdownItem[] = [
  {
    title: 'Company History',
    href: '/our-history',
    description: 'Our company history and origins.',
    icon: Building2,
  },
  {
    title: 'Professional Team',
    href: '/our-team',
    description: 'Meet our expert injection molding team.',
    icon: Users,
  },
  {
    title: 'Quality Inspection',
    href: '/quality-inspection',
    description: 'Our rigorous quality control process.',
    icon: ClipboardCheck,
  },
  {
    title: 'Mold Making Equipments',
    href: '/mold-making-equipments',
    description: 'Explore our advanced mold making equipment.',
    icon: Factory,
  },
  {
    title: 'Injection Production Equipments',
    href: '/injection-production-equipments',
    description: 'Explore our advanced injection production equipment.',
    icon: Factory,
  },
  {
    title: 'Injection Molding Workflow',
    href: '/injection-molding-workflow',
    description: 'Our injection molding workflow.',
    icon: Workflow,
  },
  {
    title: 'Mold Making Workflow',
    href: '/mold-making-workflow',
    description: 'Our mold making workflow.',
    icon: Workflow,
  },
];

const servicesItems: DropdownItem[] = [
  {
    title: 'Injection Molding Services',
    href: '/injection-molding',
    description: 'Comprehensive injection molding solutions.',
    icon: Component,
  },
  {
    title: 'Rapid Prototyping',
    href: '/rapid-prototyping',
    description: 'Fast prototyping for design validation.',
    icon: Shapes,
  },
  {
    title: 'Post Processing',
    href: '/post-processing',
    description: 'Enhancing part quality and performance.',
    icon: Layers,
  },
];

const injectionMoldingItems: DropdownItem[] = [
  {
    title: 'Overmolding',
    href: '/overmolding',
    description: 'Multi-material injection molding process.',
    icon: PenTool,
  },
  {
    title: 'Insert Molding',
    href: '/insert-molding',
    description: 'Embedding components during molding.',
    icon: Palette,
  },
  {
    title: 'In-Mold Decoration Molding (IMD)',
    href: '/imd-molding',
    description: 'Decorative surface finishing in mold.',
    icon: Boxes,
  },
  {
    title: 'PVC Molding',
    href: '/pvc-molding',
    description: 'Specialized PVC material molding.',
    icon: Box,
  },
  {
    title: 'Thin Wall Molding',
    href: '/thin-wall-molding',
    description: 'Precision thin-walled part production.',
    icon: Blocks,
  },
  {
    title: 'High Temperature Molding',
    href: '/high-temperature-molding',
    description: 'Heat-resistant material processing.',
    icon: Cylinder,
  },
];

const moldItems: DropdownItem[] = [
  {
    title: 'Injection Mold',
    href: '/injection-mold',
    description: 'Standard injection mold solutions.',
    icon: Component,
  },
  {
    title: 'MUD Mold',
    href: '/mud-mold',
    description: 'Master Unit Die mold systems.',
    icon: Combine,
  },
  {
    title: 'Hot Runner Mold',
    href: '/hot-runner-mold',
    description: 'Advanced hot runner technology.',
    icon: GitGraph,
  },
  {
    title: 'Low Volume Mold',
    href: '/low-volume-mold',
    description: 'Cost-effective small batch production.',
    icon: Boxes,
  },
];

const resourceItems: DropdownItem[] = [
  {
    title: 'Industry Blog',
    href: '/blog',
    description: 'Injection molding insights and trends.',
    icon: BookOpen,
  },
  {
    title: 'Company News',
    href: '/news',
    description: 'Our latest company updates.',
    icon: Newspaper,
  },
  {
    title: 'Injection Molding Guides',
    href: '/guides',
    description: 'Learn molding techniques and best practices.',
    icon: GraduationCap,
  },
  {
    title: 'Video Center',
    href: '/videos',
    description: 'Visual demonstrations and expertise.',
    icon: Video,
  },
];

export const navLinks: NavLink[] = [
  {
    label: 'About',
    href: '#about',
    dropdownItems: aboutItems,
  },
  {
    label: 'Services',
    href: '#services',
    dropdownItems: servicesItems,
  },
  {
    label: 'Injection Molding',
    href: '#injection-molding',
    dropdownItems: injectionMoldingItems,
  },
  {
    label: 'Mold',
    href: '#mold',
    dropdownItems: moldItems,
  },
  {
    label: 'Resources',
    href: '#resources',
    dropdownItems: resourceItems,
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
