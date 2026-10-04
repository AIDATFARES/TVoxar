import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "fix-iptv-buffering-freezing-guide");

export const metadata = {
  title: "TVoxar IPTV - How to Fix IPTV Buffering & Freezing | Anti-Buffering Guide",
  description:
    "TVoxar IPTV complete troubleshooting guide to stop buffering and stream freezing. Discover ISP throttling fixes, cache optimization, DNS tweaks, and VPN tips.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/fix-iptv-buffering-freezing-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - How to Fix IPTV Buffering & Freezing | Anti-Buffering Guide",
    description:
      "TVoxar IPTV complete troubleshooting guide to stop buffering and stream freezing. Discover ISP throttling fixes, cache optimization, DNS tweaks, and VPN tips.",
    url: `${siteConfig.domain}/blog/fix-iptv-buffering-freezing-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
