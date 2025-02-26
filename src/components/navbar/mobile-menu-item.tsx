'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type MobileMenuItemProps } from './types';

export function MobileMenuItem({
  item,
  depth = 0,
  onClose,
}: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.dropdownItems && item.dropdownItems.length > 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={cn(
            'flex w-full items-center py-2 text-sm',
            depth > 0 && 'pl-4',
          )}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              setIsOpen(!isOpen);
            } else if (onClose) {
              onClose();
            }
          }}
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          <span>{item.title}</span>
        </Link>
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform',
                isOpen && 'rotate-180',
              )}
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="mt-1 ml-4 space-y-1 border-l pl-2">
          {item.dropdownItems?.map((child, index) => (
            <MobileMenuItem
              key={index}
              item={child}
              depth={depth + 1}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
}
