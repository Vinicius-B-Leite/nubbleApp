import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '@hooks'

import { authService } from '../authService'

type UseAuthIsAvalibeProps = {
	username: string
	enabled?: boolean | undefined
}

export function useAuthIsAvalibe({ username, enabled }: UseAuthIsAvalibeProps) {
	const debouncedUsername = useDebounce(username, 1500)

	const { data, isFetching } = useQuery({
		queryKey: [QueryKeys.IsUserNameAvailabl, debouncedUsername],
		queryFn: () => authService.isUserNameAvailable(debouncedUsername),
		retry: false,
		staleTime: 1000 * 20,
		enabled,
	})

	const isDebouncing = debouncedUsername !== username
	return {
		isAvalibe: !!data,
		isFetching: isDebouncing || isFetching,
	}
}
