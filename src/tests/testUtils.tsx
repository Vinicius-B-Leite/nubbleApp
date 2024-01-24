import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RenderHookOptions, RenderOptions, render, renderHook } from '@testing-library/react-native'

import { theme } from '@theme'

export const AllProviders = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				cacheTime: Infinity,
			},
		},
		logger: {
			log: console.log,
			warn: console.warn,
			error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
		},
	})
	// eslint-disable-next-line react/display-name
	return ({ children }: React.PropsWithChildren) => (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</QueryClientProvider>
		</NavigationContainer>
	)
}

function customRender<T>(
	component: React.ReactElement<T>,
	options?: Omit<RenderOptions, 'wrapper'>
) {
	return render(component, { wrapper: AllProviders(), ...options })
}
function customRenderHook<Result, Props>(
	callback: (props: Props) => Result,
	options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
	return renderHook(callback, { wrapper: AllProviders(), ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
export { customRenderHook as renderHook }
