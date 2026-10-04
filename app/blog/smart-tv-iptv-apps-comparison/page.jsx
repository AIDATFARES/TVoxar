import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "smart-tv-iptv-apps-comparison");

export const metadata = {
  title: `${article.title} - TVoxar IPTV`,
  description: article.excerpt,
  alternates: {
    canonical: `${siteConfig.domain}/blog/smart-tv-iptv-apps-comparison`,
  },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${siteConfig.domain}/blog/smart-tv-iptv-apps-comparison`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
