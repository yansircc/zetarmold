import type { Feature } from '@/components/sections/VerticalScrollingItems';
import type { GalleryItem } from '@/components/sections/gallery';
import type { DatItem } from '@/components/ui/card-2';
export const PAGE_HEADER = {
  title: 'Quality Assurance',
  description:
    'Our company has been dedicated to providing high-quality injection molding services since 2005. Over the years, we have grown from a small mold-making company to a comprehensive manufacturing enterprise that offers a wide range of services.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
};

const QC_EQUIPMENT_ITEMS = [
  {
    title: 'Coordinate Measuring Machine - CMM',
    description:
      'The Coordinate Measuring Machine (CMM) is crucial in mold processing for ensuring dimensional accuracy and verifying complex geometries. It measures the physical geometrical characteristics of an object using a probe, ensuring parts meet precise specifications.',
    image: 'https://zetarmold.com/wp-content/uploads/2024/04/image-1.png',
  },
  {
    title: 'Profile Projector',
    description:
      'The Profile Projector, also known as an optical comparator, is used to measure the dimensions of small parts by projecting their magnified shadow onto a screen. In CNC machining, it is essential for inspecting the precision of intricate features.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8711-1.png',
  },
  {
    title: 'NEMESIS Hardness Tester',
    description:
      'The NEMESIS Hardness Tester is used to measure the hardness of materials, which is critical in mold manufacturing to ensure durability and wear resistance. It helps in selecting the right material for specific applications.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8712.png',
  },
  {
    title: 'Shore Hardness Tester',
    description:
      'The Shore Hardness Tester measures the hardness of polymers, elastomers, and rubbers used in mold processing. It ensures that materials have the appropriate hardness for their intended use, affecting the quality and lifespan of the final product.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8713.png',
  },
  {
    title: 'Height Gauge',
    description:
      'The Height Gauge is used to measure the height of objects or to mark workpieces. In CNC and mold processing, it is vital for setting precise heights and ensuring consistency in production.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8714.png',
  },
  {
    title: 'Calliper',
    description:
      'The Calliper is a versatile tool for measuring the distance between two opposite sides of an object. In CNC machining, it is indispensable for quick and accurate measurements of internal and external dimensions.',
    image: 'https://zetarmold.com/wp-content/uploads/2024/04/image.png',
  },
  {
    title: 'Gear Tester',
    description:
      'The Gear Tester is used to evaluate the quality and precision of gears produced through CNC machining. It checks parameters such as tooth profile, pitch, and runout, ensuring gears operate smoothly in mechanical assemblies.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8716.png',
  },
  {
    title: 'Thickness Gauge',
    description:
      'The Thickness Gauge measures the thickness of materials, coatings, or films. In mold processing, it ensures that coatings or plating on molds are within specified tolerances, affecting mold performance and longevity.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8717.png',
  },
  {
    title: 'Gloss Meter',
    description:
      'The Gloss Meter measures the gloss of surfaces to ensure the desired visual appearance of finished products. It is particularly important in industries where surface finish quality is critical, such as automotive or consumer goods.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8719.png',
  },
];

export const QC_EQUIPMENT = {
  title: 'QC Equipment',
  description:
    'We use the latest and most advanced quality control equipment to ensure that our products are of the highest quality.',
  items: QC_EQUIPMENT_ITEMS,
};

const QC_PROCESS_FEATURES: Feature[] = [
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8722-1.png',
      alt: 'Dedicated Support',
    },
    title: 'Incoming Quality Control',
    description: 'Started with a vision to revolutionize the industry.',
  },
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8722-2.png',
      alt: 'Series B Funding',
    },
    title: 'In-Process Quality : Samples Checking',
    description: 'Started with a vision to revolutionize the industry.',
  },
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8723-1.png',
      alt: 'Product Launch',
    },
    title: 'In-Process Quality: Process inspection',
    description: 'Started with a vision to revolutionize the industry.',
  },
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8723-2.png',
      alt: 'Company Founded',
    },
    title: 'In-Process Quality: Packaging& Assembly Inspection',
    description: 'Started with a vision to revolutionize the industry.',
  },
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8726.jpg',
      alt: 'Company Founded',
    },
    title: 'Final Quality Control',
    description: 'Started with a vision to revolutionize the industry.',
  },
  {
    image: {
      url: 'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8727.png',
      alt: 'Company Founded',
    },
    title: 'Out-going Quality Control',
    description: 'Started with a vision to revolutionize the industry.',
  },
];

export const QC_PROCESS = {
  title: 'Quality Control Process',
  description:
    'We have a strict quality control process to ensure that our products are of the highest quality.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
  features: QC_PROCESS_FEATURES,
};

const CERTIFICATION_ITEMS: DatItem[] = [
  {
    title: 'ISO 9001',
    image: 'https://zetarmold.com/wp-content/uploads/2023/04/ISO-9001.jpg',
    description:
      'ISO 9001 outlines the requirements for a quality management system in injection molding manufacturing and is the sole standard for this.',
  },
  {
    title: 'ISO 13485',
    image:
      'https://zetarmold.com/wp-content/uploads/2023/06/ISO13485-1-1085x1536.png',
    description:
      'ISO 13485 sets the standards for a quality management system where an organization must prove it can consistently deliver medical devices and related services that meet both customer expectations and regulatory obligations.',
  },
  {
    title: 'ISO 14001',
    image: 'https://zetarmold.com/wp-content/uploads/2023/04/ISO14001.jpg',
    description:
      'ISO 14001 lays down the guidelines for an environmental management system and offers certification for it.',
  },
  {
    title: 'ISO 45001',
    image: 'https://zetarmold.com/wp-content/uploads/2023/04/ISO-45001.jpg',
    description:
      "Our ISO 45001 certification shows Zetar's dedication to keeping a safe and healthy workplace for our team. This means our team can work at their best, leading to higher quality products and quicker production times for you.",
  },
];

export const CERTIFICATION = {
  title: 'Certification',
  description:
    'Just email us, we can provide the original of the certification for you.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
  items: CERTIFICATION_ITEMS,
};

{
  /* 



    title: 'Colorimeter',
    description:
      'The Colorimeter is used to measure the color of surfaces, which is important in industries requiring aesthetic consistency. In mold processing, it ensures that colored plastic parts meet design specifications.',
    image:
      'https://zetarmold.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%8718.png',
  },


*/
}
