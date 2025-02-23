import { ImageWithDialog } from '../sections/media-dialog';

export interface GalleryItem {
  title: string;
  description: string;
  image?: string;
  youtubeId?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  variant?: 'default' | 'grid' | 'masonry' | 'image-top';
  columns?: 1 | 2 | 3 | 4 | 5;
}

const GalleryItemComponent = ({ item }: { item: GalleryItem }) => {
  return (
    <div className="border-border flex flex-col overflow-clip rounded-xl border">
      <div className="relative">
        <ImageWithDialog image={item.image} youtubeId={item.youtubeId} />
      </div>
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
          {item.title}
        </h3>
        <p className="text-muted-foreground lg:text-lg">{item.description}</p>
      </div>
    </div>
  );
};

const GalleryImageTop = ({ items, columns = 2 }: GalleryProps) => {
  const responsiveColumns = {
    mobile: 1,
    tablet: Math.min(2, columns),
    desktop: columns,
  };

  return (
    <div
      className={`grid gap-6 sm:grid-cols-${responsiveColumns.tablet} lg:grid-cols-${responsiveColumns.desktop} lg:gap-8`}
    >
      {items.map((item) => (
        <GalleryItemComponent key={item.title} item={item} />
      ))}
    </div>
  );
};

const GalleryGrid = ({ items }: GalleryProps) => {
  return <div>{JSON.stringify(items)}</div>;
};

const GalleryMasonry = ({ items }: GalleryProps) => {
  return <div>{JSON.stringify(items)}</div>;
};

export function Gallery({
  items,
  variant = 'default',
  columns = 2,
}: GalleryProps) {
  if (variant === 'grid') {
    return <GalleryGrid items={items} />;
  }

  if (variant === 'masonry') {
    return <GalleryMasonry items={items} />;
  }

  if (variant === 'image-top') {
    return <GalleryImageTop items={items} columns={columns} />;
  }

  // Default case
  return <div>No valid variant selected.</div>;
}
