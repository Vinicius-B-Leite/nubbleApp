import { apiAdapter } from '@api'
import { Page } from '@types'

import { postCommentsApi } from './postCommentApi'
import { postCommentsAdapter } from './postCommentsAdpater'
import { PostComments } from './postCommentsTypes'

type Props = {
	page: number
	postId: number
}
async function getList({ page, postId }: Props): Promise<Page<PostComments>> {
	const response = await postCommentsApi.getList({ per_page: 10, post_id: postId, page })
	const data = response.data
	return {
		data: data.map(postCommentsAdapter.parseToPostComments),
		meta: apiAdapter.parseToMetaDatePage(response.meta),
	}
}

async function create(postId: number, message: string): Promise<PostComments> {
	const response = await postCommentsApi.create(postId, message)

	return postCommentsAdapter.parseToPostComments(response)
}

async function remove(commentId: number): Promise<string> {
	const response = await postCommentsApi.remove(commentId)

	return response.message
}

function isAllowToDeleteComment(
	comment: PostComments,
	userId: number,
	postAuthorId: number
): boolean {
	if (comment.author.id == userId) {
		return true
	}
	if (postAuthorId == userId) {
		return true
	}

	return false
}

export const postCommentsService = {
	getList,
	create,
	remove,
	isAllowToDeleteComment,
}
