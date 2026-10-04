import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions - TVoxar IPTV",
  description:
    "TVoxar IPTV terms and conditions of service. Details on account usage, single stream limits, acceptable use, and service continuity.",
  alternates: {
    canonical: `${siteConfig.domain}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]} />

        <div className="my-8 space-y-4">
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
              By purchasing an access pass or using services provided by TVoxar (&quot;TVoxar IPTV&quot;), you agree to be bound by these Terms and Conditions. If you do not accept these provisions, do not activate an account on our platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Permitted Account Usage &amp; Simultaneous Connections</h2>
            <p>
              Unless explicitly specified as a multi-connection package, standard TVoxar subscription passes are provisioned for <strong className="text-white">one (1) active simultaneous stream</strong>. You may install your Xtream Codes or M3U playlist credentials across multiple devices (e.g. living room TV, smartphone, and laptop), but streaming concurrently from more than one device simultaneously on a single-screen plan will result in temporary automated stream freezing by the edge server.
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
              While TVoxar strives to maintain 99.9% network uptime across our edge nodes, broadcast feeds originate from external satellite, terrestrial, and digital sources. Individual channel availability, audio languages, and program lineups may periodically shift or undergo scheduled maintenance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Subscriber Responsibilities</h2>
            <p>
              Subscribers are responsible for maintaining a reliable internet connection (minimum 15 Mbps recommended) and utilizing compatible IPTV applications on certified hardware. TVoxar provides technical setup documentation but is not liable for device hardware malfunctions or third-party software store policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Inquiries</h2>
            <p>
              For legal or terms clarification, reach our support team at <span className="font-mono text-primary-light">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
