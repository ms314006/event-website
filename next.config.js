/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
