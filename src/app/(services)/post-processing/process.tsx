'use client';

import Image from 'next/image';
import { type postProcessingServices } from './data';
import DiagonalPattern from '@/components/diagonal-pattern';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Paintbrush, Layers, Zap, Sticker, Hammer, Radio } from 'lucide-react';
import { ImageDialog } from '@/components/simple-dialog';
import { useState } from 'react';

const iconMap = {
  paintbrush: Paintbrush,
  layers: Layers,
  zap: Zap,
  sticker: Sticker,
  hammer: Hammer,
  radio: Radio,
} as const;

interface ProcessTimelineProps {
  services: typeof postProcessingServices;
  imagePosition: 'left' | 'right';
}

export function ProcessTimeline({
  services,
  imagePosition,
}: ProcessTimelineProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    description: string;
    videoId?: string;
  } | null>(null);

  // Only render dialog if we have valid data
  const showDialog = selectedImage?.url && selectedImage?.title;

  return (
    <>
      <Tabs
        defaultValue={services[0].title}
        className="flex min-h-[600px] items-stretch max-lg:flex-col lg:divide-x"
      >
        <TabsList
          className={cn(
            'flex h-auto flex-1 flex-col bg-transparent p-0 max-lg:border-x lg:border-t',
            imagePosition === 'right' ? 'lg:order-first' : 'lg:order-last',
          )}
        >
          {services.map((service) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap];
            return (
              <TabsTrigger
                key={service.id}
                value={service.title}
                className="group relative border-b px-1 py-5 text-start whitespace-normal data-[state=active]:shadow-none lg:px-8"
              >
                <div className="absolute bottom-[-1px] left-0 z-10 h-[1px] w-0 bg-gradient-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <Icon className="size-4" />
                    <h3 className="text-lg tracking-[-0.36px]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mt-2.5 tracking-[-0.32px]">
                    {service.description}
                  </p>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <div
          className={cn(
            'flex-1',
            imagePosition === 'right' ? 'lg:order-last' : 'lg:order-first',
          )}
        >
          {services.map((service, index) => (
            <TabsContent
              key={index}
              value={service.title}
              className="m-0 h-full px-6 py-[38px] max-lg:border-x"
            >
              <div className="flex h-full items-center justify-center">
                <div className="relative flex h-full w-full flex-col justify-center">
                  <div className="px-6 lg:px-10">
                    <DiagonalPattern className="h-6 lg:h-10" />
                  </div>
                  <div className="relative grid flex-1 grid-cols-[auto_1fr_auto] items-stretch">
                    <DiagonalPattern className="h-full w-6 lg:w-10" />
                    <div className="relative m-3">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="cursor-pointer rounded-md object-cover shadow-md transition-transform hover:scale-[1.02] lg:rounded-xl lg:shadow-lg dark:invert"
                        onClick={() =>
                          setSelectedImage({
                            url: service.imageUrl,
                            title: service.title,
                            description: service.description,
                            videoId: service.videoId,
                          })
                        }
                      />
                    </div>
                    <DiagonalPattern className="w-6 lg:w-10" />
                  </div>
                  <div className="px-6 lg:px-10">
                    <DiagonalPattern className="h-6 lg:h-10" />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      {showDialog && (
        <ImageDialog
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          description={selectedImage.description}
          videoId={selectedImage.videoId}
        />
      )}
    </>
  );
}
