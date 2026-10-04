import Link from "next/link";
import { Zap, Tv, Shield, Film, Calendar, Smartphone, Lock, Headphones } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: "Anti-Freeze 9.3 Protocol",
      description:
        "Proprietary intelligent traffic routing distributes video data across redundant Tier-1 edge clusters, preventing stream buffering and packet loss during peak live sporting events.",
      tag: "Stream Stability",
    },
    {
      icon: Tv,
      title: "True 4K UHD & 60 FPS Feeds",
      description:
        "Experience stadium-grade action with fluid 60fps high-bitrate video feeds across major international sports broadcasts, paired with pristine multi-channel audio decoding.",
      tag: "Superior Visuals",
    },
    {
      icon: Film,
      title: "Expansive On-Demand VOD Catalog",
      description:
        "Browse an ever-expanding, regularly updated archive of Hollywood blockbusters, timeless classics, and trending television series with multi-language subtitle tracks.",
      tag: "Cinema & Series",
    },
    {
      icon: Calendar,
      title: "Interactive 7-Day EPG Guide",
      description:
        "Stay completely organized with an automated Electronic Program Guide. Track upcoming match kickoffs, check daily air times, and launch catch-up replays on supported players.",
      tag: "Live TV Schedules",
    },
    {
      icon: Smartphone,
      title: "Universal Multi-Device Compatibility",
      description:
        "Stream TVoxar IPTV effortlessly across Amazon Fire TV Stick, Samsung & LG Smart TVs, Apple TV, Android boxes, desktop computers, and dedicated STB receivers.",
      tag: "All Platforms",
    },
    {
      icon: Shield,
      title: "VPN-Compatible Architecture",
      description:
        "Full compatibility with NordVPN, ExpressVPN, Surfshark, and leading VPN providers to bypass ISP bandwidth restrictions and preserve your browsing privacy.",
      tag: "Privacy & Speed",
    },
    {
      icon: Lock,
      title: "Instant Automated IPTV Delivery",
      description:
        "No waiting for manual approvals. Your Xtream Codes API credentials and M3U playlist link are automatically provisioned and dispatched within minutes of ordering.",
      tag: "Immediate Access",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Technical Support",
      description:
        "Our experienced IPTV technicians are available around the clock to help you configure apps, optimize buffer settings, and troubleshoot device connections.",
      tag: "Always Available",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Cutting-Edge Streaming Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Flawless Entertainment
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Discover why cord-cutters, sports enthusiasts, and movie lovers make TVoxar IPTV their trusted everyday streaming service. From zero-buffering live broadcasts to flexible passes, explore our{" "}
            <Link
              href="/channels"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              live television and cinema channels
            </Link>{" "}
            and select your ideal{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              IPTV subscription plan
            </Link>
            .
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-surface/80 border border-border hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-light block mb-1">
                  {feat.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contextual Internal Link Banner */}
        <div className="mt-12 text-center text-xs sm:text-sm text-text-secondary">
          <span>Looking for technical specifications? Explore our full </span>
          <Link
            href="/features"
            className="text-primary-light hover:underline font-semibold"
          >
            IPTV streaming features
          </Link>
          <span>, check our </span>
          <Link
            href="/devices"
            className="text-primary-light hover:underline font-semibold"
          >
            compatible devices
          </Link>
          <span>, or read our </span>
          <Link
            href="/faq"
            className="text-primary-light hover:underline font-semibold"
          >
            frequently asked questions
          </Link>
          <span>.</span>
        </div>
      </div>
    </section>
  );
}
