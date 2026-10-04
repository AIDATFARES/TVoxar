import BlogArticleLayout from "../../../components/BlogArticleLayout";
import { siteConfig } from "../../../lib/site-config";
import { blogArticles } from "../../../lib/blog-data";

const article = blogArticles.find((a) => a.slug === "best-vpn-for-iptv-streaming-guide");

export const metadata = {
  title: "TVoxar IPTV - Best VPN for IPTV Streaming | Bypass Throttling & ISP Blocks",
  description:
    "TVoxar IPTV guide to the top tested VPNs for streaming: ExpressVPN, NordVPN, and Surfshark. Stop ISP throttling, encrypt traffic, and enjoy buffer-free 4K sports.",
  alternates: {
    canonical: `${siteConfig.domain}/blog/best-vpn-for-iptv-streaming-guide`,
  },
  openGraph: {
    title: "TVoxar IPTV - Best VPN for IPTV Streaming | Bypass Throttling & ISP Blocks",
    description:
      "TVoxar IPTV guide to the top tested VPNs for streaming: ExpressVPN, NordVPN, and Surfshark. Stop ISP throttling, encrypt traffic, and enjoy buffer-free 4K sports.",
    url: `${siteConfig.domain}/blog/best-vpn-for-iptv-streaming-guide`,
    images: [{ url: `${siteConfig.domain}${article.image}` }],
  },
};

export default function ArticlePage() {
  return <BlogArticleLayout article={article} />;
}
