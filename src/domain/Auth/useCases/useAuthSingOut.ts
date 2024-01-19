import { useAuthCredentials } from '@services'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'

export function useAuthSignOut() {
	const { removeAuthCredentials } = useAuthCredentials()
	const mutation = useMutation<string, unknown, void>({
		mutationFn: authService.signOut,
		retry: false,
		onSuccess: () => {
			authService.removeToken()
			removeAuthCredentials()
		},
	})

	return {
		isLoading: mutation.isLoading,
		signOut: () => mutation.mutate(),
	}
}
