// **substrate or overmolding, ****Flashing. **Here's what you can do to fix these problems.

// |                                                  |                                                                                                                |                                                                                                                                                                                |
// | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
// | Observation                                      | Potential Causes                                                                                               | Corrective Actions                                                                                                                                                             |
// | Flash (on the part's edge or over the substrate) | ① Mold doesn't fit well ② Molding machine isn't big enough ③ Shutoffs aren't designed well ④ Substrate shrinks | ① Check and Fit the Mold Again ② Increase or decrease injection and pack pressure ③ Re-cut the tool to get a complete shut-off ④ Check for substrate sinks and re-cut the tool |
// | Short Shots                                      | ① Not enough material ② Not enough injection pressure ③ Not enough fill speed ④ Melt too cold ⑤ Poor venting   | ① Increase shot size ② Increase injection pressure ③ Increase injection speed ④ Increase melt temperature ⑤ Decrease the clamp tonnage and re-cut vents                        |
// | Warped Parts                                     | ① Shrinkage after molding ② Substrate Wall thickness is too thin ③ Overmolding area is too large               | ① Make the cool time longer ② Add Substrate Wall thickness or make the ribs thicker ③ Make the overmolding area smaller                                                        |
// | Overmold Breaks                                  | ① Substrate not supported properly ② Injection pressure and melt temperature too high ③ Gate in wrong place    | ① Fully support the substrate to resist hydraulic injection pressures and melting ② Lower injection pressure and melt temperature ③ Move the gate                              |
// | Surface sink marks                               | ① Non-uniform part release from tool surface due to material shrinkage ② Gate freezes too early                | ① Increase pack pressure/hold time and decrease material temperature ② Increase gate size                                                                                      |
// | Bad sticking                                     | ① Material don't match ② Gate freeze too soon                                                                  | ① Get the right kind of material ② Increase the temperature of the molten plastic and the temperature of the mold                                                              |
// | Knit lines are bad                               | ① Gas gets trapped between the plastic ② The plastic melts at a low temperature                                | ① Make the air vents better ② Speed up the injection and increase the melt/mold temperature                                                                                    |
// | Stick femal cavity                               | ① Not enough draft angle ② Vacuum in the female cavity ③ Femal cavity too hot ④ Femal cavity too shiny         | ① Increase the draft angle ② Provide air assist release ③ Run the femal cavity cooler ④ Sandblast the cavity                                                                   |
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/data-sections/data-table';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

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

export default function Solutions() {
  return (
    <TextWrapper
      title="Overmolding Troubleshooting Guide"
      description="The most common problems you'll run into with overmolding are: Adhesion problems, Incomplete filling of the substrate or overmolding, Flashing. Here's what you can do to fix these problems."
    >
      <div className="w-full space-y-8">
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
              {index > 0 && <Separator className="mb-8" />}
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
