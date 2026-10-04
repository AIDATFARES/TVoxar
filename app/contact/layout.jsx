import { siteConfig } from "../../lib/site-config";

export const metadata = {
  title: "TVoxar IPTV - 24/7 Customer Support & Priority Technical Helpdesk",
  description:
    "TVoxar IPTV customer care and priority technical support. Our 24/7 team assists with playlist setup, app activation, multi-screen passes, and instant credential dispatch.",
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
  openGraph: {
    title: "TVoxar IPTV - 24/7 Customer Support & Priority Technical Helpdesk",
    description:
      "TVoxar IPTV customer care and priority technical support. Our 24/7 team assists with playlist setup, app activation, multi-screen passes, and instant credential dispatch.",
    url: `${siteConfig.domain}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
