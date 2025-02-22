'use client';

import Image from 'next/image';
import { SimpleDialog } from '../simple-dialog';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getVideoCoverById } from '@/app/utils/getVideoCoverById';

interface ImageWithDialogProps {
  image?: string;
  title: string;
  description: string;
  youtubeId?: string;
  className?: string;
}

export function ImageWithDialog({
  image,
  title,
  description,
  youtubeId,
  className,
}: ImageWithDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const imageUrl = youtubeId ? getVideoCoverById(youtubeId) : image;

  if (!imageUrl) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className={cn('group relative w-full', className)}
      >
        <div className="relative h-0 w-full pb-[56.25%]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="absolute top-0 left-0 h-full w-full rounded-xl border object-cover"
          />
        </div>
        {youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play className="size-8" />
            </div>
          </div>
        )}
      </button>

      <SimpleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        imageUrl={imageUrl}
        title={title}
        description={description}
        videoId={youtubeId}
      />
    </>
  );
}
