import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { TableOfContents } from '@/components/table-of-contents';
import { BackToTopButton } from '@/components/back-to-top-button';

interface Section {
  id: string;
  title: string;
  level: number;
}

interface PostSidebarProps {
  sections: Section[];
}

export function PostSidebar({ sections }: PostSidebarProps) {
  return (
    <div className="sticky top-8 h-fit">
      {/* <TableOfContents sections={sections} /> */}

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
