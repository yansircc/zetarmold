'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Steps, type Step } from '@/components/sections/steps';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface HowItWorksProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  steps: Step[];

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

export function HowItWorks({
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
}: HowItWorksProps) {
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
        <Steps steps={steps} />
        {children}
      </div>
    </SectionWrapper>
  );
}
