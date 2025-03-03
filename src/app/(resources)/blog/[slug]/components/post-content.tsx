import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  type ContentNode,
  type ContentStructure,
} from '../types/content-types';
import api from '@/lib/api';
import { extractTextFromNode } from '../utils/content-utils';

interface PostContentProps {
  content: ContentStructure;
  heroImageUrl?: string;
  title: string;
  hasSections: boolean;
}

// Helper function to ensure URL is absolute
function getAbsoluteUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }

  // This should be imported from your API utility
  return api.getFullUrl(url);
}

// Helper function to check if a string is a YouTube URL
function isYouTubeUrl(url: string): boolean {
  // Remove any leading non-URL characters
  const cleanUrl = url.trim().replace(/^[^h]*https?:\/\//, 'https://');
  const youtubeRegex =
    /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
  return youtubeRegex.test(cleanUrl);
}

// Helper function to check if a string is a Spotify URL
function isSpotifyUrl(url: string): boolean {
  // Remove any leading non-URL characters
  const cleanUrl = url.trim().replace(/^[^h]*https?:\/\//, 'https://');
  const spotifyRegex =
    /^https?:\/\/(open\.)?spotify\.com\/([a-z]+)\/([a-zA-Z0-9]+)(\S*)?$/;
  return spotifyRegex.test(cleanUrl);
}

// Helper function to extract YouTube video ID from URL
function extractYouTubeVideoId(url: string): string | null {
  // Remove any leading non-URL characters
  const cleanUrl = url.trim().replace(/^[^h]*https?:\/\//, 'https://');
  const youtubeRegex =
    /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
  const match = youtubeRegex.exec(cleanUrl);
  return match ? match[3] : null;
}

// Helper function to extract Spotify ID and type from URL
function extractSpotifyInfo(url: string): { id: string; type: string } | null {
  // Remove any leading non-URL characters
  const cleanUrl = url.trim().replace(/^[^h]*https?:\/\//, 'https://');
  const spotifyRegex =
    /^https?:\/\/(open\.)?spotify\.com\/([a-z]+)\/([a-zA-Z0-9]+)(\S*)?$/;
  const match = spotifyRegex.exec(cleanUrl);

  if (!match) return null;

  return {
    type: match[2], // track, album, playlist, episode, show
    id: match[3], // Spotify ID
  };
}

// Helper function to render YouTube embed
function renderYouTubeEmbed(
  url: string,
  index: number | string,
): React.ReactNode {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return url;

  return (
    <div key={index} className="my-8 aspect-video w-full">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

// Helper function to render Spotify embed
function renderSpotifyEmbed(
  url: string,
  index: number | string,
): React.ReactNode {
  const spotifyInfo = extractSpotifyInfo(url);
  if (!spotifyInfo) return url;

  return (
    <div key={index} className="my-8">
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/${spotifyInfo.type}/${spotifyInfo.id}`}
        width="100%"
        height={
          spotifyInfo.type === 'episode' || spotifyInfo.type === 'show'
            ? '152'
            : '352'
        }
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

// Helper function to render content nodes
function renderContentNode(
  node: ContentNode | null | undefined,
  index: number | string,
): React.ReactNode {
  if (!node) return null;

  // Handle text nodes
  if (node.type === 'text') {
    const textContent = node.text ?? '';

    // Apply formatting if needed
    if (node.format === 1) {
      return <strong key={index}>{textContent}</strong>;
    } else if (node.format === 2) {
      return <em key={index}>{textContent}</em>;
    } else if (node.format === 3) {
      return (
        <strong key={index}>
          <em>{textContent}</em>
        </strong>
      );
    }

    return textContent;
  }

  // Handle heading nodes
  if (node.type === 'heading') {
    const level = node.tag ? parseInt(node.tag.replace('h', '')) : 2;
    const headingId = `heading-${index}`;

    // Extract only the text content from the heading
    const headingText = extractTextFromNode(node);

    switch (level) {
      case 1:
        return (
          <h1
            key={index}
            id={headingId}
            className="mt-8 mb-4 scroll-mt-20 font-serif text-3xl font-semibold"
          >
            {headingText}
          </h1>
        );
      case 2:
        return (
          <h2
            key={index}
            id={headingId}
            className="mt-6 mb-3 scroll-mt-20 font-serif text-2xl font-medium"
          >
            {headingText}
          </h2>
        );
      case 3:
        return (
          <h3
            key={index}
            id={headingId}
            className="mt-5 mb-2 scroll-mt-20 font-serif text-xl font-medium"
          >
            {headingText}
          </h3>
        );
      case 4:
        return (
          <h4
            key={index}
            id={headingId}
            className="mt-4 mb-2 scroll-mt-20 font-serif text-lg font-medium"
          >
            {headingText}
          </h4>
        );
      case 5:
        return (
          <h5
            key={index}
            id={headingId}
            className="mt-3 mb-1 scroll-mt-20 font-serif text-base font-medium"
          >
            {headingText}
          </h5>
        );
      case 6:
        return (
          <h6
            key={index}
            id={headingId}
            className="mt-3 mb-1 scroll-mt-20 font-serif text-base font-medium"
          >
            {headingText}
          </h6>
        );
      default:
        return (
          <h2
            key={index}
            id={headingId}
            className="mt-6 mb-3 scroll-mt-20 font-serif text-2xl font-medium"
          >
            {headingText}
          </h2>
        );
    }
  }

  // Handle paragraph nodes
  if (node.type === 'paragraph') {
    // Check if this paragraph contains only a YouTube or Spotify URL
    const paragraphText = extractTextFromNode(node);

    // Check if the text contains a YouTube or Spotify URL
    if (paragraphText) {
      const cleanText = paragraphText.trim();
      if (
        cleanText.includes('youtu.be/') ||
        cleanText.includes('youtube.com/')
      ) {
        if (isYouTubeUrl(cleanText)) {
          return renderYouTubeEmbed(cleanText, index);
        }
      } else if (cleanText.includes('spotify.com/')) {
        if (isSpotifyUrl(cleanText)) {
          return renderSpotifyEmbed(cleanText, index);
        }
      }
    }

    // Check for deeply nested paragraphs with YouTube or Spotify URLs
    let currentNode = node;
    let depth = 0;
    const maxDepth = 5; // Prevent infinite loops

    while (
      currentNode.children?.length === 1 &&
      currentNode.children[0].type === 'paragraph' &&
      depth < maxDepth
    ) {
      currentNode = currentNode.children[0];
      depth++;

      const nestedText = extractTextFromNode(currentNode);
      if (nestedText) {
        if (
          nestedText.includes('youtu.be/') ||
          nestedText.includes('youtube.com/')
        ) {
          if (isYouTubeUrl(nestedText)) {
            return renderYouTubeEmbed(nestedText, index);
          }
        } else if (nestedText.includes('spotify.com/')) {
          if (isSpotifyUrl(nestedText)) {
            return renderSpotifyEmbed(nestedText, index);
          }
        }
      }
    }

    return (
      <p key={index} className="text-muted-foreground mt-2 text-lg">
        {node.children?.map((child, childIndex) =>
          renderContentNode(child, `${index}-${childIndex}`),
        )}
      </p>
    );
  }

  return null;
}

export function PostContent({
  content,
  heroImageUrl,
  title,
  hasSections,
}: PostContentProps) {
  return (
    <>
      {/* Hero image */}
      {heroImageUrl && (
        <div className="mb-8">
          <Image
            src={heroImageUrl}
            alt={title}
            width={900}
            height={500}
            className="rounded-lg"
            priority
          />
        </div>
      )}

      {/* Render post content */}
      <div className="prose max-w-none">
        {content?.root?.children?.map((node, index) =>
          renderContentNode(node, index),
        )}
      </div>
    </>
  );
}
