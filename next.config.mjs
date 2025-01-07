/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'http://supabasekong-gk88gkscso84o4sc408kkkog.145.223.103.147.sslip.io/',
      'meliax.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  generateStaticParams: true,
}

export default nextConfig;