import {
  Box,
  CheckCircle,
  Microscope,
  Package,
  Settings,
  Truck,
} from 'lucide-react';

interface QualityInspectionEquipment {
  name: string;
  description: string;
  image: string;
}

export const qualityInspectionEquipments: QualityInspectionEquipment[] = [
  {
    name: 'Coordinate Measuring Machine',
    description:
      'A coordinate measuring machine (CMM) is a device used to measure the dimensions of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Profile Projector',
    description:
      'A profile projector is a device used to project the profile of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'NEMESIS Hardness Tester',
    description:
      'A NEMESIS hardness tester is a device used to measure the hardness of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Shore Hardness Tester',
    description:
      'A Shore hardness tester is a device used to measure the hardness of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Height Gauge',
    description:
      'A height gauge is a device used to measure the height of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Calliper',
    description:
      'A calliper is a device used to measure the dimensions of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Gear Tester',
    description:
      'A gear tester is a device used to measure the gear of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Thickness Gauge',
    description:
      'A thickness gauge is a device used to measure the thickness of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Colorimeter',
    description:
      'A colorimeter is a device used to measure the color of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
  {
    name: 'Gloss Meter',
    description:
      'A gloss meter is a device used to measure the gloss of an object.',
    image: 'https://library.shadcnblocks.com/images/block/block-1.svg',
  },
];

interface QualityInspectionProcess {
  id: number;
  header: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

export const qualityInspectionProcess: QualityInspectionProcess[] = [
  {
    id: 1,
    header: 'Incoming Quality Control',
    icon: <Package />,
    description:
      'We will inspect the incoming materials to ensure they meet the required specifications. This includes checking dimensions, material properties, and visual inspection.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 2,
    header: 'Samples Checking',
    icon: <Microscope />,
    description:
      'We will inspect the samples to ensure they meet the required specifications. This includes dimensional accuracy, surface finish, and functional testing.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
  },
  {
    id: 3,
    header: 'Process Inspection',
    icon: <Settings />,
    description:
      'We will inspect the process to ensure it meets the required specifications. This includes monitoring process parameters, machine settings, and quality metrics.',
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf',
  },
  {
    id: 4,
    header: 'Packaging & Assembly',
    icon: <Box />,
    description:
      'We will inspect the packaging and assembly to ensure they meet the required specifications. This includes checking packaging integrity and assembly accuracy.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc',
  },
  {
    id: 5,
    header: 'Final Quality Control',
    icon: <CheckCircle />,
    description:
      'We will inspect the final product to ensure it meets the required specifications. This includes final appearance, functionality, and compliance checks.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
  },
  {
    id: 6,
    header: 'Outgoing Quality Control',
    icon: <Truck />,
    description:
      'We will inspect the outgoing product to ensure it meets the required specifications. This includes pre-shipment inspection and documentation verification.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
  },
];
