import { MetaDataPage, Page } from '@types'
import { renderHook, waitFor } from 'testUtils'

import { usePaginationList } from '../usePaginationList'

const page1 = ['item1', 'item2', 'item3']
const page2 = ['item4', 'item5', 'item6']

function getList(page: number): Promise<Page<string>> {
	const data = page === 1 ? page1 : page2

	const meta: MetaDataPage = {
		currentPage: page,
		firstPage: 1,
		lastPage: 2,
		hasNextPage: page === 1,
		hasPreviousPage: page === 2,
		perPage: 3,
		total: 6,
	}

	return Promise.resolve({ data, meta })
}

const mockgetList = jest.fn(getList)
describe('usePaginationList', () => {
	it('should called pages until hasNextPage is false', async () => {
		const { result } = renderHook(() =>
			usePaginationList({ queryKey: ['key'], fetch: mockgetList })
		)

		await waitFor(() => expect(result.current.dataList).toStrictEqual(page1))

		result.current.fetchNextPage()

		await waitFor(() => expect(result.current.dataList).toStrictEqual([...page1, ...page2]))

		result.current.fetchNextPage()

		await waitFor(() => expect(result.current.dataList).toStrictEqual([...page1, ...page2]))

		expect(mockgetList).toHaveBeenCalledTimes(2)
	})
})
