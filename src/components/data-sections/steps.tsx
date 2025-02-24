'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ImageWithDialog } from '../sections/media-dialog';

export type Step = {
  title: string;
  icon: keyof typeof LucideIcons;
  description: string;
} & (
  | {
      image: string;
      youtubeId?: undefined;
    }
  | {
      image?: string;
      youtubeId: string;
    }
);

export function Steps({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
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
              <div className="md:hidden">
                <ImageWithDialog
                  image={step.image}
                  youtubeId={step.youtubeId}
                  className="bg-muted overflow-hidden rounded-2xl border"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                  {IconComponent && <IconComponent className="size-5" />}
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-semibold md:text-4xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="sticky top-56 right-0 hidden h-fit w-full items-center justify-center md:flex">
        <div className="relative h-0 w-full pb-[56.25%]">
          {steps.map((step, index) => (
            <ImageWithDialog
              key={index}
              image={step.image}
              youtubeId={step.youtubeId}
              className={cn(
                'bg-muted absolute inset-0 overflow-hidden rounded-2xl border transition-all duration-300',
                index === activeIndex
                  ? 'pointer-events-auto scale-100 opacity-100'
                  : 'pointer-events-none scale-95 opacity-0',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
