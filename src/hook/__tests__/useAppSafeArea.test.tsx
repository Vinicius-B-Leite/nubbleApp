import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { renderHook } from 'testUtils'

import { theme } from '@theme'

import { useAppSafeArea } from '../useAppSafeArea'

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets)
describe('useAppSafeArea', () => {
	it('when the safe area is less than minimunm, it returns the minimum', () => {
		mockedUseSafeAreaInsets.mockImplementationOnce(() => ({ top: 5, bottom: 5 } as EdgeInsets))
		const { result } = renderHook(() => useAppSafeArea())

		expect(result.current.top).toBe(theme.spacing.s24)
		expect(result.current.bottom).toBe(theme.spacing.s24)
	})

	it('when the safe area is grater than minimunm, it returns the grater', () => {
		mockedUseSafeAreaInsets.mockImplementationOnce(() => ({ top: 50, bottom: 50 } as EdgeInsets))
		const { result } = renderHook(() => useAppSafeArea())

		expect(result.current.top).toBe(50)
		expect(result.current.bottom).toBe(50)
	})
})
