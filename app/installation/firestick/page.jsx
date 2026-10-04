import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CtaBanner from "../../../components/CtaBanner";
import { siteConfig } from "../../../lib/site-config";
import { installationGuides } from "../../../lib/installation-data";
import { Flame, Clock, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

const guide = installationGuides.find((g) => g.slug === "firestick");

export const metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${siteConfig.domain}/installation/firestick`,
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `${siteConfig.domain}/installation/firestick`,
  },
};

export default function FirestickGuidePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Installation Guides", href: "/installation" },
            { label: guide.device, href: `/installation/${guide.slug}` },
          ]}
        />

        {/* Header */}
        <div className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Fire TV OS Tutorial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {guide.title}
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Follow this step-by-step walkthrough to set up TVoxar IPTV on any Amazon Firestick model (Lite, 4K, 4K Max, or Fire TV Cube) using the Downloader application.
          </p>
        </div>

        {/* Quick Stats Pill Bar */}
        <div className="grid grid-cols-3 gap-4 my-8 p-4 rounded-xl bg-surface border border-border text-center">
          <div>
            <span className="text-[11px] text-text-muted block">Duration</span>
            <strong className="text-xs sm:text-sm text-white">{guide.estimatedTime}</strong>
          </div>
          <div>
            <span className="text-[11px] text-text-muted block">Difficulty</span>
            <strong className="text-xs sm:text-sm text-emerald-400">{guide.difficulty}</strong>
          </div>
          <div>
            <span className="text-[11px] text-text-muted block">Top Apps</span>
            <strong className="text-xs sm:text-sm text-primary-light">{guide.recommendedApps[0]}</strong>
          </div>
        </div>

        {/* Steps */}
        <div className="my-12 space-y-8">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-3">
            Step-by-Step Installation Instructions
          </h2>

          {guide.steps.map((step) => (
            <div
              key={step.number}
              className="bg-surface/80 border border-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {step.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {step.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-2 sm:pl-11 text-xs sm:text-sm text-text-secondary">
                {step.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <div className="my-12 bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">
              Firestick Troubleshooting &amp; Pro Tips
            </h2>
          </div>
          <div className="space-y-4">
            {guide.troubleshooting.map((t, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-background/60 border border-border">
                <h3 className="text-sm font-bold text-white mb-1.5">{t.problem}</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{t.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Guides Links */}
        <div className="my-12 p-6 rounded-2xl bg-surface border border-border">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">
            Other Device Setup Guides:
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/installation/samsung-lg-smart-tv"
              className="px-3 py-2 rounded-lg bg-background hover:bg-surface-hover text-text-secondary hover:text-white border border-border transition-colors"
            >
              Samsung &amp; LG Smart TV →
            </Link>
            <Link
              href="/installation/android"
              className="px-3 py-2 rounded-lg bg-background hover:bg-surface-hover text-text-secondary hover:text-white border border-border transition-colors"
            >
              Android TV &amp; Box →
            </Link>
            <Link
              href="/installation/apple-tv-ios"
              className="px-3 py-2 rounded-lg bg-background hover:bg-surface-hover text-text-secondary hover:text-white border border-border transition-colors"
            >
              Apple TV &amp; iOS →
            </Link>
            <Link
              href="/installation/windows-mac"
              className="px-3 py-2 rounded-lg bg-background hover:bg-surface-hover text-text-secondary hover:text-white border border-border transition-colors"
            >
              Windows &amp; Mac →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          title="Ready to Watch TVoxar on Firestick?"
          description="Get your TVoxar subscription credentials and stream within 5 minutes."
          buttonText="Choose Firestick Plan"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
