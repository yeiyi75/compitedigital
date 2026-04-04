"use client";

import { useState, useTransition } from "react";
import { sendDiagnostico } from "@/app/actions/contact";

type Step = 1 | 2 | 3 | 4;

interface FormState {
  web: string;
  reto: string;
  nombre: string;
  empresa: string;
  email: string;
}

const WEB_OPTIONS = [
  {
    id: "funciona",
    num: "01",
    label: "Tengo web y funciona bien",
    sub: "Quiero mejorar posicionamiento y visibilidad digital",
  },
  {
    id: "mejorar",
    num: "02",
    label: "Tengo web pero no da resultados",
    sub: "Pocas visitas, mal posicionamiento o diseño anticuado",
  },
  {
    id: "no-tengo",
    num: "03",
    label: "Aún no tengo web",
    sub: "Quiero construir una presencia digital desde cero",
  },
];

const RETO_OPTIONS = [
  { id: "google", label: "No aparezco en Google" },
  { id: "ia", label: "Las IAs no me nombran" },
  { id: "leads", label: "Pocas consultas o ventas" },
  { id: "web", label: "Mi web está anticuada" },
  { id: "nada", label: "No sé por dónde empezar" },
];

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState<FormState>({
    web: "",
    reto: "",
    nombre: "",
    empresa: "",
    email: "",
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const advance = (next: Step) => {
    setVisible(false);
    setTimeout(() => {
      setStep(next);
      setVisible(true);
    }, 260);
  };

  const selectWeb = (id: string) => {
    setData((d) => ({ ...d, web: id }));
    setTimeout(() => advance(2), 180);
  };

  const selectReto = (id: string) => {
    setData((d) => ({ ...d, reto: id }));
    setTimeout(() => advance(3), 180);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      const result = await sendDiagnostico(data);
      if (result.ok) {
        advance(4);
      } else {
        setError(result.error ?? "Algo salió mal. Escríbenos a hola@compitedigital.com");
      }
    });
  };

  const transStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(10px)",
    transition: "opacity 0.26s ease, transform 0.26s ease",
  };

  const firstName = data.nombre.trim().split(" ")[0] ?? "";

  return (
    <div className="w-full">
      {/* Progress bar */}
      {step < 4 && (
        <div className="flex items-center gap-3 mb-12">
          <div className="flex gap-1.5 items-center">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{ transition: "all 0.4s ease" }}
                className={`h-[2px] rounded-full ${
                  n < step
                    ? "w-10 bg-primary"
                    : n === step
                    ? "w-7 bg-secondary"
                    : "w-4 bg-outline-variant/20"
                }`}
              />
            ))}
          </div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant/35 ml-1">
            {step} / 3
          </span>
        </div>
      )}

      {/* Animated step wrapper */}
      <div style={transStyle}>

        {/* ── STEP 1: ¿Tienes web? ── */}
        {step === 1 && (
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary mb-5">
              Diagnóstico gratuito
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-light text-primary tracking-[-0.03em] mb-10 leading-[1.1]">
              ¿Tienes web<br />actualmente?
            </h2>
            <div className="flex flex-col gap-3">
              {WEB_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectWeb(opt.id)}
                  className="group relative text-left px-7 py-6 rounded-[0.75rem] border border-outline-variant/20 hover:border-primary/25 bg-surface-low/40 hover:bg-surface-low transition-all duration-200 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {/* Number watermark */}
                  <span className="absolute top-3 right-5 font-display italic text-[2rem] text-outline-variant/10 group-hover:text-secondary/12 transition-colors duration-300 leading-none select-none pointer-events-none">
                    {opt.num}
                  </span>
                  {/* Left accent */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-outline-variant/15 group-hover:bg-secondary/50 transition-colors duration-200"
                  />
                  <div className="pl-4">
                    <div className="font-display text-[1.12rem] font-normal text-primary tracking-[-0.01em] leading-tight">
                      {opt.label}
                    </div>
                    <div className="text-[0.84rem] text-on-surface-variant mt-1.5 leading-[1.5]">
                      {opt.sub}
                    </div>
                  </div>
                  <span className="absolute right-5 bottom-5 text-[0.9rem] text-on-surface-variant/15 group-hover:text-secondary/50 group-hover:translate-x-0.5 transition-all duration-200">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Mayor problema ── */}
        {step === 2 && (
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary mb-5">
              Diagnóstico gratuito
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-light text-primary tracking-[-0.03em] mb-10 leading-[1.1]">
              ¿Cuál es tu mayor<br />problema digital?
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {RETO_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => selectReto(opt.id)}
                  type="button"
                  className="px-5 py-3 rounded-full border border-outline-variant/20 text-[0.88rem] font-medium text-on-surface-variant hover:border-primary/35 hover:text-primary hover:bg-surface-low transition-all duration-180 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 3: Datos de contacto ── */}
        {step === 3 && (
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary mb-5">
              Último paso
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-light text-primary tracking-[-0.03em] mb-10 leading-[1.1]">
              ¿A quién le enviamos<br />el diagnóstico?
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant/45">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    value={data.nombre}
                    onChange={(e) =>
                      setData((d) => ({ ...d, nombre: e.target.value }))
                    }
                    placeholder="Tu nombre"
                    className="px-4 py-3.5 rounded-[0.5rem] border border-outline-variant/20 bg-surface text-on-surface text-[0.95rem] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/15 transition-all duration-200 placeholder:text-on-surface-variant/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant/45">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={data.empresa}
                    onChange={(e) =>
                      setData((d) => ({ ...d, empresa: e.target.value }))
                    }
                    placeholder="Nombre de tu empresa"
                    className="px-4 py-3.5 rounded-[0.5rem] border border-outline-variant/20 bg-surface text-on-surface text-[0.95rem] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/15 transition-all duration-200 placeholder:text-on-surface-variant/20"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant/45">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) =>
                    setData((d) => ({ ...d, email: e.target.value }))
                  }
                  placeholder="tu@empresa.com"
                  className="px-4 py-3.5 rounded-[0.5rem] border border-outline-variant/20 bg-surface text-on-surface text-[0.95rem] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/15 transition-all duration-200 placeholder:text-on-surface-variant/20"
                />
              </div>

              <p
                id="form-error"
                role="alert"
                aria-live="polite"
                className={`text-[0.84rem] text-red-600 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                {error || "\u00A0"}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
                <button
                  type="submit"
                  disabled={isPending}
                  aria-describedby={error ? "form-error" : undefined}
                  className="inline-block bg-primary text-on-primary px-10 py-4 rounded-[0.5rem] text-[0.8rem] font-bold uppercase tracking-[0.14em] shadow-[0_12px_24px_rgba(0,25,11,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,25,11,0.16)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2"
                >
                  {isPending ? "Enviando…" : "Solicitar diagnóstico →"}
                </button>
                <span className="text-[0.75rem] text-on-surface-variant/40 tracking-[0.02em]">
                  Sin compromiso · Respuesta en 24h
                </span>
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 4: Confirmación ── */}
        {step === 4 && (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8" aria-hidden="true">
              <svg
                className="w-7 h-7 text-secondary"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-light text-primary tracking-[-0.03em] mb-5 leading-[1.1]">
              {firstName ? `Recibido, ${firstName}.` : "Recibido."}
            </h2>
            <p className="text-[1rem] leading-[1.8] text-on-surface-variant max-w-[440px] mx-auto">
              Analizamos tu situación y te enviamos el diagnóstico en menos de
              24h. Si tienes algo urgente, escríbenos a{" "}
              <a
                href="mailto:hola@compitedigital.com"
                className="text-primary underline underline-offset-2"
              >
                hola@compitedigital.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
