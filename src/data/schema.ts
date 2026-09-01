import { FAQS } from './faq';
import { ARTICLES } from './articles';
import { PLATE_SPECIFICATIONS } from './specs';

export function getStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flexo Process (Private) Limited',
    url: 'https://flexoprocess.com',
    logo: 'https://flexoprocess.com/favicon.svg',
    description: "Pakistan's premier manufacturer of high-definition digital flexographic printing plates engineered with German CDI laser technology for labels, flexible packaging, corrugated boxes, PP woven sacks, and cement bags.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-18 A, Estate Avenue, S.I.T.E.',
      addressLocality: 'Karachi',
      postalCode: '75700',
      addressCountry: 'PK'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-300-2567114',
        contactType: 'sales & technical support',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu']
      }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Flexo Process (Private) Limited',
    image: 'https://flexoprocess.com/favicon.svg',
    telephone: '+92-300-2567114',
    email: 'info@flexoprocess.com',
    url: 'https://flexoprocess.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-18 A, Estate Avenue, S.I.T.E.',
      addressLocality: 'Karachi',
      postalCode: '75700',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.8988,
      longitude: 66.9936
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HD Digital Flexographic Photopolymer Printing Plates',
    image: 'https://flexoprocess.com/favicon.svg',
    description: 'High-precision German CDI laser photopolymer plates available in 1.14mm, 1.70mm, 2.84mm, 3.94mm, and 4.70mm thicknesses for narrow web, flexible packaging, corrugated boxes, and PP woven bags.',
    brand: {
      '@type': 'Brand',
      name: 'Flexo Process'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PKR',
      lowPrice: '1500',
      highPrice: '50000',
      offerCount: PLATE_SPECIFICATIONS.length
    }
  };

  return {
    organizationSchema,
    localBusinessSchema,
    faqSchema,
    productSchema
  };
}
