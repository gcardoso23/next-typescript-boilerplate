/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
