import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteConfig } from "../lib/site-config";

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "TVoxar IPTV - Official Website | Next-Gen 4K IPTV Subscription & Streaming",
    template: "%s",
  },
  description:
    "TVoxar IPTV delivers ultra-fast 4K live TV, 60 FPS sports, and VOD cinema with Anti-Freeze 9.3 technology. Get instant activation on Firestick, Smart TV, and Android.",
  keywords: [
    "TVoxar",
    "TVoxar IPTV",
    "TVoxar IPTV subscription",
    "best iptv service",
    "4k iptv subscription",
    "iptv stream",
    "iptv firestick",
    "iptv smart tv",
    "live sports iptv",
    "anti freeze iptv",
  ],
  authors: [{ name: "TVoxar Engineering Team" }],
  creator: "TVoxar",
  publisher: "TVoxar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    title: "TVoxar IPTV - Official Website | Next-Gen 4K IPTV Subscription & Streaming",
    description:
      "TVoxar IPTV delivers ultra-fast 4K live TV, 60 FPS sports, and VOD cinema with Anti-Freeze 9.3 technology. Get instant activation on Firestick, Smart TV, and Android.",
    images: [
      {
        url: `${siteConfig.domain}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "TVoxar IPTV Streaming Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TVoxar IPTV - Official Website | Next-Gen 4K IPTV Subscription & Streaming",
    description:
      "TVoxar IPTV delivers ultra-fast 4K live TV, 60 FPS sports, and VOD cinema with Anti-Freeze 9.3 technology. Get instant activation on Firestick, Smart TV, and Android.",
    images: [`${siteConfig.domain}/og-image.svg`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.brandName,
        url: siteConfig.domain,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.domain}/#logo`,
          url: `${siteConfig.domain}/logo.svg`,
          caption: siteConfig.brandName,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.supportEmail,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.brandName,
        publisher: {
          "@id": `${siteConfig.domain}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.domain}/blog?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text selection:bg-primary selection:text-white">
        <JsonLd data={orgSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
