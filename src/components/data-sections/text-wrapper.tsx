import { ImageWithDialog } from './image-with-dialog';
import { cn } from '@/lib/utils';

interface TextWrapperProps {
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  youtubeId?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TextWrapper({
  title,
  description,
  image,
  imagePosition = 'right',
  youtubeId,
  children,
  className,
}: TextWrapperProps) {
  return (
    <section className={cn('mx-auto max-w-screen-lg py-8', className)}>
      <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-7 text-center lg:max-w-xl">
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
              imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
          >
            <div className="w-full flex-1">
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
    </section>
  );
}
