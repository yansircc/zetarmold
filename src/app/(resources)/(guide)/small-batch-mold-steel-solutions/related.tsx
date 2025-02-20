import { relatedPosts } from './data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function Related() {
  return (
    <section>
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <h2 className="mb-4 w-full text-lg font-medium md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl">
            Related Posts
          </h2>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:scale-105">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={1000}
                    className="aspect-[3/2] h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <Badge>{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {post.title}
              </div>
              <div className="text-muted-foreground mb-4 line-clamp-2 text-sm md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-muted-foreground text-xs">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
