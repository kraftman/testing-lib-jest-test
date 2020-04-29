module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'spec.js'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '<rootDir>/*.spec.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js']
};