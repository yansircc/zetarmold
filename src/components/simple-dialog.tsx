'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DiagonalPattern from '@/components/diagonal-pattern';
import { Play } from 'lucide-react';

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description?: string;
  videoId?: string;
}

export function ImageDialog({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  videoId,
}: ImageDialogProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
    }
  }, [isOpen]);

  return (
    <Dialog modal open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-screen-lg">
        <DialogHeader>
          <DialogTitle className="text-xl tracking-tight lg:text-2xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative flex flex-col justify-center">
          <div className="px-6 lg:px-10">
            <DiagonalPattern className="h-6 lg:h-10" />
          </div>
          <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
            <DiagonalPattern className="h-full w-6 lg:w-10" />
            <div className="relative aspect-video">
              {isPlaying && videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-md lg:rounded-xl"
                />
              ) : (
                <div className="group relative h-full w-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    className="rounded-md object-cover shadow-md lg:rounded-xl lg:shadow-lg"
                    priority
                  />
                  {videoId && !isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/30"
                    >
                      <div className="flex size-16 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-110">
                        <Play className="size-8" />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
            <DiagonalPattern className="w-6 lg:w-10" />
          </div>
          <div className="px-6 lg:px-10">
            <DiagonalPattern className="h-6 lg:h-10" />
          </div>
        </div>
        {description && (
          <p className="text-muted-foreground text-sm lg:text-base">
            {description}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
