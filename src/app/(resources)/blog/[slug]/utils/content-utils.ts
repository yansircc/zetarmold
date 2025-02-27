import { type Post } from '@/app/types/post';
import {
  type ContentStructure,
  type ContentNode,
} from '../types/content-types';
import api from '@/lib/api';

// Helper function to get image URL from post
export function getPostImageUrl(post: Post): string {
  let imageUrl = '/images/placeholder/1.svg';

  if (post.heroImage) {
    if (typeof post.heroImage !== 'string' && post.heroImage.url) {
      imageUrl = getAbsoluteUrl(post.heroImage.url);
    }
  } else if (post.meta?.image) {
    if (typeof post.meta.image !== 'string' && post.meta.image.url) {
      imageUrl = getAbsoluteUrl(post.meta.image.url);
    }
  }

  return imageUrl;
}

// Helper function to ensure URL is absolute
export function getAbsoluteUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }

  return api.getFullUrl(url);
}

// Helper function to extract text content from a node
export function extractTextFromNode(
  node: ContentNode | undefined | null,
): string {
  if (!node) return '';

  if (node.text) {
    return node.text;
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map((child) => extractTextFromNode(child)).join('');
  }

  return '';
}

// Function to extract sections from content for the table of contents
export function extractSections(
  content: ContentStructure | undefined | null,
): { id: string; title: string; level: number }[] {
  const sections: { id: string; title: string; level: number }[] = [];

  if (!content?.root?.children) return sections;

  content.root.children.forEach((node, index) => {
    // Look for heading elements
    if (node.type === 'heading') {
      const level = node.tag ? parseInt(node.tag.replace('h', '')) : 2;
      const headingId = `heading-${index}`;
      const text = extractTextFromNode(node);

      if (text) {
        sections.push({
          id: headingId,
          title: text,
          level: level,
        });
      }
    }
  });

  // If no headings were found, fall back to using paragraphs
  if (sections.length === 0) {
    let sectionCount = 0;

    content.root.children.forEach((node, _) => {
      if (
        node.type === 'paragraph' &&
        node.children &&
        node.children.length > 0
      ) {
        const text = extractTextFromNode(node);
        if (text && text.length > 10 && sectionCount < 3) {
          sectionCount++;
          sections.push({
            id: `section${sectionCount}`,
            title: text.substring(0, 40) + (text.length > 40 ? '...' : ''),
            level: 2,
          });
        }
      }
    });
  }

  return sections;
}

// Calculate estimated reading time (rough estimate: 200 words per minute)
export function calculateReadingTime(
  content: ContentStructure | undefined | null,
): number {
  const contentText = extractTextFromNode(content?.root as ContentNode);
  const wordCount = contentText.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
