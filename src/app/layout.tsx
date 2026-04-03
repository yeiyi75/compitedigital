import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, professionalServiceSchema, websiteSchema } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://compitedigital.com";

export const metadata: Metadata = {
  title: {
    default: "Compite Digital — Diseño Web, SEO y GEO: Estrategia de Presencia Digital para Empresas",
    template: "%s | Compite Digital",
  },
  description:
    "Compite Digital diseña webs de alto rendimiento y optimiza tu presencia en buscadores (SEO) y en motores de IA como ChatGPT y Perplexity (GEO). Diagnóstico digital gratuito.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Compite Digital",
    title: "Compite Digital — Diseño Web, SEO y GEO para Empresas",
    description:
      "Estrategia digital integral: diseño web moderno, posicionamiento SEO y optimización para motores de IA (GEO). Diagnóstico gratuito.",
    url: SITE_URL,
    images: [
      {
        url: "/images/compiteHero.png",
        width: 1400,
        height: 700,
        alt: "Compite Digital — Estrategia de presencia digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compite Digital — Diseño Web, SEO y GEO",
    description:
      "Estrategia digital, diseño web y posicionamiento en buscadores y motores de IA para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${newsreader.variable} ${dmSans.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        <JsonLd data={websiteSchema} />
        <JsonLd data={professionalServiceSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
