/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/como-instalar-iptv-smarters-pro-smart-tv-espana',
        destination: '/blog/guia-instalar-iptv-smarters-pro-smart-tv',
        permanent: true,
      },
      {
        source: '/blog/mejor-iptv-espana-guia-completa',
        destination: '/blog/mejor-iptv-espana-comparativa',
        permanent: true,
      },
      {
        source: '/blog/tivimate-espana-configuracion-guia-paso-a-paso',
        destination: '/blog/guia-configuracion-tivimate-espana',
        permanent: true,
      },
      {
        source: '/blog/solucionar-problemas-buffering-cortes-iptv',
        destination: '/blog/como-solucionar-buffering-cortes-iptv',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
