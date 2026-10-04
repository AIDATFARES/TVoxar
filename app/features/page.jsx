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
          Traditional IPTV streams fail when thousands of viewers tune into the same match. TVoxar&apos;s proprietary Anti-Freeze 9.3 infrastructure distributes load across Tier-1 datacenters to eliminate lag. Read our{" "}
          <Link href="/blog/how-to-fix-iptv-buffering-freezing" className="text-primary-light hover:underline font-semibold">
            guide on fixing IPTV buffering
          </Link>
          .
        </span>
      ),
      bullets: [
        "Dynamic packet reallocation during network congestion",
        "Zero audio desynchronization on live sports",
        "Sub-second channel zapping times",
      ],
    },
    {
      icon: Tv,
      title: "True 4K UHD & 60 FPS Framerates",
      description: (
        <span>
          Fast-paced action requires 60 frames per second to eliminate motion blur. TVoxar prioritizes native 60fps feeds on major football, basketball, and racing channels. Explore all broadcast streams in our{" "}
          <Link href="/channels" className="text-primary-light hover:underline font-semibold">
            live channels catalog
          </Link>
          .
        </span>
      ),
      bullets: [
        "Crisp 3840x2160 UHD feeds on supported channels",
        "True 60fps high-bitrate video encoding",
        "Adaptive bitrate switching for slower broadband lines",
      ],
    },
    {
      icon: Calendar,
      title: "Interactive 7-Day Electronic Program Guide (EPG)",
      description: (
        <span>
          Say goodbye to blank guides. TVoxar&apos;s EPG updates automatically every 24 hours with full cast details and catch-up on top players like{" "}
          <Link href="/blog/tivimate-premium-features-setup" className="text-primary-light hover:underline">
            TiviMate
          </Link>{" "}
          and{" "}
          <Link href="/blog/iptv-smarters-pro-complete-setup-guide" className="text-primary-light hover:underline">
            IPTV Smarters Pro
          </Link>
          .
        </span>
      ),
      bullets: [
        "Automated XMLTV and Xtream Codes EPG sync",
        "Full 7-day forward schedule guide",
        "Catch-up replays available on select premium channels",
      ],
    },
    {
      icon: Film,
      title: "Curated VOD Cinema & Box Sets",
      description: (
        <span>
          Enjoy a premier home cinema experience with an on-demand library featuring blockbuster films and entire seasons of top shows, all included with your{" "}
          <Link href="/pricing" className="text-primary-light hover:underline font-semibold">
            TVoxar IPTV pass
          </Link>
          .
        </span>
      ),
      bullets: [
        "Multi-language original audio tracks",
        "Multi-language subtitle support (SRT/CC)",
        "Regular weekly additions of recent cinema premieres",
      ],
    },
    {
      icon: Server,
      title: "99.9% Uptime Redundant Edge Servers",
      description: (
        <span>
          Our streaming architecture is distributed across international points of presence (PoPs). If a transit path degrades, your player instantly routes to an alternative mirror. Learn more in our{" "}
          <Link href="/faq" className="text-primary-light hover:underline font-semibold">
            frequently asked questions
          </Link>
          .
        </span>
      ),
      bullets: [
        "Distributed datacenters across North America and Europe",
        "Proactive server health monitoring 24/7",
        "Unthrottled 10Gbps dedicated server ports",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Unrestricted VPN Compatibility",
      description: (
        <span>
          While some providers restrict accounts to one residential IP, TVoxar encourages using NordVPN or ExpressVPN to protect privacy and prevent ISP throttling. Discover the{" "}
          <Link href="/blog/best-vpn-for-iptv-streaming" className="text-primary-light hover:underline font-semibold">
            best VPNs for IPTV streaming
          </Link>
          .
        </span>
      ),
      bullets: [
        "Compatible with all major commercial VPN providers",
        "No geo-locking on account usage",
        "Bypasses peak-hour internet provider slowdowns",
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
            Engineering Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced IPTV Features Built for Ultimate Stability
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            From our proprietary Anti-Freeze 9.3 load balancer to native 60fps sports broadcasts, explore the technology that makes TVoxar a top-tier streaming service. Ready to start? Browse our{" "}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
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
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h2>
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

        {/* Technical Specification Table */}
        <div className="my-20 bg-surface border border-border rounded-3xl p-8 sm:p-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            TVoxar Technical Stream Specifications
          </h2>
          <table className="w-full text-left text-sm text-text-secondary">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                <th className="py-3 px-4">Specification</th>
                <th className="py-3 px-4">TVoxar Standard</th>
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
          title="Ready to Experience the Difference?"
          description="Test TVoxar's Anti-Freeze 9.3 streaming technology on your favorite device today."
          buttonText="View Subscription Plans"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
