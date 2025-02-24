import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/sections/data-table';
import type { BackgroundVariant } from '../types';
import { basicInfo, description, columns, tableData } from './data';

interface ChartProps {
  background?: BackgroundVariant;
}

export function Chart({ background = 'default' }: ChartProps) {
  return (
    <TextWrapper title={basicInfo.title} background={background}>
      <p>{description.text}</p>
      <p>
        <b>M:</b> {description.legend.M}
        <br />
        <b>C:</b> {description.legend.C}
      </p>
      <DataTable columns={columns} data={tableData} />
    </TextWrapper>
  );
}
