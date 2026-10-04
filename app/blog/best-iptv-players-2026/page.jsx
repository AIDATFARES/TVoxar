import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "best-iptv-players-2026");

export const metadata = {
  title: `${article.title} - TVoxar IPTV`,
  description: article.excerpt,
  alternates: {
    canonical: `${siteConfig.domain}/blog/best-iptv-players-2026`,
  },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${siteConfig.domain}/blog/best-iptv-players-2026`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
