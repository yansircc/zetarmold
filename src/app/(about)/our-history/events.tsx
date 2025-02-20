'use client';

import { events, type Event } from './data';
import Image from 'next/image';
import { SimpleDialog } from '@/components/simple-dialog';
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function HistoryEvents() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="container">
      <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-7 md:text-center">
        <h2 className="text-2xl md:text-4xl">Our Workflow Process</h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Follow our systematic approach to mold design and manufacturing,
          ensuring quality and efficiency at every step.
        </p>
      </div>
      <div className="mx-auto mt-14 flex max-w-screen-lg flex-col gap-8 lg:gap-12 lg:px-16">
        {events.map((event, index) => (
          <div
            key={event.year}
            className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
          >
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                {index !== 0 && (
                  <span className="bg-primary/70 dark:bg-primary/50 absolute -top-12 mx-auto h-12 w-[3px] shrink-0" />
                )}
                {index !== events.length - 1 && (
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
                    index === events.length - 1
                      ? 'h-24'
                      : 'bg-primary/70 dark:bg-primary/50 h-24 w-[3px] shrink-0'
                  }`}
                />
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">{event.year}</h3>
                <p className="text-muted-foreground text-sm min-[960px]:text-base">
                  {event.event}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setSelectedEvent({
                  id: event.id,
                  year: event.year,
                  image: event.image,
                  event: event.event,
                  description: event.description,
                  youtubeId: event.youtubeId,
                })
              }
              className="group relative"
            >
              <Image
                src={event.image}
                alt={event.event}
                width={400}
                height={270}
                className="z-10 max-h-56 w-full rounded-xl border object-cover transition-transform group-hover:scale-[1.02] min-[960px]:aspect-video min-[960px]:w-auto"
              />
              {event.youtubeId && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="size-8" />
                  </div>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <SimpleDialog
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          imageUrl={selectedEvent.image}
          title={selectedEvent.event}
          description={selectedEvent.description}
          videoId={selectedEvent.youtubeId}
        />
      )}
    </div>
  );
}
