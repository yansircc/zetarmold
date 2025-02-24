import { SectionWrapper } from '@/components/section-wrapper';
import { DataTable, type Column } from '@/components/sections/data-table';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

export type ComparisonData = Record<string, string>;

interface ComparisonProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  data: ComparisonData[];
  columns: Column<ComparisonData>[];

  // Table customization
  tableClassName?: string;

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // Call to action
  action?: {
    text: string;
    href: string;
  };

  // Additional content
  children?: React.ReactNode;
}

export function Comparison({
  // Main content
  title,
  description,
  data,
  columns,

  // Table customization
  tableClassName,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: ComparisonProps) {
  return (
    <SectionWrapper
      title={title}
      description={description}
      action={action}
      background={background}
      alignment={alignment}
      showGridBackground={showGridBackground}
      className={className}
    >
      <DataTable data={data} columns={columns} className={tableClassName} />
      {children}
    </SectionWrapper>
  );
}
