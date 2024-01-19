import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '@hooks'

import { authService } from '../authService'

type UseAuthIsAvalibeProps = {
	username: string
}

export function useAuthIsAvalibe({ username }: UseAuthIsAvalibeProps) {
	const debouncedUsername = useDebounce(username, 1500)

	const { data, isFetching } = useQuery({
		queryKey: [QueryKeys.IsUserNameAvailabl, debouncedUsername],
		queryFn: () => authService.isUserNameAvailable(debouncedUsername),
		retry: false,
		staleTime: 1000 * 20,
	})

	return {
		isAvalibe: !!data,
		isFetching,
	}
}
