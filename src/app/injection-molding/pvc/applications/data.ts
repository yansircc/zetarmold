interface ApplicationItem {
  taxonomy: string;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
}

export const SECTION_INFO = {
  title: 'Standards and Classifications',
  description:
    "PVC injection molding doesn't come with a rulebook as strict as some other processes, but it's typically defined by its applications and material variations",
};

export const APPLICATIONS: ApplicationItem[] = [
  {
    taxonomy: 'By Application',
    title: 'Construction',
    description: 'Pipes, fittings, vinyl siding.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Medical',
    description: 'Tubes, catheters, and more.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Automotive',
    description: 'Seals, gaskets, and more.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    taxonomy: 'By Application',
    title: 'Consumer Goods',
    description: 'Plastic toys, household items, and more.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Electrical',
    description: 'Cables, wires, and more.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    taxonomy: 'By Material',
    title: 'Industrial',
    description: 'Machinery parts, tools, and more.',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    hoverImage: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
];
