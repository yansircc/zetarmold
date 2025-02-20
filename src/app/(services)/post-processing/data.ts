export interface PostProcessingService {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string; // Name of the Lucide icon
  videoId?: string; // YouTube video ID
}

export const postProcessingServices: PostProcessingService[] = [
  {
    id: 1,
    title: 'Painting Service',
    description:
      'Painting adds colored coatings to injection molded plastic parts. Applied by spraying color onto the surface finish in a heated oven environment using airless or manual spray guns for optimal adhesion and drying. The process is conducted in a controlled environment to avoid overspray and part damage.',
    imageUrl:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop',
    iconName: 'paintbrush',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Plating Service',
    description:
      'Metal deposits are applied to plastic surfaces to improve appearance and corrosion resistance. Parts are immersed in organic solvent under vacuum and pressurized conditions, with pressurized gas removing air bubbles while heating to speed up metal deposition.',
    imageUrl:
      'https://images.unsplash.com/photo-1624365169364-0640dd10e180?q=80&w=2000&auto=format&fit=crop',
    iconName: 'layers',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Laser Marking',
    description:
      'A non-contact process using laser to engrave text or patterns into plastic surfaces. Ideal for delicate parts that cannot be marked using traditional methods like inkjet printing or stamping, providing precise and permanent markings.',
    imageUrl:
      'https://images.unsplash.com/photo-1611462985358-60d3498e0364?q=80&w=2000&auto=format&fit=crop',
    iconName: 'zap',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Logo Printing',
    description:
      'A versatile technique for adding images, text, and logos onto product surfaces using various methods. Provides a professional finish to products while clearly identifying brand ownership and manufacturing origin.',
    imageUrl:
      'https://images.unsplash.com/photo-1588412079929-790b9f593d8e?q=80&w=2000&auto=format&fit=crop',
    iconName: 'sticker',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Heat Staking',
    description:
      'A process of inserting threaded fasteners into components using heat. The process involves heating threaded inserts to bond with injection molded parts at high temperatures (500°F+) for quick assembly and enhanced component strength.',
    imageUrl:
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2000&auto=format&fit=crop',
    iconName: 'hammer',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Ultrasonic Welding',
    description:
      'Uses high-frequency sound waves (20,000-40,000 Hz) to create strong, permanent bonds between plastic parts. The ultrasonic vibrations generate friction-based heat to melt and join components, ideal for precision applications.',
    imageUrl:
      'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=2000&auto=format&fit=crop',
    iconName: 'radio',
    videoId: 'dQw4w9WgXcQ',
  },
];
