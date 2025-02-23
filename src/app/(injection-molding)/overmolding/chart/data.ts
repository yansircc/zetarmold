interface BondingData {
  overmoldingMaterial: string;
  ppT30s: string;
  absDg417: string;
  absPcAc2300: string;
  pcMakrolon2405: string;
  pbtHr5330: string;
  paJ2700: string;
}

export const basicInfo = {
  title: 'Overmolding Material Bonding Chart',
};

export const description = {
  text: 'You can bond overmolded materials together, but you need to make sure the materials work together to get the bond strength you want. If you really need the bond, you should definitely add a mechanical bond. An undercut is a good example of a mechanical bond.',
  legend: {
    M: 'Mechanical Bond Recommended',
    C: 'Chemical Bond Recommended',
  },
};

export const columns = [
  {
    header: 'Overmolding Material',
    accessorKey: 'overmoldingMaterial' as keyof BondingData,
  },
  {
    header: 'PP T30S',
    accessorKey: 'ppT30s' as keyof BondingData,
  },
  {
    header: 'ABS DG417',
    accessorKey: 'absDg417' as keyof BondingData,
  },
  {
    header: 'ABS/PC AC2300',
    accessorKey: 'absPcAc2300' as keyof BondingData,
  },
  {
    header: 'PC Makrolon® 2405',
    accessorKey: 'pcMakrolon2405' as keyof BondingData,
  },
  {
    header: 'PBT HR5330',
    accessorKey: 'pbtHr5330' as keyof BondingData,
  },
  {
    header: 'PA J2700',
    accessorKey: 'paJ2700' as keyof BondingData,
  },
];

export const tableData: BondingData[] = [
  {
    overmoldingMaterial: 'TPE',
    ppT30s: 'C',
    absDg417: 'M',
    absPcAc2300: 'M',
    pcMakrolon2405: 'M',
    pbtHr5330: 'M',
    paJ2700: 'M',
  },
  {
    overmoldingMaterial: 'TPR',
    ppT30s: 'C',
    absDg417: 'C',
    absPcAc2300: 'C',
    pcMakrolon2405: 'M',
    pbtHr5330: 'M',
    paJ2700: 'M',
  },
  {
    overmoldingMaterial: 'TPU',
    ppT30s: 'M',
    absDg417: 'C',
    absPcAc2300: 'C',
    pcMakrolon2405: 'C',
    pbtHr5330: 'C',
    paJ2700: 'M',
  },
  {
    overmoldingMaterial: 'TPV',
    ppT30s: 'C',
    absDg417: 'M',
    absPcAc2300: 'M',
    pcMakrolon2405: 'M',
    pbtHr5330: 'M',
    paJ2700: 'M',
  },
  {
    overmoldingMaterial: 'TPC',
    ppT30s: 'M',
    absDg417: 'C',
    absPcAc2300: 'C',
    pcMakrolon2405: 'C',
    pbtHr5330: 'C',
    paJ2700: 'C',
  },
];
