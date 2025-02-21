import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn, type BackgroundVariant, getBackgroundStyles } from '@/lib/utils';
import { type ClassValue } from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface PageWrapperProps {
  title: string;
  description: string;
  href: string;
  linkText: string;
  headingLevel?: HeadingLevel;
  className?: ClassValue;
  children: React.ReactNode;
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
}

export default function PageWrapper({
  title,
  description,
  href,
  linkText,
  headingLevel = 'h1',
  className,
  children,
  background = 'default',
  alignment = 'left',
}: PageWrapperProps) {
  const Heading = headingLevel;

  return (
    <main>
      <div
        className={cn(
          'w-full py-16 md:py-24',
          getBackgroundStyles(background),
          {
            'text-center': alignment === 'center',
          },
        )}
      >
        <div className={cn('mx-auto max-w-screen-lg', className)}>
          <div
            className={cn('lg:max-w-xl', alignment === 'center' && 'mx-auto')}
          >
            <Heading className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {title}
            </Heading>
            <p
              className={cn('mb-8 lg:text-lg', {
                'text-muted-foreground':
                  background === 'default' || background === 'gray',
                'text-white/80':
                  background === 'accent' || background === 'inverse',
              })}
            >
              {description}
            </p>
            <Link
              href={href}
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              style={{
                justifyContent:
                  alignment === 'center' ? 'center' : 'flex-start',
              }}
            >
              {linkText}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
