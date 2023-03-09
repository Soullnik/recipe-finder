module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.+\\.scss$': 'jest-css-modules-transform',
  },
};
