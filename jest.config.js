module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  testRegex: '(test|spec).tsx?$',
  setupFiles: ['<rootDir>/src/test/setEnvVars.js'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/test'],
  moduleNameMapper: {
    '^routes(.*)$': '<rootDir>/src/routes/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^services(.*)$': '<rootDir>/src/services/$1',
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^config(.*)$': '<rootDir>/src/config/$1',
    '^test(.*)$': '<rootDir>/src/test/$1',
    '^utils(.*)$': '<rootDir>/src/utils/$1',
  },
};
