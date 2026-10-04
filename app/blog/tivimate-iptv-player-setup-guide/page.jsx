import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "tivimate-iptv-player-setup-guide");

export const metadata = {
  title: "TVoxar IPTV - TiviMate Premium Setup Guide | Multi-Screen & EPG Config",
  description:
    "TVoxar IPTV complete guide to setting up TiviMate Premium on Android TV and Firestick. Configure Xtream Codes API, 4-screen multi-view, and automated EPG schedules.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/tivimate-iptv-player-setup-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - TiviMate Premium Setup Guide | Multi-Screen & EPG Config",
    description:
      "TVoxar IPTV complete guide to setting up TiviMate Premium on Android TV and Firestick. Configure Xtream Codes API, 4-screen multi-view, and automated EPG schedules.",
    url: `${siteConfig.domain}/blog/tivimate-iptv-player-setup-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
