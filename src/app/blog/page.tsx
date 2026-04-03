import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre estrategia digital, SEO, GEO (Generative Engine Optimization) y presencia digital para empresas.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-primary tracking-[-0.02em]">
            Blog
          </h1>
          <p className="mt-3 text-[1.05rem] text-on-surface-variant max-w-[600px]">
            Estrategia digital, SEO y GEO: ideas y análisis que puedes aplicar a
            tu negocio.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <time className="text-[0.72rem] uppercase font-bold tracking-[0.12em] text-on-surface-variant/50">
                  {post.dateFormatted}
                </time>
                <h2 className="font-display text-[1.3rem] font-normal text-primary mt-2 mb-3 tracking-[-0.01em]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="no-underline text-primary hover:text-secondary transition-colors duration-300"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[0.9rem] leading-[1.7] text-on-surface-variant line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-[1.1rem]">
              Pronto publicaremos contenido. Vuelve a visitarnos.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
