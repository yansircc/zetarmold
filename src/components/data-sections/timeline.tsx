import { Button } from '@/components/ui/button';
import { ImageWithDialog } from '../sections/media-dialog';

export interface TimelineItem {
  image?: string;
  title: string;
  description: string;
  date?: string;
  icon?: React.ReactNode;
  youtubeId?: string;
}

export interface TimelineAction {
  text: string;
  url: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  description?: string;
  actions?: TimelineAction[];
  variant?: 'default' | 'sticky' | 'vertical' | 'single';
  className?: string;
  imageAspectRatio?: 'video' | 'square' | 'auto';
  layout?: 'left' | 'right' | 'center';
}

const TimelineContent = ({ item }: { item: TimelineItem }) => {
  return (
    <div className="rounded-xl border p-2">
      {item.image || item.youtubeId ? (
        <ImageWithDialog
          image={item.image}
          youtubeId={item.youtubeId}
          className="rounded-xl border"
        />
      ) : null}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          {item.date && (
            <time className="text-muted-foreground text-sm">{item.date}</time>
          )}
        </div>
        <p className="text-muted-foreground mt-2">{item.description}</p>
      </div>
    </div>
  );
};

export function Timeline({
  items,
  title,
  description,
  actions,
  variant = 'default',
}: TimelineProps) {
  const containerStyles = {
    default: 'grid gap-16 md:grid-cols-2',
    sticky: 'relative grid gap-16 md:grid-cols-2',
    vertical: 'flex flex-col gap-8',
  };

  const headerStyles = {
    default: 'md:col-span-2',
    sticky: 'top-40 h-fit md:sticky',
    vertical: 'text-center',
  };

  const contentStyles = {
    default: 'flex flex-col gap-12 md:gap-20',
    sticky: 'flex flex-col gap-12 md:gap-20',
    vertical: 'flex flex-col gap-8',
  };

  if (variant === 'single') {
    return (
      <div className="mx-auto flex max-w-screen-lg flex-col gap-8 lg:gap-12 lg:px-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
          >
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                {index !== 0 && (
                  <span className="bg-primary/70 dark:bg-primary/50 absolute -top-12 mx-auto h-12 w-[3px] shrink-0" />
                )}
                {index !== items.length - 1 && (
                  <span className="bg-primary/70 dark:bg-primary/50 absolute -bottom-12 mx-auto h-12 w-[3px] shrink-0" />
                )}
                <span
                  className={`${
                    index === 0
                      ? 'h-24'
                      : 'bg-primary/70 dark:bg-primary/50 h-24 w-[3px] shrink-0'
                  }`}
                />
                <span className="bg-muted/50 dark:bg-muted/20 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-lg">
                  {index + 1}
                </span>
                <span
                  className={`${
                    index === items.length - 1
                      ? 'h-24'
                      : 'bg-primary/70 dark:bg-primary/50 h-24 w-[3px] shrink-0'
                  }`}
                />
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm min-[960px]:text-base">
                  {item.description}
                </p>
              </div>
            </div>
            {(item.image ?? item.youtubeId) && (
              <ImageWithDialog image={item.image} youtubeId={item.youtubeId} />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={containerStyles[variant]}>
      {(title ?? description ?? actions) && (
        <div className={headerStyles[variant]}>
          {title && (
            <h2 className="mb-6 text-4xl font-semibold md:text-5xl">{title}</h2>
          )}
          {description && (
            <p className="text-muted-foreground font-medium md:text-xl">
              {description}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant ?? 'default'}
                  size="lg"
                  className="gap-2"
                  asChild
                >
                  <a href={action.url}>{action.text}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
      <div className={contentStyles[variant]}>
        {items.map((item, index) => (
          <TimelineContent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
