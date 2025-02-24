import { DataTable } from '@/components/sections/data-table';
import { equipments, type Equipment, columns, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface EquipmentTableProps {
  background?: BackgroundVariant;
}

export function EquipmentTable({
  background = 'default',
}: EquipmentTableProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <DataTable<Equipment>
        data={equipments}
        columns={columns}
        className="rounded-lg border"
      />
    </TextWrapper>
  );
}
