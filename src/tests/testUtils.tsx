import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { RenderOptions, render } from '@testing-library/react-native'

import { theme } from '@theme'

const AllProviders = ({ children }: React.PropsWithChildren) => {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</NavigationContainer>
	)
}

function customRender<T>(
	component: React.ReactElement<T>,
	options?: Omit<RenderOptions, 'wrapper'>
) {
	return render(component, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
