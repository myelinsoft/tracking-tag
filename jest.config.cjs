module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js'],
  testMatch: ['**/test/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};