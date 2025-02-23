'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { SimpleDialog } from '@/components/simple-dialog';
import { type VideoData } from './data';

interface Props {
  videos: VideoData[];
}

export function VideoGallery({ videos }: Props) {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <div key={index} className="group flex flex-col gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <button
                className="absolute inset-0 block h-full w-full"
                onClick={() => setSelectedVideo(video)}
              >
                {/* 使用视频缩略图 - YouTube的缩略图URL格式 */}
                <Image
                  src={`https://img.youtube.com/vi/${getYouTubeVideoId(
                    video.youtubeUrl,
                  )}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="size-8" />
                  </div>
                </div>
              </button>
            </div>
            <h3 className="text-lg font-semibold">{video.title}</h3>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <SimpleDialog
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
          imageUrl={`https://img.youtube.com/vi/${getYouTubeVideoId(
            selectedVideo.youtubeUrl,
          )}/maxresdefault.jpg`}
          videoId={getYouTubeVideoId(selectedVideo.youtubeUrl)}
        />
      )}
    </>
  );
}

// 辅助函数：从YouTube URL中提取视频ID
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = regExp.exec(url);
  return match && match[2].length === 11 ? match[2] : '';
}
