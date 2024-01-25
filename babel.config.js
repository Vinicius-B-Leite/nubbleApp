module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: '.',
				alias: {
					'@components': './src/components',
					'@hooks': './src/hook',
					'@routes': './src/routes',
					'@screens': './src/screen',
					'@theme': './src/theme',
					'@domain': './src/domain',
					'@api': './src/api',
					'@types': './src/types',
					'@utils': './src/utils',
					'@infra': './src/infra',
					'@services': './src/services',
					tests: './src/tests',
				},
			},
		],
	],
}
