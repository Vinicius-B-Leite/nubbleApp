import React from 'react'
import { StyleSheet } from 'react-native'

import { fireEvent, render } from 'testUtils'

import { theme } from '@theme'

import { Button } from '../index'

describe('<Button />', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Button title="Test" />)
		expect(getByText('Test')).toBeTruthy()
	})
	it('calls onPress function when pressed', () => {
		const mockOnPress = jest.fn()
		const { getByText } = render(<Button title="Test" onPress={mockOnPress} />)

		const button = getByText('Test')
		fireEvent.press(button)
		expect(mockOnPress).toHaveBeenCalled()
	})

	it('is disabled when disabled prop is true', () => {
		const mockOnPress = jest.fn()
		const { getByText } = render(<Button title="Test" disabled onPress={mockOnPress} />)

		const button = getByText('Test')
		fireEvent.press(button)
		expect(mockOnPress).not.toHaveBeenCalled()
	})

	it('shows ActivityIndicator and disable button when loading prop is true', () => {
		const mockOnPress = jest.fn()
		const { getByTestId, queryByText } = render(
			<Button title="Test" loading onPress={mockOnPress} />
		)

		expect(queryByText('Test')).toBeNull()

		fireEvent.press(getByTestId('activity-indicator'))

		expect(mockOnPress).not.toHaveBeenCalled()
		expect(getByTestId('activity-indicator')).toBeTruthy()
	})

	it('renders the correct title', () => {
		const { getByText } = render(<Button title="Test" />)
		expect(getByText('Test')).toBeTruthy()
	})

	test('title should be gray when disabled', () => {
		const { getByText } = render(<Button title="Test" disabled />)
		const title = getByText('Test')

		const styles = StyleSheet.flatten(title.props.style)

		// expect(getByText('Test')).toHaveStyle({ color: theme.colors.gray2 })
		expect(styles.color).toBe(theme.colors.gray2)
	})
})
