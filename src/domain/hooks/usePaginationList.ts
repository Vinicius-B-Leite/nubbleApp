import { useEffect, useState } from 'react'

import { Page } from '@types'

type usePaginationListProps<T> = {
	fetch: (page: number) => Promise<Page<T>>
}

export function usePaginationList<DataType>({ fetch }: usePaginationListProps<DataType>) {
	const [postList, setPostList] = useState<DataType[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setErro] = useState<unknown>()
	const [page, setPage] = useState(1)
	const [hasNextPage, setHasNextPage] = useState(true)

	const fetchInitialData = async () => {
		setIsLoading(true)
		setErro(null)
		try {
			const { data, meta } = await fetch(1)

			if (meta.hasNextPage) {
				setPage(2)
				setHasNextPage(true)
			} else {
				setHasNextPage(false)
			}
			setPostList(data)
		} catch (e) {
			setErro(e)
		} finally {
			setIsLoading(false)
		}
	}
	const fetchNextPage = async () => {
		if (isLoading || !hasNextPage) return

		setIsLoading(true)
		setErro(null)
		try {
			const { data, meta } = await fetch(page)
			if (meta.hasNextPage) {
				setPage((p) => p + 1)
				setHasNextPage(true)
			} else {
				setHasNextPage(false)
			}
			setPostList((p) => [...p, ...data])
		} catch (e) {
			setErro(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchInitialData()
	}, [])

	return {
		postList,
		isLoading,
		error,
		fetchInitialData,
		refetch: fetchInitialData,
		fetchNextPage,
		hasNextPage,
	}
}
