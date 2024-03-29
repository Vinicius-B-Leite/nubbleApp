import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { userService } from '../userService'

export function useUserGetById(id: number) {
	const {
		data: user,
		isError,
		isLoading,
	} = useQuery({
		queryKey: [QueryKeys.UserGetById, id],
		queryFn: () => userService.getById(id),
		staleTime: 1000 * 30,
	})

	return {
		user,
		isError,
		isLoading,
	}
}
