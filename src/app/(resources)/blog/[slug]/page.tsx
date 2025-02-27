import { type Post } from '@/app/types/post';
import { type Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import api from '@/lib/api';

import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

import { PostHeader } from './components/post-header';
import { PostContent } from './components/post-content';
import { PostSidebar } from './components/post-sidebar';
import { type ContentStructure } from './types/content-types';
import {
  getPostImageUrl,
  extractSections,
  calculateReadingTime,
} from './utils/content-utils';

// Function to fetch a single post by slug
async function fetchPost(id: string): Promise<Post | null> {
  try {
    const response = await api.get<Post>(`/posts/${id}`);
    return response;
  } catch (error) {
    console.error(`Failed to fetch post with id ${id}:`, error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const imageUrl = getPostImageUrl(post);

  const title: string = post.title || 'Blog Post';

  return {
    title,
    description: 'Read our latest blog post',
    openGraph: {
      images: imageUrl !== '/images/placeholder/1.svg' ? [imageUrl] : [],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return (
      <SectionWrapper>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold">Post Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The blog post you&apos;re looking for could not be found.
          </p>
          <Link href="/blog" className="mt-8 inline-block">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  // Get formatted date
  const dateString = post.publishedAt ?? post.createdAt;
  const formattedDate = format(new Date(dateString), 'MMMM d, yyyy');

  // Get image URL
  const heroImageUrl = getPostImageUrl(post);

  // Extract sections for table of contents
  const sections = extractSections(post.content as unknown as ContentStructure);

  // Calculate estimated reading time
  const readingTime = calculateReadingTime(
    post.content as unknown as ContentStructure,
  );

  // Get author name
  const authorName =
    post.populatedAuthors && post.populatedAuthors.length > 0
      ? post.populatedAuthors[0].name
      : 'Admin';

  return (
    <section className="py-32">
      <div className="container">
        <PostHeader
          title={post.title}
          author={authorName ?? 'Admin'}
          date={formattedDate}
          readingTime={readingTime}
        />

        <div className="relative grid grid-cols-12 gap-6 lg:grid">
          <div className="col-span-12 lg:col-span-8">
            <PostContent
              content={post.content as unknown as ContentStructure}
              heroImageUrl={heroImageUrl}
              title={post.title}
              hasSections={sections.length > 0}
            />
          </div>

          <div className="col-span-3 col-start-10 hidden lg:block">
            <PostSidebar sections={sections} />
          </div>
        </div>
      </div>
    </section>
  );
}
