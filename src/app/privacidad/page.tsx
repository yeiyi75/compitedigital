import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <article className="max-w-[800px] mx-auto pt-40 px-6 pb-20 min-h-[70vh]">
      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-primary leading-[1.1] tracking-[-0.02em] mb-10">
        Política de Privacidad
      </h1>
      <div className="prose-compite">
        <h2>Responsable del tratamiento</h2>
        <p>
          Compite Digital es responsable del tratamiento de los datos personales
          facilitados a través de este sitio web, de conformidad con el
          Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica
          3/2018 de Protección de Datos Personales (LOPDGDD).
        </p>

        <h2>Datos recopilados</h2>
        <p>
          Actualmente, este sitio web no recopila datos personales de forma
          automática. En caso de que nos contactes por correo electrónico,
          trataremos los datos que nos facilites con la finalidad de responder a
          tu consulta.
        </p>

        <h2>Finalidad del tratamiento</h2>
        <ul>
          <li>Responder a consultas y solicitudes de información.</li>
          <li>Enviar comunicaciones comerciales si has dado tu consentimiento.</li>
        </ul>

        <h2>Derechos del usuario</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad dirigiéndote a
          hola@compitedigital.com.
        </p>
      </div>
    </article>
  );
}
