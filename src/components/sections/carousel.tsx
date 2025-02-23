'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CarouselLayoutProps<T> {
  title?: string;
  description?: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  headerClassName?: string;
  carouselClassName?: string;
  itemClassName?: string;
  showProgress?: boolean;
  showControls?: boolean;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
}

export function CarouselLayout<T>({
  title,
  description,
  items,
  renderItem,
  headerClassName,
  carouselClassName,
  itemClassName,
  showProgress = true,
  showControls = true,
  prevButtonClassName,
  nextButtonClassName,
}: CarouselLayoutProps<T>) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on('select', updateSelection);

    return () => {
      void carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  const progressWidth = 240;
  const progressIndicatorWidth =
    items.length > 0 ? progressWidth / items.length : 0;
  const progressOffset = currentIndex * progressIndicatorWidth;

  return (
    <>
      {(title ?? description) && (
        <div className={cn('mb-6', headerClassName)}>
          <div className="flex items-start justify-between">
            <div className="max-w-lg">
              {title && (
                <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
              )}
              {description && (
                <p className="text-muted-foreground mt-4 lg:text-lg">
                  {description}
                </p>
              )}
            </div>

            {showControls && (
              <div className="ml-4 flex shrink-0 items-start gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => carouselApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className={cn('rounded-full', prevButtonClassName)}
                >
                  <ArrowLeft className="size-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => carouselApi?.scrollNext()}
                  disabled={!canScrollNext}
                  className={cn('rounded-full', nextButtonClassName)}
                >
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="relative w-full overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{ align: 'start' }}
          className={carouselClassName}
        >
          <CarouselContent className="px-4 pb-12 lg:px-10">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'min-w-[300px] basis-[80%] md:min-w-[334px] md:basis-1/3',
                  itemClassName,
                )}
              >
                {renderItem(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {showProgress && items.length > 0 && (
          <div className="absolute bottom-8 left-1/2 h-[2px] w-[240px] -translate-x-1/2 rounded bg-gray-200">
            <div
              className="h-[2px] rounded bg-black transition-transform duration-300 ease-out"
              style={{
                width: `${progressIndicatorWidth}px`,
                transform: `translateX(${progressOffset}px)`,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
