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
    imageUrl: '/images/industries/labels.jpg',
    imageAlt: "Josh's Kitchen hexagonal jar product labels with high-definition botanical color printing",
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
    imageUrl: '/images/industries/flexible-packaging.jpg',
    imageAlt: 'High-barrier flexible packaging stand-up pouches for food, coffee, dried fruit, and snacks',
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
    imageUrl: '/images/industries/corrugated.jpg',
    imageAlt: 'Fort Point Beer Co kraft corrugated cardboard shipping boxes with crisp geometric printing',
    equipment: 'Large-Format Digital Laser Imager, Low-Durometer (38-45 Shore A) Photopolymer',
    features: [
      'Active washboard and fluting suppression on B, C, and E flute liners',
      'High elasticity preventing board crush and Box Compression Test (BCT) loss',
      'Deep relief floor engineering preventing dirty ink buildup in non-image areas',
      'Optimized for high-speed automated carton printing and slotting lines',
      'Resistant to mechanical edge chipping on abrasive kraft paper'
    ],
    deliverables: [
      'Heavy-Duty Corrugated Flexo Plates (2.54mm / 2.84mm / 3.94mm)',
      'Cylinder distortion and step-and-repeat imposition proofs',
      'Mounting reference marks and registration microdots'
    ]
  },
  {
    id: 'pp-woven-bags',
    title: 'PP Woven Bags',
    subtitle: 'Rugged, abrasion-resistant flexo blocks for woven polypropylene sacks',
    description: 'High-tensile digital flexo plates for woven polypropylene fabric. Delivers vibrant branding and sharp caution text on rice, flour, feed, and fertilizer bags.',
    icon: 'Package',
    imageUrl: '/images/industries/pp-woven.jpg',
    imageAlt: 'Colorful printed PP woven and non-woven reusable shopping tote bags with custom logo and sunflower print',
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
    title: 'Cement Bags',
    subtitle: 'High-solid impact-resistant plates for multi-wall kraft paper & cement sacks',
    description: 'High-solid photopolymer plates for high-volume cement and building material packaging. Maximum ink opacity and rub-resistance on rough multi-wall kraft and valve cement sacks.',
    icon: 'Archive',
    imageUrl: '/images/industries/cement-sacks.jpg',
    imageAlt: 'Benchmark Perfect Mash 20kg multi-wall industrial sack bag standing on wooden pallet in warehouse',
    equipment: 'Automated UV-C De-Tack Post-Curing & Digital Laser CDI Exposure',
    features: [
      'High opacity ink transfer on heavy-absorption porous kraft sheets',
      'Exceptional plate durability on continuous web sack-making machinery',
      'Sharp reproduction of regulatory hazard symbols, batch codes, and logos',
      'Resistant to press friction heat and industrial solvent washes',
      'Precision relief depth preventing ink flooding in small compliance text'
    ],
    deliverables: [
      'Heavy-Duty Multi-Wall Sack Plates (2.84mm / 3.94mm)',
      'Relief depth and floor uniformity certificate',
      'Prepress step-and-repeat layout for continuous sack formers'
    ]
  },
  {
    id: 'polypropylene-packaging',
    title: 'Polypropylene Packaging',
    subtitle: 'High-definition plates for BOPP, CPP, OPP films & custom folding cartons',
    description: 'Precision plates for BOPP, CPP, OPP films, thermoformed containers, and folding cartons. Delicate halftone screens and solid coverage without press slowdowns.',
    icon: 'Sparkles',
    imageUrl: '/images/industries/polypropylene.jpg',
    imageAlt: 'Custom printed retail product folding cartons and mailer boxes with multi-color branding',
    equipment: 'Sub-Micron Laser Optics, Digital HD Plate Finishing Line',
    features: [
      'Uniform ink film splitting across smooth, non-porous PP films',
      'Minimized dot bridging in critical midtone tonal ranges (40% to 60%)',
      'High resistance against plasticizer migration from film additives',
      'Rapid run-in time with minimal make-ready substrate waste',
      'Excellent register accuracy for high-speed multi-color jobs'
    ],
    deliverables: [
      'HD Digital Polypropylene Packaging Plates (1.14mm / 1.70mm)',
      'Digital color separation proofs',
      'Pressroom fingerprinting and calibration data'
    ]
  }
];
