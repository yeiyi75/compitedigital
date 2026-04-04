export function CtaFinal() {
  return (
    <section className="py-32 px-6 bg-surface-low" id="contacto">
      <div className="max-w-[960px] mx-auto bg-surface rounded-[1rem] py-20 px-12 md:px-16 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-[60px] -right-[60px] w-[260px] h-[260px] bg-secondary/[0.07] rounded-full blur-[60px] pointer-events-none" />

        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-primary tracking-[-0.02em] mb-6 relative">
          ¿Sabes cómo ven a tu empresa los algoritmos de IA?
        </h2>

        <p className="text-[1.05rem] leading-[1.75] text-on-surface-variant max-w-[600px] mx-auto mb-10 relative">
          Solicita un diagnóstico gratuito. Analizamos tu web, tu SEO y tu
          visibilidad en motores de IA. Te decimos qué mejorar y en qué orden.
        </p>

        <a
          href="mailto:hola@competedigital.es"
          className="inline-block bg-primary text-on-primary px-10 py-4 rounded-[0.5rem] text-[0.82rem] font-bold uppercase tracking-[0.14em] no-underline shadow-[0_12px_24px_rgba(0,25,11,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,25,11,0.18)] relative"
        >
          Solicitar diagnóstico gratuito
        </a>

        <p className="mt-6 text-[0.82rem] text-on-surface-variant/60 relative">
          Sin compromiso · Respuesta en 24h · hola@competedigital.es
        </p>
      </div>
    </section>
  );
}
