'use client';
import { ArrowDown, Play, MousePointer } from 'lucide-react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { posts } from './data';

export default function OurHistory() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="dark font-dm_sans relative h-svh max-h-[800px] min-h-[600px] w-full bg-[url(https://zetarmold.com/wp-content/uploads/2025/02/metal-samples-on-workbench.webp)] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:block after:size-full after:bg-zinc-950/50 after:content-['']">
        <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-4 py-9">
          <div className="flex w-full flex-col justify-between gap-10">
            <div className="mx-auto flex max-w-[31.25rem] flex-1 flex-col items-center justify-center gap-7 text-white sm:max-w-[37.5rem] md:max-w-[50rem]">
              <h1 className="text-foreground text-center text-4xl leading-tight font-medium text-white sm:text-5xl md:text-6xl">
                Small Batch Injection Mold Solutions
              </h1>
              <p className="text-foreground text-center text-lg text-balance text-white md:text-2xl">
                Discover perfect small batch mold steel solutions with Zetar
                Mold. Enhance precision and flexibility for superior
                manufacturing results.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  className="block flex h-fit w-fit items-center rounded-sm bg-red-500 px-6 py-3.5 text-sm font-semibold tracking-wider text-nowrap text-white uppercase hover:bg-red-600"
                >
                  <a href="#">
                    <MousePointer className="mr-2" />
                    SEND AN INQUIRY
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto my-8 flex max-w-7xl flex-col items-center justify-between rounded-md bg-white p-6 shadow-md md:flex-row">
        <div className="w-full p-4 md:w-1/3">
          <Image
            src="https://zetarmold.com/wp-content/uploads/2024/10/de8c27ac-8375-491b-8938-295ad8aa8b46-1024x992.jpeg"
            alt="Description"
            width={500}
            height={300}
            className="h-auto w-full rounded-md"
          />
        </div>
        <div className="w-full p-4 md:w-2/3">
          <div className="rounded-md border">
            <button
              className="w-full p-4 text-left text-[22px] font-semibold text-blue-800 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              Resources for Small Batch Injection Mold Steel Selection
              <span className="float-right">{open ? '▲' : '▼'}</span>
            </button>
            {open && (
              <ul className="list-inside list-disc p-4 text-[22px] text-blue-800">
                <li>
                  <a href="#small-batch">
                    What is Small Batch Injection Molding? What defines
                    small-batch injection mold steel?
                  </a>
                </li>
                <li>
                  <a href="#abs-types">
                    What types of ABS materials are there?
                  </a>
                </li>
                <li>
                  <a href="#abs-characteristics">
                    What are the characteristics of ABS?
                  </a>
                </li>
                <li>
                  <a href="#abs-properties">What are the properties of ABS?</a>
                </li>
                <li>
                  <a href="#abs-injection">
                    Can ABS materials be injection molded?
                  </a>
                </li>
                <li>
                  <a href="#abs-considerations">
                    What are the key considerations for ABS Injection Molding?
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto my-8 max-w-7xl p-6">
        <h3 id="small-batch" className="mb-4 text-2xl font-semibold">
          What is Small Batch Injection Molding? What defines small-batch
          injection mold steel?
        </h3>
        <h3 id="abs-types" className="mb-4 text-2xl font-semibold">
          What types of ABS materials are there?
        </h3>
        <h3 id="abs-characteristics" className="mb-4 text-2xl font-semibold">
          What are the characteristics of ABS?
        </h3>
        <h3 id="abs-properties" className="mb-4 text-2xl font-semibold">
          What are the properties of ABS?
        </h3>
        <h3 id="abs-injection" className="mb-4 text-2xl font-semibold">
          Can ABS materials be injection molded?
        </h3>
        <h3 id="abs-considerations" className="mb-4 text-2xl font-semibold">
          What are the key considerations for ABS Injection Molding?
        </h3>
      </section>
      <section className="py-32">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <h2 className="mb-4 w-full text-center text-lg font-medium md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl">
              Know More Resources for Injection Mold & Injection Molding
            </h2>
          </div>
          <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
            {posts.map((post) => (
              <a key={post.id} href={post.href} className="group flex flex-col">
                <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                  <div className="h-full w-full transition duration-300 group-hover:scale-105">
                    <img
                      src={post.image}
                      alt={post.title}
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
    </>
  );
}
