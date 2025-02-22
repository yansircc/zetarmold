import type { TabItem } from '@/components/data-sections/tab-list';
import type { BasicInfo } from '../types';
import {
  Package,
  Microscope,
  Settings,
  Box,
  CheckCircle,
  Truck,
} from 'lucide-react';

export const basicInfo: BasicInfo = {
  title: 'Quality Inspection Process',
  description:
    'We will inspect the incoming materials to ensure they meet the required specifications. This includes checking dimensions, material properties, and visual inspection.',
};

export const processes: TabItem[] = [
  {
    title: 'Incoming Quality Control',
    icon: <Package />,
    description:
      'We will inspect the incoming materials to ensure they meet the required specifications. This includes checking dimensions, material properties, and visual inspection.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    title: 'Samples Checking',
    icon: <Microscope />,
    description:
      'We will inspect the samples to ensure they meet the required specifications. This includes dimensional accuracy, surface finish, and functional testing.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
  },
  {
    title: 'Process Inspection',
    icon: <Settings />,
    description:
      'We will inspect the process to ensure it meets the required specifications. This includes monitoring process parameters, machine settings, and quality metrics.',
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf',
  },
  {
    title: 'Packaging & Assembly',
    icon: <Box />,
    description:
      'We will inspect the packaging and assembly to ensure they meet the required specifications. This includes checking packaging integrity and assembly accuracy.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc',
  },
  {
    title: 'Final Quality Control',
    icon: <CheckCircle />,
    description:
      'We will inspect the final product to ensure it meets the required specifications. This includes final appearance, functionality, and compliance checks.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
  },
  {
    title: 'Outgoing Quality Control',
    icon: <Truck />,
    description:
      'We will inspect the outgoing product to ensure it meets the required specifications. This includes pre-shipment inspection and documentation verification.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
  },
];
