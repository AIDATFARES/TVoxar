import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { FileText } from "lucide-react";

export const metadata = {
  title: "TVoxar IPTV - Terms & Conditions | Subscription Agreement & Usage Policy",
  description:
    "TVoxar IPTV terms and conditions of service. Details on account usage, single stream limits, acceptable use, and service continuity.",
  alternates: {
    canonical: `${siteConfig.domain}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]} />

        <div className="mt-3 mb-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Subscriber Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms and Conditions of Service
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: March 2026 • Production Domain: www.tvoxar.top
          </p>
        </div>

        <div className="my-10 bg-surface/80 border border-border rounded-2xl p-6 sm:p-10 text-text-secondary text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By purchasing an access pass or using services provided by TVoxar (&quot;TVoxar IPTV&quot;), you agree to be bound by these Terms and Conditions. Please review our{" "}
              <Link href="/pricing" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">
                subscription plans
              </Link>{" "}
              and{" "}
              <Link href="/refund-policy" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">
                Refund Policy
              </Link>{" "}
              prior to activating service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Permitted Account Usage &amp; Simultaneous Connections</h2>
            <p>
              Unless explicitly specified as a multi-connection package, standard TVoxar subscription passes are provisioned for <strong className="text-white">one (1) active simultaneous stream</strong>. You may configure your credentials across multiple{" "}
              <Link href="/devices" className="text-primary-light hover:underline font-semibold">
                supported devices
              </Link>{" "}
              (such as your{" "}
              <Link href="/installation/firestick" className="text-primary-light hover:underline">
                Amazon Firestick
              </Link>{" "}
              or{" "}
              <Link href="/installation/android" className="text-primary-light hover:underline">
                Android TV box
              </Link>
              ), but streaming concurrently from more than one device at the same time on a single-screen plan will result in automated stream freezing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Non-Commercial &amp; Anti-Restreaming Policy</h2>
            <p>
              Accounts are sold strictly for personal, non-commercial entertainment. Reselling, restreaming, public rebroadcasting, or re-encoding TVoxar feeds without written commercial authorization is strictly prohibited and subject to immediate account termination without refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Channel Lineups &amp; Service Availability</h2>
            <p>
              While TVoxar strives to maintain 99.9% network uptime across our edge nodes, broadcast feeds originate from external satellite, terrestrial, and digital sources. Individual channel availability and program lineups may periodically shift. Browse our current{" "}
              <Link href="/channels" className="text-primary-light hover:underline font-semibold">
                channel line-up
              </Link>{" "}
              and consult our{" "}
              <Link href="/disclaimer" className="text-primary-light hover:underline font-semibold">
                Service Disclaimer
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Subscriber Responsibilities</h2>
            <p>
              Subscribers are responsible for maintaining a reliable internet connection (minimum 15 Mbps recommended) and utilizing compatible IPTV applications on certified hardware. TVoxar provides comprehensive{" "}
              <Link href="/installation" className="text-primary-light hover:underline font-semibold">
                installation tutorials
              </Link>{" "}
              and{" "}
              <Link href="/contact" className="text-primary-light hover:underline font-semibold">
                24/7 technical customer support
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Inquiries</h2>
            <p>
              For legal or terms clarification, reach our support team via our{" "}
              <Link href="/contact" className="text-primary-light hover:underline font-semibold">
                contact page
              </Link>{" "}
              or email <span className="font-mono text-primary-light">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
