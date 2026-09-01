export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  deliverables: string[];
  equipment: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'label-printing',
    title: 'Label Printing',
    subtitle: 'High precision digital flexo plates for self-adhesive labels, stickers & shrink sleeves',
    description: 'High-precision digital plates for narrow-web label presses on paper, film, and metallic substrates. Zero dot gain shift with GS1 Grade A barcode compliance.',
    icon: 'Tag',
    imageUrl: '/images/industries/labels.png',
    imageAlt: 'High-speed printed flexographic label rolls and narrow-web packaging',
    equipment: 'German CDI Laser Imaging, High-Durometer (73-75 Shore A) Digital Photopolymer',
    features: [
      'Razor-sharp 2pt micro-typography and reverse text reproduction',
      'Flat-top microdots down to 0.8% for smooth highlight vignettes fading to zero',
      'GS1 Grade A barcode and QR code verification compliance',
      'Full compatibility with UV, LED, and water-based label ink systems',
      'Fast same-day and 24-hour dispatch for urgent press runs'
    ],
    deliverables: [
      'High-Definition Photopolymer Label Printing Plates (1.14mm / 1.70mm)',
      'Prepress trapping and distortion verification report',
      'Certified 1-bit TIFF digital proof'
    ]
  },
  {
    id: 'flexible-packaging',
    title: 'Flexible Packaging',
    subtitle: 'Digital plates for CI and stack flexo presses on plastic films, foils & pouches',
    description: 'Digital flexo plates for CI and stack flexo machines on BOPP, CPP, PET, PE films, food pouches, and laminates. Eliminates pinholing with gravure-rivaling solid ink density.',
    icon: 'Layers',
    imageUrl: '/images/industries/flexible-packaging.png',
    imageAlt: 'High-definition printed flexible packaging stand-up barrier pouches for retail products',
    equipment: '4,000 DPI Laser CDI Engine with HD MicroCell Surface Texturization',
    features: [
      'Eliminates pinholing and mottle on non-porous transparent and metallized films',
      'Expanded Color Gamut (ECG 7-color) prepress separation optimization',
      'High chemical resistance against ester and alcohol-based solvent inks',
      'Dimensional stability maintained across 500,000+ meter long print runs',
      'Fast press make-ready with minimal substrate startup waste'
    ],
    deliverables: [
      'HD Digital Flexible Packaging Plates (1.70mm / 1.14mm)',
      'Custom Tone Value Increase (TVI) dynamic compensation curves',
      'Relief depth and floor gauge quality certificate'
    ]
  },
  {
    id: 'corrugated-cartons',
    title: 'Corrugated Cartons',
    subtitle: 'Durable, fluting-suppressing flexo plates for corrugated boxes & sheets',
    description: 'Heavy-duty photopolymer plates for post-print and pre-print corrugated. High elasticity absorbs fluting variation and suppresses washboard effect on kraft and recycled board.',
    icon: 'Box',
    imageUrl: '/images/industries/corrugated.png',
    imageAlt: 'Multi-layer fluted corrugated cardboard sheets and shipping cartons',
    equipment: 'Large-Format Digital Laser Imager, Low-Durometer (30-42 Shore A) Photopolymer',
    features: [
      'Active washboard and fluting suppression on B, C, and E flute liners',
      'High elasticity preventing board crush and Box Compression Test (BCT) loss',
      'Deep relief floor engineering preventing dirty ink buildup in non-image areas',
      'Optimized for high-speed automated carton printing and slotting lines',
      'Resistant to mechanical edge chipping on abrasive kraft paper'
    ],
    deliverables: [
      'Heavy-Duty Corrugated Flexo Plates (2.84mm / 3.94mm / 4.70mm)',
      'Cylinder distortion and step-and-repeat imposition proofs',
      'Mounting reference marks and registration microdots'
    ]
  },
  {
    id: 'pp-woven-bags',
    title: 'PP Woven Bags',
    subtitle: 'Rugged, abrasion-resistant flexographic plates for woven polypropylene sacks',
    description: 'High-tensile digital flexo plates for woven polypropylene fabric. Delivers vibrant branding and sharp caution text on rice, flour, feed, and fertilizer bags.',
    icon: 'Package',
    imageUrl: '/images/industries/pp-woven.png',
    imageAlt: 'Colorful printed woven polypropylene sacks and industrial bulk bags',
    equipment: 'Huaguang DR284M-II Heavy Industrial Photopolymer Processing',
    features: [
      'High-tensile elastomer resin resisting weave snagging and surface tearing',
      'Superior ink laydown on treated and untreated rough PP tape surfaces',
      'Steep 70-degree shoulder walls preventing ink bridging in small text and barcodes',
      'Compatible with high-viscosity alcohol, solvent, and water-based sack inks',
      'Long mechanical run life exceeding 250,000 bags per plate set'
    ],
    deliverables: [
      'Huaguang DR284M-II Industrial Flexo Plates (2.84mm / 0.112")',
      'Digital floor thickness verification log (±0.005mm)',
      'Prepress barcode optimization for woven substrates'
    ]
  },
  {
    id: 'cement-bags',
    title: 'Paper Cement Bags',
    subtitle: 'High-solid impact-resistant plates for multi-wall kraft paper & cement sacks',
    description: 'High-solid photopolymer plates for high-volume cement and building material packaging. Maximum ink opacity and rub-resistance on rough multi-wall kraft and valve cement sacks.',
    icon: 'Archive',
    imageUrl: '/images/industries/cement-sacks.png',
    imageAlt: 'Heavy-duty multi-wall kraft paper cement sacks and valve bags',
    equipment: 'Automated UV-C De-Tack Post-Curing & Digital Laser CDI Exposure',
    features: [
      'High opacity ink transfer on heavy-absorption porous kraft sheets',
      'Exceptional plate durability on continuous web sack-making machinery',
      'Sharp reproduction of regulatory hazard symbols, batch codes, and logos',
      'Resistant to press friction heat and industrial solvent washes',
      'Precision relief depth preventing ink flooding in small compliance text'
    ],
    deliverables: [
      'Heavy-Duty Multi-Wall Sack Plates (2.84mm / 3.94mm / 4.70mm)',
      'Relief depth and floor uniformity certificate',
      'Prepress step-and-repeat layout for continuous sack formers'
    ]
  },
  {
    id: 'plastic-cement-bags',
    title: 'Plastic Cement Bags',
    subtitle: 'Precision digital plates for laminated plastic and polymeric cement sacks',
    description: 'Specially engineered digital photopolymer plates for laminated plastic cement sacks (BOPP/PP woven & polyethylene valve sacks). Delivers crisp regulatory printing, high ink anchorage, and slip-resistant surface laydown.',
    icon: 'Sparkles',
    imageUrl: '/images/industries/plastic-cement-bags.png',
    imageAlt: 'Stack of premium printed white plastic cement sacks with ISI certification markings',
    equipment: 'Sub-Micron Laser Optics, Digital HD Plate Finishing Line',
    features: [
      'Uniform ink film transfer on non-porous laminated polymeric sack films',
      'High scratch and rub resistance under high-friction stacking conditions',
      'Sharp reproduction of ISI/ISO certification marks and fine regulatory text',
      'Rapid drying ink laydown compatibility with high-speed automated bag formers',
      'Excellent register accuracy for 4-to-6 color automated lines'
    ],
    deliverables: [
      'HD Digital Plastic Cement Sack Plates (1.70mm / 2.84mm)',
      'Digital color separation proofs',
      'Pressroom fingerprinting and calibration data'
    ]
  }
];
