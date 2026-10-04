/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/best-iptv-players-2026',
        destination: '/blog/best-iptv-players-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-fix-iptv-buffering-freezing',
        destination: '/blog/fix-iptv-buffering-freezing-guide',
        permanent: true,
      },
      {
        source: '/blog/iptv-smarters-pro-complete-setup-guide',
        destination: '/blog/iptv-smarters-pro-setup-guide',
        permanent: true,
      },
      {
        source: '/blog/tivimate-premium-features-setup',
        destination: '/blog/tivimate-iptv-player-setup-guide',
        permanent: true,
      },
      {
        source: '/blog/smart-tv-iptv-apps-comparison',
        destination: '/blog/best-smart-tv-iptv-apps-guide',
        permanent: true,
      },
      {
        source: '/blog/best-vpn-for-iptv-streaming',
        destination: '/blog/best-vpn-for-iptv-streaming-guide',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
