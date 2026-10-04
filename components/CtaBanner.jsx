import Link from "next/link";
import { Zap, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CtaBanner({
  title = "Ready to Elevate Your Viewing with TVoxar IPTV?",
  description = "Join thousands of satisfied viewers watching global live sports, premium television networks, and 4K on-demand movies with zero buffering.",
  buttonText = "Choose Your IPTV Plan",
  buttonHref = "/pricing",
}) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-surface to-background-secondary border border-border p-8 sm:p-12 lg:p-16 text-center shadow-card">
          {/* Subtle Glows */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Instant Activation • Anti-Freeze 9.3</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href={buttonHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/installation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-text-primary bg-surface hover:bg-surface-hover border border-border transition-colors"
              >
                <span>View Setup Guides</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant automated login dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No long-term contracts</span>
              </div>
              <Link
                href="/refund-policy"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="underline decoration-emerald-400/30 underline-offset-2">7-Day satisfaction guarantee</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 hover:text-primary-light transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-light" />
                <span className="underline decoration-primary/30 underline-offset-2">24/7 dedicated support desk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
