const miniCards = [
  {
    title: "Citabilidad",
    description:
      "Estructuramos tu contenido en bloques autónomos que Perplexity y ChatGPT pueden extraer y citar como fuente directa.",
  },
  {
    title: "AI Overviews",
    description:
      "Optimizamos para los resúmenes inteligentes de Google Search, que ya aparecen en más del 60% de las búsquedas.",
  },
  {
    title: "Schema Markup",
    description:
      "Implementamos datos estructurados (FAQPage, Service, HowTo) que los motores de IA priorizan al seleccionar fuentes.",
  },
  {
    title: "Autoridad temática",
    description:
      "Desarrollamos contenido original con datos propios y expertise demostrable: el tipo de fuentes que los motores de IA prefieren citar.",
  },
];

const tableRows = [
  { seo: "Keywords y backlinks", geo: "Contexto y autoridad temática" },
  { seo: "Listas de enlaces (SERPs)", geo: "Respuestas sintetizadas con citas" },
  { seo: "Optimiza para clics", geo: "Optimiza para ser citado" },
  { seo: "El usuario elige entre enlaces", geo: "La IA recomienda una fuente" },
  { seo: "Ranking en posiciones", geo: "Presencia en la respuesta" },
];

export function GeoSection() {
  return (
    <section
      className="bg-primary-container py-32 px-6 relative overflow-hidden"
      id="geo"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(170,207,181,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative reveal">
        {/* Label */}
        <span className="text-secondary text-[0.72rem] font-bold uppercase tracking-[0.2em] block mb-4">
          GEO explicado
        </span>

        {/* Title */}
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-on-primary tracking-[-0.02em] mb-16 max-w-[800px]">
          ¿Qué es GEO y por qué tu empresa lo necesita{" "}
          <em className="italic">en 2026?</em>
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Mini Cards */}
          <div>
            <h3 className="font-display text-[1.4rem] font-normal text-on-primary mb-6">
              GEO: Generative Engine Optimization
            </h3>

            <p className="text-primary-fixed-dim/80 text-[1.05rem] leading-[1.75] mb-5">
              GEO es la práctica de estructurar y optimizar tu contenido digital
              para que los principales motores de IA te seleccionen y citen
              como fuente: ChatGPT, Perplexity, Google AI Overviews, Claude y
              Copilot.
            </p>
            <p className="text-primary-fixed-dim/80 text-[1.05rem] leading-[1.75] mb-5">
              Cuando alguien pregunta a una IA sobre tu sector, esa IA sintetiza
              información de varias fuentes y cita las más relevantes. Con GEO,
              tu empresa deja de ser un resultado más y pasa a ser la fuente que
              el modelo recomienda.
            </p>
            <p className="text-primary-fixed-dim/80 text-[1.05rem] leading-[1.75] mb-10">
              GEO no sustituye al SEO, lo complementa. Los motores de IA
              usan señales SEO (autoridad de dominio, backlinks, velocidad) como
              indicadores de confianza. Pero para ser citado necesitas también
              contenido con estructura extractable, datos verificables, schema
              markup enriquecido y actualizaciones frecuentes. En 2026, lo que
              funciona es trabajar las dos capas.
            </p>

            {/* Mini Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniCards.map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-[0.75rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[10px]"
                >
                  <h4 className="font-display text-on-primary text-[1.1rem] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-primary-fixed-dim/70 text-[0.9rem] leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Comparison Table */}
          <div className="bg-surface rounded-[0.75rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <h3 className="font-display text-[1.4rem] font-normal text-primary mb-8">
              SEO vs. GEO: La Evolución
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[0.75rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant pb-4 border-b border-outline-variant/30 bg-surface-high/50 px-4 py-3 rounded-t-[0.5rem]">
                    SEO Tradicional
                  </th>
                  <th className="text-left text-[0.75rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant pb-4 border-b border-outline-variant/30 bg-surface-high/50 px-4 py-3 rounded-t-[0.5rem]">
                    GEO (Era IA)
                  </th>
                </tr>
              </thead>
              <tbody className="text-[0.95rem] text-on-surface">
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    <td
                      className={`py-4 px-4 ${
                        i < tableRows.length - 1 ? "border-b border-outline-variant/15" : ""
                      }`}
                    >
                      {row.seo}
                    </td>
                    <td
                      className={`py-4 px-4 font-medium text-secondary ${
                        i < tableRows.length - 1 ? "border-b border-outline-variant/15" : ""
                      }`}
                    >
                      {row.geo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
