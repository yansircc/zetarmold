import { Badge } from '@/components/ui/badge';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/sections/data-table';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { BackgroundVariant } from '../types';
import { solutionsData, basicInfo, type CauseActionPair } from './data';

interface SolutionsProps {
  background?: BackgroundVariant;
}

export function Solutions({ background = 'default' }: SolutionsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <div className="w-full space-y-12">
        {solutionsData.map((solution, index) => {
          const causeActionPairs: CauseActionPair[] = solution.causes.map(
            (cause, i) => ({
              cause,
              action: solution.actions[i] || '',
            }),
          );

          const columns = [
            {
              header: 'Potential Causes',
              accessorKey: 'cause' as const,
              className: 'w-1/2 min-w-[200px]',
              cell: (value: string) => (
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <span>{value}</span>
                </div>
              ),
            },
            {
              header: 'Corrective Actions',
              accessorKey: 'action' as const,
              className: 'w-1/2 min-w-[200px]',
              cell: (value: string) => (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>{value}</span>
                </div>
              ),
            },
          ];

          return (
            <div key={index} className="w-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    {solution.observation}
                  </h3>
                  <Badge variant="secondary">
                    {solution.causes.length} causes
                  </Badge>
                </div>
                <DataTable
                  data={causeActionPairs}
                  columns={columns}
                  className="w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </TextWrapper>
  );
}
