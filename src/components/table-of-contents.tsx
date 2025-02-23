'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface TableOfContentsProps {
  className?: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract all h2 elements from the page
    const elements = Array.from(document.querySelectorAll('h2'));
    const headingElements = elements.map((element) => ({
      id: element.id ?? '',
      text: element.textContent ?? '',
      level: 2,
    }));

    setHeadings(headingElements);

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      },
    );

    // Observe all section headings
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className={cn('text-sm', className)}>
      <div className="text-muted-foreground mb-4 flex items-center gap-1 text-sm font-medium">
        <span>On This Page</span>
        <ChevronRight className="size-4" />
      </div>
      <ul className="space-y-2.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={cn(
                'group flex w-full items-center gap-2 text-left',
                'text-muted-foreground hover:text-foreground py-1 text-sm transition-colors',
                activeId === heading.id && 'text-foreground font-medium',
              )}
            >
              <div
                className={cn(
                  'h-1 w-1 rounded-full transition-colors',
                  activeId === heading.id
                    ? 'bg-foreground'
                    : 'bg-muted-foreground/40 group-hover:bg-muted-foreground',
                )}
              />
              <span className="truncate">{heading.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
