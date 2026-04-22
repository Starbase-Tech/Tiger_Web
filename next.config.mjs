// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',  // Change from 'standalone' to 'export'
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,  // Important for static exports
// }

// export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' <- DELETE this entire line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // trailingSlash: true  <- DELETE this too, it's only needed for static exports
}

export default nextConfig