/**
 * Utilidades para SEO
 * Helpers para generar meta tags y datos estructurados
 */

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: 'website' | 'article' | 'product';
}

/**
 * Genera el título completo de la página
 * Si se provee un título, se agrega el sufijo de marca
 */
export function generateTitle(title?: string): string {
  const siteName = 'Voiren';
  if (!title) {
    return `${siteName} | Desarrollo de software a medida`;
  }
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
}

/**
 * Genera la descripción por defecto si no se provee una
 */
export function generateDescription(description?: string): string {
  return description || 'Construimos software a medida, automatizaciones inteligentes y sistemas que resuelven problemas reales. Expertos en desarrollo, integraciones y datos.';
}

/**
 * Genera la URL canónica completa
 */
export function generateCanonicalURL(canonical: string, site: URL): string {
  return new URL(canonical, site).toString();
}

/**
 * Genera la URL completa de la imagen social
 */
export function generateSocialImageURL(image: string, site: URL): string {
  const defaultImage = '/images/logo_texto.svg';
  const imagePath = image || defaultImage;
  return new URL(imagePath, site).toString();
}

/**
 * Genera la directiva robots según los parámetros
 */
export function generateRobotsDirective(noindex?: boolean, nofollow?: boolean): string {
  const directives: string[] = [];
  
  if (noindex) {
    directives.push('noindex');
  } else {
    directives.push('index');
  }
  
  if (nofollow) {
    directives.push('nofollow');
  } else {
    directives.push('follow');
  }
  
  return directives.join(', ');
}

/**
 * Genera datos estructurados JSON-LD para la organización
 */
export function generateOrganizationSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Voiren',
    url: site.toString(),
    logo: new URL('/images/logo_texto.svg', site).toString(),
    description: 'Desarrollo de software a medida, automatizaciones y sistemas inteligentes',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressCountry: 'CL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+56-9-2794-4115',
      contactType: 'Customer Service',
      availableLanguage: ['Spanish']
    },
    sameAs: [
      'https://www.instagram.com/v.oiren',
      'https://www.facebook.com/share/1DwJmRMyaB'
    ]
  };
}

/**
 * Genera datos estructurados JSON-LD para una página web
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  canonical: URL,
  site: URL
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonical.toString(),
    inLanguage: 'es-ES',
    publisher: {
      '@type': 'Organization',
      name: 'Voiren',
      url: site.toString()
    }
  };
}

/**
 * Genera datos estructurados JSON-LD para un servicio profesional
 */
export function generateServiceSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Voiren',
    url: site.toString(),
    description: 'Servicios de desarrollo de software, automatizaciones y sistemas a medida',
    areaServed: {
      '@type': 'Country',
      name: 'Chile'
    },
    serviceType: [
      'Desarrollo de software',
      'Automatización de procesos',
      'Sistemas internos',
      'Integraciones',
      'Análisis de datos'
    ]
  };
}
