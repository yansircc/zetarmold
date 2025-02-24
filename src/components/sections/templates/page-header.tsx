import { SectionWrapper } from '@/components/section-wrapper';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;

  // Visual styling
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // SEO and accessibility
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  // Additional content
  children?: React.ReactNode;

  // Call to action
  action?: {
    text: string;
    href: string;
  };
}

export function PageHeader({
  // Destructure with defaults
  title,
  description,
  action,
  background = 'default',
  alignment = 'left',
  showGridBackground = true,
  className,
  headingLevel = 'h1',
  children,
}: PageHeaderProps) {
  return (
    <SectionWrapper
      title={title}
      description={description}
      action={action}
      background={background}
      alignment={alignment}
      showGridBackground={showGridBackground}
      className={className}
      headingLevel={headingLevel}
    >
      {children}
    </SectionWrapper>
  );
}
