import { act, waitFor } from '@testing-library/react-native'
import { renderHook } from 'testUtils'

import { authService } from '../../authService'
import { useAuthSignIn } from '../useAuthSingIn'

import { mock } from './__mocks__/mock'

const mockSaveAuthCredentials = jest.fn()
jest.mock('@services', () => ({
	...jest.requireActual('@services'),
	useAuthCredentials: () => ({
		saveAuthCredentials: mockSaveAuthCredentials,
	}),
}))

describe('useAuthSingIn', () => {
	afterAll(() => {
		jest.clearAllMocks()
	})
	it('save credentials when success', async () => {
		jest.spyOn(authService, 'signIn').mockReturnValueOnce(Promise.resolve(mock.authCredentials))

		const { result } = renderHook(() => useAuthSignIn())

		await act(() => {
			result.current.signIn({ email: 'email@gmail.com', password: 'password' })
		})
		await waitFor(() => expect(result.current.isSuccess).toBe(true))
		expect(mockSaveAuthCredentials).toHaveBeenCalled()
	})
	it('calls onError function with message when error', async () => {
		jest.spyOn(authService, 'signIn').mockRejectedValueOnce(new Error('invalid user'))

		const onError = jest.fn()
		const { result } = renderHook(() => useAuthSignIn({ onError }))

		await act(() => {
			result.current.signIn({ email: 'email@gmail.com', password: 'password' })
		})
		await waitFor(() => expect(result.current.isSuccess).toBe(false))

		expect(onError).toHaveBeenCalledWith('invalid user')
	})
})
