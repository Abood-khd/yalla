/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uae.yallamotor.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
