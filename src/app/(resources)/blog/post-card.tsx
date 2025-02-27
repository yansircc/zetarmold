import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { type Post } from '@/app/types/post';
import { format } from 'date-fns';
import api from '@/lib/api';

// Define more specific types for content structure
interface ContentNode {
  type: string;
  children?: ContentNode[];
  text?: string;
  format?: string;
  fields?: {
    media?: {
      url?: string;
      thumbnailURL?: string;
      sizes?: {
        medium?: {
          url?: string | null;
        };
        small?: {
          url?: string | null;
        };
      };
    };
    blockType?: string;
  };
  [key: string]: unknown;
}

// Helper function to extract text content from the first paragraph
function extractExcerpt(content: Post['content']): string {
  try {
    if (!content?.root?.children?.length) return '';

    // Find the first paragraph
    const firstParagraph = content.root.children.find(
      (child: ContentNode) => child.type === 'paragraph',
    ) as ContentNode | undefined;

    if (!firstParagraph?.children) return '';

    // Extract text from the paragraph
    const textNodes = firstParagraph.children.filter(
      (child: ContentNode) => child.type === 'text',
    );

    const text = textNodes.map((node: ContentNode) => node.text ?? '').join('');

    // Limit to 150 characters and add ellipsis if needed
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  } catch (error) {
    console.error('Error extracting excerpt:', error);
    return '';
  }
}

// Helper function to find the first media block in content
function findMediaInContent(content: Post['content']): string | null {
  try {
    if (!content?.root?.children?.length) return null;

    // Find the first media block
    const mediaBlock = content.root.children.find(
      (child: ContentNode) =>
        child.type === 'block' &&
        child.fields?.blockType === 'mediaBlock' &&
        child.fields?.media,
    ) as ContentNode | undefined;

    if (!mediaBlock?.fields?.media) return null;

    // Try to get the best image URL available
    const media = mediaBlock.fields.media;

    // First try medium size
    if (media.sizes?.medium?.url) {
      return media.sizes.medium.url;
    }

    // Then try small size
    if (media.sizes?.small?.url) {
      return media.sizes.small.url;
    }

    // Then try thumbnail
    if (media.thumbnailURL) {
      return media.thumbnailURL;
    }

    // Finally use the original URL
    return media.url ?? null;
  } catch (error) {
    console.error('Error finding media in content:', error);
    return null;
  }
}

// Helper function to ensure URL is absolute
function getAbsoluteUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }

  return api.getFullUrl(url);
}

export const PostCard = ({ post }: { post: Post }) => {
  console.log('Post content:', JSON.stringify(post.content, null, 2));

  // Get image URL or use placeholder
  let imageUrl = '/images/placeholder/1.svg';

  // Try to get image from meta.image
  if (post.meta?.image) {
    if (typeof post.meta.image !== 'string' && post.meta.image.url) {
      imageUrl = getAbsoluteUrl(post.meta.image.url);
    }
  }
  // Try to get image from heroImage
  else if (post.heroImage) {
    if (typeof post.heroImage !== 'string' && post.heroImage.url) {
      imageUrl = getAbsoluteUrl(post.heroImage.url);
    }
  }
  // If still no image, try to find one in the content
  else {
    const contentImageUrl = findMediaInContent(post.content);
    if (contentImageUrl) {
      imageUrl = getAbsoluteUrl(contentImageUrl);
    }
  }

  // Get formatted date
  const dateString = post.publishedAt ?? post.createdAt;
  const formattedDate = format(new Date(dateString), 'MMMM d, yyyy');

  // Get excerpt
  const excerpt = post.meta?.description ?? extractExcerpt(post.content);

  // Get category
  const category =
    post.categories &&
    post.categories.length > 0 &&
    typeof post.categories[0] !== 'string'
      ? post.categories[0].name
      : 'Uncategorized';

  return (
    <div className="group border-border/5 bg-background/20 hover:bg-background/40 dark:border-border/5 relative overflow-hidden rounded-lg border transition-colors duration-300 dark:bg-slate-950/20 dark:hover:bg-slate-950/40">
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Link
            href={`/blog/${post.id}`}
            className="block overflow-hidden rounded-md transition-all duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={imageUrl}
                alt={post.title}
                width={400}
                height={225}
                className={cn(
                  'aspect-[16/9] w-full object-cover object-center',
                  'transform transition-transform duration-500 group-hover:scale-105 sm:w-[240px]',
                )}
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Badge
              variant="outline"
              className="border-border/20 text-muted-foreground rounded-md bg-transparent px-2 py-0.5 text-xs font-normal"
            >
              {category}
            </Badge>
            <span className="text-muted-foreground text-xs">
              {formattedDate}
            </span>
          </div>
          <h3 className="font-serif text-xl font-medium tracking-tight lg:text-2xl">
            <Link
              href={`/blog/${post.id}`}
              className="text-foreground/90 group-hover:text-primary inline-block transition-colors duration-300"
            >
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {excerpt}
          </p>
          <Link
            href={`/blog/${post.id}`}
            className="text-primary inline-flex items-center text-sm font-medium opacity-80 transition-all duration-300 hover:translate-x-0.5 hover:opacity-100"
          >
            Read article
            <ArrowRight className="ml-1.5 size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
