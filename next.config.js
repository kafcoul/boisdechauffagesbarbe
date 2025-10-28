/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development - enable for static export
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
