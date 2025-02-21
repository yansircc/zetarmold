import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { DataTable } from '@/components/data-sections/data-table';

export default function BondingChart() {
  return (
    <TextWrapper title="Overmolding Material Bonding Chart">
      <p>
        You can bond overmolded materials together, but you need to make sure
        the materials work together to get the bond strength you want. If you
        really need the bond, you should definitely add a mechanical bond. An
        undercut is a good example of a mechanical bond.
      </p>
      <p>
        <b>M:</b> Mechanical Bond Recommended
        <br />
        <b>C:</b> Chemical Bond Recommended
      </p>
      <DataTable
        columns={[
          {
            header: 'Overmolding Material',
            accessorKey: 'overmoldingMaterial',
          },
          {
            header: 'PP T30S',
            accessorKey: 'ppT30s',
          },
          {
            header: 'ABS DG417',
            accessorKey: 'absDg417',
          },
          {
            header: 'ABS/PC AC2300',
            accessorKey: 'absPcAc2300',
          },
          {
            header: 'PC Makrolon® 2405',
            accessorKey: 'pcMakrolon2405',
          },
          {
            header: 'PBT HR5330',
            accessorKey: 'pbtHr5330',
          },
          {
            header: 'PA J2700',
            accessorKey: 'paJ2700',
          },
        ]}
        data={[
          {
            overmoldingMaterial: 'TPE',
            ppT30s: 'C',
            absDg417: 'M',
            absPcAc2300: 'M',
            pcMakrolon2405: 'M',
            pbtHr5330: 'M',
            paJ2700: 'M',
          },
          {
            overmoldingMaterial: 'TPR',
            ppT30s: 'C',
            absDg417: 'C',
            absPcAc2300: 'C',
            pcMakrolon2405: 'M',
            pbtHr5330: 'M',
            paJ2700: 'M',
          },
          {
            overmoldingMaterial: 'TPU',
            ppT30s: 'M',
            absDg417: 'C',
            absPcAc2300: 'C',
            pcMakrolon2405: 'C',
            pbtHr5330: 'C',
            paJ2700: 'M',
          },
          {
            overmoldingMaterial: 'TPV',
            ppT30s: 'C',
            absDg417: 'M',
            absPcAc2300: 'M',
            pcMakrolon2405: 'M',
            pbtHr5330: 'M',
            paJ2700: 'M',
          },
          {
            overmoldingMaterial: 'TPC',
            ppT30s: 'M',
            absDg417: 'C',
            absPcAc2300: 'C',
            pcMakrolon2405: 'C',
            pbtHr5330: 'C',
            paJ2700: 'C',
          },
        ]}
      />
    </TextWrapper>
  );
}
