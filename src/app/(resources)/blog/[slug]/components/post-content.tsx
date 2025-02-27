import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  type ContentNode,
  type ContentStructure,
} from '../types/content-types';
import api from '@/lib/api';

interface PostContentProps {
  content: ContentStructure;
  heroImageUrl?: string;
  title: string;
  hasSections: boolean;
}

// Helper function to ensure URL is absolute
function getAbsoluteUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }

  // This should be imported from your API utility
  return api.getFullUrl(url);
}

// Helper function to render content nodes
function renderContentNode(
  node: ContentNode | null | undefined,
  index: number | string,
): React.ReactNode {
  if (!node) return null;

  // Handle text nodes
  if (node.type === 'text') {
    const textContent = node.text ?? '';

    // Apply formatting if needed
    if (node.format === 1) {
      return <strong key={index}>{textContent}</strong>;
    } else if (node.format === 2) {
      return <em key={index}>{textContent}</em>;
    } else if (node.format === 3) {
      return (
        <strong key={index}>
          <em>{textContent}</em>
        </strong>
      );
    }

    return textContent;
  }

  // Handle heading nodes
  if (node.type === 'heading') {
    const level = node.tag ? parseInt(node.tag.replace('h', '')) : 2;
    const headingId = `heading-${index}`;

    // Render the appropriate heading based on level
    const headingContent = node.children?.map((child, childIndex) =>
      renderContentNode(child, `${index}-${childIndex}`),
    );

    switch (level) {
      case 1:
        return (
          <h1
            key={index}
            id={headingId}
            className="mt-8 mb-4 scroll-mt-20 font-serif text-3xl font-semibold"
          >
            {headingContent}
          </h1>
        );
      case 2:
        return (
          <h2
            key={index}
            id={headingId}
            className="mt-6 mb-3 scroll-mt-20 font-serif text-2xl font-medium"
          >
            {headingContent}
          </h2>
        );
      case 3:
        return (
          <h3
            key={index}
            id={headingId}
            className="mt-5 mb-2 scroll-mt-20 font-serif text-xl font-medium"
          >
            {headingContent}
          </h3>
        );
      case 4:
        return (
          <h4
            key={index}
            id={headingId}
            className="mt-4 mb-2 scroll-mt-20 font-serif text-lg font-medium"
          >
            {headingContent}
          </h4>
        );
      case 5:
        return (
          <h5
            key={index}
            id={headingId}
            className="mt-3 mb-1 scroll-mt-20 font-serif text-base font-medium"
          >
            {headingContent}
          </h5>
        );
      case 6:
        return (
          <h6
            key={index}
            id={headingId}
            className="mt-3 mb-1 scroll-mt-20 font-serif text-base font-medium"
          >
            {headingContent}
          </h6>
        );
      default:
        return (
          <h2
            key={index}
            id={headingId}
            className="mt-6 mb-3 scroll-mt-20 font-serif text-2xl font-medium"
          >
            {headingContent}
          </h2>
        );
    }
  }

  // Handle paragraph nodes
  if (node.type === 'paragraph') {
    return (
      <p key={index} className="text-muted-foreground mt-2 text-lg">
        {node.children?.map((child, childIndex) =>
          renderContentNode(child, `${index}-${childIndex}`),
        )}
      </p>
    );
  }

  // Handle media blocks
  if (
    node.type === 'block' &&
    node.fields?.blockType === 'mediaBlock' &&
    node.fields?.media
  ) {
    const media = node.fields.media;
    let imageUrl = '';

    // Try to get the best image URL available
    if (media.sizes?.medium?.url) {
      imageUrl = getAbsoluteUrl(media.sizes.medium.url);
    } else if (media.sizes?.small?.url) {
      imageUrl = getAbsoluteUrl(media.sizes.small.url);
    } else if (media.url) {
      imageUrl = getAbsoluteUrl(media.url);
    }

    if (imageUrl) {
      return (
        <div key={index} className="my-8">
          <Image
            src={imageUrl}
            alt={media.filename ?? 'Blog image'}
            width={900}
            height={500}
            className="rounded-lg"
          />
        </div>
      );
    }
  }

  // Handle other node types or return null for unsupported types
  return null;
}

export function PostContent({
  content,
  heroImageUrl,
  title,
  hasSections,
}: PostContentProps) {
  return (
    <>
      {/* Hero image */}
      {heroImageUrl && (
        <div className="mb-8">
          <Image
            src={heroImageUrl}
            alt={title}
            width={900}
            height={500}
            className="rounded-lg"
            priority
          />
        </div>
      )}

      {/* Render post content */}
      <div className="prose max-w-none">
        {content?.root?.children?.map((node, index) =>
          renderContentNode(node, index),
        )}
      </div>

      {/* Example alert */}
      {hasSections && (
        <div className="mt-8">
          <Alert className="my-8">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription>
              This is an example alert that could contain important information
              related to this post.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
