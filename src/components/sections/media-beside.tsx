import { ImageWithDialog } from './media-dialog';
import { cn, type BackgroundVariant } from '@/lib/utils';

interface MediaBesideLayoutProps {
  image?: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
  background?: BackgroundVariant;
  containerClassName?: string;
  isSticky?: boolean;
  youtubeId?: string;
}

export function MediaBesideLayout({
  image,
  imagePosition = 'right',
  children,
  background = 'default',
  containerClassName,
  isSticky = false,
  youtubeId,
}: MediaBesideLayoutProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col gap-8 text-left',
        background === 'inverse' && 'text-primary-foreground',
        containerClassName,
      )}
    >
      {image || youtubeId ? (
        <div
          className={cn(
            'flex flex-col items-center gap-8 md:gap-12',
            imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse',
            isSticky ? 'md:items-start' : 'md:items-center',
          )}
        >
          <div
            className={cn(
              'w-full flex-1',
              isSticky &&
                imagePosition === 'left' &&
                'md:sticky md:top-20 md:h-fit',
            )}
          >
            <ImageWithDialog image={image} youtubeId={youtubeId} />
          </div>
          <div className="w-full flex-1 space-y-6">{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
