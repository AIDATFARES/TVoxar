import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - TVoxar IPTV",
  description:
    "TVoxar IPTV privacy policy. Learn how we collect, protect, and handle subscriber data with strict encryption and zero third-party data selling.",
  alternates: {
    canonical: `${siteConfig.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="mt-3 mb-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Privacy Policy
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: March 2026 • Effective for all TVoxar subscribers
          </p>
        </div>

        <div className="my-10 bg-surface/80 border border-border rounded-2xl p-6 sm:p-10 text-text-secondary text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              TVoxar (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy of our subscribers visiting <strong className="text-white">www.tvoxar.top</strong>. This Privacy Policy details our protocols regarding the collection, transmission, and protection of information when you purchase a subscription or interact with our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We adhere strictly to the principle of data minimization. We only collect the minimal information necessary to deliver your streaming pass:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li><strong className="text-text-secondary">Account Contact Data:</strong> Your email address and preferred subscriber username to dispatch your Xtream Codes credentials.</li>
              <li><strong className="text-text-secondary">Technical Device Details:</strong> Optional device type (e.g. Firestick, Samsung TV, MAG MAC address) provided during setup assistance.</li>
              <li><strong className="text-text-secondary">Transaction Metadata:</strong> Payment confirmation identifiers provided by third-party payment gateways. We never store credit card numbers on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How Your Information is Utilized</h2>
            <p>
              Your provided contact details are utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li>Immediate automated dispatch of your streaming playlist and credentials.</li>
              <li>Technical troubleshooting and device configuration assistance by our customer support.</li>
              <li>Critical service notifications, such as maintenance schedules or subscription expiry alerts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Zero Data Selling Commitment</h2>
            <p>
              TVoxar does not sell, rent, monetize, or trade subscriber contact data, viewing preferences, or IP addresses to any advertising networks, data brokers, or external commercial entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Security &amp; Encryption</h2>
            <p>
              All traffic between your browser and www.tvoxar.top is secured using industry-standard 256-bit Secure Socket Layer (SSL) encryption. Administrative access to provisioning servers is restricted to verified technical operators via encrypted keys.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Inquiries &amp; Data Erasure</h2>
            <p>
              Subscribers may request complete deletion of their account records at any time by contacting our privacy desk at <span className="font-mono text-primary-light">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
