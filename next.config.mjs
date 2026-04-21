/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Change from 'standalone' to 'export'
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,  // Important for static exports
}

export default nextConfig