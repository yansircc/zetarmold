'use client';

import { CarouselLayout } from '@/components/sections/carousel';
import type { CarouselItem } from '@/components/sections/carousel';
import { SectionWrapper } from '@/components/section-wrapper';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ApplicationsCarouselProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  items: CarouselItem[];

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // Carousel options
  showProgress?: boolean;
  showControls?: boolean;
  carouselClassName?: string;
  itemClassName?: string;

  // Additional content
  children?: React.ReactNode;

  // Call to action
  action?: {
    text: string;
    href: string;
  };
}

export function ApplicationsCarousel({
  // Main content
  title,
  description,
  items,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Carousel options
  showProgress = true,
  showControls = true,
  carouselClassName,
  itemClassName,

  // Additional content
  children,

  // Call to action
  action,
}: ApplicationsCarouselProps) {
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
      <CarouselLayout
        items={items}
        showProgress={showProgress}
        showControls={showControls}
        carouselClassName={carouselClassName}
        itemClassName={itemClassName}
      />
      {children}
    </SectionWrapper>
  );
}
