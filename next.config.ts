import type { NextConfig } from 'next';

// Configuration for static generation strategy:
// - Home page (/) is revalidated every hour (ISR)
// - GitHub API data is cached and reused across requests
// - Future routes can use generateStaticParams for pre-rendering
// - See: https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**.png',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
