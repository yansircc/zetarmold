'use client';

import Image from 'next/image';
import { SimpleDialog } from '../simple-dialog';
import { useState } from 'react';
import { Play } from 'lucide-react';

interface ImageWithDialogProps {
  image: string;
  title: string;
  description: string;
  youtubeId?: string;
}

export function ImageWithDialog({
  image,
  title,
  description,
  youtubeId,
}: ImageWithDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="group relative w-full"
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg object-cover transition-transform group-hover:scale-[1.02]"
        />
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
        imageUrl={image}
        title={title}
        description={description}
        videoId={youtubeId}
      />
    </>
  );
}
