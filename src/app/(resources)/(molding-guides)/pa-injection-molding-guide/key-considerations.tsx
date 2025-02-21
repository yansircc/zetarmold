import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import { Wrench } from 'lucide-react';
export default function KeyConsiderations() {
  return (
    <TextWrapper
      title="What are the key considerations fo PA Injection Molding?"
      description="Injection molding is a complex process that requires careful attention to various parameters to ensure high-quality production, especially when using materials like Polyamide (PA), commonly known as nylon. Here are the key considerations to keep in mind:"
    >
      <FeatureList
        props={[
          {
            icon: <Wrench className="size-6" />,
            title: 'Material Properties',
            description:
              '① Moisture Absorption: PA (nylon) has a strong tendency to absorb moisture, up to 8-10% of its weight, depending on the grade and environmental conditions. Moisture absorption can lead to surface defects, reduced mechanical properties, and poor dimensional stability. To avoid these issues, PA must be dried before molding. Typically, drying is performed at 80–100°C for 4–8 hours to reduce moisture content to below 0.2%. If not properly dried, it may cause splay marks and poor part performance.' +
              "\n\n② Melting Point and Temperature Range: The melting point of PA ranges between 220–260°C, depending on the grade (e.g., PA6, PA66). Ensuring the injection temperature stays within this range is critical to avoid material degradation or incomplete mold filling. If the melt temperature is too low, the material will not flow properly, causing short shots. If too high, material degradation can occur, affecting the final product's quality." +
              '\n\n③ Viscosity: PA has relatively high viscosity, requiring careful control of injection pressure to achieve proper flow into the mold. If the injection speed is too high, it may cause turbulence and air entrapment. On the other hand, if the injection speed is too low, the material may not fill the mold completely, leading to incomplete parts or premature solidification.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Mold Design',
            description:
              '① Gate Design: A well-designed gate ensures proper filling of the mold. For PA, a hot-runner system can be beneficial, as it keeps the material molten and reduces waste. Gate location and size should be optimized to prevent flow defects like weld lines or jetting. For complex parts, side-gated designs can help ensure even material distribution. \n\n' +
              '② Ventilation: Adequate venting is crucial to allow air to escape during injection molding. PA can release gases during the process, and insufficient venting can lead to defects like voids, burns, or surface imperfections. Vent channels should be strategically placed, especially at the end of the flow path or in the mold’s corners, to avoid trapped air. \n\n' +
              '③ Ejection System: PA parts have a tendency to stick to the mold due to the relatively high surface friction. A well-designed ejection system, such as ejector pins or stripper plates, helps to remove parts without damaging them. Ejector pins should be polished or coated to reduce friction and prevent marring of the molded part.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Injection Molding Process Parameters',
            description:
              '① Injection Pressure: PA requires higher injection pressures due to its high viscosity. The typical injection pressure range is 70-150 MPa. Higher pressure is especially needed for thin-walled or complex parts to ensure complete mold filling. Pressure control is vital to prevent defects like warping or voids. \n\n' +
              '② Injection Speed: A well-controlled injection speed is necessary to balance complete mold filling with avoiding flow-related defects. The injection speed for PA is typically 20–50 mm/s. A slower speed during the initial filling phase helps avoid jetting, while a faster speed during the packing phase compensates for material shrinkage. \n\n' +
              '③ Packing and Holding Pressure: After the mold cavity is filled, packing and holding pressures are applied to compensate for material shrinkage during cooling. For PA, packing pressure usually ranges from 40–80 MPa, with holding times of 5–15 seconds depending on the part thickness and size. This ensures dimensional accuracy and reduces sink marks or voids.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Post-Processing',
            description:
              '① Annealing: PA parts may experience internal stresses from rapid cooling during injection molding. Annealing is a post-processing step that helps relieve these stresses and improve dimensional stability and mechanical properties. The annealing process typically involves heating the part to a temperature 10-20°C below its melting point for 1-4 hours, depending on part size and thickness. \n\n' +
              '② Surface Treatment: Depending on the application, PA parts may require surface treatments such as painting, plating, or coating. Proper surface preparation, including roughening or chemical treatment, is crucial for good adhesion of coatings.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Process Optimization and Other Key Considerations',
            description:
              '① Cooling System Design: Efficient cooling is crucial for controlling cycle times and preventing warping. The mold should be equipped with an effective cooling system to ensure even temperature distribution during the molding process. Uneven cooling can lead to distortion or warpage.  \n\n' +
              '② Shrinkage Rate: PA typically experiences 1.2%–2.0% shrinkage during cooling, depending on the specific grade. This should be accounted for in mold design to ensure accurate dimensional control of the final part. \n\n' +
              '③ Mold Maintenance: Regular mold maintenance is essential for ensuring consistent quality. Proper cleaning, regular inspection for wear and tear, and replacing worn-out parts will help maintain mold integrity and prevent contamination. \n\n' +
              '④ Quality Control: Regular inspection of molded parts for defects like warping, porosity, and surface finish issues is critical. Implementing quality control measures ensures consistent and reliable production of PA parts with excellent mechanical properties.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: 'Material Compounding and Additives',
            description:
              'Reinforced and Modified Grades: PA can be compounded with various additives and fillers such as glass fibers, flame retardants, and UV stabilizers to enhance its mechanical properties, heat resistance, and chemical stability. However, the addition of these materials requires careful mold design and process adjustments to account for changes in material flow, viscosity, and cooling behavior.',
          },
        ]}
        columns={1}
      />
    </TextWrapper>
  );
}
