import Link from "next/link";
import { ShoppingCart, KeyRound, PlayCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: ShoppingCart,
      title: "Choose Your IPTV Subscription",
      description: (
        <span>
          Select the pass duration that fits your viewing habits on our{" "}
          <Link href="/pricing" className="text-primary-light hover:underline font-semibold">
            subscription pricing page
          </Link>
          —from our starter 1-month pass up to our best-value 12-month VIP plan.
        </span>
      ),
    },
    {
      step: "02",
      icon: KeyRound,
      title: "Receive Instant Activation Details",
      description: (
        <span>
          Your personalized Xtream Codes server URL, username, password, and M3U playlist link are dispatched automatically within minutes. Need assistance? Reach our{" "}
          <Link href="/contact" className="text-primary-light hover:underline font-semibold">
            support desk
          </Link>
          .
        </span>
      ),
    },
    {
      step: "03",
      icon: PlayCircle,
      title: "Install Player & Start Watching",
      description: (
        <span>
          Open your preferred player (such as{" "}
          <Link href="/blog/tivimate-iptv-player-setup-guide" className="text-primary-light hover:underline">
            TiviMate
          </Link>{" "}
          or{" "}
          <Link href="/blog/iptv-smarters-pro-setup-guide" className="text-primary-light hover:underline">
            IPTV Smarters
          </Link>
          ) following our{" "}
          <Link href="/installation" className="text-primary-light hover:underline font-semibold">
            installation guides
          </Link>
          , enter your credentials, and enjoy 4K streaming.
        </span>
      ),
    },
  ];

  return (
    <section className="py-20 bg-background-secondary/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Quick Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Order to Live Streaming in 3 Minutes
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Getting started with TVoxar IPTV is streamlined and automated. No complicated equipment, no technician visits, and no contracts. Review our{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              subscription plans
            </Link>{" "}
            or learn more about our{" "}
            <Link
              href="/features"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              streaming infrastructure
            </Link>
            .
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-surface border border-border hover:border-primary/40 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                {/* Step Number Watermark */}
                <span className="text-5xl font-black text-text-muted/20 absolute top-6 right-6 select-none font-mono">
                  {item.step}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary-light mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-glow hover:shadow-xl transition-all"
          >
            <span>Get Started with TVoxar IPTV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
