import { SectionWrapper } from '@/components/section-wrapper';
import { Gallery, type GalleryItem } from '@/components/sections/gallery';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface MaterialConsiderProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  items: GalleryItem[];

  // Gallery configuration
  galleryVariant?: 'default' | 'grid' | 'masonry' | 'image-top';
  galleryColumns?: 1 | 2 | 3 | 4 | 5;

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

export function MaterialConsider({
  // Main content
  title,
  description,
  items,

  // Gallery configuration
  galleryVariant = 'default',
  galleryColumns = 2,

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: MaterialConsiderProps) {
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
        <Gallery
          items={items}
          variant={galleryVariant}
          columns={galleryColumns}
        />
        {children}
      </div>
    </SectionWrapper>
  );
}
