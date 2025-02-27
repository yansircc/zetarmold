import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { BackToTopButton } from '@/components/back-to-top-button';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  title: string;
  level: number;
}

interface PostSidebarProps {
  sections: Section[];
}

export function PostSidebar({ sections }: PostSidebarProps) {
  // Find the minimum heading level to use as the base level
  const minLevel =
    sections.length > 0
      ? Math.min(...sections.map((section) => section.level))
      : 1;

  return (
    <div className="sticky top-8 h-fit">
      <div className="mb-6">
        <h4 className="mb-4 text-sm font-medium">Table of Contents</h4>
        <nav className="text-sm">
          <ul className="space-y-1.5">
            {sections.map((section) => {
              // Calculate relative indentation level (0 for top level, 1 for next level, etc.)
              const relativeLevel = section.level - minLevel;

              return (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      'group text-muted-foreground hover:text-primary flex items-center py-1 transition-colors',
                      relativeLevel > 0 && 'border-muted border-l',
                      relativeLevel === 1 && 'pl-4',
                      relativeLevel === 2 && 'pl-6',
                      relativeLevel >= 3 &&
                        `pl-${Math.min(relativeLevel * 2 + 2, 12)}`,
                    )}
                  >
                    {relativeLevel > 0 && (
                      <span className="bg-muted group-hover:bg-primary/70 absolute top-1/2 left-0 h-px w-2 transition-colors" />
                    )}
                    <span
                      className={cn(
                        relativeLevel === 0 && 'font-medium',
                        relativeLevel === 1 && 'text-[14px]',
                        relativeLevel === 2 && 'text-[13px]',
                        relativeLevel >= 3 && 'text-xs opacity-80',
                      )}
                    >
                      {section.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Separator className="my-6" />

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Share this article</p>
        <ul className="flex gap-2">
          <li>
            <a
              href="#"
              className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-muted inline-flex rounded-full border p-2 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <BackToTopButton />
      </div>
    </div>
  );
}
