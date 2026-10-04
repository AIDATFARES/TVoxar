import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV - Refund Policy | 7-Day Technical Satisfaction Guarantee",
  description:
    "TVoxar IPTV 7-day money-back guarantee. Read our transparent refund policy, trial terms, and dedicated technical support resolution process.",
  alternates: {
    canonical: `${siteConfig.domain}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Refund Policy", href: "/refund-policy" }]} />

        <div className="mt-3 mb-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Satisfaction Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TVoxar Refund Policy &amp; 7-Day Guarantee
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: March 2026 • Dedicated Customer Assurance
          </p>
        </div>

        <div className="my-10 bg-surface/80 border border-border rounded-2xl p-6 sm:p-10 text-text-secondary text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Our 7-Day Technical Guarantee</h2>
            <p>
              At TVoxar, we take pride in our <Link href="/features" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">Anti-Freeze 9.3 streaming infrastructure</Link>. If you experience verified technical setup issues that our <Link href="/contact" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">technical support team</Link> cannot resolve within your first <strong className="text-white">seven (7) calendar days</strong> of <Link href="/pricing" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">subscription service activation</Link>, you are entitled to request a full refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Eligibility Conditions for Refunds</h2>
            <p>
              To qualify for a refund under our guarantee:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li>Your refund request must be formally submitted within 7 calendar days of your initial order date.</li>
              <li>You must have contacted our customer care team to attempt troubleshooting (e.g. testing <Link href="/blog/best-iptv-players-guide" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">recommended IPTV player apps</Link>, checking credentials, or reviewing our <Link href="/installation" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">step-by-step setup guides</Link>).</li>
              <li>You must provide your order transaction ID and registered email address.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Non-Eligible Scenarios</h2>
            <p>
              Refunds will not be issued in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li>Requests submitted after the 7-day satisfaction window has expired.</li>
              <li>Issues caused purely by insufficient subscriber broadband speed (under 15 Mbps) or unstable local Wi-Fi networks where the subscriber declines to connect via Ethernet. See our <Link href="/blog/fix-iptv-buffering-freezing-guide" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">guide on fixing stream buffering</Link>.</li>
              <li>Simultaneous stream violations (using more devices at once than permitted; explore our multi-device options in <Link href="/pricing" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">TVoxar pricing plans</Link>).</li>
              <li>Temporary maintenance on a single specific third-party sports channel while thousands of other <Link href="/channels" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">international live channels</Link> remain fully operational.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Refund Processing Time</h2>
            <p>
              Approved refunds are credited directly back to the original method of payment. Processing typically completes within 3 to 7 business days depending on your financial institution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. How to Submit a Refund Request</h2>
            <p>
              To initiate a refund request, send an email to <span className="font-mono text-primary-light">{siteConfig.supportEmail}</span> or submit a ticket via our <Link href="/contact" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">24/7 contact support desk</Link> with the subject line <strong className="text-white">&quot;Refund Request - [Your Order ID]&quot;</strong> and a brief summary of the technical obstacle encountered.
            </p>
          </section>

          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-text-muted">Looking for terms, answers, or plan details?</span>
            <div className="flex items-center gap-4">
              <Link href="/terms-and-conditions" className="text-primary-light hover:underline font-semibold">
                Terms &amp; Conditions &rarr;
              </Link>
              <Link href="/faq" className="text-primary-light hover:underline font-semibold">
                Read FAQ &rarr;
              </Link>
              <Link href="/pricing" className="text-primary-light hover:underline font-semibold">
                View Plans &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
