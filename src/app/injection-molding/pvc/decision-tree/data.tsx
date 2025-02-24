import { type FlowDecisionTreeProps } from '@/components/sections/flow-decision-tree';

export const BASIC_INFO = {
  title: (
    <>
      <span className="text-primary">Decision Tree</span> for Manufacturing
      Method
    </>
  ),
  linkText: 'Let Zetar Make Decisions for You',
  href: '/contact',
};

export const DECISION_TREE_DATA: FlowDecisionTreeProps['steps'] = [
  {
    question: 'Is your part complex?',
    options: [
      { text: 'Yes', result: "Injection molding's your jam" },
      { text: 'No', result: 'Extrusion might do the trick' },
    ],
  },
  {
    question: 'Need durability and chemical resistance?',
    options: [
      { text: 'Yes', result: "PVC's your guy" },
      { text: 'No', result: 'Explore other plastics' },
    ],
  },
  {
    question: 'High production volume?',
    options: [
      { text: 'Yes', result: 'Injection molding wins on cost' },
      { text: 'No', result: 'Consider simpler options' },
    ],
  },
];
