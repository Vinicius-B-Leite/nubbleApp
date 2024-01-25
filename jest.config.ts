import type { Config } from 'jest'

const config: Config = {
	verbose: true,
	preset: 'react-native',
	collectCoverageFrom: ['src/{components,utils,hook,domain,screen}/**/*.{ts,tsx}'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules', './src/tests'],
	modulePathIgnorePatterns: ['.*/__mocks__/.*'],
	setupFiles: ['<rootDir>/src/tests/jestSetup.ts'],
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
	],
}

export default config
