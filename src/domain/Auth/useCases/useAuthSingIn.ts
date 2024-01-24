import { MutateOptions } from '@infra'
import { useAuthCredentials } from '@services'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'
import { AuthCredentials } from '../authTypes'

interface Variables {
	email: string
	password: string
}

export function useAuthSignIn(options?: MutateOptions<AuthCredentials>) {
	const { saveAuthCredentials } = useAuthCredentials()
	const mutation = useMutation<AuthCredentials, Error, Variables>({
		mutationFn: ({ email, password }) => authService.signIn(email, password),
		retry: false,
		cacheTime: 0,
		onError: (error) => {
			if (options?.onError) {
				options.onError(error.message)
			}
		},
		onSuccess: (authCredentiasl) => {
			saveAuthCredentials({
				token: authCredentiasl.token,
				user: authCredentiasl.user,
				refreshToken: authCredentiasl.refreshToken,
				tokenExpiresAt: authCredentiasl.tokenExpiresAt,
			})
		},
	})

	return {
		isLoading: mutation.isLoading,
		signIn: (variables: Variables) => mutation.mutate(variables),
		isSuccess: mutation.isSuccess,
	}
}
