import Image from 'next/image';
import Link from 'next/link';

import { FileText } from 'lucide-react';

import { blogs, blogCategories } from '@/app/data/blog-archive-data';
import { slugify } from '@/app/utils/slugify';
import { Separator } from '@/components/ui/separator';

const BlogArchive = () => {
  return (
    <section className="bg-muted/60 py-32">
      <div className="container">
        <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 lg:flex-row">
          <header className="top-10 flex h-fit flex-col items-center gap-5 text-center lg:sticky lg:max-w-80 lg:items-start lg:gap-8 lg:text-left">
            <FileText className="h-full w-14" strokeWidth={1} />
            <h1 className="text-4xl font-extrabold lg:text-5xl">Blog Posts</h1>
            <p className="text-muted-foreground lg:text-xl">
              Blog posts are a great way to share your knowledge and expertise
              with the world.
            </p>
            <Separator />
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                {blogCategories.map((category, index) => (
                  <li
                    className="text-muted-foreground hover:text-primary"
                    key={index}
                  >
                    <Link href={category.href}>{category.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <Link
                href={`/${slugify(blog.title)}`}
                key={index}
                className="group bg-background relative isolate h-80 rounded-lg"
              >
                <div className="z-10 flex h-full flex-col justify-between p-6">
                  <p className="text-muted-foreground group-hover:text-background transition-colors duration-500">
                    {blog.date}
                  </p>
                  <h2 className="group-hover:text-background line-clamp-2 text-xl font-medium transition-colors duration-500">
                    {blog.title}
                  </h2>
                </div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={100}
                  height={100}
                  className="absolute inset-0 -z-10 size-full rounded-lg object-cover brightness-50 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_0_100%_0)] group-hover:[clip-path:inset(0_0_0%_0)]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArchive;
