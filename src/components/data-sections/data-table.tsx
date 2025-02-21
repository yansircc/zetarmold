import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { type ReactNode } from 'react';

interface Column<T> {
  header: string;
  accessorKey: keyof T;
  className?: string;
  cell?: (value: T[keyof T]) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  className,
}: DataTableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={String(column.accessorKey)}
                className={column.className}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-muted/50">
              {columns.map((column) => {
                const value = row[column.accessorKey];
                return (
                  <TableCell
                    key={String(column.accessorKey)}
                    className={column.className}
                  >
                    {column.cell ? column.cell(value) : (value as ReactNode)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
