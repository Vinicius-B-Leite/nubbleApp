import { PageParams, PaginationAPIResponse, api } from '@api'

import { PostCommentsAPIResponse } from './postCommentsTypes'

type PostCommentsResponse = PaginationAPIResponse<PostCommentsAPIResponse>

type Props = PageParams & {
	post_id: number
}

async function getList(params: Props): Promise<PostCommentsResponse> {
	const url = 'user/post_comment'

	const response = await api.get<PostCommentsResponse>(url, {
		params,
	})

	return response.data
}

async function create(postId: number, message: string): Promise<PostCommentsAPIResponse> {
	const response = await api.post('user/post_comment', {
		post_id: postId,
		message: message,
	})

	return response.data
}

export const postCommentsApi = {
	getList,
	create,
}
