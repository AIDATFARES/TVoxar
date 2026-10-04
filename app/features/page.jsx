import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { Zap, Tv, ShieldCheck, Film, Calendar, Globe, Cpu, Server, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "IPTV Features & Anti-Freeze 9.3 Technology - TVoxar IPTV",
  description:
    "Discover the engineering behind TVoxar IPTV: Anti-Freeze 9.3 streaming protocol, true 60fps 4K feeds, 7-day EPG guide, and redundant server nodes for zero buffering.",
  alternates: {
    canonical: `${siteConfig.domain}/features`,
  },
};

export default function FeaturesPage() {
  const deepFeatures = [
    {
      icon: Zap,
      title: "TVoxar Anti-Freeze 9.3 Protocol",
      description: (
        <span>
          Traditional IPTV streams often stutter when millions of viewers tune into the same live football fixture or PPV fight. TVoxar IPTV solves this with our proprietary Anti-Freeze 9.3 load-balancing architecture, routing video packets across redundant Tier-1 edge clusters to eliminate buffering entirely. Read our{" "}
          <Link href="/blog/fix-iptv-buffering-freezing-guide" className="text-primary-light hover:underline font-semibold">
            guide on fixing IPTV buffering
          </Link>
          .
        </span>
      ),
      bullets: [
        "Dynamic packet reallocation during high-traffic sports events",
        "Zero audio-video desynchronization on live 60 FPS feeds",
        "Sub-second IPTV channel zapping and rapid stream buffering",
      ],
    },
    {
      icon: Tv,
      title: "True 4K UHD & Native 60 FPS Sports Streams",
      description: (
        <span>
          Fast-paced action demands high framerates to eliminate motion blur and ghosting. TVoxar IPTV delivers dedicated 60 frames-per-second feeds across all major football, basketball, motorsports, and combat sports channels. Explore all broadcast streams in our{" "}
          <Link href="/channels" className="text-primary-light hover:underline font-semibold">
            live channels catalog
          </Link>
          .
        </span>
      ),
      bullets: [
        "Ultra-crisp 3840x2160 4K UHD feeds on supported channels",
        "Native 60 FPS high-bitrate encoding for fluid live sports",
        "Intelligent adaptive bitrate switching for fluctuating connections",
      ],
    },
    {
      icon: Calendar,
      title: "Automated 7-Day Electronic Program Guide (EPG)",
      description: (
        <span>
          Never miss kickoff or the latest episode with a fully populated television guide. TVoxar IPTV provides automated 24-hour EPG updates with complete show descriptions, episode summaries, and catch-up metadata configured seamlessly for top players like{" "}
          <Link href="/blog/tivimate-iptv-player-setup-guide" className="text-primary-light hover:underline">
            TiviMate
          </Link>{" "}
          and{" "}
          <Link href="/blog/iptv-smarters-pro-setup-guide" className="text-primary-light hover:underline">
            IPTV Smarters Pro
          </Link>
          .
        </span>
      ),
      bullets: [
        "Automated XMLTV and Xtream Codes API schedule integration",
        "Full 7-day forward electronic program scheduling",
        "Catch-up playback available on select international channels",
      ],
    },
    {
      icon: Film,
      title: "On-Demand IPTV Cinema & Complete TV Box Sets",
      description: (
        <span>
          Transform your living room into an on-demand cinema with a vast library of recent blockbuster films, timeless classics, and full seasons of trending television series, all bundled at no extra cost with your{" "}
          <Link href="/pricing" className="text-primary-light hover:underline font-semibold">
            TVoxar IPTV pass
          </Link>
          .
        </span>
      ),
      bullets: [
        "Dual-audio tracks and multi-language studio sound options",
        "Crystal-clear subtitles in multiple languages (SRT & CC)",
        "Regular catalog updates with the latest box office releases",
      ],
    },
    {
      icon: Server,
      title: "99.9% Uptime Redundant Global Edge Infrastructure",
      description: (
        <span>
          Our IPTV streaming backbone spans high-capacity points of presence across North America and Europe. If an internet transit route experiences latency, your connection automatically fails over to an optimal edge node without disrupting your broadcast. Learn more in our{" "}
          <Link href="/faq" className="text-primary-light hover:underline font-semibold">
            frequently asked questions
          </Link>
          .
        </span>
      ),
      bullets: [
        "Distributed datacenters across North America and Europe",
        "Proactive 24/7 server health monitoring and packet routing",
        "Dedicated unthrottled 10Gbps server network uplinks",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Unrestricted VPN-Friendly Streaming Compatibility",
      description: (
        <span>
          Unlike rigid providers that lock your account to a single ISP address, TVoxar IPTV gives you full freedom to connect via NordVPN, ExpressVPN, Surfshark, or any trusted VPN provider to safeguard privacy and bypass ISP throttling. Discover the{" "}
          <Link href="/blog/best-vpn-for-iptv-streaming-guide" className="text-primary-light hover:underline font-semibold">
            best VPNs for IPTV streaming
          </Link>
          .
        </span>
      ),
      bullets: [
        "100% compatible with all leading commercial VPN networks",
        "No IP lockouts or unexpected account suspension rules",
        "Defeats peak-hour internet provider speed throttling",
      ],
    },
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Features", href: "/features" }]} />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Next-Gen IPTV Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Features &amp; Anti-Freeze Streaming Architecture
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            From our proprietary Anti-Freeze 9.3 intelligent stream routing to native 60 FPS sports broadcasts, discover the cutting-edge technology powering TVoxar IPTV. Engineered for demanding sports fans and entertainment lovers who require flawless playback on every device. Ready to experience superior streaming? Browse our{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              subscription plans
            </Link>{" "}
            or check out our{" "}
            <Link
              href="/devices"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              supported device setups
            </Link>
            .
          </p>
        </div>

        {/* Features In-Depth Grid */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Core TVoxar IPTV Streaming Features &amp; Capabilities
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              Engineered with multi-server redundancy, high-bitrate codecs, and adaptive bitrate control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deepFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface/80 border border-border hover:border-primary/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-card group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm text-text-muted leading-relaxed mb-6">
                      {item.description}
                    </div>
                  </div>

                <div className="pt-4 border-t border-border/80">
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="my-20 bg-surface border border-border rounded-3xl p-8 sm:p-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            TVoxar IPTV Technical Streaming Specifications
          </h2>
          <table className="w-full text-left text-sm text-text-secondary">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                <th className="py-3 px-4">Specification</th>
                <th className="py-3 px-4">TVoxar IPTV Standard</th>
                <th className="py-3 px-4">Viewer Benefit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Video Codecs</td>
                <td className="py-4 px-4 text-primary-light">H.264 / H.265 (HEVC)</td>
                <td className="py-4 px-4 text-text-muted">High resolution with 50% less bandwidth usage</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Maximum Resolution</td>
                <td className="py-4 px-4 text-primary-light">Up to 4K UHD (3840x2160)</td>
                <td className="py-4 px-4 text-text-muted">Crisp visuals on large OLED &amp; QLED screens</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Live Sports Framerate</td>
                <td className="py-4 px-4 text-primary-light">50 FPS / 60 FPS</td>
                <td className="py-4 px-4 text-text-muted">Smooth ball motion and zero micro-stuttering</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Audio Support</td>
                <td className="py-4 px-4 text-primary-light">AAC, AC3 Dolby Digital 5.1</td>
                <td className="py-4 px-4 text-text-muted">Immersive home theater surround sound</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Connection Protocol</td>
                <td className="py-4 px-4 text-primary-light">Xtream Codes API &amp; M3U Plus</td>
                <td className="py-4 px-4 text-text-muted">Universal compatibility with all IPTV players</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-white">Recommended Internet Speed</td>
                <td className="py-4 px-4 text-primary-light">15 Mbps (HD) / 30+ Mbps (4K)</td>
                <td className="py-4 px-4 text-text-muted">Guaranteed buffer-free playback</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-xs text-text-muted mt-6">
            Need step-by-step guidance setting up your device? Visit our{" "}
            <Link href="/installation" className="text-primary-light hover:underline font-semibold">
              installation center
            </Link>{" "}
            or contact{" "}
            <Link href="/contact" className="text-primary-light hover:underline font-semibold">
              24/7 technical support
            </Link>
            .
          </p>
        </div>

        {/* CTA */}
        <CtaBanner
          title="Ready to Experience Superior IPTV Streaming?"
          description="Test TVoxar IPTV's Anti-Freeze 9.3 streaming technology and 4K picture clarity on your favorite device today."
          buttonText="View TVoxar IPTV Plans"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
