import { type Column } from '@/components/data-sections/data-table';
import type { BasicInfo } from '../types';

interface Equipment {
  no: number;
  equipmentType: string;
  brand: string;
  model: string;
  quantity: number;
  usageArea: string;
}

export const basicInfo: BasicInfo = {
  title: '',
};

const equipments: Equipment[] = [
  {
    no: 1,
    equipmentType: 'Milling Machine',
    brand: 'Fengbao',
    model: 'FTM-4TA',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 2,
    equipmentType: 'Milling Machine',
    brand: 'Qiao Jin',
    model: '4SA',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 3,
    equipmentType: 'Milling Machine',
    brand: 'Jieyongda',
    model: 'JOINT-4VA',
    quantity: 2,
    usageArea: 'Mold Workshop',
  },
  {
    no: 4,
    equipmentType: 'Large Grinder',
    brand: 'Rongde',
    model: 'KGS-84AHK',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 5,
    equipmentType: 'Small Grinder',
    brand: 'Yintai',
    model: '450',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 6,
    equipmentType: 'Small Grinder',
    brand: 'Rongde',
    model: 'KGS-618M',
    quantity: 2,
    usageArea: 'Mold Workshop',
  },
  {
    no: 7,
    equipmentType: 'Precision Grinder',
    brand: 'Yuqing',
    model: 'LSG-52AS',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 8,
    equipmentType: 'Drilling Machine',
    brand: 'Hongchang',
    model: 'HC-900DS',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 9,
    equipmentType: 'Lathe',
    brand: 'Yunji',
    model: 'G6132*1000',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 10,
    equipmentType: 'Precision Engraver',
    brand: 'Jiatie',
    model: 'JTGK-500',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 11,
    equipmentType: 'Precision Engraver',
    brand: 'Jiatie',
    model: 'JTGK-750',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 12,
    equipmentType: 'Machining Center',
    brand: 'Shangfeng',
    model: 'SF-850',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 13,
    equipmentType: 'Machining Center',
    brand: 'Xinyan',
    model: 'XY1580',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 14,
    equipmentType: 'Machining Center',
    brand: 'Makino',
    model: 'MAKINOF5',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 15,
    equipmentType: 'EDM Machine',
    brand: 'Dimeng',
    model: 'F2-50',
    quantity: 2,
    usageArea: 'Mold Workshop',
  },
  {
    no: 16,
    equipmentType: 'EDM Machine',
    brand: 'Pules',
    model: 'AP50',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 17,
    equipmentType: 'Punching Machine',
    brand: 'Changkai',
    model: 'CK340',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 18,
    equipmentType: 'Wire Cut EDM',
    brand: 'Ruijun',
    model: 'FR500G',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 19,
    equipmentType: 'Wire Cut EDM',
    brand: 'Ruijun',
    model: 'FR700S',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 20,
    equipmentType: 'Slow Wire Cut EDM',
    brand: 'Sodick',
    model: 'AQ400LS',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 21,
    equipmentType: 'EDM Machine',
    brand: 'Makino',
    model: 'EDGE3I',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 22,
    equipmentType: 'EDM Machine',
    brand: 'Makino',
    model: 'EDNC65',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
  {
    no: 23,
    equipmentType: 'Precision Engraver',
    brand: 'Beijing Jingdiao',
    model: '400TE',
    quantity: 1,
    usageArea: 'Mold Workshop',
  },
];

// Define columns for the DataTable
export const columns: Column<(typeof equipments)[0]>[] = [
  {
    header: 'No',
    accessorKey: 'no',
  },
  {
    header: 'Equipment Type',
    accessorKey: 'equipmentType',
  },
  {
    header: 'Brand',
    accessorKey: 'brand',
  },
  {
    header: 'Model',
    accessorKey: 'model',
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
