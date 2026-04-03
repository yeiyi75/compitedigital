import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <article className="max-w-[800px] mx-auto pt-40 px-6 pb-20 min-h-[70vh]">
      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-primary leading-[1.1] tracking-[-0.02em] mb-10">
        Aviso Legal
      </h1>
      <div className="prose-compite">
        <h2>Datos identificativos</h2>
        <p>
          En cumplimiento con el deber de información dispuesto en la Ley
          34/2002 de Servicios de la Sociedad de la Información y el Comercio
          Electrónico (LSSI-CE), se facilitan los siguientes datos:
        </p>
        <ul>
          <li><strong>Titular:</strong> Compite Digital</li>
          <li><strong>Correo electrónico:</strong> hola@competedigital.es</li>
          <li><strong>Sitio web:</strong> compitedigital.com</li>
        </ul>

        <h2>Objeto</h2>
        <p>
          Este sitio web tiene como finalidad informar sobre los servicios de
          consultoría de estrategia digital que ofrece Compite Digital, incluyendo
          diseño web, SEO y GEO (Generative Engine Optimization).
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          Los contenidos de este sitio web, incluyendo textos, imágenes, diseño
          gráfico, código fuente y logotipos, son propiedad de Compite Digital o
          de sus legítimos titulares, y están protegidos por la legislación
          vigente en materia de propiedad intelectual e industrial.
        </p>

        <h2>Legislación aplicable</h2>
        <p>
          La relación entre Compite Digital y el usuario se rige por la
          legislación española vigente. Cualquier controversia se someterá a los
          juzgados y tribunales competentes.
        </p>
      </div>
    </article>
  );
}
