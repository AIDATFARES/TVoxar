import Link from "next/link";
import { Check, Zap, Sparkles } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export default function PricingCard({ plan, isFeatured = false }) {
  return (
    <div
      className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
        isFeatured || plan.popular
          ? "bg-surface border-2 border-primary shadow-glow scale-100 lg:-translate-y-2 z-10"
          : "bg-surface/80 border border-border hover:border-primary/40 hover:bg-surface"
      }`}
    >
      {/* Popular Badge */}
      {(plan.popular || isFeatured) && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-secondary shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            {plan.badge || "Most Popular"}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Plan Header */}
        <div className="text-center pb-6 border-b border-border/80">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-light">
            {plan.badge ? `${plan.badge} Plan` : "Subscription Tier"}
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
          <p className="text-xs text-text-muted mt-2 min-h-[32px]">{plan.description}</p>

          {/* Price display */}
          <div className="mt-5 flex items-baseline justify-center gap-1">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {plan.price}
            </span>
            <span className="text-xs font-medium text-text-muted">
              / {plan.duration}
            </span>
          </div>
          <span className="inline-block mt-1 text-[11px] text-text-muted bg-background/60 px-2.5 py-0.5 rounded-full border border-border">
            {plan.billingPeriod} • Instant Setup
          </span>
        </div>

        {/* Features List */}
        <div className="py-6 flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
            Included in this pass:
          </div>
          <ul className="space-y-3 text-sm text-text-secondary">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="pt-4 mt-auto">
          <a
            href={
              plan.checkoutUrl ||
              `https://wa.me/${(siteConfig.whatsapp || "+213552069874").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello TVoxar, I would like to order the ${plan.name} (${plan.price}).`
              )}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group overflow-hidden w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${
              plan.popular || isFeatured
                ? "text-white bg-gradient-to-r from-primary via-blue-500 to-secondary hover:opacity-95 shadow-glow animate-pulse-glow hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
                : "text-text-primary bg-background/90 hover:bg-surface-hover border border-border hover:border-primary/70 hover:text-white animate-pulse-border hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
            }`}
          >
            {/* Shimmer sweep effect */}
            {plan.popular || isFeatured ? (
              <span
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-shimmer-sweep"
                aria-hidden="true"
              />
            ) : (
              <span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
                aria-hidden="true"
              />
            )}

            <Zap
              className={`relative z-10 w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 ${
                plan.popular || isFeatured
                  ? "text-cyan-200"
                  : "text-primary-light group-hover:text-cyan-300"
              }`}
            />
            <span className="relative z-10">{plan.ctaText || "Select This IPTV Pass"}</span>
          </a>
          <p className="text-[11px] text-center text-text-muted mt-2">
            No long-term contracts • <Link href="/refund-policy" className="hover:text-primary-light underline decoration-border/60 transition-colors">7-day guarantee</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
