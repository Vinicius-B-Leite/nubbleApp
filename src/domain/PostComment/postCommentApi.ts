import { PageParams, PaginationAPIResponse, api } from '@api'

import { PostCommentsAPIResponse } from './postCommentsTypes'

type PostCommentsResponse = PaginationAPIResponse<PostCommentsAPIResponse>

type Props = PageParams & {
	post_id: number
}

const PATH = 'user/post_comment'

async function getList(params: Props): Promise<PostCommentsResponse> {
	const response = await api.get<PostCommentsResponse>(PATH, {
		params,
	})

	return response.data
}

async function create(postId: number, message: string): Promise<PostCommentsAPIResponse> {
	const response = await api.post(PATH, {
		post_id: postId,
		message: message,
	})

	return response.data
}

async function remove(commentId: number): Promise<{ message: string }> {
	const response = await api.delete<{ message: string }>(`${PATH}/${commentId}`)

	return response.data
}

export const postCommentsApi = {
	getList,
	create,
	remove,
}
