import { PostComments, PostCommentsAPIResponse } from './postCommentsTypes'

function parseToPostComments(postCommentsApi: PostCommentsAPIResponse): PostComments {
	return {
		author: {
			id: String(postCommentsApi.user.id),
			name: postCommentsApi.user.full_name,
			profileURL: postCommentsApi.user.profile_url,
			userName: postCommentsApi.user.username,
		},

		id: String(postCommentsApi.id),
		createdAt: postCommentsApi.created_at,
		message: postCommentsApi.message,
	}
}

export const postCommentsAdapter = { parseToPostComments }
