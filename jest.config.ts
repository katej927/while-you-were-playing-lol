import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/components/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
  },
};
export default config;
