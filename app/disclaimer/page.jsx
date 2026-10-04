import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Disclaimer & DMCA Compliance - TVoxar IPTV",
  description:
    "TVoxar IPTV legal disclaimer and DMCA copyright compliance policy. Details on external media indexation and copyright infringement notice procedures.",
  alternates: {
    canonical: `${siteConfig.domain}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Disclaimer & DMCA", href: "/disclaimer" }]} />

        <div className="mt-3 mb-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TVoxar Disclaimer &amp; DMCA Copyright Policy
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: March 2026 • Official Notice for www.tvoxar.top
          </p>
        </div>

        <div className="my-10 bg-surface/80 border border-border rounded-2xl p-6 sm:p-10 text-text-secondary text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Service Nature &amp; Content Disclaimer</h2>
            <p>
              TVoxar operates strictly as a digital media indexation platform and technical infrastructure relay for <Link href="/blog/best-iptv-players-2026" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">third-party IPTV player applications</Link>. TVoxar does not host, upload, record, or store audiovisual media files or broadcast streams on its web servers.
            </p>
            <p className="text-xs text-text-muted">
              All live television channels and media feeds accessible via playlist URLs originate from independent third-party telecommunication distributors publicly available across the open internet and playable on <Link href="/devices" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">all compatible devices</Link>. TVoxar has no operational control over external servers, content licenses, or stream transmissions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property Rights &amp; DMCA Compliance</h2>
            <p>
              TVoxar respects the intellectual property rights of copyright holders worldwide and complies with the provisions of the Digital Millennium Copyright Act (17 U.S.C. § 512). If you believe that an external media stream indexed via our playlist infrastructure infringes upon your copyrighted work, you or your authorized legal agent may submit a formal notification. Subscribers seeking account details should also review our <Link href="/terms-and-conditions" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">Terms and Conditions</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. DMCA Takedown Notice Requirements</h2>
            <p>
              To submit a valid infringement notice, please furnish our designated compliance agent with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the specific indexed stream URL or channel identifier to be reviewed and removed.</li>
              <li>Sufficient contact information, including your full name, organization, mailing address, telephone number, and email address.</li>
              <li>A statement of good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement made under penalty of perjury that the information in the notification is accurate.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Designated Copyright Contact</h2>
            <p>
              Please send all formal copyright notices and compliance inquiries directly to our legal desk or through our <Link href="/contact" className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium">official contact form</Link> at:
            </p>
            <div className="p-4 rounded-xl bg-background/60 border border-border text-xs font-mono text-primary-light">
              Email: {siteConfig.supportEmail}<br />
              Subject: Formal DMCA Copyright Notice - TVoxar IPTV
            </div>
            <p className="text-xs text-text-muted">
              Upon receipt of a valid and complete notification, TVoxar will promptly disable or remove access to the specified index link from our playlist servers in accordance with applicable telecommunication laws.
            </p>
          </section>

          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-text-muted">Related legal documentation:</span>
            <div className="flex items-center gap-4">
              <Link href="/terms-and-conditions" className="text-primary-light hover:underline font-semibold">
                Terms of Service &rarr;
              </Link>
              <Link href="/privacy-policy" className="text-primary-light hover:underline font-semibold">
                Privacy Policy &rarr;
              </Link>
              <Link href="/refund-policy" className="text-primary-light hover:underline font-semibold">
                Refund Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
