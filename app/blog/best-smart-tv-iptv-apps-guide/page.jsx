import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "best-smart-tv-iptv-apps-guide");

export const metadata = {
  title: "TVoxar IPTV - Best Smart TV IPTV Apps for Samsung & LG | Tizen & webOS",
  description:
    "TVoxar IPTV comparison of the top Smart TV applications for Samsung and LG: IBO Player, Smart IPTV, Nanomid, and IPTV Smarters. Easy setup from the app store.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/best-smart-tv-iptv-apps-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - Best Smart TV IPTV Apps for Samsung & LG | Tizen & webOS",
    description:
      "TVoxar IPTV comparison of the top Smart TV applications for Samsung and LG: IBO Player, Smart IPTV, Nanomid, and IPTV Smarters. Easy setup from the app store.",
    url: `${siteConfig.domain}/blog/best-smart-tv-iptv-apps-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
