import { SectionWrapper } from '@/components/section-wrapper';
import {
  FlowDecisionTree,
  type FlowDecisionTreeProps,
} from '@/components/sections/flow-decision-tree';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface DecisionTreeProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  steps: FlowDecisionTreeProps['steps'];

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

export function DecisionTree({
  // Main content
  title,
  description,
  steps,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: DecisionTreeProps) {
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
      <div className="space-y-6">
        <FlowDecisionTree steps={steps} />
        {children}
      </div>
    </SectionWrapper>
  );
}
