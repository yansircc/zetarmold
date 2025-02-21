import PageHeader from '@/components/page-header';
import { BlogPosts } from './BlogPosts';
import { ContentSection } from './ContentSection';
import { relatedPosts } from './relatedPosts';
import { absSections } from './sectionData';

export default function ABSInjectionMoldingGuide() {
  return (
    <>
      <section className="py-16">
        <div className="container flex flex-col gap-16 lg:px-16">
          <PageHeader
            title="Custom ABS Injection Molding Factory"
            description="ABS injection molding manufacturing and design guide"
            href="/contact"
            linkText="SEND AN INQUIRY"
          />
        </div>
        {/* <iframe
          title="Spotify Embed: ABS injection molding manufacturing and design guide"
          style={{ borderRadius: '12px' }}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          src="https://open.spotify.com/embed/episode/1HHpZPAQMsmSWmmDBgPX3L?si=BzPYFfGoTU2JgESHizjoTQ&amp;utm_source=oembed"
          className="lzl-ed lzl-cached"
          data-lzl-src="https://open.spotify.com/embed/episode/1HHpZPAQMsmSWmmDBgPX3L?si=BzPYFfGoTU2JgESHizjoTQ&amp;utm_source=oembed"
          data-gtm-yt-inspected-11="true"
        /> */}
      </section>
      <section>
        {absSections.map((section, index) => (
          <ContentSection key={index} section={section} index={index} />
        ))}
      </section>
      <BlogPosts posts={relatedPosts} />
    </>
  );
}
