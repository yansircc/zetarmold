import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export type BackgroundVariant = 'default' | 'gray' | 'accent' | 'inverse';

export function getBackgroundStyles(variant: BackgroundVariant): string {
  switch (variant) {
    case 'gray':
      return 'bg-gray-50 dark:bg-gray-950';
    case 'accent':
      return 'bg-primary text-primary-foreground';
    case 'inverse':
      return 'bg-primary-foreground text-primary';
    default:
      return 'bg-background';
  }
}
