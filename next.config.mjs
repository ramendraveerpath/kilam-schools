/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUBSPOT_ACCESS_TOKEN: process.env.HUBSPOT_ACCESS_TOKEN,
  },
};

export default nextConfig;
