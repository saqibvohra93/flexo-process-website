export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  plateRecommendation: string;
  keyBenefits: string[];
  specs: {
    resolution: string;
    durometer: string;
    screenRulings: string;
    turnaround: string;
  };
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'label-printing',
    title: 'Label Printing & Narrow Web',
    tagline: 'Micron-level sharpness for cosmetic, food & prime retail labels',
    description: 'High-precision digital flexographic plates engineered for narrow-web presses. Achieve ultra-fine highlights, 2pt reverse micro-text, perfect barcodes, and flawless multi-color registration on self-adhesive papers, films, and shrink sleeves.',
    imageUrl: '/images/industries/labels.jpg',
    imageAlt: "Josh's Kitchen hexagonal jar product labels with high-definition botanical color printing",
    plateRecommendation: '1.14 mm (0.045") Ultra-Fine HD Digital Photopolymer',
    keyBenefits: [
      'Zero dot gain shift with Flat-Top Dot laser optics',
      'Flawless 0.8% highlight dots with clean drop to zero',
      'Barcode compliance (GS1 grade A verification)',
      'Compatible with UV, LED, and water-based label ink systems'
    ],
    specs: {
      resolution: '4,000 DPI Laser CDI',
      durometer: '73 - 75 Shore A',
      screenRulings: '150 - 200 LPI',
      turnaround: 'Same-day / 24 Hours'
    }
  },
  {
    id: 'flexible-packaging',
    title: 'Flexible Packaging & Barrier Films',
    tagline: 'High-density solid ink transfer and smooth vignettes for food pouches',
    description: 'Superior digital plates specifically formulated for high-speed central impression (CI) and stack flexo presses. Perfect for food pouches, stand-up zipper bags, barrier laminates, and retort packaging where color consistency and fast press speeds are essential.',
    imageUrl: '/images/industries/flexible-packaging.jpg',
    imageAlt: 'High-barrier flexible packaging stand-up pouches for food, coffee, dried fruit, and snacks',
    plateRecommendation: '1.70 mm (0.067") Versatile Packaging Photopolymer',
    keyBenefits: [
      'Eliminates pinholing and orange peel in solid ink lays',
      'Expanded Color Gamut (ECG) 7-color profile optimization',
      'High resistance to aggressive ester and alcohol solvents',
      'Maintains dimensional stability over 500,000+ meter runs'
    ],
    specs: {
      resolution: '4,000 DPI Laser CDI',
      durometer: '67 - 70 Shore A',
      screenRulings: '133 - 175 LPI',
      turnaround: '24 Hours'
    }
  },
  {
    id: 'corrugated-cartons',
    title: 'Corrugated Cartons & Fluted Board',
    tagline: 'Fluting suppression & rich solid coverage on kraft liners',
    description: 'Durable, high-resilience photopolymer plates that drastically suppress fluting marks (washboard effect) on fluted cardboard, shipping shippers, and micro-flute pre-print packaging. Delivers crisp line art, branding, and uniform solid blocks.',
    imageUrl: '/images/industries/corrugated.jpg',
    imageAlt: 'Fort Point Beer Co kraft corrugated cardboard shipping boxes with crisp geometric printing',
    plateRecommendation: '2.54 mm to 3.94 mm Corrugated Grade Plates',
    keyBenefits: [
      'Suppresses washboarding on B, C, and E flute liners',
      'High plate elasticity prevents edge chipping and wear',
      'Deep floor relief prevents ink build-up in non-image areas',
      'Formulated for high-speed post-print corrugated presses'
    ],
    specs: {
      resolution: '2,540 / 4,000 DPI CDI',
      durometer: '42 - 45 Shore A',
      screenRulings: '85 - 133 LPI',
      turnaround: '24 - 48 Hours'
    }
  },
  {
    id: 'pp-woven-bags',
    title: 'PP Woven Bags & Industrial Sacks',
    tagline: 'Heavy-duty resilience for textured polypropylene weaves',
    description: 'Specially engineered high-solid photopolymer plates built to endure the extreme mechanical abrasion of woven polypropylene fabric and reusable shopping tote bags. Delivers rich, vibrant solid colors and bold branding on bulk bags and retail totes.',
    imageUrl: '/images/industries/pp-woven.jpg',
    imageAlt: 'Colorful printed PP woven and non-woven reusable shopping tote bags with custom logo and sunflower print',
    plateRecommendation: 'Huaguang DR284M-II (2.84 mm / 0.112")',
    keyBenefits: [
      'High tensile strength resists tape tearing and weave snagging',
      'Superior ink release on untreated and treated PP weaves',
      'Deep shoulder geometry prevents ink bridges in tight text',
      'Optimized for heavy solvent and alcohol ink formulations'
    ],
    specs: {
      resolution: '2,540 / 4,000 DPI Laser',
      durometer: '38 - 42 Shore A',
      screenRulings: '65 - 100 LPI',
      turnaround: '24 Hours'
    }
  },
  {
    id: 'cement-bags',
    title: 'Cement Bags & Multi-Wall Sacks',
    tagline: 'Rugged ink transfer on porous kraft and industrial packaging',
    description: 'High-solid, impact-resistant flexo plates designed specifically for rough, abrasive multi-wall kraft paper and perforated cement sack substrates. Ensures maximum opacity, crisp warning typography, and high rub-resistance in demanding packaging environments.',
    imageUrl: '/images/industries/cement-sacks.jpg',
    imageAlt: 'Benchmark Perfect Mash 20kg multi-wall industrial sack bag standing on wooden pallet in warehouse',
    plateRecommendation: '2.84 mm Heavy-Duty Industrial Photopolymer',
    keyBenefits: [
      'Maximum ink laydown on rough, high-absorption kraft sheets',
      'Exceptional mechanical plate life on continuous web presses',
      'Crisp compliance iconography and caution text reproduction',
      'Resistant to industrial ink solvents and friction heat'
    ],
    specs: {
      resolution: '2,540 / 4,000 DPI Laser',
      durometer: '38 - 42 Shore A',
      screenRulings: '65 - 85 LPI',
      turnaround: '24 Hours'
    }
  },
  {
    id: 'polypropylene-packaging',
    title: 'Polypropylene & Rigid Films',
    tagline: 'Sharp screen fidelity for BOPP, CPP & custom folding cartons',
    description: 'Precision engineered plates for BOPP, CPP, OPP substrate conversions and premium custom retail packaging cartons. Enables converters to run delicate halftone patterns, soft vignettes, and heavy solid coverage simultaneously without compromising press speed.',
    imageUrl: '/images/industries/polypropylene.jpg',
    imageAlt: 'Custom printed retail product folding cartons and mailer boxes with multi-color branding (Hint, Banza, Prose, West Elm)',
    plateRecommendation: '1.70 mm / 1.14 mm Digital Plate Grade',
    keyBenefits: [
      'Even surface energy for uniform ink film splitting',
      'Minimized dot bridging in midtone screens (40-60%)',
      'Excellent resistance to plasticizer migration from films',
      'Rapid run-in time with minimal press make-ready waste'
    ],
    specs: {
      resolution: '4,000 DPI CDI Laser',
      durometer: '68 - 72 Shore A',
      screenRulings: '133 - 175 LPI',
      turnaround: '24 Hours'
    }
  }
];
