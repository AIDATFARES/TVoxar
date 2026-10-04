import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { Flame, Tv, Smartphone, Apple, Monitor, Box, Radio, Cast, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV - Supported Devices & Compatibility | Firestick, Smart TV & Android",
  description:
    "TVoxar IPTV works seamlessly across Amazon Firestick, Samsung & LG Smart TVs, Android TV, Apple TV, PC, MAG, and Formuler. View apps and setup guides.",
  alternates: {
    canonical: `${siteConfig.domain}/devices`,
  },
};

export default function DevicesPage() {
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
        <Breadcrumbs items={[{ label: "Supported Devices", href: "/devices" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Multi-Device IPTV Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stream TVoxar IPTV on Any Screen or Streaming Device
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            TVoxar IPTV is fully optimized for virtually every modern screen and streaming hardware ecosystem. Whether you watch on an Amazon Firestick, Android TV box, Samsung or LG Smart TV, Apple TV, or PC, select your platform below for dedicated step-by-step setup guides, or visit our central{" "}
            <Link
              href="/installation"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              installation hub
            </Link>
            . Need to order your credentials first? Explore our{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              subscription plans
            </Link>{" "}
            or learn about our{" "}
            <Link
              href="/features"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              Anti-Freeze streaming technology
            </Link>
            .
          </p>
        </div>

        {/* Devices Visual Graphic */}
        <div className="max-w-4xl mx-auto my-12 rounded-2xl overflow-hidden border border-border bg-surface shadow-card">
          <Image
            src="/images/devices-all.jpg"
            alt="TVoxar Supported Devices Hardware Family Mockup"
            width={700}
            height={360}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Device Detailed Cards */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Supported Devices &amp; Platform Compatibility
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              Optimized application recommendations and configuration guides for all major operating systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.supportedDevices.map((device) => {
              const Icon = iconMap[device.slug] || Tv;
              return (
                <div
                  key={device.slug}
                  className="bg-surface/80 border border-border hover:border-primary/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-card group"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">
                          {device.name}
                        </h3>
                        <span className="text-xs font-medium text-text-muted">
                          {device.subtitle}
                        </span>
                      </div>
                    </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {device.description}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-text-muted bg-background/50 p-4 rounded-xl border border-border/80">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>
                        <strong className="text-text-secondary">Recommended App:</strong>{" "}
                        {device.recommendedApp}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>
                        <strong className="text-text-secondary">Connection Method:</strong>{" "}
                        Xtream Codes API &amp; M3U Plus
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={device.guideHref}
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary/10 hover:bg-primary border border-primary/30 transition-all group-hover:shadow-glow"
                >
                  <span>Read Complete IPTV Setup Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
          </div>
        </div>

        {/* CTA Banner */}
        <CtaBanner
          title="Ready to Set Up TVoxar IPTV on Your Device?"
          description="Choose your TVoxar IPTV pass, receive instant activation credentials, and start streaming your favorite channels in minutes."
          buttonText="Explore TVoxar IPTV Plans"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
