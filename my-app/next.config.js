const buildForDjango = process.argv.includes('build')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: false,
  assetPrefix: buildForDjango ? '/static' : undefined,
}

module.exports = nextConfig
