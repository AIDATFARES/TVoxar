"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import { siteConfig } from "../../lib/site-config";
import { Mail, MessageCircle, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    device: "Firestick",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact & Support", href: "/contact" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-4 mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            24/7 Priority IPTV Helpdesk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact TVoxar IPTV Customer Support
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Need technical help with your IPTV player installation, activation credentials, custom multi-screen setups, or renewal queries? TVoxar IPTV customer care specialists are standing by 24 hours a day, 7 days a week. You can also explore our{" "}
            <Link
              href="/installation"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              installation tutorials
            </Link>
            , browse our{" "}
            <Link
              href="/faq"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              knowledge base FAQ
            </Link>
            , or choose a plan on our{" "}
            <Link
              href="/pricing"
              className="text-white hover:text-primary-light underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
            >
              pricing page
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Column: Direct channels & Response SLA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">Direct TVoxar IPTV Support Channels</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-background/60 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Support Email</span>
                    <strong className="text-sm text-white font-mono">{siteConfig.supportEmail}</strong>
                    <span className="text-[11px] text-text-muted block mt-0.5">Average response: Under 15 mins</span>
                  </div>
                </div>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-background/60 border border-border hover:border-[#25D366]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Direct WhatsApp Chat</span>
                    <strong className="text-sm text-white">{siteConfig.whatsapp}</strong>
                    <span className="text-[11px] text-[#25D366] block mt-0.5">Instant live chat available</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-background/60 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Instant Messaging / Telegram</span>
                    <strong className="text-sm text-white">{siteConfig.telegram}</strong>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">Online for active subscribers</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-background/60 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Support Availability</span>
                    <strong className="text-sm text-white">{siteConfig.supportHours}</strong>
                    <span className="text-[11px] text-text-muted block mt-0.5">Operating 365 days a year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface/50 border border-border rounded-2xl p-6 text-xs text-text-muted space-y-2">
              <div className="flex items-center gap-2 text-text-secondary font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verification &amp; Privacy Notice</span>
              </div>
              <p>
                TVoxar will never ask for your account password or payment card security code (CVV) in emails or chat messages. All renewals take place strictly through our official website portal. For more information, please review our{" "}
                <Link href="/privacy-policy" className="text-primary-light hover:underline font-semibold">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-and-conditions" className="text-primary-light hover:underline font-semibold">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Ticket Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-card">
              <h2 className="text-xl font-bold text-white mb-6">Submit a TVoxar IPTV Support Request</h2>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Inquiry Dispatched Successfully!</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name || "Subscriber"}</strong>. A TVoxar technical agent has been assigned to your ticket and will respond to <span className="font-mono text-primary-light">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-primary-light hover:underline font-semibold pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your Name / Subscriber Handle
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-white placeholder-text-muted"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your Contact Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-white placeholder-text-muted"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Your Primary Streaming Device
                      </label>
                      <select
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-white"
                      >
                        <option value="Firestick">Amazon Fire TV Stick</option>
                        <option value="Samsung LG">Samsung / LG Smart TV</option>
                        <option value="Android">Android TV / Google TV / Nvidia Shield</option>
                        <option value="Apple">Apple TV / iPhone / iPad</option>
                        <option value="Windows Mac">Windows PC / Mac</option>
                        <option value="MAG Formuler">MAG Box / Formuler Z</option>
                        <option value="Other">Other / Multiple Screens</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Topic / Request Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-white"
                      >
                        <option value="New Subscription">Order / Activation Question</option>
                        <option value="Device Setup">Device Setup &amp; Configuration</option>
                        <option value="Multi-Screen">Multi-Screen Pass Request</option>
                        <option value="Technical Support">Technical / Stream Troubleshooting</option>
                        <option value="Billing Renewal">Billing &amp; Pass Renewal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                      Your Message or Setup Questions
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include details about your device model, IPTV app used, or questions about your pass..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm text-white placeholder-text-muted resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-glow transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit IPTV Support Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
