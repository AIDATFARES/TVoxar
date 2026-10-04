import Link from "next/link";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import EntertainmentShowcase from "../components/EntertainmentShowcase";
import DeviceGrid from "../components/DeviceGrid";
import HowItWorks from "../components/HowItWorks";
import PricingCard from "../components/PricingCard";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import { siteConfig } from "../lib/site-config";
import { Zap, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV Official Website - Next-Gen 4K IPTV Subscription",
  description:
    "Official TVoxar IPTV website. Get instant access to premium 4K UHD live TV channels, live sports, and VOD movies with Anti-Freeze 9.3 streaming technology.",
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Technology & Features */}
      <FeatureGrid />

      {/* 3. Pricing Section */}
      <section className="py-24 relative" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Choose Your TVoxar Subscription Plan
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Every plan includes our full channel lineup, sports broadcasts, on-demand movies, and Anti-Freeze 9.3 stream stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isFeatured={plan.popular} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-text-muted">
              Need multi-screen connections or a customized setup?{" "}
              <Link href="/contact" className="text-primary-light hover:underline font-semibold">
                Speak directly with TVoxar support
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Live Sports & Cinema Showcase */}
      <EntertainmentShowcase />

      {/* 5. Supported Devices & Guides */}
      <DeviceGrid />

      {/* 6. 3-Step Setup Flow */}
      <HowItWorks />

      {/* 7. Homepage Frequently Asked Questions */}
      <section className="py-20 bg-background-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything You Need to Know About TVoxar
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Have questions regarding device setup, stream stability, or connection delivery? Browse our quick answers below.
            </p>
          </div>

          <FaqAccordion faqs={siteConfig.faqs.slice(0, 6)} />

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-primary-light hover:text-white transition-colors"
            >
              Browse all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Conversion Banner */}
      <CtaBanner />
    </div>
  );
}
