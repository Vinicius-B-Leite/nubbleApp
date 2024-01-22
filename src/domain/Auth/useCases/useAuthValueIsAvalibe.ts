import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '@hooks'

import { authService } from '../authService'

type UseAuthIsAvalibeProps = {
	value: string
	enabled?: boolean | undefined
	avalibeFn: (value: string) => Promise<boolean>
	queryKey: unknown
}

export function useAuthIsAvalibe({ value, enabled, avalibeFn, queryKey }: UseAuthIsAvalibeProps) {
	const debouncedValue = useDebounce(value, 1500)

	const { data, isFetching } = useQuery({
		queryKey: [queryKey, debouncedValue],
		queryFn: () => avalibeFn(debouncedValue),
		retry: false,
		staleTime: 1000 * 20,
		enabled,
	})

	const isDebouncing = debouncedValue !== value
	return {
		isAvalibe: !!data,
		isUnvalibe: data === false,
		isFetching: isDebouncing || isFetching,
	}
}

export function useUsernameIsAvalibe({
	username,
	enabled,
}: {
	username: string
	enabled?: boolean | undefined
}) {
	const { isAvalibe, isFetching, isUnvalibe } = useAuthIsAvalibe({
		value: username,
		enabled: enabled,
		avalibeFn: () => authService.isUserNameAvailable(username),
		queryKey: [QueryKeys.IsUserNameAvailabl],
	})

	return {
		isAvalibe,
		isFetching,
		isUnvalibe,
	}
}

export function useEmailIsAvalibe({
	email,
	enabled,
}: {
	email: string
	enabled?: boolean | undefined
}) {
	const { isAvalibe, isFetching, isUnvalibe } = useAuthIsAvalibe({
		value: email,
		enabled: enabled,
		avalibeFn: () => authService.isEmailAvailable(email),
		queryKey: [QueryKeys.isEmailAvalible],
	})

	return {
		isAvalibe,
		isFetching,
		isUnvalibe,
	}
}
