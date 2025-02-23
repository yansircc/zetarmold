interface MoldData {
  moldType: string;
  moldMaterial: string;
  cycleLife: string;
  productMaterial: string;
}

export const basicInfo = {
  title: 'Comparison of 4 Low Volume Injection Molds',
  description:
    "Here's an overview of the mold material,cycle life and product material of 3D printing molds, vacuum casting molds, reaction injection molds, and aluminum injection molds",
};

export const columns = [
  {
    header: 'Mold Type',
    accessorKey: 'moldType' as keyof MoldData,
  },
  {
    header: 'Mold Material',
    accessorKey: 'moldMaterial' as keyof MoldData,
  },
  {
    header: 'Cycle Life',
    accessorKey: 'cycleLife' as keyof MoldData,
  },
  {
    header: 'Product Material',
    accessorKey: 'productMaterial' as keyof MoldData,
  },
];

export const moldData: MoldData[] = [
  {
    moldType: '3D printed mold',
    moldMaterial: 'ABS, Nylon, etc.',
    cycleLife: '30~100 Shots',
    productMaterial: 'PP, PE, TPE, TPU, POM, PA',
  },
  {
    moldType: 'Vacuum Casting Mold',
    moldMaterial: 'Silicone Rubber, PU, Epoxy, etc.',
    cycleLife: '10~20 Shots',
    productMaterial: 'PU simulating ABS, PMMA, PA, POM, etc.',
  },
  {
    moldType: 'Reaction Injection Mold',
    moldMaterial: 'PU, Aluminum, Non-Hardened Steel, etc.',
    cycleLife: '500~1000 shots',
    productMaterial: 'PU, PA6, Polyester, etc.',
  },
  {
    moldType: 'Aluminum Injection Mold',
    moldMaterial: 'Aluminum',
    cycleLife: '500~1000 shots',
    productMaterial: 'PP, PE, ABS, PS, PA, TPE, etc.',
  },
];
