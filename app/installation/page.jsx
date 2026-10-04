import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { installationGuides } from "../../lib/installation-data";
import { Flame, Tv, Smartphone, Apple, Monitor, Box, Radio, Cast, ArrowRight, Clock, Gauge, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "IPTV Installation Center & Setup Guides (2026) - TVoxar IPTV",
  description:
    "Official TVoxar IPTV installation center. Step-by-step setup tutorials for Amazon Firestick, Samsung & LG Smart TV, Android, Apple TV, Windows, MAG, and Formuler.",
  alternates: {
    canonical: `${siteConfig.domain}/installation`,
  },
};

export default function InstallationHubPage() {
  const iconMap = {
    firestick: Flame,
    "samsung-lg-smart-tv": Tv,
    android: Smartphone,
    "apple-tv-ios": Apple,
    "windows-mac": Monitor,
    "mag-box": Box,
    "formuler-box": Radio,
    roku: Cast,
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Installation Guides", href: "/installation" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Device Setup Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Installation &amp; Setup Center
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Follow our tested, step-by-step IPTV setup tutorials to connect TVoxar IPTV on any device in under 5 minutes. All configurations use standard Xtream Codes API credentials or M3U playlist URLs for instant automated activation. If you haven&apos;t secured your subscription yet, select an{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              IPTV subscription plan
            </Link>{" "}
            first, or review our{" "}
            <Link
              href="/devices"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              supported devices overview
            </Link>
            .
          </p>
        </div>

        {/* Prerequisites Banner */}
        <div className="my-12 p-8 rounded-2xl bg-surface border border-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-1">1. Active TVoxar IPTV Pass</h3>
              <p className="text-xs text-text-muted">
                Keep your welcome activation email handy with your server URL, username, and password. Need a pass?{" "}
                <Link href="/pricing" className="text-primary-light hover:underline font-semibold">
                  Select your plan here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-1">2. Stable 15+ Mbps Internet</h3>
              <p className="text-xs text-text-muted">
                Connect via 5GHz Wi-Fi or Ethernet cable for smooth buffer-free 4K playback. Experiencing lag? See our{" "}
                <Link href="/blog/fix-iptv-buffering-freezing-guide" className="text-primary-light hover:underline font-semibold">
                  anti-buffering guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-1">3. Under 5 Minutes Setup</h3>
              <p className="text-xs text-text-muted">
                Download your preferred IPTV player, input your credentials, and enjoy instant live streaming. Compare options in our{" "}
                <Link href="/blog/best-iptv-players-guide" className="text-primary-light hover:underline font-semibold">
                  best IPTV players 2026 guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {installationGuides.map((guide) => {
            const Icon = iconMap[guide.slug] || Tv;
            return (
              <div
                key={guide.slug}
                className="bg-surface/80 border border-border hover:border-primary/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-card group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-text-muted bg-background/60 px-2.5 py-1 rounded-full border border-border">
                      {guide.estimatedTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {guide.device}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {guide.shortDesc}
                  </p>

                  <div className="text-xs text-text-secondary bg-background/50 p-3 rounded-xl border border-border/70 mb-6">
                    <span className="text-text-muted">Top Player:</span>{" "}
                    <strong className="text-white">{guide.recommendedApps.join(" / ")}</strong>
                  </div>
                </div>

                <Link
                  href={`/installation/${guide.slug}`}
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary/10 hover:bg-primary border border-primary/30 transition-all group-hover:shadow-glow"
                >
                  <span>View {guide.device} IPTV Setup Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="my-16 text-center bg-surface border border-border rounded-2xl p-8 max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white">Need Personal Assistance Setting Up TVoxar IPTV?</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            If you encounter any difficulty or need guidance choosing the best player for your streaming setup, consult our{" "}
            <Link href="/faq" className="text-primary-light hover:underline font-semibold">
              installation FAQ
            </Link>{" "}
            or open a ticket with our 24/7 technical helpdesk.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary hover:bg-primary-light transition-colors"
          >
            Contact TVoxar IPTV Support
          </Link>
        </div>

        {/* CTA */}
        <CtaBanner />
      </div>
    </div>
  );
}
