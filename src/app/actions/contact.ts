"use server";

export async function sendDiagnostico(data: {
  web: string;
  reto: string;
  nombre: string;
  empresa: string;
  email: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return { ok: false, error: "Servicio de email no configurado" };
  }

  const webLabel: Record<string, string> = {
    funciona: "Tiene web que funciona bien",
    mejorar: "Tiene web pero no da resultados",
    "no-tengo": "Aún no tiene web",
  };

  const retoLabel: Record<string, string> = {
    google: "No aparece en Google",
    ia: "Las IAs no la nombran",
    leads: "Pocas consultas o ventas",
    web: "Web anticuada",
    nada: "No sabe por dónde empezar",
  };

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #fff;">
      <div style="margin-bottom: 32px;">
        <h1 style="font-size: 22px; font-weight: 400; color: #0d1f13; margin: 0 0 4px;">Nuevo diagnóstico solicitado</h1>
        <p style="font-size: 13px; color: #888; margin: 0;">Compite Digital · Formulario de diagnóstico</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; border-radius: 10px; overflow: hidden;">
        <tr>
          <td style="padding: 18px 20px; background: #f5f8f6; border-bottom: 1px solid #dde8e1;">
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #8aaa96; margin-bottom: 5px;">Situación web</div>
            <div style="font-size: 15px; color: #0d1f13;">${webLabel[data.web] ?? data.web}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 18px 20px; background: #f5f8f6; border-bottom: 1px solid #dde8e1;">
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #8aaa96; margin-bottom: 5px;">Mayor reto</div>
            <div style="font-size: 15px; color: #0d1f13;">${retoLabel[data.reto] ?? data.reto}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 18px 20px; background: #f5f8f6; border-bottom: 1px solid #dde8e1;">
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #8aaa96; margin-bottom: 5px;">Contacto</div>
            <div style="font-size: 15px; color: #0d1f13;">${data.nombre}${data.empresa ? ` · ${data.empresa}` : ""}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 18px 20px; background: #f5f8f6;">
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #8aaa96; margin-bottom: 5px;">Email</div>
            <a href="mailto:${data.email}" style="font-size: 15px; color: #2e7d4f; text-decoration: none;">${data.email}</a>
          </td>
        </tr>
      </table>

      <p style="margin-top: 28px; font-size: 12px; color: #aaa; text-align: center;">
        Responde a este email para contactar con ${data.nombre} directamente.
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Compite Digital <noreply@compitedigital.com>",
        to: ["hola@compitedigital.com"],
        reply_to: data.email,
        subject: `Diagnóstico: ${data.empresa || data.nombre}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return { ok: false, error: "Error al enviar el email" };
    }

    return { ok: true };
  } catch (e) {
    console.error("Email send error:", e);
    return { ok: false, error: "Error de conexión" };
  }
}
