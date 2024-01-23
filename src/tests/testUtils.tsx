import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { RenderOptions, render } from '@testing-library/react-native'

import { theme } from '@theme'

const AllProviders = ({ children }: React.PropsWithChildren) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function customRender<T>(
	component: React.ReactElement<T>,
	options?: Omit<RenderOptions, 'wrapper'>
) {
	return render(component, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
