import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export async function BlogPreview() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-primary tracking-[-0.02em]">
              Blog
            </h2>
            <p className="mt-3 text-[1.05rem] text-on-surface-variant">
              Estrategia digital, SEO y GEO: ideas que puedes aplicar hoy.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[0.78rem] uppercase font-bold tracking-[0.12em] text-secondary no-underline hover:text-secondary-container transition-colors duration-300"
          >
            Ver todos →
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.slug} className="group">
              <time className="text-[0.72rem] uppercase font-bold tracking-[0.12em] text-on-surface-variant/50">
                {post.dateFormatted}
              </time>
              <h3 className="font-display text-[1.3rem] font-normal text-primary mt-2 mb-3 tracking-[-0.01em]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="no-underline text-primary hover:text-secondary transition-colors duration-300"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-on-surface-variant line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
