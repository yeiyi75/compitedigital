import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-[800px] mx-auto pt-40 px-6 pb-20">
      {/* Post Header */}
      <header className="mb-12">
        <time className="text-[0.72rem] uppercase font-bold tracking-[0.12em] text-on-surface-variant/50 block mb-4">
          {post.dateFormatted}
        </time>
        <h1 className="font-display text-[clamp(2.2rem,4vw,3rem)] font-light text-primary leading-[1.1] tracking-[-0.02em] mb-6">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-[1.15rem] leading-[1.7] text-on-surface-variant">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* MDX Content */}
      <div className="prose-compite">
        <MDXRemote source={post.content} />
      </div>

      {/* Back link */}
      <nav className="mt-20 pt-10 border-t border-outline-variant/20">
        <Link
          href="/blog"
          className="text-[0.78rem] uppercase font-bold tracking-[0.12em] text-secondary no-underline hover:text-secondary-container transition-colors duration-300"
        >
          ← Volver al blog
        </Link>
      </nav>
    </article>
  );
}
