import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import {
  Wrench, // For hardware tools
} from 'lucide-react';

export default function CanBeMolded() {
  return (
    <TextWrapper
      title="Can PA materials be injection molded?"
      description="PA materials, commonly known as Nylon, are widely used in injection molding due to their excellent mechanical properties, versatility, and adaptability to various applications. Below is a detailed exploration of PA materials for injection molding, covering their advantages, challenges, and best practices to ensure high-quality molded products."
      image="https://zetarmold.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/51b44b0e35caefe2a646dd0acb2e5f0f.a916.jpg"
      youtubeId="OpQxfDQsbzE"
      imagePosition="left"
      isSticky={true}
    >
      <FeatureList
        props={[
          {
            icon: <Wrench className="size-6" />,
            title: 'PA6 (Nylon 6)',
            description:
              'Known for its excellent balance of toughness, strength, and processability.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'PA66 (Nylon 66)',
            description:
              'Offers better mechanical properties than PA6, particularly in terms of heat resistance and strength, making it ideal for more demanding applications.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'PA12 (Nylon 12)',
            description:
              'Often used for applications requiring low moisture absorption, better chemical resistance, and higher flexibility.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Impact of Fillers',
            description:
              'Adding fillers such as glass fibers can significantly improve the dimensional stability and mechanical strength of PA materials. However, the addition of fillers also requires adjustments to the processing conditions and mold design to accommodate changes in material flow.',
          },
        ]}
        columns={1}
      />
    </TextWrapper>
  );
}
