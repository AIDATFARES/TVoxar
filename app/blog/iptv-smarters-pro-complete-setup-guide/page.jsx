import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "iptv-smarters-pro-complete-setup-guide");

export const metadata = {
  title: `${article.title} - TVoxar IPTV`,
  description: article.excerpt,
  alternates: {
    canonical: `${siteConfig.domain}/blog/iptv-smarters-pro-complete-setup-guide`,
  },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${siteConfig.domain}/blog/iptv-smarters-pro-complete-setup-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
