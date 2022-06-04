const nextTranslate = require('next-translate');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  ...nextTranslate(),
};

module.exports = nextConfig;
