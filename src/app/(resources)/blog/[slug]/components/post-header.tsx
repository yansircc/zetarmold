import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Clock, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface PostHeaderProps {
  title: string;
  author: string;
  date: string;
  readingTime: number;
}

export function PostHeader({
  title,
  author,
  date,
  readingTime,
}: PostHeaderProps) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-7 mb-6 max-w-3xl text-3xl font-semibold md:text-5xl">
        {title}
      </h1>

      <div className="flex items-center gap-3 text-sm">
        <Avatar className="h-8 w-8 border">
          <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
        </Avatar>
        <span>
          <span className="font-medium">{author}</span>
          <span className="text-muted-foreground ml-1">on {date}</span>
        </span>

        <span className="text-muted-foreground flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {readingTime} min. read
        </span>
      </div>

      <Separator className="mt-8 mb-16" />
    </>
  );
}
