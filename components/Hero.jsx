import Link from "next/link";
import Image from "next/image";
import { Zap, PlayCircle, ShieldCheck, Tv, Wifi, CheckCircle2, Star } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs font-semibold text-primary-light">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Premium IPTV Streaming • Powered by Anti-Freeze 9.3</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Stream Live TV, Sports &amp; Cinema with{" "}
              <span className="gradient-text-primary">TVoxar IPTV</span>
            </h1>

            {/* Subtext with internal links */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Unlock thousands of crystal-clear 4K and Full HD{" "}
              <Link
                href="/channels"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                live TV channels
              </Link>
              , world-class sports competitions, and on-demand movies. TVoxar IPTV integrates{" "}
              <Link
                href="/features"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                Anti-Freeze 9.3 multi-server technology
              </Link>{" "}
              for smooth, buffer-free playback across all your{" "}
              <Link
                href="/devices"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                supported streaming devices
              </Link>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/pricing"
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-primary via-blue-500 to-secondary hover:opacity-95 animate-pulse-glow transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {/* Continuous ambient shimmer sweep */}
                <span
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer-sweep"
                  aria-hidden="true"
                />
                <Zap className="relative z-10 w-5 h-5 text-cyan-200 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="relative z-10">Get Your IPTV Subscription</span>
              </Link>
              <a
                href={siteConfig.whatsappTrialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-text-primary bg-surface/90 hover:bg-surface-hover border border-[#25D366]/40 hover:border-[#25D366] hover:text-white animate-pulse-whatsapp transition-all duration-300 shadow-md transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {/* Hover shine effect */}
                <span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#25D366]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
                  aria-hidden="true"
                />
                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 w-5 h-5 fill-current text-[#25D366] transition-transform duration-300 group-hover-wiggle group-hover:scale-115 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">Get a free trial</span>
              </a>
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-border/80 text-xs sm:text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">4K UHD &amp; 60 FPS Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Instant IPTV Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Synchronized 7-Day EPG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Multi-Screen Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Anti-Freeze 9.3 Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">24/7 Priority Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Television Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-60" />

              {/* Main TV Mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-surface shadow-2xl">
                <Image
                  src="/images/hero-stream.jpg"
                  alt="TVoxar IPTV 4K Live Streaming Mockup on Television"
                  width={800}
                  height={500}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge 1: 4K Live Sports */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-surface/95 border border-primary/40 backdrop-blur-xl rounded-xl p-3.5 shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Buffer-Free IPTV Guarantee</div>
                  <div className="text-[11px] text-emerald-400">Adaptive Edge Routing Active</div>
                </div>
              </div>

              {/* Floating Badge 2: All Devices */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-surface/95 border border-border backdrop-blur-xl rounded-xl px-3.5 py-2.5 shadow-card items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary-light" />
                <span className="text-xs font-semibold text-text-primary">100% Secure &amp; Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
