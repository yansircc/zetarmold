interface ComparisonData {
  method: string;
  costPerPart: string;
  initialInvestment: string;
  speed: string;
  precision: string;
  materialOptions: string;
  complexity: string;
}

export const basicInfo = {
  title: 'Injection Molding Method Comparison',
  description:
    'Compare different injection molding methods to find the best fit for your project. Consider factors like cost, speed, and material options.',
};

export const columns = [
  {
    header: 'Method',
    accessorKey: 'method' as keyof ComparisonData,
  },
  {
    header: 'Cost per Part',
    accessorKey: 'costPerPart' as keyof ComparisonData,
  },
  {
    header: 'Initial Investment',
    accessorKey: 'initialInvestment' as keyof ComparisonData,
  },
  {
    header: 'Speed',
    accessorKey: 'speed' as keyof ComparisonData,
  },
  {
    header: 'Precision',
    accessorKey: 'precision' as keyof ComparisonData,
  },
  {
    header: 'Material Options',
    accessorKey: 'materialOptions' as keyof ComparisonData,
  },
  {
    header: 'Complexity',
    accessorKey: 'complexity' as keyof ComparisonData,
  },
];

export const tableData: ComparisonData[] = [
  {
    method: 'PVC Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'Limited to PVC',
    complexity: 'High',
  },
  {
    method: 'ABS Injection Molding',
    costPerPart: 'Medium',
    initialInvestment: 'High',
    speed: 'Fast',
    precision: 'High',
    materialOptions: 'ABS',
    complexity: 'High',
  },
  {
    method: 'Extrusion',
    costPerPart: 'Low',
    initialInvestment: 'Medium',
    speed: 'Moderate',
    precision: 'Medium',
    materialOptions: 'Various',
    complexity: 'Low',
  },
  {
    method: 'Blow Molding',
    costPerPart: 'Low-Medium',
    initialInvestment: 'Medium',
    speed: 'Fast',
    precision: 'Medium',
    materialOptions: 'Various',
    complexity: 'Medium',
  },
];
