// export default {
//   preset: 'ts-jest/presets/js-with-babel',
//   transform: {
//     '^.+\\.(ts|tsx|js|jsx)$': [
//       'ts-jest',
//       {
//         useESM: true
//       }
//     ]
//   },
//   transformIgnorePatterns: ['/node_modules/(?!styled-components/)'],
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)$':
//       '<rootDir>/__mocks__/fileMock.js',
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
//   },
//   extensionsToTreatAsEsm: ['.ts', '.tsx']
// }
export default {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
}
