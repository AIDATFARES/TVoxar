import Link from "next/link";
import Image from "next/image";
import { Trophy, Film, Globe2, Sparkles, Check, ArrowRight } from "lucide-react";

export default function EntertainmentShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Showcase Block 1: Live Sports & Pay-Per-View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              <span>World-Class Live Sports</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Every League, Every Match, Every PPV in 60 FPS
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Never miss a kick, knockout, or checkered flag. TVoxar delivers high-bitrate live feeds with dedicated backup server links for every marquee athletic event globally.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Premier League &amp; UCL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>UFC &amp; Boxing PPVs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>NFL, NBA, MLB &amp; NHL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Formula 1 &amp; MotoGP</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/channels"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary-light hover:text-white transition-colors"
              >
                <span>View Complete Sports Channel Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-card group">
              <Image
                src="/images/sports-live.jpg"
                alt="TVoxar Live Sports Streaming Channels and PPV Mockup"
                width={600}
                height={380}
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Showcase Block 2: VOD Cinema & Box Sets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>Unlimited Cinema &amp; Series</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Massive Library of 4K Movies &amp; Binge-Worthy Series
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Explore thousands of on-demand movies ranging from modern cinema premieres to celebrated classics, with complete season box sets, pristine audio encoding, and multiple subtitle options.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Ultra HD 4K HDR Releases</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Multi-Language Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Complete TV Series Box Sets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Weekly Catalog Refreshes</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-white transition-colors"
              >
                <span>Unlock Full VOD Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-card group">
              <Image
                src="/images/movies-vod.jpg"
                alt="TVoxar VOD Movies and TV Series Catalog Mockup"
                width={600}
                height={380}
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
