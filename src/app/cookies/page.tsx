import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <article className="max-w-[800px] mx-auto pt-40 px-6 pb-20 min-h-[70vh]">
      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-primary leading-[1.1] tracking-[-0.02em] mb-10">
        Política de Cookies
      </h1>
      <div className="prose-compite">
        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan
          en tu dispositivo cuando los visitas. Se utilizan para mejorar la
          experiencia de navegación y recordar tus preferencias.
        </p>

        <h2>Cookies utilizadas en este sitio</h2>
        <p>
          Actualmente, compitedigital.com no utiliza cookies propias de
          seguimiento. En caso de implementar herramientas de analítica en el
          futuro, esta política se actualizará para reflejar los cambios.
        </p>

        <h2>Cookies de terceros</h2>
        <p>
          Si se integran servicios de terceros (como Plausible Analytics), estos
          pueden utilizar cookies técnicas necesarias para su funcionamiento.
          Plausible no utiliza cookies y respeta la privacidad del usuario.
        </p>

        <h2>Gestión de cookies</h2>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en
          cuenta que esto puede afectar al funcionamiento de algunos sitios web.
        </p>
      </div>
    </article>
  );
}
