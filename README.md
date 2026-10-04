# TVoxar IPTV - Official Website

Next-generation, high-performance IPTV website built from scratch for **TVoxar IPTV** (`https://www.tvoxar.top/`).

## Project Overview

- **Brand:** TVoxar (or TVoxar IPTV)
- **Production Domain:** `https://www.tvoxar.top/`
- **Primary Technology:** Modern React & Next.js 14 (JavaScript / JSX only, zero TypeScript)
- **Styling:** Tailwind CSS with custom TVoxar design tokens, glassmorphism, and neon glow effects
- **SEO & Architecture:** 100% original content, structured data (Organization, WebSite, BreadcrumbList, FAQPage, Article), dynamic XML sitemap, and robots.txt.

## Design Tokens & Color Palette

- `--background`: `#080c16` (Deep obsidian)
- `--background-secondary`: `#0d1424` (Deep midnight slate)
- `--surface`: `#121b30` (Sleek card surface)
- `--surface-hover`: `#192542` (Interactive elevated surface)
- `--primary`: `#2563eb` (Electric royal blue)
- `--primary-light`: `#60a5fa` (Vivid blue highlight)
- `--secondary`: `#7c3aed` (Electric violet)
- `--accent`: `#06b6d4` (Cyan neon glow)
- `--text`: `#f8fafc` (Pure white)
- `--text-secondary`: `#cbd5e1` (Light silver)
- `--text-muted`: `#64748b` (Muted slate gray)
- `--border`: `rgba(255, 255, 255, 0.09)`
- `--success`: `#10b981`
- `--warning`: `#f59e0b`

## Route Architecture (33 Valid Routes)

### Core Commercial Pages
- `/` - Homepage (Hero, Anti-Freeze 9.3, Sports & Cinema Showcase, Supported Devices, How It Works, Pricing, FAQ, CTA)
- `/pricing` - Pricing Plans (1 Month, 3 Months, 6 Months, 12 Months passes, comparison, pricing FAQ)
- `/features` - Deep dive into Anti-Freeze 9.3 engine, 4K 60fps sports, EPG, VOD cinema, and technical specs
- `/devices` - Overview of supported hardware ecosystems with links to setup tutorials
- `/channels` - Categorized live sports, cinema, news, family, and international packages
- `/faq` - Comprehensive categorized knowledge base with FAQPage JSON-LD schema
- `/contact` - 24/7 Customer care desk with interactive inquiry form and support SLAs

### Device Installation Guides
- `/installation` - Central Installation Hub
- `/installation/firestick` - Amazon Fire TV Stick complete setup guide
- `/installation/samsung-lg-smart-tv` - Samsung Tizen & LG webOS Smart TV guide
- `/installation/android` - Android TV, Google TV, Nvidia Shield & mobile guide
- `/installation/apple-tv-ios` - Apple TV 4K, iPhone & iPad tvOS/iOS guide
- `/installation/windows-mac` - Windows PC & Mac desktop streaming guide
- `/installation/mag-box` - Infomir MAG box MAC address portal configuration
- `/installation/formuler-box` - Formuler Z Series & MYTVOnline guide
- `/installation/roku` - Roku TV screen-mirroring & AirPlay casting guide

### Blog Tutorials & Articles
- `/blog` - Blog archive with category navigation and featured guides
- `/blog/best-iptv-players-2026` - The 7 best IPTV players in 2026
- `/blog/how-to-fix-iptv-buffering-freezing` - 8 proven troubleshooting steps for zero buffering
- `/blog/iptv-smarters-pro-complete-setup-guide` - Smarters Pro Xtream Codes API guide
- `/blog/tivimate-premium-features-setup` - TiviMate quad multi-view and EPG guide
- `/blog/smart-tv-iptv-apps-comparison` - IBO Player vs Smart IPTV on Samsung/LG
- `/blog/best-vpn-for-iptv-streaming` - VPN optimization against ISP throttling

### Legal Pages
- `/privacy-policy` - Privacy Policy (zero data selling commitment)
- `/terms-and-conditions` - Terms & Conditions (single-screen and fair use policy)
- `/refund-policy` - Refund Policy & 7-Day Satisfaction Guarantee
- `/cookie-policy` - Cookie & browser storage policy
- `/disclaimer` - DMCA copyright compliance notice and takedown guidelines

### Technical & SEO Endpoints
- `/sitemap.xml` - Dynamic XML sitemap indexing all 28 canonical pages
- `/robots.txt` - Robots instructions pointing to canonical sitemap
- `/_not-found` - Custom branded 404 page

## Running the Website Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
