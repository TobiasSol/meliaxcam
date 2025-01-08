/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'supabasekong-rc4o00g48osg8okgk4wskwkk.145.223.103.147.sslip.io',
      'meliax-cam.de'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
}

export default nextConfig;