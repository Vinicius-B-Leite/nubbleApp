import { useState } from 'react'

export type MutateOptions<TData> = {
	onSuccess?: (value: TData) => void
	onError?: (errorMessage: string) => void
	errorMessage?: string
}

/**
 *
 * @deprecated use useMutation from react query
 */
export function useMutation<TVariables, TData>(
	mutationFn: (props: TVariables) => Promise<TData>,
	options?: MutateOptions<TData>
) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const mutate = async (props: TVariables) => {
		try {
			setIsLoading(true)
			setError(false)
			const value = await mutationFn(props)
			if (options?.onSuccess) {
				options.onSuccess(value)
			}
		} catch (error) {
			if (options?.onError) {
				options.onError(options?.errorMessage || '')
			}
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		mutate,
		isLoading,
		error,
	}
}
