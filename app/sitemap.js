import { siteConfig } from "../lib/site-config";
import { installationGuides } from "../lib/installation-data";
import { blogArticles } from "../lib/blog-data";

export default function sitemap() {
  const baseUrl = siteConfig.domain;
  const now = new Date();

  // Core Pages
  const coreRoutes = [
    "",
    "/pricing",
    "/features",
    "/devices",
    "/channels",
    "/installation",
    "/faq",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/cookie-policy",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/pricing" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" ? 0.9 : 0.8,
  }));

  // Installation Guides
  const installationRoutes = installationGuides.map((guide) => ({
    url: `${baseUrl}/installation/${guide.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Blog Articles
  const blogRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...coreRoutes, ...installationRoutes, ...blogRoutes];
}
