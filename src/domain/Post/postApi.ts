import { PageParams, PaginationAPIResponse, api } from '@api'

import { PostAPI } from './postTypes'

type PostResponse = PaginationAPIResponse<PostAPI>

async function getList(params: PageParams): Promise<PostResponse> {
	const url = 'user/post'

	const response = await api.get<PostResponse>(url, {
		params,
	})

	return response.data
}

export const postApi = {
	getList,
}
