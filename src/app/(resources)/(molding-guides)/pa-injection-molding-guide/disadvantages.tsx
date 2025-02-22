import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import {
  Droplets,
  Scale,
  Thermometer,
  Beaker,
  Sun,
  Settings,
  Ruler,
  Hammer,
  CircleDollarSign,
  Recycle,
  Palette,
} from 'lucide-react';
import { type BackgroundVariant } from './types';
interface DisadvantagesProps {
  background?: BackgroundVariant;
}
export default function Disadvantages({
  background = 'default',
}: DisadvantagesProps) {
  return (
    <TextWrapper
      title="What are the disadvantages of PA Injection Molding?"
      description="The use of PA (Polyamide) in injection molding has several notable disadvantages that can impact the quality and performance of the molded parts. Here are the key drawbacks:"
      background={background}
    >
      <FeatureList
        props={[
          {
            icon: <Droplets className="size-6" />,
            title: 'High Moisture Absorption',
            description:
              'PA materials are highly hygroscopic, meaning they readily absorb moisture from the environment. This can lead to significant changes in mechanical properties, such as reduced strength and stiffness, as well as dimensional instability, particularly in thin-walled applications. High moisture content during injection molding can also cause surface defects like splay marks (streaking or silver-like marks) as the moisture turns into steam during the process, disrupting the polymer flow.',
          },
          {
            icon: <Scale className="size-6" />,
            title: 'Shrinkage and Warpage',
            description:
              "PA materials experience relatively high shrinkage during the cooling phase of injection molding. This shrinkage can cause parts to distort or warp, especially for complex shapes with varying wall thicknesses. Uneven shrinkage between thick and thin sections can lead to warping, which can affect the part's precision, requiring additional rework or even rejection. Warped parts may also present challenges in assembly, as they may not fit properly with other components, increasing production costs.",
          },
          {
            icon: <Thermometer className="size-6" />,
            title: 'Limited Heat Resistance',
            description:
              'Although some grades of PA have good heat resistance, many standard formulations have limited ability to withstand high temperatures. For applications exposed to elevated temperatures, such as automotive engine compartments or areas near heat-generating components, PA parts may soften, deform, or lose their mechanical properties. This can cause failure in parts that require long-term stability under heat, such as housing for electronic devices in high-temperature environments.',
          },
          {
            icon: <Beaker className="size-6" />,
            title: 'Chemical Sensitivity',
            description:
              "PA materials can be sensitive to certain chemicals, such as strong acids and bases. Exposure to these substances can lead to hydrolysis, which breaks down the polymer chains and reduces the material's strength and durability. In environments where PA parts may come into contact with chemicals, this sensitivity can limit their use unless materials specifically resistant to chemicals are chosen.",
          },
          {
            icon: <Sun className="size-6" />,
            title: 'Limited UV Resistance',
            description:
              'PA has limited resistance to ultraviolet (UV) light. Prolonged exposure to UV radiation from sunlight or other sources can cause degradation, resulting in discoloration (e.g., browning) and eventual cracking of the material. This degradation compromises the mechanical integrity of PA parts, especially in outdoor applications or products requiring long-term exposure to sunlight.',
          },
          {
            icon: <Settings className="size-6" />,
            title: 'Strict Processing Requirements',
            description:
              "The injection molding process for PA materials requires precise control over parameters such as temperature, moisture content, and injection speed. Even slight moisture content can lead to defects, such as warping or dimensional instability. Additionally, PA's thermal expansion properties require careful monitoring during molding to ensure dimensional accuracy and consistency.",
          },
          {
            icon: <Ruler className="size-6" />,
            title: 'Difficulty Achieving Uniform Wall Thickness',
            description:
              'Achieving uniform wall thickness is crucial when molding PA parts. Variations in wall thickness can cause stress concentrations, which increase the likelihood of warping or cracking during cooling. Parts with uneven thickness are especially prone to such issues, making uniformity a key challenge in PA injection molding, particularly for complex geometries.',
          },
          {
            icon: <Beaker className="size-6" />,
            title: 'Limited Chemical Resistance',
            description:
              'While PA has some degree of chemical resistance, it is not suitable for all chemical environments. Strong acids, alkalis, and some solvents can degrade PA, affecting its mechanical properties and limiting its use in chemical processing environments where higher chemical resistance is required.',
          },
          {
            icon: <Hammer className="size-6" />,
            title: 'Brittleness',
            description:
              "Certain grades of PA may exhibit brittleness, particularly when exposed to low temperatures. This can lead to cracking or shattering under impact or stress, reducing the material's toughness. Parts exposed to harsh conditions or requiring high impact resistance may not perform adequately when made from PA materials.",
          },
          {
            icon: <CircleDollarSign className="size-6" />,
            title: 'High Initial Costs and Technical Expertise',
            description:
              'PA injection molding requires high-quality molds and specialized machinery, leading to significant initial investment costs. Additionally, the complexity of processing PA materials demands experienced operators and designers who understand the intricacies of PA molding. This high technical requirement can increase both the upfront costs and the operational difficulties, especially for intricate designs or custom applications.',
          },
          {
            icon: <Recycle className="size-6" />,
            title: 'Difficult to Recycle',
            description:
              'Although PA materials are technically recyclable, the recycling process can be difficult and costly. Contamination or degradation during use can complicate the recycling process, and specialized facilities may be required for proper recycling. This reduces the overall sustainability and environmental benefits of PA materials compared to other more easily recyclable options.',
          },
          {
            icon: <Palette className="size-6" />,
            title: 'Limited Color Stability',
            description:
              'PA materials can be molded into a variety of colors, but they may not retain their color stability over time. Exposure to UV light, heat, and environmental factors can cause color fading or changes in appearance, which can affect the aesthetic quality of products, particularly for consumer-facing applications.',
          },
        ]}
        columns={3}
      />
    </TextWrapper>
  );
}
