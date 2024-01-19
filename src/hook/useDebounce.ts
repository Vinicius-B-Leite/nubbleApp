import { useEffect, useState } from 'react'

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value value to debounce
 * @param delay delay in milliseconds `500ms`
 */
export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])

	return debouncedValue
}
