import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CtaBanner from "../../../components/CtaBanner";
import { siteConfig } from "../../../lib/site-config";
import { installationGuides } from "../../../lib/installation-data";
import { Tv, Clock, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

const guide = installationGuides.find((g) => g.slug === "samsung-lg-smart-tv");

export const metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${siteConfig.domain}/installation/samsung-lg-smart-tv`,
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `${siteConfig.domain}/installation/samsung-lg-smart-tv`,
  },
};

export default function SmartTvGuidePage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Installation Guides", href: "/installation" },
            { label: guide.device, href: `/installation/${guide.slug}` },
          ]}
        />

        <div className="mt-3 mb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>Tizen OS &amp; webOS Tutorial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {guide.title}
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Learn how to stream TVoxar directly on your Samsung Tizen or LG webOS Smart TV using IBO Player Pro or Smart IPTV without external HDMI dongles. Before starting, activate your{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              TVoxar subscription pass
            </Link>{" "}
            and read our{" "}
            <Link
              href="/blog/smart-tv-iptv-apps-comparison"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              Smart TV IPTV apps comparison
            </Link>
            .
          </p>
        </div>

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

        <div className="my-12 bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">
              Smart TV Troubleshooting
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
          <p className="text-xs text-text-muted pt-2 border-t border-border/80">
            Having trouble uploading your TV MAC address? Reach out to our{" "}
            <Link href="/contact" className="text-primary-light hover:underline font-semibold">
              24/7 technical team
            </Link>{" "}
            for direct portal activation, or consider pairing with an{" "}
            <Link href="/installation/firestick" className="text-primary-light hover:underline font-semibold">
              Amazon Firestick
            </Link>{" "}
            for maximum app flexibility.
          </p>
        </div>

        <CtaBanner
          title="Ready to Stream on Your Smart TV?"
          description="Get your TVoxar pass credentials and upload your playlist to your Smart TV today."
          buttonText="View Subscription Plans"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
