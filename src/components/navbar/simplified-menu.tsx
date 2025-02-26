'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { type DropdownItem } from '@/constants/nav-link';

export interface SimplifiedMenuProps {
  items: DropdownItem[];
  className?: string;
}

export function SimplifiedMenu({ items, className }: SimplifiedMenuProps) {
  return (
    <div className={cn('w-[400px] p-4', className)}>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:bg-muted/50 flex items-start gap-3 rounded-md p-3 transition-colors"
          >
            {item.icon && (
              <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <item.icon className="h-5 w-5" />
              </div>
            )}
            <div>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
              {item.description && (
                <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
