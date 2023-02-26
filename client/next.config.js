/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jaejikton-3team.s3.ap-northeast-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/cake",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
