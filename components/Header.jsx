"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Tv, Flame, Smartphone, Apple, Monitor, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "../lib/site-config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [guidesDropdown, setGuidesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setGuidesDropdown(false);
  }, [pathname]);

  const quickGuides = [
    { name: "Firestick Guide", href: "/installation/firestick", icon: Flame },
    { name: "Samsung & LG TV", href: "/installation/samsung-lg-smart-tv", icon: Tv },
    { name: "Android TV & Box", href: "/installation/android", icon: Smartphone },
    { name: "Apple TV & iOS", href: "/installation/apple-tv-ios", icon: Apple },
    { name: "Windows & Mac", href: "/installation/windows-mac", icon: Monitor },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* TVoxar Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="TVoxar Home">
            <div className="relative w-44 h-12 flex items-center">
              <Image
                src="/logo.svg"
                alt="TVoxar IPTV Logo"
                width={190}
                height={48}
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Home
            </Link>

            <Link
              href="/pricing"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/pricing" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Pricing Plans
            </Link>

            <Link
              href="/features"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/features" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Features
            </Link>

            <Link
              href="/devices"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/devices" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Devices
            </Link>

            {/* Installation Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesDropdown(true)}
              onMouseLeave={() => setGuidesDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/installation")
                    ? "text-primary-light font-semibold bg-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                }`}
                onClick={() => setGuidesDropdown(!guidesDropdown)}
              >
                Installation
                <ChevronDown className="w-4 h-4 ml-0.5 opacity-70" />
              </button>

              {guidesDropdown && (
                <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="bg-surface border border-border rounded-xl p-2 shadow-card backdrop-blur-xl">
                    <Link
                      href="/installation"
                      className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-primary-light hover:bg-surface-hover"
                    >
                      Installation Center Hub →
                    </Link>
                    <div className="h-px bg-border my-1" />
                    {quickGuides.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2.5 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4 text-primary-light" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/faq" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.startsWith("/blog") ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/contact" ? "text-primary-light font-semibold bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4" />
              <span>Get TVoxar Pass</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-2xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Subscription Plans
            </Link>
            <Link
              href="/features"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Features &amp; Tech
            </Link>
            <Link
              href="/devices"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Supported Devices
            </Link>

            {/* Mobile Installation Guides */}
            <div className="pt-2 pb-1">
              <span className="block px-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
                Installation Guides
              </span>
              <div className="mt-1 pl-2 space-y-1">
                <Link
                  href="/installation"
                  className="block px-3 py-2 text-sm font-semibold text-primary-light hover:bg-surface rounded-lg"
                >
                  All Setup Guides Hub
                </Link>
                {quickGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="block px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg"
                  >
                    {guide.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faq"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Blog &amp; Tutorials
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
            >
              Support &amp; Contact
            </Link>

            <div className="pt-4">
              <Link
                href="/pricing"
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-base text-white bg-gradient-to-r from-primary to-secondary shadow-glow"
              >
                <Zap className="w-5 h-5" />
                <span>Choose Your Subscription</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
