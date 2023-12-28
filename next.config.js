/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/xyd945/xyd.me.gui",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
