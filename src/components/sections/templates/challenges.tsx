import { type FeatureItem } from '@/components/sections/feature-list';
import { FeatureList } from '@/components/sections/feature-list';
import { SectionWrapper } from '@/components/section-wrapper';
import { MediaBesideLayout } from '@/components/sections/media-beside';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ChallengesProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  features: FeatureItem[];
  additionalContent?: ReactNode;

  // Media configuration
  image: string;
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

export function Challenges({
  // Main content
  title,
  description,
  features,
  additionalContent,

  // Media configuration
  image,
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
}: ChallengesProps) {
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
        image={image}
        imagePosition={imagePosition}
        isSticky={isImageSticky}
        containerClassName={containerClassName}
      >
        <div className="space-y-6">
          <FeatureList features={features} columns={featureColumns} />
          {additionalContent && <div>{additionalContent}</div>}
          {children}
        </div>
      </MediaBesideLayout>
    </SectionWrapper>
  );
}
