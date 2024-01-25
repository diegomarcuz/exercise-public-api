module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '(test|spec).tsx?$',
  moduleNameMapper: {
    '^routes(.*)$': '<rootDir>/src/routes/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^services(.*)$': '<rootDir>/src/services/$1',
    '^components(.*)$': '<rootDir>/src/components/$1',
  },
};
