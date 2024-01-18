import { MutateOptions } from '@infra'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'
import { AuthCredentials } from '../authTypes'

interface Variables {
	email: string
	password: string
}

export function useAuthSignIn(options?: MutateOptions<AuthCredentials>) {
	const mutation = useMutation<AuthCredentials, Error, Variables>({
		mutationFn: ({ email, password }) => authService.signIn(email, password),
		retry: false,
		onError: (error) => {
			if (options?.onError) {
				options.onError(error.message)
			}
		},
		onSuccess: (authCredentiasl) => {
			authService.updateToken(authCredentiasl.token)
		},
	})

	return {
		isLoading: mutation.isLoading,
		signIn: (variables: Variables) => mutation.mutate(variables),
	}
}
