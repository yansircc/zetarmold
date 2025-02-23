import { SectionWrapper } from '@/components/section-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import type { BackgroundVariant } from '../types';
import { basicInfo, columns, tableData } from './data';

interface ComparisonProps {
  background?: BackgroundVariant;
}

export function Comparison({ background = 'default' }: ComparisonProps) {
  return (
    <SectionWrapper
      {...basicInfo}
      background={background}
      className="max-w-screen-lg"
    >
      <DataTable columns={columns} data={tableData} />
    </SectionWrapper>
  );
}
