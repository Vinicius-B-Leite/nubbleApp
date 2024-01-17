import { useEffect, useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { Page } from '@types'

type usePaginationListProps<T> = {
	fetch: (page: number) => Promise<Page<T>>
	queryKey: unknown[]
}

export type usePaginationListResult<T> = {
	dataList: T[]
	isLoading: boolean
	isError: boolean
	refetch: () => void
	fetchNextPage: () => void
	hasNextPage: boolean
}
export function usePaginationList<DataType>({
	queryKey,
	fetch,
}: usePaginationListProps<DataType>): usePaginationListResult<DataType> {
	const [dataList, setDataList] = useState<DataType[]>([])

	const query = useInfiniteQuery({
		queryKey,
		queryFn: ({ pageParam = 1 }) => fetch(pageParam),
		getNextPageParam: ({ meta }) => (meta.hasNextPage ? meta.currentPage + 1 : undefined),
	})
	useEffect(() => {
		if (query.data && query.data?.pages) {
			const newList = query.data.pages.map((p) => p.data)

			setDataList(newList.flat())
		}
	}, [query.data])
	return {
		dataList,
		isLoading: query.isLoading,
		isError: query.isError,
		refetch: query.refetch,
		fetchNextPage: query.fetchNextPage,
		hasNextPage: !!query.hasNextPage,
	}
}
