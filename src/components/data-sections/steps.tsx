'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import { SimpleDialog } from '../simple-dialog';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Step {
  title: string;
  icon: keyof typeof LucideIcons;
  description: string;
  image: string;
  youtubeId?: string;
}

export function Steps({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    step: steps[0],
  });
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getIcon = (iconName: keyof typeof LucideIcons): LucideIcon => {
    return LucideIcons[iconName] as LucideIcon;
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestSection = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = index;
          }
        }
      });

      setActiveIndex(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-between gap-20">
      <div className="flex flex-col gap-16 md:w-1/2">
        {steps.map((step, index) => {
          const IconComponent = getIcon(step.icon);
          return (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="flex flex-col gap-4 md:h-[50vh]"
            >
              <button
                onClick={() => setDialogState({ isOpen: true, step })}
                className="bg-muted group relative block rounded-2xl border p-4 md:hidden"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  className="h-full max-h-full w-full max-w-full rounded-2xl object-cover"
                  width={500}
                  height={500}
                />
                {step.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play className="size-8" />
                    </div>
                  </div>
                )}
              </button>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                  {IconComponent && <IconComponent className="size-5" />}
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Step {index + 1}
                </span>
              </div>

              <h2 className="text-2xl font-semibold md:text-4xl">
                {step.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="sticky top-56 right-0 hidden h-fit w-full items-center justify-center md:flex">
        <Image
          src={steps[steps.length - 1].image}
          alt={steps[steps.length - 1].title}
          className="invisible h-full max-h-[550px] w-full max-w-full object-cover"
          width={500}
          height={500}
        />

        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setDialogState({ isOpen: true, step })}
            className={cn(
              'bg-muted group absolute inset-0 flex h-full items-center justify-center rounded-2xl border p-4 transition-all duration-300',
              index === activeIndex
                ? 'scale-100 opacity-100'
                : 'scale-95 opacity-0',
            )}
          >
            <Image
              src={step.image}
              alt={step.title}
              className="h-full max-h-full w-full max-w-full rounded-2xl border object-cover"
              width={500}
              height={500}
            />
            {step.youtubeId && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="size-8" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      <SimpleDialog
        isOpen={dialogState.isOpen}
        onClose={() =>
          setDialogState({ isOpen: false, step: dialogState.step })
        }
        imageUrl={dialogState.step.image}
        title={dialogState.step.title}
        description={dialogState.step.description}
        videoId={dialogState.step.youtubeId}
      />
    </div>
  );
}
