interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://compitedigital.com";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Compite Digital",
  description:
    "Consultoría de estrategia digital especializada en diseño web de alto rendimiento, SEO técnico, GEO (Generative Engine Optimization) y presencia digital integral para empresas.",
  url: SITE_URL,
  areaServed: { "@type": "Country", name: "ES" },
  serviceType: ["Diseño Web", "SEO", "GEO", "Estrategia Digital", "Diagnóstico Digital"],
  knowsAbout: [
    "Diseño web moderno",
    "Search Engine Optimization",
    "Generative Engine Optimization",
    "Estrategia de presencia digital",
    "IA generativa para desarrollo de contenido",
    "Core Web Vitals",
    "Schema markup",
    "Posicionamiento en ChatGPT",
    "Google AI Overviews",
  ],
  email: "hola@compitedigital.com",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Compite Digital",
  description:
    "Consultoría de estrategia digital: diseño web, SEO y GEO (Generative Engine Optimization) para empresas.",
  inLanguage: "es",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es GEO o Generative Engine Optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) es la práctica de optimizar contenido digital para que sea citado y recomendado por motores de búsqueda basados en inteligencia artificial como ChatGPT, Perplexity, Google AI Overviews y Claude. A diferencia del SEO, que posiciona en una lista de enlaces, GEO busca que tu marca aparezca directamente en las respuestas generadas por IA. Las técnicas incluyen estructura extractable, datos verificables, schema markup, autoridad temática y actualización constante del contenido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre SEO y GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO optimiza para aparecer en los resultados de búsqueda tradicionales de Google y Bing, buscando que el usuario haga clic en tu enlace. GEO optimiza para ser citado en las respuestas que generan los motores de IA (ChatGPT, Perplexity, Google AI Overviews), buscando que tu marca sea la fuente que el modelo recomienda. SEO se basa en palabras clave, backlinks y señales técnicas. GEO se basa en estructura de contenido, datos originales, autoridad y actualización frecuente. Ambas disciplinas son complementarias.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye un diagnóstico digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un diagnóstico digital de Compite Digital analiza la presencia online actual de tu empresa: rendimiento web y Core Web Vitals, posicionamiento SEO técnico y de contenido, visibilidad en motores de IA (GEO), coherencia de marca digital, velocidad de carga, accesibilidad, y oportunidades competitivas en tu sector. El resultado es una hoja de ruta con acciones priorizadas, plazos realistas y métricas de éxito claras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué necesito GEO si ya hago SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En 2026, más del 60% de las búsquedas en Google activan respuestas generadas por IA (AI Overviews) antes de que el usuario haga clic en un resultado. ChatGPT procesa más de mil millones de consultas diarias. Si tu contenido solo está optimizado para SEO tradicional, eres invisible para una parte creciente del tráfico. Los motores de IA usan señales SEO como indicador de confianza, pero necesitan además contenido estructurado, datos verificables y autoridad temática para citarte. La estrategia óptima combina ambas capas.",
      },
    },
  ],
};

export const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Estrategia Digital y Diseño Web",
  provider: {
    "@type": "ProfessionalService",
    name: "Compite Digital",
    url: SITE_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Presencia Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Web Moderno", description: "Sitios web rápidos, accesibles y optimizados para conversión, con IA generativa para desarrollo de contenido de marca." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO — Posicionamiento en Buscadores", description: "Estrategia SEO integral: auditoría técnica, investigación de palabras clave, optimización on-page, contenido de autoridad y construcción de backlinks." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO — Generative Engine Optimization", description: "Optimización de contenido para ser citado por ChatGPT, Perplexity, Google AI Overviews y Claude." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estrategia de Presencia Digital", description: "Plan integral que alinea web, contenido, perfiles digitales y reputación online con objetivos de negocio." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnóstico y Hoja de Ruta Digital", description: "Auditoría completa de situación digital con plan de acción priorizado." } },
    ],
  },
};
