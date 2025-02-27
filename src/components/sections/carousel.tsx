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
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export interface CarouselItem {
  taxonomy: string;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
}

export interface CarouselLayoutProps {
  items: CarouselItem[];
  showProgress?: boolean;
  showControls?: boolean;
  carouselClassName?: string;
  itemClassName?: string;
}

export function CarouselLayout({
  items,
  showProgress = true,
  showControls = true,
  carouselClassName,
  itemClassName,
}: CarouselLayoutProps) {
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
    <div className="relative w-full overflow-hidden">
      {showControls && (
        <div className="mb-4 flex justify-end gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="rounded-full"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="rounded-full"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      )}

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
              <div className="group relative flex h-full flex-col items-start justify-start gap-4">
                <div className="w-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      width={400}
                      height={225}
                    />
                    <Image
                      src={item.hoverImage}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      width={400}
                      height={225}
                    />
                    <Badge
                      variant="outline"
                      className="absolute top-4 left-4 bg-white px-3 py-2"
                    >
                      {item.taxonomy}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
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
  );
}
