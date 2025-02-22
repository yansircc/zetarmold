import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import type { BackgroundVariant } from '../types';
import { basicInfo, columns, moldData } from './data';

interface CategoriesProps {
  background?: BackgroundVariant;
}

export function Categories({ background = 'default' }: CategoriesProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <DataTable columns={columns} data={moldData} />
    </TextWrapper>
  );
}
