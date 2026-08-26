export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  equipment: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'prepress-services',
    title: 'Prepress & Artwork Engineering',
    subtitle: 'High-end file normalization, trapping, distortion & color management',
    description: 'Our expert prepress engineering team transforms raw packaging designs into press-ready flexo separations. We calculate exact cylinder distortion factors, apply intelligent choke & spread trapping, and embed custom dot gain compensation (DGC) curves calibrated to your specific press and anilox setup.',
    icon: 'Layers',
    equipment: 'German & Esko Prepress Suite, Color Proofing Spectrophotometers',
    features: [
      'Automatic & Manual Trapping (0.05mm – 0.20mm tolerances)',
      'Press Fingerprinting & Dynamic Tone Value Increase (TVI) Curves',
      'Barcode Optimization & GS1 Verification Grading',
      'Expanded Color Gamut (ECG 7-Color) Separation',
      'Step-and-Repeat imposition with register marks and microdots'
    ],
    deliverables: [
      'Certified Digital Color Proof (Contract Proof)',
      '1-bit TIFF Laser Files with embedded screening',
      'Pre-Flight Inspection Quality Report'
    ]
  },
  {
    id: 'imaging-services',
    title: 'CDI Laser Direct Imaging',
    subtitle: '4,000+ DPI high-definition laser ablation for flat-top microdots',
    description: 'Using state-of-the-art German digital laser imagers, we ablate the black mask layer of photopolymer plates with sub-micron laser precision. This direct laser technique produces razor-sharp flat-top dots that eliminate oxygen inhibition, preventing highlight dot sharpening and on-press dot gain.',
    icon: 'Sparkles',
    equipment: 'High-Power Multi-Beam CDI Laser Imagers with HD MicroCell Screening',
    features: [
      'High-Resolution 4,000 DPI Laser Ablation Engine',
      'Flat-Top Dot Photopolymer Exposure Technology',
      'Surface Micro-Cell Screening (Solid Screening for higher ink density)',
      'Sub-0.8% Highlight Dot Retention down to 0% fade',
      'Consistent plate-to-plate repeatability with digital calibration'
    ],
    deliverables: [
      'High-Definition Photopolymer Printing Plates',
      'Relief Depth & Floor Thickness Inspection Certificate',
      'Digital 3D Micrometer Quality Assurance Log'
    ]
  },
  {
    id: 'plate-mounting',
    title: 'Precision Plate Mounting & Proofing',
    subtitle: 'Micron-accurate camera-guided mounting for zero make-ready downtime',
    description: 'Misregistered plates cause up to 40% of pressroom make-ready waste. We provide camera-guided precision plate mounting on cylinders and sleeves using high-tack, dual-density cushion tapes. Every plate is verified under high-magnification split optics for perfect alignment before leaving our Karachi facility.',
    icon: 'Maximize2',
    equipment: 'High-Definition Dual Video Micro-Mounting Stations with Laser Alignment',
    features: [
      'Optical Dual-Camera Crosshair Registration (±15 micron accuracy)',
      'Cushion Tape Density Matching (Soft for screens, Firm for solids)',
      'Eliminates on-press plate shifting and tape bubbling',
      'Sleeve and Cylinder mounting services for all press formats',
      'Edge sealing protection against solvent and ink wash penetration'
    ],
    deliverables: [
      'Mounted Cylinder/Sleeve ready for instant press drop-in',
      'Registration Verification Video Proof',
      'Tape Tension & Bond Certificate'
    ]
  },
  {
    id: 'technical-support',
    title: 'On-Press Technical Support & Fingerprinting',
    subtitle: 'Hands-on print troubleshooting, anilox audits & pressroom training',
    description: 'We don’t just manufacture plates — we partner with your press operators to maximize print yields and eliminate defects. Our senior flexographic engineers offer on-site press fingerprinting, anilox cell volume audits, ink viscosity calibration, and comprehensive pressroom troubleshooting across Pakistan.',
    icon: 'Headphones',
    equipment: 'X-Rite SpectroEye, Digital Plate Scopes, Anilox Micro-Volume Scanners',
    features: [
      'Full On-Site Press Fingerprinting & Calibration Runs',
      'Anilox-to-Plate Compatibility & Ink Transfer Optimization',
      'Troubleshooting: Pinholing, Haloing, Gear Streaks & Dot Bridging',
      'Press Operator Training on Plate Handling & Maintenance',
      'Dedicated 24/7 Hotline for urgent production breakdowns'
    ],
    deliverables: [
      'Customized Press Fingerprint Curves & ICC Profiles',
      'Comprehensive Press Audit Diagnostic Report',
      'Standard Operating Procedure (SOP) Plate Care Manual'
    ]
  }
];
