'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { type DropdownItem } from '@/constants/nav-link';

export interface ResourceMenuProps {
  resourceItems: DropdownItem[];
}

export function ResourceMenu({ resourceItems }: ResourceMenuProps) {
  return (
    <div className="w-[600px] p-6">
      <div className="grid grid-cols-2 gap-6">
        {resourceItems.map((resourceItem, resourceIndex) => (
          <div key={resourceIndex} className="space-y-3">
            <NavigationMenuLink asChild>
              <Link
                href={resourceItem.href}
                className="hover:bg-muted/50 group flex items-start gap-3 rounded-md p-3 transition-colors"
              >
                {resourceItem.icon && (
                  <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors">
                    <resourceItem.icon className="group-hover:text-primary h-5 w-5 transition-colors" />
                  </div>
                )}
                <div>
                  <div className="group-hover:text-primary text-sm font-medium transition-colors">
                    {resourceItem.title}
                  </div>
                  {resourceItem.description && (
                    <p className="text-muted-foreground mt-1 text-xs">
                      {resourceItem.description}
                    </p>
                  )}
                </div>
              </Link>
            </NavigationMenuLink>

            {resourceItem.dropdownItems &&
              resourceItem.dropdownItems.length > 0 && (
                <div className="mt-2 space-y-2 border-l pl-4">
                  {resourceItem.dropdownItems.map((subItem, subIndex) => (
                    <NavigationMenuLink key={subIndex} asChild>
                      <Link
                        href={subItem.href}
                        className="hover:text-primary hover:bg-muted/50 block rounded-md px-2 py-1 text-xs transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
