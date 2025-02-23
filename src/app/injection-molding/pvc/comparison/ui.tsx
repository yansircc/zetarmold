import { SectionWrapper } from '@/components/section-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import type { BackgroundVariant } from '../types';
import { BASIC_INFO, columns, tableData } from './data';

interface ComparisonProps {
  background?: BackgroundVariant;
}

export function Comparison({ background = 'default' }: ComparisonProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <DataTable columns={columns} data={tableData} />
    </SectionWrapper>
  );
}
