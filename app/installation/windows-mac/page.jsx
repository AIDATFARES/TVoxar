import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CtaBanner from "../../../components/CtaBanner";
import { siteConfig } from "../../../lib/site-config";
import { installationGuides } from "../../../lib/installation-data";
import { Monitor, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const guide = installationGuides.find((g) => g.slug === "windows-mac");

export const metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${siteConfig.domain}/installation/windows-mac`,
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `${siteConfig.domain}/installation/windows-mac`,
  },
};

export default function WindowsMacGuidePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Installation Guides", href: "/installation" },
            { label: guide.device, href: `/installation/${guide.slug}` },
          ]}
        />

        <div className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop &amp; Laptop Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {guide.title}
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Stream TVoxar on your desktop workstation or laptop running Windows 10/11 or macOS using IPTV Smarters Pro Desktop, VLC, or Web Player.
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
              Desktop Pro Tips
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

        <CtaBanner
          title="Watch TVoxar on Your PC or Mac"
          description="Start watching live sports feeds in windowed mode right on your desktop."
          buttonText="Get Your Pass"
          buttonHref="/pricing"
        />
      </div>
    </div>
  );
}
