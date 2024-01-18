import { useAuthCredentialsZustand } from '@services'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'

export function useAuthSignOut() {
	const removeAuthCredentials = useAuthCredentialsZustand((state) => state.removeAuthCredentials)
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
