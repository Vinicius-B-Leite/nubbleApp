import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { render, fireEvent } from '@testing-library/react-native'

import { theme } from '@theme'

import { Button } from '../index'

describe('<Button />', () => {
	it('renders correctly', () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<Button title="Test" />
			</ThemeProvider>
		)
		expect(getByText('Test')).toBeTruthy()
	})

	it('is disabled when disabled prop is true', () => {
		const { getByText } = render(<Button title="Test" disabled />)
		expect(getByText('Test').props.accessibilityState.disabled).toBe(true)
	})

	it('shows ActivityIndicator when loading prop is true', () => {
		const { getByTestId } = render(<Button title="Test" loading />)
		expect(getByTestId('activity-indicator')).toBeTruthy()
	})

	it('renders the correct title', () => {
		const { getByText } = render(<Button title="Test" />)
		expect(getByText('Test')).toBeTruthy()
	})
})
