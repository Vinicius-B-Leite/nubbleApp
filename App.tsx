import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'

import Router from './src/routes/routes'
import { theme } from './src/theme/theme'

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<Router />
				<Toast />
			</SafeAreaProvider>
		</ThemeProvider>
	)
}

export default App
