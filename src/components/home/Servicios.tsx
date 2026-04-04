const services = [
  {
    num: "01",
    title: "Diseño Web Moderno",
    description:
      "Sitios web rápidos, accesibles y construidos para convertir visitantes en clientes. Optimizamos Core Web Vitals, diseñamos responsive desde mobile-first y utilizamos IA generativa para desarrollar contenido de marca alineado con tu tono y objetivos de negocio.",
    tags: "UI/UX · Core Web Vitals · Accesibilidad WCAG · IA para contenido",
    id: "diseno-web",
  },
  {
    num: "02",
    title: "SEO — Posicionamiento en Buscadores",
    description:
      "Estrategia SEO integral para aparecer en los primeros resultados de Google cuando tus clientes buscan lo que ofreces. Auditoría técnica, investigación de palabras clave, optimización on-page, contenido de autoridad y construcción de backlinks de calidad.",
    tags: "Auditoría técnica · Keywords · On-page · Link building",
    id: "seo",
  },
  {
    num: "03",
    title: "GEO — Optimización para Motores de IA",
    description:
      "Generative Engine Optimization: la nueva disciplina que asegura que tu marca sea citada cuando ChatGPT, Perplexity o Google AI Overviews responden preguntas de tu sector. Estructura extractable, schema markup, datos verificables y autoridad temática.",
    tags: "ChatGPT · Perplexity · AI Overviews · Schema · Citabilidad",
    id: "geo-card",
  },
  {
    num: "04",
    title: "Estrategia de Presencia Digital",
    description:
      "Plan integral que alinea tu web, contenido, perfiles digitales y reputación online con tus objetivos de negocio. Definimos dónde debes estar presente, con qué mensaje, y cómo medir el impacto real en tu facturación y captación de clientes.",
    tags: "Plan integral · Canales · Medición · ROI",
    id: "estrategia",
  },
  {
    num: "05",
    title: "Diagnóstico y Hoja de Ruta Digital",
    description:
      "Auditoría completa de tu situación digital actual: rendimiento web, posicionamiento SEO, visibilidad en motores de IA, coherencia de marca y oportunidades competitivas. El entregable es una hoja de ruta con acciones priorizadas, plazos y métricas de éxito.",
    tags: "Auditoría · Priorización · Accionable · Métricas",
    id: "diagnostico",
  },
];

export function Servicios() {
  return (
    <section className="py-32 px-6 bg-surface" id="servicios">
      <div className="max-w-[1280px] mx-auto reveal">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-primary tracking-[-0.02em]">
            Capacidades Digitales
          </h2>
          <p className="mt-4 max-w-[560px] text-[1.05rem] leading-[1.75] text-on-surface-variant">
            Cada servicio funciona solo o como parte de una estrategia
            integral. Sin paquetes inflados. Solo lo que tu empresa necesita
            para competir.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/25 rounded-[0.75rem] overflow-hidden border border-outline-variant/25">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-surface p-12 transition-colors duration-300 hover:bg-surface-low group"
            >
              <span className="font-display italic text-[2.5rem] text-secondary opacity-35 mb-6 block transition-opacity duration-300 group-hover:opacity-100">
                {service.num}
              </span>
              <h3 className="font-display text-2xl font-normal text-primary mb-3 tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.75] text-on-surface-variant mb-6">
                {service.description}
              </p>
              <div className="text-[0.68rem] font-bold tracking-[0.04em] uppercase text-primary/50 leading-[1.8]">
                {service.tags}
              </div>
            </article>
          ))}

          {/* CTA Cell */}
          <div className="bg-primary-container p-12 flex flex-col justify-between min-h-[240px]">
            <p className="font-display italic text-[1.4rem] leading-[1.4] text-primary-fixed-dim">
              ¿Listo para saber cómo compite tu empresa en el entorno digital?
            </p>
            <a
              href="#contacto"
              className="text-on-primary text-[0.85rem] font-medium no-underline hover:text-secondary-container transition-colors duration-300 mt-6"
            >
              Solicitar diagnóstico →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
