import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy - TVoxar IPTV",
  description:
    "TVoxar IPTV cookie policy. Learn how we utilize strictly essential cookies and anonymous session identifiers to operate our website and portal.",
  alternates: {
    canonical: `${siteConfig.domain}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookie-policy" }]} />

        <div className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <Cookie className="w-3.5 h-3.5" />
            <span>Browser Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TVoxar IPTV Cookie Policy
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: March 2026 • Production Domain: www.tvoxar.top
          </p>
        </div>

        <div className="my-10 bg-surface/80 border border-border rounded-2xl p-6 sm:p-10 text-text-secondary text-sm leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. What are Cookies?</h2>
            <p>
              Cookies are small alphanumeric text files deposited on your browser or device when you navigate web pages. They enable web applications to maintain your session state, authenticate authorized users, and remember basic browsing preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. How TVoxar Uses Cookies</h2>
            <p>
              We maintain a minimal cookie profile. We do not use intrusive cross-site tracking cookies or third-party marketing beacons. The cookies employed on <strong className="text-white">www.tvoxar.top</strong> fall into two categories:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-text-muted">
              <li><strong className="text-text-secondary">Strictly Essential Cookies:</strong> Necessary to navigate the site, protect forms from CSRF attacks, and enable checkout sessions.</li>
              <li><strong className="text-text-secondary">Functional Preference Cookies:</strong> Used to remember your UI preferences, such as selected device filter or language layout.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Managing and Disabling Cookies</h2>
            <p>
              You can block, disable, or delete cookies at any time via your browser settings (Chrome, Firefox, Safari, Edge). Please note that blocking essential cookies may impact checkout functionality on the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Questions Regarding Cookies</h2>
            <p>
              If you have inquiries about our cookie usage, contact us at <span className="font-mono text-primary-light">{siteConfig.supportEmail}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
