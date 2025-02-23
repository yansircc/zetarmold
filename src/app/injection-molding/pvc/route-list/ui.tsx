'use client';

import { usePathname } from 'next/navigation';
import { tmpRoutes } from './data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const MotionAccordionContent = motion(AccordionContent);

export function RouteList() {
  const pathname = usePathname();
  const expandedValue = useMemo(
    () => findExpandedValues(tmpRoutes, pathname)[0],
    [pathname],
  );

  // Track which third-level section should be expanded with parent context
  const [expandedSection, setExpandedSection] = useState<string>(() => {
    // Initialize with the section containing the current path
    let expanded = '';
    tmpRoutes.forEach((route) => {
      route.items?.forEach((item, itemIndex) => {
        if (item.items?.some((subItem) => subItem.href === pathname)) {
          expanded = `${route.title}-${itemIndex}`;
        }
      });
    });
    return expanded;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSection((prev) => (prev === sectionId ? '' : sectionId));
  };

  return (
    <Accordion
      type="single"
      defaultValue={expandedValue}
      collapsible
      className="w-full space-y-1 border-0"
    >
      {renderRouteItems(tmpRoutes, pathname, expandedSection, toggleSection)}
    </Accordion>
  );
}

function findExpandedValues(
  items: typeof tmpRoutes,
  currentPath: string,
): string[] {
  const expandedValues: string[] = [];

  items.forEach((route, index) => {
    const checkItems = (items: (typeof tmpRoutes)[0]['items']) => {
      items?.forEach((item) => {
        if (item.href === currentPath) {
          expandedValues.push(`item-${index}`);
        }
        if (item.items) {
          checkItems(item.items);
        }
      });
    };

    checkItems(route.items);
  });

  return expandedValues;
}

const accordionItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  hover: { x: 4 },
};

function renderRouteItems(
  items: typeof tmpRoutes,
  currentPath: string,
  expandedSection: string,
  toggleSection: (id: string) => void,
) {
  return items.map((route, index) => (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="[&[data-state=open]]:bg-muted/50 overflow-hidden rounded-md border-b-0 data-[state=open]:mb-2"
    >
      <AccordionTrigger className="hover:bg-muted/50 group px-4 py-3 text-sm transition-colors hover:no-underline [&>svg]:hidden">
        <span className="flex items-center gap-2">
          <ChevronRight className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-90" />
          {route.title}
        </span>
      </AccordionTrigger>
      <MotionAccordionContent
        className="pb-1"
        initial="hidden"
        animate="visible"
        variants={accordionItemVariants}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="flex flex-col">
          {route.items?.map((item, itemIndex) => {
            if (item.items) {
              const sectionId = `${route.title}-${itemIndex}`;
              const isExpanded = expandedSection === sectionId;

              return (
                <motion.div
                  key={itemIndex}
                  className="flex flex-col"
                  initial="hidden"
                  animate="visible"
                  variants={accordionItemVariants}
                  transition={{ delay: itemIndex * 0.05, ease: 'easeOut' }}
                >
                  <button
                    onClick={() => toggleSection(sectionId)}
                    className="hover:bg-muted/50 flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-medium transition-colors"
                  >
                    <ChevronRight
                      className={cn(
                        'text-muted-foreground h-3 w-3 transition-transform duration-200',
                        isExpanded && 'rotate-90',
                      )}
                    />
                    {item.title}
                  </button>
                  <motion.div
                    className="flex flex-col overflow-hidden"
                    initial="hidden"
                    animate={isExpanded ? 'visible' : 'hidden'}
                    variants={{
                      visible: { height: 'auto', opacity: 1 },
                      hidden: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <MotionLink
                        key={subIndex}
                        href={subItem.href ?? '#'}
                        className={cn(
                          'text-muted-foreground hover:text-foreground hover:bg-muted/50 text-sm',
                          'flex items-center gap-2 px-8 py-2 transition-all',
                          currentPath === subItem.href &&
                            'text-primary bg-muted/30 font-medium',
                        )}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={linkVariants}
                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                        {subItem.title}
                      </MotionLink>
                    ))}
                  </motion.div>
                </motion.div>
              );
            }
            return (
              <MotionLink
                key={itemIndex}
                href={item.href ?? '#'}
                className={cn(
                  'text-muted-foreground hover:text-foreground hover:bg-muted/50 text-sm',
                  'flex items-center gap-2 px-8 py-2 transition-all',
                  currentPath === item.href &&
                    'text-primary bg-muted/30 font-medium',
                )}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={linkVariants}
                transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                {item.title}
              </MotionLink>
            );
          })}
        </div>
      </MotionAccordionContent>
    </AccordionItem>
  ));
}
