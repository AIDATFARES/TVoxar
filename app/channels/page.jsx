import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { Trophy, Film, Newspaper, Baby, Compass, Globe2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Channel Line-Up & International Packages - TVoxar IPTV",
  description:
    "Explore the TVoxar IPTV channel guide: Live Sports feeds, 4K Cinema channels, 24/7 News, Kids entertainment, and international networks from USA, UK, Canada, and Europe.",
  alternates: {
    canonical: `${siteConfig.domain}/channels`,
  },
};

export default function ChannelsPage() {
  const categories = [
    {
      icon: Trophy,
      name: "Live Sports & PPV Events",
      badge: "60 FPS Feeds",
      description: "Dedicated high-bitrate live feeds for Premier League, UEFA Champions League, La Liga, Serie A, NFL Sunday Ticket, NBA League Pass, UFC Fight Nights, and Formula 1.",
      examples: ["Sky Sports HD & 4K", "TNT Sports Ultimate", "beIN Sports Global", "ESPN & Fox Sports", "DAZN Feeds", "SuperSport Africa", "Astro SuperSport"],
    },
    {
      icon: Film,
      name: "Cinema & Premium Entertainment",
      badge: "4K & Dolby 5.1",
      description: "Non-stop movie channels broadcasting commercial-free Hollywood hits, indie cinema, and exclusive premiere networks with multi-audio language options.",
      examples: ["HBO & Cinemax", "Sky Cinema UHD", "Canal+ Cinema", "Movistar Estrenos", "Starz & Showtime", "Cine Premiere 4K"],
    },
    {
      icon: Newspaper,
      name: "24/7 Global News & Analysis",
      badge: "Live Feeds",
      description: "Stay informed around the clock with leading international rolling news broadcasts from the world's most trusted global correspondents.",
      examples: ["BBC News & CNN", "Sky News UK", "Fox News Channel", "CNBC & Bloomberg", "Al Jazeera English", "France 24", "EuroNews"],
    },
    {
      icon: Baby,
      name: "Kids, Animation & Family",
      badge: "Multi-Language",
      description: "Safe, commercial-free animation and educational television for children of all ages, with options for dual-language soundtracks.",
      examples: ["Disney Channel & Junior", "Cartoon Network", "Nickelodeon & Nick Jr.", "Boomerang", "CBBC & CBeebies"],
    },
    {
      icon: Compass,
      name: "Documentary, Nature & Science",
      badge: "1080p & 4K",
      description: "Stunning nature documentaries, historical investigations, and science programming streamed in vibrant high definition.",
      examples: ["Discovery Channel UHD", "National Geographic", "Animal Planet", "History Channel", "Smithsonian", "BBC Earth 4K"],
    },
    {
      icon: Globe2,
      name: "International Country Packages",
      badge: "Worldwide",
      description: "Native television lineups grouped neatly by country so expatriates and polyglots can feel right at home anywhere in the world.",
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
            Channel Line-Up
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            World-Class Live Television Categories
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            TVoxar organizes television networks into intuitive, alphabetical country and genre categories. Every channel features automated EPG schedules on compatible players.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
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

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {cat.name}
                  </h2>
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

        {/* Honest Architecture Notice */}
        <div className="my-12 p-8 rounded-2xl bg-surface border border-border max-w-4xl mx-auto text-center space-y-3">
          <h3 className="text-lg font-bold text-white">Full Electronic Program Guide (EPG) Included</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
            Our playlist servers refresh XMLTV guide data every 24 hours. When you connect via Xtream Codes on TiviMate, Smarters Pro, or IBO Player, the guide aligns automatically with your local device clock.
          </p>
        </div>

        {/* CTA */}
        <CtaBanner
          title="Ready to Start Watching?"
          description="Unlock access to all live sports feeds and international television channels today."
          buttonText="Choose Your Pass"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
