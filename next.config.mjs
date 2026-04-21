/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // ADD THIS - critical for Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig