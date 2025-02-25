import { ImageWithDialog } from './media-dialog';

export interface GalleryItem {
  title: string;
  description: string;
  image?: string;
  youtubeId?: string;
  background?: 'gray' | 'white';
}

export interface GalleryProps {
  items: GalleryItem[];
  variant?: 'default' | 'grid' | 'masonry' | 'image-top';
  columns?: 1 | 2 | 3 | 4 | 5;
  background?: 'gray' | 'white';
}

const GalleryItemComponent = ({
  item,
  background,
}: {
  item: GalleryItem;
  background: 'gray' | 'white';
}) => {
  return (
    <div
      className={`border-border flex flex-col overflow-clip rounded-xl border ${background === 'gray' ? 'bg-gray-100' : 'bg-white'}`}
    >
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

const GalleryImageTop = ({
  items,
  columns = 2,
  background = 'white',
}: GalleryProps) => {
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
        <GalleryItemComponent
          key={item.title}
          item={item}
          background={background}
        />
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
  background = 'white',
}: GalleryProps) {
  if (variant === 'grid') {
    return <GalleryGrid items={items} />;
  }

  if (variant === 'masonry') {
    return <GalleryMasonry items={items} />;
  }

  if (variant === 'image-top') {
    return (
      <GalleryImageTop
        items={items}
        columns={columns}
        background={background}
      />
    );
  }

  // Default case
  return <GalleryImageTop items={items} columns={columns} />;
}
