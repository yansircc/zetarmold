import type { MoldWorkshopEquipment } from './data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  equipments: MoldWorkshopEquipment[];
}

export function MoldWorkshopEquipmentTable({ equipments }: Props) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] text-center">No.</TableHead>
            <TableHead>Equipment Type</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead>Usage Area</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {equipments.map((equipment) => (
            <TableRow key={equipment.no} className="hover:bg-muted/50">
              <TableCell className="text-center font-medium">
                {equipment.no}
              </TableCell>
              <TableCell className="font-medium">
                {equipment.equipmentType}
              </TableCell>
              <TableCell>{equipment.brand}</TableCell>
              <TableCell>{equipment.model}</TableCell>
              <TableCell className="text-center">
                {equipment.quantity}
              </TableCell>
              <TableCell>{equipment.usageArea}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
