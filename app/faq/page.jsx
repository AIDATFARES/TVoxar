import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import FaqAccordion from "../../components/FaqAccordion";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { HelpCircle, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) - TVoxar IPTV",
  description:
    "Find answers to all your questions about TVoxar IPTV: setup times, device compatibility, internet speeds, payment methods, VPN support, and Anti-Freeze 9.3.",
  alternates: {
    canonical: `${siteConfig.domain}/faq`,
  },
};

export default function FaqPage() {
  const fullFaqs = [
    ...siteConfig.faqs,
    {
      q: "Can I use TVoxar while traveling internationally?",
      a: "Yes. TVoxar has no geographic IP locks. You can take your Firestick or login with your mobile phone or laptop wherever you travel, provided you have a steady broadband or mobile data connection of 15+ Mbps.",
      category: "General",
    },
    {
      q: "What is the difference between M3U Plus and Xtream Codes API?",
      a: "Xtream Codes API is a modern structured connection method consisting of a Server URL, Username, and Password. It allows your player to download separate categories for Live TV, Movies, and Series with fast EPG data. An M3U Plus URL is a raw text playlist link that serves as a universal fallback for players that do not support API logins.",
      category: "Technical",
    },
    {
      q: "What should I do if my player shows 'Invalid Credentials' or 'Playlist Error'?",
      a: "Double-check that there are no accidental spaces before or after your username, password, or server URL. Also check that your internet connection is active and that your device time is set accurately. If the issue persists, contact our 24/7 support team.",
      category: "Technical",
    },
    {
      q: "Does TVoxar support Catch-up and Timeshift?",
      a: "Yes! On select high-demand sports and premium entertainment channels, TVoxar supports up to 48 hours of catch-up on player applications that support the archive protocol, such as TiviMate and MYTVOnline.",
      category: "Streaming",
    },
    {
      q: "Can I record live broadcasts?",
      a: "Recording capability depends on your IPTV player software and device storage. Apps like TiviMate on Android TV and Formuler MYTVOnline allow you to record live streams directly to internal storage or a connected USB drive.",
      category: "Streaming",
    },
    {
      q: "How do I renew my pass when it expires?",
      a: "To renew, simply purchase your preferred pass duration through our Pricing page and include your existing username in the order note, or reach out to our support team. Your account expiration will be extended without needing to reconfigure your apps.",
      category: "Subscription",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions", href: "/faq" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Help &amp; Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Everything you need to know about TVoxar IPTV subscriptions, stream quality, device installation, and network optimization.
          </p>
        </div>

        {/* Faq Accordion with Categories */}
        <div className="my-16">
          <FaqAccordion faqs={fullFaqs} showCategories={true} />
        </div>

        {/* Support Callout */}
        <div className="my-16 p-8 rounded-2xl bg-surface border border-border max-w-3xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Still Have Questions?</h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
            Our technical support specialists are available 24/7 to answer any technical or billing questions you may have before or after subscribing.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary hover:bg-primary-light transition-colors"
          >
            Contact Customer Support
          </Link>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
