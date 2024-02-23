import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const nextConfig = {
  env: {
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  },
};

const webpackConfig = (config, { isServer }) => {
  if (!isServer) {
    config.node = {
      fs: 'empty'
    };
  }

  return config;
};

export { nextConfig, webpackConfig };
