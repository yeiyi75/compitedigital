import { Hero } from "@/components/home/Hero";
import { Servicios } from "@/components/home/Servicios";
import { GeoSection } from "@/components/home/GeoSection";
import { Proceso } from "@/components/home/Proceso";
import { CtaFinal } from "@/components/home/CtaFinal";
import { BlogPreview } from "@/components/home/BlogPreview";
import { JsonLd, faqPageSchema, serviceCatalogSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <JsonLd data={serviceCatalogSchema} />
      <Hero />
      <Servicios />
      <GeoSection />
      <Proceso />
      <CtaFinal />
      <BlogPreview />
    </>
  );
}
