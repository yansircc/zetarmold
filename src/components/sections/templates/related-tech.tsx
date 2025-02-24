import { SectionWrapper } from '@/components/section-wrapper';
import { TextList } from '@/components/sections/text-list';
import { MediaBesideLayout } from '@/components/sections/media-beside';
import type { TextListProps } from '@/components/sections/text-list';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface RelatedTechProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  items: TextListProps['items'];
  image: string;

  // Layout configuration
  imagePosition?: 'left' | 'right';

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // Call to action
  action?: {
    text: string;
    href: string;
  };

  // Additional content
  children?: React.ReactNode;
}

export function RelatedTech({
  // Main content
  title,
  description,
  items,
  image,

  // Layout configuration
  imagePosition = 'right',

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: RelatedTechProps) {
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
      <div className="space-y-6">
        <MediaBesideLayout image={image} imagePosition={imagePosition}>
          <TextList items={items} />
        </MediaBesideLayout>
        {children}
      </div>
    </SectionWrapper>
  );
}
