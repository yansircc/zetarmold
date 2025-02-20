import * as React from 'react';

import type { LucideIcon } from 'lucide-react';

import TitleTag from '@/components/title-tag';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: LucideIcon;
  iconTitle: string;
  description: React.ReactNode;
  headingLevel?: HeadingLevel;
}

const SectionHeader = ({
  className,
  title,
  icon: Icon,
  iconTitle,
  description,
  headingLevel = 'h2',
}: SectionHeaderProps) => {
  const Heading = headingLevel;

  return (
    <div
      className={cn(
        'container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8',
        className,
      )}
    >
      <TitleTag title={iconTitle} icon={Icon} />
      <Heading className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
        {title}
      </Heading>
      <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
