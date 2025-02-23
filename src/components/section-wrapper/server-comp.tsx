import {
  cn,
  type BackgroundVariant,
  getBackgroundStyles,
  slugify,
} from '@/lib/utils';
import type { ClassValue } from 'clsx';
import { AnimatedHeaderContent } from './client-comp';
import { Container } from '@/components/ui/container';
import { type ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SectionWrapperProps {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;
  linkText?: string;
  headingLevel?: HeadingLevel;
  className?: ClassValue;
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  children?: React.ReactNode;
}

export function SectionWrapper({
  title,
  description,
  href,
  linkText,
  headingLevel = 'h2',
  className,
  background = 'default',
  alignment = 'left',
  children,
}: SectionWrapperProps) {
  const textColor = {
    description: cn({
      'text-muted-foreground':
        background === 'default' || background === 'gray',
      'text-white/80': background === 'accent' || background === 'inverse',
    }),
  };

  const titleId = typeof title === 'string' ? slugify(title) : undefined;

  return (
    <section
      className={cn('w-full', getBackgroundStyles(background), {
        'text-center': alignment === 'center',
      })}
    >
      <Container className={className}>
        <AnimatedHeaderContent
          title={title}
          description={description}
          href={href}
          linkText={linkText}
          headingLevel={headingLevel}
          alignment={alignment}
          textColor={textColor}
          titleId={titleId}
        />
        {children}
      </Container>
    </section>
  );
}
