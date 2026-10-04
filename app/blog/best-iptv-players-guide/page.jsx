import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "best-iptv-players-guide");

export const metadata = {
  title: "TVoxar IPTV - Best IPTV Players in 2026 | Top Apps for Firestick & Smart TVs",
  description:
    "TVoxar IPTV expert review of the best IPTV player apps in 2026: TiviMate, IPTV Smarters Pro, IBO Player, and IPTVX. Compare features, EPG support, and performance.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/best-iptv-players-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - Best IPTV Players in 2026 | Top Apps for Firestick & Smart TVs",
    description:
      "TVoxar IPTV expert review of the best IPTV player apps in 2026: TiviMate, IPTV Smarters Pro, IBO Player, and IPTVX. Compare features, EPG support, and performance.",
    url: `${siteConfig.domain}/blog/best-iptv-players-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
