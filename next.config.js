/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["127.0.0.1", process.env.NEXT_IMAGE_ALLOWED_DOMAINS],
  },
  async redirects() {
    return process.env.NEXT_PUBLIC_ENABLE_STORIES
      ? [
          {
            source: "/stories",
            destination: "/",
            permanent: false,
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
