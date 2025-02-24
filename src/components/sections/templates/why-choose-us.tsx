import { type FeatureItem } from '@/components/sections/feature-list';
import { FeatureList } from '@/components/sections/feature-list';
import { SectionWrapper } from '@/components/section-wrapper';
import { MediaBesideLayout } from '@/components/sections/media-beside';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface WhyChooseUsProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  features: FeatureItem[];

  // Media configuration
  youtubeId?: string;
  imagePosition?: 'left' | 'right';
  isImageSticky?: boolean;

  // Feature list configuration
  featureColumns?: 1 | 2 | 3;

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;
  containerClassName?: string;

  // Call to action
  action?: {
    text: string;
    href: string;
  };

  // Additional content
  children?: React.ReactNode;
}

export function WhyChooseUs({
  // Main content
  title,
  description,
  features,

  // Media configuration
  youtubeId,
  imagePosition = 'left',
  isImageSticky = true,

  // Feature list configuration
  featureColumns = 1,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,
  containerClassName,

  // Call to action
  action,

  // Additional content
  children,
}: WhyChooseUsProps) {
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
      <MediaBesideLayout
        youtubeId={youtubeId}
        imagePosition={imagePosition}
        isSticky={isImageSticky}
        containerClassName={containerClassName}
      >
        <FeatureList features={features} columns={featureColumns} />
        {children}
      </MediaBesideLayout>
    </SectionWrapper>
  );
}
