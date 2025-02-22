import type { BasicInfo } from '../types';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const basicInfo: BasicInfo = {
  title: 'Frequently Asked Questions',
  description:
    'Discover perfect small batch mold steel solutions with Zetar Mold. Enhance precision and flexibility for superior manufacturing results.',
};

export const faqs: FaqItem[] = [
  {
    id: 'what-is-small-batch',
    question: 'What is Small Batch Injection Molding?',
    answer: `
      <p><strong>Definition:</strong> A manufacturing process bridging prototype development and mass production, typically producing 100-10,000 components.</p>

      <p><strong>Core advantages:</strong></p>
      <ul>
        <li>Low initial cost</li>
        <li>Rapid delivery (2-4 weeks)</li>
        <li>Process flexibility</li>
      </ul>

      <p>Ideal for product validation, market testing, or customized small-batch orders. This method is cost-effective and allows for quick design adjustments, helping businesses respond faster to market demands.</p>
    `,
  },
  {
    id: 'small-batch-steel-definition',
    question: 'What defines small-batch injection mold steel?',
    answer: `
      <p>Small-batch injection mold steel materials must balance cost, durability, and processing efficiency to ensure efficient production while maintaining flexibility. Commonly used types include:</p>

      <p><strong>1. Pre-hardened Mold Steel (e.g., P20, 718H)</strong></p>
      <ul>
        <li>Pre-hardened to HRC 30-40 upon delivery, eliminating the need for additional heat treatment.</li>
        <li>Suitable for small to medium batch production, offering a good balance of durability and cost.</li>
      </ul>

      <p><strong>2. Aluminum Mold Materials (e.g., 7075 aluminum alloy)</strong></p>
      <ul>
        <li>Ideal for extremely low-cost and rapid turnaround molds, significantly reducing initial tooling expenses.</li>
        <li>Service life: Approximately 10,000 injection cycles.</li>
        <li>Best suited for prototype verification and ultra-small batches, typically in the hundreds of parts.</li>
      </ul>

      <p><strong>3. High-Wear-Resistant Steel (e.g., H13, RM2)</strong></p>
      <ul>
        <li>Used for producing high-precision parts or when processing abrasive materials like glass-filled plastics.</li>
        <li>Offers extended lifespan; RM2 steel, for example, can last 2-20 times longer than traditional 3Cr2W8V steel, making it suitable for larger production runs and demanding materials.</li>
      </ul>
    `,
  },
  {
    id: 'technical-features',
    question:
      'What are the technical features of small batch injection molding?',
    answer: `
      <p><strong>Key Technical Features:</strong></p>

      <p><strong>1. Mold Economy</strong></p>
      <ul>
        <li><strong>Cost Reduction:</strong> Utilizes simplified tooling and materials like aluminum for molds, achieving a 60-85% reduction in initial tooling costs compared to conventional steel molds.</li>
      </ul>

      <p><strong>2. Material Versatility</strong></p>
      <ul>
        <li><strong>Wide Material Compatibility:</strong> Compatible with a broad range of engineering thermoplastics, including ABS, PC, and PA66, allowing for diverse product applications.</li>
        <li><strong>Customization Options:</strong> Supports custom color formulations, enabling product differentiation and branding.</li>
      </ul>

      <p><strong>3. Cycle Efficiency</strong></p>
      <ul>
        <li><strong>Optimized Production Speed:</strong> Achieves per-part cycle times ranging from 15 to 90 seconds, significantly faster than additive manufacturing (3D printing) and CNC machining for batch production.</li>
      </ul>
    `,
  },
  {
    id: 'application-scenario',
    question: 'When should I use each type of mold steel?',
    answer: `
      <p><strong>Application Scenario Comparison:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Recommended Mold Steel</th>
            <th>Typical Lifespan (Cycles)</th>
            <th>Applicability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prototype Verification/Ultra-Small Batches</td>
            <td>7075 Aluminum</td>
            <td>500-5,000</td>
            <td>Low-cost rapid iteration</td>
          </tr>
          <tr>
            <td>Small-Medium Batch Production</td>
            <td>Pre-hardened Steel (P20/718H)</td>
            <td>50,000-100,000</td>
            <td>Cost-durability balance</td>
          </tr>
          <tr>
            <td>High-Precision/Wear Resistance Needs</td>
            <td>High-Strength Hot-Work Steel (H13/RM2)</td>
            <td>>200,000</td>
            <td>Glass-filled materials/precision parts</td>
          </tr>
        </tbody>
      </table>
    `,
  },
  {
    id: 'how-to-choose-mold-steel',
    question: 'How to Choose Mold Steel Types for Small-Batch Needs?',
    answer: `
      <p>Choosing the right mold steel for small-batch injection molding depends on several factors, primarily balancing cost with production needs. Here’s a guide:</p>

      <p><strong>1. Batch Size and Lifespan Expectancy:</strong></p>
      <ul>
        <li><strong>Ultra-Small Batches (Prototypes, < 5,000 cycles):</strong> Aluminum molds (e.g., 7075) are ideal due to their low cost and rapid turnaround. They are sufficient for prototype verification and initial market testing.</li>
        <li><strong>Small to Medium Batches (Up to 100,000 cycles):</strong> Pre-hardened steels (e.g., P20, 718H) offer a cost-effective balance of durability and machinability. They are suitable for pilot production runs and market validation batches.</li>
        <li><strong>Larger Small Batches & Demanding Materials (> 100,000 cycles, abrasive materials):</strong> High-wear resistant steels (e.g., H13, RM2) are necessary for extended mold life and handling abrasive materials or achieving high precision.</li>
      </ul>

      <p><strong>2. Material to be Molded:</strong></p>
      <ul>
        <li><strong>General Thermoplastics (ABS, PC, PP):</strong> Pre-hardened steel or aluminum may suffice depending on batch size.</li>
        <li><strong>Abrasive Materials (Glass-filled plastics):</strong> High-wear resistant steel is recommended to withstand wear and maintain mold integrity over longer runs.</li>
      </ul>

      <p><strong>3. Part Complexity and Precision:</strong></p>
      <ul>
        <li><strong>Simple Parts, Lower Precision:</strong> Aluminum or pre-hardened steel molds are generally adequate.</li>
        <li><strong>Complex Geometries, High Precision:</strong> Higher quality steels, including high-wear resistant options, may be necessary to maintain dimensional accuracy and surface finish throughout the production run.</li>
      </ul>

      <p><strong>4. Budget Constraints:</strong></p>
      <ul>
        <li>Aluminum molds are the most cost-effective for very small runs.</li>
        <li>Pre-hardened steels offer a mid-range cost and good durability for small to medium batches.</li>
        <li>High-wear resistant steels are the most expensive but provide the longest lifespan and are justified for larger small batches or demanding applications.</li>
      </ul>

      <p><strong>In summary,</strong> start with aluminum for prototypes and very small runs to minimize initial costs and lead times. Progress to pre-hardened steel for small to medium batches requiring a balance of cost and durability. For larger small batches, abrasive materials, or high-precision needs, invest in high-wear resistant steel to ensure mold longevity and part quality.</p>
    `,
  },
  {
    id: 'abs-characteristics',
    question: 'What are the characteristics of ABS?',
    answer: `
      <p><strong>ABS (Acrylonitrile Butadiene Styrene)</strong> is a widely used thermoplastic polymer known for its versatile combination of properties. Key characteristics include:</p>

      <p><strong>1. Impact Resistance:</strong> ABS is notably tough and resistant to impact, making it more durable than polystyrene (PS) and styrene acrylonitrile (SAN).</p>
      <p><strong>2. Rigidity and Stiffness:</strong> It offers good rigidity and surface hardness, contributing to its structural integrity in various applications.</p>
      <p><strong>3. Chemical Resistance:</strong> ABS exhibits moderate resistance to acids, alkalis, and oils, but it is soluble in ketones, esters, and chlorinated hydrocarbons.</p>
      <p><strong>4. Electrical Insulation:</strong> It is a good electrical insulator, making it suitable for electronic housings and components.</p>
      <p><strong>5. Machinability and Moldability:</strong> ABS is easy to machine, making it suitable for prototyping and fabrication. It is also excellent for injection molding, allowing for complex shapes and detailed features.</p>
      <p><strong>6. Surface Finish:</strong> ABS can achieve a high-quality surface finish, and it is easily painted and glued, enhancing its aesthetic and functional versatility.</p>
      <p><strong>7. Cost-Effectiveness:</strong> ABS is generally a cost-effective engineering plastic compared to materials like polycarbonate or nylon, making it a popular choice for mass-produced items.</p>
      <p><strong>8. Colorability:</strong> ABS can be easily colored and is available in a wide range of pre-colored resins, and it can also be painted to achieve specific color requirements.</p>
      <p><strong>9. Low Melting Point:</strong> ABS has a relatively low melting point compared to some other engineering plastics, which can be advantageous for energy-efficient processing but may limit its use in high-temperature applications.</p>

      <p>These characteristics make ABS a suitable material for a broad spectrum of applications, from automotive parts and consumer electronics to toys and household appliances.</p>
    `,
  },
  {
    id: 'abs-properties',
    question: 'What are the properties of ABS?',
    answer: `
      <p>The properties of ABS (Acrylonitrile Butadiene Styrene) can be categorized into physical, mechanical, thermal, and electrical aspects, highlighting its suitability for diverse applications. Here are the key properties:</p>

      <p><strong>Physical Properties:</strong></p>
      <ul>
        <li><strong>Density:</strong> Approximately 1.05 g/cm³, making it a lightweight plastic.</li>
        <li><strong>Water Absorption:</strong> Relatively low water absorption, contributing to dimensional stability in humid environments.</li>
        <li><strong>Appearance:</strong> Opaque and available in various colors, with good surface finish achievable.</li>
      </ul>

      <p><strong>Mechanical Properties:</strong></p>
      <ul>
        <li><strong>Tensile Strength:</strong> Moderate tensile strength, typically around 42-56 MPa, providing good resistance to pulling forces.</li>
        <li><strong>Flexural Strength:</strong> High flexural strength, around 70-98 MPa, indicating resistance to bending forces.</li>
        <li><strong>Impact Strength:</strong> Excellent impact strength, particularly Izod impact strength which can range from 15 to 30 J/m (notched), depending on grade, showcasing its toughness.</li>
        <li><strong>Hardness:</strong> Rockwell hardness typically R100-R120, offering good surface hardness and scratch resistance.</li>
        <li><strong>Elongation at Break:</strong> Moderate elongation at break, typically 5-20%, indicating some ductility but primarily a rigid material.</li>
      </ul>

      <p><strong>Thermal Properties:</strong></p>
      <ul>
        <li><strong>Glass Transition Temperature (Tg):</strong> Around 105°C, defining the temperature above which it becomes more rubbery and less rigid.</li>
        <li><strong>Melting Point:</strong> No distinct melting point, as it is an amorphous thermoplastic. Softening occurs over a range of temperatures, suitable processing temperatures are typically between 200-260°C for injection molding.</li>
        <li><strong>Heat Deflection Temperature (HDT):</strong> Around 80-100°C, depending on the grade and load, indicating its performance under heat and load.</li>
        <li><strong>Thermal Conductivity:</strong> Low thermal conductivity, typical of plastics, making it a good thermal insulator.</li>
      </ul>

      <p><strong>Electrical Properties:</strong></p>
      <ul>
        <li><strong>Dielectric Strength:</strong> High dielectric strength, around 15-20 kV/mm, making it a good electrical insulator.</li>
        <li><strong>Volume Resistivity:</strong> High volume resistivity, typically > 10^15 Ohm·cm, further confirming its excellent electrical insulation properties.</li>
        <li><strong>Dielectric Constant:</strong> Around 2.4-3.5 at 1 MHz, typical for insulating plastics.</li>
      </ul>

      <p><strong>Chemical Properties:</strong></p>
      <ul>
        <li><strong>Chemical Resistance:</strong> Good resistance to dilute acids and alkalis, but poor resistance to ketones, esters, and chlorinated solvents.</li>
        <li><strong>Flammability:</strong> ABS is flammable and is typically rated as HB (horizontal burning) under UL 94 standards in its standard form, though flame-retardant grades are available.</li>
      </ul>

      <p>These properties collectively define ABS as a versatile engineering plastic, balancing cost, processability, and performance for a wide range of applications.</p>
    `,
  },
  {
    id: 'abs-injection-moldable',
    question: 'Can ABS materials be injection molded?',
    answer: `
      <p><strong>Yes, ABS (Acrylonitrile Butadiene Styrene) materials are exceptionally well-suited for injection molding.</strong> In fact, injection molding is one of the most common and effective methods for processing ABS due to its favorable properties for this technique.</p>

      <p><strong>Reasons why ABS is excellent for injection molding:</strong></p>
      <ul>
        <li><strong>Good Flow Properties:</strong> ABS has good melt flow characteristics, allowing it to fill complex mold cavities easily and accurately. This is crucial for producing parts with intricate designs and fine details.</li>
        <li><strong>Low Shrinkage:</strong> ABS exhibits relatively low and predictable shrinkage rates during cooling after injection, typically around 0.4% to 0.7%. This predictability is important for achieving dimensional accuracy in molded parts.</li>
        <li><strong>Wide Processing Window:</strong> ABS has a relatively wide processing temperature range, making it easier to control and optimize the injection molding process. Typical melt temperatures range from 200°C to 260°C, providing flexibility for different part geometries and molding conditions.</li>
        <li><strong>Excellent Surface Finish:</strong> Injection molded ABS parts can achieve a smooth, high-quality surface finish directly from the mold, often reducing or eliminating the need for secondary finishing operations.</li>
        <li><strong>Colorability:</strong> ABS resins are readily available in pre-colored forms, and masterbatches can be easily used to achieve a wide range of custom colors directly in the molding process, enhancing aesthetic appeal and reducing the need for painting.</li>
        <li><strong>Cost-Effective:</strong> ABS material itself is cost-effective compared to many other engineering plastics, and injection molding is a highly efficient and scalable manufacturing process, making ABS injection molding a cost-competitive solution for mass production.</li>
      </ul>

      <p>Due to these advantages, ABS injection molding is widely used to produce a vast array of products across industries, including automotive components, electronic housings, appliances, toys, and consumer goods. Its combination of processability, material properties, and cost-effectiveness makes it a go-to choice for injection molded plastic parts.</p>
    `,
  },
  {
    id: 'abs-injection-molding-considerations',
    question: 'What are the key considerations for ABS Injection Molding?',
    answer: `
      <p>When injection molding ABS (Acrylonitrile Butadiene Styrene), several key considerations ensure successful processing and high-quality parts. These include material handling, processing parameters, mold design, and post-molding considerations:</p>

      <p><strong>1. Material Handling and Preparation:</strong></p>
      <ul>
        <li><strong>Drying:</strong> ABS is hygroscopic and can absorb moisture from the air. It's crucial to pre-dry ABS resin before molding to prevent cosmetic defects like splay marks and ensure good part strength. Drying is typically done at 80-90°C for 2-4 hours, achieving a moisture content below 0.1%.</li>
        <li><strong>Storage:</strong> Store ABS resin in airtight containers in a cool, dry place to prevent moisture absorption before use.</li>
      </ul>

      <p><strong>2. Processing Parameters:</strong></p>
      <ul>
        <li><strong>Melt Temperature:</strong> Typical melt temperatures range from 200°C to 260°C (392°F to 500°F), but optimal temperature depends on the specific grade and part thickness. Too high a temperature can lead to degradation, while too low can cause incomplete filling.</li>
        <li><strong>Mold Temperature:</strong> Mold temperature typically ranges from 40°C to 80°C (104°F to 176°F). Higher mold temperatures can improve surface finish and flow but may increase cycle times.</li>
        <li><strong>Injection Pressure and Speed:</strong> Use moderate to high injection pressure to ensure complete mold filling, especially for complex parts. Injection speed should be optimized to balance mold filling speed and prevent shear heating and material degradation.</li>
        <li><strong>Holding Pressure and Time:</strong> Apply sufficient holding pressure to compensate for material shrinkage during cooling and prevent sink marks and voids. Holding time should be optimized to solidify the gate area without overpacking.</li>
        <li><strong>Back Pressure:</strong> Use a moderate back pressure during screw rotation to ensure consistent melt quality and degassing.</li>
        <li><strong>Screw Speed:</strong> Control screw speed to prevent overheating and material degradation. A moderate screw speed is generally recommended.</li>
      </ul>

      <p><strong>3. Mold Design Considerations:</strong></p>
      <ul>
        <li><strong>Gate Design:</strong> Choose appropriate gate types and locations to ensure balanced flow, minimize weld lines, and facilitate easy gate trimming. Common gate types include sprue, runner, edge, and submarine gates.</li>
        <li><strong>Runner System:</strong> Design runners for efficient material flow and minimal pressure drop. Balanced runner layouts are important for multi-cavity molds.</li>
        <li><strong>Venting:</strong> Adequate venting is essential to remove trapped air and gases from the mold cavity, preventing air traps, burn marks, and short shots.</li>
        <li><strong>Cooling System:</strong> Effective cooling channels are crucial for controlling part cooling, minimizing warpage, and reducing cycle times. Design cooling channels to provide uniform cooling across the mold.</li>
        <li><strong>Shrinkage Allowance:</strong> Account for ABS shrinkage rate (0.4% to 0.7%) in mold dimensions to achieve the desired part dimensions.</li>
        <li><strong>Surface Finish of Mold:</strong> The mold surface finish directly impacts the surface finish of the molded part. High polish mold surfaces are recommended for glossy ABS parts.</li>
      </ul>

      <p><strong>4. Post-Molding Considerations:</strong></p>
      <ul>
        <li><strong>Ejection:</strong> Design ejector systems to ensure easy and damage-free part ejection. Consider using ejector pins, sleeves, or stripper plates depending on part geometry.</li>
        <li><strong>Post-Curing (Annealing):</strong> For applications requiring maximum dimensional stability or stress relief, post-curing or annealing at temperatures slightly below the HDT can be beneficial.</li>
        <li><strong>Secondary Operations:</strong> ABS is well-suited for secondary operations like painting, printing, hot stamping, and ultrasonic welding for enhanced aesthetics and assembly.</li>
        <li><strong>Regrind Usage:</strong> ABS regrind can often be reused at certain percentages (typically up to 15-25%) when mixed with virgin material, provided it is kept clean and dry, and its thermal history is considered.</li>
      </ul>

      <p>By carefully considering these factors, manufacturers can effectively injection mold ABS to produce high-quality, functional, and aesthetically pleasing parts for a wide range of applications.</p>
    `,
  },
];
