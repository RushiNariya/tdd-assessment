export default {
  // preset: 'ts-jest',
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    // Mocking CSS modules with identity-obj-proxy
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Map CSS/SCSS imports to identity-obj-proxy module
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/ test/__mocks__/styleMock.js',
  },
};
