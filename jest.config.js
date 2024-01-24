module.exports = {
	preset: 'react-native',
	collectCoverageFrom: ['src/{components,utils,hook,domain}/**/*.{ts,tsx}'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
	moduleDirectories: ['node_modules', './src/tests'],
	modulePathIgnorePatterns: ['.*/__mocks__/.*'],
}
