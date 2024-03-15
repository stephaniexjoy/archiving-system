/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add handlebars-loader for .handlebars files
    config.module.rules.push({
      test: /\.handlebars$/,
      loader: "handlebars-loader",
    });

    // Add alias for handlebars
    config.resolve.alias = {
      ...config.resolve.alias,
      handlebars: "handlebars/dist/handlebars.js",
    };

    return config;
  },
};

module.exports = nextConfig;
