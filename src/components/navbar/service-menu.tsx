'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { type DropdownItem } from '@/constants/nav-link';
import { type ServiceMenuItemProps } from './types';
import { ArrowRight, ChevronDown, ChevronRight, Info } from 'lucide-react';

export interface ServiceMenuProps {
  serviceItems: DropdownItem[];
  activeService: string | null;
  setActiveService: (title: string) => void;
}

export function ServiceMenuItem({
  serviceItem,
  isActive,
  onMouseEnter,
}: ServiceMenuItemProps) {
  return (
    <li>
      <button
        className={cn(
          'w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',
          isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted',
        )}
        onMouseEnter={onMouseEnter}
      >
        <div className="flex items-center gap-2">
          {serviceItem.icon && <serviceItem.icon className="h-4 w-4" />}
          <span>{serviceItem.title}</span>
        </div>
      </button>
    </li>
  );
}

export function ServiceMenu({
  serviceItems,
  activeService,
  setActiveService,
}: ServiceMenuProps) {
  // Get the current active service item
  const activeServiceItem = serviceItems.find(
    (item) => item.title === activeService,
  );

  // Check if the active service item has dropdown items
  const hasDropdownItems =
    activeServiceItem?.dropdownItems &&
    activeServiceItem.dropdownItems.length > 0;

  // Check if the dropdown items are few (≤6)
  const hasFewDropdownItems =
    activeServiceItem?.dropdownItems &&
    activeServiceItem.dropdownItems.length <= 6;

  // State to track which deep menu items are expanded
  const [expandedItems, setExpandedItems] = React.useState<
    Record<string, boolean>
  >({});

  // Toggle expanded state for a specific item
  const toggleExpanded = (itemTitle: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemTitle]: !prev[itemTitle],
    }));
  };

  // Check if an item has many children (for deep menus like 3D Printing)
  const hasDeepMenu = (item: DropdownItem): boolean => {
    return item.dropdownItems !== undefined && item.dropdownItems.length > 4;
  };

  return (
    <div className="flex w-[800px] p-4">
      {/* Left sidebar with service categories */}
      <div className="w-[250px] border-r pr-4">
        <h3 className="mb-3 text-sm font-medium">Service Categories</h3>
        <ul className="space-y-1">
          {serviceItems.map((serviceItem, serviceIndex) => (
            <ServiceMenuItem
              key={serviceIndex}
              serviceItem={serviceItem}
              isActive={activeService === serviceItem.title}
              onMouseEnter={() => setActiveService(serviceItem.title)}
            />
          ))}
        </ul>
      </div>

      {/* Right side mega menu for the selected service */}
      <div className="flex-1 pl-6">
        {serviceItems.map((serviceItem, serviceIndex) => (
          <div
            key={serviceIndex}
            className={cn(
              'space-y-4',
              activeService === serviceItem.title ? 'block' : 'hidden',
            )}
          >
            <div className="mb-4 flex items-center gap-3 border-b pb-2">
              {serviceItem.icon && (
                <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-md">
                  <serviceItem.icon className="h-6 w-6" />
                </div>
              )}
              <div>
                <NavigationMenuLink asChild>
                  <Link
                    href={serviceItem.href}
                    className="hover:text-primary text-lg font-medium transition-colors"
                  >
                    {serviceItem.title}
                  </Link>
                </NavigationMenuLink>
                {serviceItem.description && (
                  <p className="text-muted-foreground text-sm">
                    {serviceItem.description}
                  </p>
                )}
              </div>
            </div>

            {!hasDropdownItems && (
              <div className="bg-muted/30 flex flex-col items-center justify-center rounded-lg p-6 text-center">
                <div className="bg-background mb-4 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm">
                  <Info className="text-primary h-6 w-6" />
                </div>
                <h4 className="mb-2 text-base font-medium">
                  {serviceItem.title} Service
                </h4>
                <p className="text-muted-foreground mb-4 max-w-md text-sm">
                  Visit the {serviceItem.title} page for detailed information
                  about our services, process, and capabilities.
                </p>
                <NavigationMenuLink asChild>
                  <Link
                    href={serviceItem.href}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </NavigationMenuLink>
              </div>
            )}

            {serviceItem.dropdownItems &&
              serviceItem.dropdownItems.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                  {serviceItem.dropdownItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="space-y-3">
                      {/* For items with deep menus (like 3D Printing) */}
                      {hasDeepMenu(subItem) ? (
                        <div className="overflow-hidden rounded-md border">
                          {/* Accordion header */}
                          <div
                            className="hover:bg-muted/50 flex cursor-pointer items-center justify-between p-3"
                            onClick={() => toggleExpanded(subItem.title)}
                          >
                            <div className="flex items-center gap-2 text-sm font-medium">
                              {subItem.icon && (
                                <subItem.icon className="h-4 w-4" />
                              )}
                              {subItem.title}
                            </div>
                            <div className="flex items-center">
                              <span className="text-muted-foreground mr-2 text-xs">
                                {subItem.dropdownItems?.length} options
                              </span>
                              {expandedItems[subItem.title] ? (
                                <ChevronDown className="text-muted-foreground h-4 w-4" />
                              ) : (
                                <ChevronRight className="text-muted-foreground h-4 w-4" />
                              )}
                            </div>
                          </div>

                          {/* Main link for the category */}
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="hover:text-primary hover:bg-muted/30 block border-t px-3 py-2 text-xs transition-colors"
                            >
                              View all {subItem.title} options
                            </Link>
                          </NavigationMenuLink>

                          {/* Accordion content */}
                          {expandedItems[subItem.title] &&
                            subItem.dropdownItems && (
                              <div className="bg-muted/10 border-t p-2">
                                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                  {subItem.dropdownItems.map(
                                    (deepItem, deepIndex) => (
                                      <NavigationMenuLink
                                        key={deepIndex}
                                        asChild
                                      >
                                        <Link
                                          href={deepItem.href}
                                          className="hover:text-primary hover:bg-muted/30 block rounded px-2 py-1 text-xs transition-colors"
                                        >
                                          {deepItem.title}
                                        </Link>
                                      </NavigationMenuLink>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                        </div>
                      ) : (
                        // Regular items without deep menus
                        <>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="hover:text-primary hover:bg-muted/50 block rounded-md p-2 transition-colors"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium">
                                {subItem.icon && (
                                  <subItem.icon className="h-4 w-4" />
                                )}
                                {subItem.title}
                              </div>

                              {/* Show description for items with few dropdown items */}
                              {hasFewDropdownItems && subItem.description && (
                                <p className="text-muted-foreground mt-1 text-xs">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>

                          {subItem.dropdownItems &&
                            subItem.dropdownItems.length > 0 && (
                              <div className="space-y-2 border-l pl-6">
                                {subItem.dropdownItems.map(
                                  (deepItem, deepIndex) => (
                                    <NavigationMenuLink key={deepIndex} asChild>
                                      <Link
                                        href={deepItem.href}
                                        className="hover:text-primary block py-1 text-xs transition-colors"
                                      >
                                        {deepItem.title}
                                      </Link>
                                    </NavigationMenuLink>
                                  ),
                                )}
                              </div>
                            )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
