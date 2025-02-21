'use client';

import Image from 'next/image';
import { type SectionData } from './sectionData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from '@/components/ui/dialog';
import { Timer, ZoomIn, Zap, CheckCircle, Play } from 'lucide-react';

interface Props {
  section: SectionData;
  index: number;
}

export function ContentSection({ section, index }: Props) {
  const isEven = index % 2 === 0;
  const firstImage = section.images?.[0];
  const otherImages = section.images?.slice(1);
  const hasMedia = section.video || firstImage;

  return (
    <div className="py-16">
      {/* 第一部分：标题、描述和主要媒体（有媒体时左右等宽，无媒体时全宽） */}
      <div className="container mb-16">
        <div
          className={cn(
            'flex flex-col gap-8',
            hasMedia && 'lg:flex-row lg:items-center',
            !isEven && hasMedia && 'lg:flex-row-reverse',
          )}
        >
          {/* 左侧：标题和描述 */}
          <div className={cn(hasMedia ? 'lg:w-1/2 lg:px-8' : 'w-full')}>
            <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
              {section.heading}
            </h2>
            <p className="text-gray-600">
              {section.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* 右侧：视频或第一张图片（只在有媒体时显示） */}
          {hasMedia && (
            <div className="lg:w-1/2 lg:px-8">
              {section.video ? (
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`https://img.youtube.com/vi/${section.video.youtubeUrl?.split('v=')[1] ?? ''}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute inset-0 flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <div className="flex size-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                          <Play className="size-8 fill-current pl-1" />
                        </div>
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-200 hover:bg-black/30" />
                      </button>
                    </DialogTrigger>
                    <DialogOverlay />
                    <DialogContent className="w-full max-w-[80vw] md:max-w-[60vw]">
                      <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${section.video.youtubeUrl?.split('v=')[1]}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                firstImage && (
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={firstImage.url}
                      alt={firstImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* 第二部分：详细内容和其他图片 */}
      <div className="container mb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* 左侧：详细内容 */}
          <div className="flex-1">
            {/* Sub Sections */}
            {section.subSections?.map((sub, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">{sub.title}</h3>
                <p className="text-gray-600">
                  {sub.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}

            {/* Table */}
            {section.table && (
              <div className="mt-8 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {section.table.headers.map((header, idx) => (
                        <TableHead key={idx}>{header}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.table.rows.map((row, idx) => (
                      <TableRow key={idx}>
                        {row.map((cell, cellIdx) => (
                          <TableCell key={cellIdx}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* 右侧：其他图片 */}
          {((otherImages?.length ?? 0) > 0 ||
            (section.video && firstImage)) && (
            <div className="lg:w-1/3">
              {section.video && firstImage && (
                <div className="mb-4">
                  <Image
                    src={firstImage.url}
                    alt={firstImage.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </div>
              )}
              {otherImages?.map((image, idx) => (
                <div key={idx} className="mb-4">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 第三部分：List（全宽） */}
      {section.list && (
        <div className="container">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}
          >
            {section.list.map((item, idx) => (
              <div key={idx} className="bg-accent rounded-lg p-5">
                <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                  <CheckCircle className="size-6" />
                </span>
                <h3 className="mb-2 text-xl font-medium">
                  {item.title?.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="text-muted-foreground leading-7">
                  {item.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
