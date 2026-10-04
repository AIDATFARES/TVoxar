import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Zap, Mail, HelpCircle, CheckCircle2, Lock } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border pt-16 pb-12 text-sm text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-primary text-sm">Instant Setup</h4>
              <p className="text-xs text-text-muted">Automated login delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-primary text-sm">Anti-Freeze 9.3</h4>
              <p className="text-xs text-text-muted">Zero-stutter playback</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-primary text-sm">Encrypted Checkout</h4>
              <p className="text-xs text-text-muted">256-bit SSL secured</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-primary text-sm">24/7 Support</h4>
              <p className="text-xs text-text-muted">Always-on technical team</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-border">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="TVoxar Home">
              <Image
                src="/logo.svg"
                alt="TVoxar IPTV Logo"
                width={190}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="text-text-muted leading-relaxed text-sm pr-6">
              TVoxar IPTV is a high-performance streaming service delivering ultra-crisp 4K UHD and 60 FPS live sports, premium television networks, and video on demand to screens worldwide. Built on resilient global edge infrastructure powered by our proprietary Anti-Freeze 9.3 engine.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-text-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All TVoxar Streaming Edge Nodes Operational</span>
            </div>
          </div>

          {/* Col 1: Commercial & Platform */}
          <div>
            <h4 className="text-text-primary font-bold text-sm tracking-wider uppercase mb-4">
              Explore TVoxar IPTV
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-primary-light transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary-light transition-colors">
                  Features &amp; Anti-Freeze
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-primary-light transition-colors">
                  Supported Devices
                </Link>
              </li>
              <li>
                <Link href="/channels" className="hover:text-primary-light transition-colors">
                  Channel Line-Up
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-light transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-light transition-colors">
                  Contact Customer Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Setup Guides */}
          <div>
            <h4 className="text-text-primary font-bold text-sm tracking-wider uppercase mb-4">
              Installation Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/installation" className="hover:text-primary-light transition-colors font-medium text-text-primary">
                  All Setup Guides Hub
                </Link>
              </li>
              <li>
                <Link href="/installation/firestick" className="hover:text-primary-light transition-colors">
                  Amazon Fire TV Stick
                </Link>
              </li>
              <li>
                <Link href="/installation/samsung-lg-smart-tv" className="hover:text-primary-light transition-colors">
                  Samsung &amp; LG Smart TV
                </Link>
              </li>
              <li>
                <Link href="/installation/android" className="hover:text-primary-light transition-colors">
                  Android TV &amp; Box
                </Link>
              </li>
              <li>
                <Link href="/installation/apple-tv-ios" className="hover:text-primary-light transition-colors">
                  Apple TV, iPhone &amp; iPad
                </Link>
              </li>
              <li>
                <Link href="/installation/windows-mac" className="hover:text-primary-light transition-colors">
                  Windows PC &amp; Mac
                </Link>
              </li>
              <li>
                <Link href="/installation/mag-box" className="hover:text-primary-light transition-colors">
                  MAG Box &amp; STB Emulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Blog Tutorials & Legal */}
          <div>
            <h4 className="text-text-primary font-bold text-sm tracking-wider uppercase mb-4">
              Resources &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary-light transition-colors">
                  IPTV Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/blog/best-iptv-players-2026" className="hover:text-primary-light transition-colors">
                  Best IPTV Players 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-fix-iptv-buffering-freezing" className="hover:text-primary-light transition-colors">
                  Fix IPTV Freezing Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/best-vpn-for-iptv-streaming" className="hover:text-primary-light transition-colors">
                  Best VPNs for IPTV
                </Link>
              </li>
              <li className="pt-2 border-t border-border/50">
                <Link href="/privacy-policy" className="hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary-light transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-primary-light transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary-light transition-colors">
                  Disclaimer &amp; DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-text-muted space-y-4">
          <p className="leading-relaxed">
            <strong className="text-text-secondary">Disclaimer:</strong> TVoxar provides digital media indexation and streaming relay connectivity across compatible hardware. TVoxar does not host, broadcast, or claim intellectual copyright ownership of third-party media streams transmitted via external servers. Users are responsible for ensuring that their playback of public streams conforms with all local telecommunication and copyright statutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
            <p>
              © {new Date().getFullYear()} <strong className="text-text-secondary">TVoxar IPTV</strong>. All rights reserved. Official canonical domain: <span className="text-text-secondary font-mono">www.tvoxar.top</span>
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy-policy" className="hover:text-text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-text-primary transition-colors">
                Terms
              </Link>
              <Link href="/refund-policy" className="hover:text-text-primary transition-colors">
                Refunds
              </Link>
              <Link href="/disclaimer" className="hover:text-text-primary transition-colors">
                DMCA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
