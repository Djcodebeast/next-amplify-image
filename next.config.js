/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextimageproject365120311-dev.s3.amazonaws.com',
      },
    ],

    domains: ['https://nextimageproject365120311-dev.s3.amazonaws.com']

  },
}
