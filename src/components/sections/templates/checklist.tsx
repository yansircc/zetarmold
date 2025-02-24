import { SectionWrapper } from '@/components/section-wrapper';
import {
  Checklist as ChecklistComponent,
  type Tip,
} from '@/components/sections/checklist';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ChecklistProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  tips: Tip[];

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

export function Checklist({
  // Main content
  title,
  description,
  tips,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: ChecklistProps) {
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
        <ChecklistComponent tips={tips} />
        {children}
      </div>
    </SectionWrapper>
  );
}
