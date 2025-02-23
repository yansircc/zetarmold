interface RouteItem {
  title: string;
  href?: string;
  items?: RouteItem[];
}

export const tmpRoutes: RouteItem[] = [
  {
    title: 'Small Batch Solutions',
    items: [
      { title: 'Small Batch Mold Development', href: '/small-batch' },
      { title: 'Small Batch Production Service', href: '/small-batch' },
    ],
  },
  {
    title: 'Mold Development',
    items: [
      {
        title: 'High Volume Durable Molds',
        href: '/mold-development/high-volume',
      },
      {
        title: 'Corrosion Resistant Molds',
        href: '/mold-development/corrosion-resistant',
      },
      {
        title: 'High Temperature Molds',
        href: '/mold-development/high-temperature',
      },
      {
        title: 'Wear Resistant Molds',
        href: '/mold-development/wear-resistant',
      },
      {
        title: 'Impact Resistant Molds',
        href: '/mold-development/impact-resistant',
      },
      {
        title: 'Precision Polished Molds',
        href: '/mold-development/precision-polished',
      },
      { title: 'Medical Grade Molds', href: '/mold-development/medical-grade' },
      { title: 'FDA/EC Certified Molds', href: '/mold-development/certified' },
      {
        title: 'Automotive TS16949 Molds',
        href: '/mold-development/automotive',
      },
    ],
  },
  {
    title: 'Injection Molding',
    items: [
      { title: 'Process Overview', href: '/injection-molding/overview' },
      {
        title: 'Double Shot & Insert Molding',
        href: '/injection-molding/overmolding-insert',
      },
      { title: 'Thin Wall Molding', href: '/injection-molding/thin-wall' },
      { title: 'IMD/IML Technology', href: '/injection-molding/imd' },
      { title: 'PVC Injection Molding', href: '/injection-molding/pvc' },
      {
        title: 'High Performance Molding',
        href: '/injection-molding/high-performance',
      },
      { title: 'Hot Runner Mold', href: '/injection-molding/hot-runner-mold' },
    ],
  },
  {
    title: 'Silicone Molding',
    items: [
      {
        title: 'Liquid Silicone Injection',
        href: '/silicone-molding/liquid-injection',
      },
      {
        title: 'Silicone Compression Molding',
        href: '/silicone-molding/compression',
      },
      {
        title: 'Silicone Extrusion Molding',
        href: '/silicone-molding/extrusion',
      },
    ],
  },
  {
    title: 'Rapid Prototyping',
    items: [
      {
        title: '3D Printing',
        items: [
          {
            title: 'PolyJet Printing',
            href: '/rapid-prototyping/3d-printing/polyjet',
          },
          { title: 'MJF Printing', href: '/rapid-prototyping/3d-printing/mjf' },
          { title: 'SLA Printing', href: '/rapid-prototyping/3d-printing/sla' },
          { title: 'SLS Printing', href: '/rapid-prototyping/3d-printing/sls' },
          { title: 'DLP Printing', href: '/rapid-prototyping/3d-printing/dlp' },
          { title: 'SLM Printing', href: '/rapid-prototyping/3d-printing/slm' },
          { title: 'FDM Printing', href: '/rapid-prototyping/3d-printing/fdm' },
          { title: '3DP Printing', href: '/rapid-prototyping/3d-printing/3dp' },
          { title: 'LCP Printing', href: '/rapid-prototyping/3d-printing/lcp' },
        ],
      },
      { title: 'CNC Machining', href: '/rapid-prototyping/cnc-machining' },
      {
        title: 'Silicone Casting',
        href: '/rapid-prototyping/silicone-casting',
      },
    ],
  },
  {
    title: 'Post Processing',
    items: [
      {
        title: 'Logo Printing',
        items: [
          { title: 'Laser Logo', href: '/post-processing/logo-print/laser' },
          { title: 'Pad Printing', href: '/post-processing/logo-print/pad' },
          { title: 'UV Printing', href: '/post-processing/logo-print/uv' },
          {
            title: 'Hot Stamping',
            href: '/post-processing/logo-print/hot-stamping',
          },
          {
            title: 'Screen Printing',
            href: '/post-processing/logo-print/screen',
          },
          {
            title: 'Heat Transfer',
            href: '/post-processing/logo-print/heat-transfer',
          },
        ],
      },
      {
        title: 'Surface Treatment',
        items: [
          {
            title: 'Electroplating',
            href: '/post-processing/surface-treatment/electroplating',
          },
          {
            title: 'Painting',
            items: [
              {
                title: 'Spray Painting',
                href: '/post-processing/surface-treatment/painting/spray',
              },
              {
                title: 'Rubber Paint',
                href: '/post-processing/surface-treatment/painting/rubber',
              },
              {
                title: 'UV Paint',
                href: '/post-processing/surface-treatment/painting/uv',
              },
            ],
          },
        ],
      },
      {
        title: 'Welding',
        items: [
          {
            title: 'Ultrasonic Welding',
            href: '/post-processing/welding/ultrasonic',
          },
          {
            title: 'Hot Plate Welding',
            href: '/post-processing/welding/hot-plate',
          },
        ],
      },
    ],
  },
];
