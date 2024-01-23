import React from 'react'

import { fireEvent, render } from 'testUtils'

import { IconName } from '../../Icon/Icon'
import { PasswordInput } from '../PasswordInput'

describe('<PasswordInput />', () => {
	it('renders correctly', () => {
		const { getByTestId } = render(<PasswordInput label="Test" />)
		expect(getByTestId('password-input')).toBeTruthy()
	})

	it('starts with secureTextEntry as true', () => {
		const { getByTestId } = render(<PasswordInput label="Test" />)
		const input = getByTestId('password-input')
		expect(input.props.secureTextEntry).toBe(true)
	})

	it('toggles secureTextEntry when the icon is pressed', () => {
		const { getByTestId } = render(<PasswordInput label="Test" />)
		const icon = getByTestId('eyeOff')

		fireEvent.press(icon)
		const input = getByTestId('password-input')
		expect(input.props.secureTextEntry).toBe(false)

		fireEvent.press(icon)
		expect(input.props.secureTextEntry).toBe(true)
	})

	it('changes icon when pressed', () => {
		const { getByTestId } = render(<PasswordInput label="Test" />)
		const eyeOffTestId: IconName = 'eyeOff'
		const eyeOnTestId: IconName = 'eyeOn'

		const icon = getByTestId(eyeOffTestId)

		fireEvent.press(icon)
		expect(icon.props.testID).toBe(eyeOnTestId)

		fireEvent.press(icon)
		expect(icon.props.testID).toBe(eyeOffTestId)
	})
})
