export interface PlateSpec {
  id: string;
  name: string;
  thickness: string;
  hardness: string;
  reliefDepth: string;
  maxLpi: string;
  minDot: string;
  bestFor: string;
  inkTypes: string[];
  description: string;
}

export const PLATE_SPECIFICATIONS: PlateSpec[] = [
  {
    id: 'dr114',
    name: 'Ultra-Fine HD Digital Plate (1.14mm)',
    thickness: '1.14 mm / 0.045"',
    hardness: '73 - 75 Shore A',
    reliefDepth: '0.45 to 0.55 mm',
    maxLpi: '175 - 200 LPI',
    minDot: '0.8% at 175 LPI',
    bestFor: 'High-end self-adhesive prime labels, cosmetic packaging, shrink sleeves, pharmaceutical inserts',
    inkTypes: ['UV Curable', 'Water-based', 'Solvent-based'],
    description: 'Engineered for exceptional highlight dot stability and razor-sharp micro-typography down to 2pt. Flat-top dot geometry prevents dot-gain on high-speed servo-driven narrow-web label presses.'
  },
  {
    id: 'dr170',
    name: 'Versatile Flexible Packaging Plate (1.70mm)',
    thickness: '1.70 mm / 0.067"',
    hardness: '67 - 70 Shore A',
    reliefDepth: '0.55 to 0.65 mm',
    maxLpi: '150 - 175 LPI',
    minDot: '1.0% at 150 LPI',
    bestFor: 'BOPP, PET, CPP films, retort pouches, snack wrappers, multilayer barrier laminates',
    inkTypes: ['Solvent-based', 'UV Curable', 'Water-based'],
    description: 'The industry workhorse for wide-web and mid-web flexible packaging. Delivers dense, uniform solid ink coverage without pinholing while maintaining crisp vignettes and gradient fades to zero.'
  },
  {
    id: 'dr284',
    name: 'Huaguang DR284M-II Heavy Industrial Plate (2.84mm)',
    thickness: '2.84 mm / 0.112"',
    hardness: '38 - 42 Shore A',
    reliefDepth: '1.10 to 1.40 mm',
    maxLpi: '85 - 110 LPI',
    minDot: '2.0% at 85 LPI',
    bestFor: 'Corrugated cartons, PP Woven sacks, valve cement bags, fertilizer bags, rough kraft liners',
    inkTypes: ['Water-based Flexo', 'Heavy Solvent-based', 'High-Viscosity Sack Inks'],
    description: 'High-tensile, abrasion-resistant photopolymer plate crafted to handle tough fluted corrugated liners, abrasive woven polypropylene and porous kraft surfaces with unmatched resilience.'
  },
  {
    id: 'dr394',
    name: 'Deep Relief Rough Surface Plate (3.94mm)',
    thickness: '3.94 mm / 0.155"',
    hardness: '32 - 36 Shore A',
    reliefDepth: '1.40 to 1.80 mm',
    maxLpi: '65 - 85 LPI',
    minDot: '3.0% at 65 LPI',
    bestFor: 'Rough corrugated shippers, agricultural sacks, heavy industrial multi-wall kraft bags',
    inkTypes: ['Water-based', 'Alcohol-based'],
    description: 'Maximum resilience and deep shoulder relief engineered to withstand uneven substrates and extreme press pressures without shoulder ink buildup.'
  },
  {
    id: 'dr470',
    name: 'Extra Deep Relief Industrial Plate (4.70mm)',
    thickness: '4.70 mm / 0.185"',
    hardness: '30 - 34 Shore A',
    reliefDepth: '1.60 to 2.20 mm',
    maxLpi: '55 - 75 LPI',
    minDot: '3.5% at 65 LPI',
    bestFor: 'Heavy fluted corrugated board, large format shippers, multi-wall sacks, coarse industrial liners',
    inkTypes: ['Water-based Flexo', 'Specialty Emulsions', 'Heavy Solvent-based'],
    description: 'Extra thick photopolymer plate providing maximum cushioning and shock absorption on coarse fluted corrugated boards, preventing board crush and fluting lines.'
  }
];

export const SUBSTRATE_OPTIONS = [
  { id: 'labels', label: 'Prime Labels & Shrink Sleeves', defaultThick: '1.14 mm', lpi: '175 LPI' },
  { id: 'flexpack', label: 'Flexible Packaging (BOPP/PET/CPP/PE)', defaultThick: '1.70 mm', lpi: '150-175 LPI' },
  { id: 'corrugated', label: 'Corrugated Cartons & Fluted Board', defaultThick: '2.84 mm', lpi: '85-110 LPI' },
  { id: 'ppwoven', label: 'PP Woven Sacks & Geotextiles', defaultThick: '2.84 mm', lpi: '85-100 LPI' },
  { id: 'cement', label: 'Cement Bags (Paper & Plastic)', defaultThick: '2.84 mm', lpi: '85 LPI' },
  { id: 'polypropylene', label: 'Polypropylene & Rigid Films', defaultThick: '1.70 mm', lpi: '150 LPI' },
];
