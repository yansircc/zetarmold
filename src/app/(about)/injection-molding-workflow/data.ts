interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'customer-order',
    title: 'Customer Order',
    description:
      'Receive orders from customers, analyze order requirements, and organize relevant documents',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'working-schedule',
    title: 'Working Schedule',
    description:
      'Prepare production plan schedule according to order requirements. A working schedule is estalished after certain discussion',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
  },
  {
    id: 'raw-material-purchasing',
    title: 'Raw Material Purchasing',
    description:
      'Raw material purchasing for injection molding mass production involves acquiring polymers, additives, and colorants based on production specifications and volume.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'granular-plastic-processing',
    title: 'Granular Plastic Processing',
    description:
      'Granular plastic processing in injection molding involves drying, mixing, and possibly compounding the granules before feeding them into the machine.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'mold-steel-accessories-procurement',
    title: 'Mold Steel Accessories Procurement',
    description:
      'After confirming the mold drawing, purchase the required mold steel and mold accessories according to the mold drawing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'injection-mold-set-up',
    title: 'Injection Mold Set Up',
    description:
      'Injection mold setup during mass production involves installing the mold, calibrating parameters, and conducting initial test runs for quality assurance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'data-setting',
    title: 'Data Setting',
    description:
      'Injection machine data setting during mass production includes configuring temperature, pressure, injection speed, and cycle time for optimal performance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'first-production-checking',
    title: 'First Production Checking',
    description:
      'First production checking involves quality control inspections, dimensional verifications, and functionality tests of initial products for standard compliance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'mass-production',
    title: 'Mass Production',
    description:
      'Mass production in injection molding involves continuous molding operations, quality monitoring, and adjustments to maintain production efficiency and product consistency.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    description:
      'Mass production quality control in injection molding requires routine inspections, defect analysis, and adherence to product specifications and standards.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'products-packing',
    title: 'Products Packing',
    description:
      'Products packing during injection molding mass production includes sorting, quality control, labeling, and packaging for shipment and distribution.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description:
      'Products warehousing during injection molding mass production requires storage planning, inventory management, and logistics coordination for finished goods.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    description:
      'Product delivery during injection molding mass production includes packaging, labeling, logistics planning, and shipment to meet customer delivery schedules.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
];
