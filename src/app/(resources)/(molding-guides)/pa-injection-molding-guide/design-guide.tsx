import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import { Ruler, Wrench, Cog, Settings, Microscope } from 'lucide-react';

export default function DesignGuide() {
  return (
    <TextWrapper
      title="PA Injection Molding Design Guide"
      description="A comprehensive guide for designing PA injection molded parts, covering essential aspects from part design to validation."
    >
      <FeatureList
        props={[
          {
            icon: <Ruler className="size-6" />,
            title: '1. Part Design',
            description:
              '① Wall Thickness: Uniform wall thickness is critical to avoid warping, sink marks, or voids. The recommended wall thickness for PA injection-molded parts is generally between 1 mm and 5 mm. For example, if a part has a side with a thickness of 2 mm, aim for similar thicknesses on the other sides to maintain consistency and prevent defects. Avoid sudden changes in wall thickness. If a transition is necessary, ensure a gradual change with a minimum radius of 0.5 to 1 times the nominal wall thickness to allow for smoother material flow.\n\n' +
              '② Draft Angles: Draft angles help with part ejection and reduce the risk of part damage. For PA, 1-3 degrees is recommended for external surfaces, and 0.5-1.5 degrees for internal surfaces. For instance, a cylindrical PA part with a 50 mm outer diameter should have a 2-degree draft angle to ease removal from the mold cavity.\n\n' +
              '③ Ribs and Bosses: Ribs can enhance the stiffness of a part without significantly increasing wall thickness. The height of ribs should be less than 3 times their base width. For example, a rib with a base width of 3 mm should have a height of less than 9 mm. Bosses (used for fastening parts) should have a wall thickness 40-70% of the adjacent part thickness to prevent sink marks. A draft angle should also be applied to ensure proper ejection.\n\n' +
              '④ Holes: When designing holes, ensure the diameter is at least 1.5 times the wall thickness of the part. For instance, a part with a 3 mm wall thickness should have a hole with a minimum diameter of 4.5 mm. Round the edges of holes to prevent stress concentrations.',
          },
          {
            icon: <Wrench className="size-6" />,
            title: '2. Mold Design Considerations',
            description:
              '① Gate Design: Different gate types can be used for PA, including pin gates, edge gates, and hot runner gates. The choice of gate depends on the size and complexity of the part. For small, precise parts, a pin gate is ideal as it offers control over material flow. The gate location is crucial to ensure even material flow throughout the cavity. Multiple gates may be necessary for complex geometries to avoid incomplete filling.\n\n' +
              '② Runner System: The runner system should be designed to minimize pressure loss and ensure uniform material flow. A balanced runner system is preferred for PA, with the diameter typically ranging from 4-10 mm for medium-sized parts. Hot runner systems can be beneficial for high-volume production, reducing material waste and improving part quality by maintaining the molten state of the material until it reaches the cavity.\n\n' +
              '③ Ventilation: Proper venting is essential to allow air and gases to escape the mold cavity during injection. Vents should be placed at the end of the flow path or around features like ribs and bosses. The vent depth is typically 0.02-0.05 mm to allow gases to escape without leaking material.',
          },
          {
            icon: <Cog className="size-6" />,
            title: '3. Material-Specific Considerations',
            description:
              "① Drying: PA is hygroscopic and absorbs moisture from the air. Before molding, it's critical to dry the PA resin. Drying temperatures typically range from 80-100°C for 4-8 hours, depending on the PA grade. For example, PA 66 requires drying at 85-90°C for about 6 hours to achieve the required moisture content of less than 0.2%.\n\n" +
              '② Processing Temperatures: The injection molding temperature for PA varies by grade. For PA 6, the melting temperature is 220-260°C, while PA 66 melts between 260-290°C. The mold temperature should generally range from 60-100°C to maintain dimensional stability and a good surface finish.\n\n' +
              '③ Shrinkage: PA typically exhibits a shrinkage rate of 1-2.5%, which must be accounted for during mold design. For example, if the target part dimension is 100 mm and the shrinkage rate is 2%, the mold cavity should be designed to 102 mm to compensate for this shrinkage.',
          },
          {
            icon: <Settings className="size-6" />,
            title: '4. Additional Design Considerations',
            description:
              '① Material Selection: Select the appropriate PA material based on factors such as temperature resistance, chemical resistance, and mechanical properties. Consulting with material suppliers can help ensure the optimal material choice for your specific application.\n\n' +
              '② Cooling System: A well-designed cooling system is crucial to ensuring even cooling and reducing the risk of warping. Use a combination of cooling channels and air vents to optimize the cooling process.\n\n' +
              '③ Surface Finish: Surface finish can vary from smooth to textured, depending on the application. Deeper textures may require higher draft angles. For embossed details, ensure a minimum height of 0.5 mm for readability.\n\n' +
              '④ Post-Molding Operations: Design the part to allow easy post-molding operations, such as assembly, painting, or coating. Consider how the design impacts these operations to avoid issues later in production.',
          },
          {
            icon: <Microscope className="size-6" />,
            title: '5. Simulation and Validation',
            description:
              '① Simulation: Using simulation software to validate part designs can ensure that parts meet required specifications and performance criteria. Simulation tools can help optimize material flow, cooling, and part ejection.\n\n' +
              '② Testing: Conduct experimental testing to confirm the results of simulations and ensure the part performs as expected under real-world conditions.',
          },
        ]}
        columns={1}
      />
    </TextWrapper>
  );
}
