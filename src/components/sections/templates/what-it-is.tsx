import { type FeatureItem } from '@/components/sections/feature-list';
import { FeatureList } from '@/components/sections/feature-list';
import { SectionWrapper } from '@/components/section-wrapper';
import { MediaBesideLayout } from '@/components/sections/media-beside';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface WhatItIsProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  content: ReactNode;
  features: FeatureItem[];

  // Media configuration
  image?: string;
  imagePosition?: 'left' | 'right';
  isImageSticky?: boolean;

  // Feature list configuration
  featureColumns?: 1 | 2 | 3;

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // Additional content
  children?: React.ReactNode;

  // Call to action
  action?: {
    text: string;
    href: string;
  };
}

export function WhatItIs({
  // Main content
  title,
  description,
  content,
  features,

  // Media configuration
  image,
  imagePosition = 'left',
  isImageSticky = false,

  // Feature list configuration
  featureColumns = 2,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Additional content
  children,

  // Call to action
  action,
}: WhatItIsProps) {
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
      <div className="space-y-12">
        <MediaBesideLayout
          image={image}
          imagePosition={imagePosition}
          isSticky={isImageSticky}
        >
          {content}
        </MediaBesideLayout>
        <FeatureList features={features} columns={featureColumns} />
        {children}
      </div>
    </SectionWrapper>
  );
}
