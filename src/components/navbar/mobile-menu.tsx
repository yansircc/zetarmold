'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { navLinks } from '@/constants/nav-link';
import { MobileMenuItem } from './mobile-menu-item';
import { type MobileMenuProps } from './types';

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedServiceIndex, setExpandedServiceIndex] = React.useState<
    number | null
  >(null);

  return (
    <div
      className={cn(
        'animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md lg:hidden',
        {
          hidden: !isOpen,
          'bg-background': isOpen,
        },
      )}
    >
      <div className="bg-background relative z-20 grid gap-6 rounded-md border p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Menu</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <Separator />
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {navLinks.map((link, index) => {
            // Special handling for Services section in mobile
            if (link.label === 'Services' && link.dropdownItems) {
              return (
                <div key={index} className="py-2">
                  <div className="font-medium">{link.label}</div>
                  <Separator className="my-2" />
                  <div className="mt-2 space-y-2">
                    {link.dropdownItems.map((serviceItem, serviceIndex) => (
                      <div key={serviceIndex} className="rounded-md border">
                        <button
                          className="flex w-full items-center justify-between p-3 text-sm font-medium"
                          onClick={() =>
                            setExpandedServiceIndex(
                              expandedServiceIndex === serviceIndex
                                ? null
                                : serviceIndex,
                            )
                          }
                        >
                          <div className="flex items-center gap-2">
                            {serviceItem.icon && (
                              <serviceItem.icon className="h-4 w-4" />
                            )}
                            <span>{serviceItem.title}</span>
                          </div>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              expandedServiceIndex === serviceIndex &&
                                'rotate-180',
                            )}
                          />
                        </button>

                        {expandedServiceIndex === serviceIndex &&
                          serviceItem.dropdownItems && (
                            <div className="border-t p-3">
                              <div className="space-y-3">
                                {serviceItem.dropdownItems.map(
                                  (subItem, subIndex) => (
                                    <div key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                        className="hover:text-primary flex items-center gap-2 text-sm font-medium"
                                        onClick={onClose}
                                      >
                                        {subItem.icon && (
                                          <subItem.icon className="h-4 w-4" />
                                        )}
                                        {subItem.title}
                                      </Link>

                                      {subItem.dropdownItems &&
                                        subItem.dropdownItems.length > 0 && (
                                          <div className="mt-2 ml-6 space-y-2 border-l pl-2">
                                            {subItem.dropdownItems.map(
                                              (deepItem, deepIndex) => (
                                                <Link
                                                  key={deepIndex}
                                                  href={deepItem.href}
                                                  className="hover:text-primary block text-xs"
                                                  onClick={onClose}
                                                >
                                                  {deepItem.title}
                                                </Link>
                                              ),
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular handling for other sections
            return link.dropdownItems ? (
              <div key={index} className="py-2">
                <div className="font-medium">{link.label}</div>
                <Separator className="my-2" />
                <div className="mt-2 space-y-1">
                  {link.dropdownItems.map((item, itemIndex) => (
                    <MobileMenuItem
                      key={itemIndex}
                      item={item}
                      onClose={onClose}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={link.href}
                className="hover:text-primary flex items-center py-2 text-sm font-medium"
                onClick={onClose}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
