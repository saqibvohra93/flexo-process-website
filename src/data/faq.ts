export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    category: 'Ordering & Production',
    question: 'What is the standard turnaround time for digital flexographic plates?',
    answer: 'Our standard production turnaround is 24 hours from prepress artwork approval. For emergency press breakdowns, we offer priority express same-day dispatch across Karachi and expedited overnight air cargo delivery nationwide to Lahore, Faisalabad, Gujranwala, Rawalpindi, and Peshawar.'
  },
  {
    category: 'Technical Specifications',
    question: 'What plate thicknesses and photopolymer grades do you offer?',
    answer: 'We stock and process a full range of digital photopolymer plate thicknesses including 1.14 mm (0.045"), 1.70 mm (0.067"), 2.54 mm (0.100"), 2.84 mm (0.112"), and 3.94 mm (0.155"). We offer specialty grades for narrow-web labels, flexible barrier films, corrugated fluted board, and heavy-duty PP woven/cement sacks (including Huaguang DR284M-II and premium German photopolymers).'
  },
  {
    category: 'Prepress & Technology',
    question: 'What is the difference between Flat-Top Dot and standard round-top digital plates?',
    answer: 'Flat-top dot plates are imaged and cured in an oxygen-controlled environment, preventing atmospheric oxygen from eroding the dot tops. This produces flat plateau dot crowns with steep 70-degree shoulders that resist impression pressure changes on press, eliminating highlight dot gain, extending plate run-life by 40%, and maintaining consistent color throughout 500,000+ meter runs.'
  },
  {
    category: 'File Preparation',
    question: 'What artwork formats do you accept for prepress processing?',
    answer: 'We accept layered Adobe Illustrator (.AI), Adobe Photoshop (.PSD/1-bit TIFF), Normalized PDF, PackZ, and ArtPro files. Our prepress engineering team inspects all files for trapping, minimum dot thresholds, cylinder distortion percentages, and Barcode Width Reduction (BWR) before generating certified contract digital proofs.'
  },
  {
    category: 'Substrates & Inks',
    question: 'Are your flexo plates compatible with UV, solvent, and water-based inks?',
    answer: 'Yes. Our plates are engineered with chemical-resistant polymer backbones tailored to your specific pressroom chemistry. We supply UV-monomer resistant plates for narrow-web label presses, ester/solvent-tolerant photopolymers for CI flexible packaging films, and high-elasticity water-based formulation plates for corrugated post-print and PP woven sack applications.'
  },
  {
    category: 'Support & Fingerprinting',
    question: 'Do you offer on-site press fingerprinting and calibration services?',
    answer: 'Yes. Our senior flexo technical engineers conduct on-site press fingerprinting across Pakistan. We evaluate your press mechanical tolerances, anilox cell volumes, and ink transfer curves to generate customized Tone Value Increase (TVI) and dynamic compensation curves for your prepress workflow.'
  }
];
