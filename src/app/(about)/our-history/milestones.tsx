'use client';

import { useEffect, useState } from 'react';
import { milestones } from './data';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function HistoryEvents() {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <div className="flex w-fit flex-col-reverse gap-4 md:flex-row md:gap-8 lg:gap-16">
      <div className="border-border bg-accent hidden overflow-clip rounded-lg border md:block md:w-1/2">
        <Carousel
          setApi={setCarouselApi}
          className="aspect-square h-full w-full [&>div]:h-full"
        >
          <CarouselContent className="mx-0 h-full w-full">
            {milestones.map((milestone) => (
              <CarouselItem key={milestone.id} className="px-0">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  width={400}
                  height={270}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <ul className="flex flex-row items-start gap-3 md:w-1/2 md:flex-col md:gap-4">
        {milestones.map((milestone, i) => (
          <li
            key={milestone.id}
            className="group md:data-[open]:bg-accent relative flex w-[min(24rem,80vw)] shrink-0 cursor-pointer transition md:w-full md:overflow-hidden md:rounded-lg md:px-4 md:py-6 lg:p-6"
            data-open={selection === i ? 'true' : undefined}
            onClick={() => setSelection(i)}
          >
            <milestone.icon className="mr-3 size-5 shrink-0 lg:mr-6 lg:size-6" />
            <div>
              <div className="text-accent-foreground md:text-muted-foreground md:group-hover:text-accent-foreground md:group-data-[open]:text-accent-foreground mb-3 h-5 text-sm font-semibold lg:mb-4 lg:text-lg">
                {`${milestone.year} - ${milestone.title}`}
              </div>
              <div className="text-muted-foreground text-xs md:hidden md:text-sm md:group-data-[open]:block lg:text-base">
                {milestone.event}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex w-fit gap-3 md:hidden">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className="md:aspect-w-1 md:aspect-h-1 h-[min(24rem,80vw)] w-[min(24rem,80vw)] shrink-0 md:h-auto md:w-full"
          >
            <div className="border-border bg-accent overflow-clip rounded-lg border">
              <Image
                src={milestone.image}
                alt={milestone.title}
                width={400}
                height={270}
                className="aspect-square h-full w-full"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
