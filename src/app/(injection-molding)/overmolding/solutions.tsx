import { Badge } from '@/components/ui/badge';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { BackgroundVariant } from './types';
interface Solution {
  observation: string;
  causes: string[];
  actions: string[];
}

interface CauseActionPair {
  cause: string;
  action: string;
}

const solutionsData: Solution[] = [
  {
    observation: "Flash (on the part's edge or over the substrate)",
    causes: [
      "Mold doesn't fit well",
      "Molding machine isn't big enough",
      "Shutoffs aren't designed well",
      'Substrate shrinks',
    ],
    actions: [
      'Check and Fit the Mold Again',
      'Increase or decrease injection and pack pressure',
      'Re-cut the tool to get a complete shut-off',
      'Check for substrate sinks and re-cut the tool',
    ],
  },
  {
    observation: 'Short Shots',
    causes: [
      'Not enough material',
      'Not enough injection pressure',
      'Not enough fill speed',
      'Melt too cold',
      'Poor venting',
    ],
    actions: [
      'Increase shot size',
      'Increase injection pressure',
      'Increase injection speed',
      'Increase melt temperature',
      'Decrease the clamp tonnage and re-cut vents',
    ],
  },
  {
    observation: 'Warped Parts',
    causes: [
      'Shrinkage after molding',
      'Substrate Wall thickness is too thin',
      'Overmolding area is too large',
    ],
    actions: [
      'Make the cool time longer',
      'Add Substrate Wall thickness or make the ribs thicker',
      'Make the overmolding area smaller',
    ],
  },
  {
    observation: 'Overmold Breaks',
    causes: [
      'Substrate not supported properly',
      'Injection pressure and melt temperature too high',
      'Gate in wrong place',
    ],
    actions: [
      'Fully support the substrate to resist hydraulic injection pressures and melting',
      'Lower injection pressure and melt temperature',
      'Move the gate',
    ],
  },
  {
    observation: 'Surface sink marks',
    causes: [
      'Non-uniform part release from tool surface due to material shrinkage',
      'Gate freezes too early',
    ],
    actions: [
      'Increase pack pressure/hold time and decrease material temperature',
      'Increase gate size',
    ],
  },
];

interface SolutionsProps {
  background?: BackgroundVariant;
}

export default function Solutions({ background = 'default' }: SolutionsProps) {
  return (
    <TextWrapper
      title="Overmolding Troubleshooting Guide"
      description="The most common problems you'll run into with overmolding are: Adhesion problems, Incomplete filling of the substrate or overmolding, Flashing. Here's what you can do to fix these problems."
      background={background}
    >
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
