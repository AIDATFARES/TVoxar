import Link from "next/link";
import { Flame, Tv, Smartphone, Apple, Monitor, Box, Radio, Cast, ArrowRight } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export default function DeviceGrid() {
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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Universal Compatibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stream TVoxar on All Your Favorite Devices
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Whether you watch on your living room 4K TV, computer, or smartphone while traveling, TVoxar supports your preferred streaming setup. Browse our full{" "}
            <Link
              href="/devices"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              device compatibility overview
            </Link>
            , explore our comprehensive{" "}
            <Link
              href="/installation"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              installation guides hub
            </Link>
            , or choose a{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              subscription plan
            </Link>{" "}
            to begin.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.supportedDevices.map((device) => {
            const Icon = iconMap[device.slug] || Tv;
            return (
              <div
                key={device.slug}
                className="bg-surface/70 border border-border hover:border-primary/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
                    {device.name}
                  </h3>
                  <div className="text-xs font-semibold text-primary-light/90 mb-3">
                    {device.subtitle}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {device.description}
                  </p>
                  <div className="text-[11px] text-text-secondary bg-background/60 px-3 py-1.5 rounded-lg border border-border/80 mb-4 inline-block">
                    <span className="text-text-muted">Top App:</span> {device.recommendedApp}
                  </div>
                </div>

                <Link
                  href={device.guideHref}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-light hover:text-white pt-3 border-t border-border/80 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>View Step-by-Step Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Need personal setup assistance?</h4>
            <p className="text-xs sm:text-sm text-text-muted">
              Our 24/7 technical team can walk you through configuring your device step-by-step. Review our{" "}
              <Link href="/faq" className="text-primary-light hover:underline font-semibold">
                frequently asked questions
              </Link>{" "}
              or message our support desk directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary hover:bg-primary-light transition-colors whitespace-nowrap flex-shrink-0"
          >
            Contact Setup Support
          </Link>
        </div>
      </div>
    </section>
  );
}
