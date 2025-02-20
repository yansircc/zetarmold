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

interface Props {
  section: SectionData;
  index: number;
}

export function ContentSection({ section, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div className="py-16">
      <div
        className={cn(
          'container flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12',
          !isEven && 'lg:flex-row-reverse',
        )}
      >
        {/* Media Section (Images/Video) */}
        {(section.images || section.video) && (
          <div className="lg:w-1/3">
            {section.images?.map((image, idx) => (
              <div key={idx} className="relative mb-4">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {section.video && (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={section.video.thumbnailUrl || ''}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black text-white">
                      Play
                    </button>
                  </DialogTrigger>
                  <DialogOverlay />
                  <DialogContent>
                    <video controls className="h-auto w-full">
                      <source src={section.video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            {section.heading}
          </h2>
          <p className="mb-6 text-gray-600">
            {section.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* Sub Sections */}
          {section.subSections?.map((sub, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="mb-2 text-xl font-semibold">{sub.title}</h3>
              <p className="text-gray-600">{sub.content}</p>
            </div>
          ))}

          {/* List */}
          {section.list && (
            <ul className="mb-6 space-y-3">
              {section.list.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  {item.title && (
                    <span className="font-semibold">{item.title}</span>
                  )}
                  <span className="text-gray-600">{item.content}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Table */}
          {section.table && (
            <div className="mt-6 overflow-x-auto">
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
      </div>
    </div>
  );
}
