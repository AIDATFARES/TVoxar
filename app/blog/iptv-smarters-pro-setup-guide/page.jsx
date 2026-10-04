import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "iptv-smarters-pro-setup-guide");

export const metadata = {
  title: "TVoxar IPTV - IPTV Smarters Pro Setup Guide | Firestick, Android & Smart TV",
  description:
    "TVoxar IPTV installation tutorial for IPTV Smarters Pro. Learn how to configure Xtream Codes API, load EPG, and stream live 4K channels on any device.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/iptv-smarters-pro-setup-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - IPTV Smarters Pro Setup Guide | Firestick, Android & Smart TV",
    description:
      "TVoxar IPTV installation tutorial for IPTV Smarters Pro. Learn how to configure Xtream Codes API, load EPG, and stream live 4K channels on any device.",
    url: `${siteConfig.domain}/blog/iptv-smarters-pro-setup-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
