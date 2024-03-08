/** @type {import('next').NextConfig} */

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  output:'standalone',
  reactStrictMode: false,
}

module.exports = nextConfig
