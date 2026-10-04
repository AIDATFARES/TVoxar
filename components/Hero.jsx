import Link from "next/link";
import Image from "next/image";
import { Zap, PlayCircle, ShieldCheck, Tv, Wifi, CheckCircle2, Star } from "lucide-react";

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
              <span>Next-Gen IPTV Streaming • Anti-Freeze 9.3 Protocol</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Experience Premium TV Without Limits with{" "}
              <span className="gradient-text-primary">TVoxar IPTV</span>
            </h1>

            {/* Subtext with internal links */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Access thousands of crystal-clear 4K Ultra HD{" "}
              <Link
                href="/channels"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                live TV channels
              </Link>
              , worldwide sports events, and endless on-demand blockbusters. Engineered with{" "}
              <Link
                href="/features"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                Anti-Freeze 9.3 multi-server technology
              </Link>{" "}
              for seamless streaming across all your{" "}
              <Link
                href="/devices"
                className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                supported devices
              </Link>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5" />
                <span>Explore Subscription Plans</span>
              </Link>
              <Link
                href="/installation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-text-primary bg-surface hover:bg-surface-hover border border-border hover:border-primary/40 transition-all"
              >
                <Tv className="w-5 h-5 text-primary-light" />
                <span>Setup Guides by Device</span>
              </Link>
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-border/80 text-xs sm:text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">4K UHD &amp; 60 FPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Instant Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">7-Day EPG Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Multi-Screen Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">Anti-Freeze 9.3</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-text-secondary">24/7 Human Support</span>
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
                  <div className="text-xs font-bold text-white">Zero Buffering Guarantee</div>
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
