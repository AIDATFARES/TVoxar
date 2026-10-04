import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { Trophy, Film, Newspaper, Baby, Compass, Globe2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV - Channel Line-Up & Live Sports | 4K Cinema & Global Networks",
  description:
    "TVoxar IPTV channel guide features unrestricted 60 FPS sports feeds, 4K movies, 24/7 news, and international country packages with automated 7-day EPG.",
  alternates: {
    canonical: `${siteConfig.domain}/channels`,
  },
};

export default function ChannelsPage() {
  const categories = [
    {
      icon: Trophy,
      name: "Live IPTV Sports & PPV Events",
      badge: "60 FPS Feeds",
      description: "Dedicated high-bitrate live feeds for Premier League, UEFA Champions League, La Liga, Serie A, NFL Sunday Ticket, NBA League Pass, UFC Fight Nights, and Formula 1 without blackout restrictions.",
      examples: ["Sky Sports HD & 4K", "TNT Sports Ultimate", "beIN Sports Global", "ESPN & Fox Sports", "DAZN Feeds", "SuperSport Africa", "Astro SuperSport"],
    },
    {
      icon: Film,
      name: "Cinema & Premium On-Demand Networks",
      badge: "4K & Dolby 5.1",
      description: "Non-stop movie channels broadcasting commercial-free Hollywood blockbusters, indie films, and premiere networks with multi-audio language tracks.",
      examples: ["HBO & Cinemax", "Sky Cinema UHD", "Canal+ Cinema", "Movistar Estrenos", "Starz & Showtime", "Cine Premiere 4K"],
    },
    {
      icon: Newspaper,
      name: "24/7 Global Live News & Analysis",
      badge: "Live Feeds",
      description: "Stay informed around the clock with leading international rolling news broadcasts from the world's most trusted global correspondents.",
      examples: ["BBC News & CNN", "Sky News UK", "Fox News Channel", "CNBC & Bloomberg", "Al Jazeera English", "France 24", "EuroNews"],
    },
    {
      icon: Baby,
      name: "Kids, Animation & Family Entertainment",
      badge: "Multi-Language",
      description: "Safe, commercial-free animation and educational television for children of all ages, with dual-language soundtracks and family programming.",
      examples: ["Disney Channel & Junior", "Cartoon Network", "Nickelodeon & Nick Jr.", "Boomerang", "CBBC & CBeebies"],
    },
    {
      icon: Compass,
      name: "Documentary, Nature & Science Channels",
      badge: "1080p & 4K",
      description: "Breathtaking nature documentaries, deep historical investigations, and science programming streamed in crystal-clear high definition.",
      examples: ["Discovery Channel UHD", "National Geographic", "Animal Planet", "History Channel", "Smithsonian", "BBC Earth 4K"],
    },
    {
      icon: Globe2,
      name: "International Country TV Packages",
      badge: "Worldwide",
      description: "Native television lineups grouped neatly by region so expatriates and global viewers can enjoy their favorite domestic broadcasts from anywhere.",
      examples: ["United States & Canada", "United Kingdom & Ireland", "France, Belgium & Switzerland", "Spain & Latin America", "Germany & Austria", "Italy & Netherlands", "Arabic & Middle East"],
    },
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Channel Line-Up", href: "/channels" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Premium IPTV Channel Line-Up
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Premium Live TV Channels &amp; Sports on TVoxar IPTV
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            TVoxar IPTV organizes thousands of premier global television networks into curated country and genre categories. From high-octane 60 FPS sports broadcasts to commercial-free 4K cinema and 24/7 news, every channel includes automated EPG schedule data across all{" "}
            <Link
              href="/blog/best-iptv-players-guide"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              compatible IPTV players
            </Link>
            . Check our{" "}
            <Link
              href="/features"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              streaming features
            </Link>{" "}
            or pick an{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              IPTV subscription plan
            </Link>{" "}
            to start watching immediately.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Premium IPTV Channel Categories &amp; Programming
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              Curated global channels broadcast in true 1080p and 4K resolution with automated EPG schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface/80 border border-border hover:border-primary/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-card group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-primary-light bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="pt-4 border-t border-border/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted block mb-2">
                        Popular Networks Included:
                      </span>
                      <ul className="space-y-1.5 text-xs text-text-secondary">
                        {cat.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honest Architecture Notice */}
        <div className="my-12 p-8 rounded-2xl bg-surface border border-border max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-white">Automated Electronic Program Guide (EPG) Included with TVoxar IPTV</h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
            Our playlist servers refresh XMLTV guide data every 24 hours. When you connect via Xtream Codes on{" "}
            <Link href="/blog/tivimate-iptv-player-setup-guide" className="text-primary-light hover:underline font-semibold">
              TiviMate
            </Link>
            ,{" "}
            <Link href="/blog/iptv-smarters-pro-setup-guide" className="text-primary-light hover:underline font-semibold">
              Smarters Pro
            </Link>
            , or Smart TV apps like{" "}
            <Link href="/blog/best-smart-tv-iptv-apps-guide" className="text-primary-light hover:underline font-semibold">
              IBO Player Pro
            </Link>
            , the guide aligns automatically with your local clock. Need help? View our{" "}
            <Link href="/installation" className="text-primary-light hover:underline font-semibold">
              device installation tutorials
            </Link>
            .
          </p>
        </div>

        {/* CTA */}
        <CtaBanner
          title="Ready to Explore the Full TVoxar IPTV Channel Line-Up?"
          description="Unlock immediate access to all live sports feeds, international channels, and 4K cinema on TVoxar IPTV today."
          buttonText="Choose Your IPTV Pass"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
