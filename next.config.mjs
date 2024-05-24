/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-tel-input'],
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
