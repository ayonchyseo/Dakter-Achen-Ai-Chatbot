import { Doctor } from '../types/doctor';
import { BlogPost } from '../types/blog';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  schemaJsonLd?: object;
}

const DEFAULT_ORIGIN = 'https://dakterachen.com';

export function getActiveOrigin(): string {
  if (typeof window !== 'undefined') {
    const isCustom = window.location.hostname === 'dakterachen.com' || window.location.hostname === 'www.dakterachen.com';
    return isCustom ? DEFAULT_ORIGIN : window.location.origin;
  }
  return DEFAULT_ORIGIN;
}

export function updatePageSeo(config: SeoConfig) {
  if (typeof document === 'undefined') return;

  // 1. Update Document Title
  document.title = config.title;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // 3. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', config.canonicalUrl);

  // 4. Update OpenGraph Tags
  const updateMeta = (attr: 'property' | 'name', key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  updateMeta('property', 'og:title', config.title);
  updateMeta('property', 'og:description', config.description);
  updateMeta('property', 'og:url', config.canonicalUrl);
  updateMeta('property', 'og:type', config.ogType || 'website');
  if (config.ogImage) {
    updateMeta('property', 'og:image', config.ogImage);
  }

  updateMeta('name', 'twitter:title', config.title);
  updateMeta('name', 'twitter:description', config.description);
  if (config.ogImage) {
    updateMeta('name', 'twitter:image', config.ogImage);
  }

  // 5. Update or Inject Schema.org JSON-LD
  if (config.schemaJsonLd) {
    let schemaEl = document.getElementById('schema-medical-webpage') as HTMLScriptElement | null;
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = 'schema-medical-webpage';
      schemaEl.type = 'application/ld+json';
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(config.schemaJsonLd, null, 2);
  }
}

/**
 * Generate Schema.org for Doctor Profile
 */
export function generateDoctorSchema(doctor: Doctor, origin: string = getActiveOrigin()) {
  const doctorUrl = `${origin}/doctor/${doctor.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${doctorUrl}#physician`,
    'name': doctor.name,
    'alternateName': doctor.nameEn,
    'description': `${doctor.name} — ${doctor.specialtyBn} (${doctor.specialtyEn})। ${doctor.degrees}। চেম্বার: ${doctor.ch.map(c => c.name).join(', ')}`,
    'url': doctorUrl,
    'medicalSpecialty': doctor.specialtyEn,
    'alumniOf': {
      '@type': 'EducationalOrganization',
      'name': doctor.degrees
    },
    'address': doctor.ch.map(chamber => ({
      '@type': 'PostalAddress',
      'streetAddress': chamber.address,
      'addressLocality': chamber.area,
      'addressRegion': 'Chattogram',
      'addressCountry': 'BD'
    })),
    'telephone': doctor.ch.flatMap(c => c.serial || []).filter(Boolean).join(', ') || '+8801800000000',
    'workLocation': doctor.ch.map(chamber => ({
      '@type': 'MedicalClinic',
      'name': chamber.name,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': chamber.address,
        'addressLocality': chamber.area,
        'addressRegion': 'Chattogram',
        'addressCountry': 'BD'
      },
      'telephone': (chamber.serial && chamber.serial[0]) || '+8801800000000'
    })),
    'offers': doctor.ch.filter(c => c.fee).map(chamber => ({
      '@type': 'Offer',
      'name': `Consultation Fee at ${chamber.name}`,
      'price': chamber.fee,
      'priceCurrency': 'BDT',
      'availability': 'https://schema.org/InStock'
    }))
  };
}

/**
 * Generate Schema.org for Health Blog Article
 */
export function generateBlogArticleSchema(post: BlogPost, origin: string = getActiveOrigin()) {
  const articleUrl = `${origin}/blog/${post.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    '@id': `${articleUrl}#article`,
    'headline': post.titleBn,
    'alternativeHeadline': post.titleEn,
    'description': post.excerptBn,
    'url': articleUrl,
    'image': post.coverImage || `${origin}/assets/og-image.png`,
    'inLanguage': 'bn',
    'datePublished': '2026-10-24',
    'dateModified': '2026-10-31',
    'author': {
      '@type': 'Person',
      'name': post.author.nameBn,
      'jobTitle': post.author.roleBn
    },
    'reviewedBy': post.reviewedBy ? {
      '@type': 'Physician',
      'name': post.reviewedBy.nameBn,
      'alumniOf': post.reviewedBy.degreesBn
    } : undefined,
    'publisher': {
      '@type': 'Organization',
      'name': 'Dakter Achen',
      'url': origin
    },
    'about': {
      '@type': 'MedicalCondition',
      'name': post.categoryEn
    },
    'keywords': (post.tags || []).join(', ')
  };
}

/**
 * Generate Schema.org for Emergency Hub
 */
export function generateEmergencySchema(origin: string = getActiveOrigin()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    '@id': `${origin}/emergency#emergency`,
    'name': 'Dakter Achen Emergency Healthcare Hub — চট্টগ্রাম জরুরি স্বাস্থ্য সেবা',
    'description': 'চট্টগ্রামের ২৪ ঘণ্টা জরুরি স্বাস্থ্যসেবা, জাতীয় জরুরি হটলাইন ৯৯৯, সরকারি ও বেসরকারি হাসপাতালের জরুরি বিভাগ এবং দ্রুত অ্যাম্বুলেন্স যোগাযোগ।',
    'url': `${origin}/emergency`,
    'telephone': '999',
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Chattogram, Bangladesh'
    },
    'openingHours': 'Mo-Su 00:00-24:00'
  };
}
