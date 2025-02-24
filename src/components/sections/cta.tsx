import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  buttons?: {
    primary?: {
      icon?: LucideIcon;
      text: string;
      url: string;
    };
    secondary?: {
      icon?: LucideIcon;
      text: string;
      url: string;
    };
  };
  className?: string;
}

export default function CallToAction({
  title,
  description,
  buttons = {
    primary: {
      text: 'Get Started',
      url: '/contact',
    },
    secondary: {
      text: 'Learn More',
      url: '/contact',
    },
  },
  className,
}: CallToActionProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16',
        className,
      )}
    >
      <div className="flex-1">
        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
          {title}
        </h3>
        <p className="text-muted-foreground lg:text-lg">{description}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        {buttons.secondary && (
          <Button variant="outline" asChild>
            <Link href={buttons.secondary.url}>
              {buttons.secondary.icon && (
                <buttons.secondary.icon className="mr-2" />
              )}
              {buttons.secondary.text}
            </Link>
          </Button>
        )}
        {buttons.primary && (
          <Button asChild>
            <Link href={buttons.primary.url}>
              {buttons.primary.icon && (
                <buttons.primary.icon className="mr-2" />
              )}
              {buttons.primary.text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
