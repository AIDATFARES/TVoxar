// TVoxar IPTV - Master Blog Articles Registry
// High-depth, authoritative 4,000+ word guides with modular data architecture

import { articleBestIptvPlayers } from "./articles/best-iptv-players-guide.js";
import { articleFixBuffering } from "./articles/fix-iptv-buffering-freezing-guide.js";
import { articleIptvSmartersPro } from "./articles/iptv-smarters-pro-setup-guide.js";
import { articleTivimate } from "./articles/tivimate-iptv-player-setup-guide.js";
import { articleSmartTv } from "./articles/best-smart-tv-iptv-apps-guide.js";
import { articleVpn } from "./articles/best-vpn-for-iptv-streaming-guide.js";

export const blogArticles = [
  articleBestIptvPlayers,
  articleFixBuffering,
  articleIptvSmartersPro,
  articleTivimate,
  articleSmartTv,
  articleVpn,
];

export function getArticleBySlug(slug) {
  return blogArticles.find((a) => a.slug === slug);
}
