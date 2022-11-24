/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextimageproject365120311-dev.s3.us-east-1.amazonaws.com',
        pathname: '/public/**',
      },
    ],

  },
}
