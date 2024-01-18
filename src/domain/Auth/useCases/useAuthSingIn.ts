import { MutateOptions } from '@infra'
import { useAuthCredentialsZustand } from '@services'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'
import { AuthCredentials } from '../authTypes'

interface Variables {
	email: string
	password: string
}

export function useAuthSignIn(options?: MutateOptions<AuthCredentials>) {
	const saveAuthCredentials = useAuthCredentialsZustand((state) => state.saveAuthCredentials)
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
			authService.updateToken(authCredentiasl.token)
			saveAuthCredentials({ token: authCredentiasl.token, user: authCredentiasl.user })
		},
	})

	return {
		isLoading: mutation.isLoading,
		signIn: (variables: Variables) => mutation.mutate(variables),
	}
}
