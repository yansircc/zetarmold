'use client';

import { CarouselLayout } from '@/components/sections/carousel';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { APPLICATIONS, SECTION_INFO } from './data';
import type { BackgroundVariant } from '../types';
import { SectionWrapper } from '@/components/section-wrapper';

interface ApplicationItem {
  taxonomy: string;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
}

export function ApplicationsCarousel({
  background = 'default',
}: {
  background?: BackgroundVariant;
}) {
  return (
    <SectionWrapper background={background}>
      <CarouselLayout<ApplicationItem>
        {...SECTION_INFO}
        items={APPLICATIONS}
        showProgress
        showControls
        renderItem={(item) => (
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
        )}
      />
      <p className="text-muted-foreground max-w-lg">
        <b>Fun Fact</b>: PVC was accidentally discovered _twice_—in 1838 and
        1872—before someone finally said, “Hey, this could be useful!” in the
        1920s. Talk about a plastic with persistence!
      </p>
    </SectionWrapper>
  );
}
