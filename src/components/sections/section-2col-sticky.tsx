import { Button } from '@/components/ui/button';
import { AnimatedHeaderContent } from '@/components/section-wrapper/client-comp';
import {
  cn,
  type BackgroundVariant,
  getBackgroundStyles,
  slugify,
} from '@/lib/utils';
import type { ClassValue } from 'clsx';
import { type ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SectionProps {
  title: string;
  description: string;
  action?: {
    text: string;
    href: string;
  };
  headingLevel?: HeadingLevel;
  alignment?: 'left' | 'center';
  background?: BackgroundVariant;
  className?: ClassValue;
  textColor?: 'default' | 'muted';
  children?: ReactNode;
}

export function Section2ColSticky({
  title,
  description,
  action,
  headingLevel = 'h2',
  alignment = 'left',
  background = 'default',
  className,
  children,
}: SectionProps) {
  const titleId = typeof title === 'string' ? slugify(title) : undefined;

  const textColor = {
    description: cn({
      'text-muted-foreground':
        background === 'default' || background === 'gray',
      'text-white/80': background === 'accent' || background === 'inverse',
    }),
  };

  return (
    <>
      <section
        className={cn('relative w-full', getBackgroundStyles(background), {
          'text-center': alignment === 'center',
        })}
      >
        <div
          className={cn(
            'relative z-10 container mx-auto flex flex-col gap-12 px-4 py-16 md:py-24',
            className,
          )}
        >
          <div className="relative grid gap-16 md:grid-cols-2">
            <div className="top-40 h-fit md:sticky">
              <AnimatedHeaderContent
                title={title}
                description={description}
                action={action}
                headingLevel={headingLevel}
                alignment={alignment}
                textColor={textColor}
                titleId={titleId}
              />
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
