/* eslint-disable prefer-const */
import { baseURL, PaginationAPIResponse } from '@api'
import { POST_COMMENT_PATH, PostCommentsAPIResponse } from '@domain'
import { http, HttpResponse } from 'msw'

import { mockedData } from './mock'

let inMemoryResponse = { ...mockedData.mockedPostCommentResponse }

const URL = `${baseURL}${POST_COMMENT_PATH}`
export const postCommentsHandlers = [
	http.get(URL, async () => {
		const response: PaginationAPIResponse<PostCommentsAPIResponse> = inMemoryResponse

		return HttpResponse.json(response, { status: 200 })
	}),
	http.post<any, { post_id: number; message: string }>(URL, async ({ request }) => {
		const body = await request.json()
		const newPostComment: PostCommentsAPIResponse = {
			...mockedData.postCommentAPI,
			id: 999,
			post_id: body.post_id,
			message: body.message,
		}
		inMemoryResponse.data = [newPostComment, ...inMemoryResponse.data]
		inMemoryResponse.meta = {
			...inMemoryResponse.meta,
			total: inMemoryResponse.meta.total + 1,
		}
		return HttpResponse.json(newPostComment, { status: 201 })
	}),
]
