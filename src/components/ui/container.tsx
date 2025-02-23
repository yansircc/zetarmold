import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';
import type { ClassValue } from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:py-24',
        className,
      )}
    >
      {children}
    </div>
  );
}
