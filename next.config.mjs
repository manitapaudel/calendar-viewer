/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add less loader to the webpack config
    config.module.rules.push({
      test: /\.less$/,
      use: [
        { loader: "style-loader" }, // Creates style nodes from JS strings
        { loader: "css-loader" }, // Translates CSS into CommonJS
        { loader: "less-loader" }, // Compiles Less to CSS
      ],
    });

    return config;
  },
};

export default nextConfig;
