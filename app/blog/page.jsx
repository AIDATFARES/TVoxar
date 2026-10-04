import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { blogArticles } from "../../lib/blog-data";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "IPTV Blog, Guides & Streaming Insights - TVoxar IPTV",
  description:
    "Explore in-depth IPTV tutorials, troubleshooting guides, IPTV player comparisons, and streaming tips published by the TVoxar engineering team.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  const featured = blogArticles[0];
  const regularPosts = blogArticles.slice(1);

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog & Tutorials", href: "/blog" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            IPTV Knowledge &amp; Tutorials
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Tutorials, News &amp; Streaming Guides
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Explore expert, tested IPTV tutorials covering top IPTV players, anti-buffering optimization, Smart TV setup, and VPN configurations curated by the TVoxar IPTV engineering team. Ready to stream? View our{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              IPTV subscription plans
            </Link>
            , explore our{" "}
            <Link
              href="/features"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              Anti-Freeze features
            </Link>
            , or browse our{" "}
            <Link
              href="/installation"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              device installation center
            </Link>
            .
          </p>
        </div>

        {/* Featured Post Card */}
        {featured && (
          <div className="my-12">
            <div className="relative rounded-3xl overflow-hidden bg-surface border border-border hover:border-primary/50 transition-all duration-300 shadow-card group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-border bg-background aspect-video relative">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary-light font-bold">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary-light transition-colors leading-snug">
                  <Link href={`/blog/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-primary-light hover:text-white transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface/80 border border-border hover:border-primary/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
            >
              <div>
                <div className="relative border-b border-border bg-background aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="font-semibold text-primary-light">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
