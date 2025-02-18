/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'supabasekong-rc4o00g48osg8okgk4wskwkk.145.223.103.147.sslip.io',
      'meliax-cam.de',
      'assets.meliax-cam.de',
      'your-domain.com'
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/:all*(mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig;