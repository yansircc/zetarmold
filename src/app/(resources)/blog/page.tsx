import { type Post } from '@/app/types/post';
import { PageHeader } from '@/components/sections/templates';
import { SectionWrapper } from '@/components/section-wrapper';
import { PostCard } from './post-card';
import { BlogPagination } from './pagination';
import { paginatePosts } from './utils';
import api from '@/lib/api';

// Number of posts per page
const POSTS_PER_PAGE = 5;

// API response interface
interface PostsApiResponse {
  docs: Post[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Function to fetch posts from the API
async function fetchPosts() {
  try {
    const response = await api.get<PostsApiResponse>('/posts');

    // Extract posts from the docs array
    if (!response.docs) {
      return [];
    }

    return response.docs;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

interface BlogArchiveProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogArchive({ searchParams }: BlogArchiveProps) {
  // Get current page from URL or default to 1
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;

  // Fetch posts from API
  const posts = await fetchPosts();

  // Use the pagination utility to get paginated posts and metadata
  const {
    paginatedItems,
    totalPages,
    currentPage: validCurrentPage,
  } = paginatePosts(posts, currentPage, POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
      <PageHeader
        title="Blog"
        description="Insights and perspectives on plastic injection molding, welding assembly, and manufacturing innovation."
        showGridBackground
        background="gray"
      />
      <SectionWrapper>
        <div className="mx-auto max-w-4xl space-y-6">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="py-10 text-center">
              <h3 className="mb-2 text-xl font-medium">No posts found</h3>
              <p className="text-muted-foreground">
                Check back later for new content.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <BlogPagination
              currentPage={validCurrentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
