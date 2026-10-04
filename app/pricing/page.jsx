import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import PricingCard from "../../components/PricingCard";
import FaqAccordion from "../../components/FaqAccordion";
import CtaBanner from "../../components/CtaBanner";
import { siteConfig } from "../../lib/site-config";
import { Check, ShieldCheck, Zap, Headphones, Lock, Clock } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV - Pricing & Subscription Plans | 4K Channels & Anti-Freeze",
  description:
    "TVoxar IPTV subscription passes with zero contracts. Choose 1, 3, 6, or 12 months with instant automated setup, 4K UHD streaming, and our 7-day guarantee.",
  alternates: {
    canonical: `${siteConfig.domain}/pricing`,
  },
};

export default function PricingPage() {
  const pricingFaqs = [
    {
      q: "How soon do I receive my TVoxar IPTV credentials after ordering?",
      a: "Orders are processed through our automated provisioning system. Your Xtream Codes login credentials (portal URL, username, and password) and M3U playlist link are sent directly to your contact email within 5 to 15 minutes of payment confirmation.",
      category: "Delivery",
    },
    {
      q: "Does the service renew automatically or charge my card recurringly?",
      a: "No. All TVoxar passes are non-recurring, one-time payments. You will never be billed automatically without your explicit consent. When your pass approaches expiration, we send a reminder email allowing you to renew if you wish.",
      category: "Billing",
    },
    {
      q: "Can I upgrade my plan or add additional simultaneous screens?",
      a: "Yes. If you wish to upgrade to a longer pass duration or add multi-screen access for family members, simply contact our support team with your existing username and we will adjust your account without interrupting your favorites or settings.",
      category: "Plans",
    },
    {
      q: "What payment methods are supported for TVoxar subscriptions?",
      a: "We accept all major credit and debit cards, secure PayPal checkout, and leading cryptocurrency gateways. All payments are encrypted through 256-bit SSL protocols.",
      category: "Billing",
    },
    {
      q: "What is your refund policy if the service does not work on my device?",
      a: "We offer a 7-day money-back guarantee. If you encounter technical setup difficulties that our 24/7 technical team is unable to resolve, you can request a full refund within 7 days of your purchase.",
      category: "Guarantees",
    },
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Subscription Plans", href: "/pricing" }]} />

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            Official TVoxar IPTV Subscriptions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Subscription Plans &amp; Pricing
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Select the pass duration that fits your entertainment schedule. Every TVoxar IPTV plan includes our complete{" "}
            <Link
              href="/channels"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              channel line-up
            </Link>
            , high-bitrate 60fps sports, extensive VOD library, and{" "}
            <Link
              href="/features"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              Anti-Freeze 9.3 stability
            </Link>
            . Compatible with all{" "}
            <Link
              href="/devices"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              major streaming devices
            </Link>
            .
          </p>
        </div>

        {/* Pricing Cards Grid Header & Cards */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Choose Your IPTV Subscription Plan
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              Instant automated activation with unrestricted 4K UHD streaming across all duration options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isFeatured={plan.popular} />
            ))}
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16 p-8 rounded-2xl bg-surface border border-border">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary-light flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Instant Delivery</div>
              <div className="text-xs text-text-muted">Automated 5-min dispatch</div>
            </div>
          </div>
          <Link href="/refund-policy" className="flex items-center gap-3 group">
            <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform" />
            <div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">7-Day Guarantee</div>
              <div className="text-xs text-text-muted underline decoration-emerald-400/30">Satisfaction promised</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Secure Checkout</div>
              <div className="text-xs text-text-muted">256-bit SSL encrypted</div>
            </div>
          </div>
          <Link href="/contact" className="flex items-center gap-3 group">
            <Headphones className="w-8 h-8 text-purple-400 flex-shrink-0 group-hover:scale-105 transition-transform" />
            <div>
              <div className="text-sm font-bold text-white group-hover:text-primary-light transition-colors">24/7 Human Support</div>
              <div className="text-xs text-text-muted underline decoration-primary/30">Setup &amp; tech assistance</div>
            </div>
          </Link>
        </div>

        {/* What Every Plan Includes Section */}
        <div className="my-20 bg-background-secondary/70 border border-border rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What&apos;s Included With Every TVoxar IPTV Subscription
            </h2>
            <p className="text-text-secondary text-sm">
              We never restrict video resolution, throttle bandwidth, or limit channel availability on shorter durations. Whether you choose 1 month or 12 months, you receive the same VIP edge-server routing. Review our{" "}
              <Link href="/features" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">
                streaming specifications
              </Link>{" "}
              or follow our{" "}
              <Link href="/installation" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">
                device installation guides
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">Unrestricted Global IPTV Channels</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Full access to all international feeds, news networks, premium documentary channels, and kids entertainment without paywalls. Browse our{" "}
                <Link href="/channels" className="text-primary-light hover:underline font-semibold">
                  complete channel list
                </Link>
                .
              </p>
            </div>
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">60 FPS Live Sports Broadcasts</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                High framerate broadcasts for Premier League, Champions League, UFC PPVs, NFL, NBA, Formula 1, and tennis tournaments on any{" "}
                <Link href="/devices" className="text-primary-light hover:underline font-semibold">
                  supported screen
                </Link>
                .
              </p>
            </div>
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">Anti-Freeze 9.3 Engine</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Adaptive bitrate load balancing guarantees that peak evening match traffic never causes stuttering or black screens. Read about our{" "}
                <Link href="/features" className="text-primary-light hover:underline font-semibold">
                  Anti-Freeze 9.3 technology
                </Link>
                .
              </p>
            </div>
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">Dual Connection Methods</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Receive both Xtream Codes API credentials and direct M3U Plus URLs for maximum compatibility. See setup tutorials for{" "}
                <Link href="/installation/firestick" className="text-primary-light hover:underline">
                  Firestick
                </Link>{" "}
                or{" "}
                <Link href="/installation/android" className="text-primary-light hover:underline">
                  Android TV
                </Link>
                .
              </p>
            </div>
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">7-Day Synchronized EPG Schedule</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Clean, synchronized electronic program schedule with catch-up functionality on compatible channels and{" "}
                <Link href="/blog/best-iptv-players-guide" className="text-primary-light hover:underline font-semibold">
                  top IPTV players
                </Link>
                .
              </p>
            </div>
            <div className="p-5 rounded-xl bg-surface/80 border border-border">
              <h3 className="font-bold text-white text-base mb-2">Full VPN-Friendly Compatibility</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Stream safely through NordVPN, ExpressVPN, Surfshark, or any preferred provider without account restrictions. Learn more in our{" "}
                <Link href="/blog/best-vpn-for-iptv-streaming-guide" className="text-primary-light hover:underline font-semibold">
                  VPN streaming guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              TVoxar IPTV Pricing &amp; Subscription Questions
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              Everything you need to know about payments, activations, and renewals.
            </p>
          </div>
          <FaqAccordion faqs={pricingFaqs} />
        </div>

        {/* Final CTA */}
        <CtaBanner
          title="Start Streaming with TVoxar IPTV Today"
          description="Choose your ideal IPTV subscription pass and receive instant activation credentials directly in your inbox."
          buttonText="Choose Your IPTV Plan"
          buttonHref="#pricing"
        />
      </div>
    </div>
  );
}
