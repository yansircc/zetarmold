import { cn } from '@/lib/utils';

interface TextListItem {
  title: string;
  content: string;
}

export interface TextListProps {
  items: TextListItem[];
  className?: string;
  showNumbers?: boolean;
  containerClassName?: string;
  columns?: 1 | 2;
}

export function TextList({
  items,
  className,
  showNumbers = true,
  containerClassName,
  columns = 1,
}: TextListProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-screen-sm',
        columns === 2 && 'max-w-screen-lg',
        containerClassName,
      )}
    >
      <div
        className={cn(
          columns === 2 && 'grid grid-cols-1 gap-x-8 md:grid-cols-2',
        )}
      >
        {items.map((item, index) => (
          <div key={index} className={cn('mb-8 flex gap-4', className)}>
            {showNumbers && (
              <span className="bg-secondary text-primary flex size-6 shrink-0 items-center justify-center rounded-sm font-mono text-xs">
                {index + 1}
              </span>
            )}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
