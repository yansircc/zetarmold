// Define the interface for a production flow step
export interface ProductionFlowStep {
  title: string;
  description: string;
  image: string;
}

// Create an array of production flow steps
export const productionFlowSteps: ProductionFlowStep[] = [
  {
    title: 'Customer Order',
    description:
      'Receive orders from customers, analyze order requirements, and organize relevant documents',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Working Schedule',
    description:
      'Select the appropriate injection molding production machine according to the order, product production scheduling, etc.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Granular Plastic Processing',
    description:
      'Granular plastic processing in injection molding involves drying, mixing, and possibly compounding the granules before feeding them into the machine.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Raw Material Purchasing',
    description:
      'Raw material purchasing for injection molding mass production involves acquiring polymers, additives, and colorants based on production specifications and volume.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Injection Mold Set Up',
    description:
      'Injection mold setup during mass production involves installing the mold, calibrating parameters, and conducting initial test runs for quality assurance.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Data Setting',
    description:
      'Injection machine data setting during mass production includes configuring temperature, pressure, injection speed, and cycle time for optimal performance.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Mass Production',
    description:
      'Mass production in injection molding involves continuous molding operations, quality monitoring, and adjustments to maintain production efficiency and product consistency.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'First Production Checking',
    description:
      'First production checking involves quality control inspections, dimensional verifications, and functionality tests of initial products for standard compliance.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Quality Control',
    description:
      'Mass production quality control in injection molding requires routine inspections, defect analysis, and adherence to product specifications and standards.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Products Packing',
    description:
      'Products packing during injection molding mass production includes sorting, quality control, labeling, and packaging for shipment and distribution.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Delivery',
    description:
      'Product delivery during injection molding mass production includes packaging, labeling, logistics planning, and shipment to meet customer delivery schedules.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    title: 'Warehousing',
    description:
      'Products warehousing during injection molding mass production requires storage planning, inventory management, and logistics coordination for finished goods.',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
];
