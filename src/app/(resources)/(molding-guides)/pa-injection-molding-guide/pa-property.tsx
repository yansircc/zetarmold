import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import { type BackgroundVariant } from './types';
interface PAPropertyProps {
  background?: BackgroundVariant;
}
export default function PAProperty({
  background = 'default',
}: PAPropertyProps) {
  return (
    <TextWrapper
      title="PA Material Properties Comparison"
      description="Different types of PA materials have varying properties that make them suitable for specific applications. Here's a detailed comparison of their key properties:"
      background={background}
    >
      <DataTable
        columns={[
          {
            header: 'Material',
            accessorKey: 'material',
          },
          {
            header: 'Melting Point (℃)',
            accessorKey: 'meltingPoint',
          },
          {
            header: 'Tensile Strength (MPa)',
            accessorKey: 'tensileStrength',
          },
          {
            header: 'Impact Strength (kJ/㎡)',
            accessorKey: 'impactStrength',
          },
          {
            header: 'Moisture Absorption (%)',
            accessorKey: 'moistureAbsorption',
          },
          {
            header: 'Molding Shrinkage (%)',
            accessorKey: 'moldingShrinkage',
          },
          {
            header: 'Flowability',
            accessorKey: 'flowability',
          },
          {
            header: 'Recommended Injection Temperature (℃)',
            accessorKey: 'injectionTemp',
          },
          {
            header: 'Injection Pressure (MPa)',
            accessorKey: 'injectionPressure',
          },
        ]}
        data={[
          {
            material: 'PA 6',
            meltingPoint: '~223',
            tensileStrength: '80-90',
            impactStrength: '5-10',
            moistureAbsorption: '2-3%',
            moldingShrinkage: '0.4-0.8%',
            flowability: 'Medium',
            injectionTemp: '240-270',
            injectionPressure: '70-130',
          },
          {
            material: 'PA 66',
            meltingPoint: '~255',
            tensileStrength: '90-100',
            impactStrength: '5-7',
            moistureAbsorption: '1-2%',
            moldingShrinkage: '0.3-0.6%',
            flowability: 'Medium-High',
            injectionTemp: '270-300',
            injectionPressure: '80-150',
          },
          {
            material: 'PA 12',
            meltingPoint: '~178',
            tensileStrength: '50-70',
            impactStrength: '7-10',
            moistureAbsorption: '0.1-0.3%',
            moldingShrinkage: '0.2-0.5%',
            flowability: 'High',
            injectionTemp: '230-260',
            injectionPressure: '60-120',
          },
          {
            material: 'PA 11',
            meltingPoint: '~185',
            tensileStrength: '70-90',
            impactStrength: '10-15',
            moistureAbsorption: '0.2-0.5%',
            moldingShrinkage: '0.3-0.6%',
            flowability: 'Medium',
            injectionTemp: '240-270',
            injectionPressure: '70-130',
          },
          {
            material: 'PA 46',
            meltingPoint: '~310',
            tensileStrength: '120-140',
            impactStrength: '4-6',
            moistureAbsorption: '0.1-0.3%',
            moldingShrinkage: '0.3-0.6%',
            flowability: 'Low',
            injectionTemp: '290-320',
            injectionPressure: '90-160',
          },
          {
            material: 'PA 610',
            meltingPoint: '~215',
            tensileStrength: '80-90',
            impactStrength: '6-9',
            moistureAbsorption: '0.3-0.6%',
            moldingShrinkage: '0.4-0.8%',
            flowability: 'Medium',
            injectionTemp: '240-270',
            injectionPressure: '70-130',
          },
          {
            material: 'PA 612',
            meltingPoint: '~230',
            tensileStrength: '90-100',
            impactStrength: '8-12',
            moistureAbsorption: '0.2-0.4%',
            moldingShrinkage: '0.3-0.7%',
            flowability: 'Medium-High',
            injectionTemp: '250-280',
            injectionPressure: '80-140',
          },
          {
            material: 'PPA',
            meltingPoint: '~310-350',
            tensileStrength: '140-180',
            impactStrength: '6-8',
            moistureAbsorption: '0.1-0.3%',
            moldingShrinkage: '0.1-0.3%',
            flowability: 'Low',
            injectionTemp: '300-330',
            injectionPressure: '100-180',
          },
          {
            material: 'PAI',
            meltingPoint: '~350-400',
            tensileStrength: '150-200',
            impactStrength: '10-15',
            moistureAbsorption: '0.1-0.3%',
            moldingShrinkage: '0.1-0.3%',
            flowability: 'Low',
            injectionTemp: '320-350',
            injectionPressure: '120-200',
          },
        ]}
      />
    </TextWrapper>
  );
}
