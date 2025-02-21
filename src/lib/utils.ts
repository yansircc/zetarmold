import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BackgroundVariant = 'default' | 'gray' | 'inverse' | 'accent';

export function getBackgroundStyles(variant: BackgroundVariant = 'default') {
  return {
    'bg-background text-foreground': variant === 'default',
    'bg-muted-solid': variant === 'gray',
    'bg-inverse': variant === 'inverse',
    'bg-accent-solid': variant === 'accent',
  };
}
