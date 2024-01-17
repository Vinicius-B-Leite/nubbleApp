import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'

import Router from './src/routes/routes'
import { theme } from './src/theme/theme'

const queryClient = new QueryClient()

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<SafeAreaProvider>
					<Router />
					<Toast />
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
