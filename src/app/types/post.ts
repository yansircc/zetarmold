export interface Media {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tenant {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name?: string | null;
}

export interface Post {
  id: string;
  tenant?: (string | null) | Tenant;
  title: string;
  heroImage?: (string | null) | Media;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  relatedPosts?: (string | Post)[] | null;
  categories?: (string | Category)[] | null;
  meta?: {
    title?: string | null;
    image?: (string | null) | Media;
    description?: string | null;
    noindex?: boolean | null;
  };
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  slug?: string | null;
  slugLock?: boolean | null;
  fullPath?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}

// Define more specific types for content structure
interface ContentNode {
  type: string;
  children?: ContentNode[];
  text?: string;
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

// Helper function to adapt API Post to UI Post format
export function adaptPostForUI(apiPost: Post): {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  category: string;
} {
  // Extract excerpt from content if meta.description is not available
  const excerpt = apiPost.meta?.description ?? extractExcerpt(apiPost.content);

  // Get image URL or use placeholder
  let imageUrl = '/images/placeholder/1.svg';

  // Try to get image from heroImage
  if (apiPost.heroImage) {
    if (typeof apiPost.heroImage !== 'string' && apiPost.heroImage.url) {
      imageUrl = apiPost.heroImage.url;
    }
  }
  // If no heroImage, try to get from meta.image
  else if (apiPost.meta?.image) {
    if (typeof apiPost.meta.image !== 'string' && apiPost.meta.image.url) {
      imageUrl = apiPost.meta.image.url;
    }
  }

  return {
    id: apiPost.id,
    title: apiPost.title,
    image: imageUrl,
    date: apiPost.publishedAt
      ? new Date(apiPost.publishedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : new Date(apiPost.createdAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
    excerpt,
    category:
      apiPost.categories &&
      apiPost.categories.length > 0 &&
      typeof apiPost.categories[0] !== 'string'
        ? apiPost.categories[0].name
        : 'Uncategorized',
  };
}
