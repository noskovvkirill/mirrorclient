/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const path = require('path')

// next.config.js
const nextConfig = {
  experimental: {
    scrollRestoration: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['mirror-media.imgix.net', 'images.mirror-media.xyz', 'res.cloudinary.com', '*.medium.com'],
  },
  // webpack: (config, options) => {
  //   // modify the `config` here
  //   if (options.isServer) {
  //     config.externals = ["react", ...config.externals];
  //   }
  //   config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
  //   config.resolve.alias['react-dom'] = path.resolve(__dirname, '.', 'node_modules', 'react-dom');
  //   return config;
  // },
};
// more 


module.exports = withVanillaExtract(nextConfig)