const steps = [
  {
    num: "1",
    title: "Diagnóstico",
    description:
      "Analizamos tu presencia digital actual: rendimiento web, posicionamiento SEO, visibilidad en motores de IA, competencia directa y brechas de oportunidad en tu sector.",
  },
  {
    num: "2",
    title: "Estrategia",
    description:
      "Definimos la hoja de ruta con acciones priorizadas, plazos realistas y métricas de éxito claras. Sin ambigüedad: sabes exactamente qué se va a hacer y por qué.",
  },
  {
    num: "3",
    title: "Ejecución",
    description:
      "Diseñamos, desarrollamos y optimizamos. Web con Core Web Vitals, contenido SEO, configuración GEO, schema markup y estructura de citabilidad para motores de IA.",
  },
  {
    num: "4",
    title: "Medición",
    description:
      "Seguimiento continuo: tráfico orgánico, posiciones en buscadores, frecuencia de cita en motores de IA, conversiones y ROI. Iteramos con datos, no con intuición.",
  },
];

export function Proceso() {
  return (
    <section className="py-32 px-6 bg-surface" id="proceso">
      <div className="max-w-[1280px] mx-auto reveal">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-primary tracking-[-0.02em]">
            Nuestro Método
          </h2>
          <div className="w-12 h-[3px] bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="group">
              <div className="mb-4">
                <span className="font-display italic text-[4rem] text-outline-variant/30 leading-none block">
                  {step.num}
                </span>
                <h4 className="font-display text-[1.4rem] font-normal text-primary mt-2">
                  {step.title}
                </h4>
              </div>
              <p className="text-[0.95rem] leading-[1.75] text-on-surface-variant">
                {step.description}
              </p>
              <div className="mt-6 h-px bg-outline-variant/30 transition-all duration-300 group-hover:bg-secondary group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
