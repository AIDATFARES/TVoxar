import Link from "next/link";
import { Tv, ArrowLeft, Home, Zap } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | TVoxar IPTV",
  description: "The requested page could not be located on TVoxar IPTV. Please check the URL or return to our homepage.",
};

export default function NotFound() {
  return (
    <div className="pt-20 pb-16 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mx-auto">
          <Tv className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Channel or Page Not Found
        </h1>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          The link you followed may have moved, expired, or been entered incorrectly. Explore our main sections below to find what you are looking for.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-primary hover:bg-primary-light transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-text-primary bg-surface hover:bg-surface-hover border border-border transition-colors"
          >
            <Zap className="w-4 h-4 text-primary-light" />
            <span>Subscription Plans</span>
          </Link>
          <Link
            href="/installation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-text-secondary hover:text-white border border-border transition-colors"
          >
            <span>Installation Guides</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
