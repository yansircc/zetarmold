import {
  cn,
  type BackgroundVariant,
  getBackgroundStyles,
  slugify,
} from '@/lib/utils';
import type { ClassValue } from 'clsx';
import { AnimatedHeaderContent } from './client-comp';
import { type ReactNode } from 'react';
import Image from 'next/image';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SectionWrapperProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: {
    text: string;
    href: string;
  };
  headingLevel?: HeadingLevel;
  className?: ClassValue;
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  children?: React.ReactNode;
}

export function SectionWrapper({
  title,
  description,
  action,
  headingLevel = 'h2',
  className,
  background = 'default',
  alignment = 'left',
  showGridBackground,
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
      className={cn('relative w-full', getBackgroundStyles(background), {
        'text-center': alignment === 'center',
      })}
    >
      {showGridBackground && (
        <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full">
            <Image
              src="/images/grid-bg.svg"
              alt=""
              className="object-cover [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
      <div
        className={cn(
          'relative z-10 container mx-auto flex flex-col gap-12 px-4 py-16 md:py-24',
          className,
        )}
      >
        <AnimatedHeaderContent
          title={title}
          description={description}
          action={action}
          headingLevel={headingLevel}
          alignment={alignment}
          textColor={textColor}
          titleId={titleId}
        />
        {children}
      </div>
    </section>
  );
}
