import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import CtaBanner from "./CtaBanner";
import { siteConfig } from "../lib/site-config";
import { blogArticles } from "../lib/blog-data";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";

function parseMarkdownToHtml(markdown, headings = []) {
  if (!markdown) return "";

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const parseInline = (str) => {
    return str
      .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-primary-light hover:text-white underline decoration-primary/50 underline-offset-2 transition-colors font-medium'>$1</a>")
      .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>")
      .replace(/\*([^*\n]+)\*/g, "<em class='text-text-primary'>$1</em>")
      .replace(/`([^`\n]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-background border border-border text-primary-light font-mono text-xs'>$1</code>");
  };

  const blocks = markdown.split(/\n\s*\n/);
  const htmlBlocks = blocks.map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return "";

    if (trimmed === "---") {
      return "<hr class='border-border my-8' />";
    }

    if (trimmed.startsWith("## ")) {
      const rawText = trimmed.replace(/^##\s+/, "");
      let id = "";
      let displayText = rawText;
      const idMatch = rawText.match(/\{#(.*?)\}$/);
      if (idMatch) {
        id = idMatch[1];
        displayText = rawText.replace(/\s*\{#.*?\}$/, "");
      } else {
        const found = headings.find(
          (h) => h.text.toLowerCase() === rawText.toLowerCase() || rawText.toLowerCase().includes(h.text.toLowerCase())
        );
        id = found ? found.id : slugify(displayText);
      }
      return `<h2 id='${id}' class='text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-4 scroll-mt-24 border-b border-border/60 pb-3'>${parseInline(displayText)}</h2>`;
    }

    if (trimmed.startsWith("### ")) {
      const rawText = trimmed.replace(/^###\s+/, "");
      let id = "";
      let displayText = rawText;
      const idMatch = rawText.match(/\{#(.*?)\}$/);
      if (idMatch) {
        id = idMatch[1];
        displayText = rawText.replace(/\s*\{#.*?\}$/, "");
      } else {
        const found = headings.find(
          (h) => h.text.toLowerCase() === rawText.toLowerCase() || rawText.toLowerCase().includes(h.text.toLowerCase())
        );
        id = found ? found.id : slugify(displayText);
      }
      return `<h3 id='${id}' class='text-xl sm:text-2xl font-bold text-white mt-8 mb-3 scroll-mt-24'>${parseInline(displayText)}</h3>`;
    }

    if (trimmed.startsWith("#### ")) {
      const rawText = trimmed.replace(/^####\s+/, "");
      return `<h4 class='text-lg font-bold text-white mt-6 mb-2'>${parseInline(rawText)}</h4>`;
    }

    if (trimmed.startsWith("> ")) {
      const quoteText = trimmed
        .split("\n")
        .map((line) => line.replace(/^>\s?/, ""))
        .join(" ");
      return `<blockquote class='p-4 my-6 border-l-4 border-primary bg-surface/80 rounded-r-xl text-text-primary text-sm sm:text-base leading-relaxed'>${parseInline(quoteText)}</blockquote>`;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed
        .split("\n")
        .filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "))
        .map((l) => `<li class='leading-relaxed text-text-secondary'>${parseInline(l.trim().replace(/^[-*]\s+/, ""))}</li>`)
        .join("");
      return `<ul class='list-disc pl-6 space-y-2 mb-6 text-text-secondary'>${items}</ul>`;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^\d+\.\s/.test(l.trim()))
        .map((l) => `<li class='leading-relaxed text-text-secondary'>${parseInline(l.trim().replace(/^\d+\.\s+/, ""))}</li>`)
        .join("");
      return `<ol class='list-decimal pl-6 space-y-2 mb-6 text-text-secondary'>${items}</ol>`;
    }

    if (trimmed.includes("|") && trimmed.includes("\n")) {
      const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
      if (lines.length >= 2) {
        const headerCols = lines[0]
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        const bodyLines = lines.slice(2);
        const thead = `<thead class='bg-surface border-b border-border text-xs uppercase text-text-muted'><tr>${headerCols.map((c) => `<th class='py-3 px-4 text-left font-bold'>${parseInline(c)}</th>`).join("")}</tr></thead>`;
        const tbody = `<tbody class='divide-y divide-border/60 text-xs sm:text-sm'>${bodyLines.map((row) => {
          const cells = row.split("|").map((c) => c.trim()).filter(Boolean);
          return `<tr>${cells.map((cell) => `<td class='py-3 px-4 text-text-secondary'>${parseInline(cell)}</td>`).join("")}</tr>`;
        }).join("")}</tbody>`;
        return `<div class='overflow-x-auto my-8 rounded-2xl border border-border bg-surface/40 shadow-sm'><table class='w-full text-left'>${thead}${tbody}</table></div>`;
      }
    }

    const cleanedParagraph = trimmed.split("\n").join(" ");
    return `<p class='leading-relaxed text-text-secondary text-sm sm:text-base mb-5'>${parseInline(cleanedParagraph)}</p>`;
  });

  return htmlBlocks.filter(Boolean).join("\n");
}

export default function BlogArticleLayout({ article }) {
  const related = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.domain}${article.image}`,
    author: {
      "@type": "Organization",
      name: "TVoxar Engineering Team",
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/logo.svg`,
      },
    },
    datePublished: "2026-03-15T08:00:00+00:00",
    dateModified: "2026-10-02T12:00:00+00:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${article.slug}`,
    },
  };

  return (
    <article className="pt-20 pb-12">
      <JsonLd data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: article.title, href: `/blog/${article.slug}` },
          ]}
        />

        {/* Back Link */}
        <div className="mt-2 mb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-primary-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 my-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary-light font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-text-muted">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1 text-text-muted">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-text-muted">
              <User className="w-3.5 h-3.5" />
              {typeof article.author === "object" ? article.author.name : article.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed pt-2">
            {article.excerpt}
          </p>
        </header>

        {/* Featured Visual */}
        <div className="my-8 rounded-2xl overflow-hidden border border-border bg-surface shadow-card">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Table of Contents */}
        {((article.headings && article.headings.length > 0) || (article.tableOfContents && article.tableOfContents.length > 0)) && (
          <div className="my-8 p-6 rounded-2xl bg-surface/60 border border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-3">
              Table of Contents:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
              {(article.tableOfContents || article.headings).map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="hover:text-primary-light transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span>{h.title || h.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="my-10 text-text-secondary text-sm sm:text-base leading-relaxed space-y-4">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: parseMarkdownToHtml(article.content, article.headings),
            }}
          />
        </div>

        {/* Related Articles */}
        <div className="my-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-white mb-6">
            Related Guides &amp; Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <div
                key={rel.slug}
                className="bg-surface/80 border border-border hover:border-primary/50 rounded-xl p-5 flex flex-col justify-between transition-all hover:shadow-card group"
              >
                <div>
                  <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2 mt-1 mb-2">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                </div>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-light pt-2"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          title="Enhance Your IPTV Streaming Experience"
          description="Get premium 4K channels and sports feeds with TVoxar's Anti-Freeze 9.3 network."
          buttonText="Explore Subscription Plans"
          buttonHref="/pricing"
        />
      </div>
    </article>
  );
}
