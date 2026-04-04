import { ContactForm } from "./ContactForm";

export function CtaFinal() {
  return (
    <section className="py-32 px-6 bg-surface-low" id="contacto">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[1.25rem] overflow-hidden border border-outline-variant/15 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">

          {/* ── Left: Copy panel ── */}
          <div className="bg-primary-container px-12 py-16 md:px-16 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -bottom-[80px] -left-[80px] w-[320px] h-[320px] bg-secondary/[0.06] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary block mb-6">
                Diagnóstico gratuito
              </span>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-light text-on-primary tracking-[-0.03em] leading-[1.1] mb-8">
                ¿Sabes cómo ven a tu empresa los algoritmos de IA?
              </h2>
              <p className="text-[1rem] leading-[1.8] text-primary-fixed-dim/70 max-w-[400px]">
                Analizamos tu web, tu posicionamiento SEO y tu visibilidad en
                motores de IA. Te decimos qué mejorar y en qué orden.
              </p>
            </div>

            {/* Bottom detail */}
            <div className="relative mt-14 flex flex-col gap-3">
              {[
                "Análisis SEO técnico",
                "Visibilidad en ChatGPT y Perplexity",
                "Hoja de ruta priorizada",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                  <span className="text-[0.84rem] text-primary-fixed-dim/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form panel ── */}
          <div className="bg-surface px-10 py-14 md:px-14">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
