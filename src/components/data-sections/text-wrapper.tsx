import { ImageWithDialog } from './image-with-dialog';
import { cn, type BackgroundVariant, getBackgroundStyles } from '@/lib/utils';

export interface TextWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  youtubeId?: string;
  children?: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  isSticky?: boolean;
  background?: BackgroundVariant;
  titleAlign?: 'left' | 'center' | 'right';
}

export function TextWrapper({
  title,
  description,
  image,
  imagePosition = 'right',
  youtubeId,
  children,
  containerClassName,
  contentClassName,
  isSticky = false,
  background = 'default',
  titleAlign = 'center',
}: TextWrapperProps) {
  return (
    <section
      className={cn(
        'w-full py-16 md:py-24',
        getBackgroundStyles(background),
        containerClassName,
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-screen-lg flex-col gap-8',
          background === 'inverse' && 'text-primary-foreground',
          contentClassName,
        )}
      >
        {(title ?? description) && (
          <div
            className={cn(
              'mx-auto flex max-w-screen-md flex-col justify-center gap-7 text-center lg:max-w-xl lg:px-16',
              titleAlign === 'left' && 'text-left',
              titleAlign === 'right' && 'text-right',
            )}
          >
            {title ? <h2 className="text-2xl md:text-4xl">{title}</h2> : null}
            {description ? (
              <p className="text-muted-foreground text-sm md:text-base">
                {description}
              </p>
            ) : null}
          </div>
        )}

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
          <>{children}</>
        )}
      </div>
    </section>
  );
}
