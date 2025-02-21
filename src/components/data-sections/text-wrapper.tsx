import { ImageWithDialog } from './image-with-dialog';
import { cn, type BackgroundVariant, getBackgroundStyles } from '@/lib/utils';

interface TextWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  youtubeId?: string;
  children?: React.ReactNode;
  className?: string;
  isSticky?: boolean;
  background?: BackgroundVariant;
}

export function TextWrapper({
  title,
  description,
  image,
  imagePosition = 'right',
  youtubeId,
  children,
  className,
  isSticky = false,
  background = 'default',
}: TextWrapperProps) {
  return (
    <section
      className={cn('w-full py-16', getBackgroundStyles(background), className)}
    >
      <div
        className={cn(
          'mx-auto max-w-screen-lg py-8',
          background === 'inverse' && 'text-primary-foreground',
        )}
      >
        <div className="container mx-auto flex max-w-screen-md flex-col justify-center gap-7 text-center lg:max-w-xl lg:px-16">
          {title && <h2 className="text-2xl md:text-4xl">{title}</h2>}
          {description && (
            <p className="text-muted-foreground text-sm md:text-base">
              {description}
            </p>
          )}
        </div>

        {image ? (
          <div className="mx-auto mt-8 max-w-screen-xl">
            <div
              className={cn(
                'flex flex-col items-center gap-8 md:gap-12',
                imagePosition === 'left'
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse',
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
                <ImageWithDialog
                  image={image}
                  title={title ?? ''}
                  description={description ?? ''}
                  youtubeId={youtubeId}
                />
              </div>
              <div className="w-full flex-1 space-y-6">{children}</div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-8">{children}</div>
        )}
      </div>
    </section>
  );
}
