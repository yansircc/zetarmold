// 定义表格数据结构
interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

// 定义列表数据结构
interface ListItem {
  title?: string;
  content: string;
}

// 定义每个section的数据结构
export interface SectionData {
  heading: string;
  description: string;
  subSections?: {
    title: string;
    content: string;
  }[];
  images?: {
    url: string;
    alt: string;
  }[];
  video?: {
    youtubeUrl?: string;
    thumbnailUrl?: string;
  };
  table?: TableData;
  list?: ListItem[];
}

// 示例数据
export const absSections: SectionData[] = [
  {
    heading: 'What is Acrylonitrile Butadiene Styrene (ABS)?',
    description:
      'ABS (Acrylonitrile Butadiene Styrene) is a type of plastic that is used in a lot of different things like making stuff, building stuff, and things people buy. It is made up of three different things: acrylonitrile (which makes it strong and hard), butadiene (which makes it tough and not break), and styrene (which makes it shiny and easy to make). ABS has a lot of good things about it, like it is really hard to break, it can be used with a lot of different chemicals (like acid or stuff that is really strong), it can get really hot or really cold and it won’t change shape, it is really good at stopping electricity, and it costs a little bit to make, so it is cheap to buy. It is easy to make things with ABS, like using a machine that squishes it into a shape or using a 3D printer.\n\nABS has a lot of uses. You can find it in toys (like LEGO bricks), appliances, car parts (like bumpers and dashboards), medical devices (like syringes), construction materials (like pipes and fittings), and electrical parts (like connectors and switches). ABS is made by mixing chemicals together in a big tank. The mixture is then heated up and turned into a solid. This makes ABS strong and long-lasting. ABS can also be melted down and made into something new. This makes ABS a good choice for the environment and for saving money. Overall, ABS is a good plastic that can be used for a lot of things. It works well, doesn’t cost too much, and can be used in many different ways.',
    images: [
      {
        url: 'https://zetarmold.com/wp-content/uploads/2024/10/%E6%9C%AA%E6%A0%87%E9%A2%98-1-671x1024.jpg',
        alt: 'ABS Material Structure',
      },
    ],
  },
  {
    heading: 'Types of ABS Material',
    description:
      'ABS plastics come in various grades and formulations, each optimized for specific applications. Here are the main types of ABS materials used in injection molding:',
    list: [
      {
        title: '1. General-purpose ABS:',
        content:
          'The most common type is general-purpose ABS, which has good impact resistance, chemical resistance, and processability. It is easy to mold and is suitable for making consumer goods, electronic product housings, automotive interiors, and toys. It is widely used in many industries because of its comprehensive performance.',
      },
      {
        title: '2. High-impact ABS:',
        content:
          'High-impact ABS is designed to enhance impact resistance while maintaining rigidity. It is used in protective gear, tool handles, and external automotive parts that need to withstand high impact forces, performing well in mechanically demanding environments.',
      },
      {
        title: '3. Flame-retardant ABS:',
        content:
          'Flame retardant ABS is a material that has flame retardants added to it. It is used in applications where fire safety is important, such as electrical equipment and car parts. It helps to reduce the risk of fire and keep people safe.',
      },
      {
        title: '4. Heat-resistant ABS:',
        content:
          'Heat-resistant ABS is made to withstand high temperatures without deforming, keeping its mechanical properties. It is often used in parts that need to stay stable at high temperatures, like car dashboards and inside household appliances, so they keep working even when things get really hot.',
      },
      {
        title: '5. Low-smoke ABS:',
        content:
          'Low-smoke ABS is a type of ABS that has been modified with additives to reduce the amount of smoke it emits when it burns. This makes it ideal for applications where there are strict environmental requirements, such as aircraft and medical devices. By reducing the amount of harmful smoke that is released during a fire, this material can help to improve safety.',
      },
      {
        title: '6. UV-resistant ABS:',
        content:
          "UV-resistant ABS is treated to resist degradation caused by ultraviolet exposure. It's perfect for outdoor applications like outdoor furniture and signage. It extends product lifespan and keeps things looking good.",
      },
      {
        title: '7. Glass-filled ABS:',
        content:
          'Glass-filled ABS is a material that adds glass fibers to enhance its mechanical properties, such as stiffness and impact resistance. It is commonly used in automotive parts and sports equipment that require high mechanical strength to ensure reliability under harsh conditions.',
      },
      {
        title: '8. Mineral-filled ABS:',
        content:
          'Mineral-filled ABS is a cost-effective way to improve performance by adding mineral powders (like calcium carbonate). This material is often used in applications where cost is a concern, but performance is still important.',
      },
      {
        title: '9. Transparent ABS:',
        content:
          'Transparent ABS is a special kind of ABS that is modified to be transparent while still maintaining some impact resistance. It is good for products that need to look good, like display cases and clear packaging, because it looks nice but is still strong.',
      },
      {
        title: '10. ABS Alloys (such as ABS/PC and ABS/PET):',
        content:
          'ABS alloys are a mix of ABS with polycarbonate (PC) or polyethylene terephthalate (PET), combining the best of both worlds. This material is great for impact resistance, heat resistance, and optical clarity, making it perfect for high-end consumer goods and electronic housings.',
      },
    ],
    images: [
      {
        url: 'https://zetarmold.com/wp-content/uploads/2024/10/11-3-331x1024.jpg',
        alt: 'ABS Injection Molding Guide',
      },
    ],
  },
  {
    heading: 'What are the characteristics of ABS?',
    description:
      'ABS (Acrylonitrile-Butadiene-Styrene) is a super useful plastic that can do a lot of things. It’s strong, tough, and can take a hit, plus it’s easy to work with. That’s why you’ll find ABS in all kinds of stuff, from cars to toys. Here are the key characteristics that define ABS material:',
    list: [
      {
        title: '1. High Strength and Impact Resistance:',
        content:
          'One thing that’s really great about ABS materials is that they’re super tough. They can take a beating and not crack or break, which makes them perfect for stuff that needs to be strong and take a lot of abuse, like car parts and big plastic boxes for machines.',
      },
      {
        title: '2. High Toughness:',
        content:
          'ABS has great toughness, so it can absorb impacts even at very low temperatures, which means it won’t break when you drop it. This is especially important for outdoor products and things you use in cold places.',
      },
      {
        title: '3. Hardness:',
        content:
          'ABS has a moderate surface hardness, which means it can resist scratches and wear. This makes it last longer when you use it to make things that rub together a lot.',
      },
      {
        title: '4. Heat Resistance:',
        content:
          'ABS has good heat resistance and can withstand temperatures of 80-85°C without getting soft or losing strength. But if you go hotter than that, it will start to break down and get brittle. So be careful if you need something that can take a lot of heat.',
      },
      {
        title: '5. Low-temperature Resistance:',
        content:
          'ABS is not only resistant to high temperatures, but it also performs well in low-temperature environments. It remains tough and doesn’t get brittle. That’s why ABS is used in a lot of products that have to work in different temperature environments, like outdoor equipment or things used in cold regions.',
      },
      {
        title: '6. Good Electrical Insulation:',
        content:
          'ABS materials are insulators with very high resistivity and do not conduct electricity, making them particularly suitable for the electronics and electrical fields, especially for components that require insulation protection. Its insulation performance remains stable in environments with significant humidity and temperature fluctuations.',
      },
      {
        title: '7. Limited Thermal Conductivity:',
        content:
          'While ABS is mostly known for its insulation properties, it still has some thermal conductivity, which can help dissipate heat in certain applications, keeping devices at lower operating temperatures.',
      },
      {
        title: '8. Chemical Resistance:',
        content:
          'ABS is resistant to many chemicals, including acids, bases, and salts, which makes it a good choice for applications in the chemical industry where the environment is only mildly corrosive. However, some strong solvents, like acetone or some chlorinated hydrocarbons, can degrade or soften ABS, so be careful when choosing materials for these chemical environments.',
      },
      {
        title: '9. Solvent Resistance:',
        content:
          'In everyday applications, ABS has good resistance to most common household solvents, making it suitable for products such as kitchen utensils and appliance housings, which are not easily damaged by solvent contact.',
      },
      {
        title: '10. Easy to Process:',
        content:
          'ABS is a thermoplastic that can be easily processed into different shapes and sizes, which is great for common processes like injection molding, extrusion, and blow molding. It flows well and is very malleable, so you can make complicated molds during production, which speeds up the process and makes it more efficient.',
      },
      {
        title: '11. Convenient Surface Treatment:',
        content:
          'ABS has a smooth surface and good processing performance. Through processes like painting and electroplating, ABS products can look better and be more wear and corrosion resistant, so they’re popular in high-demand aesthetic design applications.',
      },
      {
        title: '12. Moisture Resistance:',
        content:
          'ABS has low moisture absorption, so it keeps its mechanical properties and doesn’t get all wonky in humid environments. That’s why it’s good for outdoor stuff and things that get wet a lot, like gardening tools and boat parts.',
      },
      {
        title: '13. UV Sensitivity:',
        content:
          'ABS is great in many ways, but it doesn’t like the sun. It can turn yellow and get weak if it’s left outside for a long time. So, if you’re going to use ABS outside, you need to do something to protect it from the sun.',
      },
      {
        title: '14. Recyclability:',
        content:
          'ABS is a recyclable plastic, and in both industrial and everyday life, you can reuse recycled ABS materials to make new products. This makes ABS a great choice for many companies looking for environmentally friendly materials.',
      },
    ],
    images: [
      {
        url: 'https://zetarmold.com/wp-content/uploads/2024/10/5ctfrvygtbnhuijmkol.55-330x1024.jpg',
        alt: 'ABS Injection Molding Guide',
      },
    ],
  },
  {
    heading: 'What are the properties of ABS?',
    description:
      'ABS, or Acrylonitrile Butadiene Styrene, is a thermoplastic polymer that’s used in a lot of stuff. It’s got a bunch of good things going for it that make it useful in a bunch of different industries. Below are the key properties parameter of ABS:',
    table: {
      headers: ['Property', 'Metric', 'English'],
      rows: [
        ['Density', '0.882 - 3.50 g/cc', '0.0319 - 0.126 lb/in³'],
        ['Water Absorption', '0.0250 - 2.30 %', '0.0250 - 2.30 %'],
        [
          'Moisture Absorption at Equilibrium',
          '0.100 - 0.300 %',
          '0.100 - 0.300 %',
        ],
        [
          'Water Absorption at Saturation',
          '0.00950 - 1.03 %',
          '0.00950 - 1.03 %',
        ],
        ['Maximum Moisture Content', '0.0100 - 0.150', '0.0100 - 0.150'],
        [
          'Linear Mold Shrinkage',
          '0.000 - 0.0290 cm/cm',
          '0.000 - 0.0290 in/in',
        ],
        [
          'Linear Mold Shrinkage, Transverse',
          '0.00200 - 0.00900 cm/cm',
          '0.00200 - 0.00900 in/in',
        ],
        ['Melt Flow', '0.0800 - 125 g/10 min', '0.0800 - 125 g/10 min'],
        [
          'Electrical Resistivity',
          '1500 - 1.00e+18 ohm-cm',
          '1500 - 1.00e+18 ohm-cm',
        ],
        ['Surface Resistance', '1000 - 2.00e+17 ohm', '1000 - 2.00e+17 ohm'],
        ['Dielectric Constant', '2.70 - 3.80', '2.70 - 3.80'],
        ['Dielectric Strength', '15.7 - 53.0 kV/mm', '400 - 1350 kV/in'],
        ['Transmission, Visible', '0.000 - 90.0 %', '0.000 - 90.0 %'],
        ['Processing Temperature', '170 - 270 ℃', '338 - 518 ℉'],
        ['Nozzle Temperature', '180 - 310 ℃', '356 - 590 ℉'],
        ['Adapter Temperature', '200 - 300 ℃', '392 - 572 ℉'],
        ['Die Temperature', '200 - 295 ℃', '392 - 563 ℉'],
        ['Melt Temperature', '149 - 323 ℃', '300 - 613 ℉'],
        ['Mold Temperature', '10.0 - 120 ℃', '50.0 - 248 ℉'],
        ['Injection Velocity', '200 - 240 mm/sec', '7.87 - 9.45 in/sec'],
        ['Roll Temperature', '60.0 - 150 ℃', '140 - 302 ℉'],
        ['Drying Temperature', '60.0 - 120 ℃', '140 - 248 ℉'],
        ['Moisture Content', '0.0100 - 0.300 %', '0.0100 - 0.300 %'],
        ['Dew Point', '-29.0 - -17.8 ℃', '-20.2 - 0.000 ℉'],
        ['Injection Pressure', '4.14 - 130 MPa', '600 - 18900 psi'],
        ['Vent Depth', '0.00254 - 0.0510 cm', '0.00100 - 0.0201 in'],
      ],
    },
  },
  {
    heading: 'Can ABS materials be injection molded?',
    description:
      'Yeah, ABS (Acrylonitrile-Butadiene-Styrene copolymer) can be injection molded, and injection molding is one of the most common processes for making ABS parts. ABS is a tough, impact-resistant plastic that’s used a lot in cars, household appliances, and electronics.',
    video: {
      youtubeUrl: 'https://www.youtube.com/watch?v=CQjhioKnPB0',
      thumbnailUrl: 'https://img.youtube.com/vi/CQjhioKnPB0/0.jpg',
    },
    subSections: [
      {
        title: 'Advantages of ABS materials:',
        content:
          '① Great Flowability: ABS has great flowability, which makes it perfect for complex mold designs.\n ② Great Dimensional Stability: ABS can keep its dimensions and shape even after it cools.\n ③ Great Impact Resistance: ABS is known for its great impact resistance, which makes it perfect for applications that need impact resistance.\n ④ Low Warpage: ABS is less likely to get deformed or warped during the molding process, which makes sure the product looks good and is high quality.\n ⑤ Good Surface Finish: ABS has a smooth surface finish, which makes it perfect for applications that need a good surface finish.\n ⑥ Good Colorability: ABS can be colored easily, which makes it perfect for applications that need a specific color.\n ⑦ Good Processability: ABS can be processed easily, which makes it perfect for applications that need a specific color.',
      },
      {
        title: 'Challenges in ABS Injection Molding Process:',
        content:
          '① High shrinkage rate: ABS shrinks a lot when it cools down, which makes it hard to get the right size.\n' +
          '② Flashing: Sometimes, when you’re making something out of ABS, you get extra plastic where you don’t want it. Then you have to fix it.\n' +
          '③ Warping issues: If you don’t make the mold right or you don’t do the process right, your thing will get bent.',
      },
    ],
  },
  {
    heading: 'What are the key considerations for ABS Injection Molding?',
    description:
      'ABS (Acrylonitrile-Butadiene-Styrene) is a common plastic that’s used in a lot of different industries, like electronics and automotive. If you want to make sure that you’re getting good ABS injection molded parts, you need to pay attention to a few things:',
    list: [
      {
        title: '1. Material Preparation:',
        content:
          '① Moisture Control: ABS plastic sucks up moisture, and too much moisture can make it look bad and not work as good. So, dry it at 80-90°C for 2-3 hours, and keep the moisture below 0.1%.' +
          '\n② Material Selection: Choose the right ABS material based on your product requirements (like impact-resistant, heat-resistant, electroplating grade, etc.). If you’re using recycled material, make sure you don’t use more than 30% recycled material, or it’ll affect the quality of your finished product.',
      },
      {
        title: '2. Mold Design:',
        content:
          '① Reasonable Mold Design: To reduce warping, shrinkage, and other issues, mold design should make sure the material flows evenly and doesn’t get stuck. The draft angle setting helps parts come out smoothly, and the gate position should be good so the material doesn’t have to go too far.' +
          '\n② Mold Cooling: Cooling is very important. It is recommended to use water-cooled molds and design cooling channels reasonably to make the cooling effect consistent and prevent product deformation.',
      },
      {
        title: '3. Injection Molding Process Parameters:',
        content:
          '① Injection Temperature: The injection temperature for ABS usually ranges from 200°C to 275°C. Different grades of ABS materials have different injection temperatures. For example, impact-resistant ABS is 220°C to 260°C, while electroplating grade is 250°C to 275°C.' +
          '\n② Injection Pressure: Injection pressure has a big impact on the quality of the molding. Generally, the injection pressure is between 50 MPa and 100 MPa. If the pressure is too low, the mold won’t fill up completely. If the pressure is too high, the mold will stick.' +
          '\n③ Injection Speed: Injection speed is super important. If it’s too fast, you’ll get too much stress and the part will shrink and warp. If it’s too slow, you’ll get short shots or little black specks.',
      },
      {
        title: '4. Cooling Time and Holding Time:',
        content:
          '① Cooling Time: If the cooling time is too short, the product will have internal stress; if the cooling time is too long, the production efficiency will be affected. Reasonable cooling time is to ensure that the plastic in the mold can be cooled and solidified, generally controlling the cooling water temperature at 75-85°C.' +
          '\n② Hold Time: Controlling the hold time between 2-5 seconds will help the plastic fully solidify, preventing the product from deforming or flowing back.',
      },
      {
        title: '5. Post-molding Processing and Inspection:',
        content:
          '① Post-molding Processing: ABS finished products may need trimming, deburring, and other treatments to make sure they are smooth and look good. For electroplating grade products, you also have to bake the surface to get rid of surface marks.' +
          '\n② Quality Control: After molding, we need to strictly check the appearance, size, and performance of the product to ensure that the product meets the quality requirements. Common inspection methods include non-destructive testing and visual inspection.',
      },
      {
        title: '6. Nozzle and Temperature Control:',
        content:
          'Nozzle Temperature: The nozzle temperature should be controlled within a reasonable range, typically set slightly lower than the melt temperature to avoid overheating or decomposition of the melt, causing surface defects in the product.',
      },
      {
        title: '7. Cost and Time Management:',
        content:
          'Cost Optimization: Optimize the flow, reduce material, labor, and equipment costs. Manage production time effectively to shorten production cycles and improve efficiency.',
      },
    ],
  },
  {
    heading: 'How to Perform ABS Injection Molding: A Step-by-Step Guide',
    description:
      'ABS injection molding is a widely used plastic processing technology in various industries. It has excellent mechanical properties and good processability, and is used to produce various complex parts. The following are the detailed steps of ABS injection processing, from raw material preparation to finished product packaging, each step is very important.',
    images: [
      {
        url: 'https://zetarmold.com/wp-content/uploads/elementor/thumbs/789546-qw44tm94sm5dsi33cdmz5wqc9bc8zz3unrbfxxnls6.jpg',
        alt: 'ABS Injection Molding Guide',
      },
      {
        url: 'https://zetarmold.com/wp-content/uploads/elementor/thumbs/weqeq-qw44x636m30h4ovj8ugyfmd4po6a70fuitrwr63lww.jpg',
        alt: 'ABS Injection Molding Guide',
      },
      {
        url: 'https://zetarmold.com/wp-content/uploads/elementor/thumbs/zetar6756_A_modern_factory_with_a_high-tech_injection_molding_f7dd8616-34c4-4de9-a53e-c95eb4bb2b68_2-qw457gflet3kadeg1iagfg2qu95qoxobsfws8s5hmg.jpg',
        alt: 'ABS Injection Molding Guide',
      },
    ],
    list: [
      {
        title: '1. Raw Material Preparation:',
        content:
          '① Selection of ABS Pellets: Start by picking the right ABS grade for your parts’ application requirements, with an emphasis on impact resistance, heat deflection temperature, weatherability, and color considerations. Make sure the material you choose meets your final product’s performance requirements.' +
          '\n② Drying ABS Pellets: ABS is hygroscopic, so it needs to be dried at 80-90°C for 1-2 hours to get the moisture content below 0.1%. This is important because if you don’t dry it properly, you’ll get bubbles and voids when you’re injection molding, and you’ll end up with parts that have a rough surface.' +
          '\n③ Preheating Treatment: To make the material flow better, preheat the ABS pellets to 180-200°F (82-93°C). This will help the material flow better during injection molding and make the finished part have a better surface finish.',
      },
      {
        title: '2. Mold Design and Preparation:',
        content:
          '① Mold Design: The mold design should comprehensively consider the geometry of the parts, material characteristics, and production requirements. Pay attention to the uniformity of the wall thickness to avoid deformation and dents in the parts. Ventilation design is also important. Make sure the mold can be well-vented during injection to reduce bubbles and incomplete filling. In addition, the mold design should consider the shrinkage rate of the material to ensure the dimensional accuracy of the finished product.' +
          '\n② Mold Preparation: Before you start injection molding, you need to check the mold to make sure it’s clean and doesn’t have any problems. You can put some release agent on it to help the part come out easier. Once the mold is hot, you can put it on the machine to get it ready. This way, you’ll be all set and can make parts faster.',
      },
      {
        title: '3. Machine Settings and Calibration:',
        content:
          'Parameter Settings: The settings of the injection machine are key to ensuring the smooth progress of ABS injection molding, typically recommended as follows:' +
          '\n① Injection Pressure: 10,000-20,000 psi (690-1380 bar).' +
          '\n② Injection Speed: 10-50 mm/s (0.4-2.0 in/s).' +
          '\n③ Holding Pressure: 5,000-10,000 psi (345-690 bar).' +
          '\n④ Cooling Time: 10-30 seconds.' +
          '\n⑤ Machine Calibration: To make sure the quality of the final product, the temperature control system of the injection machine needs to be calibrated to make sure the processing temperature is within the processing range of ABS, achieving precise control and stable production.',
      },
      {
        title: '4. Injection Molding Process:',
        content:
          '① Material Loading: Load the ABS pellets into the hopper of the injection machine. Make sure the pellets go into the machine evenly so it doesn’t get clogged up and stop working.' +
          '\n② Injecting Process: The ABS beads are melted in a high-temperature environment of 180-240°C, and then injected into the mold cavity under high pressure, ensuring that the molten material can fully fill the mold and avoid early cooling that leads to insufficient filling.' +
          '\n③ Holding Pressure and Cooling: After the plastic is injected, the machine will hold pressure to make sure the plastic fills the mold cavity completely and to avoid any voids. After that, the parts will cool and harden inside the mold. The cooling time depends on how thick and how complicated the parts are. Normally, it takes 1-3 minutes to make sure the parts are completely solidified.',
      },
      {
        title: '5. Mold Opening and Ejection:',
        content:
          '① Mold Opening: After cooling is done, the machine will slowly open the mold. Be careful not to open the mold too fast, or you might mess up the parts. This is especially important for parts with a lot of details or thin walls.' +
          '\n② Ejection: The machine will push the molded ABS parts out of the mold while removing any excess material (like flash) from the surface or parting line to make sure the parts look good.',
      },
      {
        title: '6. Quality Inspection:',
        content:
          '① Defect Inspection: The produced parts must go through a thorough quality inspection. We need to check for warping, dents, bubbles, flash, color differences, or any other surface defects.' +
          '\n② Dimensional and Functional Testing: You also need to test the dimensions and functions to make sure the parts meet the requirements in the drawings. If necessary, test the mechanical properties and other important parameters to see if the products are stable and can last long in real life.',
      },
      {
        title: '7. Post-molding Processing:',
        content:
          '① Trimming and Surface Treatment: If you’re looking for a product with a high surface treatment requirement, you might need to do some secondary processing. For example, you might need to sand, polish, or spray your product. Sanding can remove any surface irregularities, while spraying can add color or a functional coating to your product.' +
          '\n② Assembly and Packaging: If you need to assemble the molded parts, you should do it according to the design drawings. During this process, you must strictly control every step to make sure the assembled products meet the requirements for use. Finally, you should package the qualified products according to the requirements and store them for transportation.',
      },
    ],
  },
];
