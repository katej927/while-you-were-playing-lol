// const config = {
//   moduleNameMapper: {
//     'components/(.*)$': '<rootDir>/components/$1',
//     '/lib/(.*)$/': '<rootDir>/lib/$1',
//     '/lib/utils/(.*)$/': '<rootDir>/lib/utils',
//   },
// };

// export default config;

import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/components/$1',
    '/lib/(.*)$/': '<rootDir>/lib/$1',
    '/lib/utils/(.*)$/': '<rootDir>/lib/utils',
  },
};
export default config;
