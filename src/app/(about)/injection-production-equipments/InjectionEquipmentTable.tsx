import { type InjectionProductionEquipment } from './data';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  equipments: InjectionProductionEquipment[];
}

export function InjectionEquipmentTable({ equipments }: Props) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>List of Injection Production Equipment</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] text-center">No.</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-center">Machine Tonnage</TableHead>
            <TableHead className="text-center">Injection Volume</TableHead>
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
              <TableCell className="font-medium">{equipment.brand}</TableCell>
              <TableCell className="text-center">
                {equipment.machineTonnage}
              </TableCell>
              <TableCell className="text-center">
                {equipment.injectionVolume}
              </TableCell>
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
