import Image from "next/image";

export function Hero() {
  return (
    <header
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 sm:pt-24 px-6 pb-12 overflow-hidden text-center"
      id="inicio"
    >
      {/* Decorative glows */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary-container/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] bg-secondary/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Badge */}
      <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-surface-high text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary animate-fade-in-up animate-delay-100">
        Estrategia digital · IA generativa · Resultados medibles
      </span>

      {/* H1 */}
      <h1 className="font-display text-[clamp(2.6rem,6.5vw,5.8rem)] font-light leading-[1.06] tracking-[-0.03em] max-w-[900px] mb-7 text-on-surface animate-fade-in-up animate-delay-200">
        Diseñamos la estrategia que hace que tu empresa{" "}
        <em className="italic font-normal">compita</em> en la era de la IA
      </h1>

      {/* Subtitle */}
      <p className="text-[clamp(0.95rem,1.8vw,1.15rem)] leading-[1.75] text-on-surface-variant max-w-[680px] mb-10 animate-fade-in-up animate-delay-300">
        Diseño web de alto rendimiento, posicionamiento SEO y optimización para
        motores de IA (GEO). Tu marca, visible donde tus clientes buscan — tanto
        en Google como en ChatGPT, Perplexity y Google AI Overviews.
      </p>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 animate-fade-in-up animate-delay-400">
        <a
          href="#contacto"
          className="inline-block bg-primary text-on-primary px-10 py-4 rounded-[0.5rem] text-[0.82rem] font-bold uppercase tracking-[0.14em] no-underline shadow-[0_12px_24px_rgba(0,25,11,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,25,11,0.18)]"
        >
          Solicitar diagnóstico gratuito
        </a>
        <div className="flex items-center gap-2 text-[0.82rem] text-on-surface-variant">
          <svg
            className="w-4 h-4 text-secondary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <span>Sin compromiso</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16 w-full max-w-[1100px] h-[420px] rounded-[1rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] animate-fade-in-up animate-delay-500">
        <Image
          src="/images/compiteHero.png"
          alt="Profesional en oficina moderna con ventanales, portátil y vista urbana al atardecer — entorno de trabajo de estrategia digital"
          width={1400}
          height={700}
          priority
          className="w-full h-full object-cover object-[35%_center]"
        />
      </div>
    </header>
  );
}
