import { type Column } from '@/components/sections/data-table';

interface Equipment {
  no: number;
  brand: string;
  machineTonnage: string;
  injectionVolume: string;
  quantity: number;
  usageArea: string;
}

export const basicInfo = {
  title: '',
};

const equipments: Equipment[] = [
  {
    no: 1,
    brand: 'FengTie',
    machineTonnage: '90T',
    injectionVolume: '90g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 2,
    brand: 'FengTie',
    machineTonnage: '120T',
    injectionVolume: '200g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 3,
    brand: 'LiGuang',
    machineTonnage: '90T',
    injectionVolume: '95g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 4,
    brand: 'FANUC',
    machineTonnage: '100T',
    injectionVolume: '147g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 5,
    brand: 'SUMITOMO',
    machineTonnage: '160T',
    injectionVolume: '¢22mm:50g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 6,
    brand: 'SUMITOMO',
    machineTonnage: '250T',
    injectionVolume: '¢28mm:100g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 7,
    brand: 'Chen Hsong',
    machineTonnage: '120T',
    injectionVolume: '153g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 8,
    brand: 'Chen Hsong',
    machineTonnage: '128T',
    injectionVolume: '209g',
    quantity: 5,
    usageArea: 'Injection Workshop',
  },
  {
    no: 9,
    brand: 'Chen Hsong',
    machineTonnage: '150T',
    injectionVolume: '260g',
    quantity: 2,
    usageArea: 'Injection Workshop',
  },
  {
    no: 10,
    brand: 'Chen Hsong',
    machineTonnage: '168T',
    injectionVolume: '304g',
    quantity: 4,
    usageArea: 'Injection Workshop',
  },
  {
    no: 11,
    brand: 'Chen Hsong',
    machineTonnage: '178T',
    injectionVolume: '310g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 12,
    brand: 'Chen Hsong',
    machineTonnage: '208T',
    injectionVolume: '275g',
    quantity: 6,
    usageArea: 'Injection Workshop',
  },
  {
    no: 13,
    brand: 'YIZUMI',
    machineTonnage: '200T',
    injectionVolume: '476g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 14,
    brand: 'FANUC',
    machineTonnage: '220T',
    injectionVolume: '211g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 15,
    brand: 'YIZUMI',
    machineTonnage: '200T',
    injectionVolume: '280g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 16,
    brand: 'Chen Hsong',
    machineTonnage: '228T',
    injectionVolume: '300g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 17,
    brand: 'YIZUMI',
    machineTonnage: '250T',
    injectionVolume: '406g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 18,
    brand: 'YIZUMI',
    machineTonnage: '300T',
    injectionVolume: '406g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 19,
    brand: 'FANUC',
    machineTonnage: '300T',
    injectionVolume: '280g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 20,
    brand: 'FANUC',
    machineTonnage: '300T',
    injectionVolume: '550g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 21,
    brand: 'Chen Hsong',
    machineTonnage: '258T',
    injectionVolume: '382g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 22,
    brand: 'Chen Hsong',
    machineTonnage: '328T',
    injectionVolume: '480g',
    quantity: 2,
    usageArea: 'Injection Workshop',
  },
  {
    no: 23,
    brand: 'Chen Hsong',
    machineTonnage: '468T',
    injectionVolume: '450g',
    quantity: 2,
    usageArea: 'Injection Workshop',
  },
  {
    no: 24,
    brand: 'FUQiangXin',
    machineTonnage: '280T',
    injectionVolume: '251g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 25,
    brand: 'FUQiangXin',
    machineTonnage: '400T',
    injectionVolume: '511g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 26,
    brand: 'FUQiangXin',
    machineTonnage: '550T',
    injectionVolume: '618g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 27,
    brand: 'YIZUMI',
    machineTonnage: '400T',
    injectionVolume: '1377g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 28,
    brand: 'YIZUMI',
    machineTonnage: '650T',
    injectionVolume: '2446g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 29,
    brand: 'YIZUMI',
    machineTonnage: '800T',
    injectionVolume: '3468g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 30,
    brand: 'YIZUMI',
    machineTonnage: '1100T',
    injectionVolume: '4636g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
  {
    no: 31,
    brand: 'YIZUMI',
    machineTonnage: '1850T',
    injectionVolume: '7399g',
    quantity: 1,
    usageArea: 'Injection Workshop',
  },
];

// Define columns for the DataTable
export const columns: Column<(typeof equipments)[0]>[] = [
  {
    header: 'No',
    accessorKey: 'no',
  },
  {
    header: 'Brand',
    accessorKey: 'brand',
  },
  {
    header: 'Machine Tonnage',
    accessorKey: 'machineTonnage',
  },
  {
    header: 'Injection Volume',
    accessorKey: 'injectionVolume',
  },
  {
    header: 'Quantity',
    accessorKey: 'quantity',
  },
  {
    header: 'Usage Area',
    accessorKey: 'usageArea',
  },
];

export type { Equipment };
export { equipments };
