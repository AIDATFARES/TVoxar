import { Zap, Tv, Shield, Film, Calendar, Smartphone, Lock, Headphones } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: "Anti-Freeze 9.3 Technology",
      description:
        "Proprietary smart load balancing distributes stream packets across redundant Tier-1 edge nodes, eliminating buffering and packet loss during high-traffic sports fixtures.",
      tag: "Stream Reliability",
    },
    {
      icon: Tv,
      title: "Ultra HD 4K & 60 FPS Feeds",
      description:
        "Experience stadium-like clarity with true 60fps high-bitrate video streams on major sports broadcasts, accompanied by crisp multichannel audio decoding.",
      tag: "Superior Quality",
    },
    {
      icon: Film,
      title: "Expansive VOD Cinema & Series",
      description:
        "Access an extensive, continually refreshed library of Hollywood releases, timeless classics, and international series with multiple subtitle options.",
      tag: "On-Demand Library",
    },
    {
      icon: Calendar,
      title: "7-Day Interactive EPG Guide",
      description:
        "Never miss a match or episode with our integrated Electronic Program Guide (EPG). Browse upcoming schedules and utilize catch-up replays on compatible players.",
      tag: "Live Schedules",
    },
    {
      icon: Smartphone,
      title: "Universal Multi-Device Support",
      description:
        "Stream seamlessly across Amazon Firestick, Samsung & LG Smart TVs, Apple TV, Android TV, Google Chromecast, Windows PC, macOS, and MAG receivers.",
      tag: "Any Platform",
    },
    {
      icon: Shield,
      title: "VPN-Friendly Infrastructure",
      description:
        "Full compatibility with NordVPN, ExpressVPN, Surfshark, and other major VPN protocols to bypass internet provider throttling and protect your connection.",
      tag: "Privacy First",
    },
    {
      icon: Lock,
      title: "Instant Automated Activation",
      description:
        "No waiting for manual verification. Your Xtream Codes and M3U playlist credentials are generated and dispatched immediately upon order confirmation.",
      tag: "Zero Delay",
    },
    {
      icon: Headphones,
      title: "24/7 Technical Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist you with device installation, application configuration, and stream troubleshooting.",
      tag: "Always Here",
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
            Discover why cord-cutters and sports fans worldwide choose TVoxar IPTV for their daily live television and cinema viewing.
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
      </div>
    </section>
  );
}
